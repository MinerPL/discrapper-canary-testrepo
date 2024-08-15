n.d(t, {
  $6: function() {
return f;
  },
  YK: function() {
return d;
  },
  _o: function() {
return b;
  },
  ac: function() {
return m;
  },
  bL: function() {
return g;
  },
  g0: function() {
return a;
  },
  gl: function() {
return _;
  },
  rr: function() {
return S;
  },
  xH: function() {
return T;
  }
});
var o, a, c = n(695346),
  i = n(486472),
  r = n(430824);
n(626135);
var l = n(981631),
  s = n(689938);
let u = 86400000 * l.eBq;

function d() {
  let e = c.h2.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != r.Z.getGuild(e))), e;
}

function _() {
  let e = c.zA.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != r.Z.getGuild(e))), e;
}

function b() {
  let e = c.SE.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != r.Z.getGuild(e))), e;
}

function S() {
  let e = c.iH.getSetting();
  return 0 === i.Z.totalUnavailableGuilds && (e = e.filter(e => null != r.Z.getGuild(e))), e;
}

function g(e) {
  return (e & l.HGf) === l.HGf ? {
all: !0,
mutualFriends: !0,
mutualGuilds: !0
  } : {
all: !1,
mutualFriends: (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS
  };
}

function f(e, t) {
  return !t.verified || null != e && u > Date.now() - new Date(e.created_at).getTime();
}
(o = a || (a = {}))[o.UNDECIDED = 0] = 'UNDECIDED', o[o.OPTIN = 1] = 'OPTIN', o[o.OPTOUT = 2] = 'OPTOUT';
let m = {
  0: void 0,
  1: !0,
  2: !1
};

function T() {
  return [{
  name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
  desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
  value: 1
},
{
  name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
  desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
  value: 2
},
{
  name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
  desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
  value: 0
}
  ];
}