      var plus = function(v,z) {
        var rabatt = parseFloat(v.value)/100*parseFloat(z.value);
        window.alert(String(rabatt)+" = Rabatt\n"+String(parseFloat(v.value)-rabatt)+" = Preis")
      };
      var v = document.querySelector('#vname');
      var z = document.querySelector('#zname');
      var xbutton = document.querySelector('#xbutton');
      xbutton.addEventListener('click',function(){
        plus(v,z);
      });