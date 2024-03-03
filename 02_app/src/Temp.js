import React from 'react';
import { useState } from "react";
import './Temp.css';
const Temp = () => {
    let [Fetemp, setTemp] = useState(0);
    let [CeTemp , setState]=useState('');


    const tempChange = () => {

        let providedTemp = parseFloat(document.querySelector('#temp').value);
        let h5 = document.querySelector('h5');

        h5.style.display = 'none';

        if (providedTemp > 0) {
            h5.style.display = 'block';

        }

        let convertTempTOF = (providedTemp * 9 / 5) + 32;
        setTemp(convertTempTOF);

        

    }
    const tempChange1=()=>{
        let providedTemp = parseFloat(document.querySelector('#temp').value);
        let h5 = document.querySelector('h5');

        h5.style.display = 'none';

        if (providedTemp > 0) {
            h5.style.display = 'block';

        }

        let convertTempToC = (providedTemp -32) * 5/9;
        setState(convertTempToC);


    }

    return (
        <>
            <div className='container'>
                <div className='data'>
                    <h1>Convert Temperature</h1>



                    <div className='inputTemp'>
                        <input type="text" id='temp' />
                        <button onClick={tempChange}>To farenheit</button>
                        <button onClick={tempChange1}>To Celcius</button>
                    </div>
                    <div className='Result'>


                        <h5 className='h5_1' style={{ display: 'none' }}><pre>{Fetemp} <sup>o</sup>F</pre></h5>
                        <h5 className='h5_1' style={{ display: 'none' }}><pre>{CeTemp} <sup>o</sup>C</pre></h5>
                    </div>
                </div>

            </div>
        </>

    )
}
export default Temp