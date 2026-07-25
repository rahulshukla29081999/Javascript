//for In  --- loop ---------------------------------------------------------------------------------------------------

const myObject = {
  js: "javascript",
  cpp: "c plusplus",
  rb: "ruby",
};


for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)

}