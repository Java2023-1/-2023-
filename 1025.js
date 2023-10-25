//2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

//3.Looping
//a.for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[1]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. addition, deletion, copy
//push: add an item to the end
fruits.push('사과', '바나나');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('사과', '바나나');
console.log(fruits);

//shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//splice: remove an item by index position
fruits.push('사과', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '수박', '청사과');
console.log(fruits);

//combine two arrays
const fruits2 = ['배','코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛'));

//includes
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛'));

//lastIndexof
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));

//01. make a string out of an array
{
    const fruits =['사과', '바나나', '오렌지'];
    const result =fruits.join(',');
    console.log(result);
}

//02. make an array out of string
{
    const fruits ='사과, 키위, 바나나, 체리';
    const result = fruits.split(',');
    console.log(result);
}

//03. make this array look this: [5,4,3,2,1]
{
    const array =[1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}