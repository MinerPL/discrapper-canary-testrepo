"use strict";
n.r(t), n("47120");
var a, l = n("442837"),
  s = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = {};
class o extends(a = l.default.PersistedStore) {
  initialize(e) {
    for (let t in e) {
      let n = e[t];
      r[t] = new Set(n)
    }
  }
  hasViewedPrompt(e, t) {
    let n = r[t];
    return null != n && (!!n.has(e) || !1)
  }
  getState() {
    return r
  }
}
i(o, "displayName", "GuildPromptsStore"), i(o, "persistKey", "GuildPromptsStore"), t.default = new o(s.default, {
  GUILD_PROMPT_VIEWED: function(e) {
    let {
      prompt: t,
      guildId: n
    } = e, a = r[n];
    return null == a ? (r[n] = new Set, r[n].add(t), !0) : !a.has(t) && (a.add(t), !0)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return null != r[t.id] && !t.unavailable && (delete r[t.id], !0)
  }
})