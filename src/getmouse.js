var onetotwoflag = 0;

window.addEventListener('message', ({ data }) => {
    // console.log('i got some data!', data); // i got some data! hi!
    if (Number.isInteger(data)){
        if (onetotwoflag == 0) {
            onetotwo();
            
        }
        onetotwoflag = 1;
        exp(data);
        inc(data);
    }
  });
  
      function onetotwo() {
          document.getElementById("one").style = "display:none;";  
          document.getElementById("two").style = "display:block;"
      }

      function twotothree() {
        document.getElementById("two").style = "display:none;";  
        document.getElementById("three").style = "display:block;"
    }

