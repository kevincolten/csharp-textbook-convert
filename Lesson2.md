# Classes 

Namespaces are used to provide a "named space" in which your application resides. They're used especially to provide the C# compiler a context for all the named information in your program, such as variable names. Without namespaces, for example, you wouldn't be able to make a class named Console, as .NET already uses one in its System namespace. The purpose of namespaces is to solve this problem, and release thousands of names defined in the .NET Framework for your applications to use, along with making it so your application doesn't occupy names for other applications, if your application is intended to be used in conjunction with another. So namespaces exist to resolve ambiguities a compiler wouldn't otherwise be able to do.

Namespaces are easily defined in this way:

```csharp
 namespace MyApplication
 {
     // The content to reside in the MyApplication namespace is placed here.
 }
```

There is an entire hierarchy of namespaces provided to you by the .NET Framework, with the System namespace usually being by far the most commonly seen one. Data in a namespace is referred to by using the . operator, such as:

```csharp
 System.Console.WriteLine("Hello, World!");
```

This will call the WriteLine method that is a member of the Console class within the System namespace.

By using the using keyword, you explicitly tell the compiler that you'll be using a certain namespace in your program. Since the compiler would then know that, it no longer requires you to type the namespace name(s) for such declared namespaces, as you told it which namespaces it should look in, if it couldn't find the data in your application.

So one can then type like this:

```csharp
 using System;
 
 namespace MyApplication
 {
   class MyClass
   {
     void ShowGreeting()
     {
         Console.WriteLine("Hello, World!"); // note how System is now not required
     }
   }
 }
```

Namespaces are global, so a namespace in one C# source file, and another with the same name in another source file, will cause the compiler to treat the different named information in these two source files as residing in the same namespace.

## Nested namespaces 

Normally, your entire application resides under its own special namespace, often named after your application or project name. Sometimes, companies with an entire product series decide to use nested namespaces though, where the "root" namespace can share the name of the company, and the nested namespaces the respective project names. This can be especially convenient, if you're a developer who has made a library with some usual functionality that can be shared across programs. If both the library and your program shared a parent namespace, that one would then not have to be explicitly declared with the using keyword, and still not have to be completely typed out. If your code was open for others to use, third party developers that may use your code would additionally then see that the same company had developed the library and the program. The developer of the library and program would finally also separate all the named information in their product source codes, for fewer headaches especially, if common names are used.

To make your application reside in a nested namespace, you can show this in two ways. Either like this:

```csharp
 namespace CodeWorks
 {
     namespace MyApplication
     {
         // Do stuff
     }
 }
```

... or like this:

```csharp
 namespace CodeWorks.MyApplication
 {
     // Do stuff
 }
```

Both methods are accepted, and are identical in what they do.


As in other object-oriented programming languages, the functionality of a C# program is implemented in one or more classes. The methods and properties of a class contain the code that defines how the class behaves.

C# classes support information hiding by encapsulating functionality in properties and methods and by enabling several types of polymorphism, including subtyping polymorphism via inheritance and parametric polymorphism via generics.

Several types of C# classes can be defined, including instance classes (standard classes that can be instantiated), static classes, and structures.

Classes are defined using the keyword class followed by an identifier to name the class. Instances of the class can then be created with the new keyword followed by the name of the class.

The code below defines a class called Employee with properties Name and Age and with empty methods GetPayCheck() and Work(). It also defines a Sample class that instantiates and uses the Employee class:

```csharp
public class Employee
{
    private int _Age;
    private string _Name;

    public int Age
    {
        get { return _Age; }
        set { _Age = value; }
    }

    public string Name
    {
        get { return _Name; }
        set { _Name = value; }
    }

    public void GetPayCheck()
    {
    }

    public void Work()
    {
    }
}

public class Sample
{
    public static void Main()
    {
        Employee marissa = new Employee();

        marissa.Work();
        marissa.GetPayCheck();
    }
}
```

## Methods 

