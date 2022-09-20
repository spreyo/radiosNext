import React, { useEffect, useState } from 'react'

export const Radio = ({ radioName, audioStream, isHidden }) => {
    const [buttonText, setButtonText] = useState("PLAY");
    const [playing, setPlaying] = useState(false);
    const [radioCreated, setRadioCreated] = useState(false);
    const [radios, setRadios] = useState({});

    useEffect(() => {
        if (!isHidden) {


        }
    })

    function muteRadio(radioName) {
        const radio = radios[radioName];
        radio.muted = true;
        console.log(`${radioName} muted ${radio.muted}`)
    }

    function unmuteRadio(radioName) {
        const radio = radios[radioName];
        radio.muted = false;
        console.log(`${radioName} muted ${radio.muted}`)
    }


    function newRadio(radioName, audioStream) {
        const radio = new Audio(audioStream);
        radio.id = radioName;
        // radio.defaultMuted = true;
        radio.muted = true;
        const newRadios = radios;
        newRadios[radioName] = radio;
        setRadios(newRadios);
        radio.play();
        console.log("new radio " + radioName + ' ' + audioStream);
        console.log(radios)
    }



    function ControlButton() {
        if (!playing) {
            if (!radioCreated) {
                newRadio(radioName, audioStream)
                setRadioCreated(true);
            }
            setPlaying(true)
            setButtonText("STOP");
            unmuteRadio(radioName);
        }
        else if (playing) {
            setPlaying(false);
            setButtonText("PLAY");
            muteRadio(radioName);
        }
    }

    return (
        <div className="radioCardDiv" id={radioName}>
            <div className="radioCard">
                <h1 className='radioName'>{radioName}</h1>
                <button className="controlButton" onClick={() => ControlButton()}>{buttonText}</button>

            </div>
        </div>
    )
}
