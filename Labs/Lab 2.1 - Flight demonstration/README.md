# Flight demonstration: Basic Coding with Copilot Assistance
This module demonstrates how to utilize GitHub Copilot's Chat Extension and its agents (@workspace, @terminal, @vscode) to understand and navigate a codebase, implement REST API methods, generate code from comments, and maintain coding style consistency, culminating in a comprehensive, productivity-enhancing coding experience.

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
Introduction to GitHub Copilot Chat Extension and its agents for code completion and style adaptation.


TODO: ADd Disclaimer about Copilot not always being correct or results do not match with actual results.


### Step 1: Plane Inspection - Explain the Codebase with Copilot Chat

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

### Step 2: Airplane Docking - Add new Flight Model

- Open GitHub Copilot Chat Extension

- Ask Copilot to explain the `PlanesController.cs` class

    ```
    @workspace What does the PlanesController do? 
    ```

> [!Note]
> GitHub Copilot will give a brief overview of the `PlanesController.cs` class.

- Next, open `WrightBrothersApi` folder located in the `WrightBrothersApi` folder.

- Open the `PlanesController.cs` file located in the `Controllers` folder.

- Place your cursor at the end of the `Planes` List, after the `}` of `Plane` with `Id = 3`, press `Enter`.

```csharp
public class PlanesController : ControllerBase
{
    /* Rest of the methods */

    private static readonly List<Plane> Planes = new List<Plane>
    {
        // Other planes
        new Plane
        {
            Id = 3,
            Name = "Wright Model A",
            Year = 1908,
            Description = "The first commercially successful airplane.",
            RangeInKm = 40
        },
        <---- Place your cursor here
    };
}
```

- GitHub Copilot will automatically suggest a `new Plane`.

>[!Note]
> GitHub Copilot will suggest a new `Plane` object with the next available `Id`. Also notice how Copilot understood that the next Plane is the Wright Model B and it automatically suggested the `Name`, `Year`, `Description`, and `RangeInKm` properties. The underlying LLM also learned from Wikipedia and other sources to understand the history of the Wright Brothers.

- Accept the suggestion by pressing `Tab` to accept this suggestion.

### Step 3: Test Flight - Autocompletion and Suggestions

- Open `WrightBrothersApi` folder located in the `WrightBrothersApi` folder.

- Open the `PlanesController.cs` file located in the `Controllers` folder.

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

- Next, Copilot will automatically suggest the method for the `[HttpPut]` attribute, press `Enter` to accept.

    ```csharp
    // * Suggested by Copilot
    [HttpPut("{id}")]
    public IActionResult Put(int id, Plane plane)
    {
        if (id != plane.Id)
        {
            return BadRequest();
        }

        var existingPlane = Planes.Find(p => p.Id == id);

        if (existingPlane == null)
        {
            return NotFound();
        }

        existingPlane.Name = plane.Name;
        existingPlane.Year = plane.Year;
        existingPlane.Description = plane.Description;
        existingPlane.RangeInKm = plane.RangeInKm;

        return NoContent();
    }
    // * Suggested by Copilot
    ```

>[!Note]
>The reason GitHub Copilot suggests the `[HttpPut]` method is because it understand that the `PlanesController.cs` class is a REST API controller and that the `[HttpPut]` is currently missing. The `[HttpPut]` method is the next logical step in the REST API for updating a resource.

- Let's do it again, place your cursor at the end of the file, after the `}` of the `Put` method, press `Enter`.

- GitHub Copilot will automatically suggest the `[HttpDelete]` method. - Accept the suggestion by pressing `Tab` to accept this attribute.

- Copilot will now automically suggest the code for this method, press `Enter` to accept.

    ```csharp
    // * Suggested by Copilot
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var plane = Planes.Find(p => p.Id == id);

        if (plane == null)
        {
            return NotFound();
        }

        Planes.Remove(plane);

        return NoContent();
    }
    // * Suggested by Copilot
    ```

### Step 4: Test Flight Accelerate - Comments to Code

- Open `WrightBrothersApi` folder located in the `WrightBrothersApi` folder.

