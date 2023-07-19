import React from 'react'


const Download = () => {

    const handleDownload = () => {
        fetch('/blockrover-whitepaper.pdf')
            .then(response => {
                // Create a blob from the response data
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'blockrover-whitepaper.pdf';
                a.click();
            });
    };

    return (
        <div className='absolute inset-0 flex items-center justify-center sm:hidden' >
            <button
                onClick={() => handleDownload()}
                className='uppercase bg-gradient-to-r from-green-600 to-green-400  text-white px-[20px] font-semibold py-[9px] rounded-[5px] cursor-pointer'
            >
                Show
            </button>
        </div>
    )
}

export default Download