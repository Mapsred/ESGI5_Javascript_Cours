let methods = require('./string');

is_valid = function (method, value, expected, result) {
    let bool = result === expected;
    method = method + " - '" + value + "' ";
    const status = bool ? "OK" : "KO" + " | " + "expected : '" + expected + "' - got : '" + result + "'";
    console.log(method + status);
};

is_valid_prop_access = function (object, string, expected, result) {
    const bool = (typeof result === 'string' && result === expected) || typeof result === "object";
    const method = "prop_access - '" + expected + "' ";
    const status = bool ? "OK" : "KO" + " | " + "expected : '" + expected + "' - got : '" + result + "'";
    console.log(method + status);
};

let objects = {
    'ucfirst': [
        ['test', 'Test'],
        [' test', ' test'],
        ['Test', 'Test'],
        ['TEST', 'Test'],
        [null, ''],
        [Object, ''],
    ],
    'capitalize': [
        ['test', 'Test'],
        [' test', ' Test'],
        ['ipsum DOLOR', 'Ipsum Dolor'],
        ['sit 8met consectetur', 'Sit 8met Consectetur'],
        [null, ''],
        [Object, ''],
    ],
    'camelCase': [
        ['toggle case is the coolest', 'ToggleCaseIsTheCoolest'],
        ['toggleCase is the coolest', 'ToggleCaseIsTheCoolest'],
        ['ToggleCase is the 3oolest', 'ToggleCaseIsThe3oolest'],
        ['ToggleCase is_the coolest', 'ToggleCaseIs_theCoolest'],
        ['toggleCase', 'ToggleCase'],
        [null, ''],
        [Object, ''],
    ],
    'snake_case': [
        ['toggle case is the coolest', 'toggle_case_is_the_coolest'],
        ['toggleCase is the coolest', 'togglecase_is_the_coolest'],
        ['ToggleCase is the 3oolest', 'togglecase_is_the_3oolest'],
        ['ToggleCaseIsTheCool3st', 'togglecaseisthecool3st'],
        ['ToggleCase is_the coolest', 'togglecase_is_the_coolest'],
        [' toggleCase', '_togglecase'],
        [null, ''],
        [Object, ''],
    ],
    'leet': [
        ['anaconda', '4n4c0nd4'],
        ['leet', 'l33t'],
        ['yoda', '70d4'],
        ['evaluation', '3v4l(_)4t10n'],
        ['mon travail', 'm0n tr4v41l'],
        [' ', ' '],
        [null, ''],
        [Object, ''],
    ],
    'verlan': [
        ['anaconda', 'adnocana'],
        ['kayak', 'kayak'],
        ['yoda m Luke', 'adoy m ekuL'],
        ['70da m L(_)k3', 'ad07 m 3k)_(L'],
        [' ', ' '],
        [null, ''],
        [Object, ''],
    ],
    'yoda': [
        ['anaconda', 'anaconda'],
        ['yoda m Luke', 'Luke m yoda'],
        ['Inverser la position des mots d’une phrase', 'phrase d’une mots des position la Inverser'],
        [' ', ' '],
        [null, ''],
        [Object, ''],
    ],
    'prop_access': [
        [{"animal": {"type": {"name": "dog"}}}, 'animal.type.name', 'dog'],
        [{"animal": {"type": {"name": "dog"}}}, 'animal.type', {"name": "dog"}],
        [{"animal": {"type": {"name": "dog"}}}, 'animal.gender', "animal.gender not exist"],
        [{"animal": {"type": {"name": "dog"}}}, null, {"animal": {"type": {"name": "dog"}}}],
        [{"animal": {"type": {"name": "dog"}}}, Object, {"animal": {"type": {"name": "dog"}}}],
    ],
};

for (let object in objects) {
    let tests = objects[object];
    console.log("Checking " + object);
    for (let test in tests) {
        test = tests[test];
        if (object === "prop_access") {
            let res = methods[object](test[0], test[1]);
            is_valid_prop_access(test[0], test[1], test[2], res);
        } else {
            let res = methods[object](test[0]);
            is_valid(object, test[0], test[1], res);
        }
    }

    console.log("\n");
}