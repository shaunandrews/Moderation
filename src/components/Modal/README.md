# Modal Component

A reusable modal component that provides a consistent layout and behavior for modal dialogs across the application.

## Usage

```jsx
import Modal from "./Modal";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Modal Title"
      footer={
        <>
          <Button type="text" label="Cancel" onClick={() => setIsOpen(false)} />
          <Button type="primary" label="Confirm" onClick={handleConfirm} />
        </>
      }
    >
      <div>Modal content goes here</div>
    </Modal>
  );
}
```

## Props

- `isOpen` (boolean): Controls the visibility of the modal
- `onClose` (function): Callback function called when the modal is closed
- `title` (string): The title displayed in the modal header
- `children` (node): The content to be displayed in the modal body
- `footer` (node): Optional footer content, typically containing action buttons
- `showCloseButton` (boolean): Whether to show the close button in the header (default: true)

## Styling

This component uses CSS modules for styling. The styles are defined in `Modal.module.css` and follow the project's color and typography guidelines from `/src/colors.css` and `/src/typography.css`.

## Animation

The modal uses react-spring for smooth enter/exit animations with a slide-up effect.
