function Modal({error, closeModal}) {
    return (
        <div className=" bg-black/40 absolute top-0 left-0 h-screen w-screen grid place-items-center">
            <div className="w-80">
                <div className="bg-blue-500 p-4 text-white">
                    <p>Invalid Input</p>
                </div>
                <div className="bg-white p-4 flex flex-col gap-4">
                    <p>{error}</p>
                    <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 w-fit">Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Modal