C# methods are class members containing code. They may have a return value and a list of parameters, as well as a generic type declaration. Like fields, methods can be static (associated with and accessed through the class) or instance (associated with and accessed through an object instance of the class methods as well as a generic type declaration.

## Constructors of classes 

A class's constructors control its initialization. A constructor's code executes to initialize an instance of the class when a program requests a new object of the class's type. Constructors often set properties of their classes, but they are not restricted to doing so.

Like other methods, a constructor can have parameters. To create an object using a constructor with parameters, the new command accepts parameters. The code below defines and then instantiates multiple objects of the Employee class, once using the constructor without parameters and once using the version with a parameter:

```csharp
public class Employee
{
    public Employee()
    {
        System.Console.WriteLine("Constructed without parameters");
    }

    public Employee(string strText)
    {
        System.Console.WriteLine(strText);
    }
}

public class Sample
{
    public static void Main()
    {
        System.Console.WriteLine("Start");
        Employee Alfred = new Employee();
        Employee Billy  = new Employee("Parameter for construction");
        System.Console.WriteLine("End");
    }
```

Output:

```
Start
Constructed without parameters
Parameter for construction
End
```

Constructors can call each other:

```csharp
public class Employee
{
    public Employee(string strText, int iNumber)
    {
        ...
    }
    
    public Employee(string strText)
        : this(strText, 1234) // calls the above constructor with user-specified text and the default number
    { }
    
    public Employee()
        : this("default text") // calls the above constructor with the default text
    { }
}
```

## Finalizers (Destructors) 

The opposite of constructors, finalizers define the final behavior of an object and execute when the object is no longer in use. Although they are often used in C++ to free resources reserved by an object, they are less frequently used in C# due to the .NET Framework Garbage Collector. An object's finalizer, which takes no parameters, is called sometime after an object is no longer referenced, but the complexities of garbage collection make the specific timing of finalizers uncertain.

```csharp
public class Employee
{
    public Employee(string strText)
    {
        System.Console.WriteLine(strText);
    }

    ~Employee()
    {
        System.Console.WriteLine("Finalized!");
    }

    public static void Main()
    {
        Employee marissa = new Employee("Constructed!");

        marissa = null;
    }
}
```

Output:

```
Constructed!
Finalized!
```

## Properties 

C# properties are class members that expose functionality of methods using the syntax of fields. They simplify the syntax of calling traditional get and set methods (a.k.a. accessor methods). Like methods, they can be static or instance.

Properties are defined in the following way:

```csharp
public class MyClass
{
    private int m_iField = 3; // Sets integerField with a default value of 3

    public int IntegerField
    {
        get
        {
            return m_iField;  // get returns the field you specify when this property is assigned
        }
        set
        {
            m_iField = value; // set assigns the value assigned to the property of the field you specify
        }
    }
}
```

An even shorter way for getter/setter methods are accessors that do both in one line:

```csharp
class Culture
{
    public int TalkedCountries { get; set; }
    public string Language { get; set; }
}

class InterculturalDialogue
{
    Culture culture;

    culture.Language = "Italian";  // ==> culture.SetLanguage("Italian");

    string strThisLanguage = culture.Language; // ==> ... = culture.GetLanguage();
}
```

The code is equivalent to a GetLanguage and SetLanguage method definition, but without having to define these methods. The user can directly access the member, if it is not private, of course.

The C# keyword value contains the value assigned to the property. After a property is defined it can be used like a variable. If you were to write some additional code in the get and set portions of the property it would work like a method and allow you to manipulate the data before it is read or written to the variable.

```csharp
public class MyProgram
{
    MyClass myClass = new MyClass;

    Console.WriteLine(myClass.IntegerField); // Writes 3 to the command line.
    myClass.IntegerField = 7; // Indirectly assigns 7 to the field myClass.m_iField     
}
```

Using properties in this way provides a clean, easy to use mechanism for protecting data.

## Indexers 

C# indexers are class members that define the behavior of the array access operation (e.g. list[0] to access the first element of list even when list is not an array).

