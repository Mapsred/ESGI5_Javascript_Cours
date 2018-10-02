String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
};

String.prototype.capitalize = function () {
    return this.toLowerCase().replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    });
};

String.prototype.camelCase = function () {
    return this.replace(/\b\w/g, function (l) {
        return l.toUpperCase()
    }).replace(/ /g, '');
};

String.prototype.snake_case = function () {
    return this.toLowerCase().replace(/ /g, '_');
};

String.prototype.leet = function () {
    const alphabets = {a: "4", e: "3", i: "1", o: "0", u: "(_)", y: "7"};
    var self = this;

    Object.keys(alphabets).map(function (key) {
        self = self.replace(new RegExp(key, 'g'), alphabets[key]);
    });

    return self;
};

Object.prototype.prop_access = function (string) {
    let object = this;
    const props = string.split('.');
    const updated_string = [];

    for (let prop of props) {
        updated_string.push(prop);

        if (typeof object[prop] === "undefined") {
            return updated_string.join(".") + " not exist";
        }

        object = object[prop];
    }

    return object
};

String.prototype.verlan = function () {
    const words = this.split(' ');

    return words.map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ')
};

String.prototype.yoda = function () {
    var string = this.split(' ');

    return string.reverse().join(' ');
};

String.prototype.vig = function (str2) {
    var i = 0, b;
    str2 = str2.toUpperCase().replace(/[^A-Z]/g, '');
    var str1 = this.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function (a) {
        b = str2[i++ % str2.length];
        return String.fromCharCode((((a.charCodeAt(0) - 65) + (b.charCodeAt(0) - 65)) % 26 + 65));
    });

    return str1.toLowerCase();
};
