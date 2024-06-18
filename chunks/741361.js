"use strict";
n.d(t, {
  Aj: function() {
    return a
  },
  S1: function() {
    return u
  },
  d$: function() {
    return l
  },
  hw: function() {
    return _
  },
  kU: function() {
    return d
  },
  kY: function() {
    return o
  }
});
var i = n(570140),
  r = n(156699),
  s = n(493683);
async function o(e, t, n, s) {
  let o = e.getGuildId();
  if (null != o && t === o && !await (0, r.u)(e, s, n)) return !1;
  i.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
    id: t,
    allow: n,
    deny: s
  })
}

function a(e) {
  i.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
    id: e
  })
}

function l(e) {
  i.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
    advancedMode: e
  })
}

function u() {
  i.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
  })
}

function _(e, t, n) {
  return d(e, t, [], n)
}

function d(e, t, n, r) {
  return i.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
  }), new Promise(i => {
    let r = () => {
      if (0 === t.length && 0 === n.length) return i();
      if (t.length > 0) {
        let n = t.pop();
        if (null == n) return r();
        s.Z.updatePermissionOverwrite(e, n).then(r, r)
      } else {
        let t = n.pop();
        if (null == t) return r();
        s.Z.clearPermissionOverwrite(e, t).then(r, r)
      }
    };
    r()
  }).then(() => {
    i.Z.dispatch({
      type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
      silent: r
    })
  })
}