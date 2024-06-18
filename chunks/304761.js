"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(442837),
  _ = n(570140),
  d = n(865427);
(i = a || (a = {}))[i.NotResolved = 0] = "NotResolved", i[i.Resolving = 1] = "Resolving", i[i.Resolved = 2] = "Resolved", i[i.Invalid = 3] = "Invalid";
let c = 0,
  E = null,
  I = {};
class T extends(l = u.ZP.Store) {
  getCurrentBuildOverride() {
    return 0 === c && (c = 1, (0, d.Ce)().then(e => {
      _.Z.dispatch({
        type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
        overrides: e
      })
    })), {
      state: c,
      overrides: E
    }
  }
  getBuildOverride(e) {
    return ! function(e) {
      if (e in I) return;
      let t = (0, d.r4)(e);
      if (null == t) {
        I = {
          ...I,
          [e]: {
            url: e,
            state: 3
          }
        };
        return
      }
      I = {
        ...I,
        [e]: {
          url: e,
          validatedURL: t.url,
          payload: String(t.payload),
          state: 1
        }
      };
      (0, d._I)(t.url).then(t => {
        _.Z.dispatch({
          type: "BUILD_OVERRIDE_RESOLVED",
          url: e,
          override: t
        })
      })
    }(e), I[e]
  }
  getBuildOverrides() {
    return I
  }
}
o = "BuildOverrideStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.C = new T(_.Z, {
  BUILD_OVERRIDE_RESOLVED: function(e) {
    let {
      url: t,
      override: n
    } = e;
    I = {
      ...I,
      [t]: {
        ...I[t],
        state: null == n ? 3 : 2,
        override: n
      }
    }
  },
  CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
    let {
      overrides: t
    } = e;
    c = 2, E = t
  }
})