- Open the `PlanesController.cs` file located in the `Controllers` folder.

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

- Press `Enter` and GitHub Copilot will automatically suggest the `[HttpGet("search")]` method.

- Accept the suggestion by pressing `Tab` to accept this attribute.

- Copilot will now automically suggest the code for this method, press `Enter` to accept.

    ```csharp
    // Search planes by name
    // * Suggested by Copilot
    [HttpGet("search")]
    public ActionResult<List<Plane>> SearchByName([FromQuery] string name)
    {
        var planes = Planes.FindAll(p => p.Name.Contains(name));

        if (planes == null)
        {
            return NotFound();
        }

        return Ok(planes);
    }
    // * Suggested by Copilot
    ```

>[!Note]
>The reason GitHub Copilot suggests the `[HttpGet("search")]` method is because it understands that the comment is a description of the method. It also understands that the method is a GET method and that it has a parameter `name` of type `string`.


## Optional Labs

### ... Play Around Step to freely play with the Labs

### Step 5: Testing your flying style - Logging - Consistency

Let's present a code completion task for adding a logger with specific syntax (e.g., `_logger`). Use this to explain how Copilot adapts to and replicates your coding style.

- Open `WrightBrothersApi` folder located in the `WrightBrothersApi` folder.

- Open the `PlanesController.cs` file located in the `Controllers` folder.

- Go to the `GetAll` method and inspect the method. Notice the syntax of `✈✈✈ NO PARAMS ✈✈✈`. This is a custom syntax that is used in this codebase to log parameters of a method. 

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


- Go to the `GetById` method and let's add a logging statement with the same syntax.

- Type `_log` and notice the suggestion that GitHub Copilot gives:

    ```csharp
    public class PlanesController : ControllerBase
    {
        /* Rest of the methods */

        [HttpGet("{id}")]
        public ActionResult<Plane> GetById(int id)
        {
            _log <---- Place your cursor here

            // Method body
        }
    }
    ```

- Accept the suggestion by pressing `Tab` to accept this attribute.

- GitHub Copilot will automatically suggest the `LogInformation` method with the custom syntax.

    ```csharp
    [HttpGet("{id}")]
    public ActionResult<Plane> GetById(int id)
    {
        _logger.LogInformation($"GET ✈✈✈ {id} ✈✈✈");

        // Method body
    }
    ```

>[!Note] 
> Copilot learns from the codebase and adapts to the coding style. In this case, it replicates the custom syntax used for logging. This example demonstrates it for logging in particular, but the same applies to other coding styles used in the codebase.

- Now repeat the same steps for the other methods in the `PlanesController.cs` class.

    ```csharp
    [HttpPost]
    public ActionResult<Plane> Post(Plane plane)
    {
        _logger.LogInformation($"POST ✈✈✈ {plane.Id} ✈✈✈");

        // Method body
    }

- If you have finished step 3, you can then add the logging for the Put and Delete methods as well.

- Go to the `Put` method and let's add a logging statement with the same syntax.

    ```csharp
    [HttpPut("{id}")]
    public IActionResult Put(int id, Plane plane)
    {
        _log <---- Place your cursor here

        // Method body
    }
    ```

- Accept the suggestion by pressing `Tab` to accept this attribute.

- GitHub Copilot will automatically suggest the `LogInformation` method with the custom syntax.

    ```csharp
    [HttpPut("{id}")]
    public IActionResult Put(int id, Plane plane)
    {
        _logger.LogInformation($"PUT ✈✈✈ {id} ✈✈✈");

        // Method body
    }
    ```

- Go to the `Delete` method and let's add a logging statement with the same syntax.

    ```csharp
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _log <---- Place your cursor here

        // Method body
    }
    ```

- Accept the suggestion by pressing `Tab` to accept this attribute.

- GitHub Copilot will automatically suggest the `LogInformation` method with the custom syntax.

    ```csharp
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _logger.LogInformation($"DELETE ✈✈✈ {id} ✈✈✈");

        // Method body
    }
    ```

### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;
