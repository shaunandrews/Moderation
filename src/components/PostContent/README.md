# PostContent Component

The main content section of a post that can display both text content and optional images.

## Props

| Prop           | Type      | Default                           | Description                               |
| -------------- | --------- | --------------------------------- | ----------------------------------------- |
| `contentImage` | string    | `null`                            | Optional URL for the post's image content |
| `content`      | ReactNode | `<p>This is a placeholder...</p>` | The main content of the post              |

## Features

- Supports both text and image content
- Flexible content rendering through ReactNode prop
- Responsive image container
- Separate styling for text and image sections

## Usage

```jsx
import PostContent from './PostContent';

// Text only content
<PostContent
  content={<p>This is a text-only post.</p>}
/>

// With image and text
<PostContent
  contentImage="https://example.com/image.jpg"
  content={
    <div>
      <p>Check out this amazing photo!</p>
      <p>More description here...</p>
    </div>
  }
/>
```
