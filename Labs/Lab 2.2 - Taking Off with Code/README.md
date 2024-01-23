# Taking Off with Code
This lab exercise covers ...

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Simple coding exercises using GitHub Copilot, focusing on understanding its suggestions and capabilities.
- Pair programming: One 'pilot' codes, the other guides using Copilot's suggestions.

### Required

#### Lab 3.1 Taxying to the Runway - Run existing unit tests

- Open GitHub Copilot Chat Extension

- Type the following in the chat window: 

```
@terminal how to run the unit tests?
```

- Copilot will give a suggestion to run the unit tests in the terminal.

- Open the terminal and run the tests with the provided command.

- The tests should pass.

#### Lab 3.2 Pre-takeoff Pilot Checks - Completing Unit Tests

- Open GitHub Copilot Chat Extension

- Type the following in the chat window: 

```
@workspace Where to add unit tests for the PlaneController?
```

- Copilot will give a suggestion to add unit tests to the PlaneControllerTests.cs file.

- Open `PlaneControllerTests.cs` that GitHub Copilot suggested in the chat by clicking on the provided file name.

- Make sure to have the PlaneController.cs file open as well.

Github Copilot will use any file that is open to gather extra context for its suggestions.

- Place your cursor at the end of the file, after the `}` of the `Post_WithInvalidPlane_ReturnsBadRequest` method.

```csharp
public class PlanesControllerTests
{
    [Fact]
    public void Post_WithInvalidPlane_ReturnsBadRequest()
    {
        // method body
    }

    /* <---- Place your cursor here */ 
}
```

- GitHub will now suggest missing unit tests based on the code in the `PlaneController.cs` file.

Make sure you have the `PlaneController.cs` file open.

- Accept the suggestions by pressing `Tab` or clicking on the suggestion.

### Optional Labs

#### Lab 3.3 Taking Off - Developing Robust Tests

Developing Robust Tests. Focus on creating comprehensive unit tests for the searchByName function. Incorporate a [Theory] attribute and explore multiple test cases.
	Writing comments to outline test cases.
	Using Copilot to convert these comments into actual test code.
	Emphasizing the utility of Copilot in generating edge case tests and enhancing code quality.
	Examples for this segment should include:

```csharp
•	// Wright Plane 1 == true
•	// Wright Plane 9 == false
•	// Aircraft == true
•	// lowercase test == true
•	// Other edge cases?
```


- Open `PlaneController.cs` file

- Make sure to add the `searchByName` method to the `PlaneController.cs` file if you haven't already in the previous lab.


```csharp
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
```

- Open `PlaneControllerTests.cs` file

- Place your cursor at the end of the file, after the `}` of the `Post_WithInvalidPlane_ReturnsBadRequest` method.

```csharp
public class PlanesControllerTests
{
    [Fact]
    public void Post_WithInvalidPlane_ReturnsBadRequest()
    {
        // method body
    }

    /* <---- Place your cursor here */ 
}
```

- Type the following comment: 

```csharp
// Search term | Amount of results | Description
// Wright Plane 1 | 1 | Specific search
// Wright Plane | 3 | General search
// wright plane | 3 | Case insensitive
//  Wright  Plane  | 3 | Extra spaces
```

- Now press `Enter`

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

- Not all tests will pass. For example the `Case insensitive` test will fail. This is because the `searchByName` is case sensitive. Let's fix this.

- Open `PlaneController.cs` file

- Ask Copilot to fix the case sensitivity issue by typing the following in the chat window: 

// TODO: Fix case sensitivity issue

- Also the `Extra spaces` test will fail. This is because the `searchByName` is not trimming the search term. Let's fix this.

- Open `PlaneController.cs` file

- Ask Copilot to fix the trimming issue by typing the following in the chat window:

// TODO: Fix trimming issue