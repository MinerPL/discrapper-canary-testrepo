var r, i, a, s, o = n(442837),
  l = n(570140);
let u = {
enabled: !1
  },
  c = {},
  d = {},
  _ = !1;
class E extends(s = o.ZP.DeviceSettingsStore) {
  initialize() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
_ = e.enabled;
  }
  getWaitingHighFive(e, t) {
var n;
return null === (n = c[e]) || void 0 === n ? void 0 : n[t];
  }
  getCompletedHighFive(e, t) {
var n;
return null === (n = d[e]) || void 0 === n ? void 0 : n[t];
  }
  getEnabled() {
return _;
  }
  getUserAgnosticState() {
return {
  enabled: _
};
  }
}
a = 'HighFiveStore', (i = 'persistKey') in(r = E) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new E(l.Z, {
  HIGH_FIVE_QUEUE: function(e) {
let {
  userId: t,
  channelId: n,
  emoji: r
} = e;
c[n] = {
  ...c[n],
  [t]: r
};
  },
  HIGH_FIVE_REMOVE: function(e) {
let {
  userId: t,
  channelId: n
} = e, r = c[n];
if (null == r)
  return !1;
delete r[t];
  },
  HIGH_FIVE_SET_ENABLED: function(e) {
let {
  enabled: t
} = e;
_ = t;
  },
  HIGH_FIVE_COMPLETE: function(e) {
var t;
let {
  completingEmoji: n,
  completingUserId: r,
  waitingUserId: i,
  channelId: a
} = e, s = null !== (t = c[a]) && void 0 !== t ? t : {}, o = s[i];
if (delete s[i], null == o)
  return !1;
d[a] = {
  ...d[a],
  [i]: [
    o,
    n
  ],
  [r]: [
    n,
    o
  ]
};
  },
  HIGH_FIVE_COMPLETE_CLEAR: function(e) {
var t;
let {
  firstUserId: n,
  secondUserId: r,
  channelId: i
} = e, a = null !== (t = d[i]) && void 0 !== t ? t : {};
delete a[n], delete a[r];
  }
});