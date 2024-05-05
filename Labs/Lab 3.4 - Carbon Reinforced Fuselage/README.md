Creating Interactive Components

# Lab 3.4 - Carbon Reinforced Fuselage ✈ Hardening the frontend
This lab exercise guides participants through coding exercises using GitHub Copilot to understand its suggestions and capabilities. It involves TBD

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](./Labs/Lab%201.1%20-%20Pre-Flight%20Checklist)

## Estimated time to complete
- 20 minutes, times may vary with optional labs.

## Objectives
- TBD
  - Step 1: Eslint configuration and fix lint issues.
  - Step 2: Upgrade to Business Class - Update Package Dependencies.
  - Step 3: PlayWright UI Test project using **/new** command.

### Step 1: Eslint configuration and fix lint issues

// TODO install eslint plugin to VSCode

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

- Go to the first lint issue and press `Ctrl + .` and select `Fix using Copilot`

// TODO Screenshot of the fix using Copilot

- GitHub Copilot will now open a Inline Chat window with the suggested fix

- Repeat for the other lint issues. You can also try `Explain using Copilot`

### Step 2: Upgrade to Business Class - Update Package Dependencies

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

## Optional

### Step 4: ... TBD

### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;