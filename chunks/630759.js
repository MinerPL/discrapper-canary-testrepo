s.d(t, {
  Dz: function() {
return E;
  },
  KF: function() {
return u;
  },
  TQ: function() {
return T;
  },
  bo: function() {
return I;
  }
});
var n = s(913527),
  a = s.n(n),
  i = s(594174),
  r = s(70956),
  o = s(51144),
  l = s(352954),
  c = s(571826);
s(760373), s(981631);
var d = s(231338),
  _ = s(689938);

function E(e) {
  let t = i.default.getUser(e),
s = o.ZP.getName(t);
  l.Z.openSecureFramesUpdateConfirmation({
title: _.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
  username: s
}),
subtitle: _.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, c.DF)();
}
  });
}

function u(e, t) {
  l.Z.openSecureFramesUpdateConfirmation({
title: _.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
subtitle: _.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, c.Pn)();
}
  });
}

function T(e, t, s, n) {
  return (0, c.M1)({
channelId: s,
userId: e,
analyticsLocation: n
  }), d.dG;
}

function I(e) {
  let t = a()(e),
s = a()().diff(t, 's');
  if (s > 12 * r.Z.Seconds.DAYS_30) {
let e = Math.round(s / (12 * r.Z.Seconds.DAYS_30));
return _.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
  count: e
});
  }
  if (s > r.Z.Seconds.DAYS_30) {
let e = Math.round(s / r.Z.Seconds.DAYS_30);
return _.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
  count: e
});
  }
  if (s > 7 * r.Z.Seconds.DAY) {
let e = Math.round(s / (7 * r.Z.Seconds.DAY));
return _.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
  count: e
});
  } else if (s > r.Z.Seconds.DAY) {
let e = Math.round(s / r.Z.Seconds.DAY);
return _.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
  count: e
});
  } else if (s > r.Z.Seconds.HOUR) {
let e = Math.round(s / r.Z.Seconds.HOUR);
return _.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
  count: e
});
  } else {
if (!(s > r.Z.Seconds.MINUTE))
  return _.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
    count: s
  });
let e = Math.round(s / r.Z.Seconds.MINUTE);
return _.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
  count: e
});
  }
}