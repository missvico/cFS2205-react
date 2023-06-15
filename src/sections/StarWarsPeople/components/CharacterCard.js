import "./style.css"

function CharacterCard(props){
    const id = props.person.url.split("/")[5]
    return(
        <li>
            <a href={`/starwars/${id}`}>
                <div class="character_card">
                    <h1>{props.person.name}</h1>
                    <ul>
                        <li>
                            Height: {props.person.height}
                        </li>
                        <li>
                            Mass: {props.person.mass}
                        </li>
                        <li>
                            Hair Color: {props.person.hair_color}
                        </li>
                        <li>
                            Birth Year: {props.person.birth_year}
                        </li>
                        <li>
                            Gender: {props.person.gender}
                        </li>
                    </ul>
                </div>
            </a>
        </li>
    )
}
 export default CharacterCard