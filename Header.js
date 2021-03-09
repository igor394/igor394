function Header(props) {
    let data = props.nav;
    const list = data.map(item => <li key={item.text}><a href={item.link}>{item.text}</a></li>)
    return (
        <nav>
            <ul>
                {/*<li><a href="/">ГЛАВНАЯ</a></li>*/}
                {/*<li><a href="/about">О сайте</a></li>*/}
                {/*<li><a href="/cat">Категории</a></li>*/}
                {list}
            </ul>
        </nav>
    );
}
export default Header;