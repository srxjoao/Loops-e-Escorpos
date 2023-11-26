//atv-1
const frase = "Oía o tanto de atividade de algoritmos, "
const frase2 = "E agr? senta é chora,  "
const frase3 = "Puta que pariu prova de quimica, "
const frase4 = "o menina besta "
console.log(frase+frase2+frase3+frase4)


//atv-2
    //1 a 10
    for (let i = 1; i < 10; i++){
        console.log(i)
    }
   //10 a 20
    for (let i2 = 10; i2 < 21; i2++){
        console.log(i2)
    }
   //10 a 0
    for (let i3 = 10; i3 > -1; i3--){
        console.log(i3)
    }


    //atv-3
    let input = "Te ajudo Rayssa"
let ajudo = []
ajudo.push(input)
console.log(ajudo)


/*atv-4*/
//Exemplo1

let numeros = [22, 5, 46, 0.8, 12, 9, 9]
let menor = 0.8
for(let i = 0; i < numeros.length; i++){
  menor = numeros <= i 
}
console.log(menor)

//Atv 5
let number = [1, 3, 4, 41]
let soma = 0
for (let n3= 0; n3 < number.length; n3++){
  soma = soma + number[n3]
}
console.log(soma)

//Atv 6
let conjuntos = [-2, 4, 115, 8, 9, 76]
let atual = 56
let antes = 4
for (let n = 0; n < conjuntos.length; n++){
  console.log( conjuntos[n])
}

//Atv 7
let mud = function(n){
    if (n < 0){
      return (n * -1)
    }
  }
  let removeN = function(num){
    if (num > 0){
      return false
    }
  }
  let valor = function(number){
    if (number > 0){
      return number 
    }
  }
  let nums = [-3, 0, 66, 2, 3]
  console.log(nums.filter(mud))

  let nums2 = [28, 67, -34, -7, 9]
  console.log(nums2.filter(mud))

  let nums3 = [-2, -4, -9, -45, 40]
  console.log(nums3.filter(mud))

  //Atv 8
  const con = [12, 45, 516, 78];
  function muds(arr, from, to){
    var elemento = arr[from];
    arr.splice(from, elemento);
    arr.splice(to, 0, elemento);
  };

  muds(con, 3, 0)
  console.log(con)


  const con2 = [2, 4, 262, 1];
  function muds(arr, from, to){
    var elemento = arr[from];
    arr.splice(from, elemento);
    arr.splice(to, 0, elemento);
  };

  muds(con2, 3, 0)
  console.log(con2)


  const con3 = [03, 4, 9, 55];
  function muds(arr, from, to){
    var elemento = arr[from];
    arr.splice(from, elemento);
    arr.splice(to, 0, elemento);
  };

  muds(con3, 3, 0)
  console.log(con3)

  //Atv9
  let conj = [10, 677, 8, 90, 3, 45]
  conj.sort(function(atv, alg) {
    return atv - alg;
  });
  console.log(conj)


  let conj2 = [1, 8, 88, 54, 7]
  conj2.sort(function(a, b) {
    return a - b;
  });
  console.log(conj2)


  let conj3 = [5, 4, 3, 2, 1]
  conj3.sort(function(a, b) {
    return a - b;
  });
  console.log(conj3)


  //Atv10
  let j = [17, 08, 1234]
  let o= [10, 01, 1987]
  let ã = [17, 12, 1974]
  let p= [23,01,1967]
  console.log(j)
  console.log(o)
  console.log(ã)
  console.log(p)


  //Atv11
  let conju = [11, 7, 8, 90, 53, 45]
for (let n = 0; n < conju.length; n++){
  console.log(conju[n])
}

let conju2 = [233, 87, 0, 12, 7]
for (let n = 0; n < conju2.length; n++){
  console.log(conju2[n])
}

let conju3 = [13, 132, 79, 25, 34]
for (let n = 0; n < conju3.length; n++){
  console.log(conju3[n])
}