"use strict";
n.d(t, {
  GN: function() {
    return g
  },
  M2: function() {
    return L
  },
  Nq: function() {
    return p
  },
  SZ: function() {
    return M
  },
  aC: function() {
    return D
  },
  pI: function() {
    return R
  },
  sR: function() {
    return v
  },
  tt: function() {
    return y
  }
}), n(653041);
var i = n(399606),
  r = n(704215),
  s = n(736045),
  o = n(695346),
  a = n(675478),
  l = n(581883),
  u = n(401062),
  _ = n(131704),
  d = n(496675),
  c = n(594174),
  E = n(626135),
  I = n(74538),
  T = n(51144),
  h = n(208049),
  S = n(763296),
  f = n(697426),
  N = n(641015),
  A = n(893663),
  m = n(710111),
  O = n(981631);

function R() {
  var e;
  let t = o.kU.getSetting();
  return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100
}

function C(e, t) {
  return (null == t ? void 0 : t.guild_id) == null || d.Z.can(O.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === m.X8 || e.guildId === (null == t ? void 0 : t.guild_id)
}

function p(e, t, n) {
  let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  return (I.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === m.X8) && C(t, n) && (!i || t.available)
}

function g(e, t, n) {
  (0, h.XE)(t, e, f.YQ.SOUNDBOARD), (0, u.kq)(t, e, __OVERLAY__, n)
}
async function L(e) {
  let t = c.default.getCurrentUser(),
    n = (0, s.Z)(),
    i = (0, A.k9)(e);
  if (null == n || _.Lr.has(n.type) || null == i || !I.ZP.canUseCustomCallSounds(t) || !(0, N.D)()) return;
  await (0, h.w)();
  let r = i.guildId === m.hY ? m.X8 : i.guildId,
    o = S.Z.getSound(r, i.soundId);
  if (null != o) {
    var a, l;
    if (!C(o, n) || !p(t, o, n, !0)) return null;
    a = o, l = n.id, (0, h.XE)(l, a, f.YQ.JOINED_VOICE_CHANNEL), (0, u.vy)(l, a, __OVERLAY__)
  }
}

function v(e) {
  var t, n;
  let {
    isSoundboardButtonDisabled: s = !1
  } = e, o = (0, i.e7)([c.default], () => c.default.getCurrentUser()), a = [r.z.SOUNDBOARD_EDUCATION];
  if (!s && !Object.values(null !== (n = null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {}).some(e => null != e.joinSound)) {
    a.push(r.z.CUSTOM_CALL_SOUNDS_SPARKLES);
    let e = (0, T.Fc)(o);
    (I.ZP.canUseCustomCallSounds(o) || e) && a.push(r.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
  }
  return a
}

function D(e, t) {
  (0, a.PS)(e, n => {
    n.joinSound = void 0, P({
      guildId: e,
      changeType: f.MW.REMOVED,
      soundType: f.jy.ENTRY,
      location: t
    })
  }, a.fy.INFREQUENT_USER_ACTION)
}

function M(e, t, n) {
  (0, a.PS)(e, i => {
    let r = t.guildId === m.X8,
      s = r ? f.H$.DEFAULT : f.H$.CUSTOM,
      o = null != i.joinSound ? f.MW.UPDATED : f.MW.ADDED;
    i.joinSound = {
      soundId: t.soundId,
      guildId: r ? m.hY : t.guildId
    }, P({
      guildId: e,
      changeType: o,
      soundSource: s,
      soundType: f.jy.ENTRY,
      location: n
    })
  }, a.fy.INFREQUENT_USER_ACTION)
}

function P(e) {
  let {
    guildId: t,
    changeType: n,
    soundType: i,
    soundSource: r,
    location: s
  } = e;
  E.default.track(O.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
    location_stack: s,
    guild_id: "" === t ? 0 : Number(t),
    change_type: n,
    sound_type: i,
    sound_source: r
  })
}

function y(e) {
  let {
    location: t
  } = e;
  E.default.track(O.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
    location_stack: t
  })
}