import "./style.css"

function Button(props){
    return(
        <button class="btn btn-primary" onClick={props.handleClick}>{props.symbol}</button>
    )
}

export default Button;