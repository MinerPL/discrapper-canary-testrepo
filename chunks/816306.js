"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("37983"),
  a = n("884691"),
  i = n("394846"),
  l = n("446674"),
  r = n("77078"),
  u = n("528502"),
  o = n("523086"),
  c = n("208620"),
  d = n("393414"),
  f = n("124969"),
  p = n("49111"),
  m = n("492249"),
  g = n("782340"),
  N = n("580073"),
  x = n("853297");
l.default.initialize();
let h = i.isMobile || i.isTablet,
  b = "inventory";

function T() {
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getState("quests"));
  if (a.useEffect(() => {
      !h && (null == e ? o.default.openNativeAppModal("quests", p.RPCCommands.DEEP_LINK, {
        type: m.RPCDeepLinks.USER_SETTINGS,
        params: {
          section: b
        }
      }) : e === p.NativeAppStates.OPEN_FAIL && (0, d.replaceWith)(p.Routes.SETTINGS(b)))
    }, [e]), h) return (0, s.jsxs)("div", {
    className: N.mobileWebContainer,
    children: [(0, s.jsx)("img", {
      src: x,
      alt: "",
      className: N.mobileWebImage
    }), (0, s.jsx)(r.Heading, {
      variant: "display-lg",
      color: "text-brand",
      children: g.default.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
    }), (0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      className: N.mobileWebCopy,
      children: g.default.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY.format()
    })]
  });
  let t = null == e || e === p.NativeAppStates.OPENING || e === p.NativeAppStates.OPEN_FAIL;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.default, {
      className: N.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, s.jsx)("div", {
      className: N.container,
      children: (0, s.jsx)(f.default, {
        children: t ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(f.Title, {
            children: g.default.Messages.APP_OPENING
          }), (0, s.jsx)(f.AuthSpinner, {})]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(f.Title, {
            className: N.appOpenedTitle,
            children: g.default.Messages.APP_OPENED_TITLE
          }), (0, s.jsx)(f.SubTitle, {
            children: g.default.Messages.DEEPLINK_BROWSER_APP_OPENED
          })]
        })
      })
    })]
  })
}