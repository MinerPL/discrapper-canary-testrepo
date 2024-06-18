"use strict";
n.d(t, {
  Ai: function() {
    return T
  },
  PW: function() {
    return h
  },
  Tu: function() {
    return A
  },
  am: function() {
    return function e(t, n, i) {
      let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
      return E.put(t, n, {
        url: _.C7.NOTIFICATIONS_PLAYER,
        query: {
          connection_id: i
        }
      }).catch(o => s <= 0 ? Promise.reject(o) : (0, r.GR)(5e3).then(() => e(t, n, i, s - 1)))
    }
  },
  hP: function() {
    return I
  },
  hY: function() {
    return S
  },
  k1: function() {
    return N
  },
  rC: function() {
    return E
  },
  wO: function() {
    return f
  }
}), n(177593);
var i = n(544891),
  r = n(846519),
  s = n(570140),
  o = n(70956),
  a = n(877481),
  l = n(358085),
  u = n(18323),
  _ = n(616922),
  d = n(981631);

function c(e, t, n, i) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
  return e(i = {
    ...i,
    headers: {
      authorization: "Bearer ".concat(n)
    }
  }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
    let o = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
    return (401 === n.status || o) && s > 0 ? (202 === n.status ? (0, r.GR)(5e3) : Promise.resolve()).then(() => I(t)).then(n => {
      let {
        body: {
          access_token: r
        }
      } = n;
      return c(e, t, r, i, s - 1)
    }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
  })
}
let E = {
  get: c.bind(null, i.tn.get),
  put: c.bind(null, i.tn.put)
};

function I(e) {
  return i.tn.get({
    url: d.ANM.CONNECTION_ACCESS_TOKEN(d.ABu.SPOTIFY, e),
    oldFormErrors: !0
  }).catch(t => {
    var n;
    if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === d.evJ.CONNECTION_REVOKED) s.Z.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
      accountId: e
    });
    else if (429 === t.status) {
      let n = t.headers["retry-after"] * o.Z.Millis.SECOND,
        i = isNaN(n) || 0 === n ? 5e3 : n;
      return (0, r.GR)(i).then(() => I(e))
    }
    return Promise.reject(t)
  }).then(t => {
    let {
      access_token: n
    } = t.body;
    return s.Z.dispatch({
      type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
      accountId: e,
      accessToken: n
    }), t
  })
}

function T(e, t) {
  return E.get(e, t, {
    url: _.C7.PROFILE
  }).then(t => (s.Z.dispatch({
    type: "SPOTIFY_PROFILE_UPDATE",
    accountId: e,
    isPremium: "premium" === t.body.product
  }), t))
}

function h(e, t) {
  return E.get(e, t, {
    url: _.C7.PLAYER_DEVICES
  }).then(t => (t.body && s.Z.dispatch({
    type: "SPOTIFY_SET_DEVICES",
    accountId: e,
    devices: t.body.devices
  }), t))
}

function S(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
    o = _.C7.PLAYER_OPEN(i, n, !1),
    {
      deviceId: a,
      position: l,
      contextUri: u,
      repeat: d
    } = r;
  return E.put(e, t, {
    url: _.C7.PLAYER_PLAY,
    query: {
      device_id: a
    },
    body: {
      context_uri: null != u ? u : void 0,
      uris: null == u ? [o] : void 0,
      offset: null != u ? {
        uri: o
      } : void 0,
      position_ms: null != l ? l : 0
    }
  }).then(n => null == d ? n : E.put(e, t, {
    url: _.C7.PLAYER_REPEAT,
    query: {
      device_id: a,
      state: d ? "context" : "off"
    }
  })).then(e => (s.Z.dispatch({
    type: "SPOTIFY_PLAYER_PLAY",
    id: n,
    position: null != l ? l : 0
  }), e))
}

function f(e, t) {
  return E.put(e, t, {
    url: _.C7.PLAYER_PAUSE
  }).then(e => (s.Z.dispatch({
    type: "SPOTIFY_PLAYER_PAUSE"
  }), e))
}

function N() {
  if (!u.Z.isProtocolRegistered())(0, l.isDesktop)() && a.Z.isProtocolRegistered(_.M5).then(e => {
    s.Z.dispatch({
      type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
      isRegistered: e
    })
  })
}

function A(e, t) {
  s.Z.dispatch({
    type: "SPOTIFY_SET_ACTIVE_DEVICE",
    accountId: e,
    deviceId: t
  })
}