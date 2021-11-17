

const names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names){
    const newArray = []
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(){ 
    let i = 10;
    while(i > -1){ 
        console.log(i--);  
    } 
}