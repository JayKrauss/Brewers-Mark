import react from 'react';

const beerColor = () => {
    // var EBC = $("#beerebc").attr("value");
    var EBC = 10;
      if (EBC <= 11) {
        document.getElementById("beer").style.background="linear-gradient(white, rgb(184, 123, 28, .95),rgb(184, 123, 28, .95),rgb(184, 123, 28, .95), rgb(184, 123, 28, .95),rgb(184, 123, 28, .95))";
        document.getElementById("pour").style.background="linear-gradient(rgb(184, 123, 28), rgb(184, 123, 28),white)";
      }
      else if ((EBC > 11) && (EBC <= 19)) {
        document.getElementById("beer").style.background="linear-gradient(white, 	rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95),	rgb(191, 136, 21, .95))";
        document.getElementById("pour").style.background="linear-gradient(	rgb(191, 136, 21, .95), 	rgb(191, 136, 21, .95), white)";
      }
      else if ((EBC >= 20) && (EBC <= 28)) {
        document.getElementById("beer").style.background="linear-gradient(white, 	rgb(114, 46, 24, .95),	rgb(114, 46, 24),	rgb(114, 46, 24), 	rgb(114, 46, 24),	rgb(114, 46, 24))";
        document.getElementById("pour").style.background="linear-gradient(	rgb(114, 46, 24), 	rgb(114, 46, 24),white)";
      }
      else if ((EBC > 28) && (EBC <=36)) {
        document.getElementById("beer").style.background="linear-gradient(white,rgb(55, 30, 17, .95),rgb(55, 30, 17, .95),rgb(55, 30, 17, .95),rgb(55, 30, 17, .95),rgb(55, 12, 30, .95))";
        document.getElementById("pour").style.background="linear-gradient(#4b0c11,rgb(55, 12, 17), white)";
      }
      else if (EBC > 36){
        document.getElementById("beer").style.background="linear-gradient(white, rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), rgb(21, 9, 1, 1))";
        document.getElementById("pour").style.background="linear-gradient(rgb(21, 9, 1, 1), rgb(21, 9, 1, 1), white)";
    }
}

export default beerColor;
