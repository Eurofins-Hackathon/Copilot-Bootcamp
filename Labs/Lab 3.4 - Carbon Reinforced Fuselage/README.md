# Lab 3.4 - Carbon Reinforced Fuselage ✈ Hardening the frontend
This lab focuses on configuring eslint to identify and fix lint issues, updating package dependencies, and optionally creating a Playwright UI Test project. 

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

> [!IMPORTANT]
> Ensure error-free results by meticulously following each step of the lab instructions.

## Objectives
- TBD
  - Step 1: Eslint configuration and fix lint issues.
  - Step 2: Upgrade to Business Class - Update Package Dependencies.
  - Step 3: PlayWright UI Test project using **/new** command.

### Step 1: Eslint configuration and fix lint issues

- In this lab, we will configure eslint and fix lint issues in the WrightBrothersFrontend project. eslint is a tool that helps you find and fix problems in your JavaScript code. It is similar to Roslyn Analyzer in the .NET.

- Start with running `npm run lint` to see the current lint issues

- No lint issues should be present

- Open `.eslintrc.cjs` and notice the lint rules are the recommended rules from eslint and react. We want to add more lint rules to harden the project.

- Open GitHub Copilot Chat

- Type the following in the chat window:

    ```
    What linting rules can I add to #selection to harden my project more and tell me why for each? Only give me rules that are not already part of the recommended rules.
    ```

- For `#selection`, select all the content of the `.eslintrc.cjs` file

- Press `Enter` to submit the question

- GitHub Copilot suggested the following rules:

```js
module.exports = {
  // existing configuration...
  rules: {
    // existing rules...
    "no-console": "error",
    "eqeqeq": "error",
    "curly": "error",
    "no-eval": "error",
    "no-unused-vars": "error",
  },
};
```

>[!NOTE]
> Note that GitHub Copilot now suggested rules and also provided a reason to why implement a specific rule. This is a great way to learn more about the rules and why they are important.

- Run `npm run lint` to scan for lint issues with the new rules

- You should now see lint issues related to the new rules

```bash
/Copilot-Bootcamp/WrightBrothersFrontend/src/pages/PlaneDetail.tsx
  77:16  error  Expected '===' and instead saw '=='  eqeqeq
  87:5   error  Expected { after 'if' condition      curly

/Copilot-Bootcamp/WrightBrothersFrontend/src/services/PlaneService.ts
  12:5  error  Unexpected console statement  no-console
```

- Ask Copilot to fix the lint issues

- Go to the lint issues in `WrightBrothersFrontend/src/pages/PlaneDetail.tsx`.

- Find the following code snippet that contains the `eqeqeq` lint issue:

```tsx
  if (!planeDetails)
    return <div>Plane not found</div>;
```

- Go to the first lint issue and press `Ctrl + .` and select `Fix using Copilot`

  <img src="../../Images/Screenshot-FixUsingCopilot.png" width="500">

- GitHub Copilot will now open a Inline Chat window with the suggested fix

- Repeat for the other lint issues. You can also try `Explain using Copilot` to understand why the rule is important.

### Step 2: Navigating the Touch Screen - Visual Component Testing

- In this lab, we will create visual component tests for the PlaneList component in the WrightBrothersFrontend project. Visual component testing is a new way of testing the interaction and appearance of components in isolation.

- For these tests we are using Playwright, a tool for automating browsers. Playwright is similar to Selenium but with a more modern API and better performance.

- Let's first run the existing tests in the project. Run `npm run test-ct` (component test) to see the existing tests pass.

  ```sh
  cd WrightBrothersFrontend/
  npm run test-ct
  ```

- You should see that all tests pass

  ```sh
  Running 2 tests using 2 workers
    2 passed (4.8s)
  ```

- Open the `PlaneList.tsx` file in the `src/components` folder. This component is a list of planes that are displayed in the `HomePage.tsx` page.

- We are going to add tests to the already existing `PlaneList.spec.tsx` file in the `src/components` folder.

- Open GitHub Copilot Chat

