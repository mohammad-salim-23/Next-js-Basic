import styles from "./about.module.css"
export const metadata = {
    title : "About Us",
    description : "This is about us page"
}
const AboutPage = ()=>{
    return (
        <div>
            <h1 className={styles.text_color}>Hello from ABout page</h1>
        </div>
    )
}
export default AboutPage;