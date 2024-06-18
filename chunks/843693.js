"use strict";
n.d(t, {
  wU: function() {
    return O
  }
}), n(47120);
var i, r, s, o, a = n(442837),
  l = n(759174),
  u = n(846519),
  _ = n(570140),
  d = n(314897),
  c = n(944486),
  E = n(585483),
  I = n(351780),
  T = n(641033),
  h = n(524484),
  S = n(981631);
let f = new Set,
  N = new l.h(function(e) {
    let {
      userId: t,
      channelId: n
    } = e;
    return [t, n]
  }, function(e) {
    let {
      userId: t,
      channelId: n
    } = e;
    return "".concat(n, "-").concat(t)
  }),
  A = new l.h(function(e) {
    let {
      messageId: t,
      channelId: n,
      combo: {
        userId: i
      }
    } = e;
    return [t, n, i]
  }, function(e) {
    let {
      messageId: t,
      channelId: n,
      combo: {
        userId: i
      }
    } = e;
    return "".concat(n, "-").concat(i, "-").concat(t)
  }),
  m = e => {
    let {
      userId: t,
      channelId: n
    } = e;
    return "".concat(t, "-").concat(n)
  };

function O(e, t, n, i) {
  return !(e !== t || null == n || i.has(n)) && (i.add(n), !0)
}
class R extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(d.default, c.Z)
  }
  getComboScore(e, t) {
    let n = N.get(m({
      userId: e,
      channelId: t
    }));
    return null == n ? 0 : (0, T.Eo)(n)
  }
  getUserCombo(e, t) {
    return N.get(m({
      userId: e,
      channelId: t
    }))
  }
  isComboing(e, t) {
    var n;
    let i = this.getUserCombo(e, t);
    return null != i && i.value >= I.Z.combosRequiredCount && null != (n = i) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
  }
  getMessageCombo(e) {
    var t;
    let n = A.get(e);
    return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
  }
  getMostRecentMessageCombo(e) {
    let t = A.values(e);
    return t[t.length - 1]
  }
  getUserComboShakeIntensity(e, t, n, i) {
    let r = this.getUserCombo(e, t);
    return null != r ? (0, T.KH)(r, i) * n : 0
  }
}
o = "PoggermodeStore", (s = "displayName") in(r = R) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o;
let C = new R(_.Z, {
  POGGERMODE_UPDATE_COMBO: function(e) {
    let {
      type: t,
      ...n
    } = e;
    if (!I.Z.isEnabled()) return !1;
    ! function e(t) {
      var n, i, r, s, o, a;
      let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        _ = N.get(m(t)),
        d = {
          ..._,
          ...t,
          value: null !== (i = null !== (n = t.value) && void 0 !== n ? n : null == _ ? void 0 : _.value) && void 0 !== i ? i : 0,
          multiplier: Math.min(null !== (s = null !== (r = t.multiplier) && void 0 !== r ? r : null == _ ? void 0 : _.multiplier) && void 0 !== s ? s : 1, 7),
          decayInterval: null !== (o = null == _ ? void 0 : _.decayInterval) && void 0 !== o ? o : new u.Xp
        };
      N.set(m(t), d), l && (null === (a = d.decayInterval) || void 0 === a || a.start(1e3, () => {
        let t = N.get(m(d));
        if (null != t) {
          let i = d.multiplier !== t.multiplier && d.value !== t.value;
          if (t.value <= 0 || i) {
            var n;
            null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e({
              ...t,
              value: 0,
              multiplier: 1
            }), C.emitChange())
          } else e({
            ...t,
            value: t.value - 1
          }), C.emitChange()
        }
      }))
    }(n)
  },
  POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
    var t;
    let {
      comboMessage: n
    } = e;
    if (!I.Z.isEnabled()) return !1;
    t = n, A.set(t.messageId, t)
  },
  MESSAGE_CREATE: function(e) {
    var t, n;
    let {
      channelId: i,
      message: {
        mentions: r,
        author: s,
        nonce: o
      }
    } = e;
    if (!I.Z.isEnabled()) return !1;
    let a = d.default.getId();
    if (!O(null == s ? void 0 : s.id, a, o, f)) return !1;
    let l = N.get(m({
      userId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "???",
      channelId: i
    }));
    if (I.Z.screenshakeEnabled && I.Z.screenshakeEnabledLocations[h.oZ.MENTION] && null != r && null != r.find(e => e.id === a)) {
      let e = null != l ? null !== (n = (0, T.KH)(l, h.qi.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
      return E.S.dispatch(S.CkL.SHAKE_APP, {
        duration: 1e3,
        intensity: e
      }), !0
    }
    return !1
  }
});
t.ZP = C