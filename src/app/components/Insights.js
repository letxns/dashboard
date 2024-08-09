"use client";
import 'chart.js/auto';
import { ChevronUpIcon, CurrencyDollarIcon } from "@heroicons/react/20/solid";

export default function Insights({name, firstValue, secondValue}) {
  return (
        <div className="bg-white lg:w-1/4 justify-between flex flex-col lg:mx-2 p-2 m-2 border-b-2 border-blue-300 rounded-md ">
            <h1 className="text-sm text-gray-600">{name}</h1>
            <div className="flex place-content-between">
                <div className="flex flex-row items-center">
                    <ChevronUpIcon className="h-10 w-10 text-green-500 text-lg" />
                    <h1 className="text-md">{firstValue}</h1>
                </div>
                <div className="border-2 border-sky-500 rounded-full ring-2 ring-blue-500 content-center p-2">{secondValue}</div>
            </div>
        </div>
    );
};