"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("128557"),
  r = n("981631"),
  o = n("689938"),
  u = n("481264");
t.default = e => {
  let {
    guild: t,
    onAddGuild: d
  } = e, c = l.useCallback(() => {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
      return n => (0, a.jsx)(e, {
        ...n,
        guild: t,
        source: r.InstantInviteSources.HUB_DIRECTORY,
        analyticsLocation: {
          section: r.AnalyticsSections.HUB_WELCOME_CTA
        }
      })
    })
  }, [t]);
  return (0, a.jsxs)("div", {
    className: u.emptyWrapper,
    children: [(0, a.jsx)("img", {
      className: u.emptyImage,
      alt: "",
      src: n("705845")
    }), (0, a.jsx)(s.Heading, {
      className: u.emptyTitle,
      variant: "heading-xl/semibold",
      children: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_TITLE.format({
        guildName: t.name
      })
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      className: u.emptySubtitle,
      children: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_SUBTITLE
    }), null != d ? (0, a.jsx)(i.WelcomeMessageCTA, {
      className: u.emptyCTA,
      iconUrl: n("362827"),
      header: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_ADD_SERVER,
      completed: !1,
      onClick: d
    }) : null, (0, a.jsx)(i.WelcomeMessageCTA, {
      className: u.emptyCTA,
      iconUrl: n("538548"),
      header: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_INVITE,
      completed: !1,
      onClick: c
    })]
  })
}