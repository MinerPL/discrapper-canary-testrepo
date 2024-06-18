"use strict";
let i, r, s;
n(47120), n(653041), n(724458), n(757143), n(789020);
var o, a, l, u = n(392711),
  _ = n.n(u),
  d = n(261470),
  c = n(442837),
  E = n(902704),
  I = n(846519),
  T = n(570140),
  h = n(586902),
  S = n(726542),
  f = n(524331),
  N = n(710845),
  A = n(594190),
  m = n(314897),
  O = n(553795),
  R = n(517100),
  C = n(158776),
  p = n(606304),
  g = n(979651),
  L = n(626135),
  v = n(81063),
  D = n(70956),
  M = n(823379),
  P = n(781518),
  y = n(616922),
  U = n(981631);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let G = S.Z.get(U.ABu.SPOTIFY),
  w = "hm://pusher/v1/connections/",
  k = 30 * D.Z.Millis.SECOND,
  B = 30 * D.Z.Millis.SECOND,
  x = 5 * D.Z.Millis.MINUTE,
  V = 5 * D.Z.Millis.SECOND,
  Z = 1.5 * D.Z.Millis.SECOND,
  H = 1 * D.Z.Millis.MINUTE,
  F = 3 * D.Z.Millis.SECOND;
(l = o || (o = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", l.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
let Y = {
    MESSAGE: "message",
    PING: "ping",
    PONG: "pong"
  },
  j = "single",
  W = new N.Z("Spotify"),
  K = new I.V7,
  z = new I.V7,
  q = new I.V7,
  X = new I.V7,
  Q = new I.V7,
  J = {},
  $ = {},
  ee = {},
  et = !1,
  en = null;

function ei() {
  for (let e in J) {
    let t = J[e];
    if (!t.connected || null == $[e]) continue;
    let n = $[e].find(e => e.is_active);
    if (null != n) return {
      socket: t,
      device: n
    }
  }
}

function er(e) {
  T.Z.dispatch({
    type: "SPOTIFY_PLAYER_STATE",
    accountId: e,
    track: null,
    volumePercent: 0,
    isPlaying: !1,
    repeat: !1,
    position: 0,
    context: null
  })
}

function es(e) {
  return C.Z.findActivity(e, e => null != e.party && null != e.party.id && (0, y.Ps)(e.party.id))
}
let eo = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class ea {
  get connected() {
    return null != this.socket && eo.has(this.socket.readyState)
  }
  connect() {
    !this.connected && !this._requestedConnect && (W.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, eS(this.accountId, this.accessToken).then(() => {
      this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
    }).catch(e => {
      W.error(e), this._requestedConnect = !1, this.handleClose()
    }))
  }
  disconnect() {
    this._requestedDisconnect = !0, this.backoff.cancel();
    try {
      var e;
      null === (e = this.socket) || void 0 === e || e.close()
    } catch (e) {}
  }
  ping() {
    var e;
    this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({
      type: Y.PING
    })))
  }
  handleOpen() {
    W.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(k, () => this.ping()), (0, P.Ai)(this.accountId, this.accessToken), (0, P.PW)(this.accountId, this.accessToken)
  }
  handleMessage(e) {
    let {
      data: t
    } = e;
    if ("string" != typeof t) return;
    let {
      type: n,
      uri: i,
      payloads: r
    } = JSON.parse(t);
    switch (n) {
      case Y.MESSAGE:
        if ("string" == typeof i && i.startsWith(w)) this.connectionId = decodeURIComponent(i.split(w)[1]), (0, P.am)(this.accountId, this.accessToken, this.connectionId);
        else if (Array.isArray(r)) {
          for (let {
              events: e
            }
            of r)
            if (null != e)
              for (let t of e) this.handleEvent(t)
        }
      case Y.PONG:
    }
  }
  handleClose() {
    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
      let e = this.backoff.fail(() => {
        !this._requestedDisconnect && this.connect()
      });
      W.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
    } catch (e) {}
  }
  handleEvent(e) {
    let {
      type: t,
      event: n
    } = e;
    switch (t) {
      case "PLAYER_STATE_CHANGED":
        null != n && null != n.state && eh(this.accountId, this.accessToken, n.state);
        break;
      case "DEVICE_STATE_CHANGED":
        this.handleDeviceStateChange()
    }
  }
  constructor(e, t) {
    b(this, "accessToken", void 0), b(this, "accountId", void 0), b(this, "connectionId", void 0), b(this, "isPremium", void 0), b(this, "pingInterval", void 0), b(this, "backoff", void 0), b(this, "socket", void 0), b(this, "_requestedDisconnect", !1), b(this, "_requestedConnect", !1), b(this, "handleDeviceStateChange", _().throttle(() => {
      (0, P.PW)(this.accountId, this.accessToken), eS(this.accountId, this.accessToken)
    }, F)), this.accountId = e, this.accessToken = t, this.pingInterval = new I.Xp, this.backoff = new d.Z(void 0, H), this.connect()
  }
}

