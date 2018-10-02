function verify(string) {
    return !(string === null || string instanceof Object);
}

function ucfirst(string) {
    if (!verify(string)) {
        return '';
    }

    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

function capitalize(string) {
    if (!verify(string)) {
        return '';
    }

    return string.toLowerCase().replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    });
}

function camelCase(string) {
    if (!verify(string)) {
        return '';
    }

    return string.replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    }).replace(/ /g, '');
}

function snake_case(string) {
    if (!verify(string)) {
        return '';
    }

    return string.toLowerCase().replace(/ /g, '_');
}

function leet(string) {
    if (!verify(string)) {
        return '';
    }

    const alphabets = {a: "4", e: "3", i: "1", o: "0", u: "(_)", y: "7"};

    Object.keys(alphabets).map(function (key) {
        string = string.replace(new RegExp(key, 'g'), alphabets[key]);
    });

    return string;
}

function prop_access(object, string) {
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
}

function verlan(string) {
    if (!verify(string)) {
        return '';
    }

    const words = string.split(' ');

    return words.map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ')
}

function yoda(string) {
    if (!verify(string)) {
        return '';
    }

    string = string.split(' ');

    return string.reverse().join(' ');
}