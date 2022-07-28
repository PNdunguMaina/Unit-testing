const stringLength = (string) => {
    if (string.length>0 && string.length<=10){
        return string.length;
    }else{
        throw new Error ('string char count not between 0 & 10');
    }
};

const reverseString = (string) => {
    return string.split('').reverse().join('');
}



module.exports = {stringLength, reverseString};