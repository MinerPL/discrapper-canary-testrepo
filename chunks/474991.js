var r = n(325008),
    i = n(161581),
    o = n(581031),
    a = n(474180),
    s = n(95948),
    l = n(251069),
    c = n(537443).f,
    u = n(838957),
    d = n(155763),
    f = n(714050),
    _ = n(87046),
    p = n(489412),
    h = n(504559),
    m = n(859209),
    g = n(936940),
    E = n(740362),
    b = n(644659).enforce,
    y = n(930990),
    v = n(641236),
    O = n(973326),
    I = n(440196),
    S = v('match'),
    T = i.RegExp,
    N = T.prototype,
    A = i.SyntaxError,
    C = o(N.exec),
    R = o(''.charAt),
    P = o(''.replace),
    w = o(''.indexOf),
    D = o(''.slice),
    L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    x = /a/g,
    M = /a/g,
    k = new T(x) !== x,
    j = p.MISSED_STICKY,
    U = p.UNSUPPORTED_Y,
    G =
        r &&
        (!k ||
            j ||
            O ||
            I ||
            g(function () {
                return (M[S] = !1), T(x) !== x || T(M) === M || '/a/i' !== String(T(x, 'i'));
            })),
    B = function (e) {
        for (var t, n = e.length, r = 0, i = '', o = !1; r <= n; r++) {
            if ('\\' === (t = R(e, r))) {
                i += t + R(e, ++r);
                continue;
            }
            o || '.' !== t ? ('[' === t ? (o = !0) : ']' === t && (o = !1), (i += t)) : (i += '[\\s\\S]');
        }
        return i;
    },
    F = function (e) {
        for (var t, n = e.length, r = 0, i = '', o = [], a = {}, s = !1, l = !1, c = 0, u = ''; r <= n; r++) {
            if ('\\' === (t = R(e, r))) t += R(e, ++r);
            else if (']' === t) s = !1;
            else if (!s)
                switch (!0) {
                    case '[' === t:
                        s = !0;
                        break;
                    case '(' === t:
                        C(L, D(e, r + 1)) && ((r += 2), (l = !0)), (i += t), c++;
                        continue;
                    case '>' === t && l:
                        if ('' === u || E(a, u)) throw new A('Invalid capture group name');
                        (a[u] = !0), (o[o.length] = [u, c]), (l = !1), (u = '');
                        continue;
                }
            l ? (u += t) : (i += t);
        }
        return [i, o];
    };
if (a('RegExp', G)) {
    for (
        var V = function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    c,
                    p = u(N, this),
                    h = d(e),
                    m = void 0 === t,
                    g = [],
                    E = e;
                if (!p && h && m && e.constructor === V) return e;
                if (((h || u(N, e)) && ((e = e.source), m && (t = _(E))), (e = void 0 === e ? '' : f(e)), (t = void 0 === t ? '' : f(t)), (E = e), O && ('dotAll' in x) && (r = !!t && w(t, 's') > -1) && (t = P(t, /s/g, '')), (n = t), j && ('sticky' in x) && (i = !!t && w(t, 'y') > -1) && U && (t = P(t, /y/g, '')), I && ((e = (o = F(e))[0]), (g = o[1])), (a = s(T(e, t), p ? this : N, V)), (r || i || g.length) && ((c = b(a)), r && ((c.dotAll = !0), (c.raw = V(B(e), n))), i && (c.sticky = !0), g.length && (c.groups = g)), e !== E))
                    try {
                        l(a, 'source', '' === E ? '(?:)' : E);
                    } catch (e) {}
                return a;
            },
            Z = c(T),
            H = 0;
        Z.length > H;

    )
        h(V, T, Z[H++]);
    (N.constructor = V), (V.prototype = N), m(i, 'RegExp', V, { constructor: !0 });
}
y('RegExp');
