e.exports = function (e) {
    return function (t, r, n) {
        for (var a = -1, o = Object(t), i = n(t), _ = i.length; _--; ) {
            var E = i[e ? _ : ++a];
            if (!1 === r(o[E], E, o)) break;
        }
        return t;
    };
};
