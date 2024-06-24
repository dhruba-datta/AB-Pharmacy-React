// src/OrderChart.js

import React, { useState } from "react";
import "./OrderChart.css";
import Modal from "./Modal";

const OrderChart = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentMarket, setCurrentMarket] = useState({
    name: "",
    details: "",
  });

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
          <h2>Order & delivery chart</h2>
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
                        <td className={`o${market.group}`} rowSpan="4">
                          {market.orderDay}
                        </td>
                      )}
                      {index % 4 === 0 && (
                        <td className={`d${market.group}`} rowSpan="4">
                          {market.deliveryDay}
                        </td>
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

const marketData = [
  {
    group: 1,
    name: "Surjonagar",
    details:
      "Surjonagor Bazar, Dattapara Bazar, Naya Bazar, Utrail Hat, Utrail Ghat (Mogra Bazar / Gp Tower)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 1,
    name: "Sheruail",
    details:
      "Shiruil Bazar, Bagmara Bazar,Kobirazpur Bazar (Bagmara Stand, Hazir More / Kobirazpur Police Fari, Kobirapur Hos. Road)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 1,
    name: "Chanderchar",
    details: "Chanderchar Bazar (Vandarikandi, Tengramari / Jogdher Math)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 1,
    name: "Bhadrashan",
    details:
      "Jel Khanar More, School Get, Bhadrason Bazar (Dokhin Crockchor / Gopalpur Bazar)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 2,
    name: "Bondorkhola",
    details:
      "Bahadurpur Bazar, Bondorkhola Bazar, Bondorkhola Stand, Khaser Hat, Sonartori, Matborchar Road (Hakim Matbor Hat)",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },
  {
    group: 2,
    name: "Panchar",
    details:
      "Panchar Bazar,  Jamiatussunnah, Thakur Bazar, Panchar Main Road, Kacha Bazar, Sonartori",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },
  {
    group: 2,
    name: "Kazirhat",
    details: "Kajirhat Main Road, Kajirhat Bazar",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },
  {
    group: 2,
    name: "Majhirghat",
    details:
      "Kajirhat Bus Stand,Rupbabaur Hat, Majirghat Bazar (Rupbabaur Hat, Gonir More Bazar/ Kajirhat Notun Stand, Gonir More Stand)",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },

  {
    group: 3,
    name: "Shibchar Sadar 2",
    details:
      "Kutubpur Bazar, Chak Bazar, Kacha Bazar, (Delowar Beparir Hat / Golar Bazar, Kumerpar Bazar, Komlapur Bazar)",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },
  {
    group: 3,
    name: "Shibchar Sadar 3",
    details:
      "71 Road, Sadar Road, Sibrakandhi More, Kajir Dokan, Nodirpar, Mohoripotty",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },
  {
    group: 3,
    name: "Zajira 1",
    details:
      "TNT, Hos. Road, Thana Road, Bank Road, Godawon More (Gorom Bazar, Palerchar Bazar / Akon Kandi, Durbadanga Bazar)",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },
  {
    group: 3,
    name: "Zajira 2",
    details:
      "Puran Bazar, Puran Bazar Bus Stand, Sonkhola (Sofi Kajir More,Pachukhar Kandi / Mohorkhar Kandi, Bilaspur)",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },

  {
    group: 4,
    name: "Banglabazar",
    details:
      "Nodirpar, Kadirpur Bazar, Banglabazar (Munshir Hat, Puran Ghat, Shikdar Market/ Baily Bridge, Simana, Jinar Get, Boat Ghor)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 4,
    name: "Naodoba",
    details:
      "Anondo Bazar, Nawdoba Bazar (Doynik Bazar, Bongo Market / Club Moree, Saheb Bazar)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 4,
    name: "Chotokutubpur",
    details:
      "Bahadurpur Stand, Bahadurpur Choto More, Baily Bazar, Puran Ghat (Chotokutubpur Bazar / Munshir Bazar)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 4,
    name: "Matborchar",
    details:
      "Matberchar Bazar, Nasirer More, Malerhat (Shikdar Hat, Shimul Toli Bazar/ Lopti Kandi Bridge, Surer Hat)",
    orderDay: "Saturday",
    deliveryDay: "Sunday",
  },
  {
    group: 5,
    name: "Boharatola",
    details:
      "Sotarpar, Boharatola Bazar, Singapur Bazar, Saheber Hat, Shakpur Stand (Shakpur Bus Stand/ Kolatola, Vennatola, Bazitpur)",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },
  {
    group: 5,
    name: "Shakpur",
    details: "Shakpur Bazar, Shakpur Main Road (Hosener Hat, Chasar Bazar)",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },
  {
    group: 5,
    name: "Kazirhat",
    details: "Kajirhat Main Road, Kajirhat Bazar",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },
  {
    group: 5,
    name: "Ganganagar",
    details:
      "Joy Nagor Bazar, Gonganagor Bazar, Law Khola Bazar (Law Khola Road / Law Khola Bridge)",
    orderDay: "Sunday",
    deliveryDay: "Monday",
  },

  {
    group: 6,
    name: "Shibchar Sadar 1",
    details:
      "Shamolir More, Powro Market, TNT More (D.C Road, Jaduarchar Road/ Sasthokoloni Road)",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },
  {
    group: 6,
    name: "Shibchar Sadar 2",
    details:
      "Kutubpur Bazar, Chak Bazar, Kacha Bazar, (Delowar Beparir Hat / Golar Bazar, Kumerpar Bazar, Komlapur Bazar)",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },
  {
    group: 6,
    name: "Shibchar Sadar 3",
    details:
      "71 Road, Sadar Road, Sibrakandhi More, Kajir Dokan, Nodirpar, Mohoripotty",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },
  {
    group: 6,
    name: "Shibchar Sadar 4",
    details:
      "Collage More, Thana Road, Sadipur Bazar, Babnatola Bazar (Bridge Ghat / Khajar Deg)",
    orderDay: "Monday",
    deliveryDay: "Tuesday",
  },
];

export default OrderChart;