function el(e, t) {
  e in J ? (J[e].accessToken = t, W.info("Updated account access token: ".concat(e))) : (J[e] = new ea(e, t), W.info("Added account: ".concat(e)))
}

function eu(e) {
  if (!(e in J)) return;
  J[e].disconnect(), delete J[e];
  let t = ee[e];
  null != t && null != i && t.track.id === i.track.id && (i = null), delete ee[e], W.info("Removed account: ".concat(e))
}

function e_(e, t) {
  for (let n of $[e]) n.is_active = n.id === t
}

function ed(e, t, n) {
  var i, s;
  let o = ei();
  if (null == o) return !1;
  let {
    socket: a,
    device: l
  } = o, {
    sync_id: u,
    party: _,
    timestamps: d
  } = t;
  if (null == u || null == _ || null == _.id || !(0, y.Ps)(_.id)) return !1;
  let c = null != d && null != d.start ? d.start : Date.now(),
    E = Math.max(0, Date.now() - c),
    I = !1,
    T = ee[a.accountId];
  null != T && !1 === T.repeat && (I = null);
  let h = (0, y.c8)(null !== (s = null === (i = t.metadata) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : y.Hw.TRACK);
  if (null == h) return;
  (0, P.hY)(a.accountId, a.accessToken, u, h, {
    position: +E,
    deviceId: l.id,
    repeat: I
  }), r = {
    userId: e,
    partyId: _.id,
    trackId: u,
    startTime: c
  };
  let S = "presence change";
  n && (S = "started", L.default.track(U.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
    party_id: _.id,
    other_user_id: e
  })), W.info("Listen along ".concat(S, ": ").concat(a.accountId, " to ").concat(e, " playing ").concat(u, " on ").concat(l.name))
}

function ec() {
  L.default.track(U.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
    party_id: null != r ? r.partyId : null,
    other_user_id: null != r ? r.userId : null
  });
  let e = null != r ? r.trackId : null;
  r = null, W.info("Listen along stopped");
  let t = ei();
  if (null == t) return;
  let {
    socket: n
  } = t, i = ee[n.accountId];
  if (null != i && i.track.id === e)(0, P.wO)(n.accountId, n.accessToken)
}

function eE() {
  let e = Object.keys(J),
    t = O.Z.getAccounts().filter(e => {
      let {
        type: t
      } = e;
      return t === U.ABu.SPOTIFY
    });
  if (null == t) return !1;
  let n = t.map(e => {
    let {
      id: t
    } = e;
    return t
  });
  for (let t of e) {
    if (!n.includes(t)) eu(t)
  }
  let r = !1;
  for (let n of t) {
    if (null != i && i.account.id === n.id && (i.account = n, r = !0), !e.includes(n.id)) {
      if (null != n.accessToken) {
        el(n.id, n.accessToken);
        continue
      }(0, P.hP)(n.id)
    }
  }
  return r
}

function eI() {
  if (null == i) return;
  let e = ei();
  if (null == e) return;
  let {
    socket: t
  } = e;
  et = !0, (0, P.wO)(t.accountId, t.accessToken), L.default.track(U.rMx.SPOTIFY_AUTO_PAUSED), W.info("Playback auto paused")
}

