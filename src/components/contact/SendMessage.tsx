import * as React from "react"
import { motion } from "framer-motion"

interface IState
{
  name: string;
  email: string;
  message: string;
}

function reducer(state: IState, { type, value }): IState
{
  switch (type)
  {
    case "name":
      return { ...state, name: value }
    case "email":
      return { ...state, email: value }
    case "message":
      return { ...state, message: value }
    default:
      return state
  }
}

function SendMessage()
{
  let [state, dispatch] = React.useReducer(reducer, { name: "", email: "", message: "" })
  return (
    <div className="mt-6 sm:mt-20">
      <div className="flex justify-between py-4">
        <input onChange={onChange} value={state.name} placeholder="Name" className="input w-48" type="text"
               name="name"/>
        <input onChange={onChange} value={state.email} placeholder="Email" className="input w-48" type="text"
               name="email"/>
      </div>
      <div>
        <textarea onChange={onChange} value={state.message} placeholder="Message" className="resize-none w-full p-2"
                  name="message" id="" cols={30} rows={10}/>
      </div>
      <div className="p-6">
        <motion.button whileHover={{ scale: 1.05, rotate: -7 }}
                       whileTap={{ scale: 0.95 }}
                       className="font-medium reverse-colors reverse-bg-color button block m-auto bg-gray-900 text-white p-4">Send
          Message
        </motion.button>
      </div>
    </div>
  )

  function onChange(e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>)
  {
    const { name, value } = e.currentTarget
    dispatch({ type: name, value })
  }
}


export default SendMessage