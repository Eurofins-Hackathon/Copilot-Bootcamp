Connecting to the WrightBrothersAPI

# Lab 3.2 - Onboard WiFi ✈ Connecting to the WrightBrothersAPI
This lab exercise guides participants through coding exercises using GitHub Copilot to understand its suggestions and capabilities. It involves running and adding unit tests, with an emphasis on pair programming. The lab is structured in steps, starting with executing existing unit tests, followed by enhancing test coverage, and addressing specific functionalities like case sensitivity and trimming in search methods.

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

## Objectives
- TBD

### Step 1: What's the WiFi Password - Simple backend integration

- In this lab, we will connect the frontend to the WrightBrothersApi

- Start by opening `HomePage.tsx` in the `WrightBrothersFrontend/src/pages` folder

- Open GitHub Copilot Chat

    ```
    #selection Get this list of planes from api endpoint http://localhost:1903/planes/ using axios
    ```

- For `#selection` select all the content of `HomePage.tsx`

- Press `Enter` to submit the question

- GitHub Copilot suggested the following code:

    <details>
    <summary>Click here to see the suggestion ...</summary>

    ```tsx
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import Banner from "../components/Banner";
    import PlaneList from "../components/PlaneList";
    import PageContent from "../components/PageContent";

    function HomePage() {
    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1903/planes/')
        .then(response => {
            setPlanes(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, []);

    return (
        <div>
            <Banner />
            <PageContent>
                <PlaneList planes={planes} />
            </PageContent>
        </div>
    );
    }
    export default HomePage;
    ```
    </details>

- Replace the content of `HomePage.tsx` with the suggested code

- Open the terminal and navigate to the `WrightBrothersFrontend/` directory.

    ```bash
    cd WrightBrothersFrontend/
    ```

- Run the frontend and backend with the following command. This command will start the frontend and backend at the same time.

    ```bash
    npm run frontend-and-backend
    ```

- Navigate to the home page `http://localhost:5173/`

- You should now see a list of planes from the API, instead of the static list

### Step 2: Unstable Internet - State Management through React-Query

- Make sure you did the previous step, because that contains required code for this step

- In this lab, we will manage the error and loading states of the component using react-query

- Start by opening `HomePage.tsx` in the `WrightBrothersFrontend/src/pages` folder

- Open GitHub Copilot Chat

- Type the following in the chat window:

    ```
    Manage error and loading states of #selection component with react-query
    
    ## Design
    - Banner should always be visible
    - Loading state should show the Spinner component and should be centered below the banner
    - Error should show a styled error message.

    ## Technical details
    - Add a delay of 3 seconds to the request to see the loading state
    ```

- For `#selection` select all the content of `HomePage.tsx`

// TODO screenshot?

- Press `Enter` to submit the question

- GitHub Copilot suggested the following code:

//TODO Add Suggested code

- Replace the content of `HomePage.tsx` with the suggested code

- Open the terminal and navigate to the `WrightBrothersFrontend/` directory.

    ```bash
    cd WrightBrothersFrontend/
    ```

- Run the frontend and backend with the following command

    ```bash
    npm run frontend-and-backend
    ```

- Navigate to the home page `http://localhost:5173/`

- You should see a loading state with a spinning Airplane for 3 seconds before the planes are displayed

- Now stop the Frontend and API by pressing `Ctrl + C` in the terminal

- Run only frontend with the following command

    ```bash
    npm run frontend
    ```

- Navigate to the home page `http://localhost:5173/`

- After 3 seconds you should see an error message displayed, because the API is not running

## Optional (Work in Progress - Unstable)
 
### Step 3: Advanced backend integration with Open API

- Open GitHub Copilot Chat

- Type the following in the chat window:

- In the same chat window or new chat, type the following:

    ```
    How do I generate a typescript http client based on a swagger endpoint running on http://localhost:1903/swagger/v1/swagger.jso`. Create the client in the src/api folder.
    ```

- @randy this does not always give consistent output ... Skip this lap?