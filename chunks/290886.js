"use strict";
n.r(t), n.d(t, {
  useCanSeeOnboardingHome: function() {
    return v
  },
  canSeeOnboardingHome: function() {
    return S
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("65597"),
  a = n("380710"),
  o = n("38654"),
  l = n("21121"),
  u = n("42203"),
  d = n("26989"),
  c = n("305961"),
  f = n("698882"),
  _ = n("233706"),
  h = n("6263"),
  g = n("363176"),
  m = n("49111"),
  E = n("724210");

function p(e) {
  var t;
  let n = e.id,
    {
      homeSettingsEnabled: i
    } = _.default.getCurrentConfig({
      guildId: n,
      location: "61eef9_1"
    }, {
      autoTrackExposure: !1
    }),
    s = (null !== (t = f.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
    r = f.default.getEnabled(n);
  return i && s && e.hasFeature(m.GuildFeatures.COMMUNITY) && !(e.hasFeature(m.GuildFeatures.GUILD_ONBOARDING) && !r)
}

function v(e) {
  let t = (0, r.default)([c.default], () => c.default.getGuild(e)),
    n = (0, r.default)([d.default], () => d.default.getSelfMember(e)),
    {
      showOnboardingHome: i
    } = (0, h.useOnboardingHomeExperiment)(t, n),
    {
      homeSettingsEnabled: l
    } = _.default.useExperiment({
      guildId: e,
      location: "61eef9_2"
    }, {
      autoTrackExposure: !1
    }),
    f = (0, r.default)([o.default], () => o.default.isFullServerPreview(e)),
    v = (0, g.default)(e),
    S = (0, r.default)([u.default], () => u.default.getMutableGuildChannelsForGuild(e));
  if (null == t || __OVERLAY__ || e === m.ME || e === m.FAVORITES) return !1;
  if (f) return p(t);
  let T = l && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(m.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(m.GuildFeatures.GUILD_SERVER_GUIDE),
    I = s.some(s.values(S), e => e.hasFlag(E.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
  return !(!v && !I) && (i && t.hasFeature(m.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(m.GuildFeatures.GUILD_SERVER_GUIDE) || T) && t.hasFeature(m.GuildFeatures.COMMUNITY)
}

function S(e) {
  let t = c.default.getGuild(e),
    {
      showOnboardingHome: n
    } = h.default.getCurrentConfig({
      location: "61eef9_3"
    }, {
      autoTrackExposure: !1
    }),
    {
      homeSettingsEnabled: i
    } = _.default.getCurrentConfig({
      guildId: e,
      location: "61eef9_4"
    }),
    s = o.default.isFullServerPreview(e);
  if (null == t || __OVERLAY__ || e === m.ME || e === m.FAVORITES || (0, l.isInMainTabsExperiment)()) return !1;
  if (s) return p(t);
  let r = i && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(m.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(m.GuildFeatures.GUILD_SERVER_GUIDE);
  return (n && t.hasFeature(m.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(m.GuildFeatures.GUILD_SERVER_GUIDE) || r) && t.hasFeature(m.GuildFeatures.COMMUNITY)
}