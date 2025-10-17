import Image from 'next/image'; 

function About() {
  return (
    <>
      <div>
        <Image src="/download.jpg" alt="about us image" width={500} height={300} priority
        style={{ display: "block", margin: "0 auto", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)"}}
        />
      </div>
    </>
  )
}
export default About
