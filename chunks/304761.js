n.d(t, {
  Z: function() {
return s;
  }
});
var r, i, a, o, s, l, u = n(442837),
  c = n(570140),
  d = n(865427);
(r = s || (s = {}))[r.NotResolved = 0] = 'NotResolved', r[r.Resolving = 1] = 'Resolving', r[r.Resolved = 2] = 'Resolved', r[r.Invalid = 3] = 'Invalid';
let _ = 0,
  E = null,
  f = {};
class h extends(l = u.ZP.Store) {
  getCurrentBuildOverride() {
return 0 === _ && (_ = 1, (0, d.Ce)().then(e => {
  c.Z.dispatch({
    type: 'CURRENT_BUILD_OVERRIDE_RESOLVED',
    overrides: e
  });
})), {
  state: _,
  overrides: E
};
  }
  getBuildOverride(e) {
return ! function(e) {
  if (e in f)
    return;
  let t = (0, d.r4)(e);
  if (null == t) {
    f = {
      ...f,
      [e]: {
        url: e,
        state: 3
      }
    };
    return;
  }
  f = {
    ...f,
    [e]: {
      url: e,
      validatedURL: t.url,
      payload: String(t.payload),
      state: 1
    }
  };
  (0, d._I)(t.url).then(t => {
    c.Z.dispatch({
      type: 'BUILD_OVERRIDE_RESOLVED',
      url: e,
      override: t
    });
  });
}(e), f[e];
  }
  getBuildOverrides() {
return f;
  }
}
o = 'BuildOverrideStore', (a = 'displayName') in(i = h) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.C = new h(c.Z, {
  BUILD_OVERRIDE_RESOLVED: function(e) {
let {
  url: t,
  override: n
} = e;
f = {
  ...f,
  [t]: {
    ...f[t],
    state: null == n ? 3 : 2,
    override: n
  }
};
  },
  CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
let {
  overrides: t
} = e;
_ = 2, E = t;
  }
});