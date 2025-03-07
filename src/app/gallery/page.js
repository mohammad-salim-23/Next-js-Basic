const { default: Image } = require("next/image")
import nextJS from "../../assets/Next.jpg"
const GalleryPage = ()=>{
  return (
    <div>
          <h1 className="text-center mb-2">Regular Image Tag</h1>
    <img
      src = "https://i.pinimg.com/736x/e9/20/81/e92081263f620e23a2a243e031324301.jpg"
      alt=""
      width = {500}
       height = {500}
      className="mx-auto"

    />
      <h1 className="text-center mb-2">NextJs Image Component</h1>
      <Image
       src = "https://i.pinimg.com/736x/e9/20/81/e92081263f620e23a2a243e031324301.jpg"
       alt = "next image"
       width = {500}
       height = {500}
       className = "mx-auto"
      />
       <h1 className="text-center mb-2">Local Image </h1>
      <Image
       src = {nextJS}
       alt = "next image"
       width = {500}
       height = {500}
       className = "mx-auto"
      />
    </div>
  )
}
export default GalleryPage;