To create an indexer, use the this keyword as in the following example:

```csharp
public string this[string strKey]
{
    get { return coll[strKey]; }
    set { coll[strKey] = value; }
}
```

This code will create a string indexer that returns a string value. For example, if the class was EmployeeCollection, you could write code similar to the following:

```csharp
EmployeeCollection e = new EmployeeCollection();
.
.
.
string s = e["Jones"];
e["Smith"] = "xxx";
```

## Events 

C# events are class members that expose notifications to clients of the class. Events are only fired and never assigned.

```csharp
using System;

// Note: You need to know some about delegate, properties and methods to understand this sample
namespace EventSample
{
    /// <summary>
    /// This delegate defines the signature of the appropriate method
    /// </summary>
    public delegate void ContractHandler(Employee sender);

    /// <summary>
    ///     Employee class
    /// </summary>
    public class Employee
    {
        /// <summary>
        ///     Field for the info whether or not the Employee is engaged
        /// </summary>
        private bool bIsEngaged = false;
        /// <summary>
        ///     Age of the employee
        /// </summary>
        private int iAge = -1;
        /// <summary>
        ///     Name of the employee
        /// </summary>
        private String strName = null;

        /// <summary>
        /// *** The our event *** 
        /// Is a collection of methods that will be called when it fires
        /// </summary>
        public event ContractHandler Engaged;

        /// <summary>
        ///     Standard constructor
        /// </summary>
        public Employee()
        {
            // Here, we are adding a new method with appropriate signature (defined by delegate)
            // note: when a event not have any method and it was fired, it causes a exception!
            //       for all effects when programming with events, assign one private method to event
            //       or simply do a verification before fire it! --> if (event != null)
            this.Engaged += new ContractHandler(this.OnEngaged);
        }

        /// <summary>
        ///     Event handler for the "engaged" event
        /// </summary>
        /// <param name="sender">
        ///     Sender object
        /// </param>
        private void OnEngaged(Employee sender)
        {
            Console.WriteLine("private void OnEngaged was called! this employee is engaged now!");
        }

        /// <summary>
        ///     Accessor for the employee name
        /// </summary>
        public string Name
        {
            get
            {
                return strName;
            }

            set
            {
                strName = value;
            }
        }

        /// <summary>
        ///     Accessor for the employee age
        /// </summary>
        public int Age
        {
            get
            {
                return m_iAge;
            }

            set
            {
                m_iAge = value;
            }
        }

        /// <summary>
        ///     Accessor for the information about Employee engagement
        /// </summary>
        public bool IsEngaged
        {
            get
            {
                return bIsEngaged;
            }

            set
            {
                if (bIsEngaged == false && value == true)
                {
                    // here we fires event (call all the methods that it have)
                    // all times when IsEngaged is false and set to true;
                    Engaged(this);
                }

                bIsEngaged = value;
            }
        }
    }

    /// <summary>
    ///     Class for the entry point
    /// </summary>
    public class EntryPointClass
    {
        static void Main(string[] a_strArgs)
        {
            Employee simpleEmployee = new Employee();

            simpleEmployee.Age = 18;
            simpleEmployee.Name = "Samanta Rock";
            
            // Here...
            // This is saying when the event fire, the method added to event are called too.
            // note that we cannot use =
            // is only += to add methods to event or -= do retire a event
            simpleEmployee.Engaged += new ContractHandler(SimpleEmployee_Engaged);
        
            // make attention here...
            // when I assign true to this property, 
            // the event Engaged will be called
            // when event is called, all method that it have, are called!
            simpleEmployee.IsEngaged = true;

            Console.ReadLine();

            return;
        }

        /// <summary>
        ///     Event handler for the registered "engaged" event
        /// </summary>
        /// <param name="sender">
        ///     Event sender
        /// </param>
        static void SimpleEmployee_Engaged(Employee sender)
        {
            Console.WriteLine("The employee {0} is happy!", sender.Name);
        }
    }
}
```

See also here for details.

## Operator overloading 

