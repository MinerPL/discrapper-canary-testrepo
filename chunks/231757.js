"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(842146),
  o = n(293177),
  a = n(349407),
  l = n(49012),
  u = n(202120),
  _ = n(981631);

function d(e) {
  let {
    platformType: t,
    location: d,
    overrideUrl: c,
    successRedirect: E
  } = e;
  if (t === _.ABu.LEAGUE_OF_LEGENDS && (t = _.ABu.RIOT_GAMES), t === _.ABu.CRUNCHYROLL) {
    s.K([null != d ? d : "unknown"]);
    return
  }
  if (t === _.ABu.XBOX) {
    a.K([null != d ? d : "unknown"]);
    return
  }
  if (t === _.ABu.PLAYSTATION || t === _.ABu.PLAYSTATION_STAGING) {
    o.K([null != d ? d : "unknown"], t);
    return
  }
  if (t === _.ABu.DOMAIN) {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("64941")]).then(n.bind(n, 414402));
      return t => (0, i.jsx)(e, {
        analyticsLocation: [null != d ? d : "unknown"],
        ...t
      })
    });
    return
  }
  if (null != c) {
    (0, l.q)({
      shouldConfirm: !0,
      href: c,
      onConfirm: () => {
        (0, u.H)(t, {
          location: d,
          successRedirect: E
        }, c)
      }
    });
    return
  }(0, u.H)(t, {
    location: d,
    successRedirect: E
  })
}