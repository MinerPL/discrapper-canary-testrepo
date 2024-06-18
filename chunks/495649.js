"use strict";
n(47120), n(789020);
var i = n(147913),
  r = n(703656),
  s = n(271383),
  o = n(430824),
  a = n(914010),
  l = n(70956),
  u = n(630388),
  _ = n(745752),
  d = n(45966),
  c = n(17181),
  E = n(981631),
  I = n(176505),
  T = n(372897);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = null,
  f = null;
class N extends i.Z {
  constructor(...e) {
    super(...e), h(this, "actions", {
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), h(this, "handleConnectionOpen", e => {
      var t;
      null != (S = null !== (t = null != S ? S : a.Z.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(S)
    }), h(this, "handleChannelSelect", e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (S === t && f === n) return;
      if (S = null != t ? t : null, f = null != n ? n : null, null == S || null == f) return;
      let i = o.Z.getGuild(t);
      null != i && i.hasFeature(E.oNc.COMMUNITY) && d.Z.shouldFetchPrompts(S, 8 * l.Z.Millis.HOUR) && (0, _.rj)(S), this._openOnboardingIfIncomplete(S, n)
    }), h(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      (0, c.discardOnboardingPromise)(t.id)
    }), h(this, "_openOnboardingIfIncomplete", async (e, t) => {
      var n, i;
      if ((0, c.isOnboardingActiveForGuild)(e)) {
        (0, r.uL)(E.Z5c.CHANNEL(e, I.oC.GUILD_ONBOARDING));
        return
      }
      let a = o.Z.getGuild(e);
      if (null == a || !a.hasFeature(E.oNc.GUILD_ONBOARDING)) return;
      let l = s.ZP.getSelfMember(e);
      if (!(null == l || (0, u.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, T.q.COMPLETED_ONBOARDING)) && !!(0, u.yE)(null !== (i = l.flags) && void 0 !== i ? i : 0, T.q.STARTED_ONBOARDING)) await (0, c.default)({
        guildId: e
      }), (0, r.uL)(E.Z5c.CHANNEL(e, t))
    })
  }
}
t.Z = new N