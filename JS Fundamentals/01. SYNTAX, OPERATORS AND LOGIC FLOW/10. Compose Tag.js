function tag(arr) {
   let location = arr[0];
   let text = arr[1];

   console.log(`<img src="${location}" alt="${text}">`)
}

tag(['smiley.gif', 'Smiley Face']);