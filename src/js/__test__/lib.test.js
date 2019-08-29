import {findZodiac} from "../lib.js";

test('function must work', () =>{

    const birthday = new Date(0,10,3);
    const expected = "Скорпион (24 октября- 22 ноября)";

    const result = findZodiac(birthday);
    expect(result).toBe(expected);


});