# Taking Off with Code
This lab exercise guides participants through coding exercises using GitHub Copilot to understand its suggestions and capabilities. It involves running and adding unit tests, with an emphasis on pair programming. The lab is structured in steps, starting with executing existing unit tests, followed by enhancing test coverage, and addressing specific functionalities like case sensitivity and trimming in search methods.

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Simple coding exercises using GitHub Copilot, focusing on understanding its suggestions and capabilities.
- Pair programming: One 'pilot' codes, the other guides using Copilot's suggestions.

### Step 1: Taxying to the Runway - Run existing unit tests

#### Use GitHub Copilot Chat Agent to run the unit tests

- Open GitHub Copilot Chat, press `Ctrl+Shift+P` to access the Command Palette, start typing `Copilot` to find and select the GitHub Copilot: Open Copilot command, or directly click the `Chat icon` if visible in your toolbar or sidebar.

- Type the following in the chat window: 

    ```sh
    @terminal how do I to run the unit tests?
    ```

- Copilot will give a suggestion to run the unit tests in the terminal.

    ```sh
    dotnet test WrightBrothersApi.Tests/WrightBrothersApi.Tests.csproj
    ```

- Let's run the unit tests in the terminal to make sure everything is working as expected.
- From the Copilot Chat window, select one of the two options:
    - Click the ellipses, `...`, select `Insert into Terminal`.
    - If there isn't a terminal open, click the `Open in Terminal` button.
    - Click copy button, then, open a new Terminal window by pressing **Ctrl+`** (Control and backtick), paste into Terminal window.

- Open the terminal and run the tests with the provided command.

    ```sh
    cd WrightBrothersApi
    dotnet test
    ```

- The tests should run and pass.

    ```sh
    Starting test execution, please wait...
    A total of 1 test files matched the specified pattern.
    Passed!  - Failed:     0, Passed:     2
    ```

### Step 2: Pre-takeoff Pilot Checks - Completing Unit Tests

- Open GitHub Copilot Chat, press `Ctrl+Shift+P` to access the Command Palette, start typing `Copilot` to find and select the GitHub Copilot: Open Copilot command, or directly click the `Chat icon` if visible in your toolbar or sidebar.

- Type the following in the chat window: 

    ```sh
    @workspace Where do I add additional unit tests?
    ```

- Copilot will give a suggestion to add unit tests to the `PlanesControllerTests.cs` file.

    ```sh
    ...
    You can add additional unit tests in the PlanesControllerTest.cs file located in the Controller folder. This file is where the existing unit tests for the PlanesController are located.

    etc...
    ```

- Open `PlanesControllerTests.cs` that GitHub Copilot suggested in the chat by clicking on the provided file name in the chat.

- Make sure to have the `PlanesController.cs` file open as well.

>[!Note]
> Github Copilot will use any file that is open to gather extra context for its suggestions, this is why it's important to have the `PlanesController.cs` file open.

- Place your cursor at the end of the file, after the `}` of the `Post_AddsPlaneAndReturnsCreated` method.

```csharp
public class PlanesControllerTests
{
    [Fact]
    public void Post_WithInvalidPlane_ReturnsBadRequest()
    {
        // method body
    }

