# ModalReports Component

A modal component that displays a list of reports for a post. It shows reporter information, report reasons, and any additional comments provided by reporters.

## Usage

```jsx
import ModalReports from "../ModalReports/ModalReports";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const reports = [
    {
      reporterName: "@username",
      reporterAvatar: "path/to/avatar.jpg",
      timestamp: "2h ago",
      reason: "Against community guidelines",
      comment: "This post contains inappropriate content",
    },
  ];

  return (
    <ModalReports
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      reports={reports}
    />
  );
}
```

## Props

- `isOpen` (boolean): Controls the visibility of the modal
- `onClose` (function): Callback function called when the modal is closed
- `reports` (array): Array of report objects containing:
  - `reporterName` (string): Username of the reporter
  - `reporterAvatar` (string, optional): URL to reporter's avatar image
  - `timestamp` (string): When the report was made
  - `reason` (string): The reason for the report
  - `comment` (string, optional): Additional comment from the reporter
