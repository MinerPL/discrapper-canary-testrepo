n.d(t, {
    Gc: function () {
        return o;
    },
    ol: function () {
        return s;
    },
    q3: function () {
        return a;
    }
});
var r = n(735250), i = n(470079);
let a = i.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0
});
function o() {
    return i.useContext(a);
}
function s(e) {
    let {
        children: t,
        ...n
    } = e;
    return (0, r.jsx)(a.Provider, {
        value: n,
        children: t
    });
}
