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

### Step 1 - Button

- Start by opening `HomePage.tsx`

- Open GitHub Copilot Chat

- Type the following in the chat window:

- In the same chat window or new chat, type the following:

```
Create a button component and route the button to the add new plane page

## Design

- Create a button that is in the same style as #file:PlaneList.tsx
- Button text is "Add Plane"
- Add a plus icon left of the text
- Spacing on the top and bottom of the button
- Elevate the button when hovered

## Technical Requirements

- Create a new button component
- use @heroicons/react/24/solid for the plus icon
```

- This will create a complete button component


### Step 2 - Form

- Start by opening `NewPlane.tsx` 

- Navigate to `http://localhost:5173/new-plane` to see an empty page

- Open GitHub Copilot Chat

- Type the following in the chat window:

    ```
    Create a Form inside the page at #editor

    ## Design

    - Apply tailwind classes to match the design of #file:PlaneList.tsx

    ## Technical Requirements

    - Create fields based on file #file:Plane.ts
    - Formik for form handling
    - Yup for validations
    ```

>[!NOTE]
> The result does not always work. Retry the prompt if the result is rejected

- This will create a complete form based on the `Plane.ts` model.

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

