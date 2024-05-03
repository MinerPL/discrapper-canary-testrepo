"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("108930"),
  a = n("86406"),
  s = n("146068"),
  o = n("308545"),
  l = n("397697"),
  u = n("129871"),
  d = n("206851"),
  _ = n("246933"),
  c = n("995414"),
  E = n("308083");

function I(e) {
  let {
    banner: t,
    ...n
  } = e;
  switch (t) {
    case E.ClanBannerKind.NIGHT_SKY:
      return (0, i.jsx)(l.default, {
        ...n
      });
    case E.ClanBannerKind.CASTLE:
      return (0, i.jsx)(r.default, {
        ...n
      });
    case E.ClanBannerKind.WORLD_MAP:
      return (0, i.jsx)(c.default, {
        ...n
      });
    case E.ClanBannerKind.SEA_FOAM:
      return (0, i.jsx)(u.default, {
        ...n
      });
    case E.ClanBannerKind.WARP_TUNNEL:
      return (0, i.jsx)(_.default, {
        ...n
      });
    case E.ClanBannerKind.HOUSE:
      return (0, i.jsx)(s.default, {
        ...n
      });
    case E.ClanBannerKind.HEIGHTMAP:
      return (0, i.jsx)(a.default, {
        ...n
      });
    case E.ClanBannerKind.MESH:
      return (0, i.jsx)(o.default, {
        ...n
      });
    case E.ClanBannerKind.SPATTER:
      return (0, i.jsx)(d.default, {
        ...n
      })
  }
  return null
}