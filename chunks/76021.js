n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(872810),
    s = n(451467),
    o = n(174609),
    l = n(928518),
    u = n(120522),
    c = n(933843),
    d = n(614011),
    f = n(592125),
    _ = n(430824),
    h = n(131951),
    p = n(594174),
    m = n(358085),
    g = n(981631),
    E = n(37113);
function v(e, t, v) {
    let I = l.Z.getWindowOpen(g.KJ3.CHANNEL_CALL_POPOUT) ? g.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, o.Z)(I), m.isPlatformEmbedded))
        (0, i.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e('46746'), n.e('88904')]).then(n.bind(n, 60594));
            return (n) =>
                (0, r.jsx)(t, {
                    ...n,
                    guildId: e,
                    analyticsLocation: v
                });
        }),
            (0, c.F4)() && ((0, u.z)(), (0, d.O)());
    else {
        var S;
        let n = f.Z.getChannel(t),
            r = (0, s.Z)(E.tI.PRESET_CUSTOM, E.LY.RESOLUTION_1080, E.ws.FPS_30, p.default.getCurrentUser(), null === (S = _.Z.getGuild(e)) || void 0 === S ? void 0 : S.premiumTier, n)
                ? {
                      width: 1920,
                      height: 1080
                  }
                : {
                      width: 1280,
                      height: 720
                  };
        h.Z.getMediaEngine()
            .getDesktopSource(r, !0)
            .then((n) => {
                (0, a.WH)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                });
            });
    }
}
