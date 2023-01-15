import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";
import millify from "millify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function BasicModal({ openModal, setOpenModal, modalCoin }) {
  const handleClose = () => setOpenModal(false);
  console.log(modalCoin);
  if (!modalCoin.length) return <></>;
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          <div className="modal__top">
            <div className="coin-name">
              <img src={modalCoin[0].image} alt="" />
              <h4>{modalCoin[0].id}</h4>
            </div>
            <div className="modal__close" onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="coin-desc">
              <h5>PRICE</h5>
              <p>${modalCoin[0].current_price}</p>
            </div>
            <div className="coin-desc">
              <h5>24H</h5>
              <p>
                {millify(
                  modalCoin[0].price_change_percentage_24h.toFixed(2) || 0
                )}
                %
              </p>
            </div>
            <div className="coin-desc">
              <h5>7D</h5>
              <p>
                {modalCoin[0].price_change_percentage_7d_in_currency.toFixed(
                  2
                ) || 0}
                %
              </p>
            </div>
          </div>
          <div className="coin-desc">
            <h5>MARKET CAP</h5>
            <p>${millify(modalCoin[0].market_cap_change_24h)}</p>
          </div>
          <div className="coin-desc">
            <h5>VOLUME 24H</h5>
            <p>
              ${modalCoin[0].total_volume}{" "}
              <span className="text-muted">
                (
                {millify(
                  modalCoin[0].total_volume / modalCoin[0].current_price
                )}{" "}
                {modalCoin[0].symbol.toUpperCase()} )
              </span>
            </p>
          </div>
          <div className="coin-desc">
            <h5>CIRCULATING SUPPLY</h5>
            <p>${modalCoin[0].circulating_supply}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
