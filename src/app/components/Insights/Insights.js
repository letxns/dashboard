"use client";
import 'chart.js/auto';
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon  } from "@heroicons/react/20/solid";

export default function Insights({name, firstValue, secondValue, color, arrow}) {

    const arrowIcons = {
        up: <ChevronDoubleUpIcon className="h-10 w-10 text-green-500 text-lg" />,
        down: <ChevronDoubleDownIcon  className="h-10 w-10 text-red-500 text-lg" />
    }

    return (
        <div className="flex flex-col bg-white justify-between lg:w-1/4 lg:mx-2 p-2 mx-2 my-2 border-b-4 border-blue-300 rounded-md ">
            <h1 className="text-lg text-gray-400">
                {name}
            </h1>
            <div className="flex place-content-between">
                <div className="flex flex-row items-center">
                    {arrowIcons[arrow]}
                    <h1 className="text-md px-2">
                        {firstValue}
                    </h1>
                </div>
                <div className={`border-2 rounded-full ring-2 content-center p-2 ${color}`}>
                    {secondValue}
                </div>
            </div>
        </div>
    );
};