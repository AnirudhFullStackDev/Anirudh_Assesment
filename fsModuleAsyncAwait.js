  
const fs=require('fs');
const folderName="Anirudh_Assignment";
const folderPath=`./${folderName}`;
const fileName="NodeJsAssignment.txt";
const completeFilePath=folderPath+"/"+fileName;

//////////////////////////////////////////////////////////////////////////////////////////////////

//                                     Creating a directory                                     //

//////////////////////////////////////////////////////////////////////////////////////////////////

try
{
  
    if(fs.existsSync(folderPath))
    {
        console.log(`folder with name "${folderName}" already exists at "${folderPath}" `);
    }
    else if(!fs.existsSync(folderPath))
    {
        fs.mkdirSync(folderName);
        console.log(`folder with name "${folderName}" is created at "${folderPath}" `);
    }

}
catch(error)
{
    console.log(`Error!!: ${error} `);  //catches error

}

//////////////////////////////////////////////////////////////////////////////////////////////////

//                     File creation using 'fs' module and 'async/await'                        //

//////////////////////////////////////////////////////////////////////////////////////////////////

let myPromise = new Promise(function(myResolve, myReject) 
{

    if(fs.existsSync(completeFilePath))
        {
            myResolve(`file with name "${fileName}" already exists at "${completeFilePath}"`);
        }

  //fs.writeFile() will overwrite the file unlike fs.append().

    else if(!fs.existsSync(completeFilePath))
    {
        fs.writeFile(completeFilePath,"Contents inside the file NodeJsAssignment.txt",(callBackForError)=>
        {
            if(callBackForError)
            myReject(callBackForError);   //callback function to throw error.
        
        });

        myResolve(`file with name "${fileName}" is created at "${completeFilePath}"`);
    }

});



function functionTwo() 
  {
    return myPromise;   
  }
  
  async function functionOne() 
  {
    const valueReturned = await functionTwo(); 
    console.log(valueReturned);  //value returned from promise is returned.
  }
  

  functionOne();  //Function call..