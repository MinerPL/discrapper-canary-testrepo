"use strict";
n.d(t, {
  C1: function() {
    return a
  },
  HS: function() {
    return u
  },
  Hg: function() {
    return l
  },
  l0: function() {
    return _
  }
}), n(757143), n(733860);
var i = n(264344),
  r = n.n(i),
  s = n(992774),
  o = n(149396);

function a(e, t) {
  var n;
  let i = !1,
    s = t.map((t, n) => {
      let {
        guid: r,
        guid: s,
        name: a,
        name: l,
        index: u
      } = t;
      return /^default/.test(a) ? (i = !0, r = o.w5, a = a.replace("default", "Default")) : r = null != r && "" !== r ? r : a, null != u && (n = u), {
        id: r,
        type: e,
        index: n,
        name: a,
        originalName: l,
        originalId: s
      }
    });
  return e !== o.h7.VIDEO_INPUT && !i && (null === r() || void 0 === r() ? void 0 : null === (n = r().os) || void 0 === n ? void 0 : n.family) != null && /^win/i.test(r().os.family) && s.unshift({
    id: o.w5,
    type: e,
    index: -1,
    name: "Default"
  }), s
}

function l() {
  return new Promise(e => {
    (0, s.zS)().getInputDevices(t => e(a(o.h7.AUDIO_INPUT, t)))
  })
}

function u() {
  return new Promise(e => {
    (0, s.zS)().getOutputDevices(t => e(a(o.h7.AUDIO_OUTPUT, t)))
  })
}

function _() {
  return new Promise(e => {
    (0, s.zS)().getVideoInputDevices(t => e(a(o.h7.VIDEO_INPUT, t)))
  })
}