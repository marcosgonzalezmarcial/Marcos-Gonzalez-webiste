// import { getProjects } from "@/sanity/sanity-utils"
import globalStyles from '@/styles/globalStyles.module.css'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'


export default async function HomePage() {
//   const projects = await getProjects();

  return (
    <div className={globalStyles.app}>
      <Navbar />
      <Header />
      <About />
      {/* <Work />
      <Skills />
      <Testimonial />
      <Footer /> */}
  </div>
  )

}


