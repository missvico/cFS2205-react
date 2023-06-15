import {useEffect, useState} from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import CharacterCard from './components/CharacterCard'
import Pagination from './components/Pagination'
import "./components/style.css"


function StarWarsPeople(){
    const [people, setPeople] = useState([])
    //const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page")? searchParams.get("page"): 1

    useEffect(function(){
        axios(
            {
                url: `https://swapi.dev/api/people/?page=${page}`
            }
        ).then(response=>{
            setPeople(response.data.results)
            setTotalPages(Math.ceil(response.data.count/10))
        })
    },[page])

    const handleClick = (event)=>{
        // setPage(event.target.id)
        setSearchParams({page:event.target.id })
    }

    const handlePrevious = (event)=>{
        if(page===1) return
        setSearchParams({page:Number(page)-1})

        // setPage(Number(page)-1)
    } 
    
    const handleNext = (event)=>{
        if(page===totalPages) return
        // setPage(Number(page)+1)

        setSearchParams({page:Number(page)+1})
    }  

    return(
        <section>
            <h1>Star Wars</h1>
            <Pagination totalPages={totalPages} page={page} handleClick={handleClick} handleNext={handleNext} handlePrevious={handlePrevious}/>
            <ul class="character_list">
                {people.map(person =><CharacterCard person={person}/>)}
            </ul>
        </section>
    )
};

export default StarWarsPeople;