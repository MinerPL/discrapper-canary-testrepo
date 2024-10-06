n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(442837),
    a = n(594190),
    s = n(480294),
    r = n(131951),
    l = n(924557),
    o = n(435064),
    c = n(779618),
    d = n(356659),
    u = n(981631);
function _(e) {
    let t = (0, l.nM)({ autoTrackExposure: !0 }),
        n = o.Z.isDecoupledGameClippingEnabled();
    return (0, i.e7)([o.Z, a.ZP, s.Z, r.Z], () => {
        if (!(0, c.Z)(r.Z) || !t || !n) return !1;
        if (null != o.Z.getLastClipsError()) return !0;
        if (!s.Z.hasConsented(u.pjP.PERSONALIZATION) || null == a.ZP.getVisibleGame()) return !1;
        let {
            clipsEducationState: { dismissedAt: i, numberOfGamesLaunchedSinceDismissal: _, numberOfTimesDismissed: E },
            hasTakenDecoupledClip: h,
            clipsSettings: { clipsEnabled: m }
        } = o.Z.getState();
        if (null === i) return !0;
        if (!(null != e && (0, l.xt)(e))) return !1;
        let I = Date.now() - i > d.xx,
            p = _ >= d._U,
            g = m ? d.xd : d.A5;
        return I && p && E < g && !h;
    });
}
