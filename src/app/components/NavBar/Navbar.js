import ExcelExportButton from "../ExportButton/ExportButton";
import Sidebar from "../SideBar/SideBar";

export default function Navbar() {
  return (
    <nav className="fixed flex-row items-center flex-wrap p-2 w-full bg-tradesee-blue">
      <div className="flex items-center flex-shrink-0 text-white justify-between">
        <div className="flex flex-row place-items-center">
          <Sidebar />
          <h1 className="font-semibold text-xl tracking-tight">Dashboard</h1>
        </div>
        <ExcelExportButton />
      </div>
    </nav>
  )
}
