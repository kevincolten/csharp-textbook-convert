# Advanced Concepts 

## Explanation By Analogy 

What is the benefit of inheritance?

1.  It saves you a lot of typing
2.  It saves you from repeating yourself.

Inheritance explained by analogy

Suppose you want to create an Eagle, a Falcon and a vulture. In order to create these flying creatures you notice that each of these creatures:

1.  Fly
2.  Breed
3.  Eat

Let us assume for the the sake of argument that all three types of birds: fly, breed and eat in exactly the same way.

Without inheritance, you would be forced to copy code. i.e. the same code which causes an eagle to fly would also be copied to make the vulture fly. And it is axiomatic in programming - who are a lazy bunch, not wanting to repeat themselves - that repetition is almost always a bad thing.

Note the eagle, falcon and vultures are all in fact birds. Accordingly, you could say that a bird, generally speaking, always has the characteristics of eating, breeding and flying. So using "inheritance" you could create generic 'bird' prototype, which eats, breeds and flies, and then once that is defined, you can have all other specific breeds of birds inherit those characteristics. In other words, using the prototype, you can design other specific birds off that prototyped design.

This means that the falcon automatically knows how to fly because it inherits that behaviour from the general Bird class. You basically don't have to repeat yourself.

## Inheritance 

Inheritance is the ability to create a class from another class, the "parent" class, extending the functionality and state of the parent in the derived, or "child" class. It allows derived classes to overload methods from their parent class.

Inheritance is one of the pillars of object-orientation. It is the mechanism of designing one class from another and is one of the ideas for code reusability, supporting the concept of hierarchical classification. C# programs consist of classes, where new classes can either be created from scratch or by using some or all properties of an existing class.

Another feature related to inheritance and reusability of code is polymorphism, which permits the same method name to be used for different operations on different data types. Thus, C# supports code reusability by both features.

Important characteristics of inheritance include:

1.  A derived class extends its base class. That is, it contains the methods and data of its parent class, and it can also contain its own data members and methods.
2.  The derived class cannot change the definition of an inherited member.
3.  Constructors and destructors are not inherited. All other members of the base class are inherited.
4.  The accessibility of a member in the derived class depends upon its declared accessibility in the base class.
5.  A derived class can override an inherited member.

An example of inheritance:

```csharp
using System;
using System.Text;

namespace ContainmentInheritance
{
    class Room
    {
        public int length;
        public int width;
        public int height;
        public string name;

        public Room(int l, int w, int h)
        {
            length = l;
            width = w;
            height = h;
        }
    }

    class Home
    {
        int numberOfRooms;
        int plotSize;
        string locality;

        // create an object of class Room inside class Home
        Room studyRoom = new Room(10, 12, 12);

        public Home()
        {
            numberOfRooms = 1;
            plotSize = 1000;
            locality = "Versova";
            name = "study room";
        }

        public void Display()
        {
            Console.WriteLine("MyHome has {0} rooms", numberOfRooms);
            Console.WriteLine("Plot size is {0}", plotSize);
            Console.WriteLine("Locality is {0}", locality);

            int area = studyRoom.length*studyRoom.width;
            Console.WriteLine("Area of the {0} room is {1}", name, area);
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            Home myhome = new Home();
            myhome.Display();

            Console.ReadLine();
        }
    }
}
```

## Subtyping Inheritance 

The code sample below shows two classes, Employee and Executive. Employee has the methods GetPayCheck and Work.

We want the Executive class to have the same methods, but differently implemented and one extra method, AdministerEmployee.

Below is the creation of the first class to be derived from.

```csharp
public class Employee
{
    // We declare one method virtual so that the Executive class can
    // override it.
    public virtual void GetPayCheck()
    {
        // Get paycheck logic here.
    }

    //Employee's and Executives both work, so no virtual here needed.
    public void Work()
    {
        // Do work logic here.
    }
}
```

Now, we create an Executive class that will override the GetPayCheck method:

```csharp
public class Executive : Employee
{
    // The override keyword indicates we want new logic behind the GetPayCheck method.
    public override void GetPayCheck()
    {
        // New getpaycheck logic here.
    }

    // The extra method is implemented.
    public void AdministerEmployee()
    {
        // Manage employee logic here
    }
}
```

You'll notice that there is no Work method in the Executive class, as it is inherited from Employee.

```csharp
static void Main(string[] args)
{
    Employee emp = new Employee();
    Executive exec = new Executive();

    emp.Work();
    exec.Work();
    emp.GetPayCheck();
    exec.GetPayCheck();
    exec.AdministerEmployee();
}
```

## Virtual Methods 

If a base class contains a virtual method that it calls elsewhere and a derived class overrides that virtual method, the base class will actually call the derived class' method:

```csharp
public class Resource : IDisposable
{
    private bool _isClosed = false;    // good programming practice initialise, although default
    
    protected virtual void Close()
    {
        Console.WriteLine("Base resource closer called!");
    }
    
    ~Resource()
    {
        Dispose();
    }
    
    public void Dispose()
    {
        if (!_isClosed)
        {
            Console.WriteLine("Disposing resource and calling the Close() method...");
            _isClosed = true;
            Close();
        }
    }
}

public class AnotherTypeOfResource : Resource
{
    protected override void Close()
    {
        Console.WriteLine("Another type of resource closer called!");
    }
}

public class VirtualMethodDemo
{
    public static void Main()
    {
        Resource res = new Resource();
        AnotherTypeOfResource res2 = new AnotherTypeOfResource();
        
        res.Dispose();  // Resource.Close() will be called.
        res2.Dispose(); // Even though Dispose() is part of the Resource class, 
                        // the Resource class will call AnotherTypeOfResource.Close()!
    }
}
```

