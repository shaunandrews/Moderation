# Post Component

A versatile component that displays a post with header, content, and footer sections. It supports both full and preview modes.

## Props

| Prop             | Type      | Default                                                                | Description                                          |
| ---------------- | --------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| `initialPreview` | boolean   | `false`                                                                | Whether to initially render the post in preview mode |
| `avatar`         | string    | `'https://assets.tumblr.com/images/default_avatar/cube_closed_64.png'` | URL of the user's avatar image                       |
| `username`       | string    | `'anonymous-user'`                                                     | Username of the post author                          |
| `timestamp`      | string    | `'just now'`                                                           | When the post was created/published                  |
| `contentImage`   | string    | `undefined`                                                            | Optional URL for the post's image content            |
| `content`        | ReactNode | `<p>This is a placeholder...</p>`                                      | The main content of the post                         |

## Features

- Supports preview mode with expand/collapse functionality
- Integrates with RoleContext from Layout component
- Composed of three main sections:
  - PostHeader: Displays user info and metadata
  - PostContent: Renders the main post content
  - PostFooter: Shows interaction buttons and stats

## Usage

```jsx
import Post from './Post';

// Basic usage
<Post
  username="johndoe"
  timestamp="2 hours ago"
  content={<p>Hello world!</p>}
/>

// With preview mode and image
<Post
  initialPreview={true}
  username="janedoe"
  contentImage="https://example.com/image.jpg"
  content={<p>Check out this photo!</p>}
/>
```
