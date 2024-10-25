const getAllProducts = async() => {
try{
    return([
        {
          "id": 1,
          "name": "Laptop",
          "price": 1500
        },
        {
          "id": 2,
          "name": "Headphones",
          "price": 200
        }
       ]);

} catch (error){
    console.log(error);
}
}

export default getAllProducts;