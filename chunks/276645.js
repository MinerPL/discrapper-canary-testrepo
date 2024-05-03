"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("970731"),
  i = n("689938"),
  r = n("533173");

function o(e) {
  let {
    guildId: t,
    markAsDismissed: o
  } = e;
  return (0, a.jsx)(l.default, {
    className: r.container,
    asset: (0, a.jsx)("img", {
      className: r.image,
      src: n("297806"),
      alt: ""
    }),
    header: i.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_TITLE,
    headerClassName: r.header,
    content: i.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_DESCRIPTION,
    buttonCTA: i.default.Messages.CHECK_IT_OUT,
    buttonProps: {
      color: s.ButtonColors.WHITE,
      innerClassName: r.primaryButton
    },
    onClick: () => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("5863"), n.e("29041")]).then(n.bind(n, "751212"));
        return n => (0, a.jsx)(e, {
          ...n,
          guildId: t
        })
      })
    },
    secondaryButtonCTA: i.default.Messages.MAYBE_LATER,
    secondaryButtonProps: {
      look: s.ButtonLooks.LINK,
      color: s.ButtonColors.WHITE
    },
    markAsDismissed: o
  })
}