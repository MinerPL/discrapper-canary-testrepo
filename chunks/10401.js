n(47120);
var i, a, s, l, r = n(873546),
  o = n(442837),
  c = n(570140),
  u = n(38618),
  d = n(268967),
  h = n(188785);
let m = {},
  p = {},
  _ = !0,
  f = {},
  E = !1;

function g() {
  return d.Z;
}

function C() {
  if (f = {}, !_)
for (let [e, t] of Object.entries(d.Z)) {
  let n = !1 !== m[e];
  if (f[e] = n, n && null != t.prerequisites)
    for (let n of t.prerequisites)
      !1 !== m[n] && (f[e] = !1);
}
}
class I extends(i = o.ZP.Store) {
  initialize() {
C(), this.mustEmitChanges(e => 'CONNECTION_OPEN' !== e.type), this.waitFor(u.Z);
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
return p;
  }
  getData() {
return d.Z;
  }
  getDefinition(e) {
let t = this.getData();
return null != t ? t[e] : null;
  }
}
l = 'TutorialIndicatorStore', (s = 'displayName') in(a = I) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.Z = new I(c.Z, {
  CONNECTION_OPEN: function(e) {
let {
  tutorial: t
} = e;
E = !0, _ = !0, m = {}, null != t && (_ = t.indicators_suppressed, t.indicators_confirmed.forEach(e => m[e] = !1)), C();
  },
  CONNECTION_CLOSED: function() {
E = !1;
  },
  TUTORIAL_INDICATOR_DISMISS: function(e) {
m = {
  ...m,
  [e.tutorialId]: !1
}, p = {
  ...p
}, delete p[e.tutorialId], C();
  },
  TUTORIAL_INDICATOR_SHOW: function(e) {
p = {
  ...p,
  [e.tutorialId]: e.renderData
};
  },
  TUTORIAL_INDICATOR_HIDE: function(e) {
p = {
  ...p
}, delete p[e.tutorialId];
  },
  TUTORIAL_INDICATOR_SUPPRESS_ALL: function() {
_ = !0;
  }
});