"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import * as data from './BarConfig.js';

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

export default function BarChart() {
  return (
    <div className="lg:w-2/6 p-2">
      <Bar data={data.default} />
    </div>
  );
};