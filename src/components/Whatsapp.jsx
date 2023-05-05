import React from "react";

export default function WhatsappIcon() {
    return (
        <>
            <div className="WhatsappIcon">
                <a href="https://api.whatsapp.com/send?phone=+919518533948&text=Hello">
                    <img src={process.env.PUBLIC_URL + `/assets/img/root/whatsapp.png`} alt="Whatsapp Image" />
                </a>
            </div>
        </>
    )
}