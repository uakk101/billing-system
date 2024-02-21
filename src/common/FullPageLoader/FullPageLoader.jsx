import React, { useId } from 'react';
 
import ReactPortal from '../../components/ReactPortal/ReactPortal'

const FullPageLoader = ({ allowFullScreen }) => {

    const ComponentId = useId()

    if (allowFullScreen) {
        return (
            <ReactPortal wrapperId={ComponentId}  >
                <div className='loaderbgpopup'>
                    <div className='loader' />
                </div>
            </ReactPortal>
        )
    }
    else {
        return (
            <div className='loaderbgpopup'>
                <div className='loader' />
            </div>
        )
    }


}

export default FullPageLoader