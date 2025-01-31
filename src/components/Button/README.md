# Button Component

A versatile and customizable button component that supports multiple variants, icons, labels, and facepile images.

## Features

- Multiple button types (primary, secondary, danger, text, icon, outline)
- Support for icons (emoji or custom elements)
- Optional count display
- Facepile image support (up to 3 images)
- Accessible with aria-label support
- Disabled state handling
- Forward ref support

## Usage

```jsx
import Button from './Button';

// Primary button with label
<Button
  type="primary"
  label="Click me"
  onClick={() => {}}
/>

// Secondary button with icon and label
<Button
  type="secondary"
  label="Settings"
  icon={<SettingsIcon />}
/>

// Danger button
<Button
  type="danger"
  label="Delete"
/>

// Text button
<Button
  type="text"
  label="Learn more"
/>

// Icon button with emoji
<Button
  type="icon"
  icon="👋"
  aria-label="Wave hello"
/>

// Outline button with count
<Button
  type="outline"
  label="Followers"
  count={42}
/>

// Button with facepile
<Button
  label="Team members"
  facepileImages={[
    'user1.jpg',
    'user2.jpg',
    'user3.jpg'
  ]}
/>

// Disabled button
<Button
  label="Submit"
  disabled={true}
/>
```

## Props

| Prop             | Type                                                                    | Default     | Description                                                 |
| ---------------- | ----------------------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| `type`           | `'primary' \| 'secondary' \| 'danger' \| 'text' \| 'icon' \| 'outline'` | `'primary'` | The visual style variant of the button                      |
| `label`          | `string`                                                                | -           | The text label of the button                                |
| `icon`           | `element \| string`                                                     | -           | An icon element or emoji string to display before the label |
| `onClick`        | `function`                                                              | -           | Click handler function                                      |
| `disabled`       | `boolean`                                                               | `false`     | Whether the button is disabled                              |
| `aria-label`     | `string`                                                                | -           | Accessibility label for the button                          |
| `count`          | `number`                                                                | -           | Optional number to display alongside the label              |
| `facepileImages` | `string[]`                                                              | `[]`        | Array of image URLs to display in a facepile (max 3)        |

## Styling

The button component uses CSS modules for styling and respects the following design tokens:

- Font: Uses `--font-family-base`
- Font sizes: `--font-size-sm`, `--font-size-small`
- Font weights: `--font-weight-medium`, `--font-weight-normal`, `--font-weight-bold`
- Colors: Uses various color tokens for different button types (primary, secondary, danger, etc.)
- Transitions: Smooth hover and interaction states

## Accessibility

- Supports `aria-label` for icon-only buttons
- Maintains proper contrast ratios for all button types
- Visible focus states
- Proper disabled state handling
