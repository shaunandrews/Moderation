# CommunityRole Component

A component that displays a user's role within a community, either as an admin or member.

## Usage

```jsx
import CommunityRole from '../CommunityRole/CommunityRole'

// For an admin
<CommunityRole role="admin" username="johndoe" />

// For a member
<CommunityRole role="member" username="janedoe" />

// Without username
<CommunityRole role="member" />
```

## Props

| Prop     | Type   | Default  | Description                                                         |
| -------- | ------ | -------- | ------------------------------------------------------------------- |
| role     | string | 'member' | The user's role in the community. Can be either 'admin' or 'member' |
| username | string | ''       | The user's username. If provided, will be displayed with @ prefix   |

## Styling

The component uses CSS modules and respects the following color variables:

- `--color-accent-orange`: Used for admin icon
- `--color-text-primary`: Used for role name
- `--color-text-secondary`: Used for username and member icon
