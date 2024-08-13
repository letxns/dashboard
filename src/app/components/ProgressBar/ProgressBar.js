"use client";
import 'chart.js/auto';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon  } from "@heroicons/react/20/solid";

export default function ProgressBar({ name, progress, color, icon }) {

    const icons = {
        up: <ArrowTrendingUpIcon className={`w-2/12 lg:w-1/5 p-2 ${color}`} />,
        down: <ArrowTrendingDownIcon className={`w-2/12 lg:w-1/5 p-2 ${color}`} />
    }

    return (
        <div className="flex flex-col bg-white justify-between lg:w-1/4 lg:mx-2 p-2 mx-2 my-2 border-b-4 border-blue-300 rounded-md ">
            <div className="flex flex-row place-items-center justify-around">
                <div className="flex flex-row justify-start place-items-center">
                    {icons[icon]}
                    <h1 className={`text-2xl ${color}`}>{progress}%</h1>
                </div>
                <progress value={progress} max={100} className="mx-2 border-2 rounded-md bg-white "/>
            </div>
            <h1 className="text-lg text-gray-400">
                {name}
            </h1>
        </div>
    );
};