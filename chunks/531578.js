"use strict";
var i, r, s, o;
n.d(t, {
  aZ: function() {
    return i
  },
  b5: function() {
    return l
  },
  iF: function() {
    return a
  },
  nw: function() {
    return r
  }
}), n(724458), (s = i || (i = {})).BAD = "bad", s.NEUTRAL = "neutral", s.GOOD = "good";
let a = 1024;
(o = r || (r = {}))[o.VOICE = 0] = "VOICE", o[o.STREAM = 1] = "STREAM", o[o.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", o[o.ACTIVITY = 3] = "ACTIVITY", o[o.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
let l = [2, 1, 3, 0, 4].reduce((e, t, n) => ({
  ...e,
  [t]: n
}), {})