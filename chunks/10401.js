"use strict";
n.r(t), n("47120");
var a, l, s, i, r = n("873546"),
  o = n("442837"),
  u = n("570140"),
  d = n("38618"),
  c = n("268967"),
  f = n("188785");
let h = {},
  m = {},
  p = !0,
  E = {},
  C = !1;

function g() {
  return c.default
}

function S() {
  if (E = {}, !p)
    for (let [e, t] of Object.entries(c.default)) {
      let n = !1 !== h[e];
      if (E[e] = n, n && null != t.prerequisites)
        for (let n of t.prerequisites) !1 !== h[n] && (E[e] = !1)
    }
}
class _ extends(a = o.default.Store) {
  initialize() {
    S(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(d.default)
  }
  shouldShow(e) {
    var t;
    return !(!C || p || f.CONFERENCE_MODE_ENABLED || (t = e, r.isMobile && ["writing-messages", "organize-by-topic"].includes(t))) && (E[e] || !1)
  }
  shouldShowAnyIndicators() {
    return !p
  }
  getIndicators() {
    return m
  }
  getData() {
    return c.default
  }
  getDefinition(e) {
    let t = this.getData();
    return null != t ? t[e] : null
  }
}
i = "TutorialIndicatorStore", (s = "displayName") in(l = _) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new _(u.default, {
  CONNECTION_OPEN: function(e) {
    let {
      tutorial: t
    } = e;
    C = !0, p = !0, h = {}, null != t && (p = t.indicators_suppressed, t.indicators_confirmed.forEach(e => h[e] = !1)), S()
  },
  CONNECTION_CLOSED: function() {
    C = !1
  },
  TUTORIAL_INDICATOR_DISMISS: function(e) {
    h = {
      ...h,
      [e.tutorialId]: !1
    }, m = {
      ...m
    }, delete m[e.tutorialId], S()
  },
  TUTORIAL_INDICATOR_SHOW: function(e) {
    m = {
      ...m,
      [e.tutorialId]: e.renderData
    }
  },
  TUTORIAL_INDICATOR_HIDE: function(e) {
    m = {
      ...m
    }, delete m[e.tutorialId]
  },
  TUTORIAL_INDICATOR_SUPPRESS_ALL: function() {
    p = !0
  }
})