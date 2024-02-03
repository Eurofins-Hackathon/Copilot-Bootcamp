# Flight demonstration: Basic Coding with Copilot Assistance

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
This section introduces the GitHub Copilot Chat Extension along with its agents (@workspace, @terminal, and @vscode), demonstrating the extension's ability to suggest code completions, such as filling in missing REST API methods in a controller class. It also shows how GitHub Copilot can generate code directly from comments, highlighting the tool's capacity to adapt to and replicate the user's coding style, thereby streamlining the development process and enhancing productivity.

### Step 1: Lay of the land - Explain the Codebase with Copilot Chat

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
> [!IMPORTANT]  
> Currently the `@workspace` command doesn't always give the correct answer. It also makes things up. This is a known issue and will be improved in the future. However, it does give a good idea of what is possible.
> When asking follow-up questions, the @agent needs to be provided again. For example, if you ask `@workspace` a question and then ask another question, you need to type `@workspace` again.

### Step 2: Test Flight - Autocompletion and Suggestions

#### Explain the Code
- To open GitHub Copilot Chat, press `Ctrl+Shift+P` to access the Command Palette, start typing `Copilot` to find and select the GitHub Copilot: Open Copilot command, or directly click the `Chat icon` if visible in your toolbar or sidebar.


- Open `WrightBrothersApi` folder located in the `WrightBrothersApi` folder.
- Open the `PlanesController.cs` file located in the `Controllers` folder.

- Ask Copilot to explain the `PlanesController.cs` class

    ```
    @workspace What does the PlanesController do? 
    ```

#### Add additional REST API methods
- Place your cursor at the end of the file, after the `}` of the `Post` method, press `Enter`.

```csharp
public class PlanesController : ControllerBase
{
    /* Rest of the methods */

    [HttpPost]
    public ActionResult<Plane> Post(Plane plane)
    {
        // Method body
    }

    <---- Place your cursor here
}
```

- GitHub Copilot will automatically suggest the `[HttpPut]` method.
- Accept the suggestion by pressing `Tab` to accept this attribute.
- Copilot will automaticly suggest the code for this method, press `Enter` to accept.

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

- Place your cursor at the end of the file, after the `}` of the `Put` method, press `Enter`.

- GitHub Copilot will automatically suggest the `[HttpDelete]` method. - Accept the suggestion by pressing `Tab` to accept this attribute.
- Copilot will automaticly suggest the code for this method, press `Enter` to accept.

    ```csharp
    // * Suggested by Copilot
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        // Method body
    }
    // * Suggested by Copilot
    ```

### Step 3: Test Flight Accelerate - Comments to Code

- If not aleady opened, open the `PlanesController.cs` file.

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

        <---- Place your cursor here
        // Search planes by name
    }
    ```

- Press `Enter` and GitHub Copilot will automatically suggest the `[HttpGet("searchByName")]` method.
- Accept the suggestion by pressing `Tab` to accept this attribute.
- Copilot will automaticly suggest the code for this method, press `Enter` to accept.

    ```csharp
    [HttpGet("searchByName")]
    public ActionResult<List<Plane>> SearchByName(string name)
    {
        // Method body
    }
    ```

>[!Note]
>The reason GitHub Copilot suggests the `[HttpGet("searchByName")]` method is because it understands that the comment is a description of the method. It also understands that the method is a GET method and that it has a parameter `name` of type `string`.


## Optional Labs

### Step 4: Testing your flying style - Logging - Consistency

#### Adding the Logger Example.
Let's present a code completion task for adding a logger with specific syntax (e.g., `_logger`). Use this to explain how Copilot adapts to and replicates your coding style.

- Open the `PlanesController.cs` file.

- Type `_logger.LogInformation("GET all ✈✈✈ NO PARAMS ✈✈✈");` in the `GetAll` method, before the `return Planes;` statement.

    ```csharp
    public class PlanesController : ControllerBase
    {
        /* Rest of the methods */

        [HttpGet]
        public ActionResult<List<Plane>> GetAll()
        {
            _logger.LogInformation("GET all ✈✈✈ NO PARAMS ✈✈✈");

            return Planes;
        }

    }
    ```

>[!Note]
>Notice the syntax of `✈✈✈ NO PARAMS ✈✈✈`. This is a custom syntax that is used in the codebase to log parameters of a method. It is used to make it easier to read the logs.
>You can use some other character instead of `✈✈✈` to make it easier to read the logs.

- Add another log statement in the `GetById` method.
- Type `_logger.LogInformation("GET all ✈✈✈ NO PARAMS ✈✈✈");` in the `GetById` method, before the `return Planes;` statement.

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

### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;
