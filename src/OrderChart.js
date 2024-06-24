import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import "./OrderChart.css";
import Modal from "./Modal";

const OrderChart = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentMarket, setCurrentMarket] = useState({
    name: "",
    details: "",
  });
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYGe49CMfHtSVXwpeytgh5FvCT-06ec539uGMx25oWgEzZo1RvBZaGgZpPTDDW2w/pub?gid=927279133&output=csv"
        );
        const data = response.data;
        const parsedData = parseCSV(data);
        setMarketData(parsedData);
      } catch (error) {
        console.error("Error fetching the market data: ", error);
      }
    };

    fetchMarketData();
  }, []);

  const parseCSV = (data) => {
    const parsed = Papa.parse(data, {
      header: false,
      skipEmptyLines: true,
    });

    const result = [];

    for (let i = 3; i < 27; i++) {
      const currentLine = parsed.data[i];
      const market = {
        group: Math.ceil((i - 3 + 1) / 4), // Calculate group based on the row index
        name: currentLine[1],
        details: currentLine[2],
        orderDay: currentLine[3],
        deliveryDay: currentLine[4],
      };
      result.push(market);
    }

    return result;
  };

  const handleMarketClick = (marketName, marketDetails) => {
    setCurrentMarket({ name: marketName, details: marketDetails });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="order" className="services">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <h2>Order & Delivery Chart</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="table-responsive" data-aos="zoom-in">
              <table className="table">
                <thead>
                  <tr>
                    <th>Market Name</th>
                    <th>Order</th>
                    <th>Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((market, index) => (
                    <tr key={index}>
                      <td
                        className={`mc${market.group}`}
                        onClick={() =>
                          handleMarketClick(market.name, market.details)
                        }
                      >
                        {market.name}
                      </td>
                      {index % 4 === 0 && (
                        <>
                          <td
                            className={`o${market.group} center-align`}
                            rowSpan="4"
                          >
                            {market.orderDay}
                          </td>
                          <td
                            className={`d${market.group} center-align`}
                            rowSpan="4"
                          >
                            {market.deliveryDay}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={closeModal}
        marketName={currentMarket.name}
        marketDetails={currentMarket.details}
      />
    </section>
  );
};

export default OrderChart;
