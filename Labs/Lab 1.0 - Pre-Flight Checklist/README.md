# Lab 1.1 Pre-Flight Checklist: Setting Up GitHub Copilot and your repository

Compare this to "Preparing Your Travel Itinerary, Checking Passport, Printing Boarding Pass". Just as travelers plan their journey, participants will set up their GitHub repository, planning their coding journey.

In this Hands-On Lab, you will learn how to navigate GitHub, create a new issue and obtain your own GitHub repo with the code for these hands-on labs. You will be working on your own repo in the following labs.

## Prerequisites
- The prerequisites steps are completed, see [Labs Prerequisites](https://github.com/XpiritBV/Copilot-Bootcamp#labs-prerequisites)

## Estimated time to complete
- 15 min

## Objectives
- Getting familiar with GitHub Codespace 
- Set up a Codespace for your repository with specific extensions and configurations. 

You can then use this codespace to work on the exercises in the next Labs. 🔨

## Steps

### Step 1: 💻 Create a codespace in your repository

First we are going to create a plain vanilla Codespace that you can use to get familiar. The base image that is used to create a Codespace.

Each Codespace you create is hosted by GitHub in a Docker container, running on a virtual machine. You can choose from a selection of virtual machine types, from 2 cores, 8 GB RAM, and 32 GB storage, up to 32 cores, 64 GB RAM, and 128 GB storage.

By default, Codespaces are created from an Ubuntu Linux image that includes a selection of popular languages and tools, but you can use an image based on a Linux distribution of your choice and configure it for your particular requirements.

- Navigate to your own repository on the URL https://github.com/Microsoft-Bootcamp/attendeec2c-[yourhandle].

- Locate the `Code` tab near the top menu. Next to Codespaces, click the "..." and choose "New with options".

TODO: [Screenshot]

- Keep the defaults, but change the machine type to "4-core" and click "Create Codespace".

Your Codespace is being created. After a few minutes, you will be able to see your Codespace in the browser.

### Step 2: 🔧 Install Extensions

Now that we have a Codespace, we need to make it our own and configure your Codespace to your needs.

- Go to the extensions tab on the left side and search the marketplace for GitHub Copilot. Install this extension.

- After installation, stay on the extensions page, and click the "cog" (:gear:) icon. Choose "Add to devcontainer.json".

TODO: [Screenshot]

- GitHub Copilot Chat
- GitHub Actions

### Step 3: ✅ Verify Extension Installation
Let's make sure that the extensions we added, are indeed added. When you add extensions to the configuration file, this is noted as Infrastructure as Code. To check this follow these steps.

In the files section of your Codespace, navigate to the `.devcontainer` folder and open the `devcontainer.json` file. Check under the "extensions" section to ensure that the extensions are added.

Add the IDs of extensions you want installed when the container is created.

```json
	"extensions": [
		"ms-dotnettools.csharp",
		"ms-vscode.powershell",
		"humao.rest-client",
		"GitHub.copilot",
		"GitHub.copilot-chat",
		"github.vscode-github-actions"
	]
```

#### Rest Client Extension

Mention the usage of Rest Client extensions. This is a very useful extension to quickly execute HTTP requests in your IDE and have all HTTP requests in source control.

You can find the http calls in the `WrightBrothersApi/Examples` folder:

- `Flights.http`
- `Planes.http`
- `Healthcheck.http`

Execute requests as follows:

// TODO Screenshot



### Step 4: ☁️ Install addtional tools and features

You cannot only add additional extensions, you can also add additional tools and features in the container itself. Because we are going to work with Azure, we want to install the Azure CLI as well. To do this follow these steps:

- Open the command bar by pressing CTRL+P. (You can also click the name of the Codespace in the left bottom corner to get the command bar)
- Type > in the command bar and choose Codespaces: Add dev container configuration files....
- Select Modify your existing configuration.
- Choose Azure CLI.
- Can you think of more features / tools?
-- 💡 Press CTRL+P and look for Add Dev container configuration files | Modify Active configuration and browse the available tools.

### Step 5: 💾 Save and Rebuild
After making the necessary changes to your dev container configuration, follow these final steps:

- Save the devcontainer.json file.
- Commit and sync the changes to your repository.
- Rebuild the container by opening the command bar and selecting Codespaces: Rebuild container.

By completing these steps, you have successfully set up your Codespace with the desired configuration, including the installation of the Azure CLI. Your Codespace is now ready for use, and the configuration will be applied to new Codespaces in the future.


### Step 6: Verify Functionality

- Verify Copilot functionality. Say Hello to Copilot in Copilot Chat extension
- Verify an autocompletion by typing code
- Startup the application with `dotnet run` and verify the application is running
- Call to API using the REST examples
- Run existing unit tests with `dotnet test`

### Congratulations you've made it to the end! &#9992;
#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;