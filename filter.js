
const keyList = ['xxx'];

function setHeadingName() {
	const hList = document.querySelectorAll('h1');
	Array.from(hList).forEach((hNode) => {
      if(hNode&&hNode.innerHTML) {
         hNode.innerHTML = filterStr(hNode.innerHTML, keyList);
      }
   })
}

function setTitleName() {
   const title = document.title;
   document.title = filterStr(title, keyList)
}


/**
 * @param {string} str 
 * @param {Array[string]} keys 
 */
function filterStr(str='', keys = keyList) {
   for (let i = 0; i < keys.length; i++) {
      let r = new RegExp(keys[i], "ig");  
      str = str.replace(r, "**");
   }
   return str;
}


function main() {
   setTitleName();
   setHeadingName();
}
main();