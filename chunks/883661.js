"use strict";
var i = n(735250),
  r = n(470079),
  s = n(932125),
  o = n(489785),
  a = n(902781),
  l = n(497309),
  u = n(478803),
  _ = n(407626),
  d = n(869555),
  c = n(219541),
  E = n(593552),
  I = n(466111),
  T = n(898140),
  h = n(339487),
  S = n(149203);
let f = e => {
    switch (e) {
      case S.UX.RECENT:
        return l.Z;
      case S.UX.FAVORITES:
        return T.Z;
      case S.UX.TOP_GUILD_EMOJI:
        return h.Z;
      case S.UX.PEOPLE:
        return d.Z;
      case S.UX.NATURE:
        return u.Z;
      case S.UX.FOOD:
        return a.Z;
      case S.UX.ACTIVITY:
        return s.Z;
      case S.UX.TRAVEL:
        return E.Z;
      case S.UX.OBJECTS:
        return _.Z;
      case S.UX.SYMBOLS:
        return c.Z;
      case S.UX.FLAGS:
        return o.Z;
      case S.UX.PREMIUM_UPSELL:
        return I.Z;
      default:
        return
    }
  },
  N = r.memo(function(e) {
    let {
      categoryId: t,
      ...n
    } = e, r = f(t);
    return null == r ? null : (0, i.jsx)(r, {
      ...n
    })
  });
t.Z = N