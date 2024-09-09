t.d(n, {
    B: function () {
        return Z;
    }
});
var s = t(735250),
    i = t(470079),
    l = t(442837),
    a = t(481060),
    o = t(40851),
    u = t(352954),
    d = t(630759),
    r = t(441894),
    c = t(314897),
    E = t(689938);
function Z(e) {
    let { userId: n, channelId: t, guildId: Z, location: M } = e,
        _ = (0, r.J)({
            channelId: t,
            location: M
        }),
        f = (0, l.e7)([c.default], () => c.default.getId() === n),
        g = (0, o.bp)(),
        I = i.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
                n,
                t,
                () =>
                    (0, d.fz)({
                        userId: n,
                        channelId: t,
                        guildId: Z
                    }),
                g
            );
        }, [g, t, Z, n]);
    return !_ || f
        ? null
        : (0, s.jsx)(a.MenuItem, {
              id: 'secure-frames-user-verification',
              label: E.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: I
          });
}
