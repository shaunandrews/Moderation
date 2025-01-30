# ModQueueReview Component

A component that displays a review item in the moderation queue, showing reported content, reasons for reporting, and helpful contextual information.

## Props

| Prop              | Type        | Default                                                | Description                                                       |
| ----------------- | ----------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| `reviewId`        | `number`    | Required                                               | Unique identifier for the review                                  |
| `onDismissed`     | `function`  | Required                                               | Callback function called when the review is dismissed             |
| `reportCount`     | `number`    | `3`                                                    | Number of reports for this content                                |
| `reportedPost`    | `ReactNode` | Default post                                           | The Post component instance to display                            |
| `reportedReasons` | `string[]`  | `['Against community guidelines', 'Harmful behavior']` | Array of reasons why the content was reported                     |
| `helpfulInfo`     | `string[]`  | Default info array                                     | Array of HTML strings containing helpful context about the report |

## Example Usage

```jsx
<ModQueueReview
  reviewId={1}
  onDismissed={() => handleDismiss(1)}
  reportCount={3}
  reportedPost={<Post />}
  reportedReasons={["Against community guidelines", "Spam"]}
  helpfulInfo={[
    "<strong>@authorblog</strong> has had 3 posts removed",
    "<strong>@moderator</strong>: Investigating this user",
  ]}
/>
```

## Features

- Displays reported content with context
- Shows number of reports with reporter avatars
- Lists reported reasons as tags
- Shows helpful contextual information
- Provides actions:
  - View all reports
  - Add private note
  - View post history
  - View member history
  - Dismiss reports
  - Moderate content
- Animates out when dismissed
