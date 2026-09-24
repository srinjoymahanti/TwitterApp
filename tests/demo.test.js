function sum(a,b){
    return a+b;
}
function subtract(a,b) {
    return a-b;
}

describe("Summation test",()=>{
    test('1+2 is equals to 3',()=>{
        expect(sum(1,2)).toBe(3);
    })
    test("1+4 is not equals to 3",()=>{
        expect(sum(1,4)).not.toBe(3);   
    })
})

describe("Subtraction Test",()=>{
    test("5-4 is 1",()=>{
        expect(subtract(5,4)).toBe(1);
    })
    test("6-2 is not 1",()=>{
        expect(subtract(6,2)).not.toBe(1);
    })
})

test("String Matcher",()=>{
    var string1="i am srinjoy";
    expect(string1).toMatch(/rin/);
    expect(string1).not.toMatch(/abc/);
})

test("Number Matcher",()=>{
    var n1=10;
    var n2=-5;
    var n3=0;

    expect(n1).toBeGreaterThan(3);
    expect(n2).toBeLessThanOrEqual(0);

})

test("Equality Operator",()=>{
    var name="srinjoy";
    var n=null;

    expect(name).toBeTruthy();
    expect(n).toBeNull();
})

describe("Hooks Testing",()=>{
    var num1=1;
    var num2=2;
    
    beforeAll(()=>{
        console.log("beforeAll() is called");
    })
    afterAll(()=>{
        console.log("afterAll() is called");
    })

    beforeEach(()=>{
        console.log("beforeEach() is called")
        num1=4;
        num2=5;
    })

    test("5-4 is 1",()=>{
        expect(subtract(num2,num1)).toBe(1);
    })
    test("4+5 is 9",()=>{
        expect(sum(num1,num2)).toBe(9);
    })
})