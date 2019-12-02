import * as React from 'react';

function SendMessage()
{
    let [state, setState] = React.useState({
        name: "",
        email: "",
        message: "",
    })
    console.log(state)
    return (
        <div>
            <div className="flex justify-between py-4">
                <input onChange={onChange} value={state.name} placeholder="Name" className="input w-48" type="text" name="name" />
                <input onChange={onChange} value={state.email} placeholder="Email" className="input w-48" type="text" name="email" />
            </div>
            <div>
                <textarea onChange={onChange} value={state.message} placeholder="Message" className="resize-none w-full border p-2" name="message" id="" cols={30} rows={10}></textarea>
            </div>
            <div className="p-6">
                <button className="font-medium reverse-colors reverse-bg-color button block m-auto bg-gray-900 text-white p-4">Send Message</button>
            </div>
        </div>
    )

    function onChange(e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const { name, value } = e.currentTarget;
        let newState = { ...state };
        newState[name] = value;
        setState(newState);
    }
}


export default SendMessage;