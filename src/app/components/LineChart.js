import dynamic from 'next/dynamic';
import 'chart.js/auto';
import * as data from "./BarChart/LineData.js";

export default function LineChart() {

    const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
        ssr: false,
    });

    return (
        <div className="lg:w-1/3 bg-white border-2 rounded p-2">
            <Line data={data.default} />
        </div>
    )
}