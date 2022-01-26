const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.address.city)
console.log(person['address']['city'])
console.log(person['address'].city)

console.log(person.hobbies[1])
console.log(person['hobbies'][1])
console.log(person.hobbies.at(-2))
