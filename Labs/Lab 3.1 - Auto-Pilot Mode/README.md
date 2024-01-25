# Auto-Pilot Mode: Automating Tasks with Copilot 
This lab exercise covers ...

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 30 min

## Objectives
- Demonstrating how GitHub Copilot can automate repetitive coding tasks.
- Hands-on activity where participants create scripts to automate simple tasks, guided by Copilot.

### Required

#### Lab 5.1 - Smooth Flying in the Cloud - Automating GitHub Pipelines

- Open the GitHub Copilot Chat extension

- Type the following command

```
@workspace create a build pipeline for the application
```

- GitHub Copilot Chat will suggest creating a GitHub Pipeline for the application. It also includes a build step and a test step.

- Note the list of `Used References` in the chat suggestion

[Screenshot] TODO:

> [!Note]
> With the @workspace agent, GitHub Copilot understand that the current workspace is a .NET application with a Test project in it.

#### Lab 5.2 - Ground Control ?? Something in the Cloud  - Deploying to Azure

- Pre-requisite is a valid deploy.yaml

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


### Optional

#### Lab 5.3 - Add a Code Quality or Whatever step to the existing pipeline

- CodeQL or SonarCloud or Roslyn Analyser

#### More Pipeline best practices



### Congratulations you've made it to the end! &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;
