var e = n(951332), o = RangeError;
t.exports = function (t, r) {
    var n = e(t);
    if (n % r)
        throw o('Wrong offset');
    return n;
};
