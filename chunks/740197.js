"use strict";
n.d(t, {
  HS: function() {
    return d
  },
  Hg: function() {
    return _
  },
  PW: function() {
    return E
  },
  S5: function() {
    return r
  },
  ZA: function() {
    return s
  },
  l0: function() {
    return c
  }
}), n(177593), n(653041);
var i = n(65154);
let r = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
  s = r && "setSinkId" in HTMLAudioElement.prototype;

function o(e) {
  return {
    id: i.w5,
    type: e,
    index: 0,
    name: "Default"
  }
}

function a() {
  return [o(i.h7.AUDIO_INPUT), o(i.h7.AUDIO_OUTPUT), o(i.h7.VIDEO_INPUT)]
}

function l(e, t) {
  return e.filter(e => e.type === t)
}

function u() {
  return r ? navigator.mediaDevices.enumerateDevices().then(e => {
    let t = 0,
      n = 0,
      r = 0;
    return e.filter(e => {
      switch (e.kind) {
        case i.h7.AUDIO_INPUT:
        case i.h7.AUDIO_OUTPUT:
        case i.h7.VIDEO_INPUT:
          return !0;
        default:
          return !1
      }
    }).map(e => {
      let s;
      switch (e.kind) {
        case i.h7.AUDIO_INPUT:
          s = t++;
          break;
        case i.h7.AUDIO_OUTPUT:
          s = n++;
          break;
        case i.h7.VIDEO_INPUT:
        default:
          s = r++
      }
      return {
        id: e.deviceId,
        type: e.kind,
        index: s,
        name: null != e.label && "" !== e.label ? e.label : 0 === s ? "Default" : "Device ".concat(s)
      }
    })
  }).then(e => (!s && (e = e.filter(e => e.type !== i.h7.AUDIO_OUTPUT)).push(o(i.h7.AUDIO_OUTPUT)), e)).catch(a) : new Promise(e => {
    setImmediate(() => e(a()))
  })
}
async function _() {
  return l(await u(), i.h7.AUDIO_INPUT)
}
async function d() {
  return l(await u(), i.h7.AUDIO_OUTPUT)
}
async function c() {
  return l(await u(), i.h7.VIDEO_INPUT)
}
async function E() {
  let e = await u();
  return [l(e, i.h7.AUDIO_INPUT), l(e, i.h7.AUDIO_OUTPUT), l(e, i.h7.VIDEO_INPUT)]
}