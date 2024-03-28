"use strict";
n.r(t), n("47120"), n("653041");
var i, a, l, s, o, r, d, u, c = n("512722"),
  f = n.n(c),
  h = n("153832"),
  p = n("442837"),
  g = n("570140"),
  m = n("13245"),
  E = n("836932"),
  S = n("175553"),
  v = n("158979"),
  y = n("181912"),
  I = n("194295"),
  T = n("998033"),
  N = n("181364"),
  O = n("24313"),
  _ = n("435064"),
  C = n("668761"),
  A = n("358446"),
  x = n("695346"),
  R = n("314897"),
  M = n("592125"),
  L = n("292959"),
  D = n("158776"),
  b = n("944486"),
  j = n("885110"),
  P = n("246946"),
  w = n("594174"),
  k = n("974180"),
  V = n("237997"),
  U = n("70956"),
  B = n("150097"),
  F = n("129724"),
  G = n("449224"),
  H = n("981631"),
  z = n("987650"),
  W = n("689938");
(s = i || (i = {}))[s.GENERIC = 0] = "GENERIC", s[s.TEXT = 1] = "TEXT", s[s.INCOMING_CALL = 2] = "INCOMING_CALL", (o = a || (a = {}))[o.NORMAL = 0] = "NORMAL", o[o.HIGH = 1] = "HIGH", o[o.URGENT = 2] = "URGENT";
let Y = 5 * U.default.Millis.SECOND,
  K = 8 * U.default.Millis.SECOND,
  Z = 30 * U.default.Millis.SECOND,
  X = Object.freeze({
    priority: 0,
    duration: Y,
    expirationExternallyManaged: !1,
    type: 0
  }),
  J = [],
  q = (e, t, n) => {
    let i = t ? H.OverlayNotificationStatus.TIMED_OUT : H.OverlayNotificationStatus.DISMISSED;
    return setTimeout(() => m.default.updateNotificationStatus(e, i), null != n ? n : Y)
  };

function Q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.OverlayNotificationStatus.DISMISSED;
  if (null == e) return !1;
  let n = J.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = J[n];
  clearTimeout(i.timerId), J = [...J], t === H.OverlayNotificationStatus.DISMISSED ? J.splice(n, 1) : J[n] = {
    ...i,
    status: t
  }
}

function $(e) {
  let t = J.length;
  return (J = J.filter(t => 1 !== t.type || t.channelId !== e || !1)).length !== t
}

function ee(e) {
  let t = J.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function et(e, t) {
  let n = {
    ...X,
    ...t
  };
  if (2 !== n.priority && !V.default.isInstanceFocused()) return null;
  let i = (0, h.v4)(),
    a = {
      id: i,
      status: H.OverlayNotificationStatus.ACTIVE,
      timerId: q(i, n.expirationExternallyManaged, n.duration),
      props: e,
      ...n
    },
    l = (J = [...J]).findIndex(e => e.priority <= n.priority);
  return -1 === l ? J.push(a) : J.splice(l, 0, a), J.length > 10 && clearTimeout(J.pop().timerId), i
}

function en(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ee(t);
  if (!n.includes(R.default.getId())) return Q(i);
  if (null != i) return !1;
  let a = M.default.getChannel(t);
  if (null == a || !a.isPrivate() || j.default.getStatus() === H.StatusTypes.DND || x.FocusMode.getSetting()) return !1;
  let l = J.find(e => 1 === e.type && e.channelId === t && e.messageType === H.MessageTypes.CALL);
  null != l && Q(l.id), et((0, y.default)(a), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: a.id
  })
}
class ei extends(l = p.default.Store) {
  initialize() {
    this.waitFor(M.default, w.default)
  }
  getNotifications() {
    return J
  }
}
u = "OverlayNotificationsStore", (d = "displayName") in(r = ei) ? Object.defineProperty(r, d, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[d] = u, t.default = new ei(g.default, __OVERLAY__ ? {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    Q(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    let {
      nudge: t
    } = e, n = function(e) {
      switch (e.type) {
        case z.OverlayNudgeTypes.BROADCAST:
          return (0, O.default)(e);
        case z.OverlayNudgeTypes.GO_LIVE_VOICE:
        case z.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
          return (0, v.default)(e);
        case z.OverlayNudgeTypes.KEYBIND_INDICATORS:
          return (0, A.default)(e);
        case z.OverlayNudgeTypes.NEWS:
        default:
          return (0, N.default)(e)
      }
    }(t);
    null != n && et(n, {
      priority: 2,
      duration: K
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) return !1;
    J = J.map(e => e.status === H.OverlayNotificationStatus.ACTIVE ? (clearTimeout(e.timerId), {
      ...e,
      timerId: q(e.id, e.expirationExternallyManaged)
    }) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: a,
      message: l
    } = e, s = M.default.getChannel(a), o = w.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
    if (null == s || null == o) return !1;
    if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === H.ActivityActionTypes.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === H.ActivityActionTypes.JOIN_REQUEST) {
      if (!(0, B.shouldNotify)(l, a, !0, !0)) return !1;
      let e = function(e, t, n) {
        let i, a;
        if (f()(null != t.activity, "received null message activity"), n.id === R.default.getId()) return !1;
        let l = G.default.getGame();
        if (null == l) return !1;
        switch (t.activity.type) {
          case H.ActivityActionTypes.JOIN:
            if (null == (i = D.default.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, E.default)(e, t, n, l, i);
            break;
          case H.ActivityActionTypes.JOIN_REQUEST:
            if (null == (i = j.default.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, I.default)(e, n, l, i)
        }
        if (null == a) return !1;
        let s = et(a, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id
        });
        return null != s && q(s, !1, Z), !0
      }(s, l, o);
      if (!1 !== e) return e
    }
    if ((!V.default.isInstanceUILocked() || V.default.isPinned(H.OverlayWidgets.TEXT)) && a === b.default.getChannelId() || V.default.getTextChatNotificationMode() === H.OverlayNotificationTextChatTypes.DISABLED || P.default.disableNotifications || !(0, B.shouldNotify)(l, a)) return !1;
    let r = !L.default.isSoundDisabled(k.MESSAGE_SOUND);
    et((0, T.default)(s, l, o, r), {
      type: 1,
      channelId: s.id,
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
    Q(ee(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: a
      } = e,
      l = G.default.getGame();
    if (null == l || l.id !== a) return !1;
    if (n === H.ActivityActionTypes.JOIN) t = (0, S.default)(i, l);
    if (null == t) return !1;
    et(t, {
      priority: 2,
      type: 0
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    et((0, C.createClipsNotification)(W.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
  },
  CLIPS_SAVE_CLIP: function() {
    et((0, C.createClipsNotification)(W.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
      duration: (0, F.getSecondsSliderLabel)(_.default.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    et((0, C.createClipsNotification)(W.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
  },
  STREAM_START: function(e) {
    let t = (0, C.createClipsReminderNotification)();
    null != t && et(t)
  }
} : {})