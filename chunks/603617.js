"use strict";
s.r(t), s.d(t, {
  INVITE_OPTIONS_100_TIMES: function() {
    return o
  },
  INVITE_OPTIONS_10_TIMES: function() {
    return i
  },
  INVITE_OPTIONS_12_HOURS: function() {
    return N
  },
  INVITE_OPTIONS_1_DAY: function() {
    return T
  },
  INVITE_OPTIONS_1_HOUR: function() {
    return c
  },
  INVITE_OPTIONS_25_TIMES: function() {
    return I
  },
  INVITE_OPTIONS_30_MINUTES: function() {
    return f
  },
  INVITE_OPTIONS_50_TIMES: function() {
    return d
  },
  INVITE_OPTIONS_5_TIMES: function() {
    return u
  },
  INVITE_OPTIONS_6_HOURS: function() {
    return E
  },
  INVITE_OPTIONS_7_DAYS: function() {
    return S
  },
  INVITE_OPTIONS_FOREVER: function() {
    return O
  },
  INVITE_OPTIONS_ONCE: function() {
    return a
  },
  INVITE_OPTIONS_UNLIMITED: function() {
    return l
  },
  MAX_AGE_OPTIONS: function() {
    return h
  },
  MAX_USES_OPTIONS: function() {
    return _
  }
});
var n = s("689938");

function r(e, t) {
  return {
    value: e,
    get label() {
      return t()
    }
  }
}
let l = r(0, () => n.default.Messages.MAX_USES.format({
    maxUses: 0
  })),
  a = r(1, () => n.default.Messages.MAX_USES.format({
    maxUses: 1
  })),
  u = r(5, () => n.default.Messages.MAX_USES.format({
    maxUses: 5
  })),
  i = r(10, () => n.default.Messages.MAX_USES.format({
    maxUses: 10
  })),
  I = r(25, () => n.default.Messages.MAX_USES.format({
    maxUses: 25
  })),
  d = r(50, () => n.default.Messages.MAX_USES.format({
    maxUses: 50
  })),
  o = r(100, () => n.default.Messages.MAX_USES.format({
    maxUses: 100
  })),
  _ = [l, a, u, i, I, d, o],
  f = r(1800, () => n.default.Messages.DURATION_MINUTES.format({
    minutes: 30
  })),
  c = r(3600, () => n.default.Messages.DURATION_HOURS.format({
    hours: 1
  })),
  E = r(21600, () => n.default.Messages.DURATION_HOURS.format({
    hours: 6
  })),
  N = r(43200, () => n.default.Messages.DURATION_HOURS.format({
    hours: 12
  })),
  T = r(86400, () => n.default.Messages.DURATION_DAYS.format({
    days: 1
  })),
  S = r(604800, () => n.default.Messages.DURATION_DAYS.format({
    days: 7
  })),
  O = r(0, () => n.default.Messages.MAX_AGE_NEVER),
  h = [f, c, E, N, T, S, O]