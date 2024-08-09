"use client";
import BarChart from './components/BarChart';
import Insights from './components/Insights';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import * as data from './utils/mock/IndicatorsData.js';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="lg:flex lg:flex-row md:flex-col lg:m-2">
        {data.default.map((data, key) => {
          return (
            <Insights 
              name={data.name} 
              firstValue={data.firstValue} 
              secondValue={data.secondValue}
              key={key}
            />
          )
        })}
      </div>
      <div className="lg:flex lg:flex-row justify-center">
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
}
