"use strict";
var i;
n.r(t), n.d(t, {
  computeIsMuted: function() {
    return s
  },
  isTemporarilyMuted: function() {
    return r
  },
  default: function() {
    return i
  }
});

function s(e) {
  var t;
  let {
    muted: n,
    mute_config: i
  } = e;
  return !!n && (null == (t = i) || null == t.end_time || new Date(t.end_time) >= new Date)
}

function r(e) {
  let {
    muted: t,
    mute_config: n
  } = e;
  return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date
}
i = class {
  reset() {
    Object.values(this.timers).forEach(e => clearTimeout(e)), this.timers = {}
  }
  setTimer(e, t, n) {
    var i;
    if (null == e || null == t) return;
    let s = null == (i = t).end_time ? null : new Date(i.end_time).getTime() - Date.now();
    if (null == s) return null;
    this.timers[e] = setTimeout(n, Math.max(0, s))
  }
  clearTimer(e) {
    null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e])
  }
  constructor() {
    this.timers = {}
  }
}