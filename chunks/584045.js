"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(129861),
  u = n(954138),
  _ = n(979264),
  d = n(969832),
  c = n(51144),
  E = n(659101),
  I = n(981631),
  T = n(689938),
  h = n(614076);

function S(e) {
  let {
    user: t,
    shouldCopyOnClick: n,
    nickname: s,
    pronouns: S,
    usernameIcon: f,
    identityCTA: N,
    className: A,
    isTryItOut: m = !1,
    lastSection: O
  } = e, R = (0, u.Z)("username"), C = r.useMemo(() => ({
    source: I.jXE.PROFILE_POPOUT,
    tagUserId: t.id
  }), [t.id]);
  return (0, i.jsxs)(E.Z, {
    className: o()(h.container, A),
    lastSection: O,
    children: [(0, i.jsxs)("div", {
      className: n ? h.copiableNameTag : void 0,
      children: [(0, i.jsx)(d.o, {
        className: h.copiableField,
        copyMetaData: "User Tag",
        copyTooltip: T.Z.Messages.ACCOUNT_CLICK_TO_COPY,
        copyValue: c.ZP.getUserTag(t, {
          decoration: "never",
          identifiable: "always"
        }),
        showCopyIcon: !0,
        disableCopy: !n,
        children: (0, i.jsxs)("div", {
          className: h.userText,
          children: [null != s ? (0, i.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            className: h.nickname,
            children: s
          }) : null, (0, i.jsx)(l.Z, {
            usernameIcon: f,
            user: t,
            forceUsername: !0,
            forcePomelo: m,
            className: null == s ? h.userTagNoNickname : h.userTagWithNickname,
            usernameClass: null == s ? h.userTagUsernameNoNickname : h.userTagUsernameBase,
            discriminatorClass: null == s ? h.userTagDiscriminatorNoNickname : h.discrimBase,
            botClass: null == s ? h.headerBotTag : h.headerBotTagWithNickname
          }), N]
        })
      }), null != S && "" !== S && (0, i.jsx)(a.Tooltip, {
        text: T.Z.Messages.USER_PROFILE_PRONOUNS,
        children: e => (0, i.jsx)(a.Text, {
          ...e,
          variant: "text-sm/normal",
          className: h.pronouns,
          children: S
        })
      })]
    }), R && (0, i.jsx)("div", {
      className: h.clanTag,
      children: (0, i.jsx)(_.ZP, {
        userId: t.id,
        inline: !1,
        profileViewedAnalytics: C
      })
    })]
  })
}