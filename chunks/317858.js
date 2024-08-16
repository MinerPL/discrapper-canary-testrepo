n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(470079),
    a = n(166516),
    s = n.n(a),
    r = n(525654),
    l = n.n(r),
    o = n(442837),
    c = n(888369),
    d = n(292959),
    u = n(699516),
    _ = n(340895),
    E = n(358085),
    h = n(998502),
    m = n(252618),
    I = n(981631),
    g = n(689938);
let p = new Set(['Blink', 'Gecko', 'WebKit']),
    T = I.dG4;
if (E.isPlatformEmbedded) T = (e) => h.ZP.setBadge(e);
else if (p.has(l().layout)) {
    let e = new (s())({ animation: 'none' });
    T = (t) => {
        try {
            (0, m.PR)(t), e.badge(-1 === t ? '\u2022' : t);
        } catch (e) {}
    };
}
function S() {
    let e = (0, o.e7)([_.Z], () => _.Z.hasIncomingCalls()),
        t = (0, o.e7)([c.default, u.Z, d.Z], () => {
            let e = c.default.getTotalMentionCount(),
                t = u.Z.getPendingCount(),
                n = c.default.hasAnyUnread(),
                i = d.Z.getDisableUnreadBadge(),
                a = e + t;
            return 0 === a && n && !i && (a = -1), a;
        });
    i.useEffect(() => {
        if (!e) return;
        let t = h.ZP.bounceDock('critical'),
            n = (0, m.EM)({
                messages: [g.Z.Messages.INCOMING_CALL],
                count: 50
            });
        return () => {
            null == t || t(), n();
        };
    }, [e]),
        i.useEffect(() => {
            T(t);
        }, [t]),
        i.useEffect(() => () => T(0), []);
}
