var n = Date.now;
t.Z = function (e) {
    var t = 0,
        r = 0;
    return function () {
        var i = n(),
            a = 16 - (i - r);
        if (((r = i), a > 0)) {
            if (++t >= 800) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
    };
};
