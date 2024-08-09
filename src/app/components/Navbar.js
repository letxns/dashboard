



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <nav className="flex-row items-center flex-wrap p-2 w-full bg-tradesee-blue">
      <div className="flex items-center flex-shrink-0 text-white justify-between">
        <span className="font-semibold text-xl tracking-tight">Dashboard</span>
        <a href="#responsive-header" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white lg:mt-0">
          Exportar dados
        </a>
      </div>
    </nav>
  )
}
