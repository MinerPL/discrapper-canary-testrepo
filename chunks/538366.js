"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
});
var s = a("735250"),
  n = a("470079"),
  l = a("481060"),
  r = a("665906"),
  i = a("634648"),
  o = a("499033"),
  d = a("692437"),
  u = a("585483"),
  c = a("456269"),
  m = a("228392"),
  h = a("981631"),
  f = a("689938"),
  g = a("921684");

function x(e) {
  let {
    channelName: t,
    guildId: x,
    tagFilter: C,
    channel: _
  } = e, S = (0, c.useCanManageChannel)(_), T = (0, r.useCanStartThread)(_), p = _.isMediaChannel(), E = n.useCallback(() => {
    (0, m.trackForumUpsellModalViewed)(), (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("18417")]).then(a.bind(a, "740696"));
      return t => (0, s.jsx)(e, {
        ...t,
        guildId: x
      })
    })
  }, [x]), N = C.size > 0, M = T || S, v = !N && S && !p, A = n.useCallback(() => v ? E() : T ? void u.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_COMPOSER_TITLE) : (0, h.NOOP_NULL)(), [E, v, T]);
  return (0, s.jsxs)("div", {
    className: g.container,
    children: [(0, s.jsxs)("div", {
      className: g.iconContainer,
      children: [(0, s.jsx)("div", {
        className: g.icon,
        children: (0, s.jsx)(i.default, {
          width: 30,
          height: 30
        })
      }), (0, s.jsx)(o.default, {
        className: g.stars
      })]
    }), (0, s.jsx)(l.Heading, {
      className: g.header,
      variant: "heading-md/semibold",
      children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
        numTags: C.size
      }) : f.default.Messages.FORUM_EMPTY_STATE_TITLE
    }), (0, s.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
        numTags: C.size
      }) : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
        channelName: t
      })
    }), M && (0, s.jsxs)(l.Button, {
      look: l.Button.Looks.BLANK,
      size: l.Button.Sizes.MIN,
      color: l.Button.Colors.GREEN,
      onClick: A,
      className: g.cta,
      innerClassName: g.button,
      children: [v ? f.default.Messages.FORUM_EMPTY_STATE_CTA : f.default.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, s.jsx)(d.default, {
        width: 12
      })]
    })]
  })
}