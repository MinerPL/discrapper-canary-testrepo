"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  r = s("300322"),
  i = s("660074"),
  o = s("543289"),
  u = s("772280"),
  d = s("659500"),
  c = s("680986"),
  m = s("867965"),
  h = s("49111"),
  f = s("782340"),
  g = s("731808");

function x(e) {
  let {
    channelName: t,
    guildId: x,
    tagFilter: C,
    channel: T
  } = e, _ = (0, c.useCanManageChannel)(T), S = (0, r.useCanStartThread)(T), p = T.isMediaChannel(), E = n.useCallback(() => {
    (0, m.trackForumUpsellModalViewed)(), (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("135430").then(s.bind(s, "135430"));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: x
      })
    })
  }, [x]), N = C.size > 0, M = S || _, A = !N && _ && !p, v = n.useCallback(() => A ? E() : S ? void d.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_COMPOSER_TITLE) : (0, h.NOOP_NULL)(), [E, A, S]);
  return (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsxs)("div", {
      className: g.iconContainer,
      children: [(0, a.jsx)("div", {
        className: g.icon,
        children: (0, a.jsx)(i.default, {
          width: 30,
          height: 30
        })
      }), (0, a.jsx)(o.default, {
        className: g.stars
      })]
    }), (0, a.jsx)(l.Heading, {
      className: g.header,
      variant: "heading-md/semibold",
      children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
        numTags: C.size
      }) : f.default.Messages.FORUM_EMPTY_STATE_TITLE
    }), (0, a.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
        numTags: C.size
      }) : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
        channelName: t
      })
    }), M && (0, a.jsxs)(l.Button, {
      look: l.Button.Looks.BLANK,
      size: l.Button.Sizes.MIN,
      color: l.Button.Colors.GREEN,
      onClick: v,
      className: g.cta,
      innerClassName: g.button,
      children: [A ? f.default.Messages.FORUM_EMPTY_STATE_CTA : f.default.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, a.jsx)(u.default, {
        width: 12
      })]
    })]
  })
}