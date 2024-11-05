n.d(t, {
    M: function () {
        return s;
    }
});
var r = n(192379),
    i = n(409447),
    a = n(330905);
let s = (e) => {
    let t;
    let n = (0, i.u)();
    if (!n.display) return null;
    let { display: s, ...o } = n;
    return (t = 'children' in e ? ('function' == typeof e.children ? e.children(o) : e.children) : e.generator(o)), r.createElement(a._.Provider, { value: o }, t);
};
