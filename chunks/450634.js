"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var l = a("735250"),
  s = a("470079"),
  n = a("481060"),
  i = a("332664"),
  c = a("142497"),
  d = a("626135"),
  o = a("672655"),
  u = a("768015"),
  r = a("701488"),
  T = a("981631"),
  f = a("190378"),
  _ = a("689938");
let I = [r.ActivityFeedbackReasons.OTHER, r.ActivityFeedbackReasons.ADS, r.ActivityFeedbackReasons.NOT_FUN];

function A(e) {
  var t;
  let {
    channel: A,
    activityApplication: E,
    onClose: R,
    transitionState: m,
    analyticsData: C
  } = e;
  s.useEffect(() => {
    d.default.track(T.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: E.id,
      application_name: E.name,
      game_id: E.id,
      source: "Activity End"
    })
  }, [E]);
  let N = (null === (t = E.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
  return (0, l.jsx)(i.default, {
    header: _.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
      applicationName: E.name
    }),
    body: _.default.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
    problemTitle: _.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
    problems: (0, o.default)(!0, N),
    feedbackProblems: I,
    onSubmit: function(e) {
      let {
        rating: t,
        problem: s,
        dontShowAgain: i,
        feedback: o
      } = e;
      if (i && ! function(e) {
          let {
            applicationId: t,
            rating: a
          } = e;
          d.default.track(T.AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, {
            application_id: t,
            rating: a
          }), (0, c.hideHotspot)(f.HotspotLocations.POST_ACTIVITY_FEEDBACK)
        }({
          rating: t,
          applicationId: E.id
        }), null != t)(0, u.default)({
        problem: s,
        channel: A,
        feedback: o,
        activityApplication: E,
        analyticsData: C,
        location: "Activity End",
        rating: t
      }), null != s && (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, "729328"));
        return t => (0, l.jsx)(e, {
          body: _.default.Messages.ACTIVITY_REPORTED_BODY,
          ...t
        })
      })
    },
    onClose: R,
    transitionState: m,
    otherKey: r.ActivityFeedbackReasons.OTHER
  })
}