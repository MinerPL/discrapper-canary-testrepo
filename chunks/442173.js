n.r(t), n.d(t, {
  default: function() {
return h;
  }
});
var a = n(735250),
  o = n(470079),
  l = n(481060),
  s = n(375964),
  r = n.n(s),
  i = n(332664),
  c = n(142497),
  u = n(626135),
  d = n(798733),
  _ = n(559187),
  f = n(981631),
  b = n(190378),
  m = n(689938);
let E = [r().CALL_FEEDBACK_OPTION_OTHER];

function h(e) {
  let {
reportId: t,
reportType: s,
...h
  } = e;
  return o.useEffect(() => {
u.default.track(f.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
  report_id: t,
  report_type: s
});
  }, [
t,
s
  ]), (0, a.jsx)(i.Z, {
header: m.Z.Messages.IAR_FEEDBACK_TITLE,
body: m.Z.Messages.IAR_FEEDBACK_PROMPT,
problemTitle: m.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
problems: (0, d.Z)(),
feedbackProblems: E,
onSubmit: function(e) {
  let {
    rating: o,
    problem: r,
    dontShowAgain: i,
    feedback: u
  } = e;
  if (i && (0, c.Kw)(b.v.IN_APP_REPORTS_FEEDBACK), (0, _.Z)({
      rating: o,
      problem: r,
      feedback: u,
      reportId: t,
      reportType: s,
      dontShowAgain: i
    }), null != o && null != r)
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('14466').then(n.bind(n, 729328));
      return t => (0, a.jsx)(e, {
        body: m.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
        ...t
      });
    });
},
otherKey: r().CALL_FEEDBACK_OPTION_OTHER,
...h
  });
}