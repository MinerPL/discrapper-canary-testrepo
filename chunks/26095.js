var r = n(165566), i = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }, a = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }, o = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }, s = {};
function l(e) {
    return r.isMemo(e) ? o : s[e.$$typeof] || i;
}
s[r.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, s[r.Memo] = o;
var u = Object.defineProperty, c = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, _ = Object.getOwnPropertyDescriptor, E = Object.getPrototypeOf, f = Object.prototype;
e.exports = function e(t, n, r) {
    if ('string' != typeof n) {
        if (f) {
            var i = E(n);
            i && i !== f && e(t, i, r);
        }
        var o = c(n);
        d && (o = o.concat(d(n)));
        for (var s = l(t), h = l(n), p = 0; p < o.length; ++p) {
            var m = o[p];
            if (!a[m] && !(r && r[m]) && !(h && h[m]) && !(s && s[m])) {
                var I = _(n, m);
                try {
                    u(t, m, I);
                } catch (e) {
                }
            }
        }
    }
    return t;
};