    <---- Place your cursor here
}
```

>[!Note]
> Make sure you have the `PlanesController.cs` file open.

- Press `Enter`, GitHub Copilot will now suggest missing unit tests based on the code in the `PlanesController.cs` file.
- After `[Fact]` attribute, press `Tab`.
- GitHub Copilot will suggest a method name and the method body, press `Tab` to accept the suggestion.


### Optional Labs

### Step 3: Taking Off - Developing Robust Tests

- Open the `PlanesController.cs` file.

- Make sure to add the `searchByName` method to the `PlanesController.cs` file if you haven't already in the previous lab.


> [!CAUTION]
> This might need to be "search" instead of "searchByName"
> This might need to be GetByName instead of searchByName.

    ````csharp
    public class PlanesController : ControllerBase
    {
        /* Rest of the methods */
        
        [HttpGet("searchByName")]
        public ActionResult<List<Plane>> searchByName([FromQuery] string name)
        {
            _logger.LogInformation($"GET ✈✈✈ {name} ✈✈✈");

            var planes = Planes.FindAll(p => p.Name.Contains(name));

            if (planes == null)
            {
                return NotFound();
            }

            return Ok(planes);
        }
    }
    ````

- Open `PlanesControllerTests.cs` file

- Place your cursor at the end of the file, after the last unit tests `}`. Should be `GetById_ReturnsCorrectPlane()` method created in previous step.

    ```csharp
    public class PlanesControllerTests
    {
        [Fact]
        public void GetById_ReturnsCorrectPlane()
        {
            // method body
        }

        <---- Place your cursor here
    }
    ```

- Type the following comment: 

    ```csharp
    // Search term    | Amount of results | Description
    // Wright Plane 1 | 1                 | Specific search
    // Wright Plane   | 3                 | General search
    // wright plane   | 3                 | Case insensitive
    //  Wright  Plane | 3                 | Extra spaces
    ```

- Now press `Enter`, then `Enter` again to have Copilot suggest the unit tests.

- GitHub Copilot will automatically suggest the `[Theory]` attribute. Accept the suggestion by pressing `Enter`.

- GitHub Copilot will automatically suggest the `[InlineData]` attributes. Accept the suggestion by pressing `Enter`.


```csharp
[Theory]
[InlineData("Wright Plane 1", 1, "Specific search")]
[InlineData("Wright Plane", 3, "General search")]
[InlineData("wright plane", 3, "Case insensitive")]
[InlineData(" Wright  Plane  ", 3, "Extra spaces")]
public void SearchByName_WithValidPlane_ReturnsOk(string searchTerm, int expectedAmountOfResults, string description)
{
    // Act
    var result = _planesController.searchByName(searchTerm);

    // Assert
    result.Value.Should().HaveCount(expectedAmountOfResults);
}
```
> [!IMPORTANT]  
> Occasionally, Copilot might return incorrect results due to its reliance on patterns learned from the vast amount of code and data it has been trained on.

    ```sh
        var result = _planesController.Search(searchTerm);
    ```

- Replace `Search` with `GetByName`.

    ```sh
        var result = _planesController.GetByName(searchTerm);
    ```

> [!CAUTION]
> TODO! Thijs! This needs to be Fixed.
> If result.Value is null, it means that the GetById method is not working as expected. It's possible that the Planes list in the PlanesController class is not properly initialized when the test is run, or the GetById method is not correctly finding the plane with the specified id.


- Let's run the unit tests in the terminal to make sure everything is working as expected.

- Open the terminal and run the tests with the provided command.

    ```sh
    cd WrightBrothersApi
    dotnet test
    ```

- Not all tests will pass. For example the `Case insensitive` test will fail. This is because the `GetByName` is case sensitive. Let's fix this.

    ```sh
    Starting test execution, please wait...
    A total of 1 test files matched the specified pattern.
    Passed!  - Failed:     0, Passed:     5, , Failed:     2
    ```

- Open `PlanesController.cs` file

- Ask Copilot to fix the case sensitivity issue by typing the following in the chat window: 

    ```
    Fix case sensitivity issue
    ```

- Copilot will give a suggestion to fix the case sensitivity issue.

>[!Note]
> Copilot chat: "Here's how you can adjust the GetByName method to be case insensitive. You'll need to use the StringComparer.OrdinalIgnoreCase comparer in the FindAll method:"

- In the `GetByName` method, locate the `var planes`. This search is case sensitive.

    ```csharp
    var planes = Planes.FindAll(p => p.Name.Contains(name));
    ```

- Now replace the `var planes` line with the with the following snippet. This will make the search case insensitive.

    ```csharp
    var planes = Planes.FindAll(p => p.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
    ```

- Also the `Extra spaces` test will fail. This is because the `GetByName` is not trimming the search term. Let's fix this.

- Open `PlanesController.cs` file

- Ask Copilot to fix the trimming issue by typing the following in the chat window:

    ```
    Fix trimming issue
    ```

>[!Note]
> Copilot chat: "It seems like you want to ignore leading and trailing spaces when searching for a plane by its name. You can achieve this by using the Trim method on the name parameter before using it in the Contains method. Here's how you can adjust the GetByName method."


- In the `GetByName` method, place your cursor before the `var planes` line added above.

    ```csharp
    public class PlanesControllerTests
    {
      
        <---- Place your cursor here

        var planes = Planes.FindAll(p => p.Name.Contains(name, StringComparison.OrdinalIgnoreCase));

        // Rest of the method

    }
    ```

- Now add the suggested line `name = name.Trim();` line with the with the following snippet. This will ignore leading and trailing spaces.

    ```csharp
    
    name = name.Trim(); // Remove leading and trailing spaces
    
    var planes = Planes.FindAll(p => p.Name.Contains(name, StringComparison.OrdinalIgnoreCase));

    ```

- Let's run the unit tests in the terminal to make sure everything is working as expected.

- Open the terminal and run the tests with the provided command.

    ```sh
    cd WrightBrothersApi
    dotnet test
    ```
- The tests should run and pass.

    ```sh
    Starting test execution, please wait...
    A total of 1 test files matched the specified pattern.
    Passed!  - Failed:     0, Passed:     7, , Failed:     0
    ```
### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;
