# 함수형 프로그래밍이란?

[reference latentflip](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

[jsConf에서 이벤트 루프에 ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

함수형 프로그래밍은 다름 함수의 파라미터로 넘길 수도 있고,
반환 (return) 값으로 함수를 받을 수도 있는 프로그래밍 형태이다.

함수형 프로그래밍에서, 우리는 함수라는 용어 하에서 생각하고 코딩하게 된다.

# 퍼스트 클래스(First-Class)함수

자바스크립트가 함수를 일급 시민(first-class citizen)으로 대해준다는 것을 들어봤을 것이다.
왜냐하면, 자바스크립트 또는 다른 함수형 프로그래밍 언어 함수들은 전부 Object(객체)이기 때문이다.

JavaScript에서 함수는 객체의 특별한 타입이다. 함수는 Function 객체다.
예를 들면,

```js
function greeting() {
  console.log("Hello World");
}

// 함수 호출하기.
greeting(); // prints 'Hello World'
```

JavaScript에서 함수가 오브젝트 인것을 증명하기 위해서, 우리는 다음과 같은 코드를 작성할 수 있다.

```js
greeting.lang = "English";

// Prints 'English'
console.log(greeting.lang);
```

알아둘 것 - 위 문법은 자바스크립트에서 완전히 유효한 문법인 반면에, 위와 같이 코드를 작성하는 것은 매우 위험하게 여겨지고 있습니다

_함수 Object에 랜덤한 property를 추가하지 않는 것이 좋다. 만약에 사용해야 한다면, Object를 사용하는 것이 좋다._

자바스크립트에서, object, string, number와 같은 타입으로 할 수 있는 것은, 함수로 할 수 있다.

함수를 파라미터로 다른 함수에 넘길수도 있고 (callback),
함수를 다른 변수에 할당하거나 다른 곳으로 넘길 수 있다.
이러한 특성 때문에 자바스크립트에 존재하는 함수들이 퍼스트 클래스 함수라 불린다.

summary =>
함수를 파라미터로 다른 함수에 전달 할 수 있다(callback)
함수를 다른 변수에 할당하거나, 다른 곳으로 넘길 수 있다.

### 함수를 변수에 할당하기

우리는 자바스크립트에서 함수를 변수에 할당할 수 있습니다.

ex) 함수를 변수에 할당하기

```js
// 함수를 변수에 할당하기
// function(){return x * x} 를 square 변수에 할당한다.
// square === f(x){return x * x}
// square() === NaN
// square(5) === f(5){return 5 * 5} // 25

const square = function(x) {
  return x * x;
};

// prints 25
square(5);
```

### 함수를 여러 곳에 넘길 수도 있다.

```js
// 함수를 여러 곳에 넘길 수도 있다.

const foo = square;

// prints 36
foo(6);
```

### 함수를 여러 곳에 파라미터로 넘기기

말 그대로, A함수 파라미터에 B, C, D 함수를 전달 할 수 있다.  
summary => 해당 함수 파라미터 자리에 매핑한다.

```js
function add() {
  console.log("add");
}
function minus() {
  console.log("minus");
}
function divide() {
  console.log("divide");
}
function A(type, addFn, minusFn, divideFn) {
  if (type === "add") {
    return addFn();
  } else if (type === "minus") {
    return minusFn();
  } else if (type === "divide") {
    return divideFn();
  }
}
console.log(A("add", add, minus, divide)); // add
console.log(A("minus", add, minus, divide)); // minus
console.log(A("divide", add, minus, divide)); // divide
```

```js
// 함수를 여러 곳에 파라미터로 넘길 수 있다.

function formalGreeting() {
  console.log("How are you?");
}

function casualGreeting() {
  console.log("What's up?");
}

function greet(type, greetFormal, greetCasual) {
  if (type !== "formal" && type !== "casual") {
    return `The type should be "casual" or "fomal"`;
  }

  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}

// prints "What's up?"
greet("casual", formalGreeting, casualGreeting);
```

## 고차 함수(Higher-Order Function)

고차함수는 함수를 인자로 받거나, 함수를 반환함으로써 작동하는 함수다.
간단히 말하자면,

고차 함수는

1. 함수를 인자로 받거나
2. 함수를 출력(output)으로 반환(return)하는 함수를 말한다.

예를 들면, Array.prototype.map, Array.prototype.filter 그리고
Array.prototpye.reduce가 언어 내부에 built-in 포함된 고차함수다.

고차 함수의 동작.

먼저, 내부적(built-in) 고차 함수의 예제부터 확인한 뒤,
고차함수를 사용하지 않았을 때의 솔루션과 비교해보자.

### Array.prototype.map

map() 메소드는 입력으로 들어온,
배열 내 모든 엘리먼트를 인자로 제공받는
콜백함수를 호출함으로써 새로운 배열을 만들어낸다.

map()으로 넘겨진 콜백함수는 3가지를 인자를 받는다.

1. element
2. index
3. array

```js
[1, 2, 3].map(v => v + 1); // [2, 3, 4]
```

Example #1

우리가 숫자가 들어있는 배열을 가지고 있고 각각의 숫자 값이 2배가 된 배열을 만들길 원한다고 해보자.  
고차 함수(Higher-Order function)가 없을 때와 있을 때,  
각각 우리가 문제를 어떻게 해결할 수 있는지 확인해보자.

```js
// 고차 함수가 아닌 함수로 작성
const arr1 = [1, 2, 3];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2); // [2, 4, 6]
```

```js
// 고차 함수
// 함수를 인자로 전달해서, 함수를 반환한다.
const arr1 = [1, 2, 3];

const arr2 = arr1.map(function(item) {
  return item * 2;
});

console.log(arr2); // [2, 4, 6]
```

```js
// Arrow function
// 화살표 함수 문법을 이용하면 훨씬 짧게 작성 가능하다.

const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);
```

Example #2  
우리가 사람들의 생일을 가지고 있는 배열을 가지고 있고,  
우리는 그 배열을 이용하여 그들의 나이를 계산하고 싶다.

```js
// 고차함수가 아닌 함수
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];

for (let i = 0; i < birthYear.length; i++) {
  let age = 2020 - birthYear[i];
  ages.push(age);
}

console.log(ages);
```

```js
// 고차함수
const birthYear = [1975, 1997, 2002, 1995, 1985];

function birthAge(year) {
  return 2020 - year;
}
let ages = birthYear.map(birthAge);
console.log(ages);
```

```js
// 고차함수 arrow function
const birthYear = [1975, 1997, 2002, 1995, 1985];

let ages = birthYear.map(year => 2020 - year);

console.log(ages);
```

### Array.prototype.filter

filter() 메소드는 콜백 함수에 의해 제공된 테스트를 통과한 모든 엘리먼트를 가진 새로운 배열을 만들어낸다.
filter()로 넘겨진 콜백함수는 3가지 인자를 받는다.

1. element
2. index
3. array

Example #1  
우리가 이름과 나이 프로퍼티를 가진 오브젝트를 가지고 있다고 해보자.  
우리는 18살 이상의 사람만 필터링된 새로운 배열을 만들고 싶습니다.

```js
// 고차 함수가 아닌 함수로 작성
const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 }
];

const fullAge = [];

// 18세 이상만 필터링해서 배열로 보여주기
for (let i = 0; i < persons.length; i++) {
  if (persons[i].age >= 18) {
    fullAge.push(persons[i]);
  }
}
console.log(fullAge);
```

```js
// 고차 함수로 작성

const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 }
];

const fullAge = persons.filter(function(person) {
  return person.age >= 18;
});
console.log(fullAge);

// Arrow Function
// const fullAge = persons.filter(v => v.age >= 18);
```

### Array.prototype.reduce

_parameter = 매개변수, argument = 인자_

```
reduce()는 호출하는 배열의 각각의 멤버에 대해서 콜백함수를 실행하고,
하나의 결과 값만 내보낸다.

reduce()는 2가지 파라미터를 받는다.

1. reducer 함수 (콜백)
2. 초기값(initialValue) 옵션

reducer(callback) 함수는 4가지 파라미터를(변수) 받는다.

1. accumulator
2. currentValue
3. currentIndex
4. sourceArray

만약 initialValue가 제공되었다면,
그 후에 accumulator는 initialValue와 같아지고
currentValue는 배열의 [0] 값ㄴ과 동일할 것이다.

만약 intialValue가 제공되지 않았다면,
그 후에 accumulator는 배열의[0] 값과 동일해지고
currentValue는 배열의[1] 값과 같아질 것입니다.

summary =>
initialValue가 있으면,
accumulator는 initialValue와 같아진다.
currentValue는 배열의 첫번 째 값과 같아진다.

intialValue가 제공되지 않았다면,
그 후에 accumulator는 배열의 처음 요소와 동일해지고
currentValue는 배열의 두번째 요소와 같아질 것입니다.
```

Example #1

숫자 배열의 합을 구하는 예제를 만들어봅시다.

```js
// 고차 함수로 작성
// no initial Value
const arr = [5, 7, 1, 8, 4];

const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
  // 5 + 7 + 1 + 8 + 4
});

// prints 25
console.log(sum);
```

_배열 내부의 각 값에 대해 리듀서 함수가 호출되는 모든 순간에,  
*accumulator는 리듀서 함수로부터 반환된 이전 연산의 결과를 갖고 있다.*  
*그리고 currentValue는 배열의 현재 값으로 세팅된다.*
마지막에, 결과 값은 sum 변수에 저장된다._
_우리는 이 함수에 초기 값(initialValue)을 제공하는 것도 가능하다._

summary => previuos + current  
previous(initialValue) + current  
previous는 이전 연산의 결과를 가지고 있다.

reduce는 2가지 파라미터를 받는다.

1. reducer (4 parameters)
2. initailValue

Reducer 콜백함수는 4가지 parameters 받는다.

1. accumulater(pervious value)
2. currentValue
3. currentIndex
4. sourceArray

```js
// initalValue
const arr = [5, 7, 1, 8, 4];

const sum = arr.reduce(function(
  accumulator,
  currentValue,
  currentIndex,
  sourceArray
) {
  return accumulator + currentValue;
  10 + 5 + 7 + 1 + 8 + 4;
},
10);

// prints 35
console.log(sum);
```

```js
// 고차 함수가 아닌 함수로 작성

const arr = [5, 7, 1, 8, 4];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
```

### 우리만의 고차함수 만들기

이 지점까지, 우리는 자바스크립트 내부에 작성되어 있는 다양한 고차 함수를 보았다.  
이제 우리만의 고차함수를 작성해보자.

자바스크립트에 네이티브한 map 메소드가 없었다고 상상해보자.
우리는 스스로 만들어낼 수 있다. 우리만의 고차 함수를 만들어보자.

우리가 문자열의 배열을 가지고 있다고 하고 우리는 이 배열을 정수의 배열로 바꾸고 싶다.
여기서 정수는 기존 배열에 존재하던 각각의 문자열의 길이를 표현하고 싶다.

```js
const strArray = ["Javascript", "Python", "PHP", "Java", "C"];

function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});

// prints [10, 6, 3, 4, 1]
console.log(lenArray);
```

```
위의 예제에서, 우리는 배열과 콜백함수 fn을 받는 고차 함수 mapForEach를 만들었다.
이 함수는 제공받은 배열을 반복하고 newArray.push 함수 내부에서 각각의 반복마다 콜백 함수 fn을 호출한다.

콜백 함수 fn은 배열의 현재 요소를 받고 newArray의 내부에 저장된 요소의 길이를 반환한다.

for 루프가 끝난 이후에, newArray가 반환되고, lenArray에 할당된다.
```

고차 함수는 일반적인 함수인데 함수를 인자로 받고  
함수를 반환할 수 있는 추가적인 기능을 가진 것이라고 이해하면된다.
