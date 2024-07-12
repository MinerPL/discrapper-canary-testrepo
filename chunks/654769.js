n(47120), n(177593);
var r, i = n(392711),
  a = n.n(i),
  o = n(525654),
  s = n.n(o),
  l = n(579806),
  u = n(292959),
  c = n(246946),
  d = n(626135),
  _ = n(358085),
  E = n(557177),
  f = n(998502),
  h = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = _.isPlatformEmbedded && (0, _.isWindows)(),
  I = m && 10 > parseFloat(l.Z.os.release),
  T = !0;
if (m && !I) {
  let [e, , t] = l.Z.os.release.split('.');
  T = parseInt(e) > 10 || parseInt(t) >= 15063;
}
let g = m && T || 'Chrome' === s().name && 47 > parseFloat(s().version) || 'Firefox' === s().name && 52 > parseFloat(s().version),
  S = a().throttle(E.GN, 1000, {
leading: !0
  });

function A() {
  f.ZP.flashFrame(!1);
}
m && (window.addEventListener('focus', A), f.ZP.on('MAIN_WINDOW_FOCUS', A));
let N = window.Notification;
I && (f.ZP.on('NOTIFICATION_CLICK', (e, t) => {
  let n = null[t];
  null != n && (n.onclick(), n.close());
}), f.ZP.send('NOTIFICATIONS_CLEAR'), r = class {
  static requestPermission(e) {
e();
  }
  close() {
null != null[this.id] && (delete null[this.id], f.ZP.send('NOTIFICATION_CLOSE', this.id), this.onclose());
  }
  constructor(e, {
body: t,
icon: n
  }) {
p(this, 'id', N._id++), p(this, 'title', void 0), p(this, 'body', void 0), p(this, 'icon', void 0), p(this, 'onshow', function() {}), p(this, 'onclick', function() {}), p(this, 'onclose', function() {}), this.title = e, this.body = t, this.icon = n, setImmediate(() => this.onshow()), null[this.id] = this, f.ZP.send('NOTIFICATION_SHOW', {
  id: this.id,
  title: this.title,
  body: this.body,
  icon: this.icon
});
  }
}, p(r, 'permission', 'granted'), p(r, '_id', 0), N = r);

function v() {
  return null != N && 'granted' === N.permission;
}

function O(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
n = arguments.length > 2 ? arguments[2] : void 0;
  e.includes('message') ? S(e, t, void 0, n) : (0, E.GN)(e, t);
}

function R(e) {
  return c.Z.disableNotifications && null == e.overrideStreamerMode || !v() || _.isPlatformEmbedded && !f.ZP.shouldDisplayNotifications();
}
t.Z = {
  hasPermission: v,
  requestPermission: function(e) {
null != N && N.requestPermission(() => {
  null != e && e(v());
});
  },
  showNotification: function(e, t, n, r, i) {
var o, s, l, c;
let E;
if (R(i)) {
  null != i.sound && !1 !== i.playSoundIfDisabled && O(i.sound, null !== (s = i.volume) && void 0 !== s ? s : 1, i.soundpack);
  return;
}
null != i.sound && O(i.sound, null !== (l = i.volume) && void 0 !== l ? l : 1, i.soundpack);
let p = null !== (c = null == i ? void 0 : i.tag) && void 0 !== c ? c : null;
(0, _.isLinux)() && (n = a().escape(n));
let I = {
  icon: e,
  body: n,
  tag: p,
  silent: !0
};
m && u.Z.taskbarFlash && f.ZP.flashFrame(!0);
try {
  E = new N(t, I);
} catch (e) {
  return null;
}
return (null === (o = i.onShown) || void 0 === o || o.call(i), !i.omitViewTracking && d.default.track(h.rMx.NOTIFICATION_VIEWED, r), E.onclick = () => {
  var e;
  _.isPlatformEmbedded ? f.ZP.focus() : (window.focus(), E.close()), !i.omitClickTracking && d.default.track(h.rMx.NOTIFICATION_CLICKED, r), null === (e = i.onClick) || void 0 === e || e.call(i);
}, g && setTimeout(() => E.close(), 5000), T) ? E : {
  close() {
    var e;
    null == E || null === (e = E.onclose) || void 0 === e || e.call(E);
  }
};
  },
  disabled: R
};