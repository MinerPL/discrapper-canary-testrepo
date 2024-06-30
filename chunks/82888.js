n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250), a = n(470079), l = n(399606), s = n(110924), r = n(867176), o = n(566620), c = n(317381), u = n(917107), d = n(9145), h = n(918559);
function p(e) {
    let {
            maxHeight: t,
            renderExternalHeader: n
        } = e, {
            connectedChannelId: p,
            connectedActivity: m,
            activityPanelMode: _
        } = (0, l.cj)([c.ZP], () => {
            var e;
            let t = c.ZP.getConnectedActivityChannelId();
            return {
                connectedChannelId: t,
                connectedActivity: null != t && null !== (e = c.ZP.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
                activityPanelMode: c.ZP.getActivityPanelMode()
            };
        }), f = (0, r.NX)(p, !1, 'ActivityPanelUI'), E = (0, s.Z)(p);
    if (a.useEffect(() => {
            null != p && null == E && (0, o.gC)(h.MI.RESIZABLE);
        }, [
            p,
            E
        ]), !f)
        return null;
    let C = null == m ? void 0 : m.applicationId;
    return _ !== h.Ez.PANEL || null == C ? null : null == p || null == m || (0, u.Z)(p) || null == C ? null : (0, i.jsx)(d.Z, {
        maxHeight: t,
        connectedChannelId: p,
        renderExternalHeader: n
    });
}
