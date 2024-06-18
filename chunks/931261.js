"use strict";
n.d(t, {
  g: function() {
    return S
  },
  s: function() {
    return f
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(399606),
  o = n(637853),
  a = n(160404),
  l = n(592125),
  u = n(430824),
  _ = n(563534),
  d = n(621923),
  c = n(199689),
  E = n(460347),
  I = n(981631),
  T = n(176505);

function h(e) {
  var t;
  let n = e.id,
    {
      homeSettingsEnabled: i
    } = d.ZP.getCurrentConfig({
      guildId: n,
      location: "61eef9_1"
    }, {
      autoTrackExposure: !1
    }),
    r = (null !== (t = _.Z.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
    s = _.Z.getEnabled(n);
  return i && r && e.hasFeature(I.oNc.COMMUNITY) && !(e.hasFeature(I.oNc.GUILD_ONBOARDING) && !s)
}

function S(e) {
  let {
    homeSettingsEnabled: t
  } = d.ZP.useExperiment({
    guildId: e,
    location: "61eef9_2"
  }, {
    autoTrackExposure: !1
  }), n = (0, E.Z)(e), i = l.Z.getMutableGuildChannelsForGuild(e);
  return (0, s.e7)([u.Z, a.Z], () => {
    let s = u.Z.getGuild(e);
    if (__OVERLAY__ || e === I.ME || e === I.I_8 || null == s) return !1;
    if (a.Z.isFullServerPreview(e)) return h(s);
    let l = (0, c.Z)(s),
      _ = t && (0, o.wC)(e) && s.hasFeature(I.oNc.GUILD_ONBOARDING) && s.hasFeature(I.oNc.GUILD_SERVER_GUIDE),
      d = r().some(r().values(i), e => e.hasFlag(T.zZ.IS_GUILD_RESOURCE_CHANNEL));
    return !(!n && !d) && (l && s.hasFeature(I.oNc.GUILD_ONBOARDING) && s.hasFeature(I.oNc.GUILD_SERVER_GUIDE) || _) && s.hasFeature(I.oNc.COMMUNITY)
  }, [e, t, n, i])
}

function f(e) {
  let t = u.Z.getGuild(e),
    {
      homeSettingsEnabled: n
    } = d.ZP.getCurrentConfig({
      guildId: e,
      location: "61eef9_4"
    }),
    i = a.Z.isFullServerPreview(e);
  if (null == t || __OVERLAY__ || e === I.ME || e === I.I_8) return !1;
  if (i) return h(t);
  let r = n && (0, o.wC)(e) && t.hasFeature(I.oNc.GUILD_ONBOARDING) && t.hasFeature(I.oNc.GUILD_SERVER_GUIDE);
  return (t.hasFeature(I.oNc.GUILD_ONBOARDING) && t.hasFeature(I.oNc.GUILD_SERVER_GUIDE) || r) && t.hasFeature(I.oNc.COMMUNITY)
}