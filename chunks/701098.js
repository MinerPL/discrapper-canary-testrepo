t.d(n, {
    G: function () {
        return Z;
    }
});
var l = t(735250),
    a = t(470079),
    r = t(442837),
    s = t(481060),
    o = t(569545),
    i = t(352954),
    u = t(277642),
    c = t(441894),
    d = t(199902),
    M = t(689938);
function Z(e) {
    let { stream: n, channelId: t, location: Z } = e,
        S = (0, c.J)({
            channelId: t,
            location: Z
        }),
        I = (0, r.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(n)),
        C = (0, o.V9)(n),
        g = (0, u.t)(C),
        E = a.useCallback(() => {
            i.Z.openSecureFramesStreamVerification(C, t);
        }, [t, C]);
    return S && I && !g
        ? (0, l.jsx)(s.MenuItem, {
              id: 'secure-frames-stream-verification',
              label: M.Z.Messages.E2EE_VIEW_STREAM_PRIVACY_CODE,
              action: E
          })
        : null;
}
