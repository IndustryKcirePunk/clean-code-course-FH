;(() => {
	// No aplicando el principip de responsabilidad unica
	type Gender = 'M' | 'F'

	class Person {
		constructor(public name: string, public gender: Gender, public birthDate: Date) {}
	}

	class User extends Person {
		constructor(
			public email: string,
			public role: string,
			private lastAccess: Date,
			name: string,
			gender: Gender,
			birthDate: Date
		) {
			super(name, gender, birthDate)
		}
	}
})()