## Constructors 

A derived class does not automatically inherit the base class' constructors, and it cannot be instantiated unless it provides its own. A derived class must call one of its base class' constructors by using the base keyword:

```csharp
public class MyBaseClass
{
    public MyBaseClass(string text)
    {
        console.WriteLine(test);
    }
}

public class MyDerivedClass : MyBaseClass
{
    public MyDerivedClass(int number)
        : base(number.ToString())
    { }
    
    public MyDerivedClass(string text) // even though this is exactly the same as MyBaseClass'  
    // only constructor, this is still necessary as constructors are not inherited.
        : base(text)
    { }
}
```

## Inheritance keywords 

The way C# inherits from another class syntactically is by using the : operator.

Example:

```csharp
public class Executive : Employee
```

To indicate a method that can be overridden, you mark the method with virtual.

```csharp
public virtual void Write(string text)
{
    System.Console.WriteLine("Text:{0}", text);
}
```

To override a method, use the override keyword:

```csharp
public override void Write(string  text)
{
    System.Console.WriteLine(text);
}
```

A missing new or override keyword for a derived method may result in errors or warnings during compilation.:[1] Here an example:

```csharp
abstract class ShapesA
{
    abstract public int Area(); // abstract!
}

class Square : ShapesA
{
    int x, y;

    public int Area() // Error: missing 'override' or 'new'
    {
        return x * y;
    }
} 

class Shapes
{
    virtual public int Area() { return 0; } // it is virtual now!
}

class Square : Shapes
{
    int x, y;

    public int Area() // no explicit 'override' or 'new' required
    { return x * y; }
}
```

The Square class method Area() will result in a compilation error, if it is derived from the ShapesA class:

```
error CS0534: 'ConsoleApplication3.Square' does not implement inherited abstract member
'ConsoleApplication3.Shapes.Area()'
```

The same method will result in a compilation warning, if derived from the normal Shapes class:

```
warning CS0114: 'ConsoleApplication3.Square.Area()' hides inherited member 'ConsoleApplication3.Shapes.Area()'.
To make the current member override that implementation, add the override keyword. Otherwise add the new
keyword.
```

## References 

```csharp
↑ Greg Beech (2010-03-09). "C# design: Why is new/override required on abstract methods but not on virtual methods? / Answer". http://efreedom.com/: eFreedom. http://efreedom.com/Question/1-3634529/CSharp-Design-New-Override-Required-Abstract-Methods-Virtual-Methods. Retrieved 2011-08-11. "Using either the C# 3.0 compiler as shipped in .NET 3.5 SP1, or the C# 4.0 compiler as shipped in .NET 4.0, I get the following error for your first example: [...] And the following warning for the second one: [...] In the first case it's an error because you aren't actually overriding the base method, which means there is no implementation for the abstract method in a concrete class. In the second case it's a warning because the code is technically correct, but the compiler suspects that it isn't what you meant. This is one of the reasons it's generally a good idea to enable the "treat warnings as errors" compilation setting." 
```




An INTERFACE in C# is a type definition similar to a class, except that it purely represents a contract between an object and its user. It can neither be directly instantiated as an object, nor can data members be defined. So, an interface is nothing but a collection of method and property declarations. The following defines a simple interface:

```csharp
interface IShape
{
    double X { get; set; }
    double Y { get; set; }
    void Draw();
}
```

