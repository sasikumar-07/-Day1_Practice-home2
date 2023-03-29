function Task()
{
    let age=18;
    let name="Kiran";
    let setStatus=false;
    let userdefault = undefined;
    let responseValue = null;
    console.log(age);
    console.log(name);
    console.log(setStatus);
    console.log(userdefault);
    console.log(responseValue);
   
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age);
    console.log(setStatus);
    const hi=()=>{alert("Check the console output!!")}
    return <div>
        Primitive Data Types copy the values<br></br>
        <button onClick={hi}>Primitive Data Types</button>
        </div>

}
ReactDOM.render(<Task/>,document.getElementById('mydiv'))
