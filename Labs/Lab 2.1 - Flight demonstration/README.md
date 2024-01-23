# Flight demonstration: Basic Coding with Copilot Assistance
This lab exercise covers ...

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Simple coding exercises using GitHub Copilot, focusing on understanding its suggestions and capabilities.
- Pair programming: One 'pilot' codes, the other guides using Copilot's suggestions.

### Required Labs

#### Lab 3.1 Lay of the land - Explain the Codebase with Copilot Chat

- Open GitHub Copilot Chat Extension

- Type the following in the chat window: 

```
@workspace explain the WrightBrothers API
```

- Copilot will give a brief overview of the API. This is a good way to get a quick overview of the codebase.

TODO: Add Screenshot of Copilot Chat explain the workspace

GitHub Copilot has the concept of Agents. `@workspace` is an agent that is specialized in answering questions about the currently open workspace.

There are two other Agents `@terminal` and `@vscode`. They are used to help navigate the terminal and VS Code settings respectively.

- Try `@terminal` agent by typing the following in the chat window:

```
@terminal how to run the application?
```

- It will give a suggestion to run the application in the terminal.

- Try `@vscode` agent by typing the following in the chat window:

```
@vscode how to install extensions?
```

- It will provide a corresponding setting or an action button to install extensions.



Limitations:

- Currently the `@workspace` command doesn't always give the correct answer. It also makes things up. This is a known issue and will be improved in the future. However, it does give a good idea of what is possible.

- When asking follow-up questions, the @agent needs to be provided again. For example, if you ask `@workspace` a question and then ask another question, you need to type `@workspace` again.

#### Lab 3.2 Test Flight - Autocompletion and Suggestions

- Open GitHub Copilot Chat Extension

- Ask Copilot to explain the `PlanesController.cs` class

```
@workspace What does the PlanesController do? 
```

- Open the `PlanesController.cs` file.

- Place your cursor at the end of the file, after the `}` of the `Post` method.

```csharp
public class PlanesController : ControllerBase
{
    /* Rest of the methods */

    [HttpPost]
    public ActionResult<Plane> Post(Plane plane)
    {
        // Method body
    }

    /* <---- Place your cursor here */ 
}
```

- GitHub Copilot will automatically suggest the `[HttpPut]` method. Accept the suggestion by pressing `Enter`.

```csharp
// * Suggested by Copilot
[HttpPut("{id}")]
public IActionResult Put(int id, Plane plane)
{
    // Method body
}
// * Suggested by Copilot
```

>[!Note]
>The reason GitHub Copilot suggests the `[HttpPut]` method is because it understand that the `PlanesController.cs` class is a REST API controller and that the `[HttpPut]` is currently missing. The `[HttpPut]` method is the next logical step in the REST API for updating a resource.

- Place your cursor again at the end of the file, after the `}` of the `Put` method.

- GitHub Copilot will automatically suggest the `[HttpDelete]` method. Accept the suggestion by pressing `Enter`.

```csharp
// * Suggested by Copilot
[HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    // Method body
}
// * Suggested by Copilot
```

#### Lab 3.3 Test Flight Accelerate - Comments to Code

- Open the `PlanesController.cs` file.

- Type `// Search planes by name` in the comment block. After the `}` of the `GetAll` method.

```csharp
public class PlanesController : ControllerBase
{
    /* Rest of the methods */

    [HttpGet]
    public ActionResult<List<Plane>> GetAll()
    {
        // Method body
    }

    // Search planes by name <--- Place your cursor here
}
```

- Press `Enter` and GitHub Copilot will automatically suggest the `[HttpGet("searchByName")]` method.

```csharp
[HttpGet("searchByName")]
public ActionResult<List<Plane>> SearchByName(string name)
{
    // Method body
}
```

>[!Note]
>The reason GitHub Copilot suggests the `[HttpGet("searchByName")]` method is because it understands that the comment is a description of the method. It also understands that the method is a GET method and that it has a parameter `name` of type `string`.


### Optional Labs

#### Lab 3.4 Testing your flying style - Logging - Consistency

Adding the Logger Example. Present a code completion task for adding a logger with specific syntax (e.g., _logger). Use this to explain how Copilot adapts to and replicates your coding style.

- Open the `PlanesController.cs` file.

- Type `_logger.LogInformation("GET all ✈✈✈ NO PARAMS ✈✈✈");` in the `GetAll` method.

>[!Note]
>You can use some other character instead of `✈✈✈` to make it easier to read the logs.

```csharp
public class PlanesController : ControllerBase
{
    /* Rest of the methods */

    [HttpGet]
    public ActionResult<List<Plane>> GetAll()
    {
        _logger.LogInformation("GET all ✈✈✈ NO PARAMS ✈✈✈");

        return Ok(Planes);
    }
}
```

>[!Note]
>Notice the syntax of `✈✈✈ NO PARAMS ✈✈✈`. This is a custom syntax that is used in the codebase to log parameters of a method. It is used to make it easier to read the logs.

- Add another log statement in the `GetById` method.

```csharp
public class PlanesController : ControllerBase
{
    /* Rest of the methods */

    [HttpGet("{id}")]
    public ActionResult<Plane> GetById(int id)
    {
        <---- Place your cursor here

        // Method body
    }
}
```

- Type `_log` and notice the suggestion that GitHub Copilot gives:

```csharp
[HttpGet("{id}")]
public ActionResult<Plane> GetById(int id)
{
    _logger.LogInformation($"GET ✈✈✈ {id} ✈✈✈");

    // Method body
}
```

>[!Note] 
> Copilot learns from the codebase and adapts to the coding style. In this case, it replicates the custom syntax used for logging.

- Now repeat the same steps for the other methods in the `PlanesController.cs` class.

```csharp
[HttpPost]
public ActionResult<Plane> Post(Plane plane)
{
    _logger.LogInformation($"POST ✈✈✈ {plane.Id} ✈✈✈");

    // Method body
}

[HttpPut("{id}")]
public IActionResult Put(int id, Plane plane)
{
    _logger.LogInformation($"PUT ✈✈✈ {id} ✈✈✈");

    // Method body
}

[HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    _logger.LogInformation($"DELETE ✈✈✈ {id} ✈✈✈");

    // Method body
}
```
