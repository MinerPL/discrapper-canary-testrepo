n(47120);
var r = n(392711),
  i = n.n(r),
  a = n(51407),
  o = n(524437),
  s = n(433517),
  l = n(147913),
  u = n(254238),
  c = n(258609),
  d = n(763296),
  _ = n(314897),
  E = n(131951),
  f = n(709054),
  h = n(815016),
  p = n(725380),
  m = n(340332),
  I = n(675478),
  T = n(65154);
let g = e => 'AudioContextSettingsMigrated:'.concat(e),
  S = e => e === T.Yn.STREAM ? a.h.STREAM : a.h.USER;

function A() {
  (0, h.R)() && (s.K.get(g(_.default.getId())) || I.hW.updateAsync('audioContextSettings', e => {
let t = !1;
for (let [n, r] of Object.entries(E.Z.getState().settingsByContext)) {
  let i = (0, m.z)(n);
  if (null == i)
    continue;
  let a = e[i],
    o = String(Date.now()),
    s = {};
  for (let [e, t] of Object.entries(r.localMutes))
    s[e] = {
      muted: t,
      volume: S(n),
      modifiedAt: o,
      soundboardMuted: !1
    };
  for (let [e, t] of Object.entries(r.localVolumes))
    s[e] = {
      muted: !1,
      modifiedAt: o,
      ...s[e],
      volume: (0, m.r)(t, n)
    };
  let l = Object.keys(a).length;
  for (let [e, [n, r]] of Object.entries(s).entries()) {
    if (300 - l - (e + 1) <= 0)
      break;
    null == a[n] && (t = !0, a[n] = r);
  }
}
return s.K.set(g(_.default.getId()), !0), t;
  }, I.fy.AUTOMATED));
}
let N = i().debounce(() => {
O();
  }, 2000),
  v = i().debounce(u.On, 500, {
maxWait: 500
  });

function O() {
  I.hW.updateAsync('audioContextSettings', e => {
let t = !1;
return (0, p.$E)((n, r, i) => {
  let a = function(e, t, n, r) {
    var i, a, s, l, u;
    let c = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
      d = (0, m.z)(n);
    if (null == d)
      return !1;
    let _ = e[d];
    if (_[t] = null !== (i = _[t]) && void 0 !== i ? i : (a = n, o.JY.create({
        muted: !1,
        volume: S(a)
      })), r(_[t]), _[t].modifiedAt = String(Date.now()), c) {
      ;
      s = _, l = t, u = n, s[l].volume !== S(u) || s[l].muted || s[l].soundboardMuted || delete s[l];
    }
    return ! function(e) {
      let t = f.default.entries(e),
        n = t.length;
      if (n <= 300)
        return;
      let r = t.sort((e, t) => {
          let [n, {
            modifiedAt: r
          }] = e, [i, {
            modifiedAt: a
          }] = t;
          return Number(r) - Number(a);
        }),
        i = n - 300;
      for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n];
      }
    }(_), !0;
  }(e, r, n, e => {
    Object.assign(e, i);
  });
  t = t || a;
}), t;
  }, I.fy.INFREQUENT_USER_ACTION);
}

function R(e) {
  var t, n, r;
  let {
context: i,
userId: a,
volume: o
  } = e;
  if (a === _.default.getId() || !(0, h.R)())
return;
  let s = c.Z.getRemoteSessionId();
  null != s && v(s, a, i, {
muted: E.Z.isLocalMute(a, i),
volume: o
  }), t = i, n = a, r = o, (0, p.RF)(t, n, {
volume: r
  }), N();
}

function C(e) {
  let {
context: t,
userId: n
  } = e;
  if (n !== _.default.getId()) {
if ((0, h.R)()) {
  var r, i, a;
  r = t, i = n, a = E.Z.isLocalMute(n, t), (0, p.RF)(r, i, {
    muted: a
  }), N.cancel(), O();
}
  }
}

function y(e) {
  let {
context: t,
userId: n
  } = e;
  if (n !== _.default.getId()) {
if ((0, h.R)()) {
  var r, i, a;
  r = t, i = n, a = d.Z.isLocalSoundboardMuted(n), (0, p.RF)(r, i, {
    soundboardMuted: a
  }), N.cancel(), O();
}
  }
}
class D extends l.Z {
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  POST_CONNECTION_OPEN: A,
  AUDIO_SET_LOCAL_VOLUME: R,
  AUDIO_TOGGLE_LOCAL_MUTE: C,
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: y
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new D();