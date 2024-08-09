"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import * as data from '../utils/mock/BarData.js';

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

export default function BarChart() {
  return (
        <div className="lg:w-1/3">
            <Bar data={data.default} />
        </div>
    );
};