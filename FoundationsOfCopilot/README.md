# Foundations of GitHub Copilot
This lab exercise covers the nuances of code autocompletion and suggestions, the art of effective code documentation, and develop a deeper contextual understanding for more intuitive programming.

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 45 min

## Objectives
- Understand the principles and mechanisms behind code autocompletion and suggestion tools.
- Learn how to effectively utilize code suggestions for enhancing coding efficiency and accuracy.
- Explore the use of auto completions for common programming tasks to speed up the development process.
- Discover methods for generating unit tests automatically to ensure code reliability and functionality.
- Master the creation of code and snippets to streamline repetitive coding tasks and improve productivity.
- Customize code suggestions to align with individual coding styles and project requirements.
- Gain proficiency in writing regular expressions (Regex) with the help of autocompletion tools.
- Develop skills in creating data model skeletons rapidly through automated generation techniques.

## Code Autocompletion and Suggestions
Explore advanced functionalities of code autocompletion and suggestions to streamline your coding process and enhance productivity.

#### Providing Code Suggestions
1. Open a new file and set it to C# mode (e.g., create a file `Example.cs`).
1. Start typing a method. For example, type `public int CalculateSum(int a, int b) {`.
1. GitHub Copilot might suggest:
    ```csharp
    public int CalculateSum(int a, int b) {
        return a + b;
    }
    ```
1. Accept the suggestion with Tab or modify as needed.

#### Using Auto Completions for Common Tasks

1. Enable it for your current C# file (right-click and check 'Command Palette').
1. Go to Visual Studio Code settings (Ctrl+,).
1. Search for `Copilot` and adjust settings for C# specific features.
1. Enable `Inline suggestions` for smoother auto-completions.


#### Generating Unit Tests
1. Familiarize yourself with a C# unit testing framework like NUnit or xUnit.
1. In a C# file, start typing a test method, e.g., `[Test] public void TestCalculateSum() {`.
1. GitHub Copilot might suggest:
   ```csharp
   [Test]
   public void TestCalculateSum() {
       Assert.AreEqual(3, CalculateSum(1, 2));
   }
    ```
1. Accept or refine this suggestion.

#### Code and Snippet Generation
1. Start typing a common C# pattern, like a `foreach` loop.
1. GitHub Copilot might suggest the complete loop structure.
    ```csharp
    foreach (var item in collection) {
        // do something
    }
    ```
1. Accept or refine this suggestion.

1. Go to 'Preferences: Configure User Snippets' under the Command Palette (Ctrl+Shift+P).
1. Choose or create a new snippet file for C#.
2. Define a snippet, for example:
   ```json
   "Console WriteLine": {
       "prefix": "cw",
       "body": [
           "Console.WriteLine($1);"
       ],
       "description": "Shortcut for Console.WriteLine"
   }
    ```

1. Save and use cw as a shortcut to quickly write Console.WriteLine statements in C# files.

####  Customizing Code Suggestions
##### Customize suggestion algorithms based on coding style
1. Use GitHub Copilot in your regular coding to help it learn your style.
1. For example, consistently use a certain style in method naming or comment structure.
1. Copilot will adapt to these patterns over time, making suggestions that align with your style.


##### Implement user-defined templates for personalized suggestions
1. Define templates for common code structures you use. 
2. For instance, create a C# class template:
```csharp
public class MyClass
{
    // Constructor
    public MyClass() {}

    // Properties
    public int MyProperty { get; set; }

    // Methods
    public void MyMethod() {}
}
```
> [!NOTE]
> Use this structure regularly so Copilot recognizes and suggests similar structures in the future.

#### Writing Regex
##### Learn basic regex patterns

### Writing Regex

#### Simple
---
##### Learn basic regex patterns
1. Familiarize yourself with basic regex syntax, such as `^` (start of string), `$` (end of string), `.` (any character), and `*` (zero or more occurrences).
1. Example: To match an email address, start with a simple pattern like `\w+@\w+\.\w+`.

