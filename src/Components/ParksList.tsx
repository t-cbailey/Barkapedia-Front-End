import server from "../Api/api";
import { useEffect, useState } from "react";
import ParksListCard from "./ParksListCard";
import {Park} from "../../types/CustomTypes"

const defaultPark: Park = {
    id: "",
    name: "",
    desc: "",
    size: 0,
    current_average_rating: 0,
    current_review_count: 0,
    features: [],
    opening_hours: {},
    address: {
      firstLine: "",
      secondLine: "",
      postCode: "",
      city: ""
    },
    location: {
      long: "",
      lat: ""
    },
    image_url: "",
    website_url: "",
    phone_number: ""
  };

  interface ParkProps {
    park:Park
  }


function ParksList(){
    const [parks, setParks] = useState<Park>(defaultPark)

    useEffect(() => {
        server.get(`/parks`).then(({ data } ) => {
            setParks(data)
        });
    }, [])


    return (<>
        <h2>All Parks</h2>
 
       
        <ParksListCard/>
       
        
        
        </>)
}
export default ParksList;