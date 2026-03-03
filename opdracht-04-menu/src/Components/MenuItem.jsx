
const MenuItem = ({ item }) => {
    return (
        <div className="menu-item">
            <img src={item.img} />

            <div className="content">
                <div className="item-heading">
                    <p>{item.title}</p>
                    <p>€{item.price}</p>
                </div>

                <p className="desc">{item.desc}</p>
            </div>
        </div>)
}

export default MenuItem;