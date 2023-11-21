const Contact = () => {
    return (
        <div>
            <div className="m-2 p-2 text-center">
                <h1 className="font-bold text-2xl">Contact Us Page</h1>
            </div>
            <div className="p-6 m-6">
                <input type="text" placeholder="name" className="m-2 p-2 border border-black rounded-lg"></input>
                <input type="email" placeholder="@gmail.com" className="m-2 p-2 border border-black rounded-lg"></input>
                <input type="text" placeholder="message" className="m-2 p-2 border border-black rounded-lg"></input>
                <button className="m-2 p-2 rounded-lg bg-slate-400 border border-black">Submit</button>
                <h1 className="font-bold m-2 p-2">Contact us at our main office SharmaNagar, Karimnagar Telangana India.</h1>
            </div>
            
        </div>
    )
}

export default Contact;