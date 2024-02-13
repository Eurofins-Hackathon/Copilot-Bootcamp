# Cruising towards the destination: Advanced Features of GitHub Copilot 
This lab guides you through creating an `AirfieldController` in the Wright Brothers API project. The controller will manage a list of airfields with Create, Read, Update, and Delete (CRUD) operations.

#### History of Airfields used by the Wright Brothers
The Wright Brothers, Orville and Wilbur Wright, conducted their aviation experiments at a few key locations.
These locations were central to the development and testing of the Wright Brothers' aircraft designs.
Each site played a crucial role in the evolution of their flying machines, from the early gliders to the first practical powered airplanes.

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 to 45 minutes, varying with optional labs.

## Objectives
- Create an `AirfieldController` with CRUD operations
- Add test data for the first three airfields used by the Wright Brothers

### Step 1 - Navigating Through Prairie Skies – Applying Prompt Engineering

- Open the `WrightBrothersApi` project in Visual Studio Code.

- Open the `Models/Airfields.cs` file.

- Open the Copilot Chat extension window.

- Ask the following question in GitHub Copilot chat window:

    ```
    @workspace Using the Airfield class, create the ApiController with all the CRUD operations and add test data for the first 3 airfields used by the Wright Brothers.
    ```

> [!Note]
> Using @workspace with the question will make Github Copilot use more context to generate a more accurate suggestion. GitHub Copilot is very good at understanding the context of the class and knows the history of `Airfields` used by the Wright Brothers.

    ```csharp
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using WrightBrothersApi.Models;

    namespace WrightBrothersApi.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class AirfieldController : ControllerBase
        {
            private static List<Airfield> airfields = new List<Airfield>
            {
                new Airfield("Huffman Prairie", "Dayton, Ohio", "1904-1905", "First practical airplane flights"),
                new Airfield("Simms Station", "Dayton, Ohio", "1904-1905", "First circular flight"),
                new Airfield("Kill Devil Hills", "North Carolina", "1900-1903", "First powered flight")
            };

            [HttpGet]
            public IEnumerable<Airfield> Get()
            {
                return airfields;
            }

            [HttpGet("{id}")]
            public Airfield Get(int id)
            {
                return airfields[id];
            }

            [HttpPost]
            public void Post([FromBody] Airfield airfield)
            {
                airfields.Add(airfield);
            }

            [HttpPut("{id}")]
            public void Put(int id, [FromBody] Airfield airfield)
            {
                airfields[id] = airfield;
            }

            [HttpDelete("{id}")]
            public void Delete(int id)
            {
                airfields.RemoveAt(id);
            }
        }
    }
    ```

- In the Copilot Chat extension window, click the ellipses `...` and select `Insert into new file` for the suggested `AirfieldController`.

- Copilot will add the code to a new empty file, but must be saved.
- Save the file by clicking pressing `Ctrl + S` or `Cmd + S`.
- Change directory to the `Controllers` folder`.
- Enter the file name `AirfieldController.cs` and click `Save`.

Copilot is not only context aware, knows you need a list of items and knows the `Air Fields` used by the Wright Brothers, the `Huffman Prairie`, which is the first one used by the Wright Brothers.

### Step 2 - Ascending to the Clouds: Testing the AirfieldController

Now that you have created the `AirfieldController` with CRUD operations, it's time to ensure that it's working as expected. In this step, you will write unit tests for the `AirfieldController`.

- Create a new file in the `Tests` directory named `AirfieldControllerTests.cs`.

- In this file, create a new test class `AirfieldControllerTests`.

- Write tests for each of the CRUD operations in the `AirfieldController`. Make sure to test both the happy path scenarios and edge cases. For example, what happens when you try to get an airfield with an ID that doesn't exist?

- Run the tests using the test runner in Visual Studio Code.

Remember, good tests not only check that your code is working right now, but they also help ensure that it continues to work in the future as you make changes to your codebase.

> [!Note]
> GitHub Copilot can assist you in writing these tests. Simply ask it in the chat window, for example:
> ```
> @copilot how do I write a unit test for the `Get` method in `AirfieldController`?
> ```

This step will help you understand the importance of testing in software development and how GitHub Copilot can assist you in writing tests.
