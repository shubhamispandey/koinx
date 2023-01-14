import React from "react";
import "./Coins.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Checkbox,
  FormControl,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import Table from "../Table/Table";

const Coins = () => {
  // API STATES
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [loading, setLoading] = useState(false);

  //   FILTER BUTTON STATES
  const [favouriteFilterChecked, setFavouriteFilterChecked] = useState(false);

  //   FETCH API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${rows}&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`
      );
      console.log(data.data);

      setCoins(data.data);
      setLoading(!loading);
    };
    fetchData();
  }, [page, rows]);

  //   SET NUMBER OF ROWS IN API
  const handleRows = (e) => {
    setRows(e.target.value);
    setPage(1);
  };

  //   SET FAVOURITES DATA FILTER

  return (
    <>
      <div className="coins">
        <h2>Top 100 Cryptocurrencies by Market Cap</h2>

        {/* FILTER BUTTONS */}
        <div className="coins__filters">
          <button
            className="btn favourite"
            onClick={() => setFavouriteFilterChecked(!favouriteFilterChecked)}
          >
            <Checkbox
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={favouriteFilterChecked}
            />
            <span className="text">Favourites</span>
          </button>
          <button className="btn Cryptocurrencies active">
            Cryptocurrencies
          </button>
          <button className="btn Defi">Defi</button>
          <button className="btn Defi">NFTs & Collections</button>
          <div className="coins__filters-rows">
            <span>Show Rows</span>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                // className="btn"
                id="demo-select-small"
                value={rows}
                onChange={handleRows}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {/* DATA TABLE */}
        <div className="coins__table">
          <Table coins={coins} page={page} />
        </div>
        {/* PAGINATION */}
        <div className="coins__pagination">
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            onChange={(e, p) => setPage(p)}
          />
        </div>
      </div>
    </>
  );
};

export default Coins;
