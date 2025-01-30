# ModalReportPost

A modal component that allows users to report a post by selecting a reason from predefined options.

## Props

- `isOpen` (boolean): Controls the visibility of the modal
- `onClose` (function): Callback function called when the modal is closed
- `onSubmit` (function): Callback function called when a report reason is submitted. Receives the selected reason as an argument.

## Usage

```jsx
import ModalReportPost from "./components/ModalReportPost/ModalReportPost";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (reason) => {
    console.log("Report submitted with reason:", reason);
  };

  return (
    <ModalReportPost
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
    />
  );
}
```

## Report Reasons

The modal provides three report options:

1. Off topic - For posts that don't belong in the community
2. Against community guidelines - For posts that violate community rules
3. Not allowed on Tumblr - For posts that violate Tumblr's policies
