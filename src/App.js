import React,{useState} from 'react';
import Cell from "./components/Cell";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container:{
      display:"grid",
      gridTemplateColumns:"auto auto auto auto",
      padding: "10px"
  }
});

function App() {
  const classes = useStyles();
  const [cells,setCells] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
  const [activated,setActivated] = useState([])

  const activate = (id) =>{
    if(activated.length===0){
      setActivated([id]);
    }
    if(activated.length===2){
      let array = [activated[1],id];
      console.log("here");
      console.log(array);
      setActivated(array);
    }
    else{
      let tempArray = [...activated];
      tempArray.push(id);
      setActivated(tempArray);
      console.log(activated);
    }
    console.log(activated)
  }

  return (
    <div className={classes.container}>
      {cells.map((cell)=>{return <div onClick={()=>{activate(cell)}}><Cell id={cell} activated={activated} /></div>})}
    </div>
  );
}

export default App;
