import server from "../Api/api";
import { useEffect, useState } from "react";
import ParksListCard from "./ParksListCard";
import {Park} from "../../types/CustomTypes"



  


function ParksList(){
    const [parks, setParks] = useState<Park[]>([])

    useEffect(() => {
        server.get(`/parks`).then(({ data } ) => {
            setParks(data)
        });
    }, [])


    return (<>
        <h2>All Parks</h2>
 
       
        <ParksListCard parks={parks}/>
       
        
        
        </>)
}
export default ParksList;