A CONVENTION used in the .NET Framework (and likewise by many C# programmers) is to place an "I" at the beginning of an interface name to distinguish it from a class name. Another common interface naming convention is used when an interface declares only one key method, such as Draw() in the above example. The interface name is then formed as an adjective by adding the "...able" suffix. So, the interface name above could also be IDrawable. This convention is used throughout the .NET Framework.

Implementing an interface is simply done by inheriting off it and defining all the methods and properties declared by the interface after that. For instance,

```csharp
class Square : IShape
{
    private double _mX, _mY;

    public void Draw() { ... }

    public double X 
    { 
        set { _mX = value; }
        get { return _mX; }  
    }

    public double Y 
    {
        set { _mY = value; }
        get { return _mY; }
    }
}
```

Although a class can inherit from one class only, it can inherit from any number of interfaces. This is a simplified form of multiple inheritance supported by C#. When inheriting from a class and one or more interfaces, the base class should be provided first in the inheritance list, followed by any interfaces to be implemented. For example:

```csharp
class MyClass : Class1, Interface1, Interface2 { ... }
```

Object references can be declared using an interface type. For instance, using the previous examples,

```csharp
class MyClass 
{
    static void Main()
    {
        IShape shape = new Square();
        shape.Draw();
    }
}
```

Interfaces can inherit off of any number of other interfaces, but cannot inherit from classes. For example:

```csharp
interface IRotateable
{
    void Rotate(double theta);
}

interface IDrawable : IRotateable
{
    void Draw();
}
```

## Additional details 

Access specifiers (i.e. private, internal, etc.) cannot be provided for interface members, as all members are public by default. A class implementing an interface must define all the members declared by the interface. The implementing class has the option of making an implemented method virtual, if it is expected to be overridden in a child class.

There are no static methods within an interface, but any static methods can be implemented in a class that manages objects using it.

In addition to methods and properties, interfaces can declare events and indexers as well.

For those familiar with Java, C#'s interfaces are extremely similar to Java's.

## Introduction 

Delegates and events are fundamental to any Windows or Web Application, allowing the developer to "subscribe" to particular actions carried out by the user. Therefore, instead of expecting everything and filtering out what you want, you choose what you want to be notified of and react to that action.

A delegate is a way of telling C# which method to call when an event is triggered. For example, if you click a Button on a form, the program would call a specific method. It is this pointer that is a delegate. Delegates are good, as you can notify several methods that an event has occurred, if you wish so.

An event is a notification by the .NET framework that an action has occurred. Each event contains information about the specific event, e.g., a mouse click would say which mouse button was clicked where on the form.

Let's say you write a program reacting only to a Button click. Here is the sequence of events that occurs:

*   User presses the mouse button down over a button
    *   The .NET framework raises a `<span class="n">MouseDown</span>` event
*   User releases the mouse button
    *   The .NET framework raises a `<span class="n">MouseUp</span>` event
    *   The .NET framework raises a `<span class="n">MouseClick</span>` event
    *   The .NET framework raises a `<span class="n">Clicked</span>` event on the `<span class="n">Button</span>`

Since the button's click event has been subscribed, the rest of the events are ignored by the program and your delegate tells the .NET framework which method to call, now that the event has been raised.

## Delegates 

Delegates form the basis of event handling in C#. They are a construct for abstracting and creating objects that reference methods and can be used to call those methods. A delegate declaration specifies a particular method signature. References to one or more methods can be added to a delegate instance. The delegate instance can then be "called", which effectively calls all the methods that have been added to the delegate instance. A simple example:

```csharp
using System;
delegate void Procedure();

class DelegateDemo
{
    public static void Method1()
    {
        Console.WriteLine("Method 1");
    }

    public static void Method2()
    {
        Console.WriteLine("Method 2");
    }

    public void Method3()
    {
        Console.WriteLine("Method 3");
    }

    static void Main()
    {
        Procedure someProcs = null;

        someProcs += new Procedure(DelegateDemo.Method1);
        someProcs += new Procedure(Method2);  // Example with omitted class name

        DelegateDemo demo = new DelegateDemo();

        someProcs += new Procedure(demo.Method3);
        someProcs();
    }
}
```

In this example, the delegate is declared by the line delegate voidProcedure(). This statement is a complete abstraction. It does not result in executable code that does any work, but merely declares a delegate type called Procedure that takes no arguments and returns nothing. Next, in the Main() method, the statement Procedure someProcs = null; instantiates a delegate. The assignment means that the delegate is not initially referencing any methods. The statements someProcs += newProcedure(DelegateDemo.Method1) and someProcs += newProcedure(Method2) add two static methods to the delegate instance. Note that the class name can also be left off, as the statement is occurring inside DelegateDemo. The statement someProcs += newProcedure(demo.Method3) adds a non-static method to the delegate instance. For a non-static method, the method name is preceded by an object reference. When the delegate instance is called, Method3() is called on the object that was supplied when the method was added to the delegate instance. Finally, the statement someProcs() calls the delegate instance. All the methods that were added to the delegate instance are now called in the order that they were added.

Methods that have been added to a delegate instance can be removed with the -= operator:

```csharp
someProcs -= new Procedure(DelegateDemo.Method1);
```

In C# 2.0, adding or removing a method reference to a delegate instance can be shortened as follows:

```csharp
someProcs += DelegateDemo.Method1;
someProcs -= DelegateDemo.Method1;
```

Invoking a delegate instance that presently contains no method references results in a NullReferenceException.

Note that, if a delegate declaration specifies a return type and multiple methods are added to a delegate instance, an invocation of the delegate instance returns the return value of the last method referenced. The return values of the other methods cannot be retrieved (unless explicitly stored somewhere in addition to being returned).

## Anonymous delegates 

Anonymous delegates are a short way to write delegate code, specified using the delegate keyword. The delegate code can also reference local variables of the function in which they are declared. Anonymous delegates are automatically converted into methods by the compiler. For example:

```csharp
using System;
delegate void Procedure();

class DelegateDemo2
{
    static Procedure someProcs = null;

    private static void AddProc()
    {
        int variable = 100;
 
        someProcs += new Procedure(delegate
            {
                Console.WriteLine(variable);
            });
    }

    static void Main()
    {
        someProcs += new Procedure(delegate { Console.WriteLine("test"); });
        AddProc();
        someProcs();
        Console.ReadKey();
    }
}
```

They can accept arguments just as normal methods can:

```csharp
using System;
delegate void Procedure(string text);

class DelegateDemo3
{
    static Procedure someProcs = null;
    
    private static void AddProc()
    {
        int variable = 100;
 
        someProcs += new Procedure(delegate(string text)
            {
                Console.WriteLine(text + ", " + variable.ToString());
            });
    }
    
    static void Main()
    {
        someProcs += new Procedure(delegate(string text) { Console.WriteLine(text); });
        AddProc();
        someProcs("testing");
        Console.ReadKey();
    }
}
```

The output is:

```
testing
testing, 100
```

### Lambda expressions 

Lambda expressions are a clearer way to achieve the same thing as an anonymous delegate. Its form is:

```
(type1 arg1, type2 arg2, ...) => expression
```

This is equivalent to:

```csharp
delegate(type1 arg1, type2 arg2, ...)
{
    return expression;
}
```

If there is only one argument, the parentheses can be omitted. The type names can also be omitted to let the compiler infer the types from the context. In the following example, str is a string, and the return type is an int:

```csharp
Func<string, int> myFunc = str => int.Parse(str);
```

This is equivalent to:

```csharp
Func<string, int> myFunc = delegate(string str)
{
    return int.Parse(str);
};
```

## Events 

An event is a special kind of delegate that facilitates event-driven programming. Events are class members that cannot be called outside of the class regardless of its access specifier. So, for example, an event declared to be public would allow other classes the use of += and -= on the event, but firing the event (i.e. invoking the delegate) is only allowed in the class containing the event. A simple example:

```csharp
delegate void ButtonClickedHandler();
class Button
{
    public event ButtonClickedHandler ButtonClicked;
    public void SimulateClick()
    {
        if (ButtonClicked != null)
        {
            ButtonClicked();
        }
    }
    ...
}
```

A method in another class can then subscribe to the event by adding one of its methods to the event delegate:

```csharp
Button b = new Button();
b.ButtonClicked += MyHandler;
```

Even though the event is declared public, it cannot be directly fired anywhere except in the class containing it.


In general terms, an interface is the set of public members of a component. Of course, this is also true for C# interface. A C# class also defines an interface, as it has a set of public members. A non-abstract C# class defines the implementation of each member.

In C#, it is possible to have a type that is intermediate between a pure interface that does not define any implementation, and a type that defines a complete implementation. This is called an abstract class and is defined by including the abstract keyword in the class definition.

An abstract class is somewhere between a C# interface and a non-abstract class. Of the public members defined by an abstract class, any number of those members may include an implementation.

For example, an abstract class might provide an implementation for none of its members.

```csharp
public abstract class AbstractShape
{
    public abstract void Draw(Graphics g);
    public abstract double X {get; set;}
    public abstract double Y {get; set;}
}
```

This class is equivalent to an interface in many respects. (One difference is that a class that derives from this class cannot derive from any other class.)

An abstract class may also define all of its members.

```csharp
public abstract class AbstractShape
{
    private double _x;
    private double _y;
    //
    // ... (other members)
    //
    public void Draw(Graphics g) {g.DrawRectangle(Pens.Black, g_rect);}
    public double X {get{return _x;}}
    public double Y {get{return _y;}}
}
```

And an abstract class may define some of its members, but leave others undefined.

```csharp
public abstract class AbstractShape
{
    private double _x;
    private double _y;
    //
    // ... (other members)
    //
    public abstract void Draw(Graphics g);
    public double X {get{return _x;}}
    public double Y {get{return _y;}}
}
```

Although an abstract class is similar to a non-abstract class, some important differences exist. For one thing, you cannot create an instance of an abstract class with the new keyword. For example, the following statement will raise a compiler error:

```csharp
AbstractShape shape = new AbstractShape();
```

Of course, assuming the concrete class Square derives from AbstractShape, the following would be correct:

```csharp
AbstractShape shape = new Square();
```

A second difference is that an abstract class may have abstract members. As was shown above, this is not a must. To create a class with at least one abstract member, the abstract keyword must be added before the class keyword.

The third difference is that a class cannot be both abstract and sealed.

## Implementing methods 

As with virtual methods, you can implement abstract methods or properties with the override keyword:

```csharp
public class Rectangle : AbstractShape
{
    private double _x;
    private double _y;
    // ...
    public override void Draw(Graphics g)
    {
        g.DrawRectangle(Pens.Black, g_rect);
    }

    public override double X {
        get { return _x; }
        set { _x = value; }
    }

    public override double Y {
        get { return _y; }
        set { _y = value; }
    }
}
```

Overriding an abstract method is effectively the same as overriding a virtual method - you cannot change the access specifiers (i.e. you can't convert a protected abstract method into public), and you cannot add a missing get or set to an abstract property. The only difference is that "forgetting" the new or override keyword results in an error, if the class this method is belonging to was derived from an abstract class, and it will result in a warning, if the class tries to override a virtual method.

## Partial Classes 

As the name indicates, partial class definitions can be split up across multiple physical files. To the compiler, this does not make a difference, as all the fragments of the partial class are grouped and the compiler treats it as a single class. One common usage of partial classes is the separation of automatically-generated code from programmer-written code.

Below is an example of a partial class.

Listing 1: Entire class definition in one file (file1.cs)

```csharp
public class Node
{
    public bool Delete()
    {
    }

    public bool Create()
    {
    }
}
```

Listing 2: Class split across multiple files

(file1.cs)

```csharp
public partial class Node
{
    public bool Delete()
    {
    }
}
```

(file2.cs)

```csharp
public partial class Node
{
    public bool Create()
    {
    }
}
```

Generics are a new feature available since version 2.0 of the C# language and the common language runtime (CLR). Generics introduce to the .NET Framework the concept of type parameters, which make it possible to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code. The most common use of generics is to create collection classes. Generic types were introduced to maximize code reuse, type safety, and performance.[1]

## Generic classes 

There are cases when you need to create a class to manage objects of some type, without modifying them. Without generics, the usual approach (highly simplified) to make such class would be like this:

```csharp
public class SomeObjectContainer
{
    private object _obj;

    public SomeObjectContainer(object obj)
    {
        this._obj = obj;
    }

    public object GetObject()
    {
        return this._obj;
    }
}
```

And its usage would be:

```csharp
class Program
{
    static void Main(string[] args)
    {
        SomeObjectContainer container = new SomeObjectContainer(25);
        SomeObjectContainer container2 = new SomeObjectContainer(5);

        Console.WriteLine((int) container.GetObject() + (int) container2.GetObject());
        Console.ReadKey(); // wait for user to press any key, so we could see results
    }
}
```

Note that we have to cast back to original data type we have chosen (in this case - int) every time we want to get an object from such a container. In such small programs like this, everything is clear. But in more complicated cases with more containers in different parts of the program, we would have to take care that the container is supposed to have int type in it and no other data type, as in such a case, a InvalidCastException is thrown.

Additionally, if the original data type we have chosen is a value type, such as int, we will incur a performance penalty every time we access the elements of the collection due to the autoboxing feature of C#.

However, we could surround every unsafe area with a try - catch block, or we could create a separate "container" for every data type we need just to avoid casting. While both ways could work (and worked for many years), it is unnecessary now, because generics offers a much more elegant solution.

To make our "container" class to support any object and avoid casting, we replace every previous object type with some new name, in this case T, and add <T> mark immediately after the class name to indicate that this T type is generic/any type.

<dl>

<dd>Note: You can choose any name and use more than one generic type for class, i.e `<span class="p"><</span><span class="n">genKey</span><span class="p">,</span> <span class="n">genVal</span><span class="p">></span>`.</dd>

</dl>

```csharp
public class GenericObjectContainer<T>
{
    private T _obj;

    public GenericObjectContainer(T obj)
    {
        this._obj = obj;
    }

    public T getObject()
    {
        return this._obj;
    }
}
```

Not a big difference, which results in simple and safe usage:

```csharp
class Program
{
    static void Main(string[] args)
    {
        GenericObjectContainer<int> container = new GenericObjectContainer<int>(25);
        GenericObjectContainer<int> container2 = new GenericObjectContainer<int>(5);
        Console.WriteLine(container.getObject() + container2.getObject());

        Console.ReadKey(); // wait for user to press any key, so we could see results
    }
}
```

Generics ensures that you specify the type for a "container" once, avoiding previously mentioned problems and autoboxing for structs.

While this example is far from practical, it does illustrate some situations where generics are useful:

*   You need to keep objects of a single type in a class
*   You do not need to modify objects
*   You need to manipulate objects in some way
*   You wish to store a "[value type](/wiki/C_Sharp_Programming/Variables#Types "C Sharp Programming/Variables")" (such as <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[int](/wiki/C_Sharp_Programming/Keywords/int "C Sharp Programming/Keywords/int")</span>, <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[short](/wiki/C_Sharp_Programming/Keywords/short "C Sharp Programming/Keywords/short")</span>, <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[string](/wiki/C_Sharp_Programming/Keywords/string "C Sharp Programming/Keywords/string")</span>, or any custom <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[struct](/wiki/C_Sharp_Programming/Keywords/struct "C Sharp Programming/Keywords/struct")</span>) in a collection class without incurring the performance penalty of autoboxing every time you manipulate the stored elements.

## Generic interfaces 

A generic interface accepts one or more type parameters, similar to a generic class:

```csharp
public interface IContainer<T>
{
    T GetObject();
    void SetObject(T value);
}

public class StringContainer : IContainer<string>
{
    private string _str;
    
    public string GetObject()
    {
        return _str;
    }
    
    public void SetObject(string value)
    {
        _str = value;
    }
}

public class FileWithString : IContainer<string>
{
    ...
}

class Program
{
    static void Main(string[] args)
    {
        IContainer<string> container = new StringContainer();
        
        container.SetObject("test");

        Console.WriteLine(container.GetObject());
        container = new FileWithString();

        container.SetObject("another test");

        Console.WriteLine(container.GetObject());
        Console.ReadKey();
    }
}
```

Generic interfaces are useful when multiple implementations of a particular class are possible. For example, both the List<T> class (discussed below) and the LinkedList<T> class, both from the System.Collections.Generic namespace, implement the IEnumerable<T> interface. List<T> has a constructor that creates a new list based on an existing object that implements IEnumerable<T>, and so we can write the following:

```csharp
LinkedList<int> linkedList = new LinkedList<int>();

linkedList.AddLast(1);
linkedList.AddLast(2);
linkedList.AddLast(3);
// linkedList now contains 1, 2 and 3.

List<int> list = new List<int>(linkedList);

// now list contains 1, 2 and 3 as well!
```

## Generic methods 

Generic methods are very similar to generic classes and interfaces:

```csharp
using System;
using System.Collections.Generic;

public static bool ArrayContains<T>(T[] array, T element)
{
    foreach (T e in array)
    {
        if (e.Equals(element))
        {
            return true;
        }
    }

    return false;
}
```

This method can be used to search any type of array:

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        string[] strArray = { "string one", "string two", "string three" };
        int[] intArray = { 123, 456, 789 };
        
        Console.WriteLine(ArrayContains<string>(strArray, "string one")); // True
        Console.WriteLine(ArrayContains<int>(intArray, 135)); // False
    }
}
```

## Type constraints 

One may specify one or more type constraints in any generic class, interface or method using the where keyword. The following example shows all of the possible type constraints:

```csharp
public class MyClass<T, U, V, W>
    where T : class,        // T should be a reference type (array, class, delegate, interface)
        new()               // T should have a public constructor with no parameters
    where U : struct        // U should be a value type (byte, double, float, int, long, struct, uint, etc.)
    where V : MyOtherClass, // V should be derived from MyOtherClass
        IEnumerable<U>      // V should implement IEnumerable<U>
    where W : T,            // W should be derived from T
        IDisposable         // W should implement IDisposable
{
    ...
}
```

These type constraints are often necessary to

1.  create a new instance of a generic type (the `<span class="k">new</span><span class="p">()</span>`) constraint
2.  use <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[foreach](/wiki/C_Sharp_Programming/Keywords/foreach "C Sharp Programming/Keywords/foreach")</span> on a variable of a generic type (the `<span class="n">IEnumerable</span><span class="p"><</span><span class="n">T</span><span class="p">></span>` constraint)
3.  use <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[using](/wiki/C_Sharp_Programming/Keywords/using "C Sharp Programming/Keywords/using")</span> on a variable of a generic type (the `<span class="n">IDisposable</span>` constraint)

## Notes 

```csharp
↑ "Generics (C# Programming Guide)". http://msdn.microsoft.com/en-us/: msdn. http://msdn.microsoft.com/en-us/library/512aeb7t(VS.80).aspx. Retrieved 2011-08-09. 
```


Extension methods are a feature new to C# 3.0 and allow you to extend existing types with your own methods. While they are static, they are used as if they are normal methods of the class being extended. Thus, new functionality can be added to an existing class without a need to change or recompile the class itself. However, since they are not directly part of the class, extensions cannot access private or protected methods, properties, or fields.

Extension methods should be created inside a static class. They themselves should be static and should contain at least one parameter, the first preceeded by the this keyword:

```csharp
public static class MyExtensions
{
    public static string[] ToStringArray<T>(this List<T> list)
    {
        string[] array = new string[list.Count];

        for (int i = 0; i < list.Count; i++)
            array[i] = list[i].ToString();

        return array;
    }

