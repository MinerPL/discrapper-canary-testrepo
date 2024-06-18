"use strict";
n(653041);
var i = n(97613),
  r = n.n(i),
  s = n(570140),
  o = n(777639),
  a = n(272423),
  l = n(808663),
  u = n(178535),
  _ = n(981631);
t.Z = {
  push(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
      i = arguments.length > 3 ? arguments[3] : void 0,
      o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _.IlC.APP;
    return (0, a.Ll)({
      key: n,
      modal: (0, u.Z)(e, {}, t, n),
      ...i
    }), s.Z.dispatch({
      type: "MODAL_PUSH",
      modal: e,
      props: t,
      key: n,
      appContext: o
    }), n
  },
  pushLazy(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
      i = arguments.length > 3 ? arguments[3] : void 0,
      s = (0, o.D)();
    return null != s && s.isReady() ? (e instanceof Promise ? e.then(e => {
      let {
        default: t
      } = e;
      return t
    }) : e()).then(e => this.push(e, t, n, i)) : new Promise(r => l.Z.enqueue(() => r(this.pushLazy(e, t, n, i))))
  },
  updateAnimation(e, t) {
    s.Z.dispatch({
      type: "MODAL_UPDATE",
      key: e,
      props: {},
      partial: !0,
      animation: t
    })
  },
  pop() {
    (0, a.GZ)(), s.Z.dispatch({
      type: "MODAL_POP"
    })
  },
  popWithKey(e, t) {
    (0, a.GZ)(e, t), s.Z.dispatch({
      type: "MODAL_POP",
      key: e,
      onExited: t
    })
  },
  popAll() {
    (0, a.lE)(), s.Z.dispatch({
      type: "MODAL_POP_ALL"
    }), s.Z.dispatch({
      type: "CHANNEL_SETTINGS_CLOSE"
    }), s.Z.dispatch({
      type: "EMAIL_VERIFICATION_MODAL_CLOSE"
    }), s.Z.dispatch({
      type: "GUILD_SETTINGS_CLOSE"
    }), s.Z.dispatch({
      type: "HIDE_ACTION_SHEET"
    }), s.Z.dispatch({
      type: "DISPLAYED_INVITE_CLEAR"
    }), s.Z.dispatch({
      type: "DRAWER_CLOSE",
      animated: !0
    }), s.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
    }), s.Z.dispatch({
      type: "QUICKSWITCHER_HIDE"
    }), s.Z.dispatch({
      type: "MENTION_MODAL_CLOSE"
    }), s.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLOSE"
    }), s.Z.dispatch({
      type: "SEARCH_MODAL_CLOSE"
    }), s.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_HIDE"
    })
  }
}