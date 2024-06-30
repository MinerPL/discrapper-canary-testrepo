var n = r(573401), i = r(105890), o = r(67948), s = r(44091), a = n.isFinite, u = Math.min;
e.exports = function (e) {
    var t = Math[e];
    return function (e, r) {
        if (e = o(e), (r = null == r ? 0 : u(i(r), 292)) && a(e)) {
            var n = (s(e) + 'e').split('e');
            return +((n = (s(t(n[0] + 'e' + (+n[1] + r))) + 'e').split('e'))[0] + 'e' + (+n[1] - r));
        }
        return t(e);
    };
};
