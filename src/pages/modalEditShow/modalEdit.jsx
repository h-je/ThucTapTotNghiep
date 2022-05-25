import React from 'react'
import useClickOutSide from '../../hooks/useOnclickOutSide'

export const ModalEdit = () => {
    const { nodeRef, show, setShow } = useClickOutSide()
    // console.log("dasdas",show);
    return (
        <div>
            <button onClick={() => setShow(true)} ref={nodeRef} className="px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            {show && <div class="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            </div>}
        </div>
    )
}

