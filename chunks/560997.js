"use strict";
n.d(t, {
  KM: function() {
    return _
  },
  R2: function() {
    return d
  },
  Zc: function() {
    return u
  }
});
var i = n(442837),
  r = n(570140),
  s = n(238514),
  o = n(675478),
  a = n(581883),
  l = n(526761);

function u(e, t, n, r) {
  let s = () => {
    var i;
    return n(null === (i = a.Z.settings[e]) || void 0 === i ? void 0 : i[t])
  };
  return {
    getSetting: s,
    updateSetting: c(s, n => o.hW.updateAsync(e, e => {
      e[t] = r(n, e[t])
    }, l.fy.INFREQUENT_USER_ACTION)),
    useSetting: () => (0, i.e7)([a.Z], s)
  }
}

function _(e, t, n) {
  let o = () => {
    var i;
    let r = s.Z.getState()[t];
    return null !== (i = null == r ? void 0 : r.settings[n]) && void 0 !== i ? i : e.getSetting()
  };
  return {
    getSetting: o,
    useSetting: () => {
      let r = e.useSetting(),
        o = (0, i.e7)([s.Z], () => {
          let e = s.Z.getState()[t];
          return null == e ? void 0 : e.settings[n]
        });
      return null != o ? o : r
    },
    updateSetting: c(o, i => s.Z.shouldSync(t) ? e.updateSetting(i) : (r.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        [t]: {
          settings: {
            [n]: i
          }
        }
      }
    }), Promise.resolve()))
  }
}

function d(e, t, n, i) {
  let s = () => {
    var t;
    return null !== (t = n()) && void 0 !== t ? t : e.getSetting()
  };
  return {
    getSetting: s,
    useSetting: () => {
      let t = e.useSetting(),
        n = i();
      return null != n ? n : t
    },
    updateSetting: c(s, n => (r.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: [t]
    }), e.updateSetting(n)))
  }
}

function c(e, t) {
  return function(n) {
    return "function" == typeof n ? t(n(e())) : t(n)
  }
}