import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () =>{
return(
    <>
     <Navbar/>
    <div className='flex justify-center items-center'>
        <h3 className='flex justify-center items-center  font-bold heading'>file-share</h3>
    </div>
    <div className='flex justify-center items-center'>
     <p className='para'>
          This is an extra-ordinary web-app for sharing files . It is made by using the MERN stack.
          The frontend is made in react. The concept of sharing is that your file is first uploaded to MongoDB database and a link is generated which can be used to access the file from any other device.
     </p>
    </div>
    <Footer/>
    </>
);
}

export default About;