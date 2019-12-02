import * as React from 'react';

let anchors = [
    {
        name: "Phone",
        detials: "+374-55-11-99-91",
        icon: "icon-phone",
    },
    {
        name: "Location",
        detials: "Armenia, Yerevan",
        icon: "icon-location",
    },
    {
        name: "Email",
        detials: "alkamyan97@gmail.com",
        icon: "icon-mail",
    },
]
function ContactIcons()
{
    return (
        <div>
            <h1 className="h1-bold">Contact Me</h1>
            <div className="flex justify-between mt-20">
                {
                    anchors.map((item) => (
                        <div className="flex" key={item.name}>
                            <a className="h-16 w-16 bg-gray-900 text-gray-100 rounded-50 flex items-center justify-center text-xl ">
                                <i className={item.icon} />
                            </a>
                            <div className="pl-2 flex flex-col justify-center">
                                <span className="uppercase font-medium">{item.name}</span>
                                <span className="font-semibold">{item.detials}</span>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
export default ContactIcons;