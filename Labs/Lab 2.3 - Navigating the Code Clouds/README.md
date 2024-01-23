# Navigating the Code Clouds: Advanced Features of GitHub Copilot 
This lab exercise covers ...

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Exploring advanced features and capabilities of GitHub Copilot.
- Participants tackle more complex coding exercises with Copilot, focusing on AI's role in problem-solving and code optimization.

### Required

#### Lab 4.1 - The Complete Wright Brothers Fleet

o	Enhance the Plane model by adding a new property.
o	Use Copilot Chat to autocomplete the list of Wright Brothers' planes and incorporate the new property into the model.
	Wright Flyer, Wright Flyer II, Wright Flyer III, and Model A-L.


#### Lab 4.2 - Flight Logbook - Logging Your Coding Journey

o	Document the entire PlanesController.cs file.
o	Select the PlanesController.cs code and use Copilot Chat to generate comprehensive documentation. Utilize commands like @workspace or @docs for assistance.

#### Lab 4.3 - Flying in Formation - Pair Programming with Copilot

o	Manage complex code with a high complexity rating.
o	Start by creating a complex method (TBD) rated at a complexity level of 10.
o	Cover this method with unit tests to ensure its fully tested. (Use Copilot for this?, because it also adds the benefit of fast covering something with unit tests, before refactoring it)
o	Use Copilot to refactor the code, focusing on simplifying it according to SOLID principles or other best practices.
	Refactoring Code for Optimization. Using Copilot to refactor existing code. This can show how AI can aid in optimizing and improving code efficiency and performance.

### Optional

#### Lab 4.4 - Regex Aerobatics Show - Regex Code Completion

o	Create intricate regex patterns for parsing specific string formats.
o	Modify the PlanesController Post method to use regex for parsing a String property into a C# Model.
o	Work with two example string formats (p.s. both are fictional formats):
	FlightLogSignature: Encodes flight details such as date, departure, arrival, and flight number (e.g., "310322-LAX-JFK-FR789").
•	public string FlightLogSignature { get; set; }
o	Prepare a Model.cs file for regex parsing (prepare in advance).
o	Engage with Copilot Chat, using the provided string examples and the target model structure, to craft the regex pattern.
o	Consider creating unit tests to validate the regex functionality.


#### Lab 4.5 - Regex Aerobatics Show - Second Regex

	AerobaticSequence (Optional, more complex): Encodes a series of aerobatic maneuvers (e.g., "L4B-H2C-R3A-S1D-T2E").
•	L = Loop, H = Hammerhead, R = Roll, S = Spin, T = Tailslide
•	Number represents repeat count, Letter represents difficulty (A-E), and each has a unique ID
•	public string AerobaticSequence { get; set; }


### Congratulations you've made it to the end! &#x1F389;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;
