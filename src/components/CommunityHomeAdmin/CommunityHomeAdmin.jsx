import styles from './CommunityHomeAdmin.module.css'
import Post from '../Post/Post'
import Layout from '../Layout/Layout'

const mockPosts = [
  {
    username: 'photography-lover',
    avatar: 'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
    timestamp: '2h',
    contentImage: 'https://64.media.tumblr.com/e46c7bd91a46671840be0a335600bb74/41aba1ddd5db6b07-48/s1280x1920/a23113327e04d3878a2abc5d484549c4e49d9795.jpg',
    content: (
      <p>Just captured this amazing sunset at the beach. The colors were absolutely incredible! 🌅 #photography #sunset #beach</p>
    )
  },
  {
    username: 'daily-quotes',
    avatar: 'https://assets.tumblr.com/images/default_avatar/cube_open_64.png',
    timestamp: '5h',
    content: (
      <p>"The only way to do great work is to love what you do." - Steve Jobs<br/><br/>Remember this as you start your week! ✨ #motivation #quotes</p>
    )
  },
  {
    username: 'tech-updates',
    avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_64.png',
    timestamp: '1d',
    contentImage: 'https://64.media.tumblr.com/c7338184d0bd94349785ff97b948984e/9ad9c7d9a469c0ee-d3/s1280x1920/a03b405b52d3205fdd2f5c5fac44cdc09bc492b6.pnj',
    content: (
      <div>
        <p>Breaking: Major updates coming to our favorite development tools! 🚀</p>
        <ul>
          <li>Improved performance</li>
          <li>New UI features</li>
          <li>Better debugging tools</li>
        </ul>
        <p>What feature are you most excited about? #coding #development #tech</p>
      </div>
    )
  }
];

export default function CommunityHomeAdmin() {
  return (
    <Layout className={styles.content}>
      {mockPosts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          avatar={post.avatar}
          timestamp={post.timestamp}
          contentImage={post.contentImage}
          content={post.content}
        />
      ))}
    </Layout>
  )
} 