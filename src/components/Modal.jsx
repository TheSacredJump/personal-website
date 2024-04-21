import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-[1000px] w-full">
                <button onClick={onClose} className="px-5 py-2 rounded-lg hover:scale-110 duration-500 bg-[#00df9a] absolute text-[#000300] top-5 right-0 mx-auto md:mx-0 md:right-5 p-2">
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;