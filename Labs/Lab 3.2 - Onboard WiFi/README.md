Connecting to the WrightBrothersAPI

# Lab 3.2 - Onboard WiFi ✈ Connecting to the WrightBrothersAPI
This lab exercise is a focused session that instructs participants on integrating a frontend application with a backend API using GitHub Copilot. The lab covers the basics of fetching data from an API, managing state with React-Query, and effectively handling loading and error states. Participants will learn to use GitHub Copilot to generate and implement code snippets, enhancing their understanding of API integration in a React application.

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

## Objectives
- Integrate a frontend application with a backend API.
- Learn the basics of fetching data from an API and managing state.
- Enhance understanding of API integration in a React application.
    - Step 1: What's the WiFi Password - Simple backend integration
    - Step 2: Unstable Internet - State Management through React-Query.
    - Step 3: Advanced backend integration with Open API (Optional).

### Step 1: What's the WiFi Password - Simple backend integration

- In this lab, we will connect the frontend to the WrightBrothersApi

- Start by opening `HomePage.tsx` in the `WrightBrothersFrontend/src/pages` folder

- Open GitHub Copilot Chat, click **+** to clear prompt history.

- Type the following in the chat window:

    ```
    #selection Get this list of planes from api endpoint http://localhost:1903/planes/ using axios

    ```

- For `#selection` select all the content of `HomePage.tsx`

- Press `Enter` to submit the question

- GitHub Copilot suggested the following code:

    <Br>
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
    <Br>

- Replace the content of `HomePage.tsx` with the suggested code.

- In the Copilot Chat window, click the **Insert at Cursor** button to insert the code into the `HomePage.tsx` file.

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

- Make sure you did the previous step, because that contains required code for this step.

- In this lab, we will manage the error and loading states of the component using react-query.

- Start by opening `HomePage.tsx` in the `WrightBrothersFrontend/src/pages` folder

- Open GitHub Copilot Chat, click **+** to clear prompt history.

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

- Press `Enter` to submit the question.

- GitHub Copilot suggested the following code:

    <details>
    <summary>Click here to see the suggestion ...</summary>

    ```tsx
    import React from 'react';
    import axios from 'axios';
    import { useQuery } from 'react-query';
    import Banner from "../components/Banner";
    import PlaneList from "../components/PlaneList";
    import PageContent from "../components/PageContent";
    import Spinner from "../components/Spinner"; // Assuming you have a Spinner component

    async function fetchPlanes() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Add a delay of 3 seconds
    const response = await axios.get('http://localhost:1903/planes/');
    return response.data;
    }

    function HomePage() {
    const { isLoading, isError, data: planes } = useQuery('planes', fetchPlanes);

    if (isLoading) {
        return (
        <div>
            <Banner />
            <Spinner /> {/* Show Spinner when loading */}
        </div>
        );
    }

    if (isError) {
        return (
        <div>
            <Banner />
            <p>There was an error loading the planes.</p> {/* Show error message when there is an error */}
        </div>
        );
    }

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
    <Br>

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

- You should see a loading state with a spinning Airplane for 3 seconds before the planes are displayed.

- Now stop the Frontend and API by pressing `Ctrl + C` in the terminal

- Run only frontend with the following command

    ```bash
    npm run frontend
    ```

- Navigate to the home page `http://localhost:5173/`

- After 3 seconds you should see an error message displayed, because the API is not running.

- Now stop the Frontend and API by pressing `Ctrl + C` in the terminal.

### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;

## Optional (Work in Progress - Unstable)
 
### Step 3: Advanced backend integration with Open API

- Open GitHub Copilot Chat

- Type the following in the chat window:

- In the same chat window or new chat, type the following:

    ```
    How do I generate a typescript http client based on a swagger endpoint running on http://localhost:1903/swagger/v1/swagger.jso`. Create the client in the src/api folder.
    ```

- @randy this does not always give consistent output ... Skip this lap?