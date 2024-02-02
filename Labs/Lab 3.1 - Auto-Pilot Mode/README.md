# Auto-Pilot Mode: GitHub Copilot
This lab exercise covers ...

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Recap of the day's learning, emphasizing the blend of AI assistance with human skills.
- Discussion on the future of AI in programming and its evolving role in software development.

#### This one does not need to pipeline from AutoPilot Mode, but it is a nice to have.

### Lab 5.0 - The aircraft alarm lights are blinking - Prepare code example

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

### Lab 5.1 - Fasten your seatbelts, turbulance incoming - Committing Code Changes

> [!Note]
> You must complete the previous lab before continuing with this one

- Create a new feature branch `feature/health-checks` from main in your terminal

```sh
git checkout -b feature/health-checks
```

- Open the Source Control tab in VS Code

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click the `+` icon to stage all changes

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click on the magic icon to generate a commit message

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

> [!Note]
> The commit message is very genenic and does not provide much information. Best practice when using Git is to make keep your commits small and concise.

- Click the `✓` icon to commit the changes

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click the `Sync` button icon to push the changes

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

### Lab 5.2 - Turn on Autopilot Mode - Automating GitHub Pull Requests

> [!Note]
> You must complete the previous lab before continuing with this one

> [!Note]
> Pull Requests in GitHub.com is not yet supported for everyone. The trainer can show this.

- Go to your `GitHub.com` repository

- Click on the `Pull requests` tab

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click on the `New pull request` button

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Select the `main` branch as the base branch

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Select the `feature/health-checks` branch as the compare branch

- Click the `Create pull request` button

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click on the magic icon to generate a pull request description

### Lab 5.3 - Changing Altitude to mitigate turbulence - Adjust Pull Request

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

- Open the Source Control tab in VS Code

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click the `+` icon to stage all changes

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click on the magic icon to generate a commit message

>![!Note]
> The commit message is now very detailed, due to the small changes in the code. Best practice when using Git is to make keep your commits small and concise.

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click the `✓` icon to commit the changes

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click the `Sync` button icon to push the changes

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Go to your GitHub.com repository

- Click on the `Pull requests` tab

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click on the `feature/health-checks` pull request

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

- Click on the magic icon to update the pull request description
- Or is it automatically updated???

TODO: [Screenshot]
![Image of TBD](/Images/placeholder-Small.png)

### Optional

### Lab 5.4 - Smooth Flying in the Cloud - Automating GitHub Pipelines

- Open the GitHub Copilot Chat extension

- Type the following command

```
@workspace create a build pipeline for the application
```

- GitHub Copilot Chat will suggest creating a GitHub Pipeline for the application. It also includes a build step and a test step.

- Note the list of `Used References` in the chat suggestion

[Screenshot] TODO:
![Image of TBD](/Images/placeholder-Small.png)

> [!Note]
> With the @workspace agent, GitHub Copilot understand that the current workspace is a .NET application with a Test project in it.

### Lab 5.5 - Ground Control - Something in the Cloud  - Deploying to Azure

- Pre-requisite is a valid `deploy.yaml`

- Continue the conversation with deploying it to Azure

```
How about deploying it to Azure?
```

- GitHub Copilot Chat will suggest adding a deploy step to the pipeline, which is a Azure Web App deployment.

- Continue the conversation with hosting a Web App in Azure

```
How about hosting a Web App in Azure?
```

- It will give step by step instructions to create a Web App in Azure

- Contintue the conversation with creating a Web App through Infrastructure as Code

```
How about creating a Web App through Infrastructure as Code, using Bicep.
```

- You can go on and on brainstorming with GitHub Copilot Chat to create a full CI/CD pipeline for your application.

### Lab 5.6 Infrastructure as Code

- Let's ask Copilot to build the resources in Azure using Bicep.

- Open the GitHub Copilot Chat extension

Type the following command

```sh
- @workspace Create all the required Infrastructure as Code files using Bicep to deploy application to Azure.
```



### Lab 5.4 - Any other GitHub.com feature ??
- TBD?
- GitHub Enterprise Features?
    - PR Summaries?

### Lab 5.4 - DocSet?
## NOT IN SCOPE - Suggestions for the Trainer - Remove this section before publishing


### Congratulations you've made it to the end! &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;