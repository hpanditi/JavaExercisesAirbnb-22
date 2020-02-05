var numArray = [0189459, 0189460, 0189461, 0189463, 0189466];
var mia = numArray.reduce(function(acc, cur, ind, arr) {
    var diff = cur - arr[ind-1];
    if (diff > 1) {
        var i = 1;
        while (i < diff) {
            acc.push(arr[ind-1]+i);
            i++;
        }
    }
    return acc;
}, []);
console.log(mia);
