"use strict";
n.r(t), n.d(t, {
  UserRulesAgreementLevel: function() {
    return a
  },
  useAuditLogDate: function() {
    return g
  },
  useGuildMemberJoinedAtDate: function() {
    return S
  },
  useUserAccountAgeDate: function() {
    return C
  },
  useUserAccountVerified: function() {
    return E
  },
  useUserRulesAgreementLevel: function() {
    return p
  }
}), n("789020"), n("47120");
var a, l, s = n("470079"),
  i = n("913527"),
  r = n.n(i),
  o = n("399606"),
  u = n("271383"),
  d = n("430824"),
  c = n("594174"),
  f = n("630388"),
  h = n("709054");
n("893966"), n("527379");
var m = n("372897");

function p(e, t) {
  var n, a;
  let l = (0, o.useStateFromStores)([c.default], () => c.default.getUser(e), [e]),
    s = (0, o.useStateFromStores)([u.default], () => u.default.getMember(t, e), [t, e]),
    i = (0, o.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]);
  return (null == i ? void 0 : i.hasVerificationGate()) ? null == l || null == s || null == i ? 1 : (0, f.hasFlag)(null !== (n = s.flags) && void 0 !== n ? n : 0, m.GuildMemberFlags.BYPASSES_VERIFICATION) || (0, f.hasFlag)(null !== (a = s.flags) && void 0 !== a ? a : 0, m.GuildMemberFlags.COMPLETED_ONBOARDING) ? 2 : 1 : 0
}

function E(e, t) {
  var n;
  let a = (0, o.useStateFromStores)([c.default], () => c.default.getUser(e), [e]),
    l = (0, o.useStateFromStores)([u.default], () => u.default.getMember(t, e), [t, e]);
  if (null == a || null == l) return !1;
  let s = (0, f.hasFlag)(null !== (n = l.flags) && void 0 !== n ? n : 0, m.GuildMemberFlags.BYPASSES_VERIFICATION),
    i = (null == a ? void 0 : a.isPhoneVerified()) || (null == a ? void 0 : a.isStaff()),
    r = (null == l ? void 0 : l.joinedAt) != null;
  return a.verified || i || r || s
}

function C(e) {
  return s.useMemo(() => {
    let t = h.default.extractTimestamp(e);
    return r()(new Date(t)).format("MMM DD, YYYY")
  }, [e])
}

function g(e) {
  return s.useMemo(() => {
    let t = h.default.extractTimestamp(e);
    return r()(new Date(t)).format("MM/DD/YYYY")
  }, [e])
}

function S(e, t) {
  let n = (0, o.useStateFromStores)([u.default], () => u.default.getMember(t, e), [t, e]),
    a = null == n ? void 0 : n.joinedAt;
  return s.useMemo(() => null == a ? "" : r()(new Date(a)).format("MMM DD, YYYY"), [a])
}(l = a || (a = {}))[l.NO_GATE = 0] = "NO_GATE", l[l.NO_AGREEMENT = 1] = "NO_AGREEMENT", l[l.AGREED = 2] = "AGREED"