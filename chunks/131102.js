n.r(t), n.d(t, {
  default: function() {
return I;
  }
});
var s = n(735250),
  a = n(470079),
  o = n(77866),
  l = n(704215),
  r = n(481060),
  i = n(605236),
  E = n(624659),
  u = n(626135),
  c = n(263226),
  d = n(225634),
  _ = n(981631),
  b = n(689938);

function I(e) {
  let {
transitionState: t,
onClose: I,
guildId: C,
guildName: f
  } = e, m = (0, o.Z)(d.S);
  return a.useEffect(() => {
u.default.track(_.rMx.OPEN_MODAL, {
  type: 'Guild Leave Report'
});
  }, []), (0, s.jsx)(E.Z, {
header: b.Z.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
  server: f
}),
problems: m,
onSubmit: function(e) {
  let {
    problem: t,
    dontShowAgain: a,
    feedback: o
  } = e;
  a && (0, i.EW)(l.z.GUILD_LEAVE_FEEDBACK);
  let E = null == t;
  (0, c.Z)(C, t, o, E), !E && (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('14466').then(n.bind(n, 729328));
    return t => (0, s.jsx)(e, {
      body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
      ...t
    });
  });
},
onClose: I,
transitionState: t,
otherKey: d.G.OTHER,
hasCloseButton: !0
  });
}