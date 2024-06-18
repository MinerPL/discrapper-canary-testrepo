"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(782568),
  a = n(63063),
  l = n(981631),
  u = n(689938),
  _ = n(54674),
  d = n(224275);

function c() {
  let e = r.useCallback(() => {
    (0, o.Z)(a.Z.getArticleURL(l.BhN.LAUNCHING_APPS_WITH_SHAPES_BUTTON))
  }, []);
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)("img", {
      className: _.image,
      src: d,
      alt: "",
      "aria-hidden": !0
    }), (0, i.jsxs)("div", {
      className: _.body,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-lg/bold",
        color: "header-primary",
        children: u.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE
      }), (0, i.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: u.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
      })]
    }), (0, i.jsx)(s.Button, {
      size: s.Button.Sizes.MEDIUM,
      "aria-label": u.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
      onClick: e,
      children: u.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE
    })]
  })
}