"use strict";
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(524444),
  l = n(297047),
  u = n(592125),
  _ = n(944486),
  d = n(490504),
  c = n(626135),
  E = n(981631),
  I = n(689938),
  T = n(510902);
t.Z = function(e) {
  let {
    guild: t,
    message: n,
    onClose: h
  } = e, S = u.Z.getChannel(_.Z.getChannelId(t.id));
  return (r.useEffect(() => {
    c.default.track(E.rMx.OPEN_POPOUT, {
      type: "New Member Badge Popout",
      guild_id: t.id,
      channel_id: null == S ? void 0 : S.id
    })
  }, []), null == S) ? null : (0, i.jsx)(a.W_, {
    children: (0, i.jsxs)("div", {
      className: T.popoutContainer,
      children: [(0, i.jsxs)("div", {
        className: T.mainContent,
        children: [(0, i.jsx)("div", {
          className: T.iconContainer,
          children: (0, i.jsx)(d.Z, {
            width: 40,
            height: 40
          })
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            className: T.header,
            children: I.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
          }), (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: I.Z.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
          })]
        })]
      }), (0, i.jsx)(s.Button, {
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.BRAND,
        className: T.ctaButton,
        innerClassName: T.ctaButtonContent,
        fullWidth: !0,
        onClick: () => {
          o.ZP.trackWithMetadata(E.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
            target_user_id: n.author.id
          }), h(), (0, l.q)(n.author, S.id)
        },
        children: I.Z.Messages.MENTION_USER.format({
          username: n.author.username
        })
      })]
    })
  })
}