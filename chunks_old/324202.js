"use strict";
r.r(e), r.d(e, {
  default: function() {
    return O
  }
}), r("70102");
var n = r("37983");
r("884691");
var o = r("627445"),
  a = r.n(o),
  l = r("730290"),
  i = r("845574"),
  u = r("106076"),
  c = r("382825"),
  s = r("619340"),
  d = r("148217"),
  A = r("590157"),
  h = r("535013"),
  p = r("605250"),
  f = r("872825"),
  T = r("33942"),
  I = r("267570"),
  P = r("253981"),
  _ = r("49111");
let v = new p.default("LinkAuthorize");
async function w(t, e, r, n) {
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
    a(null != A, "No URL in authorize response");
    let {
      state: t
    } = (0, h.getCallbackParamsFromURL)(A);
    a(null != t, "Authorize URL state query parameter must be present"), p = t
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

function L(t) {
  let {
    platformType: e
  } = t;
  (0, d.default)();
  let r = (0, f.parseOAuth2AuthorizeProps)(window.location.search),
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
        u = await w(r, o, a, e)
      } catch (e) {
        var c;
        v.error("Error Creating Discord link", null == e ? void 0 : e.message);
        let t = P.default.toURLSafe(r);
        if (null == t) return;
        t.searchParams.delete("code"), t.searchParams.set("error", "two_way_link_error"), t.searchParams.set("error_description", null !== (c = null == e ? void 0 : e.message) && void 0 !== c ? c : "unknown_error"), r = t.toString()
      }
      window.location = null == u || u === i.ConnectionCallbackRedirectType.OAUTH_REDIRECT ? r : u
    };
  return (0, n.jsx)(I.OAuth2Page, {
    children: (0, n.jsx)(T.OAuth2Authorize, {
      ...r,
      showLogout: !0,
      callback: u
    })
  })
}
var O = (0, A.makeAuthenticated)(function(t) {
  let {
    match: e
  } = t, r = e.params.type, {
    client_id: o = ""
  } = l.parse(window.location.search), a = r === _.PlatformTypes.PLAYSTATION && o === u.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, i = r === _.PlatformTypes.PLAYSTATION_STAGING && o === u.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  return a || i ? (0, n.jsx)(L, {
    platformType: r
  }) : null
})