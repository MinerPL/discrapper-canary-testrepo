"use strict";
n.r(t), n.d(t, {
  socket: function() {
    return E
  },
  localPresenceState: function() {
    return p
  },
  localVoiceState: function() {
    return v
  },
  localLobbyVoiceStates: function() {
    return S
  },
  setDispatchSocketMessageFunction: function() {
    return I
  }
}), n("222007"), n("424973"), n("70102");
var i = n("35092"),
  s = n("913144"),
  r = n("49671"),
  a = n("605250"),
  o = n("271938"),
  l = n("599110"),
  u = n("35468"),
  d = n("773336"),
  c = n("509065"),
  f = n("447214"),
  _ = n("413196"),
  h = n("764867"),
  g = n("292892");
let m = new a.default("ConnectionStore"),
  E = new f.default,
  p = new h.default(E),
  v = new g.default(E),
  S = new _.default(E),
  T = null;

function I(e) {
  T = e
}
E.handleIdentify = () => {
  let e = o.default.getToken();
  return (m.verbose("handleIdentify called", {
    hasToken: null != e
  }), null == e) ? null : {
    token: e,
    properties: l.default.getSuperProperties(),
    presence: p.getState()
  }
}, (0, d.isDesktop)() && r.default.remotePowerMonitor.on("resume", () => {
  E.expeditedHeartbeat(5e3, "power monitor resumed")
}), u.default.addOfflineCallback(() => {
  E.networkStateChange(15e3, "network detected offline.", !1)
}), u.default.addOnlineCallback(() => {
  E.networkStateChange(5e3, "network detected online.")
}), E.on("disconnect", e => {
  let {
    code: t,
    reason: n
  } = e;
  s.default.dispatch({
    type: "CONNECTION_CLOSED",
    code: t,
    reason: n
  })
}), E.on("close", e => {
  let {
    code: t,
    reason: n
  } = e;
  s.default.dispatch({
    type: "CONNECTION_INTERRUPTED",
    code: t,
    reason: n
  })
});
let C = [],
  A = null,
  y = 33,
  N = new Set(["READY", "INITIAL_GUILD"]);

function R() {
  A = null;
  let e = Date.now(),
    t = C.slice();
  if (C.length = 0, null == T) throw Error("setDispatchSocketMessageFunction needs to be called first!");
  let n = "none";
  try {
    i.default.Emitter.batched(() => {
      t.forEach(e => {
        let [t, i] = e;
        n = t, T(t, i)
      }), c.default.flush()
    })
  } catch (e) {
    E.resetSocketOnError(e, n)
  }
  let s = Date.now() - e;
  s > 100 ? (m.log("Dispatched ".concat(t.length, " messages in ").concat(s, "ms")), y = 250) : y = 33
}
E.on("dispatch", (e, t) => {
  C.push([e, t]), N.has(e) ? (null != A && clearTimeout(A), R()) : null == A && (A = setTimeout(R, y))
})