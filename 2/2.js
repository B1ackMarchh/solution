var nums = [1,2,3,4,5,6,7];
var k = 3;
console.log("Входной массив [" + nums + "]");
console.log("Сдвиг: "+ k);
var rotate = function (arr, k) {
    k = k % nums.length;
    var temp, previous;
    for ( var i = 0; i < k; i++){
        previous = nums[nums.length-1];
        for ( var j = 0; j < nums.length; j++){
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
};
rotate(nums, k);
console.log("Выходной массив [" + nums + "]");
