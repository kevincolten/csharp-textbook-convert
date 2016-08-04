const request = require('request');
const cheerio = require('cheerio');
const toMarkdown = require('to-markdown');
const fs = require('fs-extra');
var lesson = -1;
fs.writeFileSync('SUMMARY.md', '# Summary\n\n');

request.get('https://en.wikibooks.org/w/index.php?title=C_Sharp_Programming/Print_version&printable=yes', (err, res, body) => {
  const $ = cheerio.load(body);
  $('#mw-content-text').children().each(function() {
    switch(this.name) {
      case 'h1':
        lesson++;
        file = `Lesson${lesson}.md`;
        file = lesson === 0 ? 'README.md' : file
        fs.appendFileSync('SUMMARY.md', `* [${$(this).text()}](${file})\n`);
        fs.writeFileSync(file, `# ${$(this).text()} \n\n`);
        break;
      case 'h2':
        fs.appendFileSync(file, `## ${$(this).text()} \n\n`);
        break;
      case 'h3':
        fs.appendFileSync(file, `### ${$(this).text()} \n\n`);
        break;
      case 'h4':
        fs.appendFileSync(file, `#### ${$(this).text()} \n\n`);
        break;
      case 'h5':
        fs.appendFileSync(file, `##### ${$(this).text()} \n\n`);
        break;
      case 'h6':
        fs.appendFileSync(file, `###### ${$(this).text()} \n\n`);
        break;
      case 'pre':
        fs.appendFileSync(file, '```' + $(this).text() + '```\n\n');
        break;
      case 'p':
        fs.appendFileSync(file, $(this).text() + '\n\n');
        break;
      case 'div':
        if ($(this).children().first().text()) {
          fs.appendFileSync(file, '```csharp' + $(this).children().first().text() + '```\n\n');
        }
        break;
      case 'table':
        var myTable = $(this);
        var thead = myTable.find("thead");
        var tbody = myTable.find("thead");
        var thRows =  myTable.find("tr:has(th)");
        var tdRows = myTable.find("tr:has(td)");

        if (thead.length===0){  //if there is no thead element, add one.
          thead = $("<thead></thead>").appendTo(myTable);
        }

        if (tbody.length===0){  //if there is no tbody element, add one.
          tbody = $("<tbody></tbody>").appendTo(myTable);
        }

        thRows.clone(true).appendTo("thead");
        thRows.remove();

        tdRows.clone(true).appendTo('tbody')
        tdRows.remove();

        fs.appendFileSync(file, toMarkdown('<table>' + myTable.html() + '</table>', { gfm: true }) + '\n\n');
        break;
      case 'ol':
        fs.appendFileSync(file, toMarkdown('<ol>' + $(this).html() + '</ol>', { gfm: true }) + '\n\n');
        break;
      case 'ul':
        fs.appendFileSync(file, toMarkdown('<ul>' + $(this).html() + '</ul>', { gfm: true }) + '\n\n');
        break;
      case 'dl':
        fs.appendFileSync(file, toMarkdown('<dl>' + $(this).html() + '</dl>', { gfm: true }) + '\n\n');
        break;
      default:
        console.log(this.name);
    }
  });
});
