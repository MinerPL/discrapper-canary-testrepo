"use strict";
n.d(t, {
  Ds: function() {
    return I
  },
  E7: function() {
    return f
  },
  MV: function() {
    return N
  },
  b_: function() {
    return h
  },
  v$: function() {
    return T
  }
});
var i = n(544891),
  r = n(570140),
  s = n(594190),
  o = n(569545),
  a = n(598077),
  l = n(314897),
  u = n(592125),
  _ = n(77498),
  d = n(770471),
  c = n(292584),
  E = n(981631);

function I(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
  return null != n ? n.trim() : null
}

function T(e, t) {
  if (null == t) return;
  let {
    canBroadcast: n
  } = d.Z.getCurrentConfig({
    location: "start_broadcast_for_stream"
  }, {
    autoTrackExposure: !1
  });
  if (!n) return;
  let {
    ownerId: i,
    channelId: a
  } = (0, o.my)(e);
  if (null == i || null == a) return;
  let c = l.default.getId();
  if (i !== c) return;
  let E = l.default.getSessionId();
  if (null == E) return;
  let T = u.Z.getChannel(a),
    h = null != T && T.isBroadcastChannel();
  if (null == T || i !== T.ownerId || !h) return;
  let S = function(e) {
    var t;
    let n = I(s.ZP.getGameForPID(e)),
      i = _.Z.getGameByName(n);
    return null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "0"
  }(t);
  null != S && ! function(e) {
    let t = l.default.getId(),
      n = l.default.getSessionId();
    null != t && null != n && r.Z.dispatch({
      type: "BROADCAST_START",
      broadcast: e
    })
  }({
    sessionId: E,
    userId: c,
    applicationId: S,
    channelId: T.id,
    streamKey: e
  })
}

function h() {
  r.Z.dispatch({
    type: "BROADCAST_STOP"
  })
}

function S(e) {
  let t = {};
  e.forEach(e => {
    t[e] = -1
  }), r.Z.dispatch({
    type: "BROADCASTER_BUCKETS_RECEIVED",
    data: t
  })
}
async function f() {
  let e = c.Z.getUserIdsToValidate();
  try {
    let t = await i.tn.get({
      url: E.ANM.USER_BROADCASTS,
      query: {
        user_ids: e
      }
    });
    if (t.ok && null != t.body) {
      let n = {};
      e.forEach(e => {
        var i;
        n[e] = null !== (i = t.body[e]) && void 0 !== i ? i : -1
      }), r.Z.dispatch({
        type: "BROADCASTER_BUCKETS_RECEIVED",
        data: n
      })
    } else S(e)
  } catch (t) {
    S(e)
  }
}
async function N() {
  let e = c.Z.getBroadcastsToValidateChannels().filter(e => null == e.viewers).map(e => e.channelId);
  if (0 !== e.length) try {
    let t = await i.tn.get({
      url: E.ANM.BROADCAST_CHANNELS,
      query: {
        channel_ids: e
      }
    });
    if (t.ok && null != t.body) {
      let e = t.body,
        n = {};
      e.forEach(e => {
        var t;
        let i = c.Z.getBroadcastByChannel(e.id).userId,
          r = null !== (t = e.recipients) && void 0 !== t ? t : [];
        n[i] = r.map(e => new a.Z(e)).filter(e => e.id !== i)
      }), r.Z.dispatch({
        type: "BROADCAST_VIEWERS_UPDATE",
        viewers: n
      })
    }
  } catch (e) {}
}