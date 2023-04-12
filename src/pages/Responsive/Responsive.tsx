import logo from '../../logo.svg'

export default function Responsive() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 md:flex-row">
      <div className="w-full text-gray-100 bg-gray-800 md:w-64">
        <div className="flex items-center justify-center mt-8">
          <span className="text-2xl font-semibold uppercase">Logo</span>
        </div>
        <nav className="mt-10">
          <ul className="ml-4">
            <li className="my-px">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-100 bg-gray-900">
                <span className="mx-3">Dashboard</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900">
                <span className="mx-3">Analytics</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900">
                <span className="mx-3">Team</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900">
                <span className="mx-3">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full h-screen overflow-y-hidden">{/* Main content here */}</div>
    </div>
  )
}
