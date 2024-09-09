n.d(t, {
    A: function () {
        return _;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(434650),
    o = n(110924),
    l = n(451478),
    u = n(915750);
let c = (e) => {
        let [t, n] = i.useState(!1),
            r = null != e ? e : t,
            a = r !== (0, o.Z)(r);
        return {
            visible: r,
            visibleChanged: a,
            reference: (0, s.O)((e) => n(e), 0.5)
        };
    },
    d = () => {
        let e = (0, a.e7)([l.Z], () => l.Z.isFocused()),
            t = e !== (0, o.Z)(e);
        return {
            focused: e,
            focusedChanged: t
        };
    };
function _(e) {
    let { focused: t, focusedChanged: n } = d(),
        { visible: a, visibleChanged: s, reference: o } = c(e.overrideVisibility),
        l = {
            ...e,
            focused: t,
            focusedChanged: n,
            visible: a,
            visibleChanged: s,
            reference: o,
            impression: i.useRef(null)
        };
    return (0, r.jsx)(u.u, { ...l }, (0, u.B)(e.questOrQuests, e.questContent));
}
