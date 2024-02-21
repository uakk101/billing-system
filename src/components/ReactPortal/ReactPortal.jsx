import { useState, useLayoutEffect, useEffect } from 'react'
import { createPortal } from 'react-dom';
function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}
const ReactPortal = ({ children, wrapperId = "react-portal-wrapper" }) => {
    const [wrapperElement, setWrapperElement] = useState(null);
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        // if element is not found with wrapperId or wrapperId is not provided,
        // create and append to body
        let systemCreated = false;
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);
        return () => {
            // delete the programatically created element
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element);

            }

        }
    }, [wrapperId]);

    useEffect(() => {
        // document.getElementById('root').style.overflow = 'hidden';
        // document.getElementById('root').style.height = '100vh';
        // document.getElementById('root').style.filter = 'blur(2px)';
        document.body.style.overflow = 'hidden';
        return () => {
            // document.getElementById('root').style.overflow = 'hidden';
            // document.getElementById('root').style.height = 'auto';
            // document.getElementById('root').style.filter = 'none';
            document.body.style.overflow = 'auto';

        }
    })


    // wrapperElement state will be null on the very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
}

export default ReactPortal