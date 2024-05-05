import { useContext } from "react"
import Home from "./Pages/Home/Home"
import { ContextData } from "./Providers/ContextProviders/ContextProviders"
import Dashboard from "./Components/dashboard/Dashboard"


function App() {
  const {showText}=useContext(ContextData)

  return (
    <>
      <div className="lg:flex justify-start  gap-[1%]">
        <div className={` ${showText?'xl:w-[17%] lg:w-[21%] w-[30%]':'w-[70px]'} `}>
          <Dashboard />
        </div>
        <div className={`xl:w-[82%] lg:w-[78%] w-full`}>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
