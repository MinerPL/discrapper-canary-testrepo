"use strict";
n(47120), n(653041);
var i, s, l, a, o, r, d, c, u = n(512722),
  h = n.n(u),
  p = n(772848),
  f = n(442837),
  E = n(570140),
  Z = n(13245),
  g = n(836932),
  m = n(175553),
  _ = n(158979),
  I = n(181912),
  S = n(194295),
  v = n(998033),
  C = n(181364),
  x = n(24313),
  N = n(435064),
  T = n(668761),
  O = n(358446),
  A = n(695346),
  y = n(314897),
  R = n(592125),
  M = n(292959),
  L = n(158776),
  D = n(944486),
  P = n(885110),
  j = n(246946),
  b = n(594174),
  w = n(974180),
  k = n(237997),
  V = n(70956),
  U = n(150097),
  B = n(129724),
  G = n(449224),
  H = n(981631),
  z = n(987650),
  Y = n(689938);
(a = i || (i = {}))[a.GENERIC = 0] = "GENERIC", a[a.TEXT = 1] = "TEXT", a[a.INCOMING_CALL = 2] = "INCOMING_CALL", (o = s || (s = {}))[o.NORMAL = 0] = "NORMAL", o[o.HIGH = 1] = "HIGH", o[o.URGENT = 2] = "URGENT";
let W = 5 * V.Z.Millis.SECOND,
  F = 8 * V.Z.Millis.SECOND,
  K = 30 * V.Z.Millis.SECOND,
  X = Object.freeze({
    priority: 0,
    duration: W,
    expirationExternallyManaged: !1,
    type: 0
  }),
  Q = [],
  J = (e, t, n) => {
    let i = t ? H._1z.TIMED_OUT : H._1z.DISMISSED;
    return setTimeout(() => Z.Z.updateNotificationStatus(e, i), null != n ? n : W)
  };

function q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H._1z.DISMISSED;
  if (null == e) return !1;
  let n = Q.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = Q[n];
  clearTimeout(i.timerId), Q = [...Q], t === H._1z.DISMISSED ? Q.splice(n, 1) : Q[n] = {
    ...i,
    status: t
  }
}

function $(e) {
  let t = Q.length;
  return (Q = Q.filter(t => 1 !== t.type || t.channelId !== e || !1)).length !== t
}

function ee(e) {
  let t = Q.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function et(e, t) {
  let n = {
    ...X,
    ...t
  };
  if (2 !== n.priority && !k.Z.isInstanceFocused()) return null;
  let i = (0, p.Z)(),
    s = {
      id: i,
      status: H._1z.ACTIVE,
      timerId: J(i, n.expirationExternallyManaged, n.duration),
      props: e,
      ...n
    },
    l = (Q = [...Q]).findIndex(e => e.priority <= n.priority);
  return -1 === l ? Q.push(s) : Q.splice(l, 0, s), Q.length > 10 && clearTimeout(Q.pop().timerId), i
}

function en(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ee(t);
  if (!n.includes(y.default.getId())) return q(i);
  if (null != i) return !1;
  let s = R.Z.getChannel(t);
  if (null == s || !s.isPrivate() || P.Z.getStatus() === H.Skl.DND || A.QZ.getSetting()) return !1;
  let l = Q.find(e => 1 === e.type && e.channelId === t && e.messageType === H.uaV.CALL);
  null != l && q(l.id), et((0, I.Z)(s), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: s.id
  })
}
class ei extends(l = f.ZP.Store) {
  initialize() {
    this.waitFor(R.Z, b.default)
  }
  getNotifications() {
    return Q
  }
}
c = "OverlayNotificationsStore", (d = "displayName") in(r = ei) ? Object.defineProperty(r, d, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[d] = c, t.Z = new ei(E.Z, __OVERLAY__ ? {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    q(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    let {
      nudge: t
    } = e, n = function(e) {
      switch (e.type) {
        case z.nc.BROADCAST:
          return (0, x.Z)(e);
        case z.nc.GO_LIVE_VOICE:
        case z.nc.GO_LIVE_NON_VOICE:
          return (0, _.Z)(e);
        case z.nc.KEYBIND_INDICATORS:
          return (0, O.Z)(e);
        case z.nc.NEWS:
        default:
          return (0, C.Z)(e)
      }
    }(t);
    null != n && et(n, {
      priority: 2,
      duration: F
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) return !1;
    Q = Q.map(e => e.status === H._1z.ACTIVE ? (clearTimeout(e.timerId), {
      ...e,
      timerId: J(e.id, e.expirationExternallyManaged)
    }) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: s,
      message: l
    } = e, a = R.Z.getChannel(s), o = b.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
    if (null == a || null == o) return !1;
    if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === H.mFx.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === H.mFx.JOIN_REQUEST) {
      if (!(0, U.eF)(l, s, !0, !0)) return !1;
      let e = function(e, t, n) {
        let i, s;
        if (h()(null != t.activity, "received null message activity"), n.id === y.default.getId()) return !1;
        let l = G.Z.getGame();
        if (null == l) return !1;
        switch (t.activity.type) {
          case H.mFx.JOIN:
            if (null == (i = L.Z.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            s = (0, g.Z)(e, t, n, l, i);
            break;
          case H.mFx.JOIN_REQUEST:
            if (null == (i = P.Z.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            s = (0, S.Z)(e, n, l, i)
        }
        if (null == s) return !1;
        let a = et(s, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id
        });
        return null != a && J(a, !1, K), !0
      }(a, l, o);
      if (!1 !== e) return e
    }
    if ((!k.Z.isInstanceUILocked() || k.Z.isPinned(H.Odu.TEXT)) && s === D.Z.getChannelId() || k.Z.getTextChatNotificationMode() === H.Ypu.DISABLED || j.Z.disableNotifications || !(0, U.eF)(l, s)) return !1;
    let r = !M.Z.isSoundDisabled(w.Ay);
    et((0, v.Z)(a, l, o, r), {
      type: 1,
      channelId: a.id,
      messageType: l.type
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && $(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return $(t)
  },
  CALL_CREATE: en,
  CALL_UPDATE: en,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    q(ee(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: s
      } = e,
      l = G.Z.getGame();
    if (null == l || l.id !== s) return !1;
    if (n === H.mFx.JOIN) t = (0, m.Z)(i, l);
    if (null == t) return !1;
    et(t, {
      priority: 2,
      type: 0
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    et((0, T.f)(Y.Z.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
  },
  CLIPS_SAVE_CLIP: function() {
    et((0, T.f)(Y.Z.Messages.CLIPS_NOTIFICATION_TITLE.format({
      duration: (0, B.A)(N.Z.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    et((0, T.f)(Y.Z.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
  },
  STREAM_START: function(e) {
    let t = (0, T.y)();
    null != t && et(t)
  }
} : {})