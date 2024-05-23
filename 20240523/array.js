let fruits = ["사과", "바나나", "배", "딸기", "멜론", "망고", "키위"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// splice
// 삭제, splice(시작인덱스, 갯수, 새로 추가하는 아이템)
// 원본을 수정함!!! 사용에 주의해야함
const 삭제아이템 = fruits.splice(3, 2, "구아바");
console.log(fruits); // 원본수정됨.
console.log(삭제아이템);

let colors = ["red", "blue", "yellow", "green", "white", "pink"];
// slice
// 선택담기, slice(시작인덱스, 끝인덱스)
// 원본 보존!!
const newColors = colors.slice(1, 4);
console.log(colors);
console.log(newColors);

// indexOf
const index = colors.indexOf("blue");
console.log(index);
console.log(colors.indexOf("black")); // 없을때는 -1 출력

// includes
const isIncludes = colors.includes("green");
console.log(isIncludes);
console.log(colors.includes("black"));

// forEach
// 배열에 사용하는 반복문
colors.forEach((color, index, array) => {
  console.log("첫번째매개변수", color);
  console.log("두번째매개변수", index);
  console.log("세번째매개변수", array);
});

//객체와 배열
const persons = [
  { name: "michael", age: 19, gender: "male", job: "student" },
  { name: "John", age: 28, gender: "male", job: "engineer" },
  { name: "Ellen", age: 22, gender: "female", job: "programmer" },
  { name: "Sarah", age: 27, gender: "female", job: "lawyer" },
];
console.log(persons[0].age);
console.log(persons[1].job);

// Destructuring 구조분해할당
// 배열 또는 객체의 내부아이템을 분해해서 새로운 변수에 할당하는 간편한 방법
const [마이클, 존, 엘렌, 사라] =
