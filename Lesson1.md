# Language Basics 

This section will define the naming conventions that are generally accepted by the C# development community. Some companies may define naming conventions that differ from this, but that is done on an individual basis and is generally discouraged. Some of the objects discussed in this section may be beyond the reader's knowledge at this point, but this section can be referred back to later.

## Reasoning 

Much of the naming standards are derived from Microsoft's .NET Framework libraries. These standards have proven to make names readable and understandable "at a glance". By using the correct conventions when naming objects, you ensure that other C# programmers who read your code will easily understand what objects are without having to search your code for their definition.

## Conventions 

### Namespace 

Namespaces are named using Pascal Case (also called UpperCamelCase) with no underscores. This means the first letter of every word in the name is capitalized. For example: MyNewNamespace. Also, note that Pascal Case also denotes that acronyms of three or more letters should only have the first letter capitalized (MyXmlNamespace instead of MyXMLNamespace).

### Assemblies 

If an assembly contains only one namespace, they should use the same name. Otherwise, Assemblies should follow the normal Pascal Case format.

### Classes and Structures 

Pascal Case, no underscores or leading C, cls, or I. Classes should not have the same name as the namespace in which they reside. Any acronyms of three or more letters should be pascal case, not all caps. Try to avoid abbreviations, and try to always use nouns.

### Exception Classes 

Follow class naming conventions, but add Exception to the end of the name. In .Net 2.0, all classes should inherit from the System.Exception base class, and not inherit from the System.ApplicationException.

### Interfaces 

Follow class naming conventions, but start the name with I and capitalize the letter following the I. Example: IFoo The I prefix helps to differentiate between Interfaces and classes and also to avoid name collisions.

### Functions 

Pascal Case, no underscores except in the event handlers. Try to avoid abbreviations. Many programmers have a nasty habit of overly abbreviating everything. This should be discouraged.

### Properties and Public Member Variables 

Pascal Case, no underscores. Try to avoid abbreviations.

### Parameters and Procedure-level Variables 

Camel Case (or lowerCamelCase). Try to avoid abbreviations. Camel Case is the same as Pascal case, but the first letter of the first word is lowercased.

### Class-level Private and Protected Variables 

Camel Case with a leading underscore. Always indicate protected or private in the declaration. The leading underscore is the only controversial thing in this document. The leading character helps to prevent name collisions in constructors (a parameter and a private variable having the same name).

### Controls on Forms 

Pascal Case with a prefix that identifies it as being part of the UI instead of a purely coded control (example a temporary variable). Many developers use ui as the prefix followed by a descriptive name such as txtUserName or lblUserNickName ("txt" stands for TextBox control and "lbl" for Label control)

Some samples are below for ASP.Net web form controls:

| Control | Prefix | Example |
| --- | --- | --- |
| Label | lbl | lblSurname |
| TextBox | txt | txtSurname |
| DataGrid | dg | dgResults |
| GridView | gv | gvResults2 |
| Button | btn | btnSave |
| ImageButton | iBtn | iBtnSave |
| Hyperlink | lnk | lnkHomePage |
| DropDownList | ddl | ddlCompany |
| ListBox | lst | lstCompany |
| DataList | dLst | dlstAddress |
| DataSet | ds | dsInvoices |
| DataTable | dt | dtClients |
| DataRow | dr | drUser |
| Repeater | rep | repSection |
| Checkbox | chk | chkMailList |
| CheckBoxList | chk | chkAddress |
| RadioButton | rBtn | rBtnSex |
| RadioButtonList | rBtn | rBtnAgeGroup |
| Image | img | imgLogo |
| Panel | pnl | pnlSevtion |
| PlaceHolder | plh | plhHeader |
| Calendar | txt | txtMyDate |
| AdRotator | adr | adrBanner |
| Table | tbl | tblResults |
| [All] Validators | val (N/A) | valCreditCardNumber |
| ValidationSummary | vals (N/A) | valsErrors |

### Constants 

Pascal Case. The use of SCREAMING_CAPS is discouraged. This is a large change from earlier conventions. Most developers now realize that in using SCREAMING_CAPS they betray more implementation than is necessary. A large portion of the .NET Framework Design Guidelines is dedicated to this discussion.

## Example 

Here is an example of a class that uses all of these naming conventions combined.

```csharp
using System;

namespace MyExampleNamespace
{
    public class Customer : IDisposable
    {
        private string _customerName;
        public string CustomerName 
        { 
            get 
            { 
                return _customerName; 
            }
            set
            {
                _customerName = value;
                _lastUpdated = DateTime.Now;
            }
        }

        private DateTime _lastUpdated;

        public DateTime LastUpdated
        {
            get
            {
                return _lastUpdated;
            }
            private set
            {
                _lastUpdated = value;
            }
        }

        public void UpdateCustomer(string newName)
        {
            if (!newName.Equals(CustomerName))
            {
                CustomerName = newName;
            }
        }

        public void Dispose()
        {
            //Do nothing
        }
    }
}
```



C# syntax looks quite similar to the syntax of Java because both inherit much of their syntax from C and C++. The object-oriented nature of C# requires the high-level structure of a C# program to be defined in terms of classes, whose detailed behaviors are defined by their statements.

## Statements 

The basic unit of execution in a C# program is the statement. A statement can declare a variable, define an expression, perform a simple action by calling a method, control the flow of execution of other statements, create an object, or assign a value to a variable, property, or field. Statements are usually terminated by a semicolon.

Statements can be grouped into comma-separated statement lists or brace-enclosed statement blocks.

Examples:

```csharp
int sampleVariable;                           // declaring a variable
sampleVariable = 5;                           // assigning a value
Method();                                     // calling an instance method
SampleClass sampleObject = new SampleClass(); // creating a new instance of an object
sampleObject.ObjectMethod();                  // calling a member function of an object

// executing a "for" loop with an embedded "if" statement 
for (int i = 0; i < upperLimit; i++)
{
    if (SampleClass.SampleStaticMethodReturningBoolean(i))
    {
        sum += sampleObject.SampleMethodReturningInteger(i);
    }
}
```

## Statement blocks 

A series of statements surrounded by curly braces form a block of code. Among other purposes, code blocks serve to limit scope, or the range in which a variable can be used. A variable is only accessible in the block in which it is defined. Code blocks can be nested and often appear as the bodies of methods.

```csharp
private void MyMethod(int integerValue)
{  // This block of code is the body of "MyMethod()"

   // The 'integerValue' integer parameter is accessible to everything in the method

   int methodLevelVariable; // This variable is accessible to everything in the method

   if (integerValue == 2)
   {
      // methodLevelVariable is still accessible here     
  
      int limitedVariable; // This variable is only accessible to code in the, if block

      DoSomeWork(limitedVariable);
   }
   
   // limitedVariable is no longer accessible here
    
}  // Here ends the code block for the body of "MyMethod()".
```

## Comments 

Comments allow inline documentation of source code. The C# compiler ignores comments. These styles of comments are allowed in C#:

<dl>

<dt>Single-line comments</dt>

<dd>The `<span class="c1">//</span>` character sequence marks the following text as a single-line comment. Single-line comments, as one would expect, end at the first end-of-line following the `<span class="c1">//</span>` comment marker.</dd>

<dt>Multiple-line comments</dt>

<dd>Comments can span multiple lines by using the multiple-line comment style. Such comments start with `<span class="p">/*</span>` and end with `<span class="p">*/</span>`. The text between those multi-line comment markers is the comment.</dd>

</dl>

```csharp
// This style of a comment is restricted to one line.
/* 
   This is another style of a comment.
   It allows multiple lines.
*/
```

<dl>

<dt>XML Documentation-line comments</dt>

<dd>These comments are used to generate XML documentation. Single-line and multiple-line styles can be used. The single-line style, where each line of the comment begins with `<span class="c1">//</span>`, is more common than the multiple-line style delimited by `<span class="p">/**</span>` and `<span class="p">*/</span>`.</dd>

</dl>

```csharp
// <summary> documentation here </summary>
// <remarks>
//     This uses single-line style XML Documentation comments.
// </remarks>


/** 
 * <summary> documentation here </summary>
 * <remarks>
 *     This uses multiple-line style XML Documentation comments.
 * </remarks>
 */
```

