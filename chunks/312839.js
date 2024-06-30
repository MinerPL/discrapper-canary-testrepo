n.d(t, {
    P: function () {
        return d;
    },
    R: function () {
        return c;
    }
});
var i = n(13245), s = n(556296), a = n(237997), o = n(13140), r = n(981631), l = n(987650);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(r.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, l.bv.Viewed);
        },
        trackClick(n) {
            let s = a.Z.isInstanceUILocked() ? r.Sbl.LOCKED_OVERLAY : r.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(r.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: s,
                action_type: n
            }), i.Z.notificationEvent(e, l.bv.Clicked);
        }
    };
}
function d() {
    let e = s.Z.getOverlayKeybind();
    return null != e ? (0, o.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
