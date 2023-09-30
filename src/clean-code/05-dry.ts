class Product {
	constructor(public name: string) {
		console.log(this)
	}
}

;(() => {
	const bluePants = new Product('Blue large Pants')
	console.log(bluePants)
})()
