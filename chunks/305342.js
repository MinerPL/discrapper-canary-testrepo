n.d(t, {
  c: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(131388),
  u = n(160404),
  d = n(351402),
  _ = n(153124),
  E = n(768581),
  I = n(817460),
  m = n(584825),
  T = n(290348),
  h = n(934826),
  N = n(768318),
  C = n(570533),
  f = n(971792),
  p = n(629262),
  g = n(761966),
  S = n(893729),
  A = n(838940),
  R = n(882101),
  O = n(11705),
  x = n(81273),
  M = n(293810),
  v = n(981631),
  L = n(689938),
  Z = n(860243);
let P = e => {
let {
  benefits: t,
  header: n,
  guildId: a
} = e, [r, l] = s.useState(!1), c = r ? t : t.slice(0, 5), u = t.length > 5, d = t.length - 5, E = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
  numTruncated: d
}), m = (0, _.Dt)();
return 0 === t.length ? null : (0, i.jsxs)('div', {
  className: Z.benefitsSection,
  children: [
    (0, i.jsx)(o.Heading, {
      variant: 'text-xs/bold',
      color: 'header-secondary',
      className: Z.sectionHeader,
      id: m,
      children: n
    }),
    (0, i.jsx)(o.Spacer, {
      size: 12
    }),
    (0, i.jsx)('ul', {
      className: Z.benefitsList,
      'aria-labelledby': m,
      children: c.map((e, t) => (0, i.jsx)('li', {
        children: (0, i.jsx)(A.Z, {
          guildId: a,
          benefit: e
        }, (0, I.ab)(e))
      }, t))
    }),
    u && (0, i.jsx)(j, {
      isViewAll: r,
      onToggle: () => l(e => !e),
      showMoreText: E
    })
  ]
});
  },
  D = e => {
let {
  guildId: t,
  listingId: n
} = e, s = (0, C.Z)(t), [a] = T.XZ(n, t), r = s.filter(e => a.has(e.id));
return 0 === r.length ? null : (0, i.jsxs)('div', {
  className: Z.benefitsSection,
  children: [
    (0, i.jsx)(o.Heading, {
      variant: 'text-xs/bold',
      color: 'header-secondary',
      className: Z.sectionHeader,
      children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
        count: r.length
      })
    }),
    (0, i.jsx)(o.Spacer, {
      size: 12
    }),
    (0, i.jsx)('div', {
      className: Z.emojiList,
      children: r.map((e, t) => {
        var n;
        return (0, i.jsx)(o.Tooltip, {
          text: e.name,
          'aria-label': !1,
          children: t => {
            var n;
            return (0, i.jsx)('img', {
              ...t,
              className: Z.emojiListEmoji,
              src: (n = e, E.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 24
              })),
              width: 24,
              height: 24,
              alt: e.name
            });
          }
        }, null !== (n = e.id) && void 0 !== n ? n : t);
      })
    })
  ]
});
  },
  b = e => {
let {
  listingId: t,
  guildId: n,
  className: s
} = e, a = (0, f.Z)(n, t), [l] = T.UE(t), c = (0, p.Z)(l), [u] = T.R7(t), d = T.qs(t, n), [_] = T.XZ(t, n);
return null == a && 0 === c.length && 0 === u.length && 0 === _.size ? null : (0, i.jsxs)('div', {
  className: r()(Z.subscriptionPerks, s),
  children: [
    null != a && (0, i.jsxs)(o.HeadingLevel, {
      component: (0, i.jsx)(o.Heading, {
        variant: 'text-xs/bold',
        color: 'header-secondary',
        className: Z.sectionHeader,
        children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
      }),
      children: [
        (0, i.jsx)(o.Spacer, {
          size: 8
        }),
        (0, i.jsx)(S.Z, {
          role: d,
          guildId: n,
          className: Z.roleMessagePreview
        })
      ]
    }),
    (0, i.jsx)(P, {
      header: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
      benefits: c,
      guildId: n
    }),
    (0, i.jsx)(P, {
      header: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
      benefits: u,
      guildId: n
    }),
    (0, i.jsx)(D, {
      guildId: n,
      listingId: t
    })
  ]
});
  },
  j = e => {
let t, {
  onToggle: n,
  isViewAll: s,
  showMoreText: a
} = e;
return t = s ? (0, i.jsxs)(i.Fragment, {
  children: [
    L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION,
    (0, i.jsx)(o.ChevronSmallUpIcon, {
      size: 'md',
      color: 'currentColor',
      className: Z.toggleTruncationButtonIcon
    })
  ]
}) : (0, i.jsxs)(i.Fragment, {
  children: [
    a,
    (0, i.jsx)(o.ChevronSmallDownIcon, {
      size: 'md',
      color: 'currentColor',
      className: Z.toggleTruncationButtonIcon
    })
  ]
}), (0, i.jsx)(o.Button, {
  look: o.Button.Looks.BLANK,
  size: o.Button.Sizes.NONE,
  className: Z.toggleTruncationButton,
  innerClassName: Z.toggleTruncationButtonInner,
  onClick: n,
  children: t
});
  };
