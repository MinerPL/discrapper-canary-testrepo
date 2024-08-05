var l, s, i, a, r, d, u = t(442837),
  c = t(570140),
  o = t(314897),
  h = t(900849);
(l = r || (r = {})).UNSET = 'unset', l.FETCHING = 'fetching', l.FAILED = 'failed', l.SUCCEEDED = 'succeeded';
let _ = {};
class m extends(d = u.ZP.Store) {
  initialize() {
this.waitFor(o.default);
  }
  isFetchingGuild(e) {
let n = _[e];
return null != n && 'fetching' === n.fetchState;
  }
  getGuild(e) {
let n = _[e];
return null != n ? n.guild : null;
  }
  hasFetchFailed(e) {
let n = _[e];
return null != n && 'failed' === n.fetchState;
  }
}
a = 'GuildPopoutStore', (i = 'displayName') in(s = m) ? Object.defineProperty(s, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = a, n.Z = new m(c.Z, {
  GUILD_POPOUT_FETCH_START: function(e) {
let {
  guildId: n
} = e;
_[n] = {
  ..._[n],
  fetchState: 'fetching'
};
  },
  GUILD_POPOUT_FETCH_SUCCESS: function(e) {
let {
  guildId: n,
  guild: t
} = e, l = (0, h.PP)(t);
_[n] = {
  ..._[n],
  guild: l,
  fetchState: 'succeeded'
};
  },
  GUILD_POPOUT_FETCH_FAILURE: function(e) {
let {
  guildId: n
} = e;
_[n] = {
  ..._[n],
  fetchState: 'failed'
};
  }
});