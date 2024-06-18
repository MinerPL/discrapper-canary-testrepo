"use strict";
n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(51407),
  o = n(524437),
  a = n(433517),
  l = n(147913),
  u = n(254238),
  _ = n(258609),
  d = n(763296),
  c = n(314897),
  E = n(131951),
  I = n(709054),
  T = n(815016),
  h = n(725380),
  S = n(340332),
  f = n(675478),
  N = n(65154);
let A = e => "AudioContextSettingsMigrated:".concat(e),
  m = e => e === N.Yn.STREAM ? s.h.STREAM : s.h.USER;

function O() {
  (0, T.R)() && (a.K.get(A(c.default.getId())) || f.hW.updateAsync("audioContextSettings", e => {
    let t = !1;
    for (let [n, i] of Object.entries(E.Z.getState().settingsByContext)) {
      let r = (0, S.z)(n);
      if (null == r) continue;
      let s = e[r],
        o = String(Date.now()),
        a = {};
      for (let [e, t] of Object.entries(i.localMutes)) a[e] = {
        muted: t,
        volume: m(n),
        modifiedAt: o,
        soundboardMuted: !1
      };
      for (let [e, t] of Object.entries(i.localVolumes)) a[e] = {
        muted: !1,
        modifiedAt: o,
        ...a[e],
        volume: (0, S.r)(t, n)
      };
      let l = Object.keys(s).length;
      for (let [e, [n, i]] of Object.entries(a).entries()) {
        if (300 - l - (e + 1) <= 0) break;
        null == s[n] && (t = !0, s[n] = i)
      }
    }
    return a.K.set(A(c.default.getId()), !0), t
  }, f.fy.AUTOMATED))
}
let R = r().debounce(() => {
    p()
  }, 2e3),
  C = r().debounce(u.On, 500, {
    maxWait: 500
  });

function p() {
  f.hW.updateAsync("audioContextSettings", e => {
    let t = !1;
    return (0, h.$E)((n, i, r) => {
      let s = function(e, t, n, i) {
        var r, s, a, l, u;
        let _ = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          d = (0, S.z)(n);
        if (null == d) return !1;
        let c = e[d];
        if (c[t] = null !== (r = c[t]) && void 0 !== r ? r : (s = n, o.JY.create({
            muted: !1,
            volume: m(s)
          })), i(c[t]), c[t].modifiedAt = String(Date.now()), _) {
          ;
          a = c, l = t, u = n, a[l].volume !== m(u) || a[l].muted || a[l].soundboardMuted || delete a[l]
        }
        return ! function(e) {
          let t = I.default.entries(e),
            n = t.length;
          if (n <= 300) return;
          let i = t.sort((e, t) => {
              let [n, {
                modifiedAt: i
              }] = e, [r, {
                modifiedAt: s
              }] = t;
              return Number(i) - Number(s)
            }),
            r = n - 300;
          for (let t = 0; t < r; t++) {
            let [n] = i[t];
            delete e[n]
          }
        }(c), !0
      }(e, i, n, e => {
        Object.assign(e, r)
      });
      t = t || s
    }), t
  }, f.fy.INFREQUENT_USER_ACTION)
}

function g(e) {
  var t, n, i;
  let {
    context: r,
    userId: s,
    volume: o
  } = e;
  if (s === c.default.getId() || !(0, T.R)()) return;
  let a = _.Z.getRemoteSessionId();
  null != a && C(a, s, r, {
    muted: E.Z.isLocalMute(s, r),
    volume: o
  }), t = r, n = s, i = o, (0, h.RF)(t, n, {
    volume: i
  }), R()
}

function L(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== c.default.getId()) {
    if ((0, T.R)()) {
      var i, r, s;
      i = t, r = n, s = E.Z.isLocalMute(n, t), (0, h.RF)(i, r, {
        muted: s
      }), R.cancel(), p()
    }
  }
}

function v(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== c.default.getId()) {
    if ((0, T.R)()) {
      var i, r, s;
      i = t, r = n, s = d.Z.isLocalSoundboardMuted(n), (0, h.RF)(i, r, {
        soundboardMuted: s
      }), R.cancel(), p()
    }
  }
}
class D extends l.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: O,
      AUDIO_SET_LOCAL_VOLUME: g,
      AUDIO_TOGGLE_LOCAL_MUTE: L,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: v
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new D