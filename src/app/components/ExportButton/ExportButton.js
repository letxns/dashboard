import * as XLSX from "xlsx";
import * as InsightsData from "../Insights/InsightsData.js";
import * as BarChartData from "../BarChart/BarConfig.js";
import * as DoughnutData from "../DoughnutChart/DoughnutConfig.js";
import * as ProgressData from "../ProgressBar/ProgressData.js";
import * as RadarData from "../RadarChart/RadarConfig.js";
import * as Table from "../Table/Table.js";

const ExcelExportButton = () => {

    const RowsFromInsightsData = InsightsData.default.flatMap((data) => {
        return {
            "Name": data.name,
            "First Value": data.firstValue,
            "Second Value": data.secondValue,
        }
    });

    const filterTypesFromBarChartData = BarChartData.default.labels
    const RowsFromBarChartData = BarChartData.default.labels?.flatMap((types) => {
        return {
            "Types": types,
            "Values from Dataset 1": BarChartData.default.datasets[0].data[filterTypesFromBarChartData.indexOf(types)],
            "Values from Dataset 2": BarChartData.default.datasets[1].data[filterTypesFromBarChartData.indexOf(types)]
        }
    });

    const RowsFromProgressData = ProgressData.default?.map((data) => {
        return {
            "Types": data.name,
            "Values": data.value,
        }
    });

    const RowsFromDoughnutData = DoughnutData.data?.map((data) => {
        return {
            "Seller": data.seller,
            "Values": data.value,
        }
    });

    const filterTypesFromRadarData = RadarData.default.labels
    const RowsFromRadarData = RadarData.default.labels?.flatMap((types) => {
        return {
            "Types": types,
            "Values from Dataset 1": RadarData.default.datasets[0].data[filterTypesFromRadarData.indexOf(types)],
            "Values from Dataset 2": RadarData.default.datasets[1].data[filterTypesFromRadarData.indexOf(types)]
        }
    });

    const handleOnExport = () => {
        const wb = XLSX.utils.book_new();
        const wsInsightsData = XLSX.utils.json_to_sheet(RowsFromInsightsData);
        const wsBarData = XLSX.utils.json_to_sheet(RowsFromBarChartData);
        const wsDoughnutData = XLSX.utils.json_to_sheet(RowsFromDoughnutData);
        const wsProgressData = XLSX.utils.json_to_sheet(RowsFromProgressData);
        const wsRadarData = XLSX.utils.json_to_sheet(RowsFromRadarData);
        XLSX.utils.book_append_sheet(wb, wsInsightsData, "Insights Data");
        XLSX.utils.book_append_sheet(wb, wsBarData, "Suppliers Data");
        XLSX.utils.book_append_sheet(wb, wsDoughnutData, "Doughnut Data");
        XLSX.utils.book_append_sheet(wb, wsProgressData, "Progress Data");
        XLSX.utils.book_append_sheet(wb, wsRadarData, "Radar Data");
        XLSX.writeFile(wb, "dashboard-data.xlsx");
    };

  return (
    <button
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0"
        onClick={() => {
            handleOnExport();
        }}
    >
        Exportar data
    </button>
  );
};

export default ExcelExportButton; 