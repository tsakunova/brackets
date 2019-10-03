module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  for(let i=0; i< str.length; i++){
    for(let j=0;j<bracketsConfig.length; j++){
      let bracketsStr = bracketsConfig[j][0]+bracketsConfig[j][1];
      newStr=newStr.replace(bracketsStr,"");
    }
  }
  return newStr.length===0;
}