var str1 = "abvbabbaabbba";
var str2 = "abadadafabababaaabb";

console.log("Строка А \"" + str1 + "\"");
console.log("Строка Б \"" + str2 + "\"");

var longestSubstring = function (text1, text) {
    var len1 = text1.length;
    var len2 = text.length;
    var maxValue = 0;
    var maxI = 0;
    var arr = new Array(len1);
    for (var i = 0; i < len1; i++) {
        arr[i] = new Array(len2);
        for (var j = 0; j < len2; j++) {
            if (text1[i] === text[j]) {
                if (i == 0 || j == 0) {
                    arr[i][j] = 1;
                } else {
                    arr[i][j] = arr[i - 1][j - 1] + 1;
                }
            } else {
                arr[i][j] = 0;
            }
            if (arr[i][j] > maxValue) {
                maxValue = arr[i][j];
                maxI = i;
            }
        }
    }
    return text1.substring(maxI + 1 - maxValue, maxI + 1);
};

console.log("Результат: \"" +longestSubstring(str1, str2) +"\'");
