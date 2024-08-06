import { useState, useEffect } from 'react';

function List({ getItems }) {
    const [items, setItems] = useState([]);
        
    useEffect(() => {
        setItems(getItems());
        console.log("The items have been updated");
    }, [getItems]);

    return (
        <>
            {items.map(item => <div key={item}> { item } </div>)}
        </>
    );
}

export default List;