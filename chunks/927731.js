"use strict";
t.d(s, {
  Z: function() {
    return p
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t(399606),
  c = t(215569),
  d = t(481060),
  u = t(852860),
  E = t(999382),
  _ = t(151785),
  I = t(644542),
  T = t(923726),
  N = t(584825),
  m = t(295141),
  S = t(723047),
  h = t(290348),
  g = t(450215),
  x = t(981631),
  C = t(689938),
  R = t(321809);
let L = "guild-role-subscription-tier-template-selector",
  O = e => {
    let [s, t] = i.useState(!0), [n, l] = i.useState();
    return i.useEffect(() => {
      t(!0), (0, m.X)(e).then(e => {
        l(e), t(!1)
      })
    }, [e]), {
      loading: s,
      priceTiers: n
    }
  };

function A(e) {
  let {
    guildId: s,
    priceTiers: l,
    groupListingId: m
  } = e, O = (0, N._k)(m), {
    editStateIds: A,
    addNewEditStateId: p,
    addNewEditStateFromTemplate: M,
    removeEditStateId: f
  } = h.B7(m, s, {
    includeSoftDeleted: !0
  }), [v, D] = i.useState({}), Z = i.useMemo(() => {
    let e = A.map(e => {
      var s;
      return null !== (s = v[e]) && void 0 !== s ? s : e
    });
    return (0, r.uniq)(e)
  }, [A, v]), j = (e, s) => {
    D(t => ({
      ...t,
      [e]: s
    }))
  }, U = (0, T.ss)(s), G = (0, T.Gp)(), P = i.useCallback(() => {
    G && I.jJ.trackExposure({
      guildId: s,
      location: "b2d9de_1"
    }), G && U ? (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("9558")]).then(t.bind(t, 34460));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        addNewEditStateFromTemplate: M,
        addNewEditStateFromScratch: p,
        priceTiers: l
      })
    }, {
      modalKey: L
    }) : p()
  }, [s, M, p, l, G, U]), b = h.Lo(Z), B = i.useCallback(() => Z.forEach(h.GM), [Z]), y = (0, S.mY)(), F = (0, o.e7)([E.Z], () => E.Z.getProps().subsection);
  return i.useEffect(() => (F === x.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && P(), () => {
    (0, d.closeModal)(L)
  }), [F, P]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: R.groupListings,
      children: [Z.map(e => (0, n.jsx)(g.Z, {
        guildId: s,
        initialEditStateId: e,
        allSubscriptionListings: O,
        priceTiers: l,
        groupListingId: m,
        onDeleteEditState: () => f(e),
        onBeforeDispatchNewListing: s => j(s.id, e),
        onAfterDispatchNewListing: () => f(e)
      }, e)), (0, n.jsxs)(d.Clickable, {
        onClick: y ? void 0 : P,
        className: a()(R.createTierButton, {
          [R.disabled]: y
        }),
        "aria-disabled": y,
        children: [(0, n.jsx)(_.Z, {
          className: R.createTierIcon
        }), (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "interactive-active",
          children: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_CARD_CREATE
        })]
      })]
    }), (0, n.jsx)(c.W, {
      component: "div",
      className: R.contentRegion,
      children: b && (0, n.jsx)(d.SlideIn, {
        children: (0, n.jsx)(u.Z, {
          onReset: B
        })
      })
    })]
  })
}

function p(e) {
  let {
    guildId: s
  } = e, {
    priceTiers: t
  } = O(s), i = (0, N.GG)(s), {
    maxTiers: l
  } = (0, T.s1)(s), a = i.map(e => e.id);
  return (0, n.jsxs)(d.FormSection, {
    title: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_TITLE,
    className: R.container,
    children: [(0, n.jsx)(d.FormText, {
      type: d.FormText.Types.DESCRIPTION,
      children: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_DESCRIPTION.format({
        maxTiers: l
      })
    }), (0, n.jsx)(d.Spacer, {
      size: 16
    }), (0, n.jsx)(A, {
      priceTiers: t,
      guildId: s,
      groupListingId: a[0]
    })]
  })
}