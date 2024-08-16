n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(872810),
    s = n(451467),
    o = n(174609),
    l = n(928518),
    u = n(120522),
    c = n(933843),
    d = n(614011),
    _ = n(430824),
    E = n(131951),
    f = n(594174),
    h = n(358085),
    p = n(981631),
    m = n(37113);
function I(e, t, I) {
    let T = l.Z.getWindowOpen(p.KJ3.CHANNEL_CALL_POPOUT) ? p.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, o.Z)(T), h.isPlatformEmbedded))
        (0, i.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e('79477'), n.e('58603')]).then(n.bind(n, 60594));
            return (n) =>
                (0, r.jsx)(t, {
                    ...n,
                    guildId: e,
                    analyticsLocation: I
                });
        }),
            (0, c.F4)() && ((0, u.z)(), (0, d.O)());
    else {
        var g;
        let n = (0, s.Z)(m.tI.PRESET_CUSTOM, m.LY.RESOLUTION_1080, m.ws.FPS_30, f.default.getCurrentUser(), null === (g = _.Z.getGuild(e)) || void 0 === g ? void 0 : g.premiumTier)
            ? {
                  width: 1920,
                  height: 1080
              }
            : {
                  width: 1280,
                  height: 720
              };
        E.Z.getMediaEngine()
            .getDesktopSource(n, !0)
            .then((n) => {
                (0, a.WH)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                });
            });
    }
}
