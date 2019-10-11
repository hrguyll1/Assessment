function braces(values) {
    let arr = [];
    let results = [];
    let balanced = "YES";

    for(let i = 0; i < values.length; i++) {
        if(values[i] === '(' || values[i] === '{' || values[i] === '['){
            arr.push(values[i]);
        } else{
            switch(values[i]) {
                case ')':
                    if(arr.pop() !== '(') {
                        balanced = "NO";
                        results.push("NO");
                    } else {
                        results.push("YES");
                    }
                    break;
                case '}':
                    if(arr.pop() !== '{') {
                        balanced = "NO";
                        results.push("NO");
                    } else {
                        results.push("YES");
                    }
                    break;
                case ']':
                    if(arr.pop() !== '[') {
                        balanced = "NO";
                        results.push("NO");
                    } else {
                        results.push("YES");
                    }
                    break;
            }
        }
    }

    if(arr.length > 0) {
        balanced = "NO";
        results.push("NO")
    }
    console.log(balanced)
    return results;
}

console.log(braces("{{[[(((())))]]}}"));
