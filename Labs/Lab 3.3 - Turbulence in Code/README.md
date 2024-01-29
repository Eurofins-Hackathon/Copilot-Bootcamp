# Turbulence in Code: Troubleshooting and Fine-Tuning
This lab exercise covers ...

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Understanding the limitations of GitHub Copilot and learning how to troubleshoot its suggestions.
- Group challenge to fix a set of buggy codes using Copilot, highlighting the importance of human oversight.

### Required

#### Lab 6.1 - Flight Crash Investigation - Fuel Depletion Scenario

o	Simulate a plane taking off with a method named [HttpPost] PlaneTakeOff.
o	Introduce a crash scenario due to fuel running out, resulting in a specific exception.
o	Utilize the Terminal Magic icon to diagnose and understand the exception. Explore other Copilot techniques for troubleshooting.


- Open `FlightController.cs` file

- Navigate to the `TakeFlight` method. Note that the method simulates a flight and throws an exception if the flight runs out of fuel.

```csharp
public class FlightsController : ControllerBase
{
    [HttpPost("{id}/takeFlight/{flightLength}")]
    public ActionResult takeFlight(int id, int flightLength)
    {
        var flight = Flights.Find(f => f.Id == id);

        for (int i = 0; i < flightLength; i++)
        {
            if (flight.FuelRange == 0)
            {
                throw new Exception("Plane crashed, due to lack of fuel");
            }
            else
            {
                var fuelConsumption = 1;
                
                if (flight.FuelTankLeak)
                {
                    fuelConsumption = 2;
                }

                flight.FuelRange -= fuelConsumption;
            }
        }

        return Ok($"Flight took off and flew {flightLength} kilometers/miles.");
    }
}
```

- Now go to `Flights.http` file and execute the `takeFlight` request.

```
POST http://localhost:1903/flights/1/takeFlight/75 HTTP/1.1
content-type: application/json
```

TODO [Screenshot] pointing to the POST request option in VSCode

> [!Note]
> You must have the `Rest Client` with identifier `humao.rest-client` extension installed in Visual Studio Code to execute the request. Rest Client is a very useful extension to quickly execute HTTP requests and commit them to Git.

TODO: Add Rest client extension to the devcontainer

- You will see that the flight is taking off and the response is `200 OK`.

> [!Note]
> The flight is taking off and the response is `200 OK`. The flight that is simulated did not run out of fuel.

- Now execute the request again, but now for flight `3`.

```
POST http://localhost:1903/flights/3/takeFlight/75 HTTP/1.1
content-type: application/json
```

- You will see that the flight is taking off and the response is `500 Internal Server Error`. The flight that is simulated ran out of fuel and crashed.

- Now, let's debug it with GitHub Copilot

- Navigate to the Terminal and right click the terminal. Select `Copilot: Explain this` from the context menu.

TODO Screenshot

- Copilot will explain the exception.

// TODO find out best way to debug this.



#### Lab 6.2 - Lightning Strikes, Unexpected Flight Crash - Engine Failure Simulation

o	Create a simulation of an engine failure in the application.
o	Handle the unexpected crash of the .NET application due to this simulated engine failure.
o	Use Copilot to debug and resolve the issue, restoring application functionality.

- Open `FlightController.cs` file

- Navigate to the `lightningStrike` method. Note that the method simulates a lightning strike and causes recursion.

```csharp
public class FlightsController : ControllerBase
{
    // Rest of the FlightsController.cs file

    [HttpPost("{id}/lightningStrike")]
    public ActionResult lightningStrike(int id)
    {
        // Lightning caused recursion on an inflight instrument
        lightningStrike(id);

        return Ok($"Recovers from lightning strike.");
    }
}
```

- Now go to `Flights.http` file and execute the `lightningStrike` request.

```
POST http://localhost:1903/flights/1/lightningStrike HTTP/1.1
content-type: application/json
```

- The application will crash.

- Now, let's debug it with GitHub Copilot

- Navigate to the Terminal and right click the terminal. Select `Copilot: Explain this` from the context menu.

// TODO best way to troubleshoot this




#### Lab 6.3 - Flight Plan Adjustments - Codebase Improvements

o	Engage in a chat with Copilot to discuss potential improvements in the codebase or selected sections of code.
o	Introduce a context file to instruct Copilot on what to do and not to do, possibly aligning with company guidelines.
o	Gradually apply Copilot's suggestions to the code. Consider using a .copilotignore file to refine Copilot's focus.
o	Keep code quality reference files open for guidance and comparison.

### Optional

#### Lab 6.4 - Aerodynamics of an Airplane - Performance Optimization

o	Start with poorly performing code that incorporates common bad practices.
o	Use Copilot to enhance the code's performance.
o	Optimize a specific piece of code to run significantly faster (e.g., reduce execution time from 10 seconds to 1 second).


#### Lab 6.5 - Mastering Copilot - 10,000 Flight Hours Principle


o	Discuss the 10,000 Flight Hours concept as it applies to mastering Copilot.
	Originally popularized by Malcolm Gladwell in his book "Outliers," posits that it takes roughly 10,000 hours of practice to achieve mastery in a field.
	When applying this concept to mastering GitHub Copilot or any advanced software tool, it suggests that becoming proficient with Copilot involves substantial practice and experience.
o	Provide pro tips, dos and don’ts, and best practices for using Copilot effectively.


### Congratulations you've made it to the end! &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;
