"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("917351"),
  o = s("65597"),
  d = s("266491"),
  u = s("77078"),
  c = s("45299"),
  E = s("900938"),
  _ = s("965397"),
  I = s("191814"),
  T = s("351825"),
  S = s("858560"),
  f = s("808388"),
  m = s("837008"),
  N = s("719726"),
  g = s("757715"),
  h = s("167109"),
  C = s("172589"),
  R = s("49111"),
  x = s("782340"),
  L = s("549360");
let O = "guild-role-subscription-tier-template-selector",
  A = e => {
    let [t, s] = l.useState(!0), [a, n] = l.useState();
    return l.useEffect(() => {
      s(!0), (0, N.getPriceTiers)(e).then(e => {
        n(e), s(!1)
      })
    }, [e]), {
      loading: t,
      priceTiers: a
    }
  };

function p(e) {
  let {
    guildId: t,
    priceTiers: n,
    groupListingId: I
  } = e, N = (0, m.useSubscriptionListingsForGroup)(I), {
    editStateIds: A,
    addNewEditStateId: p,
    addNewEditStateFromTemplate: M,
    removeEditStateId: D
  } = h.useEditStateIds(I, t, {
    includeSoftDeleted: !0
  }), [v, G] = l.useState({}), j = l.useMemo(() => {
    let e = A.map(e => {
      var t;
      return null !== (t = v[e]) && void 0 !== t ? t : e
    });
    return (0, r.uniq)(e)
  }, [A, v]), U = (e, t) => {
    G(s => ({
      ...s,
      [e]: t
    }))
  }, P = (0, f.useGuildEligibleForTierTemplates)(t), b = (0, f.useUserEligibleForTierTemplates)(), B = l.useCallback(() => {
    b && S.GuildRoleSubscriptionsTierTemplatesExperiment.trackExposure({
      guildId: t,
      location: "b2d9de_1"
    }), b && P ? (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("183424").then(s.bind(s, "183424"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        addNewEditStateFromTemplate: M,
        addNewEditStateFromScratch: p,
        priceTiers: n
      })
    }, {
      modalKey: O
    }) : p()
  }, [t, M, p, n, b, P]), y = h.useHasChangesForEditStateIds(j), F = l.useCallback(() => j.forEach(h.clearEditState), [j]), H = (0, g.useRoleSubscriptionSettingsDisabled)(), k = (0, o.useStateFromStores)([E.default], () => E.default.getProps().subsection);
  return l.useEffect(() => (k === R.GuildSettingsSubsections.ROLE_SUBSCRIPTION_TIER_TEMPLATE && B(), () => {
    (0, u.closeModal)(O)
  }), [k, B]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: L.groupListings,
      children: [j.map(e => (0, a.jsx)(C.default, {
        guildId: t,
        initialEditStateId: e,
        allSubscriptionListings: N,
        priceTiers: n,
        groupListingId: I,
        onDeleteEditState: () => D(e),
        onBeforeDispatchNewListing: t => U(t.id, e),
        onAfterDispatchNewListing: () => D(e)
      }, e)), (0, a.jsxs)(u.Clickable, {
        onClick: H ? void 0 : B,
        className: i(L.createTierButton, {
          [L.disabled]: H
        }),
        "aria-disabled": H,
        children: [(0, a.jsx)(T.default, {
          className: L.createTierIcon
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "interactive-active",
          children: x.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_CARD_CREATE
        })]
      })]
    }), (0, a.jsx)(d.TransitionGroup, {
      component: "div",
      className: L.contentRegion,
      children: y && (0, a.jsx)(_.default, {
        children: (0, a.jsx)(c.default, {
          onReset: F
        })
      })
    })]
  })
}

function M(e) {
  let {
    guildId: t
  } = e, {
    priceTiers: s
  } = A(t), l = (0, m.useGroupListingsForGuild)(t), {
    maxTiers: n
  } = (0, f.useRoleSubscriptionMaxTiersExperiment)(t), i = l.map(e => e.id);
  return (0, a.jsxs)(u.FormSection, {
    title: x.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_TITLE,
    className: L.container,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      children: x.default.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_DESCRIPTION.format({
        maxTiers: n
      })
    }), (0, a.jsx)(I.default, {
      size: 16
    }), (0, a.jsx)(p, {
      priceTiers: s,
      guildId: t,
      groupListingId: i[0]
    })]
  })
}