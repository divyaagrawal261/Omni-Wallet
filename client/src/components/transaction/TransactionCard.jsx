import React, { useState } from "react";
import Modal from 'react-modal';
import "./transaction.css"

Modal.setAppElement('#root')

function TransactionCard(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return(
        <div className="w-full">
            <div onClick={openModal} className={`flex w-full border-4 transactionCard text-white rounded-lg ${props.type === 'expense' ? 'border-red-500' : 'border-green-500'}`}>
                <div className="w-1/4 p-2">{props.date}</div>
                <div className="w-1/2 p-2">{props.walletName}</div>
                <div className="w-1/4 p-2">{props.amount}</div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Transaction Details"
                className="Modal w-full flex justify-center absolute top-0 h-screen"
                overlayClassName="Overlay"
            >
                <div className="w-[80%] md:w-[50%] border-4 rounded-lg p-2 bg-white">
                <h2 className="flex justify-between font-bold">Transaction Details<button onClick={closeModal} className="bg-red-500 p-2 text-white text-sm">Close</button></h2>
                <p><b>Date:</b> {props.date}</p>
                <p><b>Wallet:</b> {props.walletName}</p>
                <p><b>Amount:</b> {props.amount}</p>
                {props.note && <p><b>Note:</b> {props.note}</p>}
                </div>
            </Modal>
        </div>
    )
}

export default TransactionCard;