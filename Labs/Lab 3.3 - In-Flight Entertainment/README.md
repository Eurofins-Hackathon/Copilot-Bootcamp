Running and Interacting with the Application

# Lab 3.3 - In-Flight Entertainment ✈ Creating Interactive Components
This lab exercise is focused on integrating styled buttons and forms to enhance user interactions, with emphasis on design consistency and functional integration. The lab aims to improve skills in component creation, event handling, and API interactions in a React environment, utilizing GitHub Copilot for code generation.

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

## Objectives
- Enhance user interactions through the integration of styled buttons and forms.
- Improve skills in UI component creation.
- Develop proficiency in event handling and API interactions.

### Interactive Components

### Step 1 - Push to Start - Create a Styled Button 

- Open GitHub Copilot Chat, click **+** to clear prompt history.

- Type the following in the chat window:

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

- In the Copilot Chat quick action, click the **Insert at Cursor** button to add the component to the `AddPlaneButton.tsx` file in the `src/components` folder

- Open `/src/components/pages/HomePage.tsx` and add the `AddPlaneButton` component below the `Banner` component inside the `PageContent` component

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

- Open the terminal and navigate to the `WrightBrothersFrontend/` directory.

    ```bash
    cd WrightBrothersFrontend/
    ```

- Run the frontend and backend with the following command. This command will start the frontend and backend at the same time.

    ```bash
    npm run frontend-and-backend
    ```

- Navigate to `http://localhost:5173/` to see the new button based on the `PlaneList.tsx` component

    <img src="../../Images/AddPlaneButton.png" width="800">

- The button should be styled and have a plus icon and a hover effect.

- Now, Click the button to navigate to the new plane page.

### Step 2 - Form

- In this step, we will create a form for adding a new plane.

~~~ - Navigate to `http://localhost:5173/new-plane` to see an empty page. We are going to add a form to this page.~~~

- Start by opening `NewPlane.tsx` in the `WrightBrothersFrontend/src/pages` folder

- Open GitHub Copilot Chat, click **+** to clear prompt history.

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

- For the first `#file`, select `PlaneList.tsx`. This is a hint to match the style of the form to the existing `<PlaneList />` component.

- For the second `#file`, select `Plane.ts`. This is a hint to create fields based on the `Plane.ts` model.

>[!NOTE]
> The result is not always complete or does not always work. Retry the prompt if the result is rejected

- This will create a complete form based on the `Plane.ts` model.

    <Br>
    <details>
    <summary>Click here to see the suggestion ...</summary>

      ```tsx
      import React from 'react';
      import { Formik, Field, Form, ErrorMessage } from 'formik';
      import * as Yup from 'yup';
      import axios from 'axios';
      import PageContent from "../components/PageContent";

      const PlaneSchema = Yup.object().shape({
        id: Yup.number().required('Required'),
        name: Yup.string().required('Required'),
      });

      const NewPlane = () => {
        const handleSubmit = (values, { setSubmitting }) => {
          axios.post('http://localhost:1903/planes', values)
            .then(response => {
              console.log(response);
              setSubmitting(false);
            })
            .catch(error => {
              console.log(error);
              setSubmitting(false);
            });
        };

        return (
          <PageContent>
            <h1>New Plane</h1>
            <Formik
              initialValues={{ id: '', name: '' }}
              validationSchema={PlaneSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
                    <Field type="number" name="id" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <ErrorMessage name="id" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Field type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </PageContent>
        );
      };

      export default NewPlane;

      ```

    </details>
    <Br>

- Select all the code in the open file `NewPlane.tsx` and replace it with the suggested code.

- In the Copilot Chat window, click the **Insert at Cursor** button to insert the code into the `NewPlane.tsx` file.

- Open the browser and navigate to `http://localhost:5173/new-plane`

- You should see a form with fields for adding a new plane. The form should be styled and have validation

- Fill in the form and click the submit button.

- Go to the home page `http://localhost:5173/` to see the new plane added to the list.

## Optional (Work in Progress - Unstable)

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

