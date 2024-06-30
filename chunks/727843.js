n.d(t, {
    I: function () {
        return l;
    },
    N: function () {
        return r;
    }
}), n(411104);
var s = n(735250), a = n(470079);
let i = a.createContext(void 0);
function r() {
    let e = a.useContext(i);
    if (null == e)
        throw Error('No edit state; are you missing an <EditStateContextProvider />?');
    return e;
}
function l(e) {
    let {
        children: t,
        ...n
    } = e;
    return (0, s.jsx)(i.Provider, {
        value: n,
        children: t
    });
}
