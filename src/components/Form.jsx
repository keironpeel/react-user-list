import { useState } from "react"

function Form({onSubmit}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeAge = (e) => {
        setAge(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(name, age)
        setName("")
        setAge("")
    }

    return(
        <form className="flex flex-col gap-4 w-60" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="font-medium">Username</label>
                <input type="text" value={name} onChange={changeName} className="border border-gray-400 p-1" />
            </div>
            <div className="flex flex-col">
                <label className="font-medium">Age (Years)</label>
                <input type="number" value={age} onChange={changeAge} className="border border-gray-400 p-1" />
            </div>
            <div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4">Add User</button>
            </div>
        </form>
    )
}

export default Form