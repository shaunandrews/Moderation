import styles from './CommunityHomeMember.module.css';
import Post from '../Post/Post'
import Layout from '../Layout/Layout'

const mockPosts = [
  {
    username: 'sir-whiskers-iii',
    avatar: 'https://assets.tumblr.com/images/default_avatar/sphere_open_64.png',
    timestamp: '2m',
    content: (
      <div>
        <p>meow meow meow meow meow meow meow meow meow</p>
        <p>*knocks over water glass*</p>
        <p>mrrrrrrrrrrrow</p>
      </div>
    )
  },
  {
    username: 'princess-pawdrey-hepburn',
    avatar: 'https://assets.tumblr.com/images/default_avatar/cube_open_64.png',
    timestamp: '15m',
    content: (
      <div>
        <p>mew.... mew.... MEOW!!!</p>
        <p>*sleeping in sunbeam*</p>
      </div>
    )
  },
  {
    username: 'meowzart',
    avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_64.png',
    timestamp: '45m',
    content: (
      <div>
        <p>meow? meow meow! meow...</p>
        <p>MEOW MEOW MEOW MEOW MEOW</p>
        <p>mrrrrp?</p>
      </div>
    )
  },
  {
    username: 'lord-pawington',
    avatar: 'https://assets.tumblr.com/images/default_avatar/octahedron_open_64.png',
    timestamp: '2h',
    content: (
      <div>
        <p>mrow?</p>
        <p>meow meow meow meow</p>
        <p>*stares at empty food bowl*</p>
        <p>MEOW! MEOW! MEOW!</p>
      </div>
    )
  },
  {
    username: 'captain-whiskertons',
    avatar: 'https://assets.tumblr.com/images/default_avatar/sphere_closed_64.png',
    timestamp: '3h',
    content: (
      <div>
        <p>meow meow meow</p>
        <p>*sits in amazon box*</p>
        <p>prrrrrrrrrrrrrrrrr</p>
      </div>
    )
  },
  {
    username: 'duchess-floofington',
    avatar: 'https://assets.tumblr.com/images/default_avatar/cube_closed_64.png',
    timestamp: '4h',
    content: (
      <div>
        <p>mew mew mew</p>
        <p>*runs through house at 3am*</p>
        <p>MEOW MEOW MEOWWWWW!</p>
        <p>*crashes into wall*</p>
        <p>...meow</p>
      </div>
    )
  }
];

export default function CommunityHomeMember() {
  return (
    <Layout 
      className={styles.content}
      title="Meowing"
      description="A community for cats"
      role="member"
      username="shaunandrews"
      bannerImage="/images/banner-meowing.jpg"
    >
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
  );
} 