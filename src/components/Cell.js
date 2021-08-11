import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cell:{
      width:"200px",
      height:"100px",
      backgroundColor:"blue",
      margin:"2px"
  },
  cellRed:{
    width:"200px",
    height:"100px",
    backgroundColor:"red",
    margin:"2px"
  }
});

const Cell = ({id,activated}) =>{
    const classes = useStyles();
    const [red,setRed] = useState(false);

    useEffect(()=>{
        if(activated.includes(id)){
            setRed(true);
        }else{
            setRed(false);
        }
    },[activated])

    const click=()=>{
        console.log(id);
    }

    return(
        <>
        <div className={red?classes.cellRed:classes.cell} onClick={click}>

        </div>
        </>
    )
}

export default Cell;