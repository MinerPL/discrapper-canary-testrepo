var r, i, a, o, s = n(161581), l = n(197187), u = n(566885), c = n(354848), d = n(740362), _ = n(936940), E = n(620623), f = n(50754), h = n(722063), p = n(202934), m = n(531460), I = n(391673), T = s.setImmediate, g = s.clearImmediate, S = s.process, A = s.Dispatch, N = s.Function, v = s.MessageChannel, O = s.String, R = 0, C = {}, y = 'onreadystatechange';
_(function () {
    r = s.location;
});
var D = function (e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t();
        }
    }, L = function (e) {
        return function () {
            D(e);
        };
    }, b = function (e) {
        D(e.data);
    }, M = function (e) {
        s.postMessage(O(e), r.protocol + '//' + r.host);
    };
(!T || !g) && (T = function (e) {
    p(arguments.length, 1);
    var t = c(e) ? e : N(e), n = f(arguments, 1);
    return C[++R] = function () {
        l(t, void 0, n);
    }, i(R), R;
}, g = function (e) {
    delete C[e];
}, I ? i = function (e) {
    S.nextTick(L(e));
} : A && A.now ? i = function (e) {
    A.now(L(e));
} : v && !m ? (o = (a = new v()).port2, a.port1.onmessage = b, i = u(o.postMessage, o)) : s.addEventListener && c(s.postMessage) && !s.importScripts && r && 'file:' !== r.protocol && !_(M) ? (i = M, s.addEventListener('message', b, !1)) : i = y in h('script') ? function (e) {
    E.appendChild(h('script'))[y] = function () {
        E.removeChild(this), D(e);
    };
} : function (e) {
    setTimeout(L(e), 0);
}), e.exports = {
    set: T,
    clear: g
};
