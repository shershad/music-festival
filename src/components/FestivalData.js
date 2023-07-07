export const FestivalData = (festivals) => {
    return (
        festivals.festivals.map( (festival, index) => (
            <li key={index}><small>Festival: </small><label className="festival-label">{festival}</label></li>
        ))
    );
}