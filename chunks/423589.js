t.d(n, {
  Mn: function() {
return S;
  },
  OD: function() {
return f;
  },
  W9: function() {
return _;
  }
}), t(47120), t(789020);
var l = t(442837),
  i = t(798140),
  u = t(9156),
  r = t(630388),
  a = t(709054),
  o = t(312400),
  s = t(981631),
  d = t(969943),
  c = t(526761),
  E = t(689938);

function _() {
  return [{
  label: E.Z.Messages.MUTE_DURATION_15_MINUTES,
  value: d.Oe.MINUTES_15
},
{
  label: E.Z.Messages.MUTE_DURATION_1_HOUR,
  value: d.Oe.HOURS_1
},
{
  label: E.Z.Messages.MUTE_DURATION_3_HOURS,
  value: d.Oe.HOURS_3
},
{
  label: E.Z.Messages.MUTE_DURATION_8_HOURS,
  value: d.Oe.HOURS_8
},
{
  label: E.Z.Messages.MUTE_DURATION_24_HOURS,
  value: d.Oe.HOURS_24
},
{
  label: E.Z.Messages.MUTE_DURATION_ALWAYS,
  value: d.Oe.ALWAYS
}
  ];
}
let N = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function f(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
  return a.default.keys(e).filter(t => {
var l, u;
let a = e[t].message_notifications !== s.bL.NULL,
  o = r.yE(null !== (l = e[t].flags) && void 0 !== l ? l : 0, c.ic.UNREADS_ALL_MESSAGES) || r.yE(null !== (u = e[t].flags) && void 0 !== u ? u : 0, c.ic.UNREADS_ONLY_MENTIONS);
return !n.ignoreUnreadSetting && o || !n.ignoreNotificationSetting && a || !n.ignoreMute && (0, i.m$)(e[t]);
  });
}

function S(e) {
  let n = (0, l.e7)([u.ZP], () => u.ZP.useNewNotifications);
  return o.xT.useExperiment({
location: e
  }, {
autoTrackExposure: !1
  }).enabled && n;
}