    // to be continued...
}
```

The type of the first parameter (in this case List<T>) specifies the type with which the extension method will be available. You can now call the extension method like this:

```csharp
List<int> list = new List<int>();

list.Add(1);
list.Add(2);
list.Add(3);

string[] strArray = list.ToStringArray(); // strArray will now contain "1", "2" and "3".
```

Here is the rest of the program:

```csharp
using System;
using System.Collections.Generic;

public static class MyExtensions
{
    ... // continued from above

    public static void WriteToConsole(this string str)
    {
        Console.WriteLine(str);
    }

    public static string Repeat(this string str, int times)
    {
        System.Text.StringBuilder sb = new System.Text.StringBuilder();

        for (int i = 0; i < times; i++)
            sb.Append(str);

        return sb.ToString();
    }
}

class ExtensionMethodsDemo
{
    static void Main()
    {
        List<int> myList = new List<int>();
        
        for (int i = 1; i <= 10; i++)
            myList.Add(i);
        
        string[] myStringArray = myList.ToStringArray();
        
        foreach (string s in myStringArray)
            s.Repeat(4).WriteToConsole(); // string is extended by WriteToConsole()
        
        Console.ReadKey();
    }
}
```

Note that extension methods can take parameters simply by defining more than one parameter without the this keyword.

## Introduction 

All computer programs use up memory, whether that is a variable in memory, opening a file or connecting to a database. The question is how can the runtime environment reclaim any memory when it is not being used? There are three answers to this question:

*   If you are using a _managed_ resource, this is automatically released by the Garbage Collector
*   If you are using an _unmanaged_ resource, you must use the IDisposable interface to assist with the cleanup
*   If you are calling the Garbage Collector directly, by using `<span class="n">System</span><span class="p">.</span><span class="n">GC</span><span class="p">.</span><span class="n">Collect</span><span class="p">()</span>` method, it will be forced to tidy up resources immediately.

Before discussing managed and unmanaged resources, it would be interesting to know what the garbage collector actually does.

### Garbage Collector 

The garbage collector is a background process running within your program. It is always present within all .NET applications. Its job is to look for objects (i.e. reference types) which are no longer being used by your program. If the object is assigned to null, or the object goes out of scope, the garbage collector will mark the object be cleaned up at some point in the future, and not necessarily have its resources released immediately!

Why? The garbage collector will have a hard time keeping up with every de-allocation you make, especially at the speed the program runs and therefore only runs when resources become limited. Therefore, the garbage collector has three "generations".

*   Generation 0 - the most recently created objects
*   Generation 1 - the mid-life objects
*   Generation 2 - the long term objects.

All reference types will exist in one of these three generations. They will firstly be allocated to Gen 0, then moved to Gen 1 and Gen 2 depending on their lifetime. The garbage collector works by removing only what is needed and so will only scan Gen 0 for a quick-fix solution. This is because most, if not all, local variables are placed in this area.

For more in-depth information, visit the MSDN Article for a better explanation.

Now you know about the garbage collector, let's discuss the resources that it is managing.

### Managed Resources 

Managed resources are objects which run totally within the .NET framework. All memory is reclaimed for you automatically, all resources closed and you are in most cases guaranteed to have all the memory released after the application closes, or when the garbage collector runs.

You do not have to do anything with them with regards to closing connections or anything, it is a self-tidying object.

### Unmanaged Resources 

There are circumstances where the .NET framework world will not release resources. This may be because the object references resources outside of the .NET framework, like the operating system, or internally references another unmanaged component, or that the resources accesses a component that uses COM, COM+ or DCOM.

Whatever the reason, if you are using an object that implements the IDisposable interface at a class level, then you too need to implement the IDisposable interface too.

```csharp
public interface IDisposable
{
     void Dispose();
}
```

This interface exposes a method called Dispose(). This alone will not help tidy up resources, as it is only an interface, so the developer must use it correctly in order to ensure the resources are released. The two steps are:

1.  Always call Dispose() on any object that implements IDisposable as soon as you are finished using it. (This can be made easier with the <span style="color:#153e7e; text-decoration:none; font-weight:bold;">[using](/wiki/C_Sharp_Programming/Keywords/using "C Sharp Programming/Keywords/using")</span> keyword)
2.  Use the finalizer method to call Dispose(), so that if anyone has not closed your resources, your code will do it for them.

#### Dispose pattern 

Often, what you want to clean up varies depending on whether your object is being finalized. For example, you would not want to clean up managed resources in a finalizer since the managed resources could have been reclaimed by the garbage collector already. The dispose pattern can help you implement resource management properly in this situation:

```csharp
public class MyResource : IDisposable
{
    private IntPtr _someUnmanagedResource;
    private List<long> _someManagedResource = new List<long>();
    
