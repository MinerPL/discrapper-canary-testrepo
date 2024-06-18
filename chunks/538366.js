"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250),
  l = n(470079),
  a = n(481060),
  i = n(665906),
  r = n(634648),
  o = n(499033),
  c = n(692437),
  d = n(585483),
  u = n(456269),
  h = n(228392),
  m = n(981631),
  g = n(689938),
  x = n(737472);

function _(e) {
  let {
    channelName: t,
    guildId: _,
    tagFilter: f,
    channel: E
  } = e, N = (0, u.r_)(E), T = (0, i.cD)(E), C = E.isMediaChannel(), p = l.useCallback(() => {
    (0, h.qz)(), (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("18417")]).then(n.bind(n, 740696));
      return t => (0, s.jsx)(e, {
        ...t,
        guildId: _
      })
    })
  }, [_]), v = f.size > 0, M = T || N, S = !v && N && !C, I = l.useCallback(() => S ? p() : T ? void d.S.dispatch(m.CkL.FOCUS_COMPOSER_TITLE) : (0, m.VqG)(), [p, S, T]);
  return (0, s.jsxs)("div", {
    className: x.container,
    children: [(0, s.jsxs)("div", {
      className: x.iconContainer,
      children: [(0, s.jsx)("div", {
        className: x.icon,
        children: (0, s.jsx)(r.Z, {
          width: 30,
          height: 30
        })
      }), (0, s.jsx)(o.Z, {
        className: x.stars
      })]
    }), (0, s.jsx)(a.Heading, {
      className: x.header,
      variant: "heading-md/semibold",
      children: v ? g.Z.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
        numTags: f.size
      }) : g.Z.Messages.FORUM_EMPTY_STATE_TITLE
    }), (0, s.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: v ? g.Z.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
        numTags: f.size
      }) : g.Z.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
        channelName: t
      })
    }), M && (0, s.jsxs)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.MIN,
      color: a.Button.Colors.GREEN,
      onClick: I,
      className: x.cta,
      innerClassName: x.button,
      children: [S ? g.Z.Messages.FORUM_EMPTY_STATE_CTA : g.Z.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, s.jsx)(c.Z, {
        width: 12
      })]
    })]
  })
}