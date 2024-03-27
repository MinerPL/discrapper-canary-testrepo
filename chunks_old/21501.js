"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("648825"),
  u = s("757715"),
  c = s("406876"),
  E = s("395905"),
  _ = s("700495"),
  I = s("903152"),
  T = s("851088"),
  S = s("385881"),
  f = s("253414"),
  m = s("782340"),
  N = s("325224"),
  g = s("246102");

function h(e) {
  var t, s;
  let {
    allSubscriptionListings: n,
    priceTiers: h,
    loading: C,
    error: R,
    handlePublishTier: x,
    onDeleteEditState: L
  } = e, {
    editStateId: O
  } = (0, c.useEditStateContext)(), A = (0, r.useStateFromStores)([d.default], () => d.default.getSubscriptionListing(O)), p = (0, u.useRoleSubscriptionSettingsDisabled)(), M = l.useMemo(() => {
    let e = n.filter(e => e.id !== O).map(e => {
      var t;
      return null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
    });
    return null == h ? void 0 : h.filter(t => !e.includes(t))
  }, [n, O, h]), D = null == A, v = null !== (t = null == A ? void 0 : A.published) && void 0 !== t && t, G = null !== (s = null == A ? void 0 : A.archived) && void 0 !== s && s;
  return (0, a.jsxs)("div", {
    className: g.body,
    children: [null != R && (0, a.jsx)(E.default, {
      children: R.getAnyErrorMessage()
    }), !v && !p && !G && (0, a.jsxs)("div", {
      className: g.publishListing,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          className: g.publishListingInfoHeader,
          children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_TITLE
        }), (0, a.jsx)(o.FormText, {
          type: o.FormText.Types.DESCRIPTION,
          children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DRAFT_BANNER_DESCRIPTION
        })]
      }), (0, a.jsx)(o.Tooltip, {
        shouldShow: D,
        tooltipClassName: N.autoWidth,
        text: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_SAVE_BEFORE_PUBLISH_TOOLTIP,
        children: e => (0, a.jsx)(o.Button, {
          ...e,
          disabled: D,
          color: o.Button.Colors.CUSTOM,
          wrapperClassName: N.autoWidth,
          className: i(g.publishButton, N.autoWidth),
          onClick: x,
          submitting: C,
          children: m.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_EDIT_PUBLISH_DRAFT_CTA
        })
      })]
    }), (0, a.jsx)(I.default, {
      priceTiers: M
    }), (0, a.jsx)(T.default, {
      allSubscriptionListings: n
    }), (0, a.jsx)(S.default, {}), (0, a.jsx)(f.default, {}), (0, a.jsx)(_.default, {
      onDeleteEditState: L
    })]
  })
}