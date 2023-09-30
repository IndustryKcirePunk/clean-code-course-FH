;(() => {
	//* Aplicar el principio de responsabilidad única
	//* Priorizar la composición frente a la herencia

	type HtmlType = 'input' | 'select' | 'textarea' | 'radio'

	class HtmlElement {
		constructor(public id: string, public type: HtmlType) {}
	}

	class InputAttributes {
		constructor(public value: string, public placeholder: string) {}
	}

	class InputEvents {
		constructor() {}

		setFocus() {}
		getValue() {}
		isActive() {}
		removeValue() {}
	}

	//? Idea para la nueva clase InputElement

	class InputElement {
		constructor(public html: string, public attributes: string, public events: string) {}
	}

	//const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName')
})()
