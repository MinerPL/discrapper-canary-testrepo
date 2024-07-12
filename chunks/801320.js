n.r(t), n.d(t, {
  VideoBackgroundIssue: function() {
return s;
  },
  default: function() {
return N;
  }
});
var a, s, l = n(735250),
  o = n(470079),
  r = n(481060),
  i = n(332664),
  c = n(142497),
  u = n(626135),
  d = n(981631),
  _ = n(190378),
  E = n(689938);
(a = s || (s = {})).BAD_OUTLINE = 'BAD_OUTLINE', a.BACKGROUND_DETECTION_ACCURACY = 'BACKGROUND_DETECTION_ACCURACY', a.FLICKERING = 'FLICKERING', a.BACKGROUND_DETECTION_LAG = 'BACKGROUND_DETECTION_LAG', a.OTHER = 'OTHER';
let C = ['OTHER'];

function N(e) {
  let {
analyticsData: t,
transitionState: a,
onClose: s
  } = e;
  return o.useEffect(() => {
u.default.track(d.rMx.OPEN_MODAL, {
  type: 'Video Background Feedback'
});
  }, []), (0, l.jsx)(i.Z, {
header: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
body: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
problemTitle: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
problems: [{
    value: 'BAD_OUTLINE',
    label: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE
  },
  {
    value: 'BACKGROUND_DETECTION_ACCURACY',
    label: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY
  },
  {
    value: 'FLICKERING',
    label: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING
  },
  {
    value: 'BACKGROUND_DETECTION_LAG',
    label: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG
  },
  {
    value: 'OTHER',
    label: E.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
  }
],
feedbackProblems: C,
onSubmit: function(e) {
  var a, s, o, i;
  let {
    rating: C,
    problem: N,
    dontShowAgain: O,
    feedback: b
  } = e;
  if (O && (0, c.Kw)(_.v.VIDEO_BACKGROUND_FEEDBACK), null != C)
    a = C, s = N, o = b, i = t, u.default.track(d.rMx.VIDEO_BACKGROUND_FEEDBACK, {
      ...i,
      reason: s,
      rating: a,
      feedback: o
    }), null != N && (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('14466').then(n.bind(n, 729328));
      return t => (0, l.jsx)(e, {
        body: E.Z.Messages.VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
        ...t
      });
    });
},
onClose: s,
transitionState: a,
otherKey: 'OTHER'
  });
}