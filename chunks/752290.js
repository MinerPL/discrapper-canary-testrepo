"use strict";
n(47120);
var i = n(729357),
  r = n.n(i),
  s = n(147913),
  o = n(557177);
let a = (0, o.tu)("vibing_wumpus", "vibing_wumpus", 0),
  l = 0,
  u = 0,
  _ = null;

function d(e, t) {
  let n = Math.round(100 * e),
    i = Math.round(100 * u),
    s = Math.round(100 * l);
  n > 0 && s >= i || n < 0 && s <= i ? (clearInterval(_), 0 === i && null != t && t()) : (s += n, l = s / 100, a.volume = r()(l, 0, .5))
}

function c(e) {
  null != _ && clearInterval(_), u = 0;
  let t = h();
  _ = setInterval(() => {
    d(t, e)
  }, 100)
}

function E() {
  null != _ && clearInterval(_), a.loop(), u = .5;
  let e = h();
  _ = setInterval(() => d(e), 100)
}

function I() {
  c(a.pause.bind(a))
}

function T() {
  c(a.stop.bind(a))
}

function h() {
  return .2 * (u - l)
}
class S extends s.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      VIBING_WUMPUS_PLAY_MUSIC: E,
      VIBING_WUMPUS_STOP_MUSIC: T,
      VIBING_WUMPUS_PAUSE_MUSIC: I
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new S