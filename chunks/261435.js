n(47120), n(653041);
var i,
    s,
    a,
    o,
    r,
    l,
    c,
    d,
    u = n(512722),
    h = n.n(u),
    p = n(772848),
    f = n(442837),
    _ = n(570140),
    g = n(13245),
    m = n(836932),
    E = n(175553),
    Z = n(158979),
    I = n(181912),
    S = n(194295),
    v = n(998033),
    C = n(181364),
    x = n(435064),
    T = n(668761),
    N = n(358446),
    O = n(695346),
    A = n(314897),
    y = n(592125),
    b = n(292959),
    M = n(158776),
    R = n(944486),
    L = n(885110),
    P = n(246946),
    D = n(594174),
    w = n(974180),
    j = n(237997),
    k = n(70956),
    V = n(150097),
    U = n(129724),
    z = n(449224),
    B = n(981631),
    G = n(987650),
    W = n(689938);
((o = i || (i = {}))[(o.GENERIC = 0)] = 'GENERIC'), (o[(o.TEXT = 1)] = 'TEXT'), (o[(o.INCOMING_CALL = 2)] = 'INCOMING_CALL'), ((r = s || (s = {}))[(r.NORMAL = 0)] = 'NORMAL'), (r[(r.HIGH = 1)] = 'HIGH'), (r[(r.URGENT = 2)] = 'URGENT');
let Y = 5 * k.Z.Millis.SECOND,
    H = 8 * k.Z.Millis.SECOND,
    F = 30 * k.Z.Millis.SECOND,
    K = Object.freeze({
        priority: 0,
        duration: Y,
        expirationExternallyManaged: !1,
        type: 0
    }),
    X = [],
    Q = (e, t, n) => {
        let i = t ? B._1z.TIMED_OUT : B._1z.DISMISSED;
        return setTimeout(() => g.Z.updateNotificationStatus(e, i), null != n ? n : Y);
    };
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B._1z.DISMISSED;
    if (null == e) return !1;
    let n = X.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = X[n];
    clearTimeout(i.timerId),
        (X = [...X]),
        t === B._1z.DISMISSED
            ? X.splice(n, 1)
            : (X[n] = {
                  ...i,
                  status: t
              });
}
function q(e) {
    let t = X.length;
    return (X = X.filter((t) => 1 !== t.type || t.channelId !== e || !1)).length !== t;
}
function $(e) {
    let t = X.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function ee(e, t) {
    let n = {
        ...K,
        ...t
    };
    if (2 !== n.priority && !j.Z.isInstanceFocused()) return null;
    let i = (0, p.Z)(),
        s = {
            id: i,
            status: B._1z.ACTIVE,
            timerId: Q(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n
        },
        a = (X = [...X]).findIndex((e) => e.priority <= n.priority);
    return -1 === a ? X.push(s) : X.splice(a, 0, s), X.length > 10 && clearTimeout(X.pop().timerId), i;
}
function et(e) {
    let { channelId: t, ringing: n } = e,
        i = $(t);
    if (!n.includes(A.default.getId())) return J(i);
    if (null != i) return !1;
    let s = y.Z.getChannel(t);
    if (null == s || !s.isPrivate() || L.Z.getStatus() === B.Skl.DND || O.QZ.getSetting()) return !1;
    let a = X.find((e) => 1 === e.type && e.channelId === t && e.messageType === B.uaV.CALL);
    null != a && J(a.id),
        ee((0, I.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id
        });
}
class en extends (a = f.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, D.default);
    }
    getNotifications() {
        return X;
    }
}
(d = 'OverlayNotificationsStore'),
    (c = 'displayName') in (l = en)
        ? Object.defineProperty(l, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[c] = d),
    (t.Z = new en(
        _.Z,
        __OVERLAY__
            ? {
                  OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                      let { notificationId: t, status: n } = e;
                      J(t, n);
                  },
                  OVERLAY_MOUNTED: function (e) {
                      let { nudge: t } = e,
                          n = (function (e) {
                              switch (e.type) {
                                  case G.nc.GO_LIVE_VOICE:
                                  case G.nc.GO_LIVE_NON_VOICE:
                                      return (0, Z.Z)(e);
                                  case G.nc.KEYBIND_INDICATORS:
                                      return (0, N.Z)(e);
                                  case G.nc.NEWS:
                                  default:
                                      return (0, C.Z)(e);
                              }
                          })(t);
                      null != n &&
                          ee(n, {
                              priority: 2,
                              duration: H
                          });
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      let { locked: t } = e;
                      if (t) return !1;
                      X = X.map((e) =>
                          e.status === B._1z.ACTIVE
                              ? (clearTimeout(e.timerId),
                                {
                                    ...e,
                                    timerId: Q(e.id, e.expirationExternallyManaged)
                                })
                              : e
                      );
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, n, i;
                      let { channelId: s, message: a } = e,
                          o = y.Z.getChannel(s),
                          r = D.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
                      if (null == o || null == r) return !1;
                      if ((null === (n = a.activity) || void 0 === n ? void 0 : n.type) === B.mFx.JOIN || (null === (i = a.activity) || void 0 === i ? void 0 : i.type) === B.mFx.JOIN_REQUEST) {
                          if (!(0, V.eF)(a, s, !0, !0)) return !1;
                          let e = (function (e, t, n) {
                              let i, s;
                              if ((h()(null != t.activity, 'received null message activity'), n.id === A.default.getId())) return !1;
                              let a = z.Z.getGame();
                              if (null == a) return !1;
                              switch (t.activity.type) {
                                  case B.mFx.JOIN:
                                      if (null == (i = M.Z.getApplicationActivity(n.id, a.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                                      s = (0, m.Z)(e, t, n, a, i);
                                      break;
                                  case B.mFx.JOIN_REQUEST:
                                      if (null == (i = L.Z.getApplicationActivity(a.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                                      s = (0, S.Z)(e, n, a, i);
                              }
                              if (null == s) return !1;
                              let o = ee(s, {
                                  priority: 2,
                                  expirationExternallyManaged: !0,
                                  channelId: e.id
                              });
                              return null != o && Q(o, !1, F), !0;
                          })(o, a, r);
                          if (!1 !== e) return e;
                      }
                      if (((!j.Z.isInstanceUILocked() || j.Z.isPinned(B.Odu.TEXT)) && s === R.Z.getChannelId()) || j.Z.getTextChatNotificationMode() === B.Ypu.DISABLED || P.Z.disableNotifications || !(0, V.eF)(a, s)) return !1;
                      let l = !b.Z.isSoundDisabled(w.Ay);
                      ee((0, v.Z)(o, a, r, l), {
                          type: 1,
                          channelId: o.id,
                          messageType: a.type
                      });
                  },
                  CHANNEL_SELECT: function (e) {
                      let { channelId: t } = e;
                      return null != t && q(t);
                  },
                  MESSAGE_ACK: function (e) {
                      let { channelId: t } = e;
                      return q(t);
                  },
                  CALL_CREATE: et,
                  CALL_UPDATE: et,
                  CALL_DELETE: function (e) {
                      let { channelId: t } = e;
                      J($(t));
                  },
                  ACTIVITY_USER_ACTION: function (e) {
                      let t,
                          { actionType: n, user: i, applicationId: s } = e,
                          a = z.Z.getGame();
                      if (null == a || a.id !== s) return !1;
                      if (n === B.mFx.JOIN) t = (0, E.Z)(i, a);
                      if (null == t) return !1;
                      ee(t, {
                          priority: 2,
                          type: 0
                      });
                  },
                  CLIPS_SAVE_CLIP_START: function () {
                      ee((0, T.f)(W.Z.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE));
                  },
                  CLIPS_SAVE_CLIP: function () {
                      ee((0, T.f)(W.Z.Messages.CLIPS_NOTIFICATION_TITLE.format({ duration: (0, U.A)(x.Z.getSettings().clipsLength / 1000, !0) })));
                  },
                  CLIPS_SAVE_CLIP_ERROR: function () {
                      ee((0, T.f)(W.Z.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE));
                  },
                  STREAM_START: function (e) {
                      let t = (0, T.y)();
                      null != t && ee(t);
                  }
              }
            : {}
    ));
