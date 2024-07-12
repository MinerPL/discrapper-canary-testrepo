a.r(t), a.d(t, {
  default: function() {
return b;
  }
});
var n = a(735250),
  l = a(470079),
  s = a(481060),
  i = a(332664),
  o = a(142497),
  r = a(626135),
  c = a(672655),
  d = a(768015),
  u = a(701488),
  _ = a(981631),
  T = a(190378),
  I = a(689938);
let m = [
  u.K8.OTHER,
  u.K8.ADS,
  u.K8.NOT_FUN
];

function b(e) {
  var t;
  let {
channel: b,
activityApplication: C,
onClose: A,
transitionState: f,
analyticsData: E
  } = e;
  l.useEffect(() => {
r.default.track(_.rMx.OPEN_MODAL, {
  type: 'Activity Feedback Modal',
  application_id: C.id,
  application_name: C.name,
  game_id: C.id,
  source: 'Activity End'
});
  }, [C]);
  let p = (null === (t = C.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
  return (0, n.jsx)(i.Z, {
header: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
  applicationName: C.name
}),
body: I.Z.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
problemTitle: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
problems: (0, c.Z)(!0, p),
feedbackProblems: m,
onSubmit: function(e) {
  let {
    rating: t,
    problem: l,
    dontShowAgain: i,
    feedback: c
  } = e;
  if (i && ! function(e) {
      let {
        applicationId: t,
        rating: a
      } = e;
      r.default.track(_.rMx.ACTIVITY_REPORT_DONT_SHOW, {
        application_id: t,
        rating: a
      }), (0, o.Kw)(T.v.POST_ACTIVITY_FEEDBACK);
    }({
      rating: t,
      applicationId: C.id
    }), null != t)
    (0, d.Z)({
      problem: l,
      channel: b,
      feedback: c,
      activityApplication: C,
      analyticsData: E,
      location: 'Activity End',
      rating: t
    }), null != l && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await a.e('14466').then(a.bind(a, 729328));
      return t => (0, n.jsx)(e, {
        body: I.Z.Messages.ACTIVITY_REPORTED_BODY,
        ...t
      });
    });
},
onClose: A,
transitionState: f,
otherKey: u.K8.OTHER
  });
}