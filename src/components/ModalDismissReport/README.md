# ModalDismissReport Component

A modal component used for dismissing reports in the moderation queue. This component provides a form interface for moderators to enter a reason when dismissing a report.

## Usage

```jsx
import ModalDismissReport from "./ModalDismissReport";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalDismissReport
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onDismiss={(reason) => {
        // Handle the dismissal with the provided reason
      }}
    />
  );
}
```

## Props

- `isOpen` (boolean): Controls the visibility of the modal
- `onClose` (function): Callback function called when the modal is closed
- `onDismiss` (function): Callback function called when a report is dismissed, receives the dismissal reason as an argument

## Styling

This component uses CSS modules for styling. The styles are defined in `ModalDismissReport.module.css` and follow the project's color and typography guidelines from `/src/colors.css` and `/src/typography.css`.