    public MyResource()
    {
        _someUnmanagedResource = AllocateSomeMemory();
        
        for (long i = 0; i < 10000000; i++)
            _someManagedResource.Add(i);
        ...
    }
    
    // The finalizer will call the internal dispose method, telling it not to free managed resources.
    ~MyResource()
    {
        this.Dispose(false);
    }
    
    // The internal dispose method.
    private void Dispose(bool disposing)
    {
        if (disposing)
        {
            // Clean up managed resources
            _someManagedResource.Clear();
        }
        
        // Clean up unmanaged resources
        FreeSomeMemory(_someUnmanagedResource);
    }
    
    // The public dispose method will call the internal dispose method, telling it to free managed resources.
    public void Dispose()
    {
        this.Dispose(true);
        // Tell the garbage collector to not call the finalizer because we have already freed resources.
        GC.SuppressFinalize(this);
    }
}
```

### Applications 

If you are coming to C# from Visual Basic Classic you will have seen code like this:

```csharp
Public Function Read(ByRef FileName) As String
  
    Dim oFSO As FileSystemObject
    Set oFSO = New FileSystemObject
  
    Dim oFile As TextStream
    Set oFile = oFSO.OpenTextFile(FileName, ForReading, False)
    Read = oFile.ReadLine
    
End Function
```

Note that neither oFSO nor oFile are explicitly disposed of. In Visual Basic Classic this is not necessary because both objects are declared locally. This means that the reference count goes to zero as soon as the function ends which results in calls to the Terminate event handlers of both objects. Those event handlers close the file and release the associated resources.

In C# this doesn't happen because the objects are not reference counted. The finalizers will not be called until the garbage collector decides to dispose of the objects. If the program uses very little memory this could be a long time.

This causes a problem because the file is held open which might prevent other processes from accessing it.

In many languages the solution is to explicitly close the file and dispose of the objects and many C# programmers do just that. However, there is a better way: use the using statement:

```csharp
public read(string fileName)
{
    using (TextReader textReader = new StreamReader(filename))
    {
        return textReader.ReadLine();
    }
}
```

Behind the scenes the compiler turns the using statement into try ... finally and produces this intermediate language (IL) code:

```csharp
.method public hidebysig static string  Read(string FileName) cil managed
{
    // Code size       39 (0x27)
    .maxstack  5
    .locals init (class [mscorlib]System.IO.TextReader V_0, string V_1)
    IL_0000:  ldarg.0
    IL_0001:  newobj     instance void [mscorlib]System.IO.StreamReader::.ctor(string)
    IL_0006:  stloc.0
    .try
    {
        IL_0007:  ldloc.0
        IL_0008:  callvirt   instance string [mscorlib]System.IO.TextReader::ReadLine()
        IL_000d:  stloc.1
        IL_000e:  leave      IL_0025
        IL_0013:  leave      IL_0025
    }  // end .try
    finally
    {
        IL_0018:  ldloc.0
        IL_0019:  brfalse    IL_0024
        IL_001e:  ldloc.0
        IL_001f:  callvirt   instance void [mscorlib]System.IDisposable::Dispose()
        IL_0024:  endfinally
    }  // end handler
    IL_0025:  ldloc.1
    IL_0026:  ret
} // end of method Using::Read
```

Notice that the body of the Read function has been split into three parts: initialisation, try, and finally. The finally block includes code that was never explicitly specified in the original C# source code, namely a call to the destructor of the Streamreader instance.

See Understanding the 'using' statement in C# By TiNgZ aBrAhAm.

See the following sections for more applications of this technique.

### Resource Acquisition Is Initialisation 

The application of the using statement in the introduction is an example of an idiom called Resource Acquisition Is Initialisation (RAII).

RAII is a natural technique in languages like Visual Basic Classic and C++ that have deterministic finalization, but usually requires extra work to include in programs written in garbage collected languages like C# and VB.NET. The using statement makes it just as easy. Of course you could write the try..finally code out explicitly and in some cases that will still be necessary. For a thorough discussion of the RAII technique see HackCraft: The RAII Programming Idiom. Wikipedia has a brief note on the subject as well: Resource Acquisition Is Initialization.

Work in progress: add C# versions showing incorrect and correct methods with and without using. Add notes on RAII, memoization and cacheing (see OOP wikibook).

Design Patterns are common building blocks designed to solve everyday software issues. Some basic terms and example of such patterns include what we see in everyday life. Key patterns are the singleton pattern, the factory pattern, and chain of responsibility patterns.

## Factory Pattern 

The factory pattern is a method call that uses abstract classes and its implementations, to give the developer the most appropriate class for the job.

Lets create a couple of classes first to demonstrate how this can be used. Here we take the example of a bank system.

```csharp
public abstract class Transaction
{
     private string _sourceAccount;

