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

### Step 2: DO NOT PRESS BUTTON - Visual Component Testing

- Open GitHub Copilot Chat

- Type the following in the chat window:

    ```
    How can I automatically update the package dependencies in a pipeline and create a pull request with the changes?
    ```

## Optional

### Step 3: PlayWright UI Test project using **/new** command

```
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

### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;