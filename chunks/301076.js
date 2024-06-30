n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(735250);
n(470079);
var a = n(592471), l = n(871499);
function s(e) {
    let t, {
            isActivityActive: n,
            onMouseEnter: s,
            onMouseLeave: r,
            onClick: o,
            ...c
        } = e, {
            Component: u,
            events: d
        } = (0, a.s)();
    return (0, i.jsx)(l.d, {
        isActive: n,
        color: t,
        iconComponent: u,
        onMouseEnter: e => {
            null == s || s(e), d.onMouseEnter();
        },
        onMouseLeave: e => {
            null == r || r(e), d.onMouseLeave();
        },
        onClick: e => {
            null == o || o(e), d.onClick();
        },
        ...c
    });
}
