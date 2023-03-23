import * as D from '../data'
import {User} from '../components'

export default function UserContainer() {
  const chlidren = D.makeArray(10)
    .map(D.makeRandomUser)
    .map(user => (
      <User
        key={user.uuid}
        user={user}
        className="m-2 text-xs border-2 border-blue-300 rounded-lg"
        minWidth="15rem"
        width="15rem"
      />
    ))
  return (
    <section className="mt-4">
      <title>UsreContainer</title>
      <div className="flex flex-wrap items-center justify-center p-4 mt-4">
        {chlidren}
      </div>
    </section>
  )
}
