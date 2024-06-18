"use strict";
t.d(s, {
  Z: function() {
    return O
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(44315),
  E = t(185403),
  _ = t(937615),
  I = t(817460),
  T = t(584825),
  N = t(289393),
  m = t(723047),
  S = t(727843),
  h = t(290348),
  g = t(857081),
  x = t(869269),
  C = t(981631),
  R = t(689938),
  L = t(169769);

function O(e) {
  var s, t;
  let {
    guildId: l,
    initialEditStateId: r,
    allSubscriptionListings: O,
    priceTiers: A,
    onDeleteEditState: p,
    groupListingId: M,
    onBeforeDispatchNewListing: f,
    onAfterDispatchNewListing: v
  } = e, [D, Z] = i.useState(r), j = (0, c.e7)([N.Z], () => N.Z.getSubscriptionListing(D)), U = null == j, [G, P] = i.useState(U), b = null == j ? void 0 : j.subscription_plans[0], B = null !== (s = null == j ? void 0 : j.published) && void 0 !== s && s, y = null !== (t = null == j ? void 0 : j.archived) && void 0 !== t && t, F = !y && !B && void 0 !== j, w = void 0 === j, k = (0, m.mY)(), [H] = h._T(D), [V] = h.mR(D), [Y] = h.PK(D), [W] = h.d9(D, 1024), K = "" !== H ? H : R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INITIAL_TIER_NAME, z = "" !== H && null != W && "" !== Y && null != V && !k, q = h.rU(D), {
    loading: X,
    error: Q,
    handleCreateOrUpdateFromEditState: J
  } = h.Xo(), {
    submitting: $,
    error: ee,
    publishSubscriptionListing: es
  } = (0, T.HQ)(), et = X || $;
  return (0, n.jsxs)("div", {
    className: L.container,
    children: [(0, n.jsxs)("div", {
      className: a()(L.header, {
        [L.headerExpanded]: G
      }),
      children: [(0, n.jsx)("div", {
        className: L.headerImageContainer,
        children: null == W ? (0, n.jsx)(g.Z, {
          className: L.starIcon,
          "aria-hidden": !0
        }) : (0, n.jsx)("img", {
          className: L.headerImage,
          src: W,
          alt: K
        })
      }), (0, n.jsxs)("div", {
        className: L.headerListingInfo,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: K
        }), (0, n.jsx)(d.Spacer, {
          size: 2
        }), (0, n.jsxs)("div", {
          className: L.headerDescriptionContainer,
          children: [F && (0, n.jsx)(d.TextBadge, {
            color: (0, u.Lq)(C.Ilk.YELLOW_300),
            text: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_DRAFT_LABEL,
            className: L.draftBadge
          }), y && (0, n.jsx)(d.TextBadge, {
            color: (0, u.Lq)(C.Ilk.PRIMARY_500),
            text: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
            className: L.archivedBadge
          }), w && (0, n.jsx)(d.TextBadge, {
            color: (0, u.Lq)(C.Ilk.PRIMARY_500),
            text: R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_UNSAVED_LABEL,
            className: L.unsavedBadge
          }), null != b && (0, n.jsxs)(d.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, _.T4)(b.price, b.currency), "/", (0, I.JE)(b)]
          })]
        })]
      }), G ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.Button, {
          look: d.Button.Looks.BLANK,
          className: L.cancel,
          onClick: () => {
            h.GM(D), U ? null == p || p() : P(!1)
          },
          children: R.Z.Messages.CANCEL
        }), (0, n.jsx)(d.Button, {
          onClick: () => J({
            guildId: l,
            editStateId: D,
            groupListingId: M,
            onBeforeDispatchNewListing: f,
            onAfterDispatchNewListing: e => {
              Z(e.id), null == v || v(e)
            }
          }),
          disabled: !z || !q,
          className: L.autoWidth,
          submitting: et,
          children: R.Z.Messages.SAVE
        })]
      }) : (0, n.jsx)(d.Clickable, {
        onClick: () => P(!0),
        "aria-label": R.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_EDIT_LABEL,
        children: (0, n.jsx)(E.Z, {
          className: L.pencilIcon
        })
      })]
    }), G && (0, n.jsx)(S.I, {
      editStateId: D,
      guildId: l,
      groupListingId: M,
      children: (0, n.jsx)(x.Z, {
        allSubscriptionListings: O,
        priceTiers: A,
        loading: et,
        error: null != Q ? Q : ee,
        handlePublishTier: () => {
          o()(null != M, "group listing doesnt exist"), o()(null != j, "subscription listing doesnt exist"), es({
            guildId: l,
            groupListingId: M,
            listingId: j.id
          })
        },
        onDeleteEditState: p
      })
    })]
  })
}