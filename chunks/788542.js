n.d(t, {
    M: function () {
        return o;
    }
});
var r = n(470079), i = n(576967), a = n(694542);
let o = e => {
    let t;
    let n = (0, i.u)();
    if (!n.display)
        return null;
    let {
        display: o,
        ...s
    } = n;
    return t = 'children' in e ? 'function' == typeof e.children ? e.children(s) : e.children : e.generator(s), r.createElement(a._.Provider, { value: s }, t);
};
