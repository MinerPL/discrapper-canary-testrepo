var r = n(605905),
    i = n(779882),
    a = n(580495),
    s = RegExp("['\u2019]", 'g');
e.exports = function (e) {
    return function (t) {
        return r(a(i(t).replace(s, '')), e, '');
    };
};
