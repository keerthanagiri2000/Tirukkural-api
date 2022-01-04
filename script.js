async function foo(){
    try{
     let val=document.getElementById("data").value;  
     console.log(val); 
    let res=await fetch(`https://api-thirukkural.vercel.app/api?num=${val}`);
    let result=await res.json();
    console.log(result);
    console.log(`
    ${result.line1} 
    ${result.line2}
    ${result.tam_exp}
    ${result.eng.exp}
    ${result.number}`);
    
    document.getElementById("description").innerHTML=`
                                                      ${result.line1}<br>
                                                      ${result.line2}<br><br>
                                                      <b>Tamil Meaning:</b> ${result.tam_exp}<br><br>
                                                      <b>English Meaning:</b> ${result.eng_exp}<br><br>
                                                      <b>Number: </b> ${result.number}`;
    }
    catch(error){
        console.log("error");
    }
   
}
