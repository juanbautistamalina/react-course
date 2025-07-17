import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
  {
    userName: "juanbautistamalina",
    name: "Juan Bautista Malina",
    isFollowing: true,
    website: "github"
  },
  {
    userName: "midudev",
    name: "Miuguel Ángel Durán",
    isFollowing: true,
    website: "github"
  },
  {
    userName: "martingarrix",
    name: "Martin Garrix",
    isFollowing: true,
    website: "x"
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: false,
    website: "x"
  },
]

export default function App() {

  return (
    <div className="App">
      {users.map((user) => {
        const { userName, name, isFollowing, website } = user
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            website={website}>
            {name}
          </TwitterFollowCard>
        )
      })}
    </div>
  )
}

