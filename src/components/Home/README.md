# Home Component

The Home component is the main landing page for regular users. It displays a feed of posts in a clean, organized layout.

## Usage

```jsx
import Home from "./components/Home/Home";

function App() {
  return <Home />;
}
```

## Features

- Displays a feed of posts
- Uses the Layout component for consistent page structure
- Responsive design with centered content
- Shows post content including images, text, and metadata

## Props

The component doesn't accept any props directly, but uses the Layout component internally with the following configuration:

- title: Community title
- description: Community description
- username: Current user's username
- bannerImage: Path to the community banner image
