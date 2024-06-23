import React from "react";
import "./OrderChart.css";

const OrderChart = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <h2>Services</h2>
          <p>Order & delivery chart</p>
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
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Surjonagar"
                      data-market-details="Surjonagor Bazar, Dattapara Bazar, Naya Bazar, Utrail Hat, Utrail Ghat (Mogra Bazar / Gp Tower)"
                    >
                      Surjonagar
                    </td>
                    <td className="o1" rowSpan="4">
                      Saturday
                    </td>
                    <td className="d1" rowSpan="4">
                      Sunday
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Sheruail"
                      data-market-details="Shiruil Bazar, Bagmara Bazar,Kobirazpur Bazar (Bagmara Stand, Hazir More / Kobirazpur Police Fari, Kobirapur Hos. Road)"
                    >
                      Sheruail
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Chanderchar"
                      data-market-details="Chanderchar Bazar (Vandarikandi, Tengramari / Jogdher Math)"
                    >
                      Chanderchar
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Bhadrashan"
                      data-market-details="Jel Khanar More, School Get, Bhadrason Bazar (Dokhin Crockchor / Gopalpur Bazar)"
                    >
                      Bhadrashan
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Bondorkhola"
                      data-market-details="Bahadurpur Bazar, Bondorkhola Bazar, Bondorkhola Stand, Khaser Hat, Sonartori, Matborchar Road (Hakim Matbor Hat)"
                    >
                      Bondorkhola
                    </td>
                    <td className="o2" rowSpan="4">
                      Sunday
                    </td>
                    <td className="d2" rowSpan="4">
                      Monday
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Panchar"
                      data-market-details="Panchar Bazar,  Jamiatussunnah, Thakur Bazar, Panchar Main Road, Kacha Bazar, Sonartori"
                    >
                      Panchar
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Kazirhat"
                      data-market-details="Kajirhat Main Road, Kajirhat Bazar"
                    >
                      Kazirhat
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Majhirghat"
                      data-market-details="Kajirhat Bus Stand,Rupbabaur Hat, Majirghat Bazar (Rupbabaur Hat, Gonir More Bazar/ Kajirhat Notun Stand, Gonir More Stand)"
                    >
                      Majhirghat
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Shibchar Sadar 2"
                      data-market-details="Kutubpur Bazar, Chak Bazar, Kacha Bazar, (Delowar Beparir Hat / Golar Bazar, Kumerpar Bazar, Komlapur Bazar)"
                    >
                      Shibchar Sadar 2
                    </td>
                    <td className="o1" rowSpan="4">
                      Monday
                    </td>
                    <td className="d1" rowSpan="4">
                      Tuesday
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Shibchar Sadar 3"
                      data-market-details="71 Road, Sadar Road, Sibrakandhi More, Kajir Dokan, Nodirpar, Mohoripotty"
                    >
                      Shibchar Sadar 3
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Zajira 1"
                      data-market-details="TNT, Hos. Road, Thana Road, Bank Road, Godawon More (Gorom Bazar, Palerchar Bazar / Akon Kandi, Durbadanga Bazar)"
                    >
                      Zajira 1
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Zajira 2"
                      data-market-details="Puran Bazar, Puran Bazar Bus Stand, Sonkhola (Sofi Kajir More,Pachukhar Kandi / Mohorkhar Kandi, Bilaspur)"
                    >
                      Zajira 2
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Banglabazar"
                      data-market-details="Nodirpar, Kadirpur Bazar, Banglabazar (Munshir Hat, Puran Ghat, Shikdar Market/ Baily Bridge, Simana, Jinar Get, Boat Ghor)"
                    >
                      Banglabazar
                    </td>
                    <td className="o2" rowSpan="4">
                      Tuesday
                    </td>
                    <td className="d2" rowSpan="4">
                      Wednesday
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Naodoba"
                      data-market-details="Anondo Bazar, Nawdoba Bazar (Doynik Bazar, Bongo Market /  Club Moree, Saheb Bazar)"
                    >
                      Naodoba
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Chotokutubpur"
                      data-market-details="Bahadurpur Stand, Bahadurpur Choto More, Baily Bazar, Puran Ghat (Chotokutubpur Bazar / Munshir Bazar)"
                    >
                      Chotokutubpur
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Matborchar"
                      data-market-details="Matberchar Bazar, Nasirer More, Malerhat (Shikdar Hat, Shimul Toli Bazar/ Lopti Kandi Bridge, Surer Hat)"
                    >
                      Matborchar
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Boharatola"
                      data-market-details="Sotarpar, Boharatola Bazar, Singapur Bazar, Saheber Hat, Shakpur Stand (Shakpur Bus Stand/ Kolatola, Vennatola, Bazitpur)"
                    >
                      Boharatola
                    </td>
                    <td className="o1" rowSpan="4">
                      Wednesday
                    </td>
                    <td className="d1" rowSpan="4">
                      Thursday
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Shakpur"
                      data-market-details="Shakpur Bazar, Shakpur Main Road (Hosener Hat, Chasar Bazar)"
                    >
                      Shakpur
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Kazirhat"
                      data-market-details="Kajirhat Main Road, Kajirhat Bazar"
                    >
                      Kazirhat
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc1"
                      data-market-name="Ganganagar"
                      data-market-details="Joy Nagor Bazar, Gonganagor Bazar, Law Khola Bazar (Law Khola Road / Law Khola Bridge)"
                    >
                      Ganganagar
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Shibchar Sadar 1"
                      data-market-details="Shamolir More, Powro Market, TNT More (D.C Road, Jaduarchar Road/ Sasthokoloni Road)"
                    >
                      Shibchar Sadar 1
                    </td>
                    <td className="o2" rowSpan="4">
                      Thursday
                    </td>
                    <td className="d2" rowSpan="4">
                      Saturday
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Shibchar Sadar 2"
                      data-market-details="Kutubpur Bazar, Chak Bazar, Kacha Bazar, (Delowar Beparir Hat / Golar Bazar, Kumerpar
Bazar, Komlapur Bazar)"
                    >
                      Shibchar Sadar 2
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Shibchar Sadar 3"
                      data-market-details="71 Road, Sadar Road, Sibrakandhi More, Kajir Dokan, Nodirpar, Mohoripotty"
                    >
                      Shibchar Sadar 3
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="mc2"
                      data-market-name="Shibchar Sadar 4"
                      data-market-details="Collage More, Thana Road, Sadipur Bazar, Babnatola Bazar (Bridge Ghat / Khajar Deg)"
                    >
                      Shibchar Sadar 4
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderChart;
