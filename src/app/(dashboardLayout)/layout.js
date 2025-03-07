import Sidebar from "@/components/sharedComponent/Sidebar";


const DashboardLayout = ({children})=>{
    return (
        
        <div className="flex">
          <Sidebar/>
            {children}
          
            </div>
    )
}
export default DashboardLayout;