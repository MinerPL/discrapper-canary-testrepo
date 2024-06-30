n.d(t, {
    KR: function () {
        return s;
    },
    p8: function () {
        return o;
    },
    sJ: function () {
        return l;
    }
});
var r = n(470079), i = n(652874);
let a = Object.freeze({
        id: null,
        activeDescendant: null
    }), o = (0, i.Z)(() => a);
function s(e, t, n) {
    (0, r.useEffect)(() => {
        t ? o.setState({
            id: e,
            activeDescendant: n
        }) : o.setState({
            id: null,
            activeDescendant: null
        });
    }, [
        e,
        t,
        n
    ]);
}
function l() {
    o.setState(() => a);
}
