# Contributing Guidelines

## Contribution Rules

1. Follow the existing project structure and naming conventions.
2. Use design tokens instead of hardcoded colors, fonts, spacing, or other design values.
3. Build reusable and accessible components.
4. Use props to manage component variants and sizes.
5. Test components and provide Storybook stories for their different states.

## Adding a Design Token

1. Open the appropriate file inside src/styles/.
2. Add the new token to the relevant token category.
3. Use semantic tokens to connect the token to the theme.
4. Reference the token using var(--token-name) in component styles.
5. Avoid hardcoding design values directly in component CSS.

## Adding a Component

1. Create a component folder inside src/components/.
2. Create the component JSX file and its CSS Module.
3. Use existing design tokens for all styling.
4. Implement variants and sizes through component props.
5. Ensure accessibility and responsive behavior.
6. Add a Storybook story covering the component's different states.
7. Write unit tests for important component behavior.

## Testing

Run all unit tests using:
npx vitest run --project unit

All tests should pass before submitting changes.

## Pull Requests

- Provide a clear description of the changes.
- Include before-and-after screenshots when applicable.
- Include the Storybook link.
- Confirm that all tests pass before requesting review.