##### Use tools to generate regex for complex patterns
1. Open a C# file and start typing a comment describing the pattern you need, e.g., `// regex to match an ISO date format`.
2. GitHub Copilot might suggest:
    ```csharp
    // regex to match an ISO date format
    string pattern = @"\d{4}-\d{2}-\d{2}";

#### Advanced
---
Let's explore a more advanced example of using regex in C#. We will look at a complex pattern such as validating a URL with a regex expression, which is a more intricate pattern compared to the email address example.

<details>
<summary>Click to expand!</summary>

##### Learn basic regex patterns
1. Familiarize yourself with more advanced regex constructs, such as lookahead (?=...), lookbehind (?<=...), and non-capturing groups (?:...).
1. Understand regex tokens for specific characters, like \d for digits, \w for word characters, and \s for whitespace.

##### Use tools to generate regex for complex patterns
1. Open a C# file and start typing a comment that describes the complex pattern you need. For example, let's create a regex for validating URLs:

1. // regex to validate a URL
2. GitHub Copilot might suggest a complex regex pattern like:

    ```csharp
    // regex to validate a URL
    string urlPattern = @"^(https?:\/\/)?(?:www\.)?[a-zA-Z0-9./]+\.([a-z]{2,6})([\/\w .-]*)*\/?$";
    ```
1. This pattern breaks down as follows:

    - `^` and `$`: Match the start and end of the string.
    - `(https?:\/\/)?`: Optionally match 'http://' or 'https://' using a non-capturing group.
    - `(?:www\.)?`: Optionally match 'www.' using a non-capturing group.
    - `[a-zA-Z0-9./]+`: Match the domain name.
    - `\.([a-z]{2,6})`: Match a dot followed by 2 to 6 letters for the domain suffix.
    - `([\/\w .-]*)*`: Match any path after the domain name.
    - `\/?$`: Optionally match a trailing slash at the end.
    - Test and refine the regex as needed. Remember, regex can be complex and may need adjustment depending on the exact URL format you need to validate.

</details>

### Creating Data Model Skeletons

#### Define data model requirements
1. Determine the structure of the data model you need, including properties and data types.
1. Example: Define a model for a `User` with properties like `Name`, `Email`, and `DateOfBirth`.

#### Utilize tools to auto-generate data model skeletons
#### Simple
---
Use a tool like QuickType to generate data models from JSON or XML.

1. Start typing the class definition in a C# file, e.g., `public class User {`.
1. GitHub Copilot might suggest:

    ```csharp
    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
    ```

1. Accept this suggestion or modify it according to your specific requirements.

#### Advanced
---
Use a tool like Entity Framework to generate data models from a database.

1. Start typing a more complex class definition in a C# file. For instance. `public class Employee {`.
1. GitHub Copilot might suggest a detailed class structure like:
<details>
<summary>Click to expand!</summary>

```csharp
    public class Employee
    {
    // Properties
    public int EmployeeId { get; set; }
    public string Name { get; set; }
    public string Department { get; set; }
    public decimal AnnualSalary { get; set; }
    public DateTime DateOfJoining { get; set; }
    public List<string> Skills { get; set; }

    // Constructor
    public Employee(int employeeId, string name, string department, decimal annualSalary, DateTime dateOfJoining)
    {
        EmployeeId = employeeId;
        Name = name;
        Department = department;
        AnnualSalary = annualSalary;
        DateOfJoining = dateOfJoining;
        Skills = new List<string>();
    }

    // Methods
    public void AddSkill(string skill)
    {
        Skills.Add(skill);
    }

    public override string ToString()
    {
        return $"Employee ID: {EmployeeId}, Name: {Name}, Department: {Department}, Annual Salary: {AnnualSalary}, Date of Joining: {DateOfJoining.ToShortDateString()}, Skills: {string.Join(", ", Skills)}";
    }
    }
```

</details>

1. Review and modify this suggestion to align with your specific requirements. You might want to add more methods, properties, or change data types as needed.


## Code Documentation
Enhance the clarity and maintainability of your code with effective documentation techniques and best practices.
#### Generating Comments and Documentation
##### Use automated tools for inline documentation
1. Write a C# method, and right above it, start typing a summary comment.
2. GitHub Copilot might automatically suggest a comment. For example:
   ```csharp
   /// <summary>
   /// Calculates the sum of two integers.
   /// </summary>
   /// <param name="a">First integer.</param>
   /// <param name="b">Second integer.</param>
   /// <returns>The sum of the two integers.</returns>
   public int CalculateSum(int a, int b)
   {
       return a + b;
   }
    ```
1. Accept or modify the suggested comment.

> [!NOTE]
> 1. Review the suggested comments.
> 1. Edit to make them more specific and concise, avoiding redundancy or obvious information.
> 1. Study C# documentation standards, like XML documentation comments.
> 1. Learn the common tags used, such as `<summary>`, `<param>`, `<returns>`.
> 1. Start applying these standards in your C# code.
> 1. For every method, class, or module, write XML documentation comments.
> 1. Ensure consistency in style and level of detail across your codebase.
> 1. Go through existing comments and documentation in your code.
> 1. Identify areas that lack clarity or are overly complex.
> 1. Refine and simplify the language used in documentation.
> 1. For complex methods, add examples or additional context to make them more understandable.

#### Creating Documentation
##### Outline the structure for comprehensive documentation
1. Decide on the structure for your documentation, including introduction, usage examples, API reference, and FAQs.

##### Write detailed descriptions and usage instructions
1. For each section, write detailed, clear, and helpful information. For example:
   ```markdown
   ## Introduction
   This document describes the usage of the CalculateSum API, which provides a simple interface to perform addition operations.

   ## Usage Example
   ```csharp
   var calculator = new Calculator();
   int result = calculator.CalculateSum(5, 10);
   Console.WriteLine($"Result: {result}");
    ```

## Contextual Understanding
Delve into the intricacies of contextual understanding in coding, focusing on how tools like GitHub Copilot adapt to existing code patterns for more intuitive support.

#### Adapts to existing code patterns
##### Analyze existing code base for pattern recognition
1. Review your existing C# code base to identify common patterns. This could include specific naming conventions, error handling strategies, or architecture designs.
1. Example: In a project, you might frequently use a specific pattern for handling exceptions:
   ```csharp
   try
   {
       // Some operation
   }
   catch (Exception ex)
   {
       LogError(ex);
       throw;
   }
    ```

> [!NOTE]
> These recurring patterns form the basis of the contextual understanding.

##### Implement tools that learn and adapt to these patterns

**Step 2: Implement tools that learn and adapt to these patterns**

1. Use GitHub Copilot in your regular coding to help it learn your style.
1. As you code, Copilot observes the patterns in your existing code. For instance, if you often use the above exception handling pattern, start typing a `try-catch` block in a new method:
   ```csharp
   public void NewMethod()
   {
       try
       {
           // Start typing operation
       }
   }
    ```
1. Copilot is likely to suggest completing the `try-catch` block in the style it observed from your previous code, including the custom LogError method and rethrowing the exception.
> [!NOTE]
> By consistently coding in a particular style, Copilot will adapt and offer suggestions that align more closely with your established patterns, making its support increasingly intuitive and tailored to your coding style.