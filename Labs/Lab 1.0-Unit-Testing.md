With GitHub Copilot

Why -> Challenge -> Tasks -> Go do it 

•	Re-use stuff from the GDEX and the way they provide labs, can we do this at customers?
•	Give participants a challenge to achieve with GitHub Copilot, story
•	Hints
•	Call for the Expert (Step by Step Guide), /expert command


# Unit Testing - Covering a c# class with GitHub Copilot

## Displaying code coverage for the Api project

### Challenge
The development team is lacking insights into the code coverage of the project. They want to see the coverage in a more visual way, to understand which parts of the code are not being tested.

Currently the project does not gather coverage information.

- Challenge 1: Gather coverage reporting for a c# project
- Challenge 2: Display it in HTML format in the browser

### Approach Thijs (prompts)

- @workspace How do I get insights in Code Coverage in my net8 project?

- How do I now display this in html?

- How do I open this in the browser?


### Single prompt solution

```sh
@workspace Gather coverage reporting for a c# project and display it in HTML format and open it in the browser through a command.
```

## Get the Api to 90% Line Coverage

Looking at the code coverage the team noticed that the project is below the expected coverage. They want to increase the coverage to 90% line coverage.

### Challenge

- Challenge 1: Add missing tests to the `PlaneController` class

- Challenge 2: Generate a completely new test class for `FlightController` class


### Solution Challenge 1

- Generate test cases for the `Post` method in the `PlaneController` class

```sh
Implement all unit tests with edge cases for the Post method from #file:PlanesController.cs. Implement them inside #file:PlaneControllerTests.cs and apply the same coding style as the GetAll_ReturnsListOfPlanes method
```

- Generate test cases for the `GetById` method in the `PlaneController` class

```sh
Implement all unit tests with edge cases for the GetById method from #file:PlanesController.cs. Implement them inside #file:PlaneControllerTests.cs and apply the same coding style as the GetAll_ReturnsListOfPlanes method
```

- Re-run code coverage and check if `PlaneController` is now at 100% line coverage


### Solution Challenge 2


```sh
Generate a scaffold with a single implemented test for class #file:FlightController.cs. Use the same coding style as test class #file:PlaneController.cs
```

- Insert class as file to the solution project

- Prompt

```
List all tests including edge cases for #file:FlightsController.cs. Only give me the name of the Test Method
```

- Save output to a file


- Prompt

```
Implement all methods for `MethodName` into  `#file:MyClassTests.cs`
```

- Insert the methods into the test class

- Run Tests

- Repeat for all methods


### Hints

- GitHub Copilot can not generate all unit tests at once. You may need to do it in intermediately steps.

- GitHub Copilot might not generate the correct boilerplate code for your class. You must include the class into Copilot context

