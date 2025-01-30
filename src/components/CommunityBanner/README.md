# CommunityBanner

A component that displays the community banner with title, description, and additional metadata.

## Props

- `size` (string, optional): The size of the banner. Can be 'full' (default) or 'mini'.
- `title` (string, optional): The title of the community. Defaults to "Design't".
- `description` (string, optional): The description of the community. Defaults to "tumblr designrs".

## Usage

```jsx
import CommunityBanner from './components/CommunityBanner/CommunityBanner';

// Default usage
<CommunityBanner />

// With custom title and description
<CommunityBanner 
  title="Design't" 
  description="tumblr designers" 
/>

// Mini version
<CommunityBanner 
  size="mini"
  title="Design't" 
  description="tumblr designers" 
/>
```

## Features

- Displays community title and description
- Shows online member count
- Displays community visibility status
- Provides quick actions (Invite, Menu)
- Supports full and mini sizes
- Shows admin badge and username when applicable 