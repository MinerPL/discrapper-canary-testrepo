"use strict";
s.r(t), s.d(t, {
  useCurrentUserVerificationStatus: function() {
    return d
  },
  useIsPhoneVerificationLevel: function() {
    return u
  }
});
var l = s("442837"),
  n = s("430824"),
  i = s("594174"),
  a = s("944163"),
  r = s("981631");

function u(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStores)([a.default], () => a.default.get(t)), i = null == s ? void 0 : s.guild;
  return (0, l.useStateFromStores)([n.default], () => {
    var e;
    let s = null === (e = n.default.getGuild(t)) || void 0 === e ? void 0 : e.verificationLevel,
      l = null == i ? void 0 : i.verification_level;
    return (null != s ? s : l) === r.VerificationLevels.VERY_HIGH
  }, [t, i])
}

function d(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser()), n = u({
    guildId: t
  }), a = (null == s ? void 0 : s.isPhoneVerified()) || (null == s ? void 0 : s.isStaff()), r = (null == s ? void 0 : s.verified) || a;
  return {
    isPhoneVerificationLevel: n,
    isCurrentUserVerified: !!(n ? a : r)
  }
}