C# operator definitions are class members that define or redefine the behavior of basic C# operators (called implicitly or explicitly) on instances of the class:

```csharp
public class Complex
{
    private double m_dReal, m_dImaginary;
    
    public double Real
    {
        get { return m_dReal; }
        set { m_dReal = value; }
    }
    
    public double Imaginary
    {
        get { return m_dImaginary; }
        set { m_dImaginary = value; }
    }
    
    // binary operator overloading
    public static Complex operator +(Complex c1, Complex c2)
    {
        return new Complex() { Real = c1.Real + c2.Real, Imaginary = c1.Imaginary + c2.Imaginary };
    }
    
    // unary operator overloading
    public static Complex operator -(Complex c)
    {
        return new Complex() { Real = -c.Real, Imaginary = -c.Imaginary };
    }
    
    // cast operator overloading (both implicit and explicit)
    public static implicit operator double(Complex c)
    {
        // return the modulus - sqrt(x^2 + y^2)
        return Math.Sqrt(Math.Pow(c.Real, 2) + Math.Pow(c.Imaginary, 2));
    }
    
    public static explicit operator string(Complex c)
    {
        // we should be overloading the ToString() method, but this is just a demonstration
        return c.Real.ToString() + " + " + c.Imaginary.ToString() + "i";
    }
}

public class StaticDemo
{
    public static void Main()
    {
        Complex number1 = new Complex() { Real = 1, Imaginary = 2 };
        Complex number2 = new Complex() { Real = 4, Imaginary = 10 };
        Complex number3 = number1 + number2; // number3 now has Real = 5, Imaginary = 12
        
        number3 = -number3; // number3 now has Real = -5, Imaginary = -12
        double testNumber = number3; // testNumber will be set to the absolute value of number3
        Console.WriteLine((string)number3); // This will print "-5 + -12i".
        // The cast to string was needed because that was an explicit cast operator.
    }
}
```

## Structures 

Structures, or structs, are defined with the struct keyword followed by an identifier to name the structure. They are similar to classes, but have subtle differences. Structs are used as lightweight versions of classes that can help reduce memory management efforts when working with small data structures. In most situations, however, using a standard class is a better choice.

The principal difference between structs and classes is that instances of structs are values whereas instances of classes are references. Thus when you pass a struct to a function by value you get a copy of the object so changes to it are not reflected in the original because there are now two distinct objects but if you pass an instance of a class by reference then there is only one instance.

The Employee structure below declares a public and a private field. Access to the private field is granted through the public property Name:

```csharp
struct Employee
{
    public int m_iAge;
    private string m_strName;

    public string Name
    {
        get { return m_strName; }
        set { m_strName = value; }
    }
}
```

Since C# 2.0, is possible to have arrays inside structures, but only in unsafe contexts:

```csharp
struct data
{
    int header;
    fixed int values[10];
}
```

The array is accessed using pointer arithmetic. Values are treat arrayed values as if they were C-style arrays using indexing, etc.

### Structure constructors 

Structures need constructors - or better to say initialisers, as they do not construct but just initialise the memory[1] - so that their contents are not left uninitialised. Therefore, constructors without parametres are not allowed.

Structure variables can be assigned one to another if and only if the structure variable on the right side of the assignment are all initialised.[2]

```csharp
struct Timestamp
{
    private ushort m_usYear;
    private ushort m_usMonth;
    private ushort m_usDayOfMonth;
    private ushort m_usHour;
    private ushort m_usMinute;
    private ushort m_usSecond;

    public Timestamp(ushort usYear,
        ushort usMonth,
        ushort usDay,
        ushort usHour,
        ushort usMinute,
        ushort usSecond)
    {
        m_usYear = usYear - 1900;
        m_usMonth = usMonth;
        m_usDay = usDay;
        m_usHour = usHour;
        m_usMinute = usMinute;
        m_usSecond = usSecond;
    }
}
```

## Static classes 

