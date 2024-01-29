# Safe Landing: Review and Future of AI in Coding 
This lab exercise covers ...

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Recap of the day's learning, emphasizing the blend of AI assistance with human skills.
- Discussion on the future of AI in programming and its evolving role in software development.


#### This one does not need to pipeline from AutoPilot Mode, but it is a nice to have.

// Performance of the system is not good enough, we need to optimize it.
#### Lab 5.0 - The aircraft alarm lights are blinking - Prepare code example



o	Work on feature development and commit updates.
o	Create a new feature branch from main.
o	Implement modifications in the GitHub Action created previously.
o	Use Copilot to generate a summarized commit message, symbolizing an update from the captain.
o	Push the changes to the repository.


- Configure HealthChecks package in your application

```sh
cd WrightBrothersApi/
dotnet add package Microsoft.Extensions.Diagnostics.HealthChecks 
```

- Open `Program.cs`

- Add HealthChecks through the `builder` method

```csharp
// Add the following health check
using Microsoft.Extensions.Diagnostics.HealthChecks;

var builder = WebApplication.CreateBuilder(args);

// Add the following health check
builder.Services.AddHealthChecks()
    .AddCheck("CruisingAltitudeCheck", () =>
    {
        bool atCruisingAltitude = CheckSystemPerformance(); 

        if (atCruisingAltitude)

        {
            return HealthCheckResult.Healthy("The application is cruising smoothly at optimal altitude.");
        }
        else
        {
            bool minorIssue = CheckIfMinorIssue();

            return minorIssue ?
                HealthCheckResult.Degraded("The application is experiencing turbulence but remains stable.") :
                HealthCheckResult.Unhealthy("The application is facing a system failure and needs immediate attention.");
        }

        bool CheckSystemPerformance()
        {
            // Simulate a check to determine if the application is "at cruising altitude"
            // For the sake of this example, we'll just return a random value
            Random random = new Random();
            int randomNumber = random.Next(1, 100);

            return randomNumber > 10;
        }

        bool CheckIfMinorIssue()
        {
            // Simulate a check to determine if the application is "at cruising altitude"
            // For the sake of this example, we'll just return a random value
            Random random = new Random();
            int randomNumber = random.Next(1, 100);

            return randomNumber > 50;
        }
    });
```

- Add the following code below the `var app = builder.Build();` line

```csharp
// Rest of the Program.cs file

var app = builder.Build();

// Add the following code to map the health checks to an endpoint
app.MapHealthChecks("/health");
```

- Run the application and navigate to the `/health` endpoint to see the health check results

```sh
dotnet run
```

- Open a browser and navigate to `http://localhost:1903/health`

- You should see the response `Healthy`, `Degraded` or `Unhealthy`

#### Lab 5.1 - This is your Captain Speaking, we're experiencing turbulence -  Committing Code Changes

> [!Note]
> You must complete the previous lab before continuing with this one

- Create a new feature branch `feature/health-checks` from main in your terminal

```sh
git checkout -b feature/health-checks
```

- Open the Source Control tab in VS Code

TODO: [Screenshot]

- Click the `+` icon to stage all changes

TODO: [Screenshot]

- Click on the magic icon to generate a commit message

TODO: [Screenshot]

- Click the `✓` icon to commit the changes

TODO: [Screenshot]

- Click the `Sync` button icon to push the changes

TODO: [Screenshot]

#### Lab 5.2 - Fasten your seatbelts - Automating GitHub Pull Requests

> [!Note]
> You must complete the previous lab before continuing with this one

o	Manage pull requests with enhanced summaries.
o	Create a pull request (PR) from the new feature branch create earlier.
o	Employ Copilot to generate detailed PR descriptions.
o	Observe the deployment pipeline in action.
o	Commit and push additional changes, then use Copilot to update the PR details.


- Go to your GitHub.com repository

- Click on the `Pull requests` tab

TODO: [Screenshot]

- Click on the `New pull request` button

TODO: [Screenshot]

- Select the `main` branch as the base branch

TODO: [Screenshot]

- Select the `feature/health-checks` branch as the compare branch

- Click the `Create pull request` button

TODO: [Screenshot]

- Click on the magic icon to generate a pull request description

>![!Note]
> The commit message is very genenic and does not provide much information. Best practice when using Git is to make your commit messages as detailed as possible.

#### Lab 5.3 - Changing Altitude to mitigate turbulence - Adjust Pull Request

> [!Note]
> You must complete the previous lab before continuing with this one

- Change HealthCheck code to be more stable

```csharp
// Add the following health check
builder.Services.AddHealthChecks()
    .AddCheck("CruisingAltitudeCheck", () =>
    {
        // Rest of the code

        bool CheckSystemPerformance()
        {

            // Rest of the code

            return randomNumber > 50; <----- Change this to 10
        }

        // Rest of the code
    });
```

//TODO Or forward to previous labs

- Open the Source Control tab in VS Code

TODO: [Screenshot]

- Click the `+` icon to stage all changes

TODO: [Screenshot]

- Click on the magic icon to generate a commit message

>![!Note]
> The commit message is now very detailed, due to the small changes in the code. Best practice when using Git is to make keep your commits small and concise.

TODO: [Screenshot]

- Click the `✓` icon to commit the changes

TODO: [Screenshot]

- Click the `Sync` button icon to push the changes

TODO: [Screenshot]

- Go to your GitHub.com repository

- Click on the `Pull requests` tab

TODO: [Screenshot]

- Click on the `feature/health-checks` pull request

TODO: [Screenshot]

- Click on the magic icon to update the pull request description

TODO: [Screenshot]

### Optional

#### Lab 5.4 - Any other GitHub.com feature ??

#### Lab 5.4 - DocSet??




### Congratulations you've made it to the end! &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;