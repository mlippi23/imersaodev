//var nome = prompt ("Digite seu nome por favor!")

function media() {
  var notaPrimeiroBimestre = parseFloat(
    document.getElementById("notaPrimeiroBimestre").value
  );
  var notaSegundoBimestre = parseFloat(
    document.getElementById("notaSegundoBimestre").value
  );
  var notaTerceiroBimestre = parseFloat(
    document.getElementById("notaTerceiroBimestre").value
  );
  var notaQuartoBimestre = parseFloat(
    document.getElementById("notaQuartoBimestre").value
  );

  var media =
    (notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre) /
    4;

  if (media >= 6) {
    document.getElementById("resultado").innerHTML =
      "<font color='green'>Você foi aprovado. <br> A sua nota foi: " +
      media.toFixed(1) +
      "</font>";
  } else {
    document.getElementById("resultado").innerHTML =
      "<font color='red'>Você foi reprovado. <br> A sua nota foi: " +
      media.toFixed(1) +
      "</font>";
  }
}
