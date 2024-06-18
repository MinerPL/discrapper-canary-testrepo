"use strict";
n.d(t, {
  AQ: function() {
    return E
  },
  DY: function() {
    return _
  },
  yQ: function() {
    return d
  }
}), n(653041), n(733860);
var i, r, s, o, a = n(65154);
let l = [{
  name: "H265",
  encode: (null === (r = window) || void 0 === r ? void 0 : null === (i = r.DiscordNative) || void 0 === i ? void 0 : i.process.platform) !== "darwin" || (null === (o = window) || void 0 === o ? void 0 : null === (s = o.DiscordNative) || void 0 === s ? void 0 : s.os.arch) === "arm64",
  decode: !0
}, {
  name: "H264",
  encode: !0,
  decode: !0
}, {
  name: "VP8",
  encode: !0,
  decode: !0
}, {
  name: "VP9",
  encode: !0,
  decode: !0
}];

function u(e, t) {
  let n = t.concat(l),
    i = [];
  return n.forEach(t => {
    let n = e.find(e => t.name === e.codec);
    null != n && i.push({
      name: n.codec,
      encode: n.encode && t.encode,
      decode: n.decode && t.decode
    })
  }), i
}

function _(e) {
  let t = [];
  return e.has(a.V8.SIGNAL_AV1_SUPPORT) && t.unshift({
    name: "AV1",
    encode: !0,
    decode: !0
  }), t
}

function d(e, t) {
  return "string" == typeof e ? u(JSON.parse(e).map(e => ({
    codec: c(e.codec),
    encode: e.encode,
    decode: e.decode
  })), t) : u(e.map(e => ({
    codec: c(e),
    encode: !0,
    decode: !0
  })), t)
}

function c(e) {
  return "AV1X" === e ? "AV1" : e
}

function E(e) {
  return "AV1" === e ? "AV1X" : e
}