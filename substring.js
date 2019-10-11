function removeLastSubstring(str, substr) {
    let index = str.lastIndexOf(substr),
        removals = 0;

    while(index != -1) {
        str = str.slice(0, index) + str.slice(index + substr.length, str.length + 1);
        console.log(str); 
        index = str.lastIndexOf(substr);
        removals++;
    }
    
    return removals;
}
function removeFirstSubstring(str, substr) {
    let index = str.indexOf(substr),
        removals = 0;

    while(index != -1) {
        str = str.slice(0, index) + str.slice(index + substr.length, str.length + 1);
        console.log(str);
        index = str.indexOf(substr);
        removals++;
    }
    
    return removals;
}

console.log('Total Removals: ' + removeFirstSubstring('abbaab', 'ab'));
console.log('Total Removals: ' + removeLastSubstring('abbaab', 'ab'));
