/**
 * components
 * JSX
 * Props
 * State
 * Events
 * [conditional Rendering]
 * 
 * 
 *  
 * */

/*
 * 1. Just write a simple fetch with json conversion.
2. wrap the data loading component under suspense

 */

/** 
 * 1. Api: Url  ::   https://jsonplaceholder.typicode.com/users
 * 
 *  */

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));


const loadData = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.json();
    return data;
}
 */




