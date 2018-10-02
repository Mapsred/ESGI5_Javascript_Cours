function type_check_v1(arg1, arg2) {
    return typeof arg1 === arg2;
}

function type_check_v2(arg1, enumeration) {
    if ("type" in enumeration) {
        var isArray = enumeration['type'] === 'array';
        if (isArray && !(arg1 instanceof Array)) {
            return false;
        } else if (!isArray && typeof arg1 !== enumeration['type']) {
            console.log('tttt');
            return false;
        }
    }

    if ("value" in enumeration && arg1 !== enumeration['value']) {
        return false;
    }

    if ("enum" in enumeration && enumeration['enum'].indexOf(arg1) === -1) {
        return false;
    }

    return true;
}


function type_check(arg1, config) {
    if ("type" in config && typeof arg1 !== config['type']) {
        return false;
    }

    if ("properties" in config) {
        var properties = config['properties'];
        for (var key in properties) {
            var arg1_v2 = arg1[key];
            var property = properties[key];
            if ("properties" in property) {
                var property_v2 = property['properties'];
                if (property instanceof Object) {
                    for (var value in property_v2) {
                        if (!value in arg1_v2) {
                            return false;
                        }

                        if (!type_check_v1(arg1_v2[value], property_v2[value])) {
                            return false;
                        }

                    }
                }

                if (property_v2 instanceof Array) {
                    for (var key_v2 in property_v2) {
                        if (!type_check_v1(arg1_v2[key_v2], property_v2[key_v2])) {
                            return false;
                        }
                    }
                }
            }

            if (!(key in arg1)) {
                console.log('hhh');
                return false;
            }
            if (!type_check_v2(arg1_v2, property)) {
                console.log('hhhh');
                return false;
            }
        }
    }


    return true;
}

// console.log(type_check_v1(1, "number"));
// => true

// console.log(type_check_v2({prop1: 1}, {type: "object"}));
// => true
// console.log(type_check_v2("foo", {type: "string", value: "foo"}));
// => true
// console.log(type_check_v2("bar", {type: "string", value: "foo"}));
// => false
// console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}));
// => true


var arg1 = {
    prop1: 1,
    prop2: 'val1',
    prop3: {
        prop31: 1
    },
    prop4: [
        true
    ]
};

var enumeration = {
    type: "object",
    properties: {
        prop1: {type: "number"},
        prop2: {type: "string", enum: ["val1", "val2"]},
        prop3: {
            type: "object", properties: {
                prop31: "number"
            }
        },
        prop4: {type: "array", properties: ["boolean"]}
    }
};


// console.log(type_check(arg1, enumeration));