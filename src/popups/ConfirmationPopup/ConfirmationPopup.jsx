import React, { useState } from 'react'
import styles from "./ConfirmationPopup.module.css"

const ConfirmationPopup = ({ heading, subHeading, reasonBox, onConfirm, onCancel, buttonTitle }) => {
    const [reason, setReason] = useState("")
    return (
        <div className={styles.darkBG}   >
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>{heading ? heading : "Confirmation!"}</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={onCancel}>x</button>
                    <pre className={styles.modalContent}>
                        {subHeading ? subHeading : "Are you sure you want to delete?"}
                        {reasonBox && <textarea value={reason} onChange={(e) => setReason(e.target.value)} rows="5" className={`${styles.modeltextare} outline-none p-1`} />}
                    </pre>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => onConfirm(reason)}>{buttonTitle ? buttonTitle : "Delete"}</button>
                            <button className={styles.cancelBtn} onClick={onCancel}> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPopup
