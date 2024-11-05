n.d(t, {
    P: function () {
        return d;
    },
    R: function () {
        return c;
    }
});
var i = n(13245),
    o = n(556296),
    r = n(237997),
    l = n(13140),
    s = n(145597),
    a = n(987650),
    u = n(981631);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(u.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, a.bv.Viewed);
        },
        trackClick(n) {
            let o = r.Z.isLocked((0, s.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(u.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: o,
                action_type: n
            }),
                i.Z.notificationEvent(e, a.bv.Clicked);
        }
    };
}
function d() {
    let e = o.Z.getOverlayKeybind();
    return null != e ? (0, l.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
