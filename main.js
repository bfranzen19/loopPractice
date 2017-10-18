// loop practice # 3
var students = [
  {
   name: 'Liz',
   age: 25,
   city: 'Boulder'
  },

  {
   name: 'Meghan',
   age: 27,
   city: 'Denver'
  },

  {
   name: 'Trent',
   age: 32,
   city: 'Boulder'
  },

  {
   name: 'Chelsea',
   age: 24,
   city: 'Boulder'
  },

  {
   name: 'Amir',
   age: 18,
   city: 'Denver'
  }
]; //end of students array

// output: 25 27 32 24 18
// access: age
for(var i=0 ; i<students.length ; i++) {
  console.log(students[i].age)
}

// output: Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver
// access: name, city
for(var i=0 ; i<students.length ; i++) {
  console.log(students[i].name + ', ' + students[i].city)
}

// output: Liz is from Boulder Trent is from Boulder Chelsea is from Boulder
// access: name 'is from' city
for(var i=0 ; i<students.length ; i++) {
  if(students[i].city === 'Boulder'){
    console.log(students[i].name + ' is from ' + students[i].city)
  }
}

// output: Meghan is older than 25 Trent is older than 25
// access: ages > 25
for(var i=0 ; i<students.length ; i++) {
  if(students[i].age >25){
    console.log(students[i].name + ' is older than 25')
  }
}
