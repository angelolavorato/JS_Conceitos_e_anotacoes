//EXERCÍCIOS
//1. Declare uma variável de nome weight

let weight

//2. Que tipo de dado é a variável acima?

console.log(typeof weight) // nesse caso vai ser undefined

/*
  3. Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    *age: Number (interger)
    *stars: Number (float)
    *isSubscribed: Boolean

*/

let name = 'Angelo'
let age = 32
let stars = 4.5
let isSubscribed = true

/*4. A variável student abaixo é de que tipo de dados?
  4.1 Atrubua a ela as mesmas propriedades e valores do exercício 3.
  4.2 Mostre no console a seguinte mensagem: 
      <name> de idade <age> pesa <weight> kg.

      Atenção, substitua <name> <age> <weight> pelos valores de cada propriedade do objeto

*/

let student = {
  name: 'Angelo',
  age: 32,
  weight: 78.8,
  isSubscribed: true
}

console.log(student)

//4.2 RESPOSTA

console.log(
  '${student.name} de ${student.idade} age pesa ${student.weight} kg.'
)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio

let students = []

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [student]

//7. Coloque no console o valor da posição zero do array acima

console.log(students[0])

//8. Crie um novo student e coloque ele na posição do Array students
const jao = {
  name: 'Jao',
  age: 23,
  weight: 59.55,
  isSubscribed: true
}

students[1] = jao
console.log(students)

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
/*
console.log(a)
var a = 1
*/

//9. R- nesse momento a impressão vai ser "undefined" pois a variável a não foi criada antes do console.log(), mas ela vai sofer o Roisting (elevação)
