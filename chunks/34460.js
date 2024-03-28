"use strict";
a.r(t), a.d(t, {
  default: function() {
    return U
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  n = a("803997"),
  i = a.n(n),
  r = a("990547"),
  c = a("399606"),
  o = a("780384"),
  d = a("481060"),
  u = a("935369"),
  T = a("367907"),
  m = a("213609"),
  _ = a("44315"),
  E = a("210887"),
  x = a("441674"),
  h = a("465670"),
  I = a("185403"),
  C = a("626135"),
  L = a("923726"),
  N = a("570849"),
  R = a("853439"),
  f = a("303737"),
  g = a("587431"),
  S = a("862239"),
  p = a("847004"),
  j = a("981631"),
  O = a("689938"),
  M = a("783466");

function v(e) {
  let {
    name: t,
    imageUrl: a,
    selected: l,
    onTap: n
  } = e;
  return (0, s.jsxs)(d.Clickable, {
    onClick: n,
    className: M.templateCard,
    children: [(0, s.jsx)("img", {
      src: a,
      alt: "",
      className: M.templateCardImage
    }), (0, s.jsxs)("div", {
      className: M.templateNameRow,
      children: [(0, s.jsx)(d.Heading, {
        variant: "heading-md/normal",
        className: i()({
          [M.unselectedTemplateName]: !l
        }),
        children: t
      }), l && (0, s.jsx)(x.default, {
        backgroundColor: (0, _.getColor)(j.Color.WHITE_500),
        color: (0, _.getColor)(j.Color.BRAND_500)
      })]
    })]
  })
}

function A(e) {
  let {
    loading: t,
    error: a,
    templates: l,
    selectedTemplateIndex: n,
    handleTapTemplate: i
  } = e, r = (0, c.useStateFromStores)([E.default], () => E.default.theme);
  return t ? (0, s.jsx)(d.Spinner, {}) : null != a ? (0, s.jsx)(g.default, {
    children: a.message
  }) : null == l || 0 === l.length ? null : (0, s.jsx)("div", {
    className: M.templateCardList,
    children: l.map((e, t) => (0, s.jsx)(v, {
      imageUrl: t === n ? e.category_image : (0, o.isThemeLight)(r) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
      name: e.category,
      selected: t === n,
      onTap: () => i(t)
    }, t))
  })
}

function P(e) {
  var t, a;
  let {
    guildId: n,
    templates: i,
    selectedTemplateIndex: r,
    priceTiers: c,
    showPriceReselection: o,
    setShowPriceReselection: d,
    handleCreateTierFromTemplate: u
  } = e, T = (0, f.useSuggestedUnusedPrices)(n, c, null != i ? null === (a = i[r]) || void 0 === a ? void 0 : null === (t = a.listings[0]) || void 0 === t ? void 0 : t.price_tier : void 0), m = null != T && T.length > 0, _ = l.useCallback(e => {
    m ? d(!0) : u(e)
  }, [u, m, d]);
  return null == i || 0 === i.length ? null : o && m ? (0, s.jsx)(p.default, {
    selectedTemplate: i[r],
    handleSelectTemplate: u,
    newPricesToPick: T
  }) : (0, s.jsx)(S.default, {
    selectedTemplate: i[r],
    handleSelectTemplate: _
  })
}

function U(e) {
  let {
    transitionState: t,
    onClose: a,
    guildId: n,
    addNewEditStateFromTemplate: i,
    addNewEditStateFromScratch: o,
    priceTiers: _
  } = e, E = (0, c.useStateFromStores)([R.default], () => R.default.getTemplates(n)), [x, {
    loading: f,
    error: g
  }] = (0, u.default)(N.getTemplates), S = l.useRef("voluntarily_exit");
  l.useEffect(() => {
    (null == E || 0 === E.length) && x(n)
  }, [x, n, E]), l.useEffect(() => {
    t === d.ModalTransitionState.EXITING && C.default.track(j.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
      exit_reason: S.current,
      ...(0, T.collectGuildAnalyticsMetadata)(n)
    })
  }, [t, n, S]);
  let [p, v] = l.useState(0), [U, D] = l.useState(!1), B = l.useCallback(e => {
    S.current = "template_selected", (0, N.stashTemplateChannels)(e, n), i(e), a()
  }, [n, i, a]), y = l.useCallback(() => {
    U ? D(!1) : a()
  }, [U, a]), k = (0, L.useShowCreatorPortalLinkForTierTemplates)(n);
  return (0, m.default)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
    properties: {
      guild_id: n
    }
  }), (0, s.jsxs)(d.ModalRoot, {
    transitionState: t,
    size: d.ModalSize.DYNAMIC,
    className: M.modalRoot,
    children: [(0, s.jsx)(d.Clickable, {
      onClick: y,
      className: M.closeButton,
      children: (0, s.jsx)(h.default, {
        width: 12,
        height: 12
      })
    }), (0, s.jsxs)(d.ModalContent, {
      className: M.modalContent,
      children: [(0, s.jsxs)("div", {
        className: M.templatesContainer,
        children: [U && (0, s.jsx)(d.Clickable, {
          className: M.blackoutOverlay,
          onClick: () => {
            U && D(!1)
          },
          "aria-label": "overlay"
        }), (0, s.jsxs)(d.ScrollerThin, {
          className: M.templatesContainerBody,
          children: [(0, s.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            children: O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_HEADER
          }), (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: M.modalBodyText,
            children: O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_BODY
          }), k && (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: M.creatorPortalText,
            children: O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATOR_PORTAL_LINK.format({
              creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons"
            })
          }), (0, s.jsx)("div", {
            className: M.templatesContentContainer,
            children: (0, s.jsx)(A, {
              loading: f,
              error: g,
              templates: E,
              selectedTemplateIndex: p,
              handleTapTemplate: e => {
                v(e)
              }
            })
          })]
        }), (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_PROMPT
        }), (0, s.jsxs)(d.Button, {
          size: d.Button.Sizes.MEDIUM,
          onClick: () => {
            S.current = "create_from_scratch", o(), a()
          },
          look: d.Button.Looks.OUTLINED,
          color: d.Button.Colors.PRIMARY,
          borderColor: d.Button.BorderColors.PRIMARY,
          className: M.createFromStratchButton,
          innerClassName: M.createFromStratchButtonInner,
          children: [(0, s.jsx)(I.default, {
            width: 14,
            height: 14,
            className: M.editIcon
          }), O.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_BUTTON]
        })]
      }), (0, s.jsx)(P, {
        guildId: n,
        templates: E,
        selectedTemplateIndex: p,
        priceTiers: _,
        showPriceReselection: U,
        setShowPriceReselection: D,
        handleCreateTierFromTemplate: B
      })]
    })]
  })
}