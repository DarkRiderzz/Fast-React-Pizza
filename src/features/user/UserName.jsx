import { useSelector } from "react-redux"

function UserName() {
    // useSelector is used to get state
     const username = useSelector(state=>state.user.userName)
    
     if(!username) return null
    return (
        <div className="hidden text-sm font-semibold md:block">
            {username}
        </div>
    )
}

export default UserName
