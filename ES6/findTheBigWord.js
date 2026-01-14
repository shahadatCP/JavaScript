const friends = ['Rahim', 'Karim', 'Fahim', 'Mustafiz', 'Minul', 'Faruk'];


const checkFriends = (Array) =>{
    let bigName = Array[0];
    
    for(let i=1; i<Array.length; i++){
        let element = Array[i];
        if(element.length > bigName.length){
            bigName = element;
        }
    }
    return bigName;
};

const result = checkFriends(friends);

console.log(result);