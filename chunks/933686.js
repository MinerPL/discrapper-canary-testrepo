n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(774078),
    r = n(390322),
    o = n(272929),
    c = n(456631),
    u = n(381871),
    d = n(304388);
function h(e) {
    let { channel: t } = e,
        n = (0, s.e7)([c.Z], () => c.Z.effectCooldownEndTime),
        h = a.useMemo(() => (null != n ? (n.getTime() - Date.now()) / 1000 : 0), [n]),
        { seconds: m } = (0, l.Z)(null != n ? n : new Date()),
        p = m > 0;
    return (0, i.jsx)(d.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: a } = e;
            return (0, i.jsx)(r.Z, {
                children: (0, i.jsx)(u.Z, {
                    channel: t,
                    closePopout: n,
                    onFocus: a
                })
            });
        },
        children: (e) => {
            let { onMouseEnter: t, ...n } = e;
            return (0, i.jsx)(o.Z, {
                totalCooldownSeconds: h,
                remainingCooldownSeconds: m,
                onMouseEnter: (e) => {
                    var n, i;
                    return (n = e), (i = t), void (!p && i(n));
                },
                ...n
            });
        }
    });
}
