console.log('Howdy from the javascript console!');
function splitter(example){
    
    let array = example.split("")
    return array

}

function ispal(example){
    let firstHalf = example.slice(0, example.length/2);
    let half = example.slice(example.length/2, example.length);
    let thisHalf= firstHalf.split("");
    let otherHalf= half.split("");
    otherHalf.reverse();
    if (thisHalf.toString() == otherHalf.toString()) {
        console.log('This is a palindrome')
    }
    else{
        console.log(`${thisHalf} == ${otherHalf}???`)
    }
}