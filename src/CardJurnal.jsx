

function CardJurnal(props) {
    return(
        <a href={props.link} rel="noreferrer" target="_blank" >
            <div className="card">
                <div className="text">
                    <h3 >{props.title}</h3> 
                    <p >{props.paragraph}</p>
                </div>
                <img src={props.img} alt=""/>
            </div>
        </a>
    )
}

export default CardJurnal