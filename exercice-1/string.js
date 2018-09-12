var string = "hello world";
var object = {"animal": {"type": {"name": "dog"}}};


function verify(string) {
    return !(string === null || string instanceof Object);
}

function ucfirst(string) {
    if (!verify(string)) {
        return string;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string) {
    return string.toLowerCase().replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    });
}

function camelCase(string) {
    return capitalize(string).replace(' ', '');
}

function snake_case(string) {
    return string.toLowerCase().replace(' ', '_');
}

function leet(string) {
    if (!verify(string)) {
        return string;
    }

    var alphabets = {a: "4", e: "3", i: "1", o: "0", u: "(_)", y: "7"};

    Object.keys(alphabets).map(function (key) {
        string = string.replace(new RegExp(key, 'g'), alphabets[key]);
    });

    return string;
}

function prop_access(object, string) {
    var props = string.split('.');
    var updated_string = [];

    for (var prop in props) {
        prop = props[prop];

        updated_string.push(prop);

        if (typeof object[prop] === "undefined") {
            return updated_string.join(".") + " not exist";
        }

        object = object[prop];
    }

    return object
}

function verlan(string) {
    if (!verify(string)) {
        return string;
    }

    var words = string.split(' ');

    return words.map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ')
}

function yoda(string) {
    string = string.trim().split(' ');

    return string.reverse().join(' ');
}

function vig(string, key) {
    return "NOPE !";
}

// console.log(ucfirst(string));
// console.log(capitalize(string));
// console.log(camelCase(string));
// console.log(snake_case(string));
// console.log(leet(string));
// console.log(prop_access(object, "animal"));
// console.log(prop_access(object, "animal.gender"));
// console.log(verlan(string));
// console.log(yoda(string));
// console.log(vig("crypto"));