t.Z = e => {
  var t;
  let {
listingId: n,
guildId: a,
groupListingId: _,
analyticsLocation: E
  } = e, C = (0, m.jO)(n), {
openModal: f,
canOpenModal: p,
cannotOpenReason: S,
isCheckingTrialEligibility: A
  } = (0, x.Z)(C, a, _, E), P = (0, l.e7)([d.Z], () => d.Z.isSyncing), {
activeSubscription: D,
activeSubscriptionListing: U
  } = (0, h.Z)(_), y = (null == U ? void 0 : U.id) === n, B = (null == D ? void 0 : D.status) === v.O0b.CANCELED, [k, G] = s.useState(!1), [F, w] = s.useState(!1), V = s.useCallback(e => {
let t = !1;
null != e && (t = e.scrollHeight - e.clientHeight > 1), w(t);
  }, []), [H] = T._T(n), [Y] = T.PK(n), [W] = T.TT(n), [K] = T.F2(n), z = (0, N.Z)(a, n), Q = null != W && null == D && z, q = (0, c.Z)(M.iP), [X, J] = s.useState(!1), $ = X || !q, ee = (0, l.e7)([u.Z], () => u.Z.isViewingServerShop(a)), et = (null == C ? void 0 : C.published) === !0, en = (null == C ? void 0 : C.soft_deleted) === !0, ei = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (et || ee) && !en ? (0, i.jsxs)('article', {
className: Z.container,
'aria-label': H,
children: [
  Q && (0, i.jsxs)('div', {
    className: r()(Z.tierTrialIndicator, Z.tierTopIndicator),
    children: [
      L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, I.iG)({
          interval: W.interval,
          interval_count: W.interval_count
        })
      }),
      (0, i.jsx)(o.Tooltip, {
        clickableOnMobile: !0,
        text: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != K ? K : 0
        }),
        children: e => (0, i.jsx)(o.CircleInformationIcon, {
          size: 'xs',
          color: 'currentColor',
          className: Z.tierTrialIndicatorIcon,
          ...e
        })
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: Q ? void 0 : Z.cardContainerWithoutTopIndicator,
    children: [
      (0, i.jsxs)('div', {
        className: Z.tierInfoContainer,
        children: [
          q ? (0, i.jsx)(O.e, {
            listingId: n,
            isListingPublished: et,
            expanded: $,
            onToggleExpanded: () => J(e => !e)
          }) : (0, i.jsx)(R.xv, {
            listingId: n,
            isListingPublished: et
          }),
          $ && (0, i.jsxs)(i.Fragment, {
            children: [
              q && (0, i.jsx)('div', {
                className: Z.divider
              }),
              y ? (0, i.jsx)(o.Button, {
                fullWidth: !0,
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.PRIMARY,
                disabled: !0,
                children: B ? L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
              }) : (0, i.jsx)(o.Tooltip, {
                text: p ? null : S,
                'aria-label': null !== (t = p && S) && void 0 !== t && t,
                children: e => (0, i.jsx)(g.Z, {
                  ...e,
                  fullWidth: !0,
                  disabled: !p || P,
                  submitting: A,
                  onClick: f,
                  onlyShineOnHover: !0,
                  children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                })
              }),
              (0, i.jsx)(o.Spacer, {
                size: 16
              }),
              (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: r()((!F || !k) && Z.tierDescriptionTruncate),
                children: (0, i.jsx)('div', {
                  ref: V,
                  children: Y
                })
              }),
              F && (0, i.jsx)(j, {
                isViewAll: k,
                onToggle: () => G(e => !e),
                showMoreText: ei
              })
            ]
          })
        ]
      }),
      $ && (0, i.jsx)(o.HeadingLevel, {
        children: (0, i.jsx)(b, {
          listingId: n,
          guildId: a
        })
      })
    ]
  })
]
  }) : null;
};