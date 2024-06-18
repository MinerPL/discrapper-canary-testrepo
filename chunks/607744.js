"use strict";
n(47120), n(789020), n(653041);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(630388),
  _ = n(709054),
  d = n(271383),
  c = n(430824),
  E = n(594174),
  I = n(981631),
  T = n(372897);
let h = {
    notClaimed: !1,
    notEmailVerified: !1,
    notPhoneVerified: !1,
    newAccount: !1,
    newMember: !1,
    canChat: !0
  },
  S = new Set,
  f = {};

function N(e) {
  let t;
  A(e), S.add(e);
  let n = c.Z.getGuild(e),
    i = E.default.getCurrentUser();
  if (null == n || n.verificationLevel === I.sFg.NONE || null == i || n.isOwner(i) || i.isPhoneVerified()) return;
  let r = d.ZP.getMember(n.id, i.id);
  if (null != r) {
    var s;
    if ((0, u.yE)(null !== (s = r.flags) && void 0 !== s ? s : 0, T.q.BYPASSES_VERIFICATION)) return;
    let e = new Set;
    for (let t of r.roles) {
      let i = c.Z.getRole(n.id, t);
      null != i && !i.managed && e.add(t)
    }
    let t = new Date("2022-12-02 00:00:00"),
      i = null == r.joinedAt || new Date(r.joinedAt) < t;
    if (!(n.hasFeature(I.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !i) && e.size > 0) return
  }
  let o = +i.createdAt + 6e4 * I.YeM.ACCOUNT_AGE - Date.now(),
    a = +n.joinedAt + 6e4 * I.YeM.MEMBER_AGE - Date.now(),
    _ = n.verificationLevel >= I.sFg.LOW && !i.isClaimed(),
    h = !1,
    N = !1,
    m = !1,
    O = !1;
  !i.isPhoneVerified() && !i.isStaff() && (h = n.verificationLevel >= I.sFg.LOW && !i.verified, N = n.verificationLevel >= I.sFg.VERY_HIGH, m = n.verificationLevel >= I.sFg.MEDIUM && o > 0, O = n.verificationLevel >= I.sFg.HIGH && a > 0);
  let R = [];
  O && R.push(a), m && R.push(o), R.length > 0 && (t = setTimeout(() => l.Z.dispatch({
    type: "GUILD_VERIFICATION_CHECK",
    guildId: e
  }), Math.max(...R))), f[e] = {
    notClaimed: _,
    notEmailVerified: h,
    notPhoneVerified: N,
    newAccount: m,
    newMember: O,
    canChat: !(_ || h || N || m || O),
    accountDeadline: new Date(Date.now() + o),
    memberDeadline: new Date(Date.now() + a),
    timeoutRef: t
  }
}

function A(e) {
  let t = f[e];
  null != t && clearTimeout(t.timeoutRef), delete f[e]
}

function m(e) {
  S.delete(e.guild.id), N(e.guild.id)
}
class O extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, E.default)
  }
  getCheck(e) {
    var t;
    return !S.has(e) && N(e), null !== (t = f[e]) && void 0 !== t ? t : h
  }
  canChatInGuild(e) {
    return this.getCheck(e).canChat
  }
}
o = "GuildVerificationStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new O(l.Z, {
  CONNECTION_OPEN: function() {
    for (let e in S.clear(), f) A(e)
  },
  CONNECTION_CLOSED: function() {
    _.default.keys(f).forEach(A)
  },
  CURRENT_USER_UPDATE: function() {
    S.clear()
  },
  GUILD_CREATE: m,
  GUILD_UPDATE: m,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    A(t.id)
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: i
    } = e;
    if (i.id !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    S.delete(n)
  },
  GUILD_VERIFICATION_CHECK: function(e) {
    let {
      guildId: t
    } = e;
    N(t)
  }
})