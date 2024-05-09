# Lab 3.2 - Onboard WiFi ✈ Connecting to the WrightBrothersAPI
This lab exercise is a focused session that instructs participants on integrating a frontend application with a backend API using GitHub Copilot. The lab covers the basics of fetching data from an API, managing state with React-Query, and effectively handling loading and error states. Participants will learn to use GitHub Copilot to generate and implement code snippets, enhancing their understanding of API integration in a React application.

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

> [!IMPORTANT]
> Ensure error-free results by meticulously following each step of the lab instructions.

## Objectives
- Integrate a frontend application with a backend API.
- Learn the basics of fetching data from an API and managing state.
- Enhance understanding of API integration in a React application.

    ### Journey
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

## Optional

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
    - Show a PlaneSpinner component inside the page content when loading or error state

    ## Technical details
    - Add a delay of 3 seconds to the request to see the loading state
    - Throw an Error after the delay to see the error state

    ## References
    - #file:PlaneSpinner.tsx
    ```

- For `#selection` select all the content of `HomePage.tsx`

- For `#file:PlaneSpinner.tsx`, re-select the file, because copy/pasting the file path does not work.

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
    import PlaneSpinner from "../components/PlaneSpinner";

    const fetchPlanes = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Add delay of 3 seconds
        throw new Error('Error fetching planes');
        const response = await axios.get('http://localhost:1903/planes/');
        return response.data;
    };

    function HomePage() {
    const { isLoading, isSuccess, isError, data: planes } = useQuery('planes', fetchPlanes);

    return (
        <div>
            <Banner />
            <PageContent>
                {isLoading || isError ? (
                <PlaneSpinner isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
                ) : (
                <PlaneList planes={planes} />
                )}
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

- Run the frontend and backend with the following command

    ```bash
    npm run frontend-and-backend
    ```

- Navigate to the home page `http://localhost:5173/`

- After 3 seconds of loading you should see the airplane exploding, because an error is thrown on purpose, to see the error state of `react-query`.

> [!TIP]
> With GitHub Copilot Chat you can create these funny animations, like an airplane spinning for a loading state, or an airplane exploding for error state. If you have a crazy idea, just ask GitHub Copilot to help you with that. In this case I asked Copilot for a plane crashing animation. At first the airplane only fell from the sky. Then I asked Copilot to make the airplane explode, which was the cause of the crashing airplane. I was then missing debree, so I asked Copilot to add debree to the airplane explosion. This animation was me having a lot of fun with GitHub Copilot :) - Thijs Limmen

- Now, let's remove the `throw new Error('Error fetching planes');` line from the `fetchPlanes` function in `HomePage.tsx`

- Open the terminal and navigate to the `WrightBrothersFrontend/` directory.

    ```bash
    cd WrightBrothersFrontend/
    ```

- Run the frontend and backend again with the following command

    ```bash
    npm run frontend-and-backend
    ```

- Navigate to the home page `http://localhost:5173/`

> [!IMPORTANT]
> Make sure to refresh the page when you see the error state, because the error state might be cached by `react-query`.

- After 3 seconds you should see the list of planes from the API that was fetched through the `react-query` hook.

- Now stop the Frontend and API by pressing `Ctrl + C` in the terminal.

### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;