import  './Inputbox.css';

const Inputbox = ({Inputbox,searchChange,date,days,hours,mins,secs}) => {
    return(
        <div className="display">
        <h3> Times ends on {date}</h3>
        <h1>{days} Day {hours} Hour {mins}Min {secs}Sec</h1>
        <div>
        <input type="Date" placeholder="01/01/2021" onChange={searchChange}/><br/>
        <button type="submit" onClick={Inputbox}>Start</button>
        </div>
       
   </div>
    )
   
    
    


}








export default Inputbox;

