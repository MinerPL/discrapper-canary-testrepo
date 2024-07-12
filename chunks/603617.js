t.r(n), t.d(n, {
  INVITE_OPTIONS_100_TIMES: function() {
return d;
  },
  INVITE_OPTIONS_10_TIMES: function() {
return I;
  },
  INVITE_OPTIONS_12_HOURS: function() {
return E;
  },
  INVITE_OPTIONS_1_DAY: function() {
return N;
  },
  INVITE_OPTIONS_1_HOUR: function() {
return l;
  },
  INVITE_OPTIONS_25_TIMES: function() {
return s;
  },
  INVITE_OPTIONS_30_MINUTES: function() {
return f;
  },
  INVITE_OPTIONS_50_TIMES: function() {
return c;
  },
  INVITE_OPTIONS_5_TIMES: function() {
return _;
  },
  INVITE_OPTIONS_6_HOURS: function() {
return S;
  },
  INVITE_OPTIONS_7_DAYS: function() {
return T;
  },
  INVITE_OPTIONS_FOREVER: function() {
return O;
  },
  INVITE_OPTIONS_ONCE: function() {
return i;
  },
  INVITE_OPTIONS_UNLIMITED: function() {
return o;
  },
  MAX_AGE_OPTIONS: function() {
return m;
  },
  MAX_USES_OPTIONS: function() {
return u;
  }
});
var a = t(689938);

function r(e, n) {
  return {
value: e,
get label() {
  return n();
}
  };
}
let o = r(0, () => a.Z.Messages.MAX_USES.format({
maxUses: 0
  })),
  i = r(1, () => a.Z.Messages.MAX_USES.format({
maxUses: 1
  })),
  _ = r(5, () => a.Z.Messages.MAX_USES.format({
maxUses: 5
  })),
  I = r(10, () => a.Z.Messages.MAX_USES.format({
maxUses: 10
  })),
  s = r(25, () => a.Z.Messages.MAX_USES.format({
maxUses: 25
  })),
  c = r(50, () => a.Z.Messages.MAX_USES.format({
maxUses: 50
  })),
  d = r(100, () => a.Z.Messages.MAX_USES.format({
maxUses: 100
  })),
  u = [
o,
i,
_,
I,
s,
c,
d
  ],
  f = r(1800, () => a.Z.Messages.DURATION_MINUTES.format({
minutes: 30
  })),
  l = r(3600, () => a.Z.Messages.DURATION_HOURS.format({
hours: 1
  })),
  S = r(21600, () => a.Z.Messages.DURATION_HOURS.format({
hours: 6
  })),
  E = r(43200, () => a.Z.Messages.DURATION_HOURS.format({
hours: 12
  })),
  N = r(86400, () => a.Z.Messages.DURATION_DAYS.format({
days: 1
  })),
  T = r(604800, () => a.Z.Messages.DURATION_DAYS.format({
days: 7
  })),
  O = r(0, () => a.Z.Messages.MAX_AGE_NEVER),
  m = [
f,
l,
S,
E,
N,
T,
O
  ];