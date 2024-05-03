"use strict";
s.r(t), s("610138"), s("216116"), s("78328"), s("815648"), s("47120");
var a = s("735250");
s("470079");
var n = s("481060"),
  r = s("457330"),
  i = s("417663"),
  o = s("726542"),
  l = s("77987"),
  c = s("787025"),
  d = s("689938"),
  u = s("672524");
t.default = (0, l.makeAuthenticated)(function(e) {
  let {
    match: t
  } = e, s = t.params.type, l = o.default.get(s);
  if (null == l) return (0, a.jsx)(c.OAuth2Page, {
    children: (0, a.jsx)(n.Text, {
      className: u.error,
      variant: "text-md/normal",
      color: "text-warning",
      children: d.default.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_PLATFORM_UNKNOWN
    })
  });
  async function f() {
    var e, t, a;
    let n = new URLSearchParams(window.location.search),
      {
        body: i
      } = await r.default.authorize(s, {
        location: "Connection Intermediate",
        twoWayLink: null != n.get("two_way_link") ? "true" === n.get("two_way_link") : void 0,
        twoWayLinkType: null !== (e = n.get("two_way_link_type")) && void 0 !== e ? e : void 0,
        userCode: null !== (t = n.get("two_way_user_code")) && void 0 !== t ? t : void 0,
        successRedirect: null !== (a = n.get("success_redirect")) && void 0 !== a ? a : void 0
      });
    window.location = i.url
  }
  return (0, a.jsx)(c.OAuth2Page, {
    wrapperClassName: u.wrapper,
    children: (0, a.jsxs)("div", {
      className: u.root,
      children: [(0, a.jsx)(i.LinkPlatformLogo, {
        className: u.logos,
        platform: l
      }), (0, a.jsx)(n.Heading, {
        variant: "text-lg/bold",
        className: u.header,
        children: d.default.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_HEADER.format({
          provider: l.name
        })
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        className: u.body,
        children: d.default.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_DESCRIPTION.format({
          provider: l.name
        })
      }), (0, a.jsx)(n.Button, {
        size: n.Button.Sizes.LARGE,
        color: n.Button.Colors.BRAND,
        onClick: f,
        children: d.default.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_BUTTON
      })]
    })
  })
})