## Case sensitivity 

C# is case-sensitive, including its variable and method names.

The variables myInteger and MyInteger of type int below are distinct because C# is case-sensitive:

```csharp
 int myInteger = 3;
 int MyInteger = 5;
```

For example, C# defines a class Console to handle most operations with the console window. Writing the following code would result in a compiler error unless an object named console had been previously defined.

```csharp
 // Compiler error!
 console.writeline("Hello");
```

The following corrected code compiles as expected because it uses the correct case:

```csharp
 Console.WriteLine("Hello");
```


Variables are used to store values. More technically, a variable binds an object (in the general sense of the term, i.e. a specific value) to an identifier (the variable's name) so that the object can be accessed later. Variables can, for example, store a value for later use:

```csharp
string name = "Dr. Jones";
Console.WriteLine("Good morning " + name);
```

In this example "name" is the identifier and "Dr. Jones" is the value that we bound to it. Also, each variable is declared with an explicit type. Only values whose types are compatible with the variable's declared type can be bound to (stored in) the variable. In the above example we stored "Dr. Jones" into a variable of the type string. This is a legal statement. However, if we had said int name = "Dr. Jones", the compiler would have thrown an error telling us that you cannot implicitly convert between int and string. There are methods for doing this, but we will talk about them later.

## Fields, local variables, and parameters 

C# supports several program elements corresponding to the general programming concept of variable: fields, parameters, and local variables.

### Fields 

Fields, sometimes called class-level variables, are variables associated with classes or structures. An instance variable is a field associated with an instance of the class or structure, while a static variable, declared with the static keyword, is a field associated with the type itself. Fields can also be associated with their class by making them constants (const), which requires a declaration assignment of a constant value and prevents subsequent changes to the field.

Each field has a visibility of public, protected, internal, protected internal, or private (from most visible to least visible).

### Local variables 

Like fields, local variables can optionally be constant (const). Constant local variables are stored in the assembly data region, while non-constant local variables are stored on (or referenced from) the stack. They thus have both a scope and an extent of the method or statement block that declares them.

### Parameter 

Parameters are variables associated with a method.

An in parameter may either have its value passed in from the caller to the method's environment, so that changes to the parameter by the method do not affect the value of the caller's variable, or passed in by reference, so that changes to the variables will affect the value of the caller's variable. Value types (int, double, string) are passed in "by value" while reference types (objects) are passed in "by reference." Since this is the default for the C# compiler, it is not necessary to use .

An out parameter does not have its value copied, thus changes to the variable's value within the method's environment directly affect the value from the caller's environment. Such a variable is considered by the compiler to be unbound upon method entry, thus it is illegal to reference an out parameter before assigning it a value. It also must be assigned by the method in each valid (non-exceptional) code path through the method in order for the method to compile.

A reference parameter is similar to an out parameter, except that it is bound before the method call and it need not be assigned by the method.

A params parameter represents a variable number of parameters. If a method signature includes one, the params argument must be the last argument in the signature.

```csharp
// Each pair of lines is what the definition of a method and a call of a 
//   method with each of the parameters types would look like.
// In param:
void MethodOne(int param1)    // definition
MethodOne(variable);          // call

// Out param:
void MethodTwo(out string message)  // definition
MethodTwo(out variable);            // call

// Reference param;
void MethodThree(ref int someFlag)  // definition
MethodThree(ref theFlag)            // call

// Params
void MethodFour(params string[] names)           // definition
MethodFour("Matthew", "Mark", "Luke", "John");   // call
```

## Types 

Each type in C# is either a value type or a reference type. C# has several predefined ("built-in") types and allows for declaration of custom value types and reference types.

There is a fundamental difference between value types and reference types: Value types are allocated on the stack, whereas reference types are allocated on the heap.

### Value types 

The value types in the .NET framework are usually small, frequently used types. The benefit of using them is that the type requires very little resources to get up and running by the CLR. Value types do not require memory to be allocated on the heap and therefore will not cause garbage collection. However, in order to be useful, the value types (or types derived from it) should remain small - ideally below 16 bytes of data. If you choose to make your value type bigger, it is recommended that you do not pass it to methods (which can require a copy of all its fields), or return it from methods.

Although this sounds like a useful type to have, it does have some flaws, which need to be understood when using it.

*   Value types are always copied (intrinsically) before being passed to a method. Changes to this new object will not be reflected back in the original object passed into the method.
*   Value types do not /need/ you to call their constructor. They are automatically initialized.
*   Value types always initialize their fields to 0 or null.
*   Value types can NEVER be assigned a value of null (but can using Nullable types)
*   Value types sometimes need to be _boxed_ (wrapped inside an object), allowing their values to be used like objects.

### Reference types 

Reference types are managed very differently by the CLR. All reference types consist of two parts: A pointer to the heap (which contains the object), and the object itself. Reference types are slightly heavier weight because of the management behind the scenes needed to keep track of them. However, this is a minor price to pay for the flexibility and speed gains from passing a pointer around, rather than copying values to/from methods.

When an object is initialized, by use of the constructor, and is of a reference type, the CLR must perform four operations:

1.  The CLR calculates the amount of memory required to hold the object on the heap.
2.  The CLR inserts the data into the newly created memory space.
3.  The CLR marks where the end of the space lies, so that the next object can be placed there.
4.  The CLR returns a reference to the newly created space.

This occurs every single time an object is created. However the assumption is that there is infinite memory, therefore some maintenance needs to take place - and that's where the garbage collector comes in.

### Integral types 

Because the type system in C# is unified with other languages that are CLI-compliant, each integral C# type is actually an alias for a corresponding type in the .NET framework. Although the names of the aliases vary between .NET languages, the underlying types in the .NET framework remain the same. Thus, objects created in assemblies written in other languages of the .NET Framework can be bound to C# variables of any type to which the value can be converted, per the conversion rules below. The following illustrates the cross-language compatibility of types by comparing C# code with the equivalent Visual Basic .NET code:

```csharp
// C#
public void UsingCSharpTypeAlias()
{
  int i = 42;
}

public void EquivalentCodeWithoutAlias()
{
  System.Int32 i = 42;
}
```

```csharp
 ' Visual Basic .NET
 Public Sub UsingVisualBasicTypeAlias()
   Dim i As Integer = 42
 End Sub

 Public Sub EquivalentCodeWithoutAlias()
   Dim i As System.Int32 = 42
 End Sub
```

Using the language-specific type aliases is often considered more readable than using the fully-qualified .NET Framework type names.

The fact that each C# type corresponds to a type in the unified type system gives each value type a consistent size across platforms and compilers. That consistency is an important distinction from other languages such as C, where, e.g. a long is only guaranteed to be at least as large as an int, and is implemented with different sizes by different compilers. As reference types, variables of types derived from object (i.e. any class) are exempt from the consistent size requirement. That is, the size of reference types like System.IntPtr, as opposed to value types like System.Int32, may vary by platform. Fortunately, there is rarely a need to know the actual size of a reference type.

There are two predefined reference types: object, an alias for the System.Object class, from which all other reference types derive; and string, an alias for the System.String class. C# likewise has several integral value types, each an alias to a corresponding value type in the System namespace of the .NET Framework. The predefined C# type aliases expose the methods of the underlying .NET Framework types. For example, since the .NET Framework's System.Int32 type implements a ToString() method to convert the value of an integer to its string representation, C#'s int type exposes that method:

```csharp
int i = 97;
string s = i.ToString();  // The value of s is now the string "97".
```

Likewise, the System.Int32 type implements the Parse() method, which can therefore be accessed via C#'s int type:

```csharp
string s = "97";
int i = int.Parse(s); // The value of i is now the integer 97.
```

The unified type system is enhanced by the ability to convert value types to reference types (boxing) and likewise to convert certain reference types to their corresponding value types (unboxing). This is also known as casting.

```csharp
object boxedInteger = 97;
int unboxedInteger = (int) boxedInteger;
```

Boxing and casting are, however, not type-safe: the compiler won't generate an error if the programmer mixes up the types. In the following short example the mistake is quite obvious, but in complex programs it may be very difficult to spot. Avoid boxing, if possible.

```csharp
object getInteger = "97";
int anInteger = (int) getInteger; // No compile-time error. The program will crash, however.
```

The built-in C# type aliases and their equivalent .NET Framework types follow:

#### Integers 

| C# Alias | .NET Type | Size (bits) | Range |
| --- | --- | --- | --- |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[sbyte](/wiki/C_Sharp_Programming/Keywords/sbyte "C Sharp Programming/Keywords/sbyte")</span> | System.SByte | 8 | -128 to 127 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[byte](/wiki/C_Sharp_Programming/Keywords/byte "C Sharp Programming/Keywords/byte")</span> | System.Byte | 8 | 0 to 255 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[short](/wiki/C_Sharp_Programming/Keywords/short "C Sharp Programming/Keywords/short")</span> | System.Int16 | 16 | -32,768 to 32,767 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[ushort](/wiki/C_Sharp_Programming/Keywords/ushort "C Sharp Programming/Keywords/ushort")</span> | System.UInt16 | 16 | 0 to 65,535 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[char](/wiki/C_Sharp_Programming/Keywords/char "C Sharp Programming/Keywords/char")</span> | System.Char | 16 | A unicode character of code 0 to 65,535 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[int](/wiki/C_Sharp_Programming/Keywords/int "C Sharp Programming/Keywords/int")</span> | System.Int32 | 32 | -2,147,483,648 to 2,147,483,647 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[uint](/wiki/C_Sharp_Programming/Keywords/uint "C Sharp Programming/Keywords/uint")</span> | System.UInt32 | 32 | 0 to 4,294,967,295 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[long](/wiki/C_Sharp_Programming/Keywords/long "C Sharp Programming/Keywords/long")</span> | System.Int64 | 64 | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[ulong](/wiki/C_Sharp_Programming/Keywords/ulong "C Sharp Programming/Keywords/ulong")</span> | System.UInt64 | 64 | 0 to 18,446,744,073,709,551,615 |

#### Floating-point 

| C# Alias | .NET Type | Size (bits) | Precision | Range |
| --- | --- | --- | --- | --- |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[float](/wiki/C_Sharp_Programming/Keywords/float "C Sharp Programming/Keywords/float")</span> | System.Single | 32 | 7 digits | 1.5 x 10<sup>-45</sup> to 3.4 x 10<sup>38</sup> |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[double](/wiki/C_Sharp_Programming/Keywords/double "C Sharp Programming/Keywords/double")</span> | System.Double | 64 | 15-16 digits | 5.0 x 10<sup>-324</sup> to 1.7 x 10<sup>308</sup> |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[decimal](/wiki/C_Sharp_Programming/Keywords/decimal "C Sharp Programming/Keywords/decimal")</span> | System.Decimal | 128 | 28-29 decimal places | 1.0 x 10<sup>-28</sup> to 7.9 x 10<sup>28</sup> |

#### Other predefined types 

| C# Alias | .NET Type | Size (bits) | Range |
| --- | --- | --- | --- |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[bool](/wiki/C_Sharp_Programming/Keywords/bool "C Sharp Programming/Keywords/bool")</span> | System.Boolean | 32 | true or false, which aren't related to any integer in C#. |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[object](/wiki/C_Sharp_Programming/Keywords/object "C Sharp Programming/Keywords/object")</span> | System.Object | 32/64 | Platform dependent (a pointer to an object). |
| <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[string](/wiki/C_Sharp_Programming/Keywords/string "C Sharp Programming/Keywords/string")</span> | System.String | 16*length | A unicode string with no special upper bound. |

### Custom types 

The predefined types can be aggregated and extended into custom types.

Custom value types are declared with the struct or enum keyword. Likewise, custom reference types are declared with the class keyword.

#### Arrays 

Although the number of dimensions is included in array declarations, the size of each dimension is not:

```csharp
string[] a_str;
```

Assignments to an array variable (prior to the variable's usage), however, specify the size of each dimension:

```csharp
a_str = new string[5];
```

As with other variable types, the declaration and the initialization can be combined:

```csharp
string[] a_str = new string[5];
```

It is also important to note that like in Java, arrays are passed by reference, and not passed by value. For example, the following code snippet successfully swaps two elements in an integer array:

```csharp
static void swap (int[] a_iArray, int iI, int iJ)
{
    int iTemp = a_iArray[iI];

    a_iArray[iI] = a_iArray[iJ];
    a_iArray[iJ] = iTemp;
}
```

It is possible to determine the array size during runtime. The following example assigns the loop counter to the unsigned short array elements:

```csharp
    ushort[] a_usNumbers = new ushort[234];
    [...]
    for (ushort us = 0; us < a_usNumbers.Length; us++)
    {
        a_usNumbers[us] = us;
    }
```

Since C# 2.0, it is possible to have arrays also inside of structures.

## Text & variable example 

```csharp
using System;

namespace Login
{
  class Username_Password
  {
    public static void Main()
    {
      string username,password;
      Console.Write("Enter username: ");
      username = Console.ReadLine();
      Console.Write("Enter password: ");
      password = Console.ReadLine();

      if (username == "SomePerson" && password == "SomePassword")
      {
      	Console.WriteLine("Access Granted.");
      }
      else if (username != "SomePerson" && password == "SomePassword")
      {
      	Console.WriteLine("The username is wrong.");
      }
      else if (username == "SomePerson" && password != "SomePassword")
      {
      	Console.WriteLine("The password is wrong.");
      }
      else
      {
      	Console.WriteLine("Access Denied.");
      }
    }
  }
}
```

### Conversion 

Values of a given type may or may not be explicitly or implicitly convertible to other types depending on predefined conversion rules, inheritance structure, and explicit cast definitions.

#### Predefined conversions 

Many predefined value types have predefined conversions to other predefined value types. If the type conversion is guaranteed not to lose information, the conversion can be implicit (i.e. an explicit cast is not required).

#### Inheritance polymorphism 

A value can be implicitly converted to any class from which it inherits or interface that it implements. To convert a base class to a class that inherits from it, the conversion must be explicit in order for the conversion statement to compile. Similarly, to convert an interface instance to a class that implements it, the conversion must be explicit in order for the conversion statement to compile. In either case, the runtime environment throws a conversion exception if the value to convert is not an instance of the target type or any of its derived types.

## Scope and extent 

The scope and extent of variables is based on their declaration. The scope of parameters and local variables corresponds to the declaring method or statement block, while the scope of fields is associated with the instance or class and is potentially further restricted by the field's access modifiers.

The extent of variables is determined by the runtime environment using implicit reference counting and a complex garbage collection algorithm.

C# operators and their precedence closely resemble the operators in other languages of the C family.

Similar to C++, classes can overload most operators, defining or redefining the behavior of the operators in contexts where the first argument of that operator is an instance of that class, but doing so is often discouraged for clarity.

Operators can be grouped by their arity as unary, binary.

Following are the built-in behaviors of C# operators.

## Arithmetic 

The following arithmetic operators operate on numeric operands (arguments a and b in the "sample usage" below).

| Sample usage | Read | Type | Explanation |
| --- | --- | --- | --- |
| `<span class="n">a</span> <span class="p">+</span> <span class="n">b</span>` | `<span class="n">a</span>` _plus_ `<span class="n">b</span>` | binary | `<span class="p">+</span>` returns the [sum](//en.wikipedia.org/wiki/en:addition "w:en:addition") of its arguments. |
| `<span class="n">a</span> <span class="p">-</span> <span class="n">b</span>` | `<span class="n">a</span>` _minus_ `<span class="n">b</span>` | binary | `<span class="p">-</span>` returns the [difference](//en.wikipedia.org/wiki/en:subtraction "w:en:subtraction") between its arguments. |
| `<span class="n">a</span><span class="p">*</span><span class="n">b</span>` | `<span class="n">a</span>` _times_ `<span class="n">b</span>` | binary | `<span class="p">*</span>` returns the [multiplicative product](//en.wikipedia.org/wiki/en:multiplication "w:en:multiplication") of its arguments. |
| `<span class="n">a</span><span class="p">/</span><span class="n">b</span>` | `<span class="n">a</span>` _divided by_ `<span class="n">b</span>` | binary | `<span class="p">/</span>` returns the [quotient](//en.wikipedia.org/wiki/en:division_(mathematics) "w:en:division (mathematics)") of its arguments. If both of its operators are integers, it obtains that quotient using _integer division_ (i.e. it drops any resulting remainder). |
| `<span class="n">a</span><span class="p">%</span><span class="n">b</span>` | `<span class="n">a</span>` _mod_ `<span class="n">b</span>` | binary | `<span class="p">%</span>` operates only on integer arguments. It returns the [remainder](//en.wikipedia.org/wiki/en:remainder "w:en:remainder") of _integer division_ of those arguments. _(See [modular arithmetic](//en.wikipedia.org/wiki/en:modular_arithmetic "w:en:modular arithmetic").)_ |
| `<span class="n">a</span><span class="p">++</span>` | `<span class="n">a</span>` _plus plus_ or _Postincrement_ `<span class="n">a</span>` | unary | `<span class="p">++</span>` operates only on arguments that have an _l-value_. When placed **after** its argument, it increments that argument by 1 and returns the value of that argument before it was incremented. |
| `<span class="p">++</span><span class="n">a</span>` | _plus plus_ `<span class="n">a</span>` or _Preincrement_ `<span class="n">a</span>` | unary | `<span class="p">++</span>` operates only on arguments that have an _l-value_. When placed **before** its argument, it increments that argument by 1 and returns the resulting value. |
| `<span class="n">a</span><span class="p">--</span>` | `<span class="n">a</span>` _minus minus_ or _Postdecrement_ `<span class="n">a</span>` | unary | `<span class="p">--</span>` operates only on arguments that have an _l-value_. When placed **after** its argument, it decrements that argument by 1 and returns the value of that argument before it was decremented. |
| `<span class="p">--</span><span class="n">a</span>` | _minus minus_ `<span class="n">a</span>` or _Predecrement_ `<span class="n">a</span>` | unary | `<span class="p">--</span>` operates only on arguments that have an _l-value_. When placed **before** its argument, it decrements that argument by 1 and returns the resulting value. |

## Logical 

The following logical operators operate on boolean or integral operands, as noted.

| Sample usage | Read | Type | Explanation |
| --- | --- | --- | --- |
| `<span class="n">a</span><span class="p">&</span><span class="n">b</span>` | `<span class="n">a</span>` _bitwise and_ `<span class="n">b</span>` | binary | `<span class="p">&</span>` evaluates both of its operands and returns the [logical conjunction](//en.wikipedia.org/wiki/en:Logical_conjunction "w:en:Logical conjunction") ("AND") of their results. If the operands are integral, the logical conjunction is performed bitwise. |
| `<span class="n">a</span><span class="p">&&</span><span class="n">b</span>` | `<span class="n">a</span>` _and_ `<span class="n">b</span>` | binary | `<span class="p">&&</span>` operates on boolean operands only. It evaluates its first operand. If the result is _false_, it returns _false_. Otherwise, it evaluates and returns the results of the second operand. Note that, if evaluating the second operand would hypothetically have no side effects, the results are identical to the logical conjunction performed by the `<span class="p">&</span>` operator. This is an example of [Short Circuit Evaluation](//en.wikipedia.org/wiki/en:Short-circuit_evaluation "w:en:Short-circuit evaluation"). |
| `a | b` | `<span class="n">a</span>` _bitwise or_ `<span class="n">b</span>` | binary | `|` evaluates both of its operands and returns the [logical disjunction](//en.wikipedia.org/wiki/en:Logical_disjunction "w:en:Logical disjunction") ("OR") of their results. If the operands are integral, the logical disjunction is performed bitwise. |
| `a || b` | `<span class="n">a</span>` _or_ `<span class="n">b</span>` | binary | `||` operates on boolean operands only. It evaluates the first operand. If the result is _true_, it returns _true_. Otherwise, it evaluates and returns the results of the second operand. Note that, if evaluating the second operand would hypothetically have no side effects, the results are identical to the logical disjunction performed by the `|` operator. This is an example of [Short Circuit Evaluation](//en.wikipedia.org/wiki/en:Short-circuit_evaluation "w:en:Short-circuit evaluation"). |
| `<span class="n">a</span> <span class="p">^</span> <span class="n">b</span>` | `<span class="n">a</span>` _x-or_ `<span class="n">b</span>` | binary | `^` returns the [exclusive or](//en.wikipedia.org/wiki/en:exclusive_or "w:en:exclusive or") ("XOR") of their results. If the operands are integral, the exclusive or is performed bitwise. |
| `<span class="p">!</span><span class="n">a</span>` | _not_ `<span class="n">a</span>` | unary | `<span class="p">!</span>` operates on a boolean operand only. It evaluates its operand and returns the [negation](//en.wikipedia.org/wiki/en:negation "w:en:negation") ("NOT") of the result. That is, it returns _true_ if `<span class="n">a</span>` evaluates to _false_ and it returns _false_ if `<span class="n">a</span>` evaluates to _true_. |
| `<span class="p">~</span><span class="n">a</span>` | _bitwise not_ `<span class="n">a</span>` | unary | `<span class="p">~</span>` operates on integral operands only. It evaluates its operand and returns the bitwise negation of the result. That is, `<span class="p">~</span><span class="n">a</span>` returns a value where each bit is the negation of the corresponding bit in the result of evaluating `<span class="n">a</span>`. |

## Bitwise shifting 

| Sample usage | Read | Type | Explanation |
| --- | --- | --- | --- |
| `<span class="n">a</span> <span class="p"><<</span> <span class="n">b</span>` | `<span class="n">a</span>` _left shift_ `<span class="n">b</span>` | binary | `<span class="p"><<</span>` evaluates its operands and returns the resulting first argument left-shifted by the number of bits specified by the second argument. It discards high-order bits that shift beyond the size of its first argument and sets new low-order bits to zero. |
| `<span class="n">a</span> <span class="p">>></span> <span class="n">b</span>` | `<span class="n">a</span>` _right shift_ `<span class="n">b</span>` | binary | `<span class="p">>></span>` evaluates its operands and returns the resulting first argument right-shifted by the number of bits specified by the second argument. It discards low-order bits that are shifted beyond the size of its first argument and sets new high-order bits to the sign bit of the first argument, or to zero if the first argument is unsigned. |

## Relational 

The binary relational operators ==, !=, <, >, <=, and >= are used for relational operations and for type comparisons.

| Sample usage | Read | Explanation |
| --- | --- | --- |
| `a == b` | `<span class="n">a</span>` _is equal to_ `<span class="n">b</span>` | For arguments of _value_ type, the operator `==` returns _true_, if its operands have the same value, false otherwise. For the _string_ type, it returns _true_, if the strings' character sequences match. For other _reference_ types (types derived from `<span class="n">System</span><span class="p">.</span><span class="n">Object</span>`), however, `a == b` returns _true_ only if `<span class="n">a</span>` and `<span class="n">b</span>` reference the same object. |
| `a != b` | `<span class="n">a</span>` _is not equal to_ `b` | The operator `!=` returns the logical negation of the operator `==`. Thus, it returns _true_, if `a` is not equal to `b`, and _false_, if they are equal. |
| `a < b` | `<span class="n">a</span>` _is less than_ `<span class="n">b</span>` | The operator `<span class="p"><</span>` operates on integral types. It returns _true_, if `<span class="n">a</span>` is less than `b`, _false_ otherwise. |
| `a > b` | `<span class="n">a</span>` _is greater than_ `<span class="n">b</span>` | The operator `<span class="p">></span>` operates on integral types. It returns _true_, if `<span class="n">a</span>` is greater than `<span class="n">b</span>`, _false_ otherwise. |
| `a <= b` | `<span class="n">a</span>` _is less than or equal to_ `<span class="n">b</span>` | The operator `<=` operates on integral types. It returns _true_, if `<span class="n">a</span>` is less than or equal to `<span class="n">b</span>`, _false_ otherwise. |
| `a >= b` | `<span class="n">a</span>` _is greater than or equal to_ `<span class="n">b</span>` | The operator `>=` operates on integral types. It returns _true_, if `<span class="n">a</span>` is greater than or equal to `<span class="n">b</span>`, _false_ otherwise. |

## Assignment 

The assignment operators are binary. The most basic is the operator =. Not surprisingly, it assigns the value (or reference) of its second argument to its first argument.

(More technically, the operator = requires for its first (left) argument an expression to which a value can be assigned (an l-value) and for its second (right) argument an expression that can be evaluated (an r-value). That requirement of an assignable expression to its left and a bound expression to its right is the origin of the terms l-value and r-value.)

The first argument of the assignment operator (=) is typically a variable. When that argument has a value type, the assignment operation changes the argument's underlying value. When the first argument is a reference type, the assignment operation changes the reference, so the first argument typically just refers to a different object, but the object that it originally referenced does not change (except that it may no longer be referenced and may thus be a candidate for garbage collection).

| Sample usage | Read | Explanation |
| --- | --- | --- |
| `a = b` | `<span class="n">a</span>` _equals_ (or _set to_) `<span class="n">b</span>` | The operator `=` evaluates its second argument and then assigns the results to (the _l-value_ indicated by) its first argument. |
| `a = b = c` | `<span class="n">b</span>` _set to_ `<span class="n">c</span>`, and then `<span class="n">a</span>` _set to_ `<span class="n">b</span>` | Equivalent to `a = (b = c)`. When there are consecutive assignments, the right-most assignment is evaluated first, proceeding from right to left. In this example, both variables `<span class="n">a</span>` and `<span class="n">b</span>` have the value of `<span class="n">c</span>`. |

## Short-hand Assignment 

The short-hand assignment operators shortens the common assignment operation of a = a operator b into a operator= b, resulting in less typing and neater syntax.

| Sample usage | Read | Explanation |
| --- | --- | --- |
| `a += b` | `<span class="n">a</span>` _plus equals_ (or _increment by_) `<span class="n">b</span>` | Equivalent to `a = a + b`. |
| `a -= b` | `<span class="n">a</span>` _minus equals_ (or _decrement by_) `<span class="n">b</span>` | Equivalent to `a = a - b`. |
| `a *= b` | `<span class="n">a</span>` _multiply equals_ (or _multiplied by_) `<span class="n">b</span>` | Equivalent to `a = a*b`. |
| `a /= b` | `<span class="n">a</span>` _divide equals_ (or _divided by_) `<span class="n">b</span>` | Equivalent to `a = a/b`. |
| `a %= b` | `<span class="n">a</span>` _mod equals_ `<span class="n">b</span>` | Equivalent to `a = a%b`. |
| `a &= b` | `<span class="n">a</span>` _and equals_ `<span class="n">b</span>` | Equivalent to `a = a&b`. |
| `a |= b` | `<span class="n">a</span>` _or equals_ `<span class="n">b</span>` | Equivalent to `a = a|b`. |
| `a ^= b` | `<span class="n">a</span>` _xor equals_ `<span class="n">b</span>` | Equivalent to `a = a^b`. |
| `a <<= b` | `<span class="n">a</span>` _left-shift equals_ `<span class="n">b</span>` | Equivalent to `a = a << b`. |
| `a >>= b` | `<span class="n">a</span>` _right-shift equals_ `<span class="n">b</span>` | Equivalent to `a = a >> b`. |

## Type information 

| Expression | Explanation |
| --- | --- |
| `<span class="n">x</span> <span class="k">is</span> <span class="n">T</span>` | returns true, if the variable `<span class="n">x</span>` of base class type stores an object of derived class type T, or, if `<span class="n">x</span>` is of type `<span class="n">T</span>`. Else returns false. |
| `<span class="n">x</span> <span class="k">as</span> <span class="n">T</span>` | returns `<span class="p">(</span><span class="n">T</span><span class="p">)</span><span class="n">x</span>` _(x cast to T)_, if the variable `<span class="n">x</span>` of base class type stores an object of derived class type `<span class="n">T</span>`, or, if `<span class="n">x</span>` is of type `<span class="n">T</span>`. Else returns null. Equivalent to `<span class="n">x</span> <span class="k">is</span> <span class="n">T</span> <span class="p">?</span> <span class="p">(</span><span class="n">T</span><span class="p">)</span><span class="n">x</span> <span class="p">:</span> <span class="k">null</span>` |
| `<span class="k">sizeof</span><span class="p">(</span><span class="n">x</span><span class="p">)</span>` | returns the size of the value type `<span class="n">x</span>`. Remarks: The sizeof operator can be applied only to value types, not reference types.. |
| `<span class="k">typeof</span><span class="p">(</span><span class="n">T</span><span class="p">)</span>` | returns a `<span class="n">System</span><span class="p">.</span><span class="n">Type</span>` object describing the type. `<span class="n">T</span>` must be the name of the type, and not a variable. Use the `<span class="n">GetType</span>` method to retrieve run-time type information of variables. |

## Pointer manipulation 

NOTE: Most C# developers agree that direct manipulation and use of pointers is not recommended in C#. The language has many built-in classes to allow you to do almost any operation you want. C# was built with memory-management in mind and the creation and use of pointers is greatly disruptive to this end. This speaks to the declaration of pointers and the use of pointer notation, not arrays. In fact, a program may only be compiled in "unsafe mode", if it uses pointers.

| Expression | Explanation |
| --- | --- |
| `<span class="p">*</span><span class="n">a</span>` | _Indirection_ operator. Allows access the object being pointed. |
| `<span class="n">a</span><span class="p">-></span><span class="n">member</span>` | Similar to the `<span class="p">.</span>` operator. Allows access to members of classes and structs being pointed. |
| `<span class="n">a</span><span class="p">[]</span>` | Used to _index_ a pointer. |
| `<span class="p">&</span><span class="n">a</span>` | References the _address_ of the pointer. |
| `<span class="k">stackalloc</span>` | allocates memory on the stack. |
| `<span class="k">fixed</span>` | Temporarily fixes a variable in order that its address may be found. |

## Overflow exception control 

| Expression | Explanation |
| --- | --- |
| `<span class="k">checked</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>` | uses overflow checking on value `<span class="n">a</span>` |
| `<span class="k">unchecked</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>` | avoids overflow checking on value `<span class="n">a</span>` |

## Others 

| Expression | Explanation |
| --- | --- |
| `<span class="n">a</span><span class="p">.</span><span class="n">b</span>` | accesses member `<span class="n">b</span>` of type or namespace `<span class="n">a</span>` |
| `<span class="n">a</span><span class="p">[</span><span class="n">b</span><span class="p">]</span>` | the value of index `<span class="n">b</span>` in `<span class="n">a</span>` |
| `<span class="p">(</span><span class="n">a</span><span class="p">)</span><span class="n">b</span>` | casts the value `<span class="n">b</span>` to type `<span class="n">a</span>` |
| `<span class="k">new</span> <span class="n">a</span>` | creates an object of type `<span class="n">a</span>` |
| `<span class="n">a</span> <span class="p">+</span> <span class="n">b</span>` | if `<span class="n">a</span>` and `<span class="n">b</span>` are strings, concatenates `<span class="n">a</span>` and `<span class="n">b</span>`. If any addend is `<span class="k">null</span>`, the empty string is used instead. If one addend is a string and the other one is a non-string object, `<span class="n">ToString</span><span class="p">()</span>` is called on that object before concatenation. |
| `<span class="n">a</span> <span class="p">+</span> <span class="n">b</span>` | if `<span class="n">a</span>` and `<span class="n">b</span>` are delegates, performs delegate concatenation |
| `<span class="n">a</span> <span class="p">?</span> <span class="n">b</span> <span class="p">:</span> <span class="n">c</span>` | if `<span class="n">a</span>` is true, returns the value of `<span class="n">b</span>`, otherwise `<span class="n">c</span>` |
| `<span class="n">a</span> <span class="p">??</span> <span class="n">b</span>` | if `<span class="n">a</span>` is `<span class="k">null</span>`, returns `<span class="n">b</span>`, otherwise returns `<span class="n">a</span>` |
| `<span class="s">@"a"</span>` | verbatim text, i.e., escape characters are ignored |

There are various ways of grouping sets of data together in C#.

## Enumerations 

An enumeration is a data type that enumerates a set of items by assigning to each of them an identifier (a name), while exposing an underlying base type for ordering the elements of the enumeration. The underlying type is int by default, but can be any one of the integral types except for char.

Enumerations are declared as follows:

```csharp
 enum Weekday { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };
```

The elements in the above enumeration are then available as constants:

```csharp
 Weekday day = Weekday.Monday;

 if (day == Weekday.Tuesday)
 {
     Console.WriteLine("Time sure flies by when you program in C#!");
 }
```

If no explicit values are assigned to the enumerated items as the example above, the first element has the value 0, and the successive values are assigned to each subsequent element. However, specific values from the underlying integral type can be assigned to any of the enumerated elements (note that the variable must be type cast in order to access the base type):

```csharp
 enum Age { Infant = 0, Teenager = 13, Adult = 18 };
 
 Age myAge = Age.Teenager;
 Console.WriteLine("You become a teenager at an age of {0}.", (int)myAge);
```

The underlying values of enumerated elements may go unused when the purpose of an enumeration is simply to group a set of items together, e.g., to represent a nation, state, or geographical territory in a more meaningful way than an integer could. Rather than define a group of logically related constants, it is often more readable to use an enumeration.

It may be desirable to create an enumeration with a base type other than int. To do so, specify any integral type besides char as with base class extension syntax after the name of the enumeration, as follows:

```csharp
 enum CardSuit : byte { Hearts, Diamonds, Spades, Clubs };
```

The enumeration type is also helpful, if you need to output the value. By calling the .ToString() method on the enumeration, will output the enumerations name (e.g. CardSuit.Hearts.ToString() will output "Hearts").

## Structs 

Structures (keyword struct) are light-weight objects. They are mostly used when only a data container is required for a collection of value type variables. Structs are similar to classes in that they can have constructors, methods, and even implement interfaces, but there are important differences.

*   _Structs_ are value types while _classes_ are reference types, which means they behave differently when passed into methods as parameters.
*   _Structs_ cannot support inheritance. While _structs_ may appear to be limited with their use, they require less memory and can be less expensive, if used in the proper way.
*   _Structs_ always have a default constructor, even if you don't want one. Classes allow you to hide the constructor away by using the "private" modifier, whereas structures _must_ have one.

A struct can, for example, be declared like this:

```csharp
 struct Person
 {
     public string name;
     public System.DateTime birthDate;
     public int heightInCm;
     public int weightInKg;
 }
```

The Person struct can then be used like this:

```csharp
 Person dana = new Person();
 dana.name = "Dana Developer";
 dana.birthDate = new DateTime(1974, 7, 18);
 dana.heightInCm = 178;
 dana.weightInKg = 50;
 
 if (dana.birthDate < DateTime.Now)
 {
     Console.WriteLine("Thank goodness! Dana Developer isn't from the future!");
 }
```

It is also possible to provide constructors to structs to make it easier to initialize them:

```csharp
 using System;
 struct Person
 {
     string name;
     DateTime birthDate;
     int heightInCm;
     int weightInKg;
 
     public Person(string name, DateTime birthDate, int heightInCm, int weightInKg)
     {
         this.name = name;
         this.birthDate = birthDate;
         this.heightInCm = heightInCm;
         this.weightInKg = weightInKg;
     }
 }
 
 public class StructWikiBookSample
 {
     public static void Main()
     {
         Person dana = new Person("Dana Developer", new DateTime(1974, 7, 18), 178, 50);
     }
 }
```

There is also an alternative syntax for initializing structs:

```csharp
struct Person
{
    public string Name;
    public int Height;
    public string Occupation;
}

public class StructWikiBookSample2
{
    public static void Main()
    {
        Person john = new Person { Name = "John", Height = 182, Occupation = "Programmer" };
    }
}
```

Structs are really only used for performance reasons or, if you intend to reference it by value. Structs work best when holding a total equal to or less than 16 bytes of data. If in doubt, use classes.

## Arrays 

Arrays represent a set of items all belonging to the same type. The declaration itself may use a variable or a constant to define the length of the array. However, an array has a set length and it cannot be changed after declaration.

```csharp
// an array whose length is defined with a constant
int[] integers = new int[20];

int length = 0;
System.Console.Write("How long should the array be? ");
length = int.Parse(System.Console.ReadLine());
// an array whose length is defined with a variable
// this array still can't change length after declaration
double[] doubles = new double[length];
```

Conditional, iteration, jump, and exception handling statements control a program's flow of execution.

A conditional statement can decide something using keywords such as if, switch.

An iteration statement can create a loop using keywords such as do, while, for, foreach, and in.

A jump statement can be used to transfer program control using keywords such as break, continue, return, and yield.

## Conditional statements 

A conditional statement decides whether to execute code based on conditions. The if statement and the switch statement are the two types of conditional statements in C#.

### if statement 

As with most of C#, the if statement has the same syntax as in C, C++, and Java. Thus, it is written in the following form:

```csharp
if (condition)
{
  // Do something
} 
else
{
  // Do something else
}
```

The if statement evaluates its condition expression to determine whether to execute the if-body. Optionally, an else clause can immediately follow the if body, providing code to execute when the condition is false. Making the else-body another if statement creates the common cascade of if, else if, else if, else if, else statements:

```csharp
using System;

public class IfStatementSample
{
    public void IfMyNumberIs()
    {
        int myNumber = 5;

        if ( myNumber == 4 )
            Console.WriteLine("This will not be shown because myNumber is not 4.");
        else if( myNumber < 0 )
        {
            Console.WriteLine("This will not be shown because myNumber is not negative.");
        }
        else if( myNumber % 2 == 0 )
            Console.WriteLine("This will not be shown because myNumber is not even.");
        else
        {
            Console.WriteLine("myNumber does not match the coded conditions, so this sentence will be shown!");
        }
    }
}
```

### switch statement 

The switch statement is similar to the statement from C, C++ and Java.

Unlike C, each case statement must finish with a jump statement (that can be break or goto or return). In other words, C# does not support "fall through" from one case statement to the next (thereby eliminating a common source of unexpected behaviour in C programs). However "stacking" of cases is allowed, as in the example below. If goto is used, it may refer to a case label or the default case (e.g. goto case 0 or goto default).

The default label is optional. If no default case is defined, then the default behaviour is to do nothing.

A simple example:

```csharp
switch (nCPU)
{
    case 0:
        Console.WriteLine("You don't have a CPU! :-)");
        break;
    case 1:
        Console.WriteLine("Single processor computer");
        break;
    case 2:
        Console.WriteLine("Dual processor computer");
        break;
        // Stacked cases
    case 3:
        // falls through
    case 4:
        // falls through
    case 5:
        // falls through
    case 6:
        // falls through
    case 7:
        // falls through
    case 8:
        Console.WriteLine("A multi processor computer");
        break;
    default:
        Console.WriteLine("A seriously parallel computer");
        break;
}
```

A nice improvement over the C switch statement is that the switch variable can be a string. For example:

```csharp
switch (aircraftIdent)
{
    case "C-FESO":
        Console.WriteLine("Rans S6S Coyote");
        break;
    case "C-GJIS":
        Console.WriteLine("Rans S12XL Airaile");
        break;
    default:
        Console.WriteLine("Unknown aircraft");
        break;
}
```

## Iteration statements 

An iteration statement creates a loop of code to execute a variable number of times. The for loop, the do loop, the while loop, and the foreach loop are the iteration statements in C#.

### do ... while loop 

The do...while loop likewise has the same syntax as in other languages derived from C. It is written in the following form:

<dl>

<dd>_do...while-loop_ ::= "do" _body_ "while" "(" _condition_ ")"</dd>

<dd>_condition_ ::= _boolean-expression_</dd>

<dd>_body_ ::= _statement-or-statement-block_</dd>

</dl>

The do...while loop always runs its body once. After its first run, it evaluates its condition to determine whether to run its body again. If the condition is true, the body executes. If the condition evaluates to true again after the body has ran, the body executes again. When the condition evaluates to false, the do...while loop ends.

```csharp
using System;

public class DoWhileLoopSample
{
    public void PrintValuesFromZeroToTen()
    {
        int number = 0;

        do
        {
            Console.WriteLine(number++.ToString());
        } while(number <= 10);
    }
}
```

The above code writes the integers from 0 to 10 to the console.

### for loop 

The for loop likewise has the same syntax as in other languages derived from C. It is written in the following form:

<dl>

<dd>_for-loop_ ::= "for" "(" _initialization_ ";" _condition_ ";" _iteration_ ")" _body_</dd>

<dd>_initialization_ ::= _variable-declaration_ | _list-of-statements_</dd>

<dd>_condition_ ::= _boolean-expression_</dd>

<dd>_iteration_ ::= _list-of-statements_</dd>

<dd>_body_ ::= _statement-or-statement-block_</dd>

</dl>

The initialization variable declaration or statements are executed the first time through the for loop, typically to declare and initialize an index variable. The condition expression is evaluated before each pass through the body to determine whether to execute the body. It is often used to test an index variable against some limit. If the condition evaluates to true, the body is executed. The iteration statements are executed after each pass through the body, typically to increment or decrement an index variable.

```csharp
public class ForLoopSample
{
    public void ForFirst100NaturalNumbers()
    {
        for (int i = 0; i < 100; i++)
        {
            System.Console.WriteLine(i.ToString());
        }
    }
}
```

The above code writes the integers from 0 to 99 to the console.

### foreach loop 

The foreach statement is similar to the for statement in that both allow code to iterate over the items of collections, but the foreach statement lacks an iteration index, so it works even with collections that lack indices altogether. It is written in the following form:

<dl>

<dd>_foreach-loop_ ::= "foreach" "(" _variable-declaration_ "in" _enumerable-expression_ ")" _body_</dd>

<dd>_body_ ::= _statement-or-statement-block_</dd>

</dl>

The enumerable-expression is an expression of a type that implements '''IEnumerable''', so it can be an array or a collection. The variable-declaration declares a variable that will be set to the successive elements of the enumerable-expression for each pass through the body. The foreach loop exits when there are no more elements of the enumerable-expression to assign to the variable of the variable-declaration.

```csharp
public class ForEachSample
{
    public void DoSomethingForEachItem()
    {
        string[] itemsToWrite = {"Alpha", "Bravo", "Charlie"};

        foreach (string item in itemsToWrite)
        System.Console.WriteLine(item);
    }
}
```

In the above code, the foreach statement iterates over the elements of the string array to write "Alpha", "Bravo", and "Charlie" to the console.

### while loop 

The while loop has the same syntax as in other languages derived from C. It is written in the following form:

<dl>

<dd>_while-loop_ ::= "while" "(" _condition_ ")" _body_</dd>

<dd>_condition_ ::= _boolean-expression_</dd>

<dd>_body_ ::= _statement-or-statement-block_</dd>

</dl>

The while loop evaluates its condition to determine whether to run its body. If the condition is true, the body executes. If the condition then evaluates to true again, the body executes again. When the condition evaluates to false, the while loop ends.

```csharp
using System;

public class WhileLoopSample
{
    public void RunForAWhile()
    {
        TimeSpan durationToRun = new TimeSpan(0, 0, 30);
        DateTime start = DateTime.Now;

        while (DateTime.Now - start < durationToRun)
        {
            Console.WriteLine("not finished yet");
        }
        Console.WriteLine("finished");
    }
}
```

## Jump statements 

A jump statement can be used to transfer program control using keywords such as break, continue, return, yield, and throw.

### break 

A break statement is used to exit from a case in a switch statement and also used to exit from for, foreach, while, do .. while loops that will switch the control to the statement immediately after the end of the loop.

```csharp
using System;

namespace JumpSample
{
    public class Entry
    {
        static void Main(string[] args)
        {
            int i;
 
            for (i = 0; i < 10; i++) // see the comparison, i < 10
            {
                if (i >= 3)
                {
                    break; 
                    // Not run over the code, and get out of loop.
                    // Note: The rest of code will not be executed,
                    //       & it leaves the loop instantly
                }
            }
            // Here check the value of i, it will be 3, not 10.
            Console.WriteLine("The value of OneExternCounter: {0}", i);
        }
    }
}
```

### continue 

The continue keyword transfers program control just before the end of a loop. The condition for the loop is then checked, and if it is met, the loop performs another iteration.

```csharp
using System;

namespace JumpSample
{
    public class Entry
    {
        static void Main(string[] args)
        {
            int OneExternCounter = 0;

            for (int i = 0; i < 10; i++)
            {
                if (i >= 5)
                {
                    continue;   // Not run over the code, and return to the beginning 
                                // of the scope as if it had completed the loop
                }
                OneExternCounter += 1;
            }
            // Here check the value of OneExternCounter, it will be 5, not 10.
            Console.WriteLine("The value of OneExternCounter: {0}", OneExternCounter);
        }
    }
}
```

### return 

The return keyword identifies the return value for the function or method (if any), and transfers control to the end of the function.

```csharp
namespace JumpSample
{
    public class Entry
    {
        static int Fun()
        {
            int a = 3;
            return a; // the code terminates here from this function
            a = 9;    // here is a block that will not be executed
        }

        static void Main(string[] args)
        {
            int OnNumber = Fun();
            // the value of OnNumber is 3, not 9...
        }
    }
}
```

### yield 

The yield keyword is used to define an iterator block that produces values for an enumerator. It is typically used within a method implementation of the IEnumerable interface as an easy way to create an iterator. It is written in the following forms:

<dl>

<dd>_yield_ ::= "yield" "return" _expression_</dd>

<dd>_yield_ ::= "yield" "break"</dd>

</dl>

The following example shows the usage of the yield keyword inside the method MyCounter. This method defines an iterator block, and will return an enumerator object that generates the value of a counter from zero to stop, incrementing by step for each value generated.

```csharp
using System;
using System.Collections;

public class YieldSample
{
    public static IEnumerable MyCounter(int stop, int step)
    {
        int i;

        for (i = 0; i < stop; i += step)
        {
            yield return i;
        }
    }

    static void Main()
    {
        foreach (int j in MyCounter(10, 2))
        {
            Console.WriteLine("{0} ", j);
        }
        // Will display 0 2 4 6 8
    }
}
```

### throw 

The throw keyword throws an exception. If it is located within a try block, it will transfer the control to a catch block that matches the exception - otherwise, it will check if any calling functions are contained within the matching catch block and transfer execution there. If no functions contain a catch block, the program may terminate because of an unhandled exception.

```csharp
namespace ExceptionSample
{
    public class Warrior
    {
        private string Name { get; set; }

        public Warrior(string name)
        {
            if (name == "Piccolo")
            {
                throw new Exception("Piccolo can't battle!");
            }
        }
    }

    public class Entry
    {
        static void Main(string[] args)
        {
            try
            {
                Warrior a = new Warrior("Goku");
                Warrior b = new Warrior("Vegeta");
                Warrior c = new Warrior("Piccolo"); // exception here!
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
```

Exceptions and the throw statement are described in greater detail in the Exceptions chapter.

## Introduction 

Software Programmers write code to perform some desired actions. But every software may fail to perform its desired actions under some of its internal or external failures. The exception handling system in the C# language allows the programmer to handle errors or anomalous situations in a structured manner that allows the programmer to separate the normal flow of the code from error-handling logic.

An exception can represent a variety of abnormal conditions that arise from several possible external or internal conditions of software application. External conditions of execution failures includes, for example, network failures in connecting to a remote component, inadequate rights in using a file/system resource, out of memory exception or exception thrown by a web service etc. These are mainly due to failures thrown by environment components on which our application depends on e.g. operating system, .net runtime or external application or components. Internal failures may be due to software defects, designed functional failures (failures required as per business rules), propagated external failures e.g. a null object reference detected by the runtime, or an invalid input string entered by a user and detected by application code, user requesting to withdraw more amount than the account balance(business rule).

Code that detects an error condition is said to throw an exception and code that handles the error is said to catch the exception. An exception in C# is an object that encapsulates various information about the error that occurred, such as the stack trace at the point of the exception and a descriptive error message. All exception objects are instantiations of the System.Exception or a child class of it. There are many exception classes defined in the .NET Framework used for various purposes. Programmers may also define their own class inheriting from System.Exception or some other appropriate exception class from the .NET Framework.

Microsoft recommendations prior to version 2.0 recommended that a developer inherit from the ApplicationException exception class. After 2.0 was released, this recommendation was made obsolete and users should inherit from the Exception class[1].

## Overview 

There are three code definitions for exception handling. These are:

*   `<span class="k">try</span>`/`<span class="k">catch</span>` - Do something and catch an error, if it should occur.
*   `<span class="k">try</span>`/`<span class="k">catch</span>`/`<span class="k">finally</span>` - Do something and catch an error if it should occur, but <u>always</u> do the `<span class="k">finally</span>`.
*   `<span class="k">try</span>`/`<span class="k">finally</span>` - Do something, but <u>always</u> do the `<span class="k">finally</span>`. Any exception that occurs, will be thrown <u>after</u> `<span class="k">finally</span>`.

Exceptions are caught from most specific, to least specific. So for example, if you try and access a file that does not exist, the CLR would look for exceptions in the following order:

*   `<span class="n">FileNotFoundException</span>`
*   `<span class="n">IOException</span>` (base class of `<span class="n">FileNotFoundException</span>`)
*   `<span class="n">SystemException</span>` (base class of `<span class="n">IOException</span>`)
*   `<span class="n">Exception</span>` (base class of `<span class="n">SystemException</span>`)

If the exception being thrown does not derive or is not in the list of exceptions to catch, it is thrown up the call stack.

Below are some examples of the different types of exceptions

## Examples 

### try/catch 

The try/catch performs an operation and should an error occur, will transfer control to the catch block, should there be a valid section to be caught by:

```csharp
class ExceptionTest
{
     public static void Main(string[] args)
     {
          try
          {
               Console.WriteLine(args[0]);
               Console.WriteLine(args[1]);
               Console.WriteLine(args[2]);
               Console.WriteLine(args[3]);
               Console.WriteLine(args[4]);
          }
          catch (ArgumentOutOfRangeException e)
          {
               Console.WriteLine(e.Message);
          }
     }
}
```

Here is an example with multiple catches:

```csharp
class ExceptionTest
{
     public static void Main(string[] args)
     {
          try
          {
               string fileContents = new StreamReader(@"C:\log.txt").ReadToEnd();
          }
          catch (UnauthorizedAccessException e) // Access problems
          {
               Console.WriteLine(e.Message);
          }
          catch (FileNotFoundException e)       // File does not exist
          {
               Console.WriteLine(e.Message);
          }
          catch (IOException e)                // Some other IO problem.
          {
               Console.WriteLine(e.Message);
          }
     }
}
```

In all catch statements you may omit the type of exception and the exception variable name:

```csharp
try
{
    int number = 1/0;
}
catch (DivideByZeroException)
{
    // DivideByZeroException
}
catch
{
    // some other exception
}
```

### try/catch/finally 

Catching the problem is a good idea, but it can sometimes leave your program in an invalid state. For example, if you open a connection to a database, an error occurs and you throw an exception. Where would you close the connection? In both the try AND exception blocks? Well, problems may occur before the close is carried out.

Therefore, the finally statement allows you to cater for the "in all cases do this" circumstance. See the example below:

```csharp
using System;
class ExceptionTest
{
     public static void Main(string[] args)
     {
          SqlConnection sqlConn = null;

          try
          {
              sqlConn = new SqlConnection ( /*Connection here*/ );
              sqlConn.Open();
 
              // Various DB things
        
              // Notice you do not need to explicitly close the connection, as .Dispose() does this for you.
          }
          catch (SqlException e)
          {
               Console.WriteLine(e.Message);
          }
          finally
          {
               if (sqlConn != null && sqlConn.State != ConnectionState.Closed)
               {
                   sqlConn.Dispose();
               }
          }
     }
}
```

Second Example

```csharp
using System;
public class excepation
{
	public double num1, num2,result;
			
	public void add()
	{
		try
		{
			Console.WriteLine("enter your number");
			num1 = Convert.ToInt32(Console.ReadLine());
			num2 = Convert.ToInt32(Console.ReadLine());
			result = num1/num2;
		}
		catch(DivideByZeroException  e) //FormatException
		{
			Console.WriteLine("{0}",e.Message);
		}
		catch(FormatException ex)
		{
			Console.WriteLine("{0}",ex.Message);
		}
		finally
		{
			Console.WriteLine("turn over");
		}
	}
	public void display()
	{
		Console.WriteLine("The Result is: {0}",result);
	}
	public static void Main()
	{
		excepation ex = new excepation();
		ex.add();
		ex.display();
	}	
}
```

Notice that the SqlConnection object is declared outside of the try/catch/finally. The reason is that anything declared in the try/catch cannot be seen by the finally. By declaring it in the previous scope, the finally block is able to access it.

### try/finally 

The try/finally block allows you to do the same as above, but instead errors that are thrown are dealt with by the catch (if possible) and then thrown up the call stack.

```csharp
class ExceptionTest
{
     public static void Main(string[] args)
     {
          SqlConnection sqlConn = null;

          try
          {
              SqlConnection sqlConn = new SqlConnection ( /*Connection here*/ );
              sqlConn.Open();
 
              // Various DB bits
          }
          finally
          {
               if (sqlConn != null && sqlConn.State != ConnectionState.Closed)
               {
                   sqlConn.Dispose();
               }
          }
     }
}
```

## Re-throwing exceptions 

Sometimes it is better to throw the error up the call stack for two reasons.

1.  It is not something you would expect to happen.
2.  You are placing extra information into the exception, to help diagnosis.



### How not to throw exceptions 

Some developers write empty try/catch statements like this:

```csharp
try
{
      // Do something
}
catch (Exception ex)
{
      // Ignore this here
}
```

This approach is not recommended. You are swallowing the error and continuing on. If this exception was an OutOfMemoryException or a NullReferenceException, it would not be wise to continue. Therefore you should always catch what you would expect to occur, and throw everything else.

Below is another example of how exceptions are caught incorrectly

```csharp
/* Read the config file, and return the integer value. If it does not exist, then this is a problem! */

try
{
     string value = ConfigurationManager.AppSettings["Timeout"];

     if (value == null)
         throw new ConfigurationErrorsException("Timeout value is not in the configuration file.");
}
catch (Exception ex)
{
     // Do nothing!
}
```

As you can see, the ConfigurationErrorsException will be caught by the catch (Exception) block, but it is being ignored completely! This is bad programming as you are ignoring the error.

The following is also bad practice:

```csharp
try
{
   ..
}
catch (Exception ex)
{
     throw ex;
}
```

The CLR will now think the throw ex; statement is the source of the problem, when the problem is actually in the try section. Therefore never re-throw in this way.

### How to catch exceptions 

A better approach would be:

```csharp
/* Read the config file, and return the integer value. If it does not exist, then this is a problem! */

try
{
     string value = ConfigurationManager.AppSettings["Timeout"];

     if (value == null)
         throw new ConfigurationErrorsException("Timeout value is not in the configuration file.");
}
catch (Exception ex )
{
     throw; // <-- Throw the existing problem!
}
```

The throw; keyword means preserve the exception information and throw it up the call stack.

### Extra information within exceptions 

An alternative is to give extra information (maybe local variable information) in addition to the exception. In this case, you wrap the exception within another. You usually use an exception that is as specific to the problem as possible, or create your own, if you cannot find out that is not specific enough (or if there is extra information you would wish to include).

```csharp
public OrderItem LoadItem(string itemNumber)
{
    DataTable dt = null;

    try
    {
         if (itemNumber == null)
              throw new ArgumentNullException("Item Number cannot be null","itemNumber");

         DataTable dt = DataAccess.OrderItem.Load(itemNumber);
  
         if (dt.Rows == 0)
              return null;
         else if (dt.Rows > 1)
              throw new DuplicateDataException( "Multiple items map to this item.",itemNumber, dt);

         OrderItem item = OrderItem.CreateInstanceFromDataRow(dt.Rows[0]);

         if (item == null)
              throw new ErrorLoadingException("Error loading Item " + itemNumber, itemNumber, dt.Rows[0]);
    }
    catch (DuplicateDataException dde)
    {
         throw new ErrorLoadingException("OrderItem.LoadItem failed with Item " + 
                                                            itemNumber, dde); // <-- Include dde (as the InnerException) parameter
    }
    catch (Exception ex)
    {
         throw; // <-- We aren't expecting any other problems, so throw them if they occur.
    }
}
```

### References 

1.  <span class="mw-cite-backlink">[↑](#cite_ref-4)</span> <span class="reference-text">[[ApplicationException made obsolete](http://blogs.msdn.com/fxcop/archive/2006/04/05/569569.aspx)]</span>

