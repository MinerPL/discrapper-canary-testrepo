"use strict";
n.d(t, {
  Wc: function() {
    return S
  },
  Ye: function() {
    return f
  },
  bp: function() {
    return h
  },
  ml: function() {
    return T
  },
  nG: function() {
    return E
  },
  tR: function() {
    return c
  }
});
var i = n(430824),
  r = n(19780),
  s = n(594174),
  o = n(626135),
  a = n(981631),
  l = n(37113),
  u = n(474936),
  _ = n(65154),
  d = n(689938);

function c(e) {
  if (null == e) return;
  let t = e.maxResolution.type === _.uA.SOURCE ? l.LY.RESOLUTION_SOURCE : e.maxResolution.height,
    n = (0, l.aW)(t);
  return (0, l.L9)(e.maxFrameRate) !== l.ws.FPS_5 && null == l.ND.find(e => e.resolution === n && e.fps !== l.ws.FPS_5 && !I(e))
}

function E(e) {
  if (null == e) return;
  let t = (0, l.L9)(e.maxFrameRate);
  return null == l.ND.find(e => e.fps === t && !I(e))
}

function I(e) {
  return null != e.quality || null != e.guildPremiumTier
}

function T(e) {
  return e.type === _.uA.SOURCE ? d.Z.Messages.SCREENSHARE_SOURCE : d.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
    resolution: e.height
  })
}

function h(e) {
  return d.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
    fps: e
  })
}

function S(e) {
  return null == e.maxResolution || null == e.maxFrameRate ? null : {
    maxFrameRate: e.maxFrameRate,
    maxResolution: e.maxResolution
  }
}

function f(e, t, n) {
  var _, d, c;
  let E = (_ = e, d = t, c = n, l.ND.find(e => (null == e.preset || e.preset === _) && e.resolution === d && e.fps === c)),
    I = s.default.getCurrentUser(),
    T = r.Z.getGuildId(),
    h = null != T ? i.Z.getGuild(T) : null;
  o.default.track(a.rMx.STREAM_SETTINGS_UPDATE, {
    user_premium_tier: null == I ? void 0 : I.premiumType,
    guild_premium_tier: null == h ? void 0 : h.premiumTier,
    stream_quality_user_premium_tier: (null == E ? void 0 : E.quality) != null ? u.bg[E.quality] : null,
    stream_quality_guild_premium_tier: null == E ? void 0 : E.guildPremiumTier,
    stream_quality_preset: e,
    stream_quality_resolution: t,
    stream_quality_frame_rate: n
  })
}