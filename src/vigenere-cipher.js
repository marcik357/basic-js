const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt() {
    // let alfabet ={
    //   a: 0,
    //   b: 1,
    //   c: 2,
    //   d: 3,
    //   e: 4,
    //   f: 5,
    //   g: 6,
    //   h:7,
    //   i:8,
    //   j:9,
    //   k:10,
    //   l:11,
    //   m:12,
    //   n:13,
    //   o:14,
    //   p:15,
    //   q:16,
    //   r:17,
    //   s:18,
    //   t:19,
    //   u:20,
    //   v:21,
    //   w:22,
    //   x:23,
    //   y:24,
    //   z:25,
    // }

    // const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};


function encrypt(message, key) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let newStr ='';

  if (message.length > key.length) {
    key += key.substring(0, message.length - key.length)
  }
  for (let i = 0; i < message.length; i++) {
    if (alphabet.indexOf(message[i].toUpperCase()) != -1) {
      newStr += String.fromCharCode((message[i].toUpperCase().charCodeAt(0) + key[i].toUpperCase().charCodeAt(0)) % 26 + 65);
    } else {
      newStr += message[i];
    }
  }
  return newStr
}