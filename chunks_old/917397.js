"use strict";
n.r(t), n.d(t, {
  UserRulesAgreementLevel: function() {
    return a
  },
  useUserRulesAgreementLevel: function() {
    return p
  },
  useUserAccountVerified: function() {
    return E
  },
  useUserAccountAgeDate: function() {
    return g
  },
  useAuditLogDate: function() {
    return S
  },
  useGuildMemberJoinedAtDate: function() {
    return C
  }
}), n("702976"), n("222007");
var a, l, s = n("884691"),
  i = n("866227"),
  r = n.n(i),
  u = n("65597"),
  o = n("26989"),
  d = n("305961"),
  c = n("697218"),
  f = n("568734"),
  h = n("299039");
n("178406"), n("645266");
var m = n("657944");

function p(e, t) {
  var n, a;
  let l = (0, u.useStateFromStores)([c.default], () => c.default.getUser(e), [e]),
    s = (0, u.useStateFromStores)([o.default], () => o.default.getMember(t, e), [t, e]),
    i = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]),
    r = null == i ? void 0 : i.hasVerificationGate();
  return r ? null == l || null == s || null == i ? 1 : (0, f.hasFlag)(null !== (n = s.flags) && void 0 !== n ? n : 0, m.GuildMemberFlags.BYPASSES_VERIFICATION) || (0, f.hasFlag)(null !== (a = s.flags) && void 0 !== a ? a : 0, m.GuildMemberFlags.COMPLETED_ONBOARDING) ? 2 : 1 : 0
}

function E(e, t) {
  var n;
  let a = (0, u.useStateFromStores)([c.default], () => c.default.getUser(e), [e]),
    l = (0, u.useStateFromStores)([o.default], () => o.default.getMember(t, e), [t, e]);
  if (null == a || null == l) return !1;
  let s = (0, f.hasFlag)(null !== (n = l.flags) && void 0 !== n ? n : 0, m.GuildMemberFlags.BYPASSES_VERIFICATION),
    i = (null == a ? void 0 : a.isPhoneVerified()) || (null == a ? void 0 : a.isStaff()),
    r = (null == l ? void 0 : l.joinedAt) != null;
  return a.verified || i || r || s
}

function g(e) {
  return s.useMemo(() => {
    let t = h.default.extractTimestamp(e);
    return r(new Date(t)).format("MMM DD, YYYY")
  }, [e])
}

function S(e) {
  return s.useMemo(() => {
    let t = h.default.extractTimestamp(e);
    return r(new Date(t)).format("MM/DD/YYYY")
  }, [e])
}

function C(e, t) {
  let n = (0, u.useStateFromStores)([o.default], () => o.default.getMember(t, e), [t, e]),
    a = null == n ? void 0 : n.joinedAt;
  return s.useMemo(() => null == a ? "" : r(new Date(a)).format("MMM DD, YYYY"), [a])
}(l = a || (a = {}))[l.NO_GATE = 0] = "NO_GATE", l[l.NO_AGREEMENT = 1] = "NO_AGREEMENT", l[l.AGREED = 2] = "AGREED"