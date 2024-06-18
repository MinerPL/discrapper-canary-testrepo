"use strict";
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(39154),
  l = n(739566),
  u = n(25015),
  _ = n(592125),
  d = n(998951),
  c = n(113039),
  E = n(778947),
  I = n(512665),
  T = n(768760),
  h = n(689938),
  S = n(287889);
t.Z = e => {
  let {
    message: t
  } = e, n = (0, l.ZP)(t), f = (0, s.e7)([_.Z], () => _.Z.getChannel(t.channel_id)), N = r.useMemo(() => (0, a.Z)(t), [t]), {
    content: A
  } = (0, u.Z)(N, {
    hideSimpleEmbedContent: !1
  }), m = r.useCallback(() => {
    let {
      leadingIcon: e,
      trailingIcon: n
    } = (0, I.f)(t, A, !1, "", {
      leadingIconClass: S.attachmentIcon,
      trailingIconClass: S.attachmentIcon,
      iconSize: T.WW
    }), r = null == A || "" === A || Array.isArray(A) && 0 === A.length;
    return (0, i.jsxs)("div", {
      className: S.contentContainer,
      children: [e, r ? n : (0, i.jsx)(c.ZP, {
        message: t,
        content: A
      })]
    })
  }, [t, A]);
  return null == f ? null : (0, i.jsxs)("div", {
    className: S.container,
    children: [(0, i.jsx)(o.Heading, {
      className: S.header,
      variant: "heading-sm/semibold",
      children: h.Z.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
    }), (0, i.jsx)(o.Scroller, {
      className: S.messagePreviewContainer,
      children: (0, i.jsx)(d.Z, {
        childrenMessageContent: m(),
        childrenHeader: (0, i.jsx)(E.ZP, {
          message: t,
          channel: f,
          author: n,
          guildId: f.guild_id
        }),
        disableInteraction: !0
      })
    })]
  })
}