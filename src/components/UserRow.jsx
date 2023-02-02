function UserRow({username, age}) {
    return (
        <div className="bg-gray-100">
            <p>{username} ({age} years old)</p>
        </div>
    )
}

export default UserRow