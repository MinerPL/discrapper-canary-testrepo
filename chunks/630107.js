"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250"),
  a = n("470079"),
  i = n("873546"),
  l = n("442837"),
  r = n("481060"),
  u = n("830064"),
  o = n("625128"),
  c = n("362762"),
  d = n("703656"),
  f = n("819570"),
  p = n("981631"),
  m = n("186901"),
  g = n("689938"),
  N = n("419750"),
  x = n("343407");
l.default.initialize();
let b = i.isMobile || i.isTablet,
  h = "inventory";

function T() {
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getState("quests"));
  if (a.useEffect(() => {
      !b && (null == e ? o.default.openNativeAppModal("quests", p.RPCCommands.DEEP_LINK, {
        type: m.RPCDeepLinks.USER_SETTINGS,
        params: {
          section: h
        }
      }) : e === p.NativeAppStates.OPEN_FAIL && (0, d.replaceWith)(p.Routes.SETTINGS(h)))
    }, [e]), b) return (0, s.jsxs)("div", {
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