- Type the following in the chat window:

    ```
    Create remaining tests for #selection based on test file #file:PlaneList.spec.tsx.
    ```
  
- GitHub Copilot will suggest additional tests to test all the functionality of the `PlaneList` component.

  ```tsx
  test('renders without crashing', async ({ mount }) => {
    await mount<HooksConfig>(<PlaneList />, {
      hooksConfig: { routing: true },
    });
  });

  test('renders correct number of planes', async ({ page, mount }) => {
    const planes = [
      { id: 1, name: "Wright Flyer" },
      { id: 2, name: "Wright Model A" },
      { id: 3, name: "Wright Model B" },
    ];

    await mount<HooksConfig>(<PlaneList planes={planes} />, {
      hooksConfig: { routing: true },
    });

    const liElements = await page.locator('li');
    expect(await liElements.count()).toBe(planes.length);
  });

  test('displays correct plane names', async ({ page, mount }) => {
    const planes = [
      { id: 1, name: "Wright Flyer" },
      { id: 2, name: "Wright Model A" },
      { id: 3, name: "Wright Model B" },
    ];

    await mount<HooksConfig>(<PlaneList planes={planes} />, {
      hooksConfig: { routing: true },
    });

    for (let i = 0; i < planes.length; i++) {
      const h3Element = await page.locator('li h3').nth(i);
      expect(await h3Element.textContent()).toBe(planes[i].name);
    }
  });

  test('adds "flying" class to image when plane is clicked', async ({ page, mount }) => {
    const planes = [
      { id: 1, name: "Wright Flyer" },
    ];

    await mount<HooksConfig>(<PlaneList planes={planes} />, {
      hooksConfig: { routing: true },
    });

    const liElement = page.locator('li').nth(0);
    await liElement.click();

    const imgElement = liElement.locator('img');
    expect(imgElement).toHaveClass('flying');
  });
  ```

- Add the suggested tests to the `PlaneList.spec.tsx` file

- The created tests do not always compile. GitHub Copilot got you 95% of the way there, but you may need to make some adjustments to the code to make it work. You can also ask Copilot for help with this. Try `Fix using Copilot` or `Explain using Copilot` to get help with the code.

- Now run the tests again but then with the UI open

  ```sh
  npm run test-ct:open
  ```

- You should see the tests in the PlayWright UI. You can press the play button in the UI to run the tests.

- Not all tests will pass. You can now debug the tests in the PlayWright UI and fine-tune the tests to make them pass.

## Optional

### Step 3: PlayWright UI Test project using **/new** command

- In this lab, we will create a new Playwright UI Test project using the **/new** command in GitHub Copilot. 

- First, Make sure that the Frontend is running. This is because the Playwright UI Test project will interact with the Frontend.

  ```sh
  cd WrightBrothersFrontend/
  npm run frontend
  ```

- Now, open GitHub Copilot Chat

- Type the following in the chat window:

  ```md
  @workspace /new Playwright UI Tests

  ## Test

  1. Navigate to "/new-plane"
  2. Fill out the form with attribute "name": id, name, year, description, rangeInKm

  ## Technical Requirements

  - Headless is False
  - localhost:5173 is the base URL
  - Typescript
  - Include package.json
  - Use @playwright/test library

  Make a complete solution.
  ```

- Press `Enter` to submit the question

- GitHub Copilot will now scaffold a new Playwright UI Test project

  <img src="../../Images/Screenshot-PlaywrightUITestProject.png" width="500">

- Press `Create Workspace` to create the new Playwright UI Test project.

- Select the `WrightBrothersFrontend/` folder to create the new project.

- GitHub Copilot will now open the new project in a new window.

- Open the terminal in the new project and run install

  ```sh
  npm install
  ```

- Now, run the tests

  ```sh
  npm run test
  ```

- You should see the tests pass

  ```
  Running 1 test using 1 worker
    ✓ 1. should navigate to /new-plane and fill out the form (1.5s)
  ```

- GitHub Copilot just created a new Playwright UI Test project for you with successful tests. You can now use this project to create more tests for the WrightBrothersFrontend project.

### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;