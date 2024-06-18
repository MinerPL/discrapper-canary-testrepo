"use strict";
n.d(t, {
  L6: function() {
    return V
  },
  Rc: function() {
    return B
  },
  W1: function() {
    return H
  },
  WH: function() {
    return v
  },
  aP: function() {
    return G
  },
  dV: function() {
    return x
  },
  g: function() {
    return b
  },
  iV: function() {
    return U
  },
  n9: function() {
    return w
  },
  pR: function() {
    return y
  },
  rn: function() {
    return P
  },
  tE: function() {
    return Z
  },
  tK: function() {
    return D
  },
  xc: function() {
    return k
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(990547),
  o = n(544891),
  a = n(570140),
  l = n(258609),
  u = n(569545),
  _ = n(525925),
  d = n(522474),
  c = n(199902),
  E = n(314897),
  I = n(592125),
  T = n(430824),
  h = n(944486),
  S = n(979651),
  f = n(934415),
  N = n(70956),
  A = n(557457),
  m = n(573261),
  O = n(26151),
  R = n(493683),
  C = n(475179),
  p = n(287734),
  g = n(981631),
  L = n(70722);

function v(e, t, n) {
  a.Z.dispatch({
    type: "STREAM_START",
    streamType: null != e ? L.lo.GUILD : L.lo.CALL,
    guildId: e,
    channelId: t,
    appContext: __OVERLAY__ ? g.IlC.OVERLAY : g.IlC.APP,
    ...n
  })
}

function D(e, t) {
  let n = (0, u.V9)(e);
  a.Z.dispatch({
    type: "STREAM_SET_PAUSED",
    streamKey: n,
    paused: t
  })
}

function M(e, t) {
  let n = I.Z.getChannel(t);
  return r()(null != n, "Cannot join a null voice channel"), !S.Z.isInChannel(t) && (0, f.rY)(n, S.Z, T.Z)
}

function P(e, t) {
  if (null != l.Z.getRemoteSessionId()) return;
  let {
    guildId: n,
    channelId: i
  } = e;
  if (null != n && M(n, i)) return;
  let r = (0, u.V9)(e),
    s = (null == t ? void 0 : t.forceMultiple) || c.Z.getAllActiveStreamsForChannel(i).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== E.default.getId()
    }).length >= 2;
  a.Z.dispatch({
    type: "STREAM_WATCH",
    streamKey: r,
    allowMultiple: s
  }), !s && (null == t || !t.noFocus) && C.Z.selectParticipant(e.channelId, r)
}

function y(e, t) {
  a.Z.dispatch({
    type: "STREAM_UPDATE_SELF_HIDDEN",
    channelId: e,
    selfStreamHidden: t
  })
}

function U(e, t) {
  let {
    guildId: n,
    channelId: i
  } = e;
  if (null != n && M(n, i)) return;
  P(e, t);
  let r = d.Z.getWindowOpen(g.KJ3.CHANNEL_CALL_POPOUT),
    s = h.Z.getVoiceChannelId();
  if (!r || s !== i)(0, _.Z)(e)
}

function b(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  G(e, t), a.Z.dispatch({
    type: "STREAM_STOP",
    streamKey: e,
    appContext: __OVERLAY__ ? g.IlC.OVERLAY : g.IlC.APP
  })
}

function G(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  a.Z.dispatch({
    type: "STREAM_CLOSE",
    streamKey: e,
    canShowFeedback: t
  })
}
async function w(e, t, n) {
  let i = (0, u.V9)({
    streamType: null != e ? L.lo.GUILD : L.lo.CALL,
    guildId: e,
    channelId: t,
    ownerId: n
  });
  a.Z.dispatch({
    type: "STREAM_PREVIEW_FETCH_START",
    streamKey: i
  });
  try {
    let e = await o.tn.get({
      url: g.ANM.STREAM_PREVIEW(i),
      query: {
        version: Date.now()
      },
      oldFormErrors: !0
    });
    a.Z.dispatch({
      type: "STREAM_PREVIEW_FETCH_SUCCESS",
      streamKey: i,
      previewURL: e.body.url
    })
  } catch (t) {
    let e;
    429 === t.status && (e = t.body.retry_after * N.Z.Millis.SECOND), a.Z.dispatch({
      type: "STREAM_PREVIEW_FETCH_FAIL",
      streamKey: i,
      retryAfter: e
    })
  }
}
async function k(e) {
  try {
    await m.Z.post({
      url: g.ANM.STREAM_NOTIFY(e),
      oldFormErrors: !0,
      trackedActionData: {
        event: s.NetworkActionNames.STREAM_NOTIFY
      }
    })
  } catch (e) {}
}

function B(e) {
  (0, A.Ye)(e.preset, e.resolution, e.frameRate), a.Z.dispatch({
    type: "STREAM_UPDATE_SETTINGS",
    ...e
  })
}

function x(e, t) {
  o.tn.patch({
    url: g.ANM.STREAM(e),
    body: {
      region: t
    },
    oldFormErrors: !0
  })
}

function V() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = c.Z.getCurrentUserActiveStream();
  null != t && b((0, u.V9)(t), e)
}

function Z(e) {
  let {
    channelId: t,
    pid: n,
    sourceId: i,
    sourceName: r
  } = e;
  (null != n || null != i || null != r) && (a.Z.dispatch({
    type: "START_BROADCAST_STREAM",
    options: {
      pid: n,
      sourceId: i,
      sourceName: r
    }
  }), null == t ? R.Z.createBroadcastPrivateChannel() : v(null, t, {
    pid: n,
    sourceId: i,
    sourceName: r
  }))
}

function H(e, t) {
  let n = E.default.getId(),
    i = (0, u.my)(t),
    r = h.Z.getVoiceChannelId();
  null != r && r !== e && p.default.disconnect(), R.Z.addRecipient(e, n, void 0, () => {
    O.Z.call(e, !1, !1, null, () => {
      U(i)
    })
  })
}