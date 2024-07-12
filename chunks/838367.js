var a, i, n, t, c, d, r = s(442837),
  o = s(570140),
  u = s(314897),
  h = s(900849);
(a = c || (c = {})).UNSET = 'unset', a.FETCHING = 'fetching', a.FAILED = 'failed', a.SUCCEEDED = 'succeeded';
let m = {};
class x extends(d = r.ZP.Store) {
  initialize() {
this.waitFor(u.default);
  }
  isFetchingGuild(e) {
let l = m[e];
return null != l && 'fetching' === l.fetchState;
  }
  getGuild(e) {
let l = m[e];
return null != l ? l.guild : null;
  }
  hasFetchFailed(e) {
let l = m[e];
return null != l && 'failed' === l.fetchState;
  }
}
t = 'GuildPopoutStore', (n = 'displayName') in(i = x) ? Object.defineProperty(i, n, {
  value: t,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[n] = t, l.Z = new x(o.Z, {
  GUILD_POPOUT_FETCH_START: function(e) {
let {
  guildId: l
} = e;
m[l] = {
  ...m[l],
  fetchState: 'fetching'
};
  },
  GUILD_POPOUT_FETCH_SUCCESS: function(e) {
let {
  guildId: l,
  guild: s
} = e, a = (0, h.PP)(s);
m[l] = {
  ...m[l],
  guild: a,
  fetchState: 'succeeded'
};
  },
  GUILD_POPOUT_FETCH_FAILURE: function(e) {
let {
  guildId: l
} = e;
m[l] = {
  ...m[l],
  fetchState: 'failed'
};
  }
});