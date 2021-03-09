
function Category (props) {
    let data = props.nav;
    const list = data.map(item=> <li key={item.text}><a href={item.link}>{item.text}</a></li>)
    return(
        <div>
            <h1>Category</h1>
            <ul>
                {/*<li><a href="/cat/notebook">Ноутбуки</a></li>*/}
                {/*<li><a href="/cat/monitor">Мониторы</a></li>*/}
                {/*<li><a href="/cat/cellphone">Мобильные телефоны</a></li>*/}
                {list}
            </ul>
        </div>
    );
}
export default Category;