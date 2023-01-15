import React, { useEffect, useState } from "react";
import "./Table.css";
import { Star, StarBorder } from "@mui/icons-material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Checkbox } from "@mui/material";

import Modal from "../../components/Modal/Modal";

const Table = ({
  coins,
  page,
  favouriteCoins,
  setFavouriteCoins,
  activeBtn,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalCoin, setModalCoin] = useState([]);

  // FAVOURITE ADD INDIVIDUAL COIN
  const [favClicked, setFavClicked] = useState();
  useEffect(() => {
    const data = coins.filter((el) => el.id === favClicked);
    const prevData = favouriteCoins.filter((el) => el.id === favClicked) || [];
    if (prevData.length) {
      setFavouriteCoins(
        favouriteCoins.filter((el) => el.id !== prevData[0].id)
      );
    } else {
      setFavouriteCoins([...new Set([...favouriteCoins, ...data])]);
    }
    setFavClicked("");
  }, [favClicked]);

  const handleOpenModal = (id) => {
    if (window.innerWidth > 500) {
      return;
    }

    const coin = coins.filter((coin) => coin.id === id);
    setModalCoin(coin);
    setOpenModal(true);
  };
  return (
    <>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalCoin={modalCoin}
      />
      <table>
        <thead>
          <tr>
            <td></td>
            <td>#</td>
            <td>NAME</td>
            <td>PRICE</td>
            <td>24H</td>
            <td>7D</td>
            <td>MARKET CAP</td>
            <td>VOLUME</td>
            <td>CIRCULATING SUPPLY</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, i) => (
            <tr key={coin.id} onClick={() => handleOpenModal(coin.id)}>
              <td>
                <Checkbox
                  icon={<StarBorder />}
                  checkedIcon={<Star />}
                  onChange={() => setFavClicked(coin.id)}
                  sx={{
                    visibility: `${
                      activeBtn === "favourite" ? "hidden" : "visible"
                    }`,
                  }}
                />
              </td>
              <td>
                {activeBtn === "favourite" ? i + 1 : (page - 1) * 10 + (i + 1)}
              </td>
              <td>
                <img src={coin.image} alt="" />
                <h4>{coin.id}</h4>
                <p className="text-muted">{coin.symbol.toUpperCase()}</p>
              </td>
              <td>${coin.current_price}</td>
              <td>{coin.price_change_percentage_24h.toFixed(2) || 0}%</td>
              <td>
                {coin.price_change_percentage_7d_in_currency.toFixed(2) || 0}%
              </td>
              <td>${coin.market_cap_change_24h}</td>
              <td>{coin.total_volume}</td>
              <td>{coin.circulating_supply}</td>
              <td>
                <MoreVertRoundedIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
