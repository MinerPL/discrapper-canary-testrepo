"use strict";
t.r(s), t("47120");
var a = t("735250");
t("470079");
var r = t("512722"),
  i = t.n(r),
  l = t("727075"),
  n = t("442837"),
  C = t("780384"),
  d = t("481060"),
  o = t("493683"),
  c = t("37234"),
  u = t("410030"),
  f = t("204197"),
  x = t("819640"),
  p = t("63063"),
  h = t("51144"),
  _ = t("276444"),
  R = t("792451"),
  j = t("814667"),
  E = t("981631"),
  L = t("689938"),
  m = t("830292");
let g = (e, s) => {
    x.default.hasLayers() && (0, c.popLayer)(), o.default.openPrivateChannel(e), s()
  },
  S = e => {
    let {
      user: s,
      onClose: t
    } = e, {
      avatarSrc: r,
      eventHandlers: i
    } = (0, f.default)({
      user: s,
      size: d.AvatarSizes.SIZE_56
    }), l = h.default.getName(s), n = s.username !== l;
    return (0, a.jsxs)("div", {
      className: m.referredUserRowContainer,
      children: [(0, a.jsx)(d.Avatar, {
        src: r,
        "aria-label": l,
        size: d.AvatarSizes.SIZE_56,
        ...i
      }), (0, a.jsxs)("div", {
        className: m.referredUserRowBody,
        children: [(0, a.jsx)(d.Tooltip, {
          text: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: i
            } = e;
            return (0, a.jsx)(d.Clickable, {
              onClick: () => g(s.id, t),
              className: m.displayNameClickableContainer,
              onMouseEnter: r,
              onMouseLeave: i,
              children: (0, a.jsx)(d.Text, {
                variant: "text-md/medium",
                className: m.displayName,
                children: l
              })
            })
          }
        }), n && (0, a.jsx)(d.Text, {
          variant: "text-md/medium",
          className: m.userName,
          children: s.username
        })]
      })]
    })
  };
s.default = e => {
  let {
    selectedUsers: s,
    onClose: t
  } = e, r = [...s].map(e => (0, a.jsx)(S, {
    user: e,
    onClose: t
  }, e.id)), o = (0, n.useStateFromStores)([_.default], () => _.default.getReferralsRemaining());
  i()(null !== o, "Referrals remaining should not be null");
  let c = (0, u.useTheme)(),
    f = (0, C.isThemeLight)(c) ? j.default : R.default,
    x = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER;
  return o > 0 && (x = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
    numReferrals: r.length
  })), (0, a.jsxs)("div", {
    className: m.confrimationContainer,
    children: [(0, a.jsx)(d.Clickable, {
      onClick: t,
      className: m.closeButtonContainer,
      children: (0, a.jsx)(l.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, a.jsx)(f, {
      className: m.headerIcon
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-lg/bold",
      className: m.heading,
      children: x
    }), (0, a.jsx)("div", {
      className: m.confirmedUserContainer,
      children: r
    }), (0, a.jsx)(d.Text, {
      variant: "text-md/medium",
      children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: p.default.getArticleURL(E.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}