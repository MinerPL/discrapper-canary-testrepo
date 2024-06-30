var r = n(147018), i = n(926515), a = n(581031), o = n(676125), s = n(354848), l = n(35179), u = n(155763), c = n(714050), d = n(995739), _ = n(87046), E = n(115726), f = n(641236), h = n(992051), p = f('replace'), m = TypeError, I = a(''.indexOf), T = a(''.replace), g = a(''.slice), S = Math.max, A = function (e, t, n) {
        return n > e.length ? -1 : '' === t ? n : I(e, t, n);
    };
r({
    target: 'String',
    proto: !0
}, {
    replaceAll: function (e, t) {
        var n, r, a, f, N, v, O, R, C = o(this), y = 0, D = 0, L = '';
        if (!l(e)) {
            if ((n = u(e)) && !~I(c(o(_(e))), 'g'))
                throw m('`.replaceAll` does not allow non-global regexes');
            if (r = d(e, p))
                return i(r, e, C, t);
            if (h && n)
                return T(c(C), e, t);
        }
        for (a = c(C), f = c(e), !(N = s(t)) && (t = c(t)), O = S(1, v = f.length), y = A(a, f, 0); -1 !== y;)
            R = N ? c(t(f, y, a)) : E(f, a, y, [], void 0, t), L += g(a, D, y) + R, D = y + v, y = A(a, f, y + O);
        return D < a.length && (L += g(a, D)), L;
    }
});
