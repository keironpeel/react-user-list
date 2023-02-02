import UserRow from "./UserRow"

function UserList({users}) {
    if (users.length > 0) {
        return (
            <div className="flex flex-col gap-2 w-60">
                { users.map(user=> <UserRow key={user.id} username={user.username} age={user.age} />) }
            </div>
        )
    }
    return (
        <div className="w-60">
            <p>No users listed.</p>
        </div>
    )
}

export default UserList