Static classes are commonly used to implement a Singleton Pattern. All of the methods, properties, and fields of a static class are also static (like the WriteLine() method of the System.Console class) and can thus be used without instantiating the static class:

```csharp
public static class Writer
{
    public static void Write()
    {
        System.Console.WriteLine("Text");
    }
}

public class Sample
{
    public static void Main()
    {
        Writer.Write();
    }
}
```

## References 

```csharp
↑ Greg Beech (2008-06-16). "Structure constructors". http://social.msdn.microsoft.com/: MSDN. http://social.msdn.microsoft.com/Forums/eu/csharplanguage/thread/40085588-ccb0-42bf-8492-fa48f072b877. Retrieved 2012-04-12. "Because structures are simply an inline area of memory, they cannot be null, and so the CLR has to be able to ensure that the area of memory is totally initialized rather than being partly garbage. For this reason, you'll often hear the 'constructors' on structures called (arguably more correctly) 'initializers' because the don't construct an object they just initialize an area of memory." 
↑ John Sharp. "Microsoft® Visual C#® 2005 Step by Step / Copying Structure Variables". http://books.google.at/: Google Books. http://books.google.at/books?id=2xIWEKLvzpcC&pg=PT361&lpg=PT361&dq=C%23+%22structure+constructors%22&source=bl&ots=iFU6Ln4MvS&sig=aaKZtQ45wj_1akB1bPWmc2pd3sM&hl=de&sa=X&ei=0ICGT-byDIKJ4gSsrZDLBw&redir_esc=y#v=onepage&q=C%23%20%22structure%20constructors%22&f=false. Retrieved 2012-04-12. "You're allowed to initialize or assign one struct variable to another struct variable, but only if the struct variable on the right side is completely initalized (that is, if all its fields are initialized)." 
```



## Introduction 

The .NET framework consists of several languages, all which follow the "object orientated programming" (OOP) approach to software development. This standard defines that all objects support

*   Inheritance - the ability to inherit and extend existing functionality.
*   Encapsulation - the ability to allow the user to only see specific parts, and to interact with it in specific ways.
*   Polymorphism - the ability for an object to be assigned dynamically, but with some predictability as to what can be done with the object.

Objects are synonymous with objects in the real world. Think of any object and think of how it looks and how it is measured and interacted with. When creating OOP languages, the reasoning was that if it mimics the thought process of humans, it would simplify the coding experience.

For example, let's consider a chair, and its dimensions, weight, colour and what is it made out of. In .NET, these values are called "Properties". These are values that define the object's state. Be careful, as there are two ways to expose values: Fields and Properties. The recommended approach is expose Properties and not fields.

So we have a real-world idea of the concept of an object. In terms of practicality for a computer to pass information about, passing around an object within a program would consume a lot of resources. Think of a car, how many properties that has - 100's, 1000's. A computer passing this information about all the time will waste memory, processing time and therefore a bad idea to use. So objects come in two flavours:

*   Reference types
*   Value types

## Reference and Value Types 

A reference type is like a pointer to the value. Think of it like a piece of paper with a street address on it, and the address leads to your house - your object with hundreds of properties. If you want to find it, go to where the address says! This is exactly what happens inside the computer. The reference is stored as a number, corresponding to somewhere in memory where the object exists. So instead of moving an object around - like building a replica house every time you want to look at it - you just look at the original.

A value type is the exact value itself. Values are great for storing small amounts of information: numbers, dates etc.

There are differences in the way they are processed, so we will leave that until a little later in the article.

As well as querying values, we need a way to interact with the object so that some operation can be performed. Think of files - it's all well and good knowing the length of the file, but how about Read()'ing it? Therefore, we can use something called methods as a way of performing actions on an object.

An example would be a rectangle. The properties of a rectangle are:

*   `<span class="n">Length</span>`
*   `<span class="n">Width</span>`

The "functions" (or methods in .NET) would be:

