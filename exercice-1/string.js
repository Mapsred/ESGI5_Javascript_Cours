verify = function (string) {
    return !(string === null || string instanceof Object);
};

ucfirst = function (string) {
    if (!verify(string)) {
        return '';
    }

    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
};

capitalize = function (string) {
    if (!verify(string)) {
        return '';
    }

    return string.toLowerCase().replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    });
};

camelCase = function (string) {
    if (!verify(string)) {
        return '';
    }

    return string.replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    }).replace(/ /g, '');
};

snake_case = function (string) {
    if (!verify(string)) {
        return '';
    }

    return string.toLowerCase().replace(/ /g, '_');
};

leet = function (string) {
    if (!verify(string)) {
        return '';
    }

    const alphabets = {a: "4", e: "3", i: "1", o: "0", u: "(_)", y: "7"};

    Object.keys(alphabets).map(function (key) {
        string = string.replace(new RegExp(key, 'g'), alphabets[key]);
    });

    return string;
};

prop_access = function (object, string) {
    if (!verify(string)) {
        return object;
    }

    const props = string.split('.');
    const updated_string = [];

    for (let prop in props) {
        prop = props[prop];

        updated_string.push(prop);

        if (typeof object[prop] === "undefined") {
            return updated_string.join(".") + " not exist";
        }

        object = object[prop];
    }

    return object
};

verlan = function (string) {
    if (!verify(string)) {
        return '';
    }

    const words = string.split(' ');

    return words.map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ')
};

yoda = function (string) {
    if (!verify(string)) {
        return '';
    }

    string = string.split(' ');

    return string.reverse().join(' ');
};

vig = function (string, key) {
    return "NOPE !";
};

module.exports = {verify, ucfirst, capitalize, camelCase, snake_case, leet, prop_access, verlan, yoda, vig};