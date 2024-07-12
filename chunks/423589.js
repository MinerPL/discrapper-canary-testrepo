i.d(n, {
  Mn: function() {
return g;
  },
  OD: function() {
return N;
  },
  W9: function() {
return E;
  }
}), i(47120), i(789020);
var t = i(442837),
  s = i(798140),
  a = i(9156),
  _ = i(630388),
  S = i(709054),
  r = i(312400),
  o = i(981631),
  d = i(969943),
  u = i(526761),
  l = i(689938);

function E() {
  return [{
  label: l.Z.Messages.MUTE_DURATION_15_MINUTES,
  value: d.Oe.MINUTES_15
},
{
  label: l.Z.Messages.MUTE_DURATION_1_HOUR,
  value: d.Oe.HOURS_1
},
{
  label: l.Z.Messages.MUTE_DURATION_3_HOURS,
  value: d.Oe.HOURS_3
},
{
  label: l.Z.Messages.MUTE_DURATION_8_HOURS,
  value: d.Oe.HOURS_8
},
{
  label: l.Z.Messages.MUTE_DURATION_24_HOURS,
  value: d.Oe.HOURS_24
},
{
  label: l.Z.Messages.MUTE_DURATION_ALWAYS,
  value: d.Oe.ALWAYS
}
  ];
}
let c = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function N(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
  return S.default.keys(e).filter(i => {
var t, a;
let S = e[i].message_notifications !== o.bL.NULL,
  r = _.yE(null !== (t = e[i].flags) && void 0 !== t ? t : 0, u.ic.UNREADS_ALL_MESSAGES) || _.yE(null !== (a = e[i].flags) && void 0 !== a ? a : 0, u.ic.UNREADS_ONLY_MENTIONS);
return !n.ignoreUnreadSetting && r || !n.ignoreNotificationSetting && S || !n.ignoreMute && (0, s.m$)(e[i]);
  });
}

function g(e) {
  let n = (0, t.e7)([a.ZP], () => a.ZP.useNewNotifications);
  return r.xT.useExperiment({
location: e
  }, {
autoTrackExposure: !1
  }).enabled && n;
}