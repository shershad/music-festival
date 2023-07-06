export const FestivalData = (festivals) => {
    return (
        festivals.festivals.map( (festival, index) => (
            <li key={index}>{festival}</li>
        ))
    );
}