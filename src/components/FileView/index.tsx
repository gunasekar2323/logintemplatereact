import { BucketFileView } from '../../interface/buckets.interface';
import png from '../../assets/png.png';
import jpeg from '../../assets/jpg.png';
import pdf from '../../assets/pdf.png'

const FileView: React.FC<BucketFileView> = (props) => {
  const getfileType=()=>{
    switch(props.fileType){
      case 'image/png' : return png;
      case 'image/jpeg':
      case 'image/jpg': return jpeg;
      case 'application/pdf':return pdf;

    }
  }
  return (
    <div className="max-w-xs mx-2 bg-white shadow-md rounded-lg overflow-hidden cursor-pointer w-20" title={props.originalName}>
      <div className="flex justify-center items-center ">
        <span className='h-20 w-20'>
        <img className="w-full h-full object-contain transition-transform transform scale-100 group-hover:scale-105" src={getfileType()} alt="Folder"/>
        </span>
      </div>
      <div className="text-center px-1 ">
        <p className="text-black text-xs h-10 font-semibold overflow-hidden overflow-ellipsis">{props.originalName}</p>
      </div>
    </div>
  );
};

export default FileView;
