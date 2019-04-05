  function CenturyFromYear(año) {
    var siglo = Math.ceil(año/100);
    return siglo;
  }
  console.log(CenturyFromYear(1905));