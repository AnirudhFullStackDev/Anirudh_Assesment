
    let myPromise = new Promise(function(myResolve, myReject) 
    {
        name_="Anirdh";
        if (name_=="Anirudh") 
        {
            myResolve("Program successfully executed!");
        } 
        else 
        {
            myReject(`Access denied for ${name_}`);
        }
        
    });

    //calling the promise...
    
    // this is executed when promise is been resolved
    myPromise.then(
    function(value) {console.log(value);}
    );
    // this is executed only if an error is caught/promise is rejected
    myPromise.catch(
    function(val) {console.log(val);}
    );
