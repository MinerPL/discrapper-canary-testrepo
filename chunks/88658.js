t.d(n, {
  $6: function() {
return T;
  },
  YK: function() {
return d;
  },
  _o: function() {
return S;
  },
  ac: function() {
return I;
  },
  bL: function() {
return m;
  },
  g0: function() {
return r;
  },
  gl: function() {
return _;
  },
  rr: function() {
return E;
  },
  xH: function() {
return g;
  }
});
var o, r, a = t(695346),
  c = t(486472),
  i = t(430824);
t(626135);
var l = t(981631),
  s = t(689938);
let u = 86400000 * l.eBq;

function d() {
  let e = a.h2.getSetting();
  return 0 === c.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
}

function _() {
  let e = a.zA.getSetting();
  return 0 === c.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
}

function S() {
  let e = a.SE.getSetting();
  return 0 === c.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
}

function E() {
  let e = a.iH.getSetting();
  return 0 === c.Z.totalUnavailableGuilds && (e = e.filter(e => null != i.Z.getGuild(e))), e;
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

function T(e, n) {
  return !n.verified || null != e && u > Date.now() - new Date(e.created_at).getTime();
}
(o = r || (r = {}))[o.UNDECIDED = 0] = 'UNDECIDED', o[o.OPTIN = 1] = 'OPTIN', o[o.OPTOUT = 2] = 'OPTOUT';
let I = {
  0: void 0,
  1: !0,
  2: !1
};

function g() {
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