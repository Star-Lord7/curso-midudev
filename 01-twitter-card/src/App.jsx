import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel',
    isFollowing: true
  },
  {
    userName: 'nasa',
    name: 'nasa',
    isFollowing: false
  },
  {
    userName: 'esa',
    name: 'esa',
    isFollowing: true
  },
  {
    userName: 'Nasa_es',
    name: 'nasa_es',
    isFollowing: false
  }
]

export function App(){
    return(
        <>
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
        </>
    )
}