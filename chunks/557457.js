n.d(t, {
    Wc: function () {
        return m;
    },
    Ye: function () {
        return I;
    },
    bp: function () {
        return p;
    },
    ml: function () {
        return h;
    },
    nG: function () {
        return E;
    },
    tR: function () {
        return _;
    }
});
var r = n(430824),
    i = n(19780),
    a = n(594174),
    s = n(626135),
    o = n(981631),
    l = n(37113),
    u = n(474936),
    c = n(65154),
    d = n(689938);
function _(e) {
    if (null == e) return;
    let t = e.maxResolution.type === c.uA.SOURCE ? l.LY.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, l.aW)(t);
    return (0, l.L9)(e.maxFrameRate) !== l.ws.FPS_5 && null == l.ND.find((e) => e.resolution === n && e.fps !== l.ws.FPS_5 && !f(e));
}
function E(e) {
    if (null == e) return;
    let t = (0, l.L9)(e.maxFrameRate);
    return null == l.ND.find((e) => e.fps === t && !f(e));
}
function f(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function h(e) {
    return e.type === c.uA.SOURCE ? d.Z.Messages.SCREENSHARE_SOURCE : d.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: e.height });
}
function p(e) {
    return d.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: e });
}
function m(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution
          };
}
function I(e, t, n) {
    var c, d, _;
    let E = ((c = e), (d = t), (_ = n), l.ND.find((e) => (null == e.preset || e.preset === c) && e.resolution === d && e.fps === _)),
        f = a.default.getCurrentUser(),
        h = i.Z.getGuildId(),
        p = null != h ? r.Z.getGuild(h) : null;
    s.default.track(o.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == f ? void 0 : f.premiumType,
        guild_premium_tier: null == p ? void 0 : p.premiumTier,
        stream_quality_user_premium_tier: (null == E ? void 0 : E.quality) != null ? u.bg[E.quality] : null,
        stream_quality_guild_premium_tier: null == E ? void 0 : E.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    });
}
