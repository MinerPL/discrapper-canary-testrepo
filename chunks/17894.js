t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(525654), r = t.n(i), o = t(39612), a = t(271579), s = t(756647), l = t(232567), c = t(703656), d = t(314897), u = t(896797), _ = t(626135), p = t(954824), f = t(981631);
async function I(e) {
    var n, t;
    let i = null === (n = r().os) || void 0 === n ? void 0 : n.family;
    if ('Android' === i || 'iOS' === i) {
        let n = null !== (t = d.default.getFingerprint()) && void 0 !== t ? t : d.default.getId(), i = (0, a.WS)();
        if (null == n && d.default.isAuthenticated())
            try {
                await (0, l.k)(), n = d.default.getId();
            } catch {
            }
        return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: n,
            attemptId: i
        });
    }
    return 'discord://';
}
async function m(e) {
    let n = await I(e), t = (0, a.zS)(n);
    null != t && _.default.track(f.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, s.K)(t.fingerprint),
        attempt_id: t.attemptId,
        source: t.utmSource
    }), p.Z.launch(n, e => {
        !e && (0, c.dL)(u.Z.fallbackRoute);
    });
}
