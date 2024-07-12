n(47120);
var i, a = n(442837),
  l = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let r = {};
class o extends(i = a.ZP.PersistedStore) {
  initialize(e) {
for (let t in e) {
  let n = e[t];
  r[t] = new Set(n);
}
  }
  hasViewedPrompt(e, t) {
let n = r[t];
return null != n && (!!n.has(e) || !1);
  }
  getState() {
return r;
  }
}
s(o, 'displayName', 'GuildPromptsStore'), s(o, 'persistKey', 'GuildPromptsStore'), t.Z = new o(l.Z, {
  GUILD_PROMPT_VIEWED: function(e) {
let {
  prompt: t,
  guildId: n
} = e, i = r[n];
return null == i ? (r[n] = new Set(), r[n].add(t), !0) : !i.has(t) && (i.add(t), !0);
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
return null != r[t.id] && !t.unavailable && (delete r[t.id], !0);
  }
});