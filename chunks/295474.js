t.d(n, {
  Ux: function() {
return N;
  },
  gS: function() {
return L;
  },
  ww: function() {
return U;
  }
}), t(789020);
var s = t(470079),
  o = t(399606),
  r = t(230711),
  i = t(906732),
  a = t(18438),
  l = t(314897),
  u = t(271383),
  _ = t(430824),
  d = t(496675),
  c = t(914010),
  I = t(715903),
  A = t(981631),
  O = t(372897),
  E = t(526761),
  M = t(689938);

function N(e) {
  return (0, o.e7)([
l.default,
u.ZP
  ], () => {
if (null == e)
  return !1;
let n = l.default.getId();
return (0, I.EY)(u.ZP.getMember(e, n));
  }, [e]);
}

function L(e) {
  return (0, o.cj)([
l.default,
u.ZP,
c.Z,
_.Z
  ], () => {
let n = {
    nick: void 0,
    bio: void 0
  },
  t = c.Z.getGuildId(),
  s = null != e ? e : t,
  o = _.Z.getGuild(s);
if (null == o || null == s)
  return n;
let r = l.default.getId(),
  i = u.ZP.getMember(s, r),
  a = (0, I.Ow)(null == i ? void 0 : i.flags);
if (0 === a.size)
  return n;
if (a.has(O.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
  if (null == e) {
    var d;
    n.nick = [M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
      guildName: null !== (d = o.name) && void 0 !== d ? d : ''
    })];
  } else
    n.nick = [M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
}
return a.has(O.q.AUTOMOD_QUARANTINED_BIO) && (n.bio = [M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), n;
  }, [e]);
}

function U(e) {
  let {
guildId: n,
scrollPosition: t,
analyticsLocation: l,
analyticsLocations: u,
openWithoutBackstack: c
  } = e, {
analyticsLocations: I
  } = (0, i.ZP)(), O = (0, o.e7)([_.Z], () => _.Z.getGuild(n), [n]), M = (0, o.e7)([d.Z], () => null != O && d.Z.can(A.Plq.CHANGE_NICKNAME, O), [O]);
  return [
s.useCallback(() => {
  if (null == O)
    return;
  let e = A.oAB.PROFILE_CUSTOMIZATION,
    n = E.NB.GUILD;
  M ? (0, a.Fq)(O, null != u ? u : I) : n = E.NB.USER_PROFILE;
  r.Z.open(e, n, {
    scrollPosition: t,
    analyticsLocation: l,
    analyticsLocations: u,
    openWithoutBackstack: c
  });
}, [
  M,
  t,
  l,
  u,
  c,
  O,
  I
]),
M
  ];
}