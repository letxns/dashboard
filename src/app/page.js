"use client";
import BarChart from './components/BarChart/BarChart.js';
import Insights from './components/Insights/Insights.js';
import Navbar from './components/NavBar/Navbar.js';
import RadarChart from './components/RadarChart/RadarChart.js';
import * as data from './components/Insights/InsightsData.js';
import ProgressBar from './components/ProgressBar/ProgressBar';
import * as progressData from './components/ProgressBar/ProgressData.js';
import DoughnutChart from './components/DoughnutChart/DoughnutChart.js';
import Footer from './components/Footer/Footer.js';
import Table from './components/Table/Table.js';

export default function Home() {
  return (
    <div className="flex h-lvh items-start">
      <Navbar />
      <div className="py-12">
        <div className="lg:flex lg:flex-row md:flex-col lg:m-2">
          {data.default.map((data, key) => {
            return (
              <Insights 
                name={data.name} 
                firstValue={data.firstValue} 
                secondValue={data.secondValue}
                arrow={data.arrow}
                color={data.color}
                key={key}
              />
            )
          })}
        </div>
        <div className="lg:flex lg:flex-row justify-around mx-4 my-2 bg-white border-2 rounded-md border-1 border-sky-200 items-center">
          <BarChart />
          <DoughnutChart />
        </div>
        <div className="lg:flex lg:flex-row md:flex-col lg:m-2">
          {progressData.default.map((data, key) => {
            return (
              <ProgressBar 
                name={data.name}
                progress={data.value}
                color={data.color}
                icon={data.icon}
                key={key}
              />
            )
          })}
        </div>
        <div className="lg:flex lg:flex-row justify-around mx-4 my-2 bg-white border-2 rounded-md border-1 border-sky-200 items-center">
          <RadarChart />
          <Table />
        </div>
        <Footer />
      </div>
    </div>
  );
}
