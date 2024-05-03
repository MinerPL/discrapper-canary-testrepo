"use strict";
t.r(s), t("47120");
var a = t("735250");
t("470079");
var r = t("512722"),
  l = t.n(r),
  i = t("727075"),
  n = t("442837"),
  C = t("780384"),
  o = t("481060"),
  d = t("493683"),
  c = t("37234"),
  u = t("410030"),
  f = t("204197"),
  x = t("819640"),
  p = t("63063"),
  h = t("51144"),
  _ = t("276444"),
  R = t("792451"),
  j = t("814667"),
  L = t("981631"),
  E = t("689938"),
  m = t("89282");
let g = (e, s) => {
    x.default.hasLayers() && (0, c.popLayer)(), d.default.openPrivateChannel(e), s()
  },
  S = e => {
    let {
      user: s,
      onClose: t
    } = e, {
      avatarSrc: r,
      eventHandlers: l
    } = (0, f.default)({
      user: s,
      size: o.AvatarSizes.SIZE_56
    }), i = h.default.getName(s), n = s.username !== i;
    return (0, a.jsxs)("div", {
      className: m.referredUserRowContainer,
      children: [(0, a.jsx)(o.Avatar, {
        src: r,
        "aria-label": i,
        size: o.AvatarSizes.SIZE_56,
        ...l
      }), (0, a.jsxs)("div", {
        className: m.referredUserRowBody,
        children: [(0, a.jsx)(o.Tooltip, {
          text: E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: "right",
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: l
            } = e;
            return (0, a.jsx)(o.Clickable, {
              onClick: () => g(s.id, t),
              className: m.displayNameClickableContainer,
              onMouseEnter: r,
              onMouseLeave: l,
              children: (0, a.jsx)(o.Text, {
                variant: "text-md/medium",
                className: m.displayName,
                children: i
              })
            })
          }
        }), n && (0, a.jsx)(o.Text, {
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
  }, e.id)), d = (0, n.useStateFromStores)([_.default], () => _.default.getReferralsRemaining());
  l()(null !== d, "Referrals remaining should not be null");
  let c = (0, u.useTheme)(),
    f = (0, C.isThemeLight)(c) ? j.default : R.default,
    x = E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER;
  return d > 0 && (x = E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
    numReferrals: r.length
  })), (0, a.jsxs)("div", {
    className: m.confrimationContainer,
    children: [(0, a.jsx)(o.Clickable, {
      onClick: t,
      className: m.closeButtonContainer,
      children: (0, a.jsx)(i.CloseSmallIcon, {
        width: 20,
        height: 20
      })
    }), (0, a.jsx)(f, {
      className: m.headerIcon
    }), (0, a.jsx)(o.Heading, {
      variant: "heading-lg/bold",
      className: m.heading,
      children: x
    }), (0, a.jsx)("div", {
      className: m.confirmedUserContainer,
      children: r
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/medium",
      children: E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
        days: 10,
        helpdeskArticle: p.default.getArticleURL(L.HelpdeskArticles.REFERRAL_PROGRAM)
      })
    })]
  })
}