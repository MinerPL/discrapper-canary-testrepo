var r, i = n(442837),
  a = n(570140),
  s = n(937111);
n(57132);
var o = n(703656),
  l = n(314897),
  u = n(430824),
  c = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = null,
  E = null,
  f = {};

function h() {
  null != _ && null == u.Z.getGuild(_) && null == s.Z.getRequest(_) && (_ = null), null != E && null == u.Z.getGuild(E) && null == s.Z.getRequest(E) && (E = null), p(_);
}

function p(e) {
  if (null != e)
f[e] = Date.now();
}

function m(e) {
  let t = !1;
  if (delete f[e], E === e && (E = null, t = !0), _ === e) {
Object.values(u.Z.getGuilds()).find(t => t.id !== e);
_ = null, (0, o.dL)(c.Z5c.ME), t = !0;
  }
  return t;
}
class I extends(r = i.ZP.PersistedStore) {
  initialize(e) {
var t, n, r;
this.mustEmitChanges(e => 'CONNECTION_OPEN' !== e.type), this.waitFor(u.Z, l.default), f = null !== (t = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== t ? t : {}, _ = null !== (n = null == e ? void 0 : e.selectedGuildId) && void 0 !== n ? n : null, E = null !== (r = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== r ? r : null;
  }
  getState() {
return {
  selectedGuildTimestampMillis: f,
  selectedGuildId: _,
  lastSelectedGuildId: E
};
  }
  getGuildId() {
return _;
  }
  getLastSelectedGuildId() {
return E;
  }
  getLastSelectedTimestamp(e) {
return _ === e ? -1 : f[e];
  }
}
d(I, 'displayName', 'SelectedGuildStore'), d(I, 'persistKey', 'SelectedGuildStore'), t.Z = new I(a.Z, {
  CONNECTION_OPEN: h,
  OVERLAY_INITIALIZE: function(e) {
_ = e.selectedGuildId, E = void 0, h();
  },
  CHANNEL_SELECT: function(e) {
let {
  guildId: t
} = e;
if (_ === t)
  return !1;
p(_), p(t), null != t && (E = t), _ = t;
  },
  GUILD_MEMBER_REMOVE: function(e) {
let {
  guildId: t,
  user: n
} = e;
return n.id === l.default.getId() && m(t);
  },
  GUILD_DELETE: function(e) {
let {
  guild: {
    id: t,
    unavailable: n
  }
} = e;
return !0 !== n && m(t);
  },
  LOGOUT: function() {
_ = null, E = null;
  }
});