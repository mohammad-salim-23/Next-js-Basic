import Navbar from "@/components/sharedComponent/Navbar";

const CommonLayout = ({children})=>{
    return (
        <div>
            <Navbar/>
          {children}
        </div>
    )
}
export default CommonLayout;