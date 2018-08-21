class Person{
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new DataCue().getFullYear - this.yearOfBirth;
        console.log(age);
    }
}

const john = new Person('John', 1989, 'teacher');