     // May not be needed in most cases, but may on transfers, closures and corrections.
     private string _destinationAccount;
   
     private decimal _amount;
     public decimal Amount { get { return _amount; } }
   
     private DateTime _transactionDate;
     private DateTime _effectiveDate;

     public Transaction(string source, string destination, decimal amount)
     {
          _sourceAccount = source;
          _destinationAccount = destination;
          _amount = amount;
          _transactionDate = DateTime.Now;
     }

     public Transaction(string source, string destination, decimal amount, DateTime effectiveDate) : this(source, destination, amount)
     {
          _effectiveDate = effectiveDate;
     }

     protected decimal AdjustBalance(string accountNumber, decimal amount)
     {
          decimal newBalance = decimal.MinValue;

          using(Mainframe.ICOMInterface mf = new Mainframe.COMInterfaceClass())
          {
               string dateFormat = DateTime.Now.ToString("yyyyMMdd HH:mm:ss");
               mf.Credit(dateFormat, accountNumber, amount);
               newBalance = mf.GetBalance( DateTime.Now.AddSeconds(1), accountNumber);
          }
          
          return newBalance;
     }
     
     public abstract bool Complete();
}
```

This Transaction class is incomplete, as there are many types of transactions:

*   Opening
*   Credits
*   Withdrawals
*   Transfers
*   Penalty
*   Correction
*   Closure

For this example, we will take credit and withdrawal portions, and create classes for them.

```csharp
public class Credit : Transaction
{
     // Implementations hidden for simplicity

