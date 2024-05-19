"use strict";
n.r(t), n.d(t, {
  ItemDetailsModal: function() {
    return g
  }
});
var i = n("735250");
n("470079");
var s = n("752843"),
  l = n("790472"),
  r = n("442837"),
  a = n("481060"),
  o = n("55563"),
  u = n("551428"),
  d = n("73346"),
  c = n("591759"),
  f = n("110742"),
  h = n("680005"),
  S = n("938337"),
  p = n("981631"),
  m = n("689938"),
  v = n("399461");

function g(e) {
  var t, n, g, T;
  let {
    onClose: x,
    transitionState: I,
    skuId: _,
    appId: E
  } = e, N = (0, r.useStateFromStores)([u.default], () => u.default.getForSKU(_), [_]), L = (0, r.useStateFromStores)([o.default], () => o.default.get(_), [_]), j = (0, f.useHasActiveEntitlement)(_);
  if (null == L) return null;
  let C = null !== (n = L.name) && void 0 !== n ? n : "",
    R = null !== (g = null == N ? void 0 : null === (t = N.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== g ? g : void 0,
    b = (null == N ? void 0 : N.headerBackground) != null && null !== (T = c.default.toURLSafe((0, d.getAssetURL)(E, N.headerBackground, 256))) && void 0 !== T ? T : void 0,
    A = L.type === p.SKUTypes.DURABLE && j,
    y = L.type === p.SKUTypes.DURABLE ? A ? m.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : m.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: B
    } = L;
  return null == B ? null : (0, i.jsxs)(a.ModalRoot, {
    transitionState: I,
    size: a.ModalSize.DYNAMIC,
    className: v.subDetailsModal,
    children: [(0, i.jsx)(S.TrackedCardDetails, {
      appId: E,
      skuId: L.id,
      title: C,
      description: R,
      imgSrc: b,
      tag: null != y ? (0, i.jsx)(s.Tag, {
        text: y
      }) : void 0,
      onClose: x,
      FallbackIcon: l.TicketIcon
    }), (0, i.jsxs)(a.ModalFooter, {
      className: v.footer,
      children: [(0, i.jsx)(a.Button, {
        className: v.backButton,
        onClick: x,
        look: a.ButtonLooks.BLANK,
        children: (0, i.jsx)(a.Text, {
          color: "header-primary",
          tag: "p",
          variant: "heading-md/semibold",
          children: m.default.Messages.BACK
        })
      }), (0, i.jsx)(h.ItemPurchaseButton, {
        appId: E,
        sku: L
      })]
    })]
  })
}