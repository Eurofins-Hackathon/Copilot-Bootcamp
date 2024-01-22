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

- Demo the unit test project

- `dotnet test`

#### Lab 3.2 Pre-takeoff Pilot Checks - Completing Unit Tests

1. Open `PlaneController.cs` for Context expansion

1. Open `PlaneControllerTests.cs`

1. Complete existing controller method tests

1. Run `dotnet test` to verify tests pass

### Optional

#### Lab 3.3 Taking Off - Developing Robust Tests

- Developing Robust Tests. Focus on creating comprehensive unit tests for the searchByName function. Incorporate a [Theory] attribute and explore multiple test cases.
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