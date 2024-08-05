var r, i, a, s, o = n(848246),
  l = n(442837),
  u = n(570140),
  c = n(168232),
  d = n(933843),
  _ = n(485731);
let E = {
perksDemos: null,
activated: {},
lastFetched: null,
overrides: {}
  },
  f = E;
class h extends(s = l.ZP.Store) {
  getPerksDemos() {
return f.perksDemos;
  }
  getActivated() {
return f.activated;
  }
  shouldFetch() {
return null == f.lastFetched || Date.now() > f.lastFetched + 86400000;
  }
  shouldActivate(e) {
var t;
return (null === (t = f.perksDemos) || void 0 === t ? void 0 : t[e]) === !0 && !0 !== f.activated[e];
  }
  overrides() {
return f.overrides;
  }
}
a = 'PerksDemosStore', (i = 'displayName') in(r = h) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new h(u.Z, {
  PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: function(e) {
let {
  demos: t
} = e;
f.perksDemos = t, f.lastFetched = Date.now();
  },
  PREMIUM_PERKS_DEMOS_FETCH_FAILURE: function() {
f.perksDemos = E.perksDemos, f.lastFetched = null;
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: function(e) {
let {
  perkType: t
} = e;
f.activated[t] = !0;
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: function(e) {
let {
  perkType: t
} = e;
f.activated[t] = !1;
  },
  PREMIUM_PERKS_DEMO_COMPLETE: function(e) {
let {
  perkType: t
} = e;
null != f.perksDemos && !0 === f.activated[t] && (f.perksDemos[t] = !1);
  },
  LOGOUT: function() {
f = E;
  },
  PREMIUM_PERKS_DEMO_OVERRIDE: function(e) {
let {
  user: t,
  perkType: n,
  available: r,
  activateSuccess: i
} = e;
void 0 !== t && (0, c.QI)(t) && (f.overrides[n] = {
  available: r,
  activateSuccess: i
}, null == f.perksDemos && (f.perksDemos = {}), f.perksDemos[n] = r || !1, f.activated[n] = !1, f.lastFetched = null);
  },
  STREAM_START: function() {
if (!!(0, d.vw)(o.q.STREAM_HIGH_QUALITY))
  (0, _.cD)(!0);
  },
  STREAM_STOP: function() {
(0, _.cD)(!1);
  }
});