class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user: Student = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

enum Direction {
	up,
	down,
	left,
	right
}

let go: Direction;

go = Direction.up;

const list: number[] = [1, 2, 3];
const objList: Array<Object> = [{}, {}];
