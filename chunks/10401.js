n(47120);
var i, a, l, s, r = n(873546),
  o = n(442837),
  c = n(570140),
  d = n(38618),
  u = n(268967),
  h = n(188785);
let p = {},
  m = {},
  _ = !0,
  f = {},
  E = !1;

function C() {
  return u.Z;
}

function g() {
  if (f = {}, !_)
for (let [e, t] of Object.entries(u.Z)) {
  let n = !1 !== p[e];
  if (f[e] = n, n && null != t.prerequisites)
    for (let n of t.prerequisites)
      !1 !== p[n] && (f[e] = !1);
}
}
class I extends(i = o.ZP.Store) {
  initialize() {
g(), this.mustEmitChanges(e => 'CONNECTION_OPEN' !== e.type), this.waitFor(d.Z);
  }
  shouldShow(e) {
var t;
return !(!E || _ || h.a || (t = e, r.tq && [
  'writing-messages',
  'organize-by-topic'
].includes(t))) && (f[e] || !1);
  }
  shouldShowAnyIndicators() {
return !_;
  }
  getIndicators() {
return m;
  }
  getData() {
return u.Z;
  }
  getDefinition(e) {
let t = this.getData();
return null != t ? t[e] : null;
  }
}
s = 'TutorialIndicatorStore', (l = 'displayName') in(a = I) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.Z = new I(c.Z, {
  CONNECTION_OPEN: function(e) {
let {
  tutorial: t
} = e;
E = !0, _ = !0, p = {}, null != t && (_ = t.indicators_suppressed, t.indicators_confirmed.forEach(e => p[e] = !1)), g();
  },
  CONNECTION_CLOSED: function() {
E = !1;
  },
  TUTORIAL_INDICATOR_DISMISS: function(e) {
p = {
  ...p,
  [e.tutorialId]: !1
}, m = {
  ...m
}, delete m[e.tutorialId], g();
  },
  TUTORIAL_INDICATOR_SHOW: function(e) {
m = {
  ...m,
  [e.tutorialId]: e.renderData
};
  },
  TUTORIAL_INDICATOR_HIDE: function(e) {
m = {
  ...m
}, delete m[e.tutorialId];
  },
  TUTORIAL_INDICATOR_SUPPRESS_ALL: function() {
_ = !0;
  }
});