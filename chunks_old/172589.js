"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("627445"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("449918"),
  E = s("191814"),
  _ = s("987772"),
  I = s("956089"),
  T = s("153160"),
  S = s("577357"),
  f = s("837008"),
  m = s("648825"),
  N = s("757715"),
  g = s("406876"),
  h = s("167109"),
  C = s("110498"),
  R = s("21501"),
  x = s("49111"),
  L = s("782340"),
  O = s("325224");

function A(e) {
  var t, s;
  let {
    guildId: n,
    initialEditStateId: r,
    allSubscriptionListings: A,
    priceTiers: p,
    onDeleteEditState: M,
    groupListingId: D,
    onBeforeDispatchNewListing: v,
    onAfterDispatchNewListing: G
  } = e, [j, U] = l.useState(r), P = (0, d.useStateFromStores)([m.default], () => m.default.getSubscriptionListing(j)), b = null == P, [B, y] = l.useState(b), F = null == P ? void 0 : P.subscription_plans[0], H = null !== (t = null == P ? void 0 : P.published) && void 0 !== t && t, k = null !== (s = null == P ? void 0 : P.archived) && void 0 !== s && s, w = (0, N.useRoleSubscriptionSettingsDisabled)(), [V] = h.useName(j), [Y] = h.usePriceTier(j), [W] = h.useDescription(j), [z] = h.useImage(j, 1024), K = "" !== V ? V : L.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INITIAL_TIER_NAME, Z = "" !== V && null != z && "" !== W && null != Y && !w, X = h.useHasChanges(j), {
    loading: Q,
    error: J,
    handleCreateOrUpdateFromEditState: q
  } = h.useCreateOrUpdateListingFromEditState(), {
    submitting: $,
    error: ee,
    publishSubscriptionListing: et
  } = (0, f.usePublishSubscriptionListing)(), es = Q || $;
  return (0, a.jsxs)("div", {
    className: O.container,
    children: [(0, a.jsxs)("div", {
      className: i(O.header, {
        [O.headerExpanded]: B
      }),
      children: [(0, a.jsx)("div", {
        className: O.headerImageContainer,
        children: null == z ? (0, a.jsx)(C.default, {
          className: O.starIcon,
          "aria-hidden": !0
        }) : (0, a.jsx)("img", {
          className: O.headerImage,
          src: z,
          alt: K
        })
      }), (0, a.jsxs)("div", {
        className: O.headerListingInfo,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "interactive-active",
          children: K
        }), (0, a.jsx)(E.default, {
          size: 2
        }), (0, a.jsxs)("div", {
          className: O.headerDescriptionContainer,
          children: [!k && !H && void 0 !== P && (0, a.jsx)(I.TextBadge, {
            color: (0, c.getColor)(x.Color.YELLOW_300),
            text: L.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_DRAFT_LABEL,
            className: O.draftBadge
          }), k && (0, a.jsx)(I.TextBadge, {
            color: (0, c.getColor)(x.Color.PRIMARY_500),
            text: L.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
            className: O.archivedBadge
          }), void 0 === P && (0, a.jsx)(I.TextBadge, {
            color: (0, c.getColor)(x.Color.PRIMARY_500),
            text: L.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_UNSAVED_LABEL,
            className: O.unsavedBadge
          }), null != F && (0, a.jsxs)(u.Text, {
            color: "interactive-normal",
            variant: "text-sm/normal",
            children: [(0, T.formatPrice)(F.price, F.currency), "/", (0, S.formatPlanInterval)(F)]
          })]
        })]
      }), B ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Button, {
          look: u.Button.Looks.BLANK,
          className: O.cancel,
          onClick: () => {
            h.clearEditState(j), b ? null == M || M() : y(!1)
          },
          children: L.default.Messages.CANCEL
        }), (0, a.jsx)(u.Button, {
          onClick: () => q({
            guildId: n,
            editStateId: j,
            groupListingId: D,
            onBeforeDispatchNewListing: v,
            onAfterDispatchNewListing: e => {
              U(e.id), null == G || G(e)
            }
          }),
          disabled: !Z || !X,
          className: O.autoWidth,
          submitting: es,
          children: L.default.Messages.SAVE
        })]
      }) : (0, a.jsx)(u.Clickable, {
        onClick: () => y(!0),
        "aria-label": L.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_EDIT_LABEL,
        children: (0, a.jsx)(_.default, {
          className: O.pencilIcon
        })
      })]
    }), B && (0, a.jsx)(g.EditStateContextProvider, {
      editStateId: j,
      guildId: n,
      groupListingId: D,
      children: (0, a.jsx)(R.default, {
        allSubscriptionListings: A,
        priceTiers: p,
        loading: es,
        error: null != J ? J : ee,
        handlePublishTier: () => {
          o(null != D, "group listing doesnt exist"), o(null != P, "subscription listing doesnt exist"), et({
            guildId: n,
            groupListingId: D,
            listingId: P.id
          })
        },
        onDeleteEditState: M
      })
    })]
  })
}