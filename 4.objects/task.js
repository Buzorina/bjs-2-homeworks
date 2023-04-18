function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student = new Student('Sara', 'female', '21');


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;

}

Student.prototype.addMarks = function(...marks) {
	return this.marks ? this.marks.push(...marks) : 'expelled';

}

Student.prototype.getAverage = function() {
	return !(this.marks && this.marks.length) ? 0 :
		this.marks.reduce((acc, cur) => acc + cur, 0) / this.marks.length;

}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}