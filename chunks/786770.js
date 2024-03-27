"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ee
  }
}), n("222007"), n("424973");
var i, a, l, s, o = n("627445"),
  r = n.n(o),
  d = n("748820"),
  u = n("446674"),
  c = n("913144"),
  f = n("539405"),
  h = n("415635"),
  p = n("387129"),
  g = n("981253"),
  m = n("931237"),
  E = n("37359"),
  S = n("364864"),
  v = n("523505"),
  y = n("47271"),
  O = n("386045"),
  C = n("969416"),
  N = n("827922"),
  T = n("845579"),
  I = n("271938"),
  _ = n("42203"),
  A = n("385649"),
  x = n("824563"),
  R = n("18494"),
  L = n("101125"),
  M = n("102985"),
  D = n("697218"),
  j = n("189857"),
  k = n("901165"),
  b = n("718517"),
  w = n("189771"),
  P = n("686069"),
  V = n("703370"),
  U = n("49111"),
  B = n("6791"),
  F = n("782340");
(l = i || (i = {}))[l.GENERIC = 0] = "GENERIC", l[l.TEXT = 1] = "TEXT", l[l.INCOMING_CALL = 2] = "INCOMING_CALL", (s = a || (a = {}))[s.NORMAL = 0] = "NORMAL", s[s.HIGH = 1] = "HIGH", s[s.URGENT = 2] = "URGENT";
let G = 5 * b.default.Millis.SECOND,
  W = 8 * b.default.Millis.SECOND,
  H = 30 * b.default.Millis.SECOND,
  z = Object.freeze({
    priority: 0,
    duration: G,
    expirationExternallyManaged: !1,
    type: 0
  }),
  Y = [],
  K = (e, t, n) => {
    let i = t ? U.OverlayNotificationStatus.TIMED_OUT : U.OverlayNotificationStatus.DISMISSED;
    return setTimeout(() => f.default.updateNotificationStatus(e, i), null != n ? n : G)
  };

function Z(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.OverlayNotificationStatus.DISMISSED;
  if (null == e) return !1;
  let n = Y.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = Y[n];
  clearTimeout(i.timerId), Y = [...Y], t === U.OverlayNotificationStatus.DISMISSED ? Y.splice(n, 1) : Y[n] = {
    ...i,
    status: t
  }
}

function X(e) {
  let t = Y.length;
  return (Y = Y.filter(t => 1 !== t.type || t.channelId !== e || !1)).length !== t
}

function J(e) {
  let t = Y.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function q(e, t) {
  let n = {
    ...z,
    ...t
  };
  if (2 !== n.priority && !k.default.isInstanceFocused()) return null;
  let i = (0, d.v4)(),
    a = {
      id: i,
      status: U.OverlayNotificationStatus.ACTIVE,
      timerId: K(i, n.expirationExternallyManaged, n.duration),
      props: e,
      ...n
    };
  Y = [...Y];
  let l = Y.findIndex(e => e.priority <= n.priority);
  if (-1 === l ? Y.push(a) : Y.splice(l, 0, a), Y.length > 10) {
    let e = Y.pop();
    clearTimeout(e.timerId)
  }
  return i
}

function Q(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = J(t), a = n.includes(I.default.getId());
  if (!a) return Z(i);
  if (null != i) return !1;
  let l = _.default.getChannel(t);
  if (null == l || !l.isPrivate() || L.default.getStatus() === U.StatusTypes.DND || T.FocusMode.getSetting()) return !1;
  let s = Y.find(e => 1 === e.type && e.channelId === t && e.messageType === U.MessageTypes.CALL);
  null != s && Z(s.id), q((0, m.default)(l), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: l.id
  })
}
class $ extends u.default.Store {
  initialize() {
    this.waitFor(_.default, D.default)
  }
  getNotifications() {
    return Y
  }
}
$.displayName = "OverlayNotificationsStore";
var ee = new $(c.default, __OVERLAY__ ? {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    Z(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    let {
      nudge: t
    } = e, n = function(e) {
      switch (e.type) {
        case B.OverlayNudgeTypes.BROADCAST:
          return (0, y.default)(e);
        case B.OverlayNudgeTypes.GO_LIVE_VOICE:
        case B.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
          return (0, g.default)(e);
        case B.OverlayNudgeTypes.KEYBIND_INDICATORS:
          return (0, N.default)(e);
        case B.OverlayNudgeTypes.NEWS:
        default:
          return (0, v.default)(e)
      }
    }(t);
    null != n && q(n, {
      priority: 2,
      duration: W
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) return !1;
    Y = Y.map(e => e.status === U.OverlayNotificationStatus.ACTIVE ? (clearTimeout(e.timerId), {
      ...e,
      timerId: K(e.id, e.expirationExternallyManaged)
    }) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: a,
      message: l
    } = e, s = _.default.getChannel(a), o = D.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
    if (null == s || null == o) return !1;
    if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === U.ActivityActionTypes.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === U.ActivityActionTypes.JOIN_REQUEST) {
      if (!(0, w.shouldNotify)(l, a, !0, !0)) return !1;
      let e = function(e, t, n) {
        let i, a;
        if (r(null != t.activity, "received null message activity"), n.id === I.default.getId()) return !1;
        let l = V.default.getGame();
        if (null == l) return !1;
        switch (t.activity.type) {
          case U.ActivityActionTypes.JOIN:
            if (null == (i = x.default.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, h.default)(e, t, n, l, i);
            break;
          case U.ActivityActionTypes.JOIN_REQUEST:
            if (null == (i = L.default.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, E.default)(e, n, l, i)
        }
        if (null == a) return !1;
        let s = q(a, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id
        });
        return null != s && K(s, !1, H), !0
      }(s, l, o);
      if (!1 !== e) return e
    }
    if ((!k.default.isInstanceUILocked() || k.default.isPinned(U.OverlayWidgets.TEXT)) && a === R.default.getChannelId() || k.default.getTextChatNotificationMode() === U.OverlayNotificationTextChatTypes.DISABLED || M.default.disableNotifications || !(0, w.shouldNotify)(l, a)) return !1;
    let d = !A.default.isSoundDisabled(j.MESSAGE_SOUND);
    q((0, S.default)(s, l, o, d), {
      type: 1,
      channelId: s.id,
      messageType: l.type
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && X(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return X(t)
  },
  CALL_CREATE: Q,
  CALL_UPDATE: Q,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    Z(J(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: a
      } = e,
      l = V.default.getGame();
    if (null == l || l.id !== a) return !1;
    if (n === U.ActivityActionTypes.JOIN) t = (0, p.default)(i, l);
    if (null == t) return !1;
    q(t, {
      priority: 2,
      type: 0
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    q((0, C.createClipsNotification)(F.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
  },
  CLIPS_SAVE_CLIP: function() {
    q((0, C.createClipsNotification)(F.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
      duration: (0, P.getSecondsSliderLabel)(O.default.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    q((0, C.createClipsNotification)(F.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
  },
  STREAM_START: function(e) {
    let t = (0, C.createClipsReminderNotification)();
    null != t && q(t)
  }
} : {})