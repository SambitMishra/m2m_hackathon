
describe("Testing App", function() {
	it("The UI should Come up", function() {
		var company = $('#company');
		company.not.toBe(null);
	});
	
	it("Dummy test cases", function() {
		expect(1).toEqual(1);
		// console.log("Testing");
	});
	
	it("Running Multiple at a single go", function() {
		expect(1).toEqual(1);
		// console.log("Testing");
	});
});