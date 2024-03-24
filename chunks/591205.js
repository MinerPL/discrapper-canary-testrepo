"use strict";
u.r(t), u.d(t, {
  INVITE_OPTIONS_UNLIMITED: function() {
    return a
  },
  INVITE_OPTIONS_ONCE: function() {
    return l
  },
  INVITE_OPTIONS_5_TIMES: function() {
    return I
  },
  INVITE_OPTIONS_10_TIMES: function() {
    return r
  },
  INVITE_OPTIONS_25_TIMES: function() {
    return i
  },
  INVITE_OPTIONS_50_TIMES: function() {
    return E
  },
  INVITE_OPTIONS_100_TIMES: function() {
    return _
  },
  MAX_USES_OPTIONS: function() {
    return T
  },
  INVITE_OPTIONS_30_MINUTES: function() {
    return f
  },
  INVITE_OPTIONS_1_HOUR: function() {
    return O
  },
  INVITE_OPTIONS_6_HOURS: function() {
    return N
  },
  INVITE_OPTIONS_12_HOURS: function() {
    return d
  },
  INVITE_OPTIONS_1_DAY: function() {
    return S
  },
  INVITE_OPTIONS_7_DAYS: function() {
    return o
  },
  INVITE_OPTIONS_FOREVER: function() {
    return M
  },
  MAX_AGE_OPTIONS: function() {
    return g
  }
});
var n = u("782340");

function s(e, t) {
  return {
    value: e,
    get label() {
      return t()
    }
  }
}
let a = s(0, () => n.default.Messages.MAX_USES.format({
    maxUses: 0
  })),
  l = s(1, () => n.default.Messages.MAX_USES.format({
    maxUses: 1
  })),
  I = s(5, () => n.default.Messages.MAX_USES.format({
    maxUses: 5
  })),
  r = s(10, () => n.default.Messages.MAX_USES.format({
    maxUses: 10
  })),
  i = s(25, () => n.default.Messages.MAX_USES.format({
    maxUses: 25
  })),
  E = s(50, () => n.default.Messages.MAX_USES.format({
    maxUses: 50
  })),
  _ = s(100, () => n.default.Messages.MAX_USES.format({
    maxUses: 100
  })),
  T = [a, l, I, r, i, E, _],
  f = s(1800, () => n.default.Messages.DURATION_MINUTES.format({
    minutes: 30
  })),
  O = s(3600, () => n.default.Messages.DURATION_HOURS.format({
    hours: 1
  })),
  N = s(21600, () => n.default.Messages.DURATION_HOURS.format({
    hours: 6
  })),
  d = s(43200, () => n.default.Messages.DURATION_HOURS.format({
    hours: 12
  })),
  S = s(86400, () => n.default.Messages.DURATION_DAYS.format({
    days: 1
  })),
  o = s(604800, () => n.default.Messages.DURATION_DAYS.format({
    days: 7
  })),
  M = s(0, () => n.default.Messages.MAX_AGE_NEVER),
  g = [f, O, N, d, S, o, M]