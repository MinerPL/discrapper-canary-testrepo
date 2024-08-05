let i, s, l;
n(47120), n(653041);
var r, a, d, h, o, u, c = n(913527),
  C = n.n(c),
  g = n(442837),
  f = n(759174),
  p = n(570140),
  v = n(355298),
  I = n(333984),
  E = n(131704),
  S = n(592125),
  y = n(430824),
  m = n(306680),
  w = n(9156),
  _ = n(594174),
  L = n(709054),
  N = n(176505);
(d = r || (r = {})).DEFAULT = 'DEFAULT', d.FAVORITE = 'FAVORITE';
let Z = new f.h(e => {
  let {
isRequest: t,
isFavorite: n
  } = e;
  return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
}, e => {
  let {
lastMessageId: t
  } = e;
  return -t;
});

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
var t, n;
let i = null !== (n = null !== (t = m.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
  s = e.isMessageRequestTimestamp;
if (null != s) {
  let e = C()(s).valueOf(),
    t = L.default.fromTimestamp(e);
  return L.default.compare(i, t) > 0 ? i : t;
}
return i;
  }(e);
  return {
channelId: e.id,
lastMessageId: t,
isFavorite: !1,
isRequest: v.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id)
  };
}

function R() {
  Z.clear(), Object.values(S.Z.getMutablePrivateChannels()).forEach(e => {
Z.set(e.id, A(e));
  });
}

function P() {
  let e = S.Z.getMutablePrivateChannels();
  for (let t in e)
Z.set(t, A(e[t]));
}
let b = (i = [], s = [], l = [], () => {
  let e = Z.values('FAVORITE'),
t = Z.values('DEFAULT');
  return (i !== e || s !== t) && (l = [], e.forEach(e => {
let {
  channelId: t
} = e;
return l.push(t);
  }), i = e, t.forEach(e => {
let {
  channelId: t
} = e;
return l.push(t);
  }), s = t), l;
});
class O extends(a = g.ZP.Store) {
  initialize() {
this.waitFor(S.Z, y.Z, _.default, v.Z, w.ZP), this.syncWith([
  w.ZP,
  v.Z
], R);
  }
  getPrivateChannelIds() {
return b();
  }
  getSortedChannels() {
return [
  Z.values('FAVORITE'),
  Z.values('DEFAULT')
];
  }
  serializeForOverlay() {
let e = {};
return Z.values().forEach(t => {
  let {
    channelId: n,
    lastMessageId: i
  } = t;
  e[n] = i;
}), e;
  }
}
u = 'PrivateChannelSortStore', (o = 'displayName') in(h = O) ? Object.defineProperty(h, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : h[o] = u, t.Z = new O(p.Z, {
  CONNECTION_OPEN: R,
  CONNECTION_OPEN_SUPPLEMENTAL: R,
  OVERLAY_INITIALIZE: R,
  CACHE_LOADED: P,
  CACHE_LOADED_LAZY: P,
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e;
t.forEach(e => {
  ((0, E.hv)(e.type) || Z.has(e.id)) && Z.set(e.id, A(e));
});
  },
  CHANNEL_CREATE: function(e) {
let {
  channel: t
} = e;
if (!(0, E.hv)(t.type) || t.id === N.V)
  return !1;
Z.set(t.id, A(t));
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
return Z.delete(t.id);
  },
  MESSAGE_CREATE: function(e) {
let {
  channelId: t,
  message: n
} = e;
if (!Z.has(t))
  return !1;
let i = S.Z.getChannel(t);
return null != i && Z.set(t, A(i, n.id));
  },
  GUILD_CREATE: function(e) {
let t = e.guild.id;
return Z.delete(t);
  },
  LOGOUT: function() {
Z.clear();
  }
});