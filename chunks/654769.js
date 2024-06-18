"use strict";
n(47120), n(177593);
var i, r = n(392711),
  s = n.n(r),
  o = n(525654),
  a = n.n(o),
  l = n(579806),
  u = n(292959),
  _ = n(246946),
  d = n(626135),
  c = n(358085),
  E = n(557177),
  I = n(998502),
  T = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = c.isPlatformEmbedded && (0, c.isWindows)(),
  f = S && 10 > parseFloat(l.Z.os.release),
  N = !0;
if (S && !f) {
  let [e, , t] = l.Z.os.release.split(".");
  N = parseInt(e) > 10 || parseInt(t) >= 15063
}
let A = S && N || "Chrome" === a().name && 47 > parseFloat(a().version) || "Firefox" === a().name && 52 > parseFloat(a().version),
  m = s().throttle(E.GN, 1e3, {
    leading: !0
  });

function O() {
  I.ZP.flashFrame(!1)
}
S && (window.addEventListener("focus", O), I.ZP.on("MAIN_WINDOW_FOCUS", O));
let R = window.Notification;
f && (I.ZP.on("NOTIFICATION_CLICK", (e, t) => {
  let n = null[t];
  null != n && (n.onclick(), n.close())
}), I.ZP.send("NOTIFICATIONS_CLEAR"), i = class {
  static requestPermission(e) {
    e()
  }
  close() {
    null != null[this.id] && (delete null[this.id], I.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose())
  }
  constructor(e, {
    body: t,
    icon: n
  }) {
    h(this, "id", R._id++), h(this, "title", void 0), h(this, "body", void 0), h(this, "icon", void 0), h(this, "onshow", function() {}), h(this, "onclick", function() {}), h(this, "onclose", function() {}), this.title = e, this.body = t, this.icon = n, setImmediate(() => this.onshow()), null[this.id] = this, I.ZP.send("NOTIFICATION_SHOW", {
      id: this.id,
      title: this.title,
      body: this.body,
      icon: this.icon
    })
  }
}, h(i, "permission", "granted"), h(i, "_id", 0), R = i);

function C() {
  return null != R && "granted" === R.permission
}

function p(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  e.includes("message") ? m(e, t, void 0, n) : (0, E.GN)(e, t)
}

function g(e) {
  return _.Z.disableNotifications && null == e.overrideStreamerMode || !C() || c.isPlatformEmbedded && !I.ZP.shouldDisplayNotifications()
}
t.Z = {
  hasPermission: C,
  requestPermission: function(e) {
    null != R && R.requestPermission(() => {
      null != e && e(C())
    })
  },
  showNotification: function(e, t, n, i, r) {
    var o, a, l, _;
    let E;
    if (g(r)) {
      null != r.sound && !1 !== r.playSoundIfDisabled && p(r.sound, null !== (a = r.volume) && void 0 !== a ? a : 1, r.soundpack);
      return
    }
    null != r.sound && p(r.sound, null !== (l = r.volume) && void 0 !== l ? l : 1, r.soundpack);
    let h = null !== (_ = null == r ? void 0 : r.tag) && void 0 !== _ ? _ : null;
    (0, c.isLinux)() && (n = s().escape(n));
    let f = {
      icon: e,
      body: n,
      tag: h,
      silent: !0
    };
    S && u.Z.taskbarFlash && I.ZP.flashFrame(!0);
    try {
      E = new R(t, f)
    } catch (e) {
      return null
    }
    return (null === (o = r.onShown) || void 0 === o || o.call(r), !r.omitViewTracking && d.default.track(T.rMx.NOTIFICATION_VIEWED, i), E.onclick = () => {
      var e;
      c.isPlatformEmbedded ? I.ZP.focus() : (window.focus(), E.close()), !r.omitClickTracking && d.default.track(T.rMx.NOTIFICATION_CLICKED, i), null === (e = r.onClick) || void 0 === e || e.call(r)
    }, A && setTimeout(() => E.close(), 5e3), N) ? E : {
      close() {
        var e;
        null == E || null === (e = E.onclose) || void 0 === e || e.call(E)
      }
    }
  },
  disabled: g
}