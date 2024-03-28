"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("785681"),
  i = n("841409"),
  r = n("880257"),
  o = n("631885"),
  u = n("568671"),
  d = n("292352"),
  c = n("689938"),
  f = n("553196"),
  E = n("633488"),
  h = n("361848");
let _ = () => {
  let e = (0, o.useUserForLinkStatus)(d.UserLinkStatus.ACTIVE),
    t = (0, r.default)(),
    {
      handleTabChange: n
    } = (0, i.default)();
  return (0, o.useHasMaxConnections)() || t && e.length > 0 ? null : (0, a.jsx)("div", {
    className: f.button,
    children: t ? (0, a.jsx)(s.Button, {
      fullWidth: !1,
      size: s.ButtonSizes.LARGE,
      onClick: () => n(d.FamilyCenterSubPages.REQUESTS),
      children: c.default.Messages.GET_STARTED
    }) : (0, a.jsx)(u.default, {})
  })
};
t.default = () => {
  let e = (0, r.default)(),
    t = (0, l.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_TEEN, c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_PARENT),
    n = (0, l.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_TEEN.format({
      articleLink: "https://support.discord.com/hc/articles/14155060633623"
    }), c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_PARENT.format({
      articleLink: "https://support.discord.com/hc/articles/14155043715735"
    }));
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        children: (0, a.jsxs)("div", {
          className: f.headerText,
          children: [(0, a.jsx)(s.Heading, {
            variant: "heading-xl/medium",
            children: (0, a.jsx)(s.HeadingLevel, {
              children: t
            })
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: n
          })]
        })
      }), (0, a.jsx)(_, {})]
    }), (0, a.jsx)("div", {
      className: f.headerImage,
      children: (0, a.jsx)("img", {
        src: e ? E : h,
        alt: c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
      })
    })]
  })
}