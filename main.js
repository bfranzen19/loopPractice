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



// loop practice # 4
var months = [
  {
    name: 'January',
    days: 31
  },

  {
    name: 'February',
    days: 28
  },

  {
    name: 'March',
    days: 31
  },

  {
    name: 'April',
    days: 30
  },

  {
    name: 'May',
    days: 31
  },

  {
    name: 'June',
    days: 30
  },

  {
    name: 'July',
    days: 31
  },

  {
    name: 'August',
    days: 31
  },

  {
    name: 'September',
    days: 30
  },

  {
    name: 'October',
    days: 31
  },

  {
    name: 'November',
    days: 30
  },

  {
    name: 'December',
    days: 31
  }
]; // end of months array

// 1. Write a set of loops that will print out each day of each month in the following format: Month day for each day of the year (365 statements printed)

for(var i=0 ; i<months.length ; i++) {
  //console.log(months[i].name)
  for(var k=1 ; k<=months[i].days ; k++) {
    console.log(months[i].name + ' ' + k)
  }
}


// 2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format): hh:mm:ss should be 82,800 statements printed.

for(var i=0 ; i<24 ; i++) {
  for(var j=0 ; j<60 ; j++){
    for(var k=0 ; k<60 ; k++) {
      console.log(i + ' : ' + j  + ' : ' + k)
    }
  }
}
