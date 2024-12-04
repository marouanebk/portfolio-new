import React from 'react';
import { useState } from 'react';

const SunIcon = () => {

    const [hover, setHover] = useState(false);


    return (
        <svg
            width="390"
            height="78"
            viewBox="0 0 390 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sun-icon"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

        >
            <circle cx="195" cy="227" r="227"                 fill={hover ? "#AC42FF" : "url(#paint0_linear_256_1124)"}
 />
            <defs>
                <linearGradient
                    id="paint0_linear_256_1124"
                    x1="-32"
                    y1="0"
                    x2="369.914"
                    y2="496.19"
                    gradientUnits="userSpaceOnUse"
                >
                                        {/* <stop stopColor="#AC42FF" /> */}

                    <stop stopColor="#D7A3FF" />
                    {/* <stop offset="1" stopColor="#AC42FF" /> */}
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SunIcon;