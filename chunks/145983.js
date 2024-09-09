var s = n(447479),
    a = n(658141),
    i = n(401427),
    r = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return s(i(a(t).replace(r, '')), e, '');
    };
};
