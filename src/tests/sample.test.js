
const add = (a,b) => a+b;

const greeting = (name='Anonymous') => 'hello '+name;
test("should add two number",()=>{
    const result= add(3,4);
    expect(result).toBe(7);
});

test("should generate greeting with provided name",()=>{
    const result= greeting('jitendra');
    expect(result).toBe('hello jitendra');
});


test("should generate greeting with default name",()=>{
    const result= greeting();
    expect(result).toBe('hello Anonymous');
});