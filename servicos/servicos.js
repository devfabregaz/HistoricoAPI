function retornaHistorico(array) {
  return array;
}

function retornaId(array, id) {
  let resultado = array.find((a) => a.id == id);
  return resultado;
}

function retornaPorAno(array, ano) {
  let resultado = array.filter((a) => a.ano == ano);
  return resultado;
}

function authYear(ano) {
  if (!isNaN(ano)) {
    return true;
  } else {
    return false;
  }
}

function authYearNotFound(ano) {
  if (ano >= 2015 && ano <= 2023) {
    return true;
  } else {
    return false;
  }
}



export { retornaHistorico, retornaId, retornaPorAno, authYear, authYearNotFound };
