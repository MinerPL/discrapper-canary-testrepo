"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("399606"),
  l = n("155321"),
  i = n("481060"),
  r = n("594174"),
  o = n("386103"),
  u = n("794358"),
  d = n("785681"),
  c = n("780985"),
  f = n("631885"),
  E = n("552045"),
  h = n("87792"),
  _ = n("302289"),
  C = n("946690"),
  m = n("456771"),
  S = n("292352"),
  I = n("689938"),
  p = n("166267");
t.default = () => {
  let e = (0, f.useUserForLinkStatus)(S.UserLinkStatus.ACTIVE),
    t = (0, c.useSelectedTeenUser)(),
    n = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    T = (0, d.useAgeSpecificText)(I.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, I.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
    g = (0, d.useAgeSpecificText)(I.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, I.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
    A = (0, d.useAgeSpecificText)(I.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, I.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
    N = (0, i.useRedesignIconContext)().enabled;
  return void 0 === n ? null : (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsx)("div", {
      className: p.banner,
      children: (0, a.jsx)(E.default, {})
    }), (0, a.jsxs)("div", {
      className: p.featureCards,
      children: [(0, a.jsx)(C.default, {
        iconClassName: p.chatCheckIcon,
        icon: o.default,
        header: I.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
        description: T
      }), (0, a.jsx)(C.default, {
        icon: u.default,
        header: I.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
        description: g
      }), (0, a.jsx)(C.default, {
        icon: N ? l.QrCodeCameraIcon : m.default,
        header: I.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
        description: A
      })]
    }), 0 === e.length ? (0, a.jsx)(_.default, {}) : null, void 0 !== t && e.length > 0 ? (0, a.jsx)(h.default, {
      user: t
    }) : null]
  })
}