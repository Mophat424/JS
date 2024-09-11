
//QUESTION 1//
function isPalindrome(str) {    
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return normalizedStr === normalizedStr.split('').reverse().join('');
  } 
  
  console.log(isPalindrome('A man, a plan, a canal, Panama'));
  console.log(isPalindrome('Was it a car or a cat I saw'));        
  console.log(isPalindrome('Hello, World!'));                  
  

  
  //QUESTION 2//
  function reverseString(str) {
    
    return str.split('').reverse().join('');
  }
  
  
  console.log(reverseString("hello"));      
  console.log(reverseString("JavaScript"));  
  console.log(reverseString("12345"));   
  
  
  //QUESTION 3//
  
  function longestPalindromicSubstring(s) {
    if (s.length <= 1) return s;  
    let start = 0, maxLength = 1;

    
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        if (right - left + 1 > maxLength) {
          start = left;
          maxLength = right - left + 1;
        }
        left--;
        right++;
      }
    }
  
    
    for (let i = 0; i < s.length; i++) {
      expandAroundCenter(i, i);   
      expandAroundCenter(i, i + 1);
    }
  
    return s.substring(start, start + maxLength);
  }
  

  console.log(longestPalindromicSubstring('babad'));  
  console.log(longestPalindromicSubstring('cbbd'));   
  



  //QUESTION 4//
  
function areAnagrams(str1, str2) {
    
    const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '');
  
    
    return normalize(str1).split('').sort().join('') === normalize(str2).split('').sort().join('');
  }
  
  
  console.log(areAnagrams('Listen', 'Silent'));  
  console.log(areAnagrams('Hello', 'World'));    
  
  


  //QUESTION 5//

function removeDuplicates(str) {
    let seen = new Set();
    let result = '';

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}


console.log(removeDuplicates('programming'));  
console.log(removeDuplicates('hello world'));  
console.log(removeDuplicates('aaaaa'));        
console.log(removeDuplicates('abcd'));         
console.log(removeDuplicates('aabbcc'));    





//QUESTION 6//

function countPalindromes(s) {
  let palindromes = new Set(); 
 
  function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          palindromes.add(s.substring(left, right + 1));
          left--;
          right++;
      }
  }
  
  for (let i = 0; i < s.length; i++) {

      expandAroundCenter(i, i);        
      expandAroundCenter(i, i + 1);
  }

  return palindromes.size;
}

console.log(countPalindromes('ababa'));  
console.log(countPalindromes('racecar'));
console.log(countPalindromes('aabb'));  
console.log(countPalindromes('a')); 
console.log(countPalindromes('abc'));  
  



//QUESTION 7//

function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        
        while (strs[i].indexOf(prefix) !== 0)
             {

            prefix = prefix.slice(0, prefix.length - 1);
            
            if (prefix === '') return '';
        }
    }

    return prefix;
}


console.log(longestCommonPrefix(['flower', 'flow', 'flight']));  
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));     
console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])); 
console.log(longestCommonPrefix(['prefix', 'prefixes', 'preform']));  
console.log(longestCommonPrefix(['apple', 'banana', 'cherry']));  










//QUESTION 8//
function isCaseInsensitivePalindrome(str) {
    
    str = str.toLowerCase();
    
    
    return str === str.split('').reverse().join('');
  }
  
  
  console.log(isCaseInsensitivePalindrome('Aba'));      
  console.log(isCaseInsensitivePalindrome('Racecar'));   
  console.log(isCaseInsensitivePalindrome('Palindrome')); 
  console.log(isCaseInsensitivePalindrome('Madam'));      
  console.log(isCaseInsensitivePalindrome('Hello'));      
  
  



  
  
  
  
  
  
  
  
  
  
  
  