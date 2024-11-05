n(653041), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(442837),
    l = n(481060),
    s = n(237997),
    a = n(388627),
    u = n(561064),
    c = n(380736),
    d = n(693091),
    h = n(371467),
    f = n(981631),
    p = n(408052);
let m = [];
function v(e) {
    return e.notification.id;
}
function g(e, t, n, o) {
    let { index: r, notification: l, locked: s } = t;
    return (0, i.jsx)(
        c.Z,
        {
            index: r,
            notification: l,
            locked: s,
            transitionState: n,
            cleanUp: o
        },
        e
    );
}
function E(e) {
    return (0, i.jsx)('div', {
        className: p.container,
        children: e
    });
}
let _ = (e) => o.useState(() => new d.AS(e))[0];
t.Z = o.memo(function (e) {
    let { locked: t } = e,
        n = (0, r.e7)(
            [s.Z, h.Z],
            () => {
                if (s.Z.getNotificationPositionMode() === f._vf.DISABLED) return m;
                let e = [],
                    n = 0;
                for (let i of h.Z.getNotifications()) {
                    if (n > 4) break;
                    (!t || i.status !== f._1z.TIMED_OUT) &&
                        (e.push({
                            index: n,
                            locked: t,
                            notification: i
                        }),
                        n++);
                }
                return e;
            },
            [t],
            a.E6
        ),
        c = _(t);
    return (
        o.useLayoutEffect(() => c.updateState(n, t)),
        o.useLayoutEffect(() => (c.initialize((0, u.i)()), () => c.cleanUp()), [c]),
        (0, i.jsx)(d.S4.Provider, {
            value: c,
            children: (0, i.jsx)(l.TransitionGroup, {
                items: n,
                renderItem: g,
                getItemKey: v,
                wrapChildren: E
            })
        })
    );
});
