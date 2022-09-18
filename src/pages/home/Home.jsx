import React from "react";
import Chart from "../../Compoents/Chart/Chart";
import Featured from "../../Compoents/Featured/Featured";
import Navbar from "../../Compoents/Navbar/Navbar";
import Sidebar from "../../Compoents/Sidebar/Sidebar";
import Tables from "../../Compoents/Tables/Tables";
 
import Widgets from "../../Compoents/Widgets/Widgets";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
            <div className=" ">Latest Transaction</div>
             <Tables/> 
        </div>
      </div>
    </div>
  );
};

export default Home;
