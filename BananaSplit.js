function BananaSplit(n) {
    for(let i = 1; i<= n; i++) {
      // check if num a multiple of 2 and 3
      if (i%6 == 0) {
        console.log("BananaSplit"); 
      }else if (i%2 == 0) {
        // multiple of 2
        console.log("Banana"); 
      }else if (i%3 == 0) {
        // multiple of 3
        console.log("Split"); 
      }else{
        // neither 2 nor 3
        console.log(i); 
      }
    }
}


console.log(BananaSplit(100));