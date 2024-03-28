"use strict";
t.r(s), t("47120");
var i = t("735250"),
  n = t("470079"),
  r = t("593473"),
  a = t("478677"),
  l = t("457330"),
  o = t("417663"),
  c = t("981631");

function d(e) {
  let {
    platformType: s
  } = e, [t, a] = n.useState("verifying");
  return n.useEffect(() => {
    let {
      code: e,
      state: t
    } = r.parse(window.location.search);
    if (null == e || null == t) {
      a("error");
      return
    }
    l.default.linkDispatchAuthCallback(s, {
      code: e,
      state: t
    }).then(e => {
      let {
        status: s
      } = e;
      a(204 === s ? "verified" : "error")
    }, () => {
      a("error")
    })
  }, [s]), (0, i.jsx)(o.AccountConnectionResult, {
    platformType: s,
    verifying: "verifying" === t,
    verified: "verified" === t
  })
}
s.default = function(e) {
  let {
    match: s
  } = e, t = s.params.type, {
    two_way_link_type: n
  } = r.parse(window.location.search);
  return [c.PlatformTypes.XBOX, c.PlatformTypes.PLAYSTATION_STAGING, c.PlatformTypes.PLAYSTATION, c.PlatformTypes.CRUNCHYROLL].includes(t) && n === a.TwoWayLinkType.DESKTOP ? (0, i.jsx)(d, {
    platformType: t
  }) : null
}