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
-  Customize suggestion algorithms based on coding style
    1. Use GitHub Copilot in your regular coding to help it learn your style.
    1. For example, consistently use a certain style in method naming or comment structure.
    1. Copilot will adapt to these patterns over time, making suggestions that align with your style.


 - Implement user-defined templates for personalized suggestions
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
  - Step 1: Learn basic regex patterns
  - Step 2: Use tools to generate regex for complex patterns


#### Creating Data Model Skeletons
  - Step 1: Define data model requirements
  - Step 2: Utilize tools to auto-generate data model skeletons


## Code Documentation
Enhance the clarity and maintainability of your code with effective documentation techniques and best practices.
- Generating Comments and Documentation
  - Step 1: Use automated tools for inline documentation
  - Step 2: Ensure comments are clear and concise
- Best Practices for Documentation
  - Step 1: Familiarize with documentation standards
  - Step 2: Apply consistent documentation throughout codebase
- Improving Readability with Documentation Suggestions
  - Step 1: Review existing documentation for clarity
  - Step 2: Incorporate suggestions for enhanced readability
- Creating Documentation
  - Step 1: Outline the structure for comprehensive documentation
  - Step 2: Write detailed descriptions and usage instructions

## Contextual Understanding
Delve into the intricacies of contextual understanding in coding, focusing on how tools like GitHub Copilot adapt to existing code patterns for more intuitive support.
- Adapts to existing code patterns
  - Step 1: Analyze existing code base for pattern recognition
  - Step 2: Implement tools that learn and adapt to these patterns
