"use strict";
n.d(t, {
  fU: function() {
    return l
  },
  jX: function() {
    return u
  },
  mb: function() {
    return o
  },
  tV: function() {
    return a
  }
}), n(47120);
var i = n(664751),
  r = n(898450);
let s = "event";

function o(e, t) {
  return null == t ? e : a({
    baseCode: e,
    guildScheduledEventId: function(e) {
      let t = "?" === e.charAt(0) ? e.substring(1) : e;
      try {
        let e = i.parse(t);
        return (0, r.d)(e[s])
      } catch (e) {
        return
      }
    }(t)
  })
}

function a(e) {
  let {
    baseCode: t,
    guildScheduledEventId: n
  } = e;
  return null == n ? t : "".concat(t, "?").concat(s, "=").concat(n)
}

function l(e) {
  let [t, n] = e.split("?");
  if (null == n) return {
    baseCode: t
  };
  let o = i.parse(n);
  return {
    baseCode: t,
    guildScheduledEventId: (0, r.d)(o[s])
  }
}

function u(e) {
  let [t] = e.split("?");
  return t
}