"use strict";
t.d(s, {
  Z: function() {
    return f
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  l = t(481060),
  r = t(466111),
  o = t(884697),
  c = t(409116),
  u = t(200615),
  d = t(981631),
  C = t(689938),
  E = t(577687);

function f(e) {
  let {
    product: s,
    isPremiumUser: t,
    discount: a,
    className: f,
    nitroUpsell: m = !1
  } = e, p = (0, o.ql)(s, d.tuJ.DEFAULT);
  if (null == p) return null;
  if (p.amount <= 0) return (0, n.jsx)("div", {
    className: i()(E.priceTagsContainer, f),
    children: (0, n.jsx)(c.F, {
      price: p
    })
  });
  let g = (0, o.ql)(s, d.tuJ.PREMIUM_TIER_2),
    h = !t && !(0, o.x6)(s),
    x = (0, o.x6)(s) && t ? {
      ...p,
      amount: a.original
    } : p;
  return (0, n.jsxs)("div", {
    className: i()(E.priceTagsContainer, f),
    children: [(0, n.jsx)(c.F, {
      price: x,
      discount: t ? o.f_ : a,
      className: i()(E.price, {
        [E.striked]: t,
        [E.dimmed]: t,
        [E.fullPrice]: h
      })
    }), null != g && (0, n.jsx)(c.F, {
      price: g,
      discount: t ? a : o.f_,
      renderPrice: m ? e => (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: C.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, n.jsx)(u.F, {
            text: e
          })
        })
      }) : h ? e => C.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: i()(E.price, {
        [E.dimmed]: !t,
        [E.fullPrice]: h
      }),
      variant: t ? void 0 : "text-xs/semibold",
      icon: (0, n.jsx)(l.Tooltip, {
        text: C.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": C.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...s
          } = e;
          return (0, n.jsx)(r.Z, {
            ...s,
            className: i()(E.premiumIcon, {
              [E.fullPrice]: h
            })
          })
        }
      })
    })]
  })
}