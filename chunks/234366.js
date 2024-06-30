n.d(t, {
    C8: function () {
        return i;
    },
    dK: function () {
        return o;
    },
    mq: function () {
        return a;
    }
});
var r = n(470079), i = r.createContext(), a = r.createContext();
function o(e) {
    var t = e.children, n = r.useState(null), o = n[0], s = n[1], l = r.useRef(!1);
    r.useEffect(function () {
        return function () {
            l.current = !0;
        };
    }, []);
    var u = r.useCallback(function (e) {
        !l.current && s(e);
    }, []);
    return r.createElement(i.Provider, { value: o }, r.createElement(a.Provider, { value: u }, t));
}