*   `<span class="n">Area</span>` (= `<span class="n">Length</span><span class="p">*</span><span class="n">Width</span>`)
*   `<span class="n">Perimeter</span>` (= `<span class="m">2</span><span class="p">*</span><span class="n">Length</span> <span class="p">+</span> <span class="m">2</span><span class="p">*</span><span class="n">Width</span>`)

Methods vary from Properties because they require some transformation of data to achieve a result. Methods can either return a result (such as Area) or not. Like above with the chair, if you Sit() on the chair, there is no expected reaction, the chair just ... works!

### System.Object 

To support the first rule of OOP - Inheritance, we define something that all objects will derive from - this is System.Object, also known as Object or object. This object defines some methods that all objects can use should they need to. These methods include:

*   `<span class="n">GetHashCode</span><span class="p">()</span>` - retrieve a number unique to that object.
*   `<span class="n">GetType</span><span class="p">()</span>` - retrieves information about the object like method names, the objects name etc.
*   `<span class="n">ToString</span><span class="p">()</span>` - convert the object to a textual representation - usually for outputting to the screen or file.

Since all objects derive from this class (whether you define it or not), any class will have these three methods ready to use. Since we always inherit from System.Object, or a class that itself inherits from System.Object, we therefore enhance and/or extend its functionality. Like in the real world that humans, cats, dogs, birds, fish are all an improved and specialised version of an "organism".

## Object basics 

All objects by default are reference types. To support value types, objects must instead inherit from the System.ValueType abstract class, rather than System.Object.

### Constructors 

When objects are created, they are initialized by the "constructor". The constructor sets up the object, ready for use. Because objects need to be created before being used, the constructor is created implicitly, unless it is defined differently by the developer. There are 3 types of constructor:

*   Copy Constructor
*   Static Constructor
*   Default constructor - takes no parameters.
*   Overloaded constructor - takes parameters.

Overloaded constructors automatically remove the implicit default constructor, so a developer must explicitly define the default constructor, if they want to use it.

A constructor is a special type of method in C# that allows an object to initialize itself when it is created. If a constructor method is used, there is no need to write a separate method to assign initial values to the data members of an object.

Important characteristics of a constructor method:

1.  A constructor method has the same name as the class itself.
2.  A constructor method is usually declared as public.
3.  Constructor method is declared as public because it is used to create objects from outside the class in which it is declared. We can also declare a constructor method as private, but then such a constructor cannot be used to create objects.
4.  Constructor methods do not have a return type (not even void).
5.  C# provides a default constructor to every class. This default constructor initializes the data members to zero. But if we write our own constructor method, then the default constructor is not used.
6.  A constructor method is used to assign initial values to the member variables.
7.  The constructor is called by the new keyword when an object is created.
8.  We can define more than one constructor in a class. This is known as constructor overloading. All the constructor methods have the same name, but their signatures are different, i.e., number and type of parameters are different.
9.  If a constructor is declared, no default constructor is generated.

#### Copy Constructor 

A copy constructor creates an object by copying variables from another object. The copy constructor is called by creating an object of the required type and passing it the object to be copied.

In the following example, we pass a Rectangle object to the Rectangle constructor so that the new object has the same values as the old object.

```csharp
using System;

namespace CopyConstructor
{
    class Rectangle
    {
        public int length;
        public int breadth;

        public Rectangle(int x, int y)         // constructor fn
        {
            length = x;
            breadth = y;
        }

        public Rectangle(Rectangle r)
        {
            length = r.length;
            breadth = r.breadth;
        }

        public void display()
        {
            Console.WriteLine("Length = " + length);
            Console.WriteLine("Breadth = " + breadth);
        }
    }   // end of class Rectangle

    class Program
    {
        public static void Main()
        {
            Rectangle r1 = new Rectangle(5, 10);
            Console.WriteLine("Values of first object");
            r1.display();

            Rectangle r2 = new Rectangle(r1);
            Console.WriteLine("Values of second object");
            r2.display();

            Console.ReadLine();
        }
    }
}
```

#### Static Constructor 

