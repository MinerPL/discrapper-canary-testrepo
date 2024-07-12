let i, r, o;
n(47120), n(653041);
var a, l, d, u, c, f, s = n(913527),
  _ = n.n(s),
  h = n(442837),
  I = n(759174),
  b = n(570140),
  m = n(355298),
  p = n(333984),
  E = n(131704),
  S = n(592125),
  v = n(430824),
  T = n(306680),
  g = n(9156),
  A = n(594174),
  C = n(709054),
  y = n(176505);
(d = a || (a = {})).DEFAULT = 'DEFAULT', d.FAVORITE = 'FAVORITE';
let N = new I.h(e => {
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

function O(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
var t, n;
let i = null !== (n = null !== (t = T.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
  r = e.isMessageRequestTimestamp;
if (null != r) {
  let e = _()(r).valueOf(),
    t = C.default.fromTimestamp(e);
  return C.default.compare(i, t) > 0 ? i : t;
}
return i;
  }(e);
  return {
channelId: e.id,
lastMessageId: t,
isFavorite: !1,
isRequest: m.Z.isMessageRequest(e.id) || p.Z.isSpam(e.id)
  };
}

function F() {
  N.clear(), Object.values(S.Z.getMutablePrivateChannels()).forEach(e => {
N.set(e.id, O(e));
  });
}

function w() {
  let e = S.Z.getMutablePrivateChannels();
  for (let t in e)
N.set(t, O(e[t]));
}
let L = (i = [], r = [], o = [], () => {
  let e = N.values('FAVORITE'),
t = N.values('DEFAULT');
  return (i !== e || r !== t) && (o = [], e.forEach(e => {
let {
  channelId: t
} = e;
return o.push(t);
  }), i = e, t.forEach(e => {
let {
  channelId: t
} = e;
return o.push(t);
  }), r = t), o;
});
class R extends(l = h.ZP.Store) {
  initialize() {
this.waitFor(S.Z, v.Z, A.default, m.Z, g.ZP), this.syncWith([
  g.ZP,
  m.Z
], F);
  }
  getPrivateChannelIds() {
return L();
  }
  getSortedChannels() {
return [
  N.values('FAVORITE'),
  N.values('DEFAULT')
];
  }
  serializeForOverlay() {
let e = {};
return N.values().forEach(t => {
  let {
    channelId: n,
    lastMessageId: i
  } = t;
  e[n] = i;
}), e;
  }
}
f = 'PrivateChannelSortStore', (c = 'displayName') in(u = R) ? Object.defineProperty(u, c, {
  value: f,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[c] = f, t.Z = new R(b.Z, {
  CONNECTION_OPEN: F,
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  OVERLAY_INITIALIZE: F,
  CACHE_LOADED: w,
  CACHE_LOADED_LAZY: w,
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e;
t.forEach(e => {
  ((0, E.hv)(e.type) || N.has(e.id)) && N.set(e.id, O(e));
});
  },
  CHANNEL_CREATE: function(e) {
let {
  channel: t
} = e;
if (!(0, E.hv)(t.type) || t.id === y.V)
  return !1;
N.set(t.id, O(t));
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
return N.delete(t.id);
  },
  MESSAGE_CREATE: function(e) {
let {
  channelId: t,
  message: n
} = e;
if (!N.has(t))
  return !1;
let i = S.Z.getChannel(t);
return null != i && N.set(t, O(i, n.id));
  },
  GUILD_CREATE: function(e) {
let t = e.guild.id;
return N.delete(t);
  },
  LOGOUT: function() {
N.clear();
  }
});