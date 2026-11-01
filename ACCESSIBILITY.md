# Accessibility Report

## 1. Overview

Accessibility testing was performed on the design system using Storybook and the `@storybook/addon-a11y` addon.

The goal was to improve usability, readability, and keyboard accessibility while following WCAG 2.1 Level AA guidelines.

## 2. Automated Accessibility Testing

All design system components were checked using the Storybook Accessibility panel in both light and dark themes.

Components tested:
- Button
- Input
- Card
- Text
- Heading
- Badge
- Alert
- Checkbox
- Radio
- Form
- Modal
- Switch
- Tabs

### Contrast Improvements

Some color contrast violations were identified during testing.

The following semantic color tokens were adjusted to improve text readability:

- Light theme: Updated success, warning, error, and info colors to darker shades.
- Dark theme: Updated error and info colors to lighter shades.
- Button danger: Updated the danger action color to a darker red.

These changes improved contrast between foreground text and component backgrounds to meet the WCAG AA minimum contrast ratio of 4.5:1 for normal text.

## 3. Keyboard Accessibility Testing

The following interactive components were manually tested:

### Modal
- Tested keyboard focus management.
- Tested closing the modal using Escape.
- Tested focus behavior when opening and closing the modal.

### Tabs
- Tested navigation using the left and right arrow keys.
- Verified keyboard navigation between tabs.
- Tested Home and End navigation.

### Switch
- Tested keyboard focus using Tab.
- Verified toggling using the Space key.

All tested keyboard interactions worked as expected.

## 4. Theme Accessibility

A Storybook toolbar was implemented to allow switching between light and dark themes.

Both themes can be selected and tested directly in Storybook.

## 5. Conclusion

Accessibility improvements were made to the design system through automated testing, color contrast adjustments, and manual keyboard testing.

The components were reviewed in both light and dark themes to improve accessibility and provide a more consistent user experience.