A static constructor is first called when the runtime first accesses the class. Static variables are accessible at all times, so the runtime must initialize it on its first access. The example below, when stepping through in a debugger, will show that static MyClass() is only accessed when the MyClass.Number variable is accessed.

C# supports two types of constructors: static constructor and instance constructor. Whereas an instance constructor is called every time an object of that class is created, the static constructor is called only once. A static constructor is called before any object of the class is created, and is usually used to initialize any static data members of a class.

A static constructor is declared by using the keyword static in the constructor definition. This constructor cannot have any parameters or access modifiers. In addition, a class can only have one static constructor. For example:

```csharp
using System;
using System.Collections.Generic;
using System.Text;

namespace StaticConstructors
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;
            int j = 0;
            Console.WriteLine("Static Number = " + MyClass.Number);
        }
    }

    class MyClass
    {
        private static int _number;
        public static int Number { get { return _number; } }
        static MyClass()
        {
            Random r = new Random();
            _number = r.Next();
        }
    }
}
```

#### Default Constructor 

The default constructor takes no parameters and is implicitly defined, if no other constructors exist. The code sample below show the before, and after result of creating a class.

```csharp
// Created by the developer
class MyClass
{
}

// Created by the compiler
class MyClass : System.Object
{
     public MyClass() : base()
     {
     }
}
```

#### Overloaded Constructors 

To initialize objects in various forms, the constructors allow customization of the object by passing in parameters.

```csharp
 class MyClass
    {
        private int _number;
        public int Number { get { return _number; } }
        
        public MyClass()
        {
            Random randomNumber = new Random();
            _number = randomNumber.Next();
        }
  
        public MyClass(int seed)
        {
            Random randomNumber = new Random(seed);
            _number = randomNumber.Next();
        }
   }
```

#### Calling other constructors 

To minimise code, if another constructor implements the functionality better, you can instruct the constructor to call an overloaded (or default) constructor with specific parameters.

```csharp
 class MyClass
    {
        private int _number;
        public int Number { get { return _number; } }
        
        public MyClass() : 
             this ( DateTime.Now.Milliseconds ) // Call the other constructor passing in a value.
        {
            
        }
  
        public MyClass(int seed)
        {
            Random r = new Random(seed);
            _number = r.Next();
        }
   }
```

Base classes constructors can also be called instead of constructors in the current instance

```csharp
 class MyException : Exception
    {
        private int _number;
        public int Number { get { return _number; } }
        
        public MyException ( int errorNumber, string message, Exception innerException)
                 : base( message, innerException )
        {
             _number = errorNumber;
        }
   }
```

### Destructors 

As well as being "constructed", objects can also perform cleanup when they are cleared up by the garbage collector. As with constructors, the destructor also uses the same name as the class, but is preceded by the tilde (~) sign. However, the garbage collector only runs when either directly invoked, or has reason to reclaim memory, therefore the destructor may not get the chance to clean up resources for a long time. In this case, look into use of the Dispose() method, from the IDisposable interface.

Destructors are recognised via the use of the ~ symbol in front of a constructor with no access modifier. For example:

```csharp
 class MyException : Exception
    {
        private int _number;
        public int Number { get { return _number; } }
        
        public MyException ( int errorNumber, string message, Exception innerException)
                : base( message, innerException )
        {
             _number = errorNumber;
        }

        ~MyException()
        {
        }
   }
```





Encapsulation is depriving the user of a class of information he does not need, and preventing him from manipulating objects in ways not intended by the designer.

A class element having public protection level is accessible to all code anywhere in the program. These methods and properties represent the operations allowed on the class to outside users.

Methods, data members (and other elements) with private protection level represent the internal state of the class (for variables), and operations that are not allowed to outside users. The private protection level is default for all class and struct members. This means that if you do not specify the protection modifier of a method or variable, it is considered as private by the compiler.

For example:

```csharp
public class Frog
{
    private int _height = 0;

    // Methods
    public void JumpLow() { Jump(1); }
    public void JumpHigh() { Jump(10); }

    void Jump(int height) { _height += height; }
}
```

