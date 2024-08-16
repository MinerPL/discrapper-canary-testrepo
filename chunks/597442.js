n.d(t, {
    E: function () {
        return c;
    },
    T: function () {
        return u;
    }
});
var r,
    i = n(470079),
    a = n(802498),
    s = n(442837),
    o = n(607070);
let l = null !== (r = document.getElementById('app-mount')) && void 0 !== r ? r : document;
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = (0, s.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        u = i.useRef(!1);
    return (
        (u.current = !r),
        (0, a.ZP)(e, {
            ...n,
            disableReturnRef: u,
            attachTo: null !== (t = n.attachTo) && void 0 !== t ? t : l,
            returnRef: n.returnRef
        })
    );
}
function c(e) {
    return u(e.containerRef), e.children;
}
