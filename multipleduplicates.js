let array = [1, 2, 1, 3, 5, 6, 7, 7, 8];

array.sort();
let duplicates = [];
for (var i=0; i < array.length; i++) {
    if(array[i + 1]==array[i]){
        duplicates.push(array[i+1]);
    }
}

console.log(duplicates);
