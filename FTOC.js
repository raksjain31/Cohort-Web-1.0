function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
      
    let convertedvalue ;
    switch (scale){
        
        case "C" :
            convertedvalue = (value * 9/5) + 32;
            console.log(`${convertedvalue}°F`);
        break;  
        
        case "F":
            convertedvalue= (value - 32) * 5/9;
            console.log(`${convertedvalue}°C`);
          break;  
        
          default:
         break ;
         
        
    }
     
  }

  console.log (convertTemperature(32,'F'))
