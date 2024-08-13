"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import * as data from './DoughnutConfig.js';

const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
});

export default function DoughnutChart() {
  return (
    <div className="lg:w-1/6 p-2">
      <Doughnut data={data.default} />
    </div>
  );
};