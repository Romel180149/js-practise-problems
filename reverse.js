// 
function reverseWords(str){
    const words = str.split('   ');
    const result = [];
    

    for(let i = words.length-1;i>=0;i--)
   {

    const element = words[i];
    
  result.push(element);
    console.log(words);
   }
   const reversed = result.join(' ')
}
const myString = 'I am a good boy';
reverseWords(myString);