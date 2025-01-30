# PostHeader Component

The header section of a post that displays user information, timestamp, and role-specific elements.

## Props

| Prop           | Type    | Default     | Description                                              |
| -------------- | ------- | ----------- | -------------------------------------------------------- |
| `avatar`       | string  | Required    | URL of the user's avatar image                           |
| `username`     | string  | Required    | Username of the post author                              |
| `timestamp`    | string  | Required    | When the post was created/published                      |
| `role`         | string  | `undefined` | User's role (passed from Post component via RoleContext) |
| `hideOverflow` | boolean | `false`     | Whether to hide overflow content in preview mode         |

## Features

- Displays user avatar
- Shows username and timestamp
- Handles role-specific UI elements
- Supports overflow hiding for preview mode

## Usage

```jsx
import PostHeader from './PostHeader';

<PostHeader
  avatar="https://example.com/avatar.jpg"
  username="johndoe"
  timestamp="2 hours ago"
  role="member"
/>

// With overflow hidden (preview mode)
<PostHeader
  hideOverflow={true}
  avatar="https://example.com/avatar.jpg"
  username="johndoe"
  timestamp="2 hours ago"
/>
```
