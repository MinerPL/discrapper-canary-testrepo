t.d(n, {
  $6: function() {
return f;
  },
  YK: function() {
return u;
  },
  _o: function() {
return g;
  },
  ac: function() {
return T;
  },
  bL: function() {
return m;
  },
  g0: function() {
return a;
  },
  gl: function() {
return _;
  },
  rr: function() {
return b;
  },
  xH: function() {
return S;
  }
});
var o, a, c = t(695346),
  r = t(486472),
  i = t(430824);
t(626135);
var l = t(981631),
  d = t(689938);
let s = 86400000 * l.eBq;

function u() {
  let e = c.h2.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
}

function _() {
  let e = c.zA.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
}

function g() {
  let e = c.SE.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
}

function b() {
  let e = c.iH.getSetting();
  return 0 === r.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
}

function m(e) {
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

function f(e, n) {
  return !n.verified || null != e && s > Date.now() - new Date(e.created_at).getTime();
}
(o = a || (a = {}))[o.UNDECIDED = 0] = 'UNDECIDED', o[o.OPTIN = 1] = 'OPTIN', o[o.OPTOUT = 2] = 'OPTOUT';
let T = {
  0: void 0,
  1: !0,
  2: !1
};

function S() {
  return [{
  name: d.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
  desc: d.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
  value: 1
},
{
  name: d.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
  desc: d.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
  value: 2
},
{
  name: d.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
  desc: d.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
  value: 0
}
  ];
}