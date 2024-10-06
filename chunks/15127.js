n.d(t, {
    Gc: function () {
        return o;
    },
    ol: function () {
        return l;
    },
    q3: function () {
        return s;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(981631);
let s = i.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.dG4,
    hasValue: void 0,
    setHasValue: a.dG4
});
function o() {
    return i.useContext(s);
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)(s.Provider, {
        value: n,
        children: t
    });
}
