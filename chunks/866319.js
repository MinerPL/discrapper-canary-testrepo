n.d(s, {
  G: function() {
return o;
  },
  b: function() {
return d;
  }
});
var t = n(442837),
  l = n(430824),
  i = n(594174),
  a = n(944163),
  r = n(981631);

function o(e) {
  let {
guildId: s
  } = e, n = (0, t.e7)([a.Z], () => a.Z.get(s)), i = null == n ? void 0 : n.guild;
  return (0, t.e7)([l.Z], () => {
var e;
let n = null === (e = l.Z.getGuild(s)) || void 0 === e ? void 0 : e.verificationLevel,
  t = null == i ? void 0 : i.verification_level;
return (null != n ? n : t) === r.sFg.VERY_HIGH;
  }, [
s,
i
  ]);
}

function d(e) {
  let {
guildId: s
  } = e, n = (0, t.e7)([i.default], () => i.default.getCurrentUser()), l = o({
guildId: s
  }), a = (null == n ? void 0 : n.isPhoneVerified()) || (null == n ? void 0 : n.isStaff()), r = (null == n ? void 0 : n.verified) || a;
  return {
isPhoneVerificationLevel: l,
isCurrentUserVerified: !!(l ? a : r)
  };
}