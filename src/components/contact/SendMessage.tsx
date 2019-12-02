import * as React from 'react';

function SendMessage()
{
    let [state, setState] = React.useState({
        name: "",
        email: "",
        message: "",
    })
    return (
        <div>
            <div className="flex justify-between py-4">
                <input placeholder="Name" className="input w-48" type="text" name="name" id="" />
                <input placeholder="Email" className="input w-48" type="text" name="email" id="" />
            </div>
            <div>
                <textarea placeholder="Message" className="resize-none w-full border p-2" name="message" id="" cols={30} rows={10}></textarea>
            </div>
            <div className="p-6">
                <button className="block m-auto bg-gray-900 text-white p-4">Send Message</button>
            </div>
        </div>
    )
}


export default SendMessage;