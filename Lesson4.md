# The .NET Framework 

.NET Framework is a common environment for building, deploying, and running Web Services, Web Applications, Windows Services and Windows Applications. The .NET Framework contains common class libraries - like ADO.NET, ASP.NET and Windows Forms - to provide advanced standard services that can be integrated into a variety of computer systems.

## Introduction 

In June 2000 Microsoft released both the .NET platform and a new program language called C#. C# is a general-purpose OOP language designed to give optimum simplicity, expansiveness, and performance. Its syntax is very similar to Java, with the major difference being that all variable types are derived from a common ancestor class.

C# is a language in itself. It can perform mathematical and logical operations, variable assignment and other expected traits of a programming language. This in itself is not flexible enough for more complex applications. At some stage, the developer will want to interact with the host system whether it be reading files or downloading content from the Internet.

The .NET framework is a toolset developed for the Windows platform to allow the developer to interact with the host system or any external entity whether it be another process, or another computer. The .NET platform is a Windows platform-specific implementation. Other operating systems have their own implementations due to the differences in the operating systems I/O management, security models and interfaces.

## Background 

*   Originally called NGWS (Next Generation Windows Services).
*   .NET does not run _in_ any browser. It is a _runtime_ language ([Common Language Runtime](//en.wikipedia.org/wiki/Common_Language_Runtime "w:Common Language Runtime")) like the Java runtime. By contrast, [Microsoft Silverlight](//en.wikipedia.org/wiki/Microsoft_Silverlight "w:Microsoft Silverlight") _does_ run in a browser.
*   .NET is based on the newest Web standards.
*   .NET is built on the following Internet standards:
    *   HTTP, the communication protocol between Internet Applications
    *   SOAP, the standard format for requesting Web Services
    *   UDDI, the standard to search and discover Web Services
    *   XML, the format for exchanging data between Internet Applications



## Console Programming 

### Input 

Input can be gathered in a similar method to outputing data using the Read() and ReadLine methods of that same System.Console class:

```csharp
using System;
public class ExampleClass
{
    public static void Main()
    {
        Console.WriteLine("Greetings!  What is your name?");
        Console.Write("My name is: ");
        string name = Console.ReadLine();

        Console.WriteLine("Nice to meet you, " + name);
        Console.ReadKey();
    }
}
```

The above program requests the user's name and displays it back. The final Console.ReadKey() waits for the user to enter a key before exiting the program.

### Output 

The example program below shows a couple of ways to output text:

```csharp
using System;

public class HelloWorld
{
    public static void Main()
    {
        Console.WriteLine("Hello World!");             // relies on "using System;"
        Console.Write("This is...");
        Console.Write(" my first program!\n");
        System.Console.WriteLine("Goodbye World!");    // no "using" statement required
    }
}
```

The above code displays the following text:

```
Hello World!
This is... my first program!
Goodbye World!
```

That text is output using the System.Console class. The using statement at the top allows the compiler to find the Console class without specifying the System namespace each time it is used.

The middle lines use the Write() method, which does not automatically create a new line. To specify a new line, we can use the sequence backslash-n (\n). If for whatever reason we wanted to really show the \n character instead, we add a second backslash (\\n). The backslash is known as the escape character in C# because it is not treated as a normal character, but allows us to encode certain special characters (like a new line character).

### Error 

The Error output is used to divert error specific messages to the console. To a novice user this may seem fairly pointless, as this achieves the same as Output (as above). If you decide to write an application that runs another application (for example a scheduler), you may wish to monitor the output of that program - more specifically, you may only wish to be notified only of the errors that occur. If you coded your program to write to the Console.Error stream whenever an error occurred, you can tell your scheduler program to monitor this stream, and feedback any information that is sent to it. Instead of the Console appearing with the Error messages, your program may wish to log these to a file.

You may wish to revisit this after studying Streams and after learning about the Process class.

### Command line arguments 

Command line arguments are values that are passed to a console program before execution. For example, the Windows command prompt includes a copy command that takes two command line arguments. The first argument is the original file and the second is the location or name for the new copy. Custom console applications can have arguments as well. c sharp is object based programming language. .net framework is a Microsoft programming language is used to create web application,console application, mobile application.

```csharp
using Sys
{
    public static void Main(string[] args)
    Console.WriteLine("Last Name: " + args[1]);
    Console.Read();
}
```

If the above code is compiled to a program called username.exe, it can be executed from the command line using two arguments, e.g. "Bill" and "Gates":

```
C:\>username.exe Bill Gates
```

Notice how the Main() method above has a string array parameter. The program assumes that there will be two arguments. That assumption makes the program unsafe. If it is run without the expected number of command line arguments, it will crash when it attempts to access the missing argument. To make the program more robust, we can check to see if the user entered all the required arguments.

```csharp
using System;

public class Test
{
    public static void Main(string[] args)
    {
        if(args.Length >= 1)
        Console.WriteLine(args[0]);
        if(args.Length >= 2)
        Console.WriteLine(args[1]);
    }
}
```

Try running the program with only entering your first name or no name at all. The args.Length property returns the total number of arguments. If no arguments are given, it will return zero.

You are also able to group a single argument together by using the quote marks (""). This is particularly useful if you are expecting many parameters, but there is a requirement for including spaces (e.g. file locations, file names, full names etc.)

```csharp
using System;

class Test
{
   public static void Main(string[] args)
   {
      for (int index = 0; index < args.Length; index++)
      {
         Console.WriteLine((index + 1) + ": " + args[index]);
      }
   }
}
```

```
C:\> Test.exe Separate words "grouped together"
1: Separate
2: words
3: grouped together
```

### Formatted output 

| 

<div style="width: 52px;">![](//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Book_important2.svg/40px-Book_important2.svg.png)</div>

 | **This section is a stub.**
You can help Wikibooks by [expanding it](//en.wikibooks.org/w/index.php?title=C_Sharp_Programming/Print_version&action=edit). |

Console.Write() and Console.WriteLine() allow you to output a text string, but also allows writing a string with variable substitution.

These two functions normally have a string as the first parameter. When additional objects are added, either as parameters or as an array, the function will scan the string to substitute objects in place of tokens.

For example:

```csharp
{
  int i = 10;
  Console.WriteLine("i = {0}", i);
}
```

The {0} is identified by braces, and refers to the parameter index that needs to be substituted. You may also find a format specifier within the braces, which is preceded by a colon and the specifier in question (e.g. {0:G}).

### Rounding number example 

This is a small example that rounds a number to a string. It is an augmentation for the Math class of C#. The result of the Round method has to be rounded to a string, as significant figures may be trailing zeros that would disappear, if a number format would be used. Here is the code and its call. You are invited to write a shorter version that gives the same result, or to correct errors!

The constant class contains repeating constants that should exist only once in the code so that to avoid inadvertant changes. (If the one constant is changed inadvertantly, it is most likely to be seen, as it is used at several locations.)

```csharp
using System;

namespace ConsoleApplicationCommons
{
    class Common
    {
        /// <summary>Constant of comma or decimal point in German</summary>
        public const char COMMA = ',';
        /// <summary>Dash or minus constant</summary>
        public const char DASH = '-';
        /// <summary>
        /// The exponent sign in a scientific number, or the capital letter E
        /// </summary>
        public const char EXPONENT = 'E';
        /// <summary>The full stop or period</summary>
        public const char PERIOD = '.';
        /// <summary>The zero string constant used at several places</summary>
        public const String ZERO = "0";
    } // class Common
}
```

The Math class is an enhancement to the <math.h> library and contains the rounding calculations.

```csharp
using System;
using System.Globalization;
using System.IO;
using System.Text;

namespace ConsoleApplicationCommons
{
    /// <summary>
    /// Class for special mathematical calculations.
    /// ATTENTION: Should not depend on any other class except Java libraries!
    /// </summary>
    public class Maths
    {
        public static CultureInfo invC = CultureInfo.InvariantCulture;
        /// <summary>
        /// Value after which the language switches from scientific to double
        /// </summary>
        private const double E_TO_DOUBLE = 1E-4;
        /// <summary>
        /// Maximal digits after which Convert.ToString(…) becomes inaccurate.
        /// </summary>
        private const short MAX_CHARACTERS = 16;
        /// <summary>The string of zeros</summary>
        private static String strZeros = "000000000000000000000000000000000";

        /// <summary>
        /// Determines language-independently whether or not the character
        /// can be a decimal separator or not
        /// </summary>
        /// <param name="character">Character to be checked</param>
        /// <returns>
        /// true, if it can be a decimal separator in a language, and false
        /// otherwise.
        /// </returns>
        private static bool IsDecimalSeparator(char c)
        {
            return ((c == Common.COMMA) || (c == Common.PERIOD));
        }

        /// <summary>
        /// Determines how many zeros are to be appended after the decimal
        /// digits.
        /// </summary>
        /// <param name="separator">
        /// Language-specific decimal separator
        /// </param>
        /// <param name="d">Rounded number</param>
        /// <param name="significantsAfter">
        /// Significant digits after decimal
        /// </param>
        /// <returns>Requested value</returns>
        private static short CalculateMissingSignificantZeros(char separator,
            double d,
            short significantsAfter)
        {
            short after = FindSignificantsAfterDecimal(separator, d);

            short zeros = (short)(significantsAfter
                - ((after == 0) ? 1 : after));

            return (short)((zeros >= 0) ? zeros : 0);
        }

        /// <summary>
        /// Finds the decimal position language-independently.
        /// </summary>
        /// <param name="value">
        /// Value to be searched for the decimal separator
        /// </param>
        /// <returns>The position of the decimal separator</returns>
        private static short FindDecimalSeparatorPosition(String value)
        {
            short separatorAt = (short)value.IndexOf(Common.COMMA);

            return (separatorAt > -1)
                ? separatorAt : (short)value.IndexOf(Common.PERIOD);
        }

        /// <summary>
        /// Calculates the number of significant digits (without the sign and
        /// the decimal separator).
        /// </summary>
        /// <param name="separator">
        /// Language-specific decimal separator
        /// </param>
        /// <param name="d">Value where the digits are to be counted</param>
        /// <param name="significantsAfter">
        /// Number of decimal places after the separator
        /// </param>
        /// <returns>Number of significant digits</returns>
        private static short FindSignificantDigits(char separator,
            double d,
            short significantsAfter)
        {
            if (d == 0) return 0;
            else
            {
                String mantissa = FindMantissa(separator, 
                    Convert.ToString(d, invC));

                if (d == (long)d)
                {
                    mantissa = mantissa.Substring(0, mantissa.Length - 1);
                }

                mantissa = RetrieveDigits(mantissa);
                // Find the position of the first non-zero digit:
                short nonZeroAt = 0;

                for (; (nonZeroAt < mantissa.Length)
                        && (mantissa[nonZeroAt] == '0'); nonZeroAt++) ;

                return (short)mantissa.Substring(nonZeroAt).Length;
            }
        }

        /// <summary>
        /// Finds the significant digits after the decimal separator of a
        /// mantissa.
        /// </summary>
        /// <param name="separator">Language-specific decimal separator</param>
        /// <param name="d">Value to be scrutinised</param>
        /// <returns>Number of insignificant zeros after decimal separator.
        /// </returns>
        private static short FindSignificantsAfterDecimal(char separator,
            double d)
        {
            if (d == 0) return 1;
            else
            {
                String value = ConvertToString(d);

                short separatorAt = FindDecimalSeparatorPosition(value);

                if (separatorAt > -1) value = value.Substring(separatorAt + 1);

                short eAt = (short) value.IndexOf(Common.EXPONENT);

                if ((separatorAt == -1) && (eAt == -1)) return 0;
                else if (eAt > 0) value = value.Substring(0, eAt);

                long longValue = Convert.ToInt64(value, invC);

                if (longValue == 0) return 0;
                else if (Math.Abs(d) < 1)
                {
                    value = Convert.ToString(longValue, invC);

                    if (value.Length >= 15)
                    {
                        return (byte)Convert.ToString(longValue, invC).Length;
                    }
                    else return (byte)(value.Length);
                }
                else
                {
                    if (value.Length >= 15) return (byte)(value.Length - 1);
                    else return (byte)(value.Length);
                }
            }
        }

        /// <summary>
        /// Determines the number of significant digits after the decimal
        /// separator knowing the total number of significant digits and
        /// the number before the decimal separator.
        /// </summary>
        /// <param name="significantsBefore">
        /// Number of significant digits before separator
        /// </param>
        /// <param name="significantDigits">
        /// Number of all significant digits
        /// </param>
        /// <returns>
        /// Number of significant decimals after the separator
        /// </returns>
        private static short FindSignificantsAfterDecimal(
            short significantsBefore,
            short significantDigits)
        {
            short significantsAfter =
                (short)(significantDigits - significantsBefore);

            return (short)((significantsAfter > 0) ? significantsAfter : 0);
        }

        /// <summary>
        /// Determines the number of digits before the decimal point.
        /// </summary>
        /// <param name="separator">
        /// Language-specific decimal separator
        /// </param>
        /// <param name="value">Value to be scrutinised</param>
        /// <returns>
        /// Number of digits before the decimal separator
        /// </returns>
        private static short FindSignificantsBeforeDecimal(char separator,
            double d)
        {
            String value = Convert.ToString(d, invC);

            // Return immediately, if result is clear: Special handling at
            // crossroads of floating point and exponential numbers:
            if ((d == 0) || (Math.Abs(d) >= E_TO_DOUBLE) && (Math.Abs(d) < 1))
            {
                return 0;
            }
            else if ((Math.Abs(d) > 0) && (Math.Abs(d) < E_TO_DOUBLE)) return 1;
            else
            {
                short significants = 0;

                for (short s = 0; s < value.Length; s++)
                {
                    if (IsDecimalSeparator(value[s])) break;
                    else if (value[s] != Common.DASH) significants++;
                }

                return significants;
            }
        }

        /// <summary>
        /// Returns the exponent part of the double number.
        /// </summary>
        /// <param name="d">Value of which the exponent is of interest</param>
        /// <returns>Exponent of the number or zero.</returns>
        private static short FindExponent(double d)
        {
            return short.Parse(FindExponent(Convert.ToString(d, invC)), invC);
        }

        /// <summary>
        /// Finds the exponent of a number.
        /// </summary>
        /// <param name="value">
        /// Value where an exponent is to be searched
        /// </param>
        /// <returns>Exponent, if it exists, or "0".</returns>
        private static String FindExponent(String value)
        {
            short eAt = (short)(value.IndexOf(Common.EXPONENT));

            if (eAt < 0) return Common.ZERO;
            else
            {
                return Convert.ToString
                    (short.Parse(value.Substring(eAt + 1)), invC);
            }
        }

        /// <summary>
        /// Finds the mantissa of a number.
        /// </summary>
        /// <param name="separator">
        /// Language-specific decimal separator
        /// </param>
        /// <param name="value">Value where the mantissa is to be found</param>
        /// <returns>Mantissa of the number</returns>
        private static String FindMantissa(char separator,
            String value)
        {
            short eAt = (short)(value.IndexOf(Common.EXPONENT));

            if (eAt > -1) value = value.Substring(0, eAt);

            if (FindDecimalSeparatorPosition(value) == -1) value += ".0";

            return value;
        }

        /// <summary>
        /// Retrieves the digits of the value only
        /// </summary>
        /// <param name="d">Number</param>
        /// <returns>The digits only</returns>
        private static String RetrieveDigits(double d)
        {
            double dValue = d;
            short exponent = FindExponent(d);
            StringBuilder value = new StringBuilder();

            if (exponent == 0)
            {
                value.Append(dValue);

                if (value.Length >= MAX_CHARACTERS)
                {
                    value.Clear();

                    if (Math.Abs(dValue) < 1) value.Append("0");

                    // Determine the exponent for a scientific form:
                    exponent = 0;

                    while (((long)dValue != dValue) && (dValue < 1E11))
                    {
                        dValue *= 10;
                        exponent++;
                    }

                    value.Append((long)dValue);

                    while ((long)dValue != dValue)
                    {
                        dValue -= (long)dValue;

                        dValue *= 10;

                        value.Append((long)dValue);
                    }
                }
            }
            else
            {
                double multiplier = Math.Pow(10, -exponent);

                for (short s = 0; (s <= 16) && (exponent != 0); s++)
                {
                    dValue *= multiplier;

                    value.Append((long)dValue);
                    dValue -= (long)dValue;
                    exponent++;
                    multiplier = 10;
                }
            }

            if (value.Length >= MAX_CHARACTERS + 2)
                value.Length = MAX_CHARACTERS + 2;

            return RetrieveDigits(value.ToString());
        }

        /// <summary>
        /// Retrieves the digits of the value only
        /// </summary>
        /// <param name="number">Value to be scrutinised</param>
        /// <returns>The digits only</returns>
        private static String RetrieveDigits(String number)
        {
            // Strip off exponent part, if it exists:
            short eAt = (short)number.IndexOf(Common.EXPONENT);

            if (eAt > -1) number = number.Substring(0, eAt);

            return number.Replace(Convert.ToString(Common.DASH), "").Replace(
                Convert.ToString(Common.COMMA), "").Replace(
                Convert.ToString(Common.PERIOD), "");
        }

        /// <summary>
        /// Inserts the decimal separator at the right place
        /// </summary>
        /// <param name="dValue">Number</param>
        /// <param name="value">
        /// String variable, where the separator is to be added.
        /// </param>
        private static void InsertSeparator(double dValue, StringBuilder value)
        {
            short separatorAt = (short)Convert.ToString((long)dValue).Length;

            if (separatorAt < value.Length)
                value.Insert(separatorAt, Common.PERIOD);
        }

        /// <summary>
        /// Calculates the power of the base to the exponent without changing
        /// the least-significant digits of a number.
        /// </summary>
        /// <param name="basis"></param>
        /// <param name="exponent">basis to power of exponent</param>
        /// <returns></returns>
        public static double Power(int basis, short exponent)
        {
            return Power((short)basis, exponent);
        }

        /// <summary>
        /// Calculates the power of the base to the exponent without changing
        /// the least-significant digits of a number.
        /// </summary>
        /// <param name="basis"></param>
        /// <param name="exponent"></param>
        /// <returns>basis to power of exponent</returns>
        public static double Power(short basis, short exponent)
        {
            if (basis == 0) return (exponent != 0) ? 1 : 0;   
            else
            {
                if (exponent == 0) return 1;
                else
                {
                    // The Math method power does change the least significant
                    // digits after the decimal separator and is therefore
                    // useless.
                    long result = 1;
                    short s = 0;

                    if (exponent > 0)
                    {
                        for (; s < exponent; s++) result *= basis;
                    }
                    else if (exponent < 0)
                    {
                        for (s = exponent; s < 0; s++) result /= basis;
                    }

                    return result;
                }
            }
        }

        /// <summary>
        /// Rounds a number to the decimal places.
        /// </summary>
        /// <param name="d">Number to be rounded</param>
        /// <param name="separator">
        /// Language-specific decimal separator
        /// </param>
        /// <param name="significantsAfter">
        /// Number of decimal places after the separator
        /// </param>
        /// <returns>Rounded number to the requested decimal places</returns>
        public static double Round(char separator,
            double d,
            short significantsAfter)
        {
            if (d == 0) return 0;
            else
            {
                double constant = Power(10, significantsAfter);
                short dsExponent = FindExponent(d);

                short exponent = dsExponent;

                double value = d*constant*Math.Pow(10, -exponent);
                String exponentSign = (exponent < 0)
                    ? Convert.ToString(Common.DASH) : "";

                if (exponent != 0)
                {
                    exponent = (short)Math.Abs(exponent);

                    value = Round(value);
                }
                else
                {
                    while (FindSignificantsBeforeDecimal(separator, value)
                        < significantsAfter)
                    {
                        constant *= 10;
                        value *= 10;
                    }

                    value = Round(value)/constant;
                }

                // Power method cannot be used, as the exponentiated number may
                // exceed the maximal long value.
                exponent -= (short)(Math.Sign(dsExponent)*
                    (FindSignificantDigits(separator, value, significantsAfter)
                    - 1));
            
                if (dsExponent != 0)
                {
                    String strValue = Convert.ToString(value, invC);

                    short separatorAt = FindDecimalSeparatorPosition(strValue);

                    if (separatorAt > -1)
                    {
                        strValue = strValue.Substring(0, separatorAt);
                    }

                    strValue += Common.EXPONENT + exponentSign
                        + Convert.ToString(exponent);

                    value = double.Parse(strValue, invC);
                }
            
                return value;
            }
        }

        /// <summary>
        /// Rounds a number according to mathematical rules.
        /// </summary>
        /// <param name="d">Number to be rounded</param>
        /// <returns>Rounded number</returns>
        public static double Round(double d)
        {
            return (long)(d + .5);
        }

        /// <summary>
        /// Converts a double value to a string such that it reflects the double
        /// format (without converting it to a scientific format by itself, as
        /// it is the case with Convert.ToString(double, invC)).
        /// </summary>
        /// <param name="d">Value to be converted</param>
        /// <returns>Same format value as a string</returns>
        public static String ConvertToString(double d)
        {
            double dValue = d;
            StringBuilder value = new StringBuilder();

            if (Math.Sign(dValue) == -1) value.Append(Common.DASH);

            if ((dValue > 1E-5) && (dValue < 1E-4))
            {
                value.Append("0");

                while ((long)dValue == 0)
                {
                    dValue *= 10;

                    if (dValue >= 1) break;

                    value.Append(Convert.ToString((long)dValue));
                }
            }

            short exponent = FindExponent(d);

            if (exponent != 0)
            {
                value.Append(RetrieveDigits(dValue));
                InsertSeparator(dValue, value);
                value.Append(Common.EXPONENT);
                value.Append(exponent);
            }
            else
            {
                value.Append(RetrieveDigits(dValue));

                InsertSeparator(dValue, value);

                if (value.Length > MAX_CHARACTERS + 3)
                {
                    value.Length = MAX_CHARACTERS + 3;
                }
            }

            return value.ToString();
        }

        /// <summary>
        /// Rounds to a fixed number of significant digits.
        /// </summary>
        /// <param name="d">Number to be rounded</param>
        /// <param name="significantDigits">
        /// Requested number of significant digits
        /// </param>
        /// <param name="separator">
        /// Language-specific decimal separator
        /// </param>
        /// <returns>Rounded number</returns>
        public static String RoundToString(char separator,
            double d,
            short significantDigits)
        {
            // Number of significants that *are* before the decimal separator:
            short significantsBefore =
                FindSignificantsBeforeDecimal(separator, d);
            // Number of decimals that *should* be after the decimal separator:
            short significantsAfter = FindSignificantsAfterDecimal(
                    significantsBefore, significantDigits);
            // Round to the specified number of digits after decimal separator:
            double rounded = Maths.Round(separator, d, significantsAfter);

            String exponent = FindExponent(Convert.ToString(rounded, invC));
            String mantissa = FindMantissa(separator, 
                            Convert.ToString(rounded, invC));

            double dMantissa = double.Parse(mantissa, invC);
            StringBuilder result = new StringBuilder(mantissa);
            // Determine the significant digits in this number:
            short significants = FindSignificantDigits(separator, dMantissa,
                significantsAfter);
            // Add lagging zeros, if necessary:
            if (significants <= significantDigits)
            {
                if (significantsAfter != 0)
                {
                    result.Append(strZeros.Substring(0,
                        CalculateMissingSignificantZeros(separator,
                            dMantissa, significantsAfter)));
                }
                else
                {
                    // Cut off the decimal separator & after decimal digits:
                    short decimalValue = (short) result.ToString().IndexOf(
                            Convert.ToString(separator));
                
                    if (decimalValue > -1) result.Length = decimalValue;
                }
            }
            else if (significantsBefore > significantDigits)
            {
                d /= Power(10, (short)(significantsBefore - significantDigits));

                d = Round(d);
            
                short digits = (short)(significantDigits + ((d < 0) ? 1 : 0));
            
                String strD = d.ToString().Substring(0, digits);
            
                result.Length = 0;
                result.Append(strD + strZeros.Substring(0,
                        significantsBefore - significantDigits));
            }
        
            if (short.Parse(exponent, invC) != 0)
            {
                result.Append(Common.EXPONENT + exponent);
            }
        
            return result.ToString();
        } // public static String RoundToString(…)

        /// <summary>
        /// Rounds to a fixed number of significant digits.
        /// </summary>
        /// <param name="separator">
        /// Language-specific decimal separator
        /// </param>
        /// <param name="significantDigits">
        /// Requested number of significant digits
        /// </param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static String RoundToString(char separator,
                float value,
                int significantDigits)
        {
            return RoundToString(separator, (double)value,
                (short)significantDigits);
        }
    }   // public class Maths
}
```

Extensive testing of a software is crucial for qualitative code. To say that the code is tested does not give much information. The question is what is tested. Not in this case, but often it is also important to know where (in which environment) it was tested, and how - i.e. the test succession. Here is the code used to test the Maths class.

```csharp
using System;
using System.Collections.Generic;

namespace ConsoleApplicationCommons
{
    class TestCommon
    {
        /// <summary>
        /// Test for the common functionality
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            // Test rounding
            List<double> values = new List<double>();

            values.Add(0.0);
            AddValue(1.4012984643248202e-45, values);
            AddValue(1.999999757e-5, values);
            AddValue(1.999999757e-4, values);
            AddValue(1.999999757e-3, values);
            AddValue(0.000640589, values);
            AddValue(0.3396899998188019, values);
            AddValue(0.34, values);
            AddValue(7.07, values);
            AddValue(118.188, values);
            AddValue(118.2, values);
            AddValue(123.405009, values);
            AddValue(30.76994323730469, values);
            AddValue(130.76994323730469, values);
            AddValue(540, values);
            AddValue(12345, values);
            AddValue(123456, values);
            AddValue(540911, values);
            AddValue(9.223372036854776e56, values);

            const short SIGNIFICANTS = 5;
        
            foreach (double element in values)
            {
                Console.Out.WriteLine("Maths.Round('" + Common.PERIOD + "', "
                    + Convert.ToString(element, Maths.invC) + ", "
                    + SIGNIFICANTS + ") = " + Maths.RoundToString
                        (Common.PERIOD, element, SIGNIFICANTS));
            }

            Console.In.Read();
        }

        /// <summary>
        /// Method that adds a negative and a positive value
        /// </summary>
        /// <param name="d"></param>
        /// <param name="values"></param>
        private static void AddValue(double d, List<double> values)
        {
            values.Add(-d);
            values.Add(d);
        }
    } // class TestCommon
}
```

The results of your better code should comply with the result I got:

```
Maths.Round('.', 0, 5) = 0.00000
Maths.Round('.', -1.40129846432482E-45, 5) = -1.4012E-45
Maths.Round('.', 1.40129846432482E-45, 5) = 1.4013E-45
Maths.Round('.', -1.999999757E-05, 5) = -1.9999E-5
Maths.Round('.', 1.999999757E-05, 5) = 2.0000E-5
Maths.Round('.', -0.0001999999757, 5) = -0.00019999
Maths.Round('.', 0.0001999999757, 5) = 0.00020000
Maths.Round('.', -0.001999999757, 5) = -0.0019999
Maths.Round('.', 0.001999999757, 5) = 0.0020000
Maths.Round('.', -0.000640589, 5) = -0.00064058
Maths.Round('.', 0.000640589, 5) = 0.00064059
Maths.Round('.', -0.339689999818802, 5) = -0.33968
Maths.Round('.', 0.339689999818802, 5) = 0.33969
Maths.Round('.', -0.34, 5) = -0.33999
Maths.Round('.', 0.34, 5) = 0.34000
Maths.Round('.', -7.07, 5) = -7.0699
Maths.Round('.', 7.07, 5) = 7.0700
Maths.Round('.', -118.188, 5) = -118.18
Maths.Round('.', 118.188, 5) = 118.19
Maths.Round('.', -118.2, 5) = -118.19
Maths.Round('.', 118.2, 5) = 118.20
Maths.Round('.', -123.405009, 5) = -123.40
Maths.Round('.', 123.405009, 5) = 123.41
Maths.Round('.', -30.7699432373047, 5) = -30.769
Maths.Round('.', 30.7699432373047, 5) = 30.770
Maths.Round('.', -130.769943237305, 5) = -130.76
Maths.Round('.', 130.769943237305, 5) = 130.77
Maths.Round('.', -540, 5) = -539.99
Maths.Round('.', 540, 5) = 540.00
Maths.Round('.', -12345, 5) = -12344
Maths.Round('.', 12345, 5) = 12345
Maths.Round('.', -123456, 5) = -123450
Maths.Round('.', 123456, 5) = 123460
Maths.Round('.', -540911, 5) = -540900
Maths.Round('.', 540911, 5) = 540910
Maths.Round('.', -9.22337203685478E+56, 5) = -9.2233E56
Maths.Round('.', 9.22337203685478E+56, 5) = 9.2234E56
```

If you are interested in a comparison with C++, please compare it with the same example there. If you want to compare C# with Java, take a look at the rounding number example there.

```csharpC# Programming```



## System.Windows.Forms 

To create a Windows desktop application we use the library represented by System.Windows.Forms namespace. Some commonly used classes in this namespace include:

*   [Control](/wiki/C_Sharp_Programming/Control "C Sharp Programming/Control") - generic class from which other useful classes, like `<span class="n">Form</span>`, `<span class="n">TextBox</span>` and others listed below are derived
*   [Form](/wiki/C_Sharp_Programming/Control/Form "C Sharp Programming/Control/Form") - this is the base class for the program window. All other controls are placed directly onto a `<span class="n">Form</span>` or indirectly on another container (like `<span class="n">TabPage</span>` or `<span class="n">TabControl</span>`) that ultimately resides on the `<span class="n">Form</span>`. When automatically created in Visual Studio, it is usually subclassed as `<span class="n">Form1</span>`.
*   [Button](/w/index.php?title=C_Sharp_Programming/Control/Button&action=edit&redlink=1 "C Sharp Programming/Control/Button (does not exist)") - a clickable button
*   [TextBox](/w/index.php?title=C_Sharp_Programming/Control/TextBox&action=edit&redlink=1 "C Sharp Programming/Control/TextBox (does not exist)") - a singleline or multiline textbox that can be used for displaying or inputting text
*   [RichTextBox](/w/index.php?title=C_Sharp_Programming/Control/RichTextBox&action=edit&redlink=1 "C Sharp Programming/Control/RichTextBox (does not exist)") - an extended `<span class="n">TextBox</span>` that can display styled text, e.g. with parts of the text colored or with a specified font. RichTextBox can also display generalized RTF document, including embedded images.
*   [Label](/w/index.php?title=C_Sharp_Programming/Control/Label&action=edit&redlink=1 "C Sharp Programming/Control/Label (does not exist)") - simple control allowing display of a single line of unstyled text, often used for various captions and titles
*   [ListBox](/w/index.php?title=C_Sharp_Programming/Control/ListBox&action=edit&redlink=1 "C Sharp Programming/Control/ListBox (does not exist)") - control displaying multiple items (lines of text) with ability to select an item and to scroll through it
*   [ComboBox](/w/index.php?title=C_Sharp_Programming/Control/ComboBox&action=edit&redlink=1 "C Sharp Programming/Control/ComboBox (does not exist)") - similar to `<span class="n">ListBox</span>`, but resembling a dropdown menu
*   [TabControl](/w/index.php?title=C_Sharp_Programming/Control/TabControl&action=edit&redlink=1 "C Sharp Programming/Control/TabControl (does not exist)") and [TabPage](/w/index.php?title=C_Sharp_Programming/Controls/TabPage&action=edit&redlink=1 "C Sharp Programming/Controls/TabPage (does not exist)") - used to group controls in a tabbed interface (much like tabbed interface in Visual Studio or Mozilla Firefox). A `<span class="n">TabControl</span>` contains a collection of `<span class="n">TabPage</span>` objects.
*   [DataGrid](/w/index.php?title=C_Sharp_Programming/Control/DataGrid&action=edit&redlink=1 "C Sharp Programming/Control/DataGrid (does not exist)") - data grid/table view

## Form class 

The Form class (System.Windows.Forms.Form) is a particularly important part of that namespace because the form is the key graphical building block of Windows applications. It provides the visual frame that holds buttons, menus, icons, and title bars together. Integrated development environments (IDEs) like Visual C# and SharpDevelop can help create graphical applications, but it is important to know how to do so manually:

```csharp
using System.Windows.Forms;

public class ExampleForm : Form    // inherits from System.Windows.Forms.Form
{
    public static void Main()
    {
        ExampleForm wikibooksForm = new ExampleForm();

        wikibooksForm.Text = "I Love Wikibooks";  // specify title of the form
        wikibooksForm.Width = 400;                // width of the window in pixels
        wikibooksForm.Height = 300;               // height in pixels
        Application.Run(wikibooksForm);           // display the form
    }
}
```

The example above creates a simple Window with the text "I Love Wikibooks" in the title bar. Custom form classes like the example above inherit from the System.Windows.Forms.Form class. Setting any of the properties Text, Width, and Height is optional. Your program will compile and run successfully, if you comment these lines out, but they allow us to add extra control to our form.

## Events 

| 

<div style="width: 52px;">![](//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Book_important2.svg/40px-Book_important2.svg.png)</div>

 | **This section is a stub.**
You can help Wikibooks by [expanding it](//en.wikibooks.org/w/index.php?title=C_Sharp_Programming/Print_version&action=edit). |

An event is an action being taken by the program when a user or the computer makes an action (for example, a button is clicked, a mouse rolls over an image, etc.). An event handler is an object that determines what action should be taken when an event is triggered.

```csharp
using System.Windows.Forms;
using System.Drawing;

public class ExampleForm : Form    // inherits from System.Windows.Forms.Form
{
    public ExampleForm()
    {
        this.Text = "I Love Wikibooks";           // specify title of the form
        this.Width = 300;                         // width of the window in pixels
        this.Height = 300;                        // height in pixels

        Button HelloButton = new Button();
        HelloButton.Location = new Point(20, 20); // the location of button in pixels
        HelloButton.Size = new Size(100, 30);     // the size of button in pixels
        HelloButton.Text = "Click me!";           // the text of button

        // When click in the button, this event fire
        HelloButton.Click += new System.EventHandler(WhenHelloButtonClick);

        this.Controls.Add(HelloButton);
    }

    void WhenHelloButtonClick(object sender, System.EventArgs e)
    {
        MessageBox.Show("You clicked! Press OK to exit of this message");
    }

    public static void Main()
    {
        Application.Run(new ExampleForm());       // display the form
    }
}
```

## Controls 

| 

<div style="width: 52px;">![](//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Book_important2.svg/40px-Book_important2.svg.png)</div>

 | **This section is a stub.**
You can help Wikibooks by [expanding it](//en.wikibooks.org/w/index.php?title=C_Sharp_Programming/Print_version&action=edit). |

```csharpC# Windows Controls
Control class | Form | Button | Label | TextBox | RichTextBox ListBox | ComboBox | TabControl and TabPage```




The Windows Forms namespace has a lot of very interesting classes. One of the simplest and important is the Form class. A form is the key building block of any Windows application. It provides the visual frame that holds buttons, menus, icons and title bars together. Forms can be modal and modalless, owners and owned, parents and children. While forms could be created with a notepad, using a form editor like VS.NET, C# Builder or Sharp Develop makes development much faster. In this lesson, we will not be using an IDE. Instead, save the code below into a text file and compile with command line compiler.

```csharp
using System.Windows.Forms;
using System.Drawing;

public class ExampleForm : Form    // inherits from System.Windows.Forms.Form
{
    public ExampleForm()
    {
        this.Text = "I Love Wikibooks";         // specify title of the form
        this.BackColor = Color.White;
        this.Width = 300;                       // width of the window in pixels
        this.Height = 300;                      // height in pixels

        // A Label
        Label TextLabel = new Label();
        TextLabel.Text = "One Label here!";
        TextLabel.Location = new Point(20, 20);
        TextLabel.Size = new Size(150, 30);
        TextLabel.Font = new Font("Arial", 12); // See! we can modify the font of text
        this.Controls.Add(TextLabel);           // adding the control to the form

        // A input text field
        TextBox Box = new TextBox();            // inherits from Control
        Box.Location = new Point(20, 60);       // then, it have Size and Location properties
        Box.Size = new Size(100, 30);
        this.Controls.Add(Box);                 // all class that inherit from Control can be added in a form
    }

    public static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ExampleForm());     // display the form
    }
}
```

```csharpC# Programming```



## Lists 

A list is a dynamic array that resizes itself as needed, if more data is inserted than it can hold at the time of insertion. Items can be inserted at any index, deleted at any index and accessed at any index. The C# non-generic list class is the ArrayList, while the generic one is List<T>.

Many of the List class' methods and properties are demonstrated in the following example:

```csharp
using System;
using System.Collections;
using System.Collections.Generic;

namespace csharp_generic_list
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("List<T> demo");
            // Creating an instance that accepts strings
            List<string> foods = new List<string>();

            // Adding some items one by one with Add()
            foods.Add("bread");
            foods.Add("butter");
            foods.Add("chocolate");

            // Adding a simple string array with AddRange()
            string[] subList1 = {"orange", "apple", "strawberry", "grapes", "kiwi", "banana"};
            foods.AddRange(subList1);

            // Adding another List<string> with AddRange()
            List<string> anotherFoodList = new List<string>();
            anotherFoodList.Add("yoghurt");
            anotherFoodList.Add("tomato");
            anotherFoodList.Add("roast beef");
            anotherFoodList.Add("vanilla cake");
            foods.AddRange(anotherFoodList);

            // Removing "orange" with Remove()
            foods.Remove("orange");

            // Removing the 5th (index = 4) item ("strawberry") with RemoveAt()
            foods.RemoveAt(4);

            // Removing a range (4-7: all fruits) with RemoveRange(int index, int count)
            foods.RemoveRange(3, 4);

            // sorting the list
            foods.Sort();

            // Printing the sorted foods
            foreach (string item in foods)
            {
                Console.Write("| " + item + " ");
            }
            Console.WriteLine("|");

            // Removing all items from foods
            foods.Clear();

            // Printing the current item count in foods
            Console.WriteLine("The list now has {0} items.", foods.Count);
        }
    }
}
```

The terminal output is:

```
List<T> demo
| bread | butter | chocolate | roast beef | tomato | vanilla cake | yoghurt |
The list now has 0 items.
```

## LinkedLists 

Items in a linked list can be accessed directly only one after the other. Of course an item at any index can be accessed, but the list must iterate to the item from the first one, which is much slower than accessing items by index in an array or a list. There is no non-generic linked list in C#, while the generic one is LinkedList<T>.

## Queues 

A queue is a FIFO (first in - first out) collection. The item first pushed in the queue gets taken first with the pop function. Only the first item is accessible at any time, and items can only be put to the end. The non-generic queue class is called Queue, while the generic one is Queue<T>.

## Stacks 

A stack is a LIFO (last in - first out) collection. The item pushed in first will be the last to be taken by pop. Only the last item is accessible at any time, and items can only be put at the top. The non-generic stack class is Stack, while the generic one is Stack<T>.

## Hashtables and dictionaries 

A dictionary is a collection of values with keys. The values can be very complex, yet searching the keys is still fast. The non-generic class is Hashtable, while the generic one is Dictionary<TKey, TValue>.

```csharpC# Programming```



Threads are tasks that can run concurrently to other threads and can share data. When your program starts, it creates a thread for the entry point of your program, usually a Main function. So, you can think of a "program" as being made up of threads. The .NET Framework allows you to use threading in your programs to run code in parallel to each other. This is often done for two reasons:

1.  If the thread running your graphical user interface performs time-consuming work, your program may appear to be unresponsive. Using threading, you can create a new thread to perform tasks and report its progress to the GUI thread.
2.  On computers with more than one CPU or CPUs with more than one core, threads can maximize the use of computational resources, speeding up tasks.

## The Thread class 

The System.Threading.Thread class exposes basic functionality for using threads. To create a thread, you simply create an instance of the Thread class with a ThreadStart or ParameterizedThreadStart delegate pointing to the code the thread should start running. For example:

```csharp
using System;
using System.Threading;

public static class Program
{
    private static void SecondThreadFunction()
    {
        while (true)
        {
            Console.WriteLine("Second thread says hello.");
            Thread.Sleep(1000); // pause execution of the current thread for 1 second (1000 ms)
        }
    }
    
    public static void Main()
    {
        Thread newThread = new Thread(new ThreadStart(SecondThreadFunction));
        
        newThread.Start();
        
        while (true)
        {
            Console.WriteLine("First thread says hello.");
            Thread.Sleep(500); // pause execution of the current thread for half a second (500 ms)
        }
    }
}
```

You should see the following output:

```
First thread says hello.
Second thread says hello.
First thread says hello.
First thread says hello.
Second thread says hello.
...
```

Notice that the while keyword is needed because as soon as the function returns, the thread exits, or terminates.

### ParameterizedThreadStart 

The void ParameterizedThreadStart(object obj) delegate allows you to pass a parameter to the new thread:

```csharp
using System;
using System.Threading;

public static class Program
{
    private static void SecondThreadFunction(object param)
    {
        while (true)
        {
            Console.WriteLine("Second thread says " + param.ToString() + ".");
            Thread.Sleep(500); // pause execution of the current thread for half a second (500 ms)
        }
    }
    
    public static void Main()
    {
        Thread newThread = new Thread(new ParameterizedThreadStart(SecondThreadFunction));
        
        newThread.Start(1234); // here you pass a parameter to the new thread
        
        while (true)
        {
            Console.WriteLine("First thread says hello.");
            Thread.Sleep(1000); // pause execution of the current thread for a second (1000 ms)
        }
    }
}
```

The output is:

```
First thread says hello.
Second thread says 1234.
Second thread says 1234.
First thread says hello.
...
```

## Sharing Data 

Although we could use ParameterizedThreadStart to pass parameter(s) to threads, it is not typesafe and is clumsy to use. We could exploit anonymous delegates to share data between threads, however:

```csharp
using System;
using System.Threading;

public static class Program
{
    public static void Main()
    {
        int number = 1;
        Thread newThread = new Thread(new ThreadStart(delegate
        {
            while (true)
            {
                number++;
                Console.WriteLine("Second thread says " + number.ToString() + ".");
                Thread.Sleep(1000);
            }
        }));
        
        newThread.Start();
        
        while (true)
        {
            number++;
            Console.WriteLine("First thread says " + number.ToString() + ".");
            Thread.Sleep(1000);
        }
    }
}
```

Notice how the body of the anonymous delegate can access the local variable number.

## Asynchronous Delegates 

Using anonymous delegates can lead to a lot of syntax, confusion of scope, and lack of encapsulation. However with the use of lambda expressions, some of these problems can be mitigated. Instead of anonymous delegates, you can use asynchronous delegates to pass and return data, all of which is type safe. It should be noted that when you use an asynchronous delegate, you are actually queuing a new thread to the thread pool. Also, using asynchronous delegates forces you to use the asynchronous model.

```csharp
using System;

public static class Program
{
     delegate int del(int[] data);
     
     public static int SumOfNumbers(int[] data)
     {
          int sum = 0;
          foreach (int number in data) {
               sum += number;
          }

          return sum;
     }

     public static void Main()
     {
          int[] numbers = new int[] { 1, 2, 3, 4, 5 };
          del func = SumOfNumbers;
          IAsyncResult result = func.BeginInvoke(numbers, null, null);
          
          // I can do stuff here while numbers is being added
          
          int sum = func.EndInvoke(result);
           sum = 15
     }
}
```

## Synchronization 

In the sharing data example, you may have noticed that often, if not all of the time, you will get the following output:

```
First thread says 2.
Second thread says 3.
Second thread says 5.
First thread says 4.
Second thread says 7.
First thread says 7.
```

One would expect that at least, the numbers would be printed in ascending order! This problem arises because of the fact that the two pieces of code are running at the same time. For example, it printed 3, 5, then 4. Let us examine what may have occurred:

1.  After "First thread says 2", the first thread incremented `<span class="n">number</span>`, making it 3, and printed it.
2.  The second thread then incremented `<span class="n">number</span>`, making it 4.
3.  Just before the second thread got a chance to print `<span class="n">number</span>`, the first thread incremented `<span class="n">number</span>`, making it 5, and printed it.
4.  The second thread then printed what `<span class="n">number</span>` was before the first thread incremented it, that is, 4\. Note that this may have occurred due to console output buffering.

The solution to this problem is to synchronize the two threads, making sure their code doesn't interleave like it did. C# supports this through the lock keyword. We can put blocks of code under this keyword:

```csharp
using System;
using System.Threading;

public static class Program
{
    public static void Main()
    {
        int number = 1;
        object numberLock = new object();
        Thread newThread = new Thread(new ThreadStart(delegate
        {
            while (true)
            {
                lock (numberLock)
                {
                    number++;
                    Console.WriteLine("Second thread says " + number.ToString() + ".");
                }

                Thread.Sleep(1000);
            }
        }));
        
        newThread.Start();
        
        while (true)
        {
            lock (numberLock)
            {
                number++;
                Console.WriteLine("First thread says " + number.ToString() + ".");
            }

            Thread.Sleep(1000);
        }
    }
}
```

The variable numberLock is needed because the lock keyword only operates on reference types, not value types. This time, you will get the correct output:

```
First thread says 2.
Second thread says 3.
Second thread says 4.
First thread says 5.
Second thread says 6.
...
```

The lock keyword operates by trying to gain an exclusive lock on the object passed to it (numberLock). It will only release the lock when the code block has finished execution (that is, after the }). If an object is already locked when another thread tries to gain a lock on the same object, the thread will block (suspend execution) until the lock is released, and then lock the object. This way, sections of code can be prevented from interleaving.

### Thread.Join() 

The Join method of the Thread class allows a thread to wait for another thread, optionally specifying a timeout:

```csharp
using System;
using System.Threading;

public static class Program
{
    public static void Main()
    {
        Thread newThread = new Thread(new ThreadStart(delegate
        {
            Console.WriteLine("Second thread reporting.");
            Thread.Sleep(5000);
            Console.WriteLine("Second thread done sleeping.");
        }));

        newThread.Start();
        Console.WriteLine("Just started second thread.");
        newThread.Join(1000);
        Console.WriteLine("First thread waited for 1 second.");
        newThread.Join();
        Console.WriteLine("First thread finished waiting for second thread. Press any key.");
        Console.ReadKey();
    }
}
```

The output is:

```
Just started second thread.
Second thread reporting.
First thread waited for 1 second.
Second thread done sleeping.
First thread finished waiting for second thread. Press any key.
```

```csharpC# Programming```



The .NET Framework currently supports calling unmanaged functions and using unmanaged data, a process called marshalling. This is often done to use Windows API functions and data structures, but can also be used with custom libraries.

## GetSystemTimes 

A simple example to start with is the Windows API function GetSystemTimes. It is declared as:

```csharp
BOOL WINAPI GetSystemTimes(
  __out_opt  LPFILETIME lpIdleTime,
  __out_opt  LPFILETIME lpKernelTime,
  __out_opt  LPFILETIME lpUserTime
);
```

LPFILETIME is a pointer to a FILETIME structure, which is simply a 64-bit integer. Since C# supports 64-bit numbers through the long type, we can use that. We can then import and use the function as follows:

```csharp
using System;
using System.Runtime.InteropServices;

public class Program
{
    [DllImport("kernel32.dll")]
    static extern bool GetSystemTimes(out long idleTime, out long kernelTime, out long userTime);
    
    public static void Main()
    {
        long idleTime, kernelTime, userTime;
        
        GetSystemTimes(out idleTime, out kernelTime, out userTime);
        Console.WriteLine("Your CPU(s) have been idle for: " + (new TimeSpan(idleTime)).ToString());
        Console.ReadKey();
    }
}
```

Note that the use of out or ref in parameters automatically makes it a pointer to the unmanaged function.

## GetProcessIoCounters 

To pass pointers to structs, we can use the out or ref keyword:

```csharp
using System;
using System.Runtime.InteropServices;

public class Program
{
    struct IO_COUNTERS
    {
        public ulong ReadOperationCount;
        public ulong WriteOperationCount;
        public ulong OtherOperationCount;
        public ulong ReadTransferCount;
        public ulong WriteTransferCount;
        public ulong OtherTransferCount;
    }

    [DllImport("kernel32.dll")]
    static extern bool GetProcessIoCounters(IntPtr ProcessHandle, out IO_COUNTERS IoCounters);

    public static void Main()
    {
        IO_COUNTERS counters;

        GetProcessIoCounters(System.Diagnostics.Process.GetCurrentProcess().Handle, out counters);
        Console.WriteLine("This process has read " + counters.ReadTransferCount.ToString("N0") + 
            " bytes of data.");
        Console.ReadKey();
    }
}
```

