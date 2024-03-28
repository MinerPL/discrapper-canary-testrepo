"use strict";
r.r(e), r("411104");
var n = r("735250");
r("470079");
var o = r("512722"),
  a = r.n(o),
  l = r("593473"),
  i = r("983771"),
  u = r("159277"),
  c = r("478677"),
  s = r("457330"),
  d = r("702493"),
  A = r("77987"),
  h = r("275759"),
  p = r("710845"),
  T = r("807675"),
  f = r("69580"),
  I = r("787025"),
  P = r("591759"),
  _ = r("981631");
let w = new p.default("LinkAuthorize");
async function L(t, e, r, n) {
  var o, l, i, u, d;
  let A = null;
  try {
    let {
      body: t
    } = await s.default.authorize(n, {
      twoWayLinkType: c.TwoWayLinkType.WEB
    });
    A = t.url
  } catch (t) {
    throw Error("error at authorize with code ".concat(null !== (l = null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.code) && void 0 !== l ? l : 0))
  }
  let p = null;
  try {
    a()(null != A, "No URL in authorize response");
    let {
      state: t
    } = (0, h.getCallbackParamsFromURL)(A);
    a()(null != t, "Authorize URL state query parameter must be present"), p = t
  } catch (t) {
    throw Error("error at authorize parsing callback params")
  }
  try {
    let o = await s.default.completeTwoWayLink(n, t, e, p, r);
    return null == o ? void 0 : null === (i = o.body) || void 0 === i ? void 0 : i.redirect
  } catch (t) {
    throw Error("error at callback with code ".concat(null !== (d = null == t ? void 0 : null === (u = t.body) || void 0 === u ? void 0 : u.code) && void 0 !== d ? d : 0))
  }
}

function v(t) {
  let {
    platformType: e
  } = t;
  (0, d.default)();
  let r = (0, T.parseOAuth2AuthorizeProps)(window.location.search),
    {
      code: o,
      token_redirect_uri: a
    } = l.parse(window.location.search),
    u = async t => {
      let {
        location: r
      } = t;
      if (null == r) return;
      let {
        error: n
      } = l.parse(r), u = null;
      if (null == n && null != o) try {
        u = await L(r, o, a, e)
      } catch (e) {
        var c;
        w.error("Error Creating Discord link", null == e ? void 0 : e.message);
        let t = P.default.toURLSafe(r);
        if (null == t) return;
        t.searchParams.delete("code"), t.searchParams.set("error", "two_way_link_error"), t.searchParams.set("error_description", null !== (c = null == e ? void 0 : e.message) && void 0 !== c ? c : "unknown_error"), r = t.toString()
      }
      window.location = null == u || u === i.ConnectionCallbackRedirectType.OAUTH_REDIRECT ? r : u
    };
  return (0, n.jsx)(I.OAuth2Page, {
    children: (0, n.jsx)(f.OAuth2Authorize, {
      ...r,
      showLogout: !0,
      callback: u
    })
  })
}
e.default = (0, A.makeAuthenticated)(function(t) {
  let {
    match: e
  } = t, r = e.params.type, {
    client_id: o = ""
  } = l.parse(window.location.search), a = r === _.PlatformTypes.PLAYSTATION && o === u.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, i = r === _.PlatformTypes.PLAYSTATION_STAGING && o === u.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  return a || i ? (0, n.jsx)(v, {
    platformType: r
  }) : null
})