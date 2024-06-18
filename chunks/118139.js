"use strict";
n.d(t, {
  CO: function() {
    return a
  },
  NU: function() {
    return E
  },
  X2: function() {
    return I
  },
  cb: function() {
    return c
  },
  d$: function() {
    return _
  },
  tw: function() {
    return l
  }
}), n(47120);
var i = n(358085);
let r = (e, t) => {
    if (null == e) return !1;
    let [n, i] = e.split(/\?/, 1);
    return t.test(n)
  },
  s = (e, t) => {
    if (null == e) return !1;
    let [n, i] = e.split("/");
    return n === t
  },
  o = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
  a = e => null != e && o.test(e),
  l = e => s(e, "image"),
  u = /\.(webp|gif)$/i,
  _ = e => r(e, u),
  d = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
  c = e => r(e, d),
  E = e => null != e && d.test(e),
  I = e => s(e, "video")