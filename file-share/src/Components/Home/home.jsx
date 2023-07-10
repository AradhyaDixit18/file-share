import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './home.css';
import { useState , useEffect} from "react";
import { UploadFile } from "../../server/api";

const Home = ()=>{

  const [file,setFile] = useState('');
  const [result,setResult] =useState('');
  useEffect(()=>{
    const getFile = async () =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await UploadFile(data);
        setResult(response.path);
      }
    }
    getFile();
  },[file])
  const uploadFile = () =>{
     document.getElementById('input-file').click();
  }

  console.log(file);
  return (
    <>
    <Navbar/>
   <div className='px-16  container flex items-center justify-center  m-auto '>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 mt-40px  flex items-center justify-center ">file-share</div>
    <div className="font-semibold text-xl mb-2 mt-40px  flex items-center justify-center ">Sharing files made easy</div>
    <p className=" text-base ml-2 flex items-center justify-center">
     Just upload the file here and open the link provided in the device you want .
     </p>
  </div>
   <div className='button flex items-center justify-center mb-4'>
       <button>
            <div className="fiveth-button" onClick={uploadFile}>
                <p >
                    Upload
                </p>
            </div>
            <input className="hidden" type="file" onChange={(e)=>{setFile(e.target.files[0])}} id='input-file' /> 

       </button>
       
       </div>
            
       <a href={result} target='_blank' className="text-white font-semibold">{result}</a> 
       
   
</div>
   </div>
   <Footer/>
   </>
  );
}

export default Home;
