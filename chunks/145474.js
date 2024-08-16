t.d(n, {
    P: function () {
        return c;
    }
});
var a = t(735250),
    i = t(470079),
    s = t(442837),
    l = t(481060),
    o = t(352954),
    r = t(441894),
    u = t(314897),
    d = t(689938);
function c(e) {
    let { userId: n, channelId: t, location: c } = e,
        E = (0, r.J)({
            channelId: t,
            location: c
        }),
        Z = (0, s.e7)([u.default], () => u.default.getId() === n),
        M = i.useCallback(() => {
            o.Z.openSecureFramesUserVerificationModal(n, t);
        }, [t, n]);
    return !E || Z
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'secure-frames-user-verification',
              label: d.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: M
          });
}
