import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function StarWarsSinglePerson(){
    const [person, setPerson] = useState({})
    const {id} = useParams();

    useEffect(
        function(){
            axios({
                url: `https://swapi.dev/api/people/${id}`
            }).then(
                response => setPerson(response.data)
            )
        }
    , [id])
   
    return(
        <div class="character_card">
                <h1>{person.name}</h1>
                <ul>
                    <li>
                        Height: {person.height}
                    </li>
                    <li>
                        Mass: {person.mass}
                    </li>
                    <li>
                        Hair Color: {person.hair_color}
                    </li>
                    <li>
                        Birth Year: {person.birth_year}
                    </li>
                    <li>
                        Gender: {person.gender}
                    </li>
                </ul>
            </div>
    )
}

export default StarWarsSinglePerson;