"use strict";
t.d(s, {
  Z: function() {
    return x
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(289393),
  d = t(723047),
  u = t(727843),
  E = t(587431),
  _ = t(86126),
  I = t(880193),
  T = t(516448),
  N = t(975331),
  m = t(231610),
  S = t(689938),
  h = t(169769),
  g = t(444859);

function x(e) {
  var s, t;
  let {
    allSubscriptionListings: l,
    priceTiers: x,
    loading: C,
    error: R,
    handlePublishTier: L,
    onDeleteEditState: O
  } = e, {
    editStateId: A
  } = (0, u.N)(), p = (0, r.e7)([c.Z], () => c.Z.getSubscriptionListing(A)), M = (0, d.mY)(), f = i.useMemo(() => {
    let e = l.filter(e => e.id !== A).map(e => {
      var s;
      return null === (s = e.subscription_plans[0]) || void 0 === s ? void 0 : s.price
    });
    return null == x ? void 0 : x.filter(s => !e.includes(s))
  }, [l, A, x]), v = null == p, D = null !== (s = null == p ? void 0 : p.published) && void 0 !== s && s, Z = null !== (t = null == p ? void 0 : p.archived) && void 0 !== t && t;
  return (0, n.jsxs)("div", {
    className: g.body,
    children: [null != R && (0, n.jsx)(E.Z, {
      children: R.getAnyErrorMessage()
    }), !D && !M && !Z && (0, n.jsxs)("div", {
      className: g.publishListing,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: g.publishListingInfoHeader,
          children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_TITLE
        }), (0, n.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_DESCRIPTION
        })]
      }), (0, n.jsx)(o.Tooltip, {
        shouldShow: v,
        tooltipClassName: h.autoWidth,
        text: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SAVE_BEFORE_PUBLISH_TOOLTIP,
        children: e => (0, n.jsx)(o.Button, {
          ...e,
          disabled: v,
          color: o.Button.Colors.CUSTOM,
          wrapperClassName: h.autoWidth,
          className: a()(g.publishButton, h.autoWidth),
          onClick: L,
          submitting: C,
          children: S.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_EDIT_PUBLISH_DRAFT_CTA
        })
      })]
    }), (0, n.jsx)(I.Z, {
      priceTiers: f
    }), (0, n.jsx)(T.Z, {
      allSubscriptionListings: l
    }), (0, n.jsx)(N.Z, {}), (0, n.jsx)(m.Z, {}), (0, n.jsx)(_.Z, {
      onDeleteEditState: O
    })]
  })
}