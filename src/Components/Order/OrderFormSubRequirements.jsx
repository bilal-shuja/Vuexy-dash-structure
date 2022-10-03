import React,{useState,useCallback} from 'react';
import {Link } from 'react-router-dom';
import {useDropzone} from 'react-dropzone'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';


const OrderFormSubRequirements = ({hide}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const Instructions = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    const[file , setFile] = useState([])




    const onDrop = useCallback(acceptedFiles => {

        console.log(acceptedFiles);
        acceptedFiles.map((items)=>{
            
            setFile((prevItems) => [
                ...prevItems,
                {
                    name:items.name
                },
            ]);
            
        })
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    const showData = ()=>{

        console.log(Instructions)
    }
    console.log(file)

    const delFile = (index)=>{
        setFile((preState) => {
            const items = [...preState];
            items.splice(index, 1);
            return items;
          });
 
    }
  return (
    <>
          <div className="app-content content ">
       <div className="content-body">
        <section className="basic-select2" >
        <div className="row" >
          <div className="col-12">
            <div className="card p-1">

                <div className="card-body">
                <div className="col-md-12 mb-3">
                    <label htmlFor=""> <h6>*Assignment Topic:</h6> </label>
                    <input type="text" className="form-control delimiter-mask" id="delimiters" placeholder="Type your topic here" onChange={(e)=>{}}/>
                    </div> 
                <div className="row">
                <div className="col-md-6">
                      <label className="form-label" htmlFor="select2-disabled-result"><h6>*Subject:</h6></label>
                      <select className="form-select" id="select2-disabled-result"
                    //   onChange={setContentCat}
                    >
                          <option value="0">Select Subject</option>
                          <option value="Java">Java</option>
                          <option value="Human Relations">Human Relations</option>
                          <option value="Fashion">Fashion</option>
                          <option value="Excel">Excel</option>



                         
                      </select>
                      
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="select2-disabled-result"><h6>*Citation Style:</h6></label>
                      <select className="form-select" id="select2-disabled-result"
                    //   onChange={setContentCat}
                    >
                          <option value="0">Select Style</option>
                          <option value="Bluebook">Bluebook</option>
                          <option value="Harvard">Harvard</option>
                          <option value="IEEE">IEEE</option>
                        </select>
                      
                    </div>
                </div>

                
                <div className="col-xl-12 col-md-6 col-sm-12 mb-2 mt-2">
                    <label className="form-label" htmlFor="blocks"> <h6>*instructions</h6> </label>
                    <Editor  
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
               
                    />
                  </div>
                  {/* onChange={(e)=>{
                      uploadImage(e)
                    }} */}

                    <div className="card">
                <h4 style={{marginTop:"10em"}}>*Upload Files</h4>
                <div {...getRootProps()} className="p-3" style={{border:"2px dashed #7367f0"}}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p className="text-center" style={{fontSize:"2em", color:"#7367f0"}}>Drop the files here <i  className="fa-solid fa-arrow-down"></i></p>
                        
                    }


                    </div>
                    {
                        file.map((items,index)=>{
                            return(
                                <>
                                <div className="col-10 mt-1" style={{boxShadow:" 2px 3px 8px 2px rgba(0,0,0,0.29)", borderRadius:"10px"}}>
                                    <div className="card p-2" style={{height:"3em"}}>
                                       <div className="d-flex align-items-center">
                                       <div className="flex-shrink-0">
                                       <i className="fa-solid fa-image" style={{fontSize:"20px"}}></i>
                                       </div>
                                       <div className="flex-grow-1 ms-3">
                                    <div className="">{items.name}</div>

                                       </div>
                                        <button className="btn btn-outline-danger btn-sm"  onClick={()=>delFile(index)}><i className="fa-solid fa-trash"></i></button>
                                        </div> 

                                    </div>
                                </div>
                                
                                   
                                </>
                            )
                        })
                    }

                    </div>
                    



                <div className="text-end mt-5">
                <button onClick={hide} className="btn btn-outline-primary col-2">Previous</button>
                <Link  to="#" onClick={showData}className="btn btn-outline-primary col-2 ms-2">Next Step</Link>

                </div>

                </div>

            </div>
            </div>
            </div>
            </section>
            </div>
            </div>
    </>
  )
}

export default OrderFormSubRequirements