In this example, the public method the Frog class exposes are JumpLow and JumpHigh. Internally, they are implemented using the private Jump function that can jump to any height. This operation is not visible to an outside user, so they cannot make the frog jump 100 meters, only 10 or 1. The Jump private method is implemented by changing the value of a private data member _height, which is also not visible to an outside user. Some private data members are made visible by Properties.

## Protection Levels 

### Private 

Private members are only accessible within the class itself. A method in another class, even a class derived from the class with private members cannot access the members. If no protection level is specified, class members will default to private.

```csharp
namespace PrivateSample
{
    public class Person
    {
        private string _name;

        // Methods
        public Person(string name)
        {
            // Private members can only be modified by the internal methods or constructors of class
            this._name = name; 
        }
    }

    public class Entry
    {
        static void Main(string[] args)
        {
            Person OnePerson = new Person("Samanta");
            //OnePerson._name = "Sam"; // This causes a error of access level
        }
    }
}
```

### Protected 

Protected members can be accessed by the class itself and by any class derived from that class.

```csharp
namespace ProtectedSample
{
    public class Person
    {
        protected string _name;
    }
    /// <summary>
    /// When a class inherits from other class, it can access your protected and public members
    /// above your created members
    /// </summary>
    public class Warrior : Person
    {
        public void SetName(string name)
        {
            // Protected members can be accessed by internal methods or constructors of class
            // so, it can be accessed by inherit class too
            base._name = name;
        }
    }

    public class Entry
    {
        static void Main(string[] args)
        {
            Warrior OnePerson = new Warrior();
            OnePerson.SetName("Glades"); // OK
            // OnePerson._name = "Sam"; // This causes a error of access level too
            // protected members can not be accessed by external scopes
        }
    }
}
```

### Public 

Public members can be accessed by any method in any class.

```csharp
namespace PublicSample
{
    public class Person
    {
        public string Name;
    }

    public class Entry
    {
        static void Main(string[] args)
        {
            Person BeautifulPerson = new Person();
            BeautifulPerson.Name = "Debora"; // OK, public member can be accessed by other scopes
        }
    }
}
```

It is good programming practice not to expose member variables to the outside, unless it is necessary. This is true especially for fields that should only be accessible over accessor and mutator methods (getters and setters). Exceptions are member variables that are constant.

### Internal 

Internal members are accessible only in the same assembly and invisible outside it. If no protection level is specified for top level classes, they are treated as internal, and can only be accessed within the assembly.

```csharp
namespace InternalSample
{
    public class Person
    {
        internal string Name;
    }

    public class Entry
    {
        static void Main(string[] args)
        {
            Person BeautifulPerson = new Person();
            BeautifulPerson.Name = "Debora"; // OK, internal member can be accessed by other 
            // scopes in same assembly supposing that Person is in another assembly, by example a 
            // library, the name cannot be accessed. In another assembly source, this causes an error:
            // BeautifulPerson.Name = "Debora"; // Cannot access internal member
        }
    }
}
```

### Protected Internal 

Protected internal members are accessible from any class derived from that class, or any class within the same assembly. So, it means protected or internal.[1]

Here, an example:

```csharp
namespace InternalSample
{
    public class Person
    {
        protected internal string Name;
    }

    public class Entry
    {
        static void Main(string[] args)
        {
            Person BeautifulPerson = new Person();
            BeautifulPerson.Name = "Debora"; // As above...
        }
    }
}

public class Book : InternalSample.Person
{
    static void Main(string[] args)
    {
        InternalSample.Person BeautifulPerson = new InternalSample.Person();
        string aName = BeautifulPerson.Name; // Can be accessed, as Book is derived from Person
    }
}
```

## References 

```csharp
↑ Joe Mayo (2007-04-27). "Type Member Access Modifiers". http://www.csharp-station.com/: C# STATION. http://www.csharp-station.com/Tutorials/lesson19.aspx. Retrieved 2011-08-12. "Either code from derived type or code in the same assembly. Combination of protected OR internal." 
```

