"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionBenefits: function() {
    return F
  },
  default: function() {
    return k
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("834897"),
  d = n("38654"),
  c = n("160299"),
  f = n("191814"),
  h = n("476765"),
  m = n("837899"),
  p = n("425190"),
  E = n("68238"),
  g = n("315102"),
  S = n("577357"),
  C = n("837008"),
  _ = n("167109"),
  I = n("176687"),
  T = n("595197"),
  v = n("41391"),
  x = n("549590"),
  N = n("833531"),
  A = n("270295"),
  M = n("246506"),
  R = n("226965"),
  j = n("944256"),
  L = n("97116"),
  y = n("320946"),
  O = n("677795"),
  P = n("49111"),
  D = n("782340"),
  b = n("788036");
let U = e => {
    let {
      benefits: t,
      header: n,
      guildId: s
    } = e, [i, r] = l.useState(!1), o = i ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, m = D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: c
    }), p = (0, h.useUID)();
    return 0 === t.length ? null : (0, a.jsxs)("div", {
      className: b.benefitsSection,
      children: [(0, a.jsx)(u.Heading, {
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
        children: o.map((e, t) => (0, a.jsx)("li", {
          children: (0, a.jsx)(R.default, {
            guildId: s,
            benefit: e
          }, (0, S.getBenefitKey)(e))
        }, t))
      }), d && (0, a.jsx)(V, {
        isViewAll: i,
        onToggle: () => r(e => !e),
        showMoreText: m
      })]
    })
  },
  w = e => {
    let {
      guildId: t,
      listingId: n
    } = e, l = (0, v.default)(t), [s] = _.useTierEmojiIds(n, t), i = l.filter(e => s.has(e.id));
    return 0 === i.length ? null : (0, a.jsxs)("div", {
      className: b.benefitsSection,
      children: [(0, a.jsx)(u.Heading, {
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
          return (0, a.jsx)(u.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var n;
              return (0, a.jsx)("img", {
                ...t,
                className: b.emojiListEmoji,
                src: (n = e, g.default.getEmojiURL({
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
  F = e => {
    let {
      listingId: t,
      guildId: n,
      className: l
    } = e, s = (0, x.default)(n, t), [r] = _.useChannelBenefits(t), o = (0, N.default)(r), [d] = _.useIntangibleBenefits(t), c = _.useRole(t, n), [h] = _.useTierEmojiIds(t, n);
    return null == s && 0 === o.length && 0 === d.length && 0 === h.size ? null : (0, a.jsxs)("div", {
      className: i(b.subscriptionPerks, l),
      children: [null != s && (0, a.jsxs)(u.HeadingLevel, {
        component: (0, a.jsx)(u.Heading, {
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
        benefits: o,
        guildId: n
      }), (0, a.jsx)(U, {
        header: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: d,
        guildId: n
      }), (0, a.jsx)(w, {
        guildId: n,
        listingId: t
      })]
    })
  },
  V = e => {
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
    }), (0, a.jsx)(u.Button, {
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      className: b.toggleTruncationButton,
      innerClassName: b.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  };
var k = e => {
  var t;
  let {
    listingId: n,
    guildId: s,
    groupListingId: h,
    analyticsLocation: m
  } = e, p = (0, C.useSubscriptionListing)(n), {
    openModal: g,
    canOpenModal: v,
    cannotOpenReason: x,
    isCheckingTrialEligibility: N
  } = (0, y.default)(p, s, h, m), M = (0, r.useStateFromStores)([c.default], () => c.default.isSyncing), {
    activeSubscription: R,
    activeSubscriptionListing: U
  } = (0, I.default)(h), w = (null == U ? void 0 : U.id) === n, k = (null == R ? void 0 : R.status) === P.SubscriptionStatusTypes.CANCELED, [H, G] = l.useState(!1), [B, W] = l.useState(!1), Y = l.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t)
  }, []), [z] = _.useName(n), [K] = _.useDescription(n), [Z] = _.useTrialInterval(n), [X] = _.useTrialLimit(n), Q = (0, T.default)(s, n), q = null != Z && null == R && Q, J = (0, o.default)(O.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [$, ee] = l.useState(!1), et = $ || !J, en = (0, r.useStateFromStores)([d.default], () => d.default.isViewingServerShop(s)), ea = (null == p ? void 0 : p.published) === !0, el = (null == p ? void 0 : p.soft_deleted) === !0, es = D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (ea || en) && !el ? (0, a.jsxs)("article", {
    className: b.container,
    "aria-label": z,
    children: [q && (0, a.jsxs)("div", {
      className: i(b.tierTrialIndicator, b.tierTopIndicator),
      children: [D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, S.formatPlanIntervalDuration)({
          interval: Z.interval,
          interval_count: Z.interval_count
        })
      }), (0, a.jsx)(u.Tooltip, {
        clickableOnMobile: !0,
        text: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != X ? X : 0
        }),
        children: e => (0, a.jsx)(E.default, {
          className: b.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, a.jsxs)("div", {
      className: q ? void 0 : b.cardContainerWithoutTopIndicator,
      children: [(0, a.jsxs)("div", {
        className: b.tierInfoContainer,
        children: [J ? (0, a.jsx)(L.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
          listingId: n,
          isListingPublished: ea,
          expanded: et,
          onToggleExpanded: () => ee(e => !e)
        }) : (0, a.jsx)(j.GuildRoleSubscriptionCardBasicInfo, {
          listingId: n,
          isListingPublished: ea
        }), et && (0, a.jsxs)(a.Fragment, {
          children: [J && (0, a.jsx)("div", {
            className: b.divider
          }), w ? (0, a.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.PRIMARY,
            disabled: !0,
            children: k ? D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, a.jsx)(u.Tooltip, {
            text: v ? null : x,
            "aria-label": null !== (t = v && x) && void 0 !== t && t,
            children: e => (0, a.jsx)(A.default, {
              ...e,
              fullWidth: !0,
              disabled: !v || M,
              submitting: N,
              onClick: g,
              onlyShineOnHover: !0,
              children: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, a.jsx)(f.default, {
            size: 16
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: i((!B || !H) && b.tierDescriptionTruncate),
            children: (0, a.jsx)("div", {
              ref: Y,
              children: K
            })
          }), B && (0, a.jsx)(V, {
            isViewAll: H,
            onToggle: () => G(e => !e),
            showMoreText: es
          })]
        })]
      }), et && (0, a.jsx)(u.HeadingLevel, {
        children: (0, a.jsx)(F, {
          listingId: n,
          guildId: s
        })
      })]
    })]
  }) : null
}