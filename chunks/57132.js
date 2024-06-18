"use strict";
n.d(t, {
  PP: function() {
    return c
  },
  SO: function() {
    return I
  },
  cn: function() {
    return E
  }
}), n(411104), n(470079);
var i, r, s = n(652874),
  o = n(433517);
n(353926), n(311089);
var a = n(777639),
  l = n(721877),
  u = n(488832);
(r = i || (i = {}))[r.EXISTING_USERS = 0] = "EXISTING_USERS", r[r.NEW_USERS = 1] = "NEW_USERS";
let _ = "tabs-v2-experiment-key",
  d = (0, s.Z)((e, t) => ({
    _experimentCacheInitialized: !1,
    _experimentEnabled: !1,
    getExperimentEnabled() {
      if (!(0, l.I)()) return !1;
      let {
        _experimentCacheInitialized: e,
        _experimentEnabled: n
      } = t();
      if (!e) throw Error("MainTabsV2ExperimentStore: Experiment cache not initialized");
      return n
    },
    setExperimentEnabled: t => {
      e({
        _experimentEnabled: t
      }), o.K.set(_, t)
    },
    setInitialized: () => {
      e(e => e._experimentCacheInitialized ? e : {
        _experimentCacheInitialized: !0,
        _experimentEnabled: !0 === o.K.get(_)
      })
    }
  }));

function c() {
  return E() ? (0, a.D)() : void 0
}

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.getState().getExperimentEnabled();
  return (0, u.y)(e), e
}

function I() {
  return E(d(e => e.getExperimentEnabled()))
}