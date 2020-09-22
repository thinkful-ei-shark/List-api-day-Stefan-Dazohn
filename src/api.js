export default{
    getItems,
    createItem,
    updateItem,
    deleteItem
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/stefan';

function getItems()
{
    //return Promise.resolve('A sucsessful response!');
    return fetch(`${BASE_URL}/items`)
}
function createItem(name)
{
    const newItem = JSON.stringify({name});

    return fetch(`${BASE_URL}/items`,{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: newItem
    });
}

function updateItem(id,object)
{
    const newData = JSON.stringify(object);
    return fetch(`${BASE_URL}/items/${id}`,{
        method:'PATCH',
        headers: {'Content-Type':'application/json'},
        body:newData
    });
}

function deleteItem(id)
{
   return fetch(`${BASE_URL}/items/${id}`,{
       method:'DELETE'
   }) 
}
