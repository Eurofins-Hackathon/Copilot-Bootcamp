Connecting to the WrightBrothersAPI

# Lab 3.2 - Onboard WiFi ✈ Connecting to the WrightBrothersAPI
This lab exercise guides participants through coding exercises using GitHub Copilot to understand its suggestions and capabilities. It involves running and adding unit tests, with an emphasis on pair programming. The lab is structured in steps, starting with executing existing unit tests, followed by enhancing test coverage, and addressing specific functionalities like case sensitivity and trimming in search methods.

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

## Objectives
- TBD

### Step 1: Simple backend integration

- Dotnet run

```
#selection Get this list of planes from api endpoint http://localhost:1903/planes/ using axios
```

### Step 2: Advanced backend integration with Open API

- Open GitHub Copilot Chat

- Type the following in the chat window:

- In the same chat window or new chat, type the following:

    ```
    How do I generate a typescript http client based on a swagger endpoint running on http://localhost:1903/swagger/v1/swagger.jso`. Create the client in the src/api folder.

    Think step by step.
    ```

- @randy this does not always give consistent output ... Skip this lap?


## Optional

### Step 3: Loading State

- Make sure you did step 1

- Open GitHub Copilot Chat

- Type the following in the chat window:

- In the same chat window or new chat, type the following:

    ```
    Manage error and loading states of #selection component with react-query
    
    ## Design
    - Banner should always be visible
    - Loading state should show #file:Spinner.tsx and should be centered below the banner
    - Error should show a styled error message.

    ## Technical details
    - Add a delay of 3 seconds to the request
    ```

- For `#selection` select all the content of `HomePage.tsx`

- For `#file:Spinner.tsx` make sure to select the file `Spinner.tsx` from the `src/components` folder

// TODO Screenshot of #selection and #file:Spinner.tsx

- Copilot 