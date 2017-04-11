describe('fizzbuzz',function() {
  var fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
    });
    describe('knows when a number is', function() {

      it('will print fizz when given 3', function() {
        expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true)
      });

      it('Will print buzz when given 5', function() {
        expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true)
      });

      it('will print fizzbuzz when given 15', function() {
        expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual(true)
      });
    });
    describe('when playing, says', function() {
      it('"Java" when a number is divisible by 3', function() {
        expect(fizzbuzz.says(3)).toEqual("Fizz");
      });

      it('"Buzz" when a number is divisible by 5', function() {
        expect(fizzbuzz.says(5)).toEqual("Buzz");
      });

      it('"Buzz" when a number is divisible by 15', function() {
        expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
      });
    });
});
