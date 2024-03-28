"use strict";
n.r(t), n.d(t, {
  WelcomeCTAContainer: function() {
    return N
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("541716"),
  o = n("419922"),
  u = n("665906"),
  d = n("271383"),
  c = n("430824"),
  f = n("496675"),
  E = n("594174"),
  _ = n("838440"),
  T = n("779139"),
  m = n("981631"),
  I = n("689938"),
  p = n("909013");
let h = e => {
    let {
      channel: t,
      message: n
    } = e, [l, u] = a.useState(!1), d = (0, T.pickWelcomeSticker)(n.id), c = a.useCallback(() => {
      (0, _.applyChatRestrictions)({
        type: r.ChatInputTypes.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: s
        } = e;
        s && (0, T.handleWelcomeCtaClicked)(t, n, d.id)
      })
    }, [t, n, d]);
    return (0, s.jsx)("div", {
      className: p.welcomeCTA,
      children: (0, s.jsxs)(i.Button, {
        className: p.welcomeCTAButtonOuter,
        innerClassName: p.welcomeCTAButton,
        color: i.ButtonColors.PRIMARY,
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        onClick: c,
        children: [(0, s.jsx)(o.default, {
          className: p.welcomeCTASticker,
          isInteracting: l,
          sticker: d,
          size: 28
        }), I.default.Messages.WELCOME_CTA_LABEL]
      })
    })
  },
  N = e => {
    let {
      message: t,
      channel: n
    } = e, a = n.getGuildId(), i = (0, l.useStateFromStores)([E.default, f.default, c.default, d.default], () => {
      var e;
      let s = E.default.getCurrentUser(),
        l = (0, u.computeIsReadOnlyThread)(n),
        i = f.default.can(m.Permissions.SEND_MESSAGES, n),
        r = null != a && null != s && (null === (e = d.default.getMember(a, s.id)) || void 0 === e ? void 0 : e.isPending),
        o = t.author.bot,
        _ = c.default.getGuild(a),
        T = null != _ && (_.systemChannelFlags & m.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return i && !l && !r && !o && T
    });
    return null != a && i ? (0, s.jsx)(h, {
      message: t,
      channel: n
    }) : null
  }