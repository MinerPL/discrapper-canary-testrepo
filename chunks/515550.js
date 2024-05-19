"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("230711"),
  i = n("100527"),
  r = n("906732"),
  o = n("170671"),
  u = n("465670"),
  d = n("981631"),
  c = n("921944"),
  f = n("689938"),
  E = n("693063");

function h(e) {
  let {
    markAsDismissed: t
  } = e, {
    analyticsLocations: n
  } = (0, r.default)(i.default.APP_ICON_NEW_STYLES_COACHMARK);
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)("div", {
      className: E.banner
    }), (0, a.jsx)(s.Button, {
      "aria-label": f.default.Messages.CLOSE,
      look: s.Button.Looks.BLANK,
      size: s.Button.Sizes.NONE,
      onClick: () => {
        t(c.ContentDismissActionType.USER_DISMISS)
      },
      className: E.closeButton,
      children: (0, a.jsx)(u.default, {
        width: 16,
        height: 16,
        className: E.closeIcon,
        color: "white"
      })
    }), (0, a.jsxs)("div", {
      className: E.body,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-md/extrabold",
        children: f.default.Messages.APP_ICON_NEW_STYLES_HEADER
      }), (0, a.jsxs)("div", {
        className: E.poweredByNitroContainer,
        children: [(0, a.jsx)(o.default, {
          className: E.icon,
          isSelected: !0
        }), (0, a.jsx)(s.Text, {
          variant: "text-xxs/medium",
          children: f.default.Messages.POWERED_BY_NITRO
        })]
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: f.default.Messages.APP_ICON_NEW_STYLES_BODY
      })]
    }), (0, a.jsx)(s.Button, {
      className: E.cta,
      look: s.Button.Looks.FILLED,
      color: s.Button.Colors.CUSTOM,
      onClick: () => {
        t(c.ContentDismissActionType.TAKE_ACTION), l.default.open(d.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: n
        })
      },
      children: f.default.Messages.APP_ICON_NEW_STYLES_CTA
    }), (0, a.jsx)("div", {
      className: E.pointer
    })]
  })
}