function eT(e) {
  if (e === m.default.getId()) {
    let t = g.Z.isCurrentClientInVoiceChannel(),
      n = (0, h.O)({
        userId: e,
        checkSoundSharing: !0,
        checkSoundboardSounds: !1
      });
    t && n && null != i ? (K.start(B, eI, !1), z.stop()) : z.start(100, () => K.stop(), !1)
  }
  return !1
}

function eh(e, t, n) {
  var i, r, s, o, a, l, u, _, d, c, E, I, h, S;
  let f, N, {
    device: A,
    progress_ms: m,
    is_playing: O,
    repeat_state: R,
    item: C,
    context: p
  } = n;
  if (null != C && C.type === y.Hw.TRACK) {
    let e = C.id;
    null != C.linked_from && null != C.linked_from.id && (e = C.linked_from.id), f = {
      id: e,
      name: C.name,
      duration: C.duration_ms,
      type: y.Hw.TRACK,
      album: {
        id: null !== (a = null === (i = C.album) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : "",
        name: null !== (l = null === (r = C.album) || void 0 === r ? void 0 : r.name) && void 0 !== l ? l : "",
        image: null === (s = C.album) || void 0 === s ? void 0 : s.images[0],
        type: null !== (u = null === (o = C.album) || void 0 === o ? void 0 : o.type) && void 0 !== u ? u : y.Hw.ALBUM
      },
      artists: Array.isArray(C.artists) ? C.artists.filter(e => (0, M.lm)(e.id) && (0, M.lm)(e.name)) : [],
      isLocal: C.is_local || !1
    }
  } else null != C && C.type === y.Hw.EPISODE && (f = {
    id: C.id,
    name: C.name,
    duration: C.duration_ms,
    type: y.Hw.EPISODE,
    album: {
      id: null !== (I = null === (_ = C.show) || void 0 === _ ? void 0 : _.id) && void 0 !== I ? I : "",
      name: null !== (h = null === (d = C.show) || void 0 === d ? void 0 : d.name) && void 0 !== h ? h : "",
      image: null === (c = C.show) || void 0 === c ? void 0 : c.images[0],
      type: null !== (S = null === (E = C.album) || void 0 === E ? void 0 : E.type) && void 0 !== S ? S : y.Hw.SHOW
    },
    artists: [],
    isLocal: !1
  });
  if (null != A && !0 !== A.is_active && (A = {
      ...A,
      is_active: !0
    }), null != p && [y.Hw.PLAYLIST, y.Hw.ALBUM].includes(p.type)) {
    let n = eN.getPlayerState(e);
    N = null != n && null != n.context && n.context.uri === p.uri ? Promise.resolve(n.context) : p.type === y.Hw.ALBUM ? Promise.resolve(p) : P.rC.get(e, t, {
      url: p.href
    }).then(e => {
      let {
        body: t
      } = e;
      return t
    }).catch(e => {
      if (e && 404 === e.status) return null;
      throw e
    })
  } else N = Promise.resolve(void 0);
  return N.then(t => {
    null != t && t.type === y.Hw.PLAYLIST && !t.public && (t = null), T.Z.dispatch({
      type: "SPOTIFY_PLAYER_STATE",
      accountId: e,
      track: f,
      volumePercent: null != A ? A.volume_percent : 0,
      isPlaying: O,
      repeat: "off" !== R,
      position: m,
      context: t,
      device: A
    })
  })
}

function eS(e, t) {
  return P.rC.get(e, t, {
    url: y.C7.PLAYER,
    query: {
      additional_types: "".concat(y.Hw.TRACK, ",").concat(y.Hw.EPISODE)
    },
    onlyRetryOnAuthorizationErrors: !0
  }).then(n => {
    let i = n.body;
    null != i ? eh(e, t, i).then(() => n) : er(e)
  }).catch(() => er(e))
}
class ef extends(a = c.ZP.Store) {
  initialize() {
    this.waitFor(O.Z, p.Z), this.syncWith([C.Z], () => (function() {
      if (null == r || null == ei()) return !1;
      let {
        userId: e
      } = r, t = es(e);
      if (null == t) return q.start(x, () => {
        if (null != r && r.userId === e)(0, f.Z)()
      }), !1;
      q.stop();
      let {
        sync_id: n,
        timestamps: i,
        party: s
      } = t, o = null != n && r.trackId !== n, a = null != i && r.startTime !== i.start;
      return o || a ? ed(e, t, !1) : null != s && s.id !== r.partyId && (r.partyId = s.id, !0)
    })()), (0, P.k1)()
  }
  hasConnectedAccount() {
    return Object.keys(J).length > 0
  }
  getActiveSocketAndDevice() {
    return ei()
  }
  getPlayableComputerDevices() {
    let e = [];
    for (let t in J) {
      let n = J[t];
      if (!n.connected || null == $[t]) continue;
      let i = $[t].find(e => !e.is_restricted && "Computer" === e.type);
      null != i && e.push({
        socket: n,
        device: i
      })
    }
    return e
  }
  canPlay(e) {
    let {
      sync_id: t,
      party: n
    } = e;
    return null != ei() && null != t && null != n && null != n.id && (0, y.Ps)(n.id)
  }
  getSyncingWith() {
    return r
  }
  wasAutoPaused() {
    return et
  }
  getLastPlayedTrackId() {
    return s
  }
  getTrack() {
    return null != i ? i.track : null
  }
  getPlayerState(e) {
    return ee[e]
  }
  shouldShowActivity() {
    return null != i && i.account.showActivity && !R.Z.isIdle()
  }
  getActivity() {
    let e, t, n;
    if (null == i) return null != r ? es(r.userId) : null;
    let {
      track: {
        artists: s,
        album: o,
        name: a,
        id: l,
        duration: u,
        isLocal: _,
        type: d
      },
      startTime: c,
      context: E
    } = i, I = s.slice(0, 5);
    s.length > 0 && (e = I.map(e => {
      let {
        name: t
      } = e;
      return t.replace(/;/g, "")
    }).join("; "));
    let T = {},
      h = null != o.image ? (0, v.getAssetFromImageURL)(U.ABu.SPOTIFY, o.image.url) : null;
    null != o.image && null != h && (T.large_image = h), o.type !== j && (T.large_text = o.name), null != E && (t = E.uri), n = null != r && null != r.partyId ? r.partyId : "".concat(y.lS).concat(m.default.getId());
    let S = a.length > 128 ? a.substring(0, 125) + "..." : a,
      f = {
        context_uri: t,
        album_id: o.id,
        artist_ids: I.map(e => {
          let {
            id: t
          } = e;
          return t
        }),
        type: d,
        button_urls: []
      },
      N = {
        name: G.name,
        assets: T,
        details: S,
        state: e,
        timestamps: {
          start: c,
          end: c + u
        },
        party: {
          id: n
        }
      };
    return !_ && (N.sync_id = l, N.flags = U.xjy.PLAY | U.xjy.SYNC, N.metadata = f), N
  }
}
b(ef, "displayName", "SpotifyStore");
let eN = new ef(T.Z, {
  USER_CONNECTIONS_UPDATE: eE,
  CONNECTION_OPEN: eE,
  SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
    let {
      accountId: t,
      accessToken: n
    } = e;
    return el(t, n), !1
  },
  SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
    let {
      accountId: t
    } = e;
    eu(t)
  },
  SPOTIFY_PROFILE_UPDATE: function(e) {
    let {
      accountId: t,
      isPremium: n
    } = e, i = J[t];
    if (null == i) return !1;
    i.isPremium = n, W.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
  },
  SPOTIFY_PLAYER_STATE: function(e) {
    let {
      accountId: t,
      isPlaying: n,
      repeat: s,
      track: o,
      position: a,
      device: l,
      context: u
    } = e, d = !1;
    if (null != l) {
      if (null != $[t]) {
        let e = $[t].find(e => {
          let {
            id: t
          } = e;
          return t === l.id
        });
        null == e ? ($[t].push(l), d = !0) : !(0, E.Z)(e, l) && (Object.assign(e, l), d = !0), e_(t, l.id)
      } else $[t] = [l], d = !0
    }
    n ? null == en || en.start(B, eI) : (o = null, null == en || en.stop());
    let c = O.Z.getAccount(t, U.ABu.SPOTIFY);
    if (null == c) return d;
    let I = ee[t],
      h = null != o ? {
        account: c,
        track: o,
        startTime: function(e, t) {
          let n = Date.now(),
            i = null != e ? e.startTime : 0,
            r = n - t;
          return Math.abs(r - i) > Z ? r : i
        }(I, a),
        context: u,
        repeat: s
      } : null,
      S = null != l && null != r && 0 === a && !n;
    !S && (ee[t] = h);
    let N = i;
    if (i = _().values(ee).find(e => null != e), eT(m.default.getId()), null == o || S ? X.stop() : X.start(o.duration - a + V, () => er(c.id)), null != r && (!n && a > 0 || null == l || null != h && r.trackId !== h.track.id) ? (W.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(V, "ms")), Q.start(V, () => {
        W.info("Stopping listening along"), (0, f.Z)(), er(c.id)
      })) : Q.isStarted() && (W.info("Listen along stop cancelled as playback of track resumed"), Q.stop()), N === i || null == I && null == h || null != I && null != h && I.track.id === h.track.id && I.startTime === h.startTime) return d;
    null != o && (T.Z.dispatch({
      type: "SPOTIFY_NEW_TRACK",
      track: o,
      connectionId: t
    }), L.default.track(U.rMx.ACTIVITY_UPDATED, {
      party_platform: U.ABu.SPOTIFY,
      track_id: o.id,
      has_images: !0,
      details: o.album.name,
      state: o.name,
      album_id: o.album.id,
      author_ids: o.artists.map(e => e.id),
      author_names: o.artists.map(e => e.name)
    }))
  },
  SPOTIFY_PLAYER_PLAY: function(e) {
    let {
      id: t
    } = e;
    s = t
  },
  ACTIVITY_PLAY: function(e) {
    var t;
    let n, {
        activity: i,
        metadata: s
      } = e,
      o = ei();
    if (null == o) return !1;
    let {
      socket: a,
      device: l
    } = o, {
      sync_id: u,
      party: _
    } = i;
    return !!(null != u && null != _ && null != _.id && (0, y.Ps)(_.id)) && (null != s && (n = s.context_uri), null != r && ec(), null != s && void((0, P.hY)(a.accountId, a.accessToken, u, null !== (t = s.type) && void 0 !== t ? t : y.Hw.TRACK, {
      contextUri: n,
      deviceId: l.id
    }), W.info("Play started: ".concat(a.accountId, " playing ").concat(u, " on ").concat(l.name))))
  },
  ACTIVITY_SYNC: function(e) {
    let {
      activity: t,
      userId: n
    } = e;
    return ed(n, t, !0)
  },
  ACTIVITY_SYNC_STOP: ec,
  SPOTIFY_SET_DEVICES: function(e) {
    let {
      accountId: t,
      devices: n
    } = e;
    $[t] = n, W.info("Devices updated for ".concat(t, ":"), n)
  },
  SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
    let {
      accountId: t,
      deviceId: n
    } = e;
    e_(t, n)
  },
  SPEAKING: function(e) {
    let {
      userId: t
    } = e;
    return eT(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: n
      } = t;
      return eT(n) || e
    }, !1)
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    let {
      settings: t
    } = e;
    if ((null == t ? void 0 : t.desktopSettings) != null) {
      null == en || en.stop();
      let {
        sourceId: e,
        sound: n
      } = null == t ? void 0 : t.desktopSettings;
      null != e && A.ZP.getObservedAppNameForWindow(e) === G.name && n ? (en = new I.Xp).start(B, eI) : (null == en || en.stop(), en = null)
    } else null == t && (null == en || en.stop(), en = null)
  }
});
t.Z = eN