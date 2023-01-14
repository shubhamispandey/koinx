import React from "react";
import "./Table.css";
import { Star, StarBorder } from "@mui/icons-material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Checkbox } from "@mui/material";

const Table = ({ coins, page }) => {
  return (
    <>
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
            <tr key={coin.id}>
              <td>
                <Checkbox icon={<StarBorder />} checkedIcon={<Star />} />
              </td>
              <td>{(page - 1) * 10 + (i + 1)}</td>
              <td>
                <img src={coin.image} alt="" />
                <h4>{coin.id}</h4>
                <p className="text-muted">{coin.symbol.toUpperCase()}</p>
              </td>
              <td>${coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.price_change_percentage_7d_in_currency}</td>
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
