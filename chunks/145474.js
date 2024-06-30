t.d(n, {
    P: function () {
        return c;
    }
});
var i = t(735250), r = t(470079), u = t(442837), l = t(481060), a = t(352954), o = t(441894), d = t(314897), s = t(689938);
function c(e) {
    let {
            userId: n,
            channelId: t,
            location: c
        } = e, E = (0, o.J)({
            channelId: t,
            location: c
        }), _ = (0, u.e7)([d.default], () => d.default.getId() === n), I = r.useCallback(() => {
            a.Z.openSecureFramesUserVerificationModal(n, t);
        }, [
            t,
            n
        ]);
    return !E || _ ? null : (0, i.jsx)(l.MenuItem, {
        id: 'secure-frames-user-verification',
        label: s.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
        action: I
    });
}
