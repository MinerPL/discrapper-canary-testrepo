"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("129861"),
  u = n("954138"),
  d = n("979264"),
  _ = n("969832"),
  c = n("51144"),
  E = n("659101"),
  I = n("981631"),
  T = n("689938"),
  f = n("614076");

function S(e) {
  let {
    user: t,
    shouldCopyOnClick: n,
    nickname: a,
    pronouns: S,
    usernameIcon: h,
    identityCTA: A,
    className: m,
    isTryItOut: N = !1,
    lastSection: p
  } = e, O = (0, u.default)("username"), C = r.useMemo(() => ({
    source: I.AnalyticsSections.PROFILE_POPOUT,
    tagUserId: t.id
  }), [t.id]);
  return (0, i.jsxs)(E.default, {
    className: s()(f.container, m),
    lastSection: p,
    children: [(0, i.jsxs)("div", {
      className: n ? f.copiableNameTag : void 0,
      children: [(0, i.jsx)(_.CopiableField, {
        className: f.copiableField,
        copyMetaData: "User Tag",
        copyTooltip: T.default.Messages.ACCOUNT_CLICK_TO_COPY,
        copyValue: c.default.getUserTag(t, {
          decoration: "never",
          identifiable: "always"
        }),
        showCopyIcon: !0,
        disableCopy: !n,
        children: (0, i.jsxs)("div", {
          className: f.userText,
          children: [null != a ? (0, i.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            className: f.nickname,
            children: a
          }) : null, (0, i.jsx)(l.default, {
            usernameIcon: h,
            user: t,
            forceUsername: !0,
            forcePomelo: N,
            className: null == a ? f.userTagNoNickname : f.userTagWithNickname,
            usernameClass: null == a ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
            discriminatorClass: null == a ? f.userTagDiscriminatorNoNickname : f.discrimBase,
            botClass: null == a ? f.headerBotTag : f.headerBotTagWithNickname
          }), A]
        })
      }), null != S && "" !== S && (0, i.jsx)(o.Tooltip, {
        text: T.default.Messages.USER_PROFILE_PRONOUNS,
        children: e => (0, i.jsx)(o.Text, {
          ...e,
          variant: "text-sm/normal",
          className: f.pronouns,
          children: S
        })
      })]
    }), O && (0, i.jsx)("div", {
      className: f.clanTag,
      children: (0, i.jsx)(d.default, {
        userId: t.id,
        inline: !1,
        profileViewedAnalytics: C
      })
    })]
  })
}