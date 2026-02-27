import React, {useContext} from 'react'
import { UserContext } from '../App'
const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
      Hello
      {user.fname}
    </div>
  )
}

export default ChildC