     public override bool Complete()
     {
          this.AdjustBalance( _sourceAccount, amount);
     }
}

public class Withdrawal : Transaction
{
     // Implementations hidden for simplicity

     public override bool Complete()
     {
          this.AdjustBalance( _sourceAccount, -amount);
     }
}
```

The problem is that these classes do much of the same thing, so it would be helpful, if we could just give it the values, and it will work out what class type we require. Therefore, we could come up with some ways to distinguish between the different types of transactions:

*   Positive values indicate a credit.
*   Negative values indicate a withdrawal.
*   Having two account numbers and a positive value would indicate a transfer.
*   Having two account numbers and a negative value would indicate a closure.
*   etc.

So, let us write a new class with a static method that will do this logic for us, ending the name Factory:

```csharp
public class TransactionFactory
{
     public static Transaction Create( string source, string destination, decimal amount )
     {
          if( string.IsNullOrEmpty(destination) )
          {
               if(amount >= 0)
                    return new Credit( source, null, amount);
               else
                    return new Withdrawal( source, null, amount);
          }
          else
          {
               // Other implementations here
          }
     }
}
```

Now, you can use this class to do all of the logic and processing, and be assured that the type you are returned is correct.

```csharp
public class MyProgram
{
     static void Main()
     {
          decimal randomAmount = new Random().Next()*1000000;
          Transaction t = TransactionFactory.Create("123456","",randomAmount);
          // t.Complete(); <-- This would carry out the requested transaction.
 
          Console.WriteLine("{0}: {1:C}",t.GetType().Name, t.Amount);
     }
}
```

## Singleton 

The singleton pattern instantiates only 1 object, and reuses this object for the entire lifetime of the process. This is useful, if you wish the object to maintain state, or if it takes lots of resources to set the object up. Below is a basic implementation:

```csharp
public class MySingletonExample
{
   private static Hashtable sharedHt = new Hashtable();

   public Hashtable Singleton
   {
     get 
      {
         return sharedHt;
      }
      // set { ; }
     // Not implemented for a true singleton
   }

   // Class implementation here..
}
```

The Singleton property will expose the same instance to all callers. Upon the first call, the object is initialised and on subsequent calls this is used.

Examples of this pattern include:

*   `<span class="n">ConfigurationSettings</span>` (Generic settings reader)
*   `<span class="n">HttpApplication</span>` (Application object in ASP .NET)
*   `<span class="n">HttpCacheUtility</span>` (Cache object in ASP .NET)
*   `<span class="n">HttpServerUtility</span>` (Server object in ASP .NET)

