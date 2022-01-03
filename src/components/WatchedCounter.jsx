import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import styles from "../assets/css/watchCounter.module.css";

const WatchedCounter = () => {
    const watchedCounter = useSelector(state => state.watched);
    
    return (
        <Paper className={styles.paper}>
            <span>
                <p className={styles.text}> 
                    <strong> 
                        Videos watched 
                    </strong>
                </p>
                <p className={styles.number}>                     
                    {watchedCounter.counter}                   
                </p>
            </span>
            
        </Paper>
    )
}

export default WatchedCounter;