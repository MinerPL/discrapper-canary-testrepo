"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("775560"),
  r = n("151426"),
  u = n("77078"),
  o = n("10641"),
  i = n("866380"),
  d = n("599110"),
  c = n("489505"),
  E = n("732018"),
  f = n("49111"),
  I = n("782340");

function C(e) {
  let {
    transitionState: t,
    onClose: C,
    guildId: D,
    guildName: T
  } = e, A = (0, l.useLazyValue)(E.getGuildLeaveReasons);
  return a.useEffect(() => {
    d.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Guild Leave Report"
    })
  }, []), (0, s.jsx)(i.default, {
    header: I.default.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
    body: I.default.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
      server: T
    }),
    problems: A,
    onSubmit: function(e) {
      let {
        problem: t,
        dontShowAgain: a,
        feedback: l
      } = e;
      a && (0, o.markDismissibleContentAsDismissed)(r.DismissibleContent.GUILD_LEAVE_FEEDBACK);
      let i = null == t;
      (0, c.default)(D, t, l, i), !i && (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("874600").then(n.bind(n, "874600"));
        return t => (0, s.jsx)(e, {
          body: I.default.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
          ...t
        })
      })
    },
    onClose: C,
    transitionState: t,
    otherKey: E.GuildLeaveReasons.OTHER,
    hasCloseButton: !0
  })
}