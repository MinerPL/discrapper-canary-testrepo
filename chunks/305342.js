"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionBenefits: function() {
    return w
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("131388"),
  d = n("160404"),
  c = n("351402"),
  f = n("682864"),
  h = n("153124"),
  m = n("86813"),
  p = n("826026"),
  E = n("41542"),
  C = n("768581"),
  g = n("817460"),
  S = n("584825"),
  _ = n("290348"),
  T = n("934826"),
  I = n("768318"),
  A = n("570533"),
  N = n("971792"),
  v = n("629262"),
  x = n("761966"),
  M = n("893729"),
  R = n("838940"),
  L = n("882101"),
  y = n("11705"),
  O = n("81273"),
  j = n("293810"),
  P = n("981631"),
  D = n("689938"),
  b = n("87063");
let U = e => {
    let {
      benefits: t,
      header: n,
      guildId: s
    } = e, [i, r] = l.useState(!1), u = i ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, m = D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: c
    }), p = (0, h.useUID)();
    return 0 === t.length ? null : (0, a.jsxs)("div", {
      className: b.benefitsSection,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: b.sectionHeader,
        id: p,
        children: n
      }), (0, a.jsx)(f.default, {
        size: 12
      }), (0, a.jsx)("ul", {
        className: b.benefitsList,
        "aria-labelledby": p,
        children: u.map((e, t) => (0, a.jsx)("li", {
          children: (0, a.jsx)(R.default, {
            guildId: s,
            benefit: e
          }, (0, g.getBenefitKey)(e))
        }, t))
      }), d && (0, a.jsx)(k, {
        isViewAll: i,
        onToggle: () => r(e => !e),
        showMoreText: m
      })]
    })
  },
  F = e => {
    let {
      guildId: t,
      listingId: n
    } = e, l = (0, A.default)(t), [s] = _.useTierEmojiIds(n, t), i = l.filter(e => s.has(e.id));
    return 0 === i.length ? null : (0, a.jsxs)("div", {
      className: b.benefitsSection,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: b.sectionHeader,
        children: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: i.length
        })
      }), (0, a.jsx)(f.default, {
        size: 12
      }), (0, a.jsx)("div", {
        className: b.emojiList,
        children: i.map((e, t) => {
          var n;
          return (0, a.jsx)(o.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var n;
              return (0, a.jsx)("img", {
                ...t,
                className: b.emojiListEmoji,
                src: (n = e, C.default.getEmojiURL({
                  id: n.id,
                  animated: n.animated,
                  size: 24
                })),
                width: 24,
                height: 24,
                alt: e.name
              })
            }
          }, null !== (n = e.id) && void 0 !== n ? n : t)
        })
      })]
    })
  },
  w = e => {
    let {
      listingId: t,
      guildId: n,
      className: l
    } = e, s = (0, N.default)(n, t), [r] = _.useChannelBenefits(t), u = (0, v.default)(r), [d] = _.useIntangibleBenefits(t), c = _.useRole(t, n), [h] = _.useTierEmojiIds(t, n);
    return null == s && 0 === u.length && 0 === d.length && 0 === h.size ? null : (0, a.jsxs)("div", {
      className: i()(b.subscriptionPerks, l),
      children: [null != s && (0, a.jsxs)(o.HeadingLevel, {
        component: (0, a.jsx)(o.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: b.sectionHeader,
          children: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, a.jsx)(f.default, {
          size: 8
        }), (0, a.jsx)(M.default, {
          role: c,
          guildId: n,
          className: b.roleMessagePreview
        })]
      }), (0, a.jsx)(U, {
        header: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: u,
        guildId: n
      }), (0, a.jsx)(U, {
        header: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: d,
        guildId: n
      }), (0, a.jsx)(F, {
        guildId: n,
        listingId: t
      })]
    })
  },
  k = e => {
    let t, {
      onToggle: n,
      isViewAll: l,
      showMoreText: s
    } = e;
    return t = l ? (0, a.jsxs)(a.Fragment, {
      children: [D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, a.jsx)(p.default, {
        className: b.toggleTruncationButtonIcon
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [s, (0, a.jsx)(m.default, {
        className: b.toggleTruncationButtonIcon
      })]
    }), (0, a.jsx)(o.Button, {
      look: o.Button.Looks.BLANK,
      size: o.Button.Sizes.NONE,
      className: b.toggleTruncationButton,
      innerClassName: b.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  };
t.default = e => {
  var t;
  let {
    listingId: n,
    guildId: s,
    groupListingId: h,
    analyticsLocation: m
  } = e, p = (0, S.useSubscriptionListing)(n), {
    openModal: C,
    canOpenModal: A,
    cannotOpenReason: N,
    isCheckingTrialEligibility: v
  } = (0, O.default)(p, s, h, m), M = (0, r.useStateFromStores)([c.default], () => c.default.isSyncing), {
    activeSubscription: R,
    activeSubscriptionListing: U
  } = (0, T.default)(h), F = (null == U ? void 0 : U.id) === n, H = (null == R ? void 0 : R.status) === P.SubscriptionStatusTypes.CANCELED, [B, G] = l.useState(!1), [V, W] = l.useState(!1), Y = l.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t)
  }, []), [z] = _.useName(n), [K] = _.useDescription(n), [Z] = _.useTrialInterval(n), [q] = _.useTrialLimit(n), X = (0, I.default)(s, n), Q = null != Z && null == R && X, J = (0, u.default)(j.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [$, ee] = l.useState(!1), et = $ || !J, en = (0, r.useStateFromStores)([d.default], () => d.default.isViewingServerShop(s)), ea = (null == p ? void 0 : p.published) === !0, el = (null == p ? void 0 : p.soft_deleted) === !0, es = D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (ea || en) && !el ? (0, a.jsxs)("article", {
    className: b.container,
    "aria-label": z,
    children: [Q && (0, a.jsxs)("div", {
      className: i()(b.tierTrialIndicator, b.tierTopIndicator),
      children: [D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, g.formatPlanIntervalDuration)({
          interval: Z.interval,
          interval_count: Z.interval_count
        })
      }), (0, a.jsx)(o.Tooltip, {
        clickableOnMobile: !0,
        text: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != q ? q : 0
        }),
        children: e => (0, a.jsx)(E.default, {
          className: b.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, a.jsxs)("div", {
      className: Q ? void 0 : b.cardContainerWithoutTopIndicator,
      children: [(0, a.jsxs)("div", {
        className: b.tierInfoContainer,
        children: [J ? (0, a.jsx)(y.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
          listingId: n,
          isListingPublished: ea,
          expanded: et,
          onToggleExpanded: () => ee(e => !e)
        }) : (0, a.jsx)(L.GuildRoleSubscriptionCardBasicInfo, {
          listingId: n,
          isListingPublished: ea
        }), et && (0, a.jsxs)(a.Fragment, {
          children: [J && (0, a.jsx)("div", {
            className: b.divider
          }), F ? (0, a.jsx)(o.Button, {
            fullWidth: !0,
            look: o.Button.Looks.OUTLINED,
            color: o.Button.Colors.PRIMARY,
            disabled: !0,
            children: H ? D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, a.jsx)(o.Tooltip, {
            text: A ? null : N,
            "aria-label": null !== (t = A && N) && void 0 !== t && t,
            children: e => (0, a.jsx)(x.default, {
              ...e,
              fullWidth: !0,
              disabled: !A || M,
              submitting: v,
              onClick: C,
              onlyShineOnHover: !0,
              children: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, a.jsx)(f.default, {
            size: 16
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: i()((!V || !B) && b.tierDescriptionTruncate),
            children: (0, a.jsx)("div", {
              ref: Y,
              children: K
            })
          }), V && (0, a.jsx)(k, {
            isViewAll: B,
            onToggle: () => G(e => !e),
            showMoreText: es
          })]
        })]
      }), et && (0, a.jsx)(o.HeadingLevel, {
        children: (0, a.jsx)(w, {
          listingId: n,
          guildId: s
        })
      })]
    })]
  }) : null
}