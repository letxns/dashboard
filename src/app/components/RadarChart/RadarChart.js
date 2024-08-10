import dynamic from 'next/dynamic';
import 'chart.js/auto';
import * as data from "./RadarConfig.js";

export default function RadarChart() {

    const Radar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Radar), {
        ssr: false,
    });

    return (
        <div className="p-2 lg:w-2/5 xl:w-1/5 my-2">
            <Radar data={data.default} />
        </div>
    )
}