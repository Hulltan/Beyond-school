/**
 * @description variaveis
 */


/*  
 var name = 'Jesulen'
 var age = 24

 //let name = 'Jesulen'
 //let age = 24

 // const só pode ser atribuído valor uma vez, no momento da criação
 //const name = 'Jesulen'
 //const age  = 24 

 console.log('Name: ', name)
 console.log('Age: ', age) 
 */
 

/**
 * @description Operações lógicas e booleanas
 */

 /* 
 let ano, idade
 ano = 2020
 idade = 24
 const nascimento = ano - idade
 console.log('Jesulen nasceu em ', nascimento)

 let likePacoca, hasPacoca
 likePacoca = true
 hasPacoca = false
 let pacocaServida = likePacoca && hasPacoca
 console.log('Pacoca servida?', pacocaServida) 
 */

 /**
  * @description if/else, ternário, switch, valores falsos e verdadeiros
  */

/*  let likePacoca, hasPacoca
 likePacoca = true
 hasPacoca = true


if (likePacoca) {
    console.log('certo')
} else if (likePacoca && hasPacoca) {
    console.log('Feliz')
} else {
    HTMLFormControlsCollection.log('Triste')
}

let servido = hasPacoca ? 'Sim, servido' : 'Nao, nao servido'
console.log(servido)

let idadeJesulen = 23
let idadeThami = 24
const jesulenMaisVelho = idadeJesulen > idadeThami

switch(jesulenMaisVelho){
    case true:
        console.log('Jesulen e mais velho')
        break
    case false:
        console.log('Thami e mais veha')
        break
    default:
        console.log('Indeterminado')
        break
} */

/**
 * @description Objetos
 */

/* 
 const person = {
     name: 'Jesulen',
     age: 23
 }

 const food = {
    name: 'Pizza'
 }

 const aluno = person
 aluno.name = 'Thami'
 console.log('Person', person) */

 /**
  * @description Arrays
  */

 // Arrays podem conter varios tipos de daos por ser um objeto
 /* 
 const arr = ['Jesulen', 23, person]
 console.log(arr) */


/**
  * @description Funções
  */
/* 
  function joiner (...arr){
      const result = arr.join(', ')
      return result
  }

  let result = joiner(["Jesulen", "Thami"])
  console.log(result)

  function fullName(firstName, lastName){
      return firstName + ' ' + lastName
  }

  result = fullName(...['Jesulen', 'Silva'])

  console.log(result) */

/**
 * @description Loops
 */
/* 
 const person = {
    name: 'Jesulen',
    age: 23
 }
 const arr = ['Jesulen', 'Vicente']

 for(let i = 0; i < 6; i++){
     console.log(i)
 }
 // for ... in 
 for (e in person) {
     console.log(e, person[e])
 }

 // for ... of - Ideal para arrays, pois sempre vai do meenor índice pro maior
 for (let e of arr) {
     console.log(e)
 }

 // forEach

 function show(name){
     console.log(name)
 }

 arr.forEach(show) */

 /**
  * @description Escopo
  */

  let age = 23
  if (age >= 18){
      const name = "Jesulen"
      console.log(`${name} e adulto`)
  }