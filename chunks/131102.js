"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("207561"),
  u = s("524437"),
  r = s("481060"),
  o = s("605236"),
  i = s("624659"),
  E = s("626135"),
  d = s("263226"),
  c = s("225634"),
  f = s("981631"),
  I = s("689938");

function C(e) {
  let {
    transitionState: t,
    onClose: C,
    guildId: _,
    guildName: A
  } = e, L = (0, n.useLazyValue)(c.getGuildLeaveReasons);
  return l.useEffect(() => {
    E.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Guild Leave Report"
    })
  }, []), (0, a.jsx)(i.default, {
    header: I.default.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
    body: I.default.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
      server: A
    }),
    problems: L,
    onSubmit: function(e) {
      let {
        problem: t,
        dontShowAgain: l,
        feedback: n
      } = e;
      l && (0, o.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_LEAVE_FEEDBACK);
      let i = null == t;
      (0, d.default)(_, t, n, i), !i && (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("14466")]).then(s.bind(s, "729328"));
        return t => (0, a.jsx)(e, {
          body: I.default.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
          ...t
        })
      })
    },
    onClose: C,
    transitionState: t,
    otherKey: c.GuildLeaveReasons.OTHER,
    hasCloseButton: !0
  })
}