import {useParams} from "react-router-dom";
function CategoryDescription() {
    let {Name} = useParams();
    return(
        <div>
            <a href="/cat">Hазад</a>
            <h1>Category: {Name}</h1>
        </div>
    )
}
export default CategoryDescription;