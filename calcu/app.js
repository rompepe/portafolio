
 function operaciones() {
    let operaciones = document.getElementById("operacion").value;
    let dato1 = document.getElementById("numero1").value;
    let dato2 = document.getElementById("numero2").value;
  
    if (dato1 == "") {
      document.getElementById("numero1").focus();
      document.getElementById("numero1").classList.add("is-invalid");
      document.getElementById("numero1").classList.remove("is-valid");
    } else if (dato2 == "") {
      document.getElementById("numero2").focus();
      document.getElementById("numero2").classList.add("is-invalid");
      document.getElementById("numero2").classList.remove("is-valid");
    } else if (operaciones === "defe") {
      document.getElementById("operacion").focus();
      document.getElementById("operacion").classList.add("is-invalid");
    }
  
    if (operaciones == "suma") {
      let resultado = parseInt(dato1) + parseInt(dato2);
      console.log(`El resultado de la suma es: ${resultado}`);
      document.getElementById("total").innerText = `El resultado de 
      la operacion entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`;
    }
    if (operaciones == "resta") {
      let resultado = parseInt(dato1) - parseInt(dato2);
      console.log(resultado);
      document.getElementById("total").innerText = `El resultado de la 
          resta entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`;
    }
    if (operaciones == "multi") {
      let resultado = parseInt(dato1) * parseInt(dato2);
      console.log(resultado);
      document.getElementById("total").innerText = `El resultado de 
      la multiplicacion entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`;
    }
  
    if (operaciones == "divi") {
      let resultado = parseInt(dato1) / parseInt(dato2);
      console.log(resultado);
      document.getElementById("total").innerText = `El resultado de
      la division entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`;
    }
    if (operaciones == "expo") {
      let resultado = parseInt(dato1) ** parseInt(dato2);
      console.log(resultado);
      document.getElementById("total").innerText = `El resultado de 
      la exponenciacion entre (" ${dato1} ") y (" ${dato2} ") es = ${resultado}`;
    }
    if (dato1 != "" && dato2 != "" && operaciones != "defe") {
      document.getElementById("numero1").value = "";
      document.getElementById("numero2").value = "";
      document.getElementById("operacion").value = "defe";
      document.getElementById("numero1").classList.remove("is-invalid");
      document.getElementById("numero2").classList.remove("is-invalid");
      document.getElementById("operacion").classList.remove("is-invalid");
    }
  }