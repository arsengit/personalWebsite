import * as React from 'react';
import ContactIcons from "./ContactIcons";
import SendMessage from "./SendMessage";

function ContactContainer()
{
    return (
        <div className="lg:pt-32 pt-20 container contact-section max-w-960 px-4 py-4 h-screen">
            <ContactIcons />
            <SendMessage />
        </div>
    )
}
export default ContactContainer;