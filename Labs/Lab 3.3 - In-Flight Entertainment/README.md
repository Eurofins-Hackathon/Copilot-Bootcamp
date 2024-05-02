Running and Interacting with the Application

# Lab 3.3 - In-Flight Entertainment ✈ Creating Interactive Components
This lab exercise guides participants through coding exercises using GitHub Copilot to understand its suggestions and capabilities. It involves running and adding unit tests, with an emphasis on pair programming. The lab is structured in steps, starting with executing existing unit tests, followed by enhancing test coverage, and addressing specific functionalities like case sensitivity and trimming in search methods.

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

## Objectives
- TBD

### Interactive Components

### Step 1 - Push to Start - Create a Styled Button 

- Open GitHub Copilot Chat

- Type the following in the chat window:

- In the same chat window or new chat, copy the following:

```
Create a button component and route the button to the "/new-plane" page

## Design

- Create a button that is in the same style as #file:PlaneList.tsx
- Button text is "Add Plane"
- Add a plus icon left of the text
- Spacing on the top and bottom of the button
- Elevate the button when hovered

## Technical Requirements

- Create a new button component
- use "@heroicons/react/24/solid" for the plus icon
```

>[!NOTE]
> Note the `#file:PlaneList.tsx` reference. This is a hint to match the style of the button to the existing  `<PlaneList />` component. 

- Make sure to select the `#file:PlaneList.tsx` reference again in the prompt. it does not work with copy/pasting the prompt.

// TODO Screenshot

- Press `Enter` to submit the question

- This will create the following component:

```tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/solid';

const AddPlaneButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-plane');
  };

  return (
    <button 
      onClick={handleClick} 
      className="flex items-center justify-center gap-2 px-4 py-2 mt-4 mb-4 text-amber-900 bg-amber-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer"
    >
      <PlusIcon className="w-5 h-5" />
      Add Plane
    </button>
  );
};

export default AddPlaneButton;
```

>[!IMPORTANT]
> Sometimes it suggest `@heroicons/react/solid` without the size. Make sure to add the size `24` to the import, change the import to `@heroicons/react/24/solid`

- Use the Copilot Chat quick action add the component to a new file `AddPlaneButton.tsx` in the `src/components` folder

- Open `HomePage.tsx` and add the `AddPlaneButton` component below the `Banner` component inside the `PageContent` component

```tsx
function HomePage() {
  
  /* Existing code */

  return (
    <div>
      <Banner />
      <PageContent>
        <AddPlaneButton /> <--- Add this line
        ... rest of the code
      </PageContent>
    </div>
  );
}
```

- Navigate to `http://localhost:5173/` to see the new button based on the `PlaneList.tsx` component

// TODO Screenshot with button added

- The button should be styled and have a plus icon and a hover effect

- Now, Click the button to navigate to the new plane page


### Step 2 - Form

- In this step, we will create a form for adding a new plane

- Open the terminal and navigate to the `WrightBrothersFrontend/` directory.

    ```bash
    cd WrightBrothersFrontend/
    ```

- Run the frontend and backend with the following command

    ```bash
    npm run frontend-and-backend
    ```

- Navigate to `http://localhost:5173/new-plane` to see an empty page. We are going to add a form to this page.

- Start by opening `NewPlane.tsx` in the `WrightBrothersFrontend/src/pages` folder

- Open GitHub Copilot Chat

- Type the following in the chat window:

    ```
    Create a Form inside the page at #editor and POST to http://localhost:1903/planes

    ## Design

    - Apply tailwind classes to match the design of #file:PlaneList.tsx

    ## Technical Requirements

    - Create fields based on file #file:Plane.ts
    - Formik for form handling
    - Yup for validations

    Give me a complete solution.
    ```

>[!NOTE]
> The result is not always complete or does not always work. Retry the prompt if the result is rejected

- This will create a complete form based on the `Plane.ts` model.

```tsx
// TODO Code
```

- Replace the content of `NewPlane.tsx` with the suggested code.

- Open the browser and navigate to `http://localhost:5173/new-plane`

- You should see a form with fields for adding a new plane. The form should be styled and have validation

- Fill in the form and click the submit button.

- Go to the home page `http://localhost:5173/` to see the new plane added to the list.

## Optional

### Step 3 - Animation

- Advanced animation

- What do you think? Too complex?

```
I want you to create an React animation of an airplane doing manouvers. Implement the following function: `export const animateManeuvers = (airplaneRef: MutableRefObject<null>, maneuvers: string)`.

## AerobaticSequence Examples

    - L4B-H2C-R3A-S1D-T2E
    - L1A-H1B-R1C-T1E
    - L2A-H2B-R2C

## Maneuver

    - Manouvers: L = Loop, H = Hammerhead, R = Roll, S = Spin, T = Tailslide
    - Number represents repeat count
    - The Letter represents difficulty (A-E)

## Animation

- The manouvers should follow up eachother and not go at the same time
- Use the UTF8 icon of an airplane for the airplane
- Difficulty translates into an increased duration of the animation
- The Looping is a 360 full circle using a gsap motion path
- The Hammerhead should be a 180 degree turn on the vertical axis and go right at the same time
- The Roll should be going up and down and a 360 degree roll on the horizontal axis at the same time
- The Spin should be a 360 degree turn on the vertical axis
- The Tailslide should 180 degree turn and the plane going backwards at the same time
- During the animation the airplane is moving forward constantly

## Technical Requirements

- Use GSAP library for the animations
- Use a gsap timeline.to for the animations
- Use GSAP Motion for the Looping

Give me the complete solution
```

- The result will be a complete animation of an airplane doing manouvers

