"use strict";
s.r(t), s.d(t, {
  openModal: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("866227"),
  i = s.n(l),
  r = s("77078"),
  o = s("850068"),
  d = s("812204"),
  u = s("685665"),
  c = s("476765"),
  S = s("271560"),
  E = s("837008"),
  T = s("108314"),
  f = s("677795"),
  _ = s("782340"),
  m = s("143270");
let g = e => {
    let [t, s] = n.useState(!1), [a, l] = n.useState(null), i = async t => {
      try {
        return s(!0), await o.cancelSubscription(t, e), !0
      } catch (e) {
        l(e)
      } finally {
        s(!1)
      }
    };
    return {
      cancelSubscription: i,
      error: a,
      submitting: t
    }
  },
  h = e => {
    var t;
    let {
      transitionState: s,
      groupListing: n,
      guildId: l,
      listing: o,
      subscription: h,
      onClose: N
    } = e, I = (0, c.useUID)(), p = (0, E.useSubscriptionsSettings)(l), C = (null == p ? void 0 : null === (t = p.cover_image_asset) || void 0 === t ? void 0 : t.application_id) != null ? (0, S.getAssetURL)(p.cover_image_asset.application_id, p.cover_image_asset, 440) : void 0, {
      analyticsLocations: A
    } = (0, u.default)(d.default.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
      cancelSubscription: O,
      error: x,
      submitting: R
    } = g(A), M = async () => {
      let e = await O(h.id);
      e && N()
    }, D = o.role_benefits.benefits.filter(e => e.ref_type === f.GuildRoleSubscriptionBenefitTypes.CHANNEL), v = o.role_benefits.benefits.filter(e => e.ref_type === f.GuildRoleSubscriptionBenefitTypes.INTANGIBLE), L = i(h.currentPeriodEnd).format("MMMM Do, YYYY"), P = _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_DESCRIPTION.format({
      numChannels: D.length,
      numAdditionalBenefits: v.length,
      subscriptionEndDate: L
    });
    return (0, a.jsxs)(r.ModalRoot, {
      transitionState: s,
      className: m.modal,
      "aria-labelledby": I,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)("img", {
          src: C,
          alt: "",
          className: m.headerImage
        }), (0, a.jsx)(r.ModalCloseButton, {
          withCircleBackground: !0,
          className: m.closeButton,
          onClick: N
        })]
      }), null != x ? (0, a.jsx)(r.FormErrorBlock, {
        children: x.message
      }) : null, (0, a.jsxs)(r.ModalContent, {
        className: m.content,
        children: [(0, a.jsx)(r.Heading, {
          id: I,
          variant: "text-md/medium",
          className: m.title,
          children: _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_TITLE
        }), (0, a.jsx)(r.Text, {
          className: m.description,
          variant: "text-sm/normal",
          children: P
        }), (0, a.jsx)(T.GuildRoleSubscriptionBenefits, {
          listingId: o.id,
          guildId: n.guild_id,
          className: m.benefits
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        className: m.footer,
        children: [(0, a.jsx)(r.Button, {
          color: r.Button.Colors.RED,
          onClick: M,
          submitting: R,
          children: _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_CANCEL_CTA
        }), (0, a.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.WHITE,
          className: m.goBackButton,
          onClick: N,
          children: _.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_MODAL_NEVERMIND_CTA
        })]
      })]
    })
  },
  N = e => {
    (0, r.openModal)(t => (0, a.jsx)(h, {
      ...t,
      ...e
    }))
  }