"use strict";
n.r(t), n.d(t, {
  useCurrentUserHasAutomodQuarantinedProfile: function() {
    return p
  },
  useGuildAutomodProfileQuarantineErrors: function() {
    return h
  },
  useOpenFixQuarantinedProfileModal: function() {
    return N
  }
}), n("789020");
var s = n("470079"),
  a = n("399606"),
  l = n("230711"),
  i = n("906732"),
  r = n("18438"),
  o = n("314897"),
  u = n("271383"),
  d = n("430824"),
  c = n("496675"),
  f = n("914010"),
  E = n("715903"),
  _ = n("981631"),
  T = n("372897"),
  m = n("526761"),
  I = n("689938");

function p(e) {
  return (0, a.useStateFromStores)([o.default, u.default], () => {
    if (null == e) return !1;
    let t = o.default.getId();
    return (0, E.hasAutomodQuarantinedProfile)(u.default.getMember(e, t))
  }, [e])
}

function h(e) {
  return (0, a.useStateFromStoresObject)([o.default, u.default, f.default, d.default], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      n = f.default.getGuildId(),
      s = null != e ? e : n,
      a = d.default.getGuild(s);
    if (null == a || null == s) return t;
    let l = o.default.getId(),
      i = u.default.getMember(s, l),
      r = (0, E.getAutomodQuarantinedProfileFlags)(null == i ? void 0 : i.flags);
    if (0 === r.size) return t;
    if (r.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var c;
        t.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
          guildName: null !== (c = a.name) && void 0 !== c ? c : ""
        })]
      } else t.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
    }
    return r.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t
  }, [e])
}

function N(e) {
  let {
    guildId: t,
    scrollPosition: n,
    analyticsLocation: o,
    analyticsLocations: u,
    openWithoutBackstack: f
  } = e, {
    analyticsLocations: E
  } = (0, i.default)(), T = (0, a.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]), I = (0, a.useStateFromStores)([c.default], () => null != T && c.default.can(_.Permissions.CHANGE_NICKNAME, T), [T]);
  return [s.useCallback(() => {
    if (null == T) return;
    let e = _.UserSettingsSections.PROFILE_CUSTOMIZATION,
      t = m.ProfileCustomizationSubsection.GUILD;
    I ? (0, r.initGuildIdentitySettings)(T, null != u ? u : E) : t = m.ProfileCustomizationSubsection.USER_PROFILE, l.default.open(e, t, {
      scrollPosition: n,
      analyticsLocation: o,
      analyticsLocations: u,
      openWithoutBackstack: f
    })
  }, [I, n, o, u, f, T, E]), I]
}