n.d(t, {
    H: function () {
        return l;
    }
});
var r = n(192379),
    i = n(903797),
    a = n(60071),
    s = n(731965);
function o(e, t) {
    return e === t;
}
function l(e) {
    let t = (0, i.Z)((0, a.XR)((t, n) => e((e) => (0, s.j)(() => t(e)), n)));
    function n(e, n) {
        return t(e, n);
    }
    function l(e) {
        let n = t.getState();
        return null != e ? e(n) : n;
    }
    function u(e) {
        return (t) => t[e];
    }
    return {
        useState: n,
        getState: l,
        useField: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
            return t(
                r.useMemo(() => {
                    var t;
                    return (t = e), (e) => e[t];
                }, [e]),
                n
            );
        },
        getField: function (e) {
            var t;
            return l(((t = e), (e) => e[t]));
        },
        subscribe: function (e, n, r) {
            return t.subscribe(e, n, r);
        },
        setState: (e) => {
            (0, s.j)(() => t.setState(e));
        }
    };
}
