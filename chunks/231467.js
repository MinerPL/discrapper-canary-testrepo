n.d(t, {
  cS: function() {
return U;
  },
  xV: function() {
return k;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(143927),
  l = n(481060),
  u = n(442837),
  c = n(239091),
  d = n(835473),
  _ = n(970606),
  E = n(963202),
  f = n(905362),
  h = n(603368),
  p = n(353093),
  m = n(169559),
  I = n(114487),
  T = n(214715),
  g = n(550271),
  S = n(686546),
  A = n(246364),
  N = n(937111),
  v = n(703656),
  O = n(271383),
  R = n(594174),
  C = n(778045),
  y = n(207796),
  D = n(355932),
  L = n(981631),
  b = n(308083),
  M = n(689938),
  P = n(767131);

function U(e) {
  let {
wildcardDescriptors: t,
primaryColor: n
  } = e, a = t.filter(e => e !== b.U6).join(', '), s = (0, l.useToken)(l.tokens.colors.BACKGROUND_FLOATING), o = (0, h.pX)(n, s.hex()), u = i.useRef(null), [c, d] = i.useState(!1);
  if (i.useEffect(() => {
  let e = u.current;
  null != e && null != e.offsetWidth && null != e.scrollWidth && d(e.offsetWidth < e.scrollWidth);
}, []), 0 === a.length)
return null;
  let _ = null != o ? {
color: o.css()
  } : void 0;
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(l.Text, {
    variant: 'text-xs/normal',
    color: 'text-secondary',
    className: P.clanInfoItem,
    children: '\xB7'
  }),
  (0, r.jsx)(l.Tooltip, {
    text: a,
    color: l.Tooltip.Colors.PRIMARY,
    shouldShow: c,
    children: e => (0, r.jsx)('span', {
      ...e,
      style: _,
      className: P.wildCardText,
      ref: u,
      children: a
    })
  })
]
  });
}

function w(e) {
  let {
description: t,
expanded: n
  } = e;
  return null == t ? null : n ? (0, r.jsx)('div', {
className: P.cardContentDescriptionSection,
children: (0, r.jsx)(l.Text, {
  variant: 'text-xs/normal',
  color: 'text-muted',
  children: t
})
  }) : (0, r.jsx)('div', {
className: P.cardContentDescriptionSection,
children: (0, r.jsx)(l.Text, {
  className: P.cardContentDescriptionCollapsed,
  variant: 'text-xs/normal',
  color: 'text-muted',
  lineClamp: 4,
  children: t
})
  });
}

function x(e) {
  let {
traits: t,
traitsToHighlight: n
  } = e, a = i.useMemo(() => null == n ? new Set() : new Set(n), [n]), o = i.useCallback(e => (0, r.jsx)(T.Z, {
className: s()(P.thinTrait, {
  [P.selectedTrait]: a.has(e)
}),
text: e,
selected: a.has(e)
  }, e), [a]);
  return (0, r.jsx)(D.ZP, {
className: P.traitsContainer,
items: t,
renderItem: o,
maxLines: 2,
itemGapPx: 4
  });
}

function G(e) {
  let {
hasPendingJoinRequest: t,
atMaxMemberCapacity: n,
isGuildMember: i
  } = e;
  if (t)
return (0, r.jsxs)('div', {
  className: P.headerBadge,
  children: [
    (0, r.jsx)(l.HourglassIcon, {
      size: 'xxs'
    }),
    (0, r.jsx)(l.Text, {
      variant: 'text-xs/medium',
      color: 'text-normal',
      children: M.Z.Messages.CLAN_CARD_BADGE_APPLIED
    })
  ]
});
  if (i)
return (0, r.jsxs)('div', {
  className: P.headerBadge,
  children: [
    (0, r.jsx)(l.CircleCheckIcon, {
      size: 'xxs',
      color: l.tokens.colors.STATUS_POSITIVE
    }),
    (0, r.jsx)(l.Text, {
      variant: 'text-xs/medium',
      color: 'text-normal',
      children: M.Z.Messages.JOINED_GUILD
    })
  ]
});
  if (n)
return (0, r.jsxs)('div', {
  className: P.headerBadge,
  children: [
    (0, r.jsx)(l.LockIcon, {
      size: 'xxs'
    }),
    (0, r.jsx)(l.Text, {
      variant: 'text-xs/medium',
      color: 'text-normal',
      children: M.Z.Messages.FULL
    })
  ]
});
  return null;
}

function k(e) {
  var t;
  let {
clan: n,
bannerComponent: a,
expanded: u,
isMember: c = !1,
traitsToHighlight: _,
prioritizedGameIds: f,
className: h,
showBrandingFooter: T = !1,
bannerUrl: A,
onlyAnimateIconOnHover: N = !1,
hasPendingJoinRequest: v = !1,
atMaxMemberCapacity: O = !1
  } = e, {
tag: R,
badge: D,
branding: {
  primaryColor: L,
  secondaryColor: k
},
bannerHash: B,
gameActivity: F
  } = n, V = (0, d.Z)(n.games), H = (0, m.Z)('clan_discovery_card'), [Z, Y] = i.useState(!1), j = i.useRef(null), [W, K] = i.useState(!1), z = (0, y.GN)(e => e.savedGuildIds.includes(n.id), o.Z), q = (0, E.iN)('guild_card'), Q = i.useCallback(e => {
e.stopPropagation(), e.preventDefault(), (0, y.qQ)(n.id, !z);
  }, [
n.id,
z
  ]), X = i.useCallback(() => {
Y(!0);
  }, []), $ = i.useCallback(() => {
Y(!1);
  }, []), J = M.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
count: n.memberCount
  }), ee = null != A ? A : (0, p.pY)(n.id, B), et = null == a && null == ee ? {
background: 'linear-gradient(90deg, '.concat(L, ', ').concat(k, ')')
  } : void 0, en = null != a ? a : null != ee ? (0, r.jsx)('img', {
alt: M.Z.Messages.CLAN_LOOK_BANNER,
src: ee,
className: P.bannerImage
  }) : null, er = i.useMemo(() => (0, b.HR)(n.traits, _), [
n.traits,
_
  ]);
  return i.useEffect(() => {
let e = j.current;
null != e && null != e.offsetWidth && null != e.scrollWidth && K(e.offsetWidth < e.scrollWidth);
  }, []), (0, r.jsxs)('div', {
className: s()(P.card, h, {
  [P.cardStaticHeight]: !u
}),
onMouseEnter: X,
onMouseLeave: $,
children: [
  (0, r.jsxs)('div', {
    className: P.cardBrandingHeader,
    style: et,
    children: [
      en,
      (0, r.jsx)(G, {
        hasPendingJoinRequest: v,
        atMaxMemberCapacity: O,
        isGuildMember: c
      }),
      q && (0, r.jsx)(l.Clickable, {
        className: s()(P.favoriteButton, (Z || z) && P.shownFavoriteButton),
        onClick: Q,
        focusProps: {
          enabled: Z || z
        },
        children: z ? (0, r.jsx)(l.HeartIcon, {
          color: l.tokens.colors.INFO_DANGER_FOREGROUND,
          size: 'custom',
          width: 18,
          height: 18
        }) : (0, r.jsx)(l.HeartOutlineIcon, {
          color: l.tokens.colors.HEADER_PRIMARY,
          size: 'custom',
          width: 18,
          height: 18
        })
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: P.cardContent,
    children: [
      (0, r.jsxs)('div', {
        className: P.cardContentTitleSection,
        children: [
          (0, r.jsxs)('div', {
            className: P.cardNameAndTagWrapper,
            children: [
              (0, r.jsx)(S.ZP, {
                mask: S.QS.CLAN_ICON,
                width: 70,
                height: 70,
                className: P.clanIconMask,
                children: (0, r.jsx)('div', {
                  className: P.clanIconInner,
                  children: (0, r.jsx)(I.b, {
                    guildId: n.id,
                    guildName: n.name,
                    guildIcon: n.icon,
                    iconSize: 64,
                    animate: !N || Z
                  })
                })
              }),
              (0, r.jsx)('div', {
                className: P.clanTagChipletWrapper,
                children: (0, r.jsx)(l.Tooltip, {
                  text: M.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                  position: 'top',
                  shouldShow: !c && H,
                  children: e => (0, r.jsxs)('div', {
                    ...e,
                    className: P.clanTagChiplet,
                    children: [
                      (0, r.jsx)(g.A, {
                        width: 16,
                        height: 16,
                        badge: D.badgeKind,
                        primaryTintColor: D.primaryColor,
                        secondaryTintColor: D.secondaryColor
                      }),
                      (0, r.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-primary',
                        children: R
                      })
                    ]
                  })
                })
              })
            ]
          }),
          (0, r.jsx)(l.Heading, {
            variant: 'heading-md/medium',
            color: 'header-primary',
            lineClamp: 1,
            children: (0, r.jsx)(l.Tooltip, {
              text: n.name,
              color: l.Tooltip.Colors.PRIMARY,
              shouldShow: W,
              children: e => (0, r.jsx)('span', {
                ...e,
                ref: j,
                className: P.nameText,
                children: n.name
              })
            })
          }),
          (0, r.jsxs)('div', {
            className: P.clanInfoRow,
            children: [
              (0, r.jsx)(l.Text, {
                variant: 'text-xxs/normal',
                className: P.clanInfoItem,
                children: (0, r.jsx)('span', {
                  role: 'img',
                  'aria-label': M.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                  children: '\uD83C\uDFAE'
                })
              }),
              (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: P.clanInfoItem,
                children: null !== (t = (0, b.mv)(n.playstyle)) && void 0 !== t ? t : M.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
              }),
              (0, r.jsx)(U, {
                wildcardDescriptors: n.wildcardDescriptors,
                primaryColor: n.branding.primaryColor
              })
            ]
          })
        ]
      }),
      (0, r.jsx)(w, {
        description: n.description,
        expanded: u
      }),
      (0, r.jsx)(x, {
        traits: er,
        traitsToHighlight: _
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: P.cardFooter,
    children: [
      (0, r.jsx)('div', {
        className: P.cardFooterInfo,
        children: (0, r.jsx)('div', {
          className: P.cardFooterMembers,
          children: (0, r.jsx)(l.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: J
          })
        })
      }),
      (0, r.jsx)('div', {
        className: P.cardFooterGames,
        children: (0, r.jsx)(C.Z, {
          games: V,
          prioritizedGameIds: f,
          gameActivity: F
        })
      })
    ]
  }),
  T && (0, r.jsx)('div', {
    className: P.cardBrandingFooter,
    style: {
      background: 'linear-gradient(90deg, '.concat(L, ', ').concat(k, ')')
    }
  })
]
  });
}
t.ZP = function(e) {
  let {
style: t,
prioritizedGameIds: a,
...s
  } = e, {
clan: o,
affinity: d,
index: E,
source: h
  } = s, p = (0, u.e7)([R.default], () => R.default.getCurrentUser()), m = (0, u.e7)([O.ZP], () => O.ZP.isMember(o.id, null == p ? void 0 : p.id), [
o,
p
  ]), I = (0, u.e7)([N.Z], () => {
var e;
return (null === (e = N.Z.getRequest(o.id)) || void 0 === e ? void 0 : e.applicationStatus) === A.wB.SUBMITTED;
  }), T = o.memberCount >= b.Du, g = i.useCallback(() => {
let e = null != N.Z.getRequest(o.id);
if ((0, _.EK)({
    guildId: o.id,
    isMember: m,
    hasJoinRequest: e,
    affinity: d,
    index: E
  }), m) {
  (0, v.XU)(o.id);
  return;
}
if (e) {
  (0, v.uL)(L.Z5c.GUILD_MEMBER_VERIFICATION(o.id));
  return;
}
(0, f.q)(o.id, o, {
  source: h,
  location: L.Sbl.CLAN_DISCOVERY_CARD
}, a);
  }, [
o,
m,
d,
E,
h,
a
  ]), S = i.useCallback(e => {
(0, c.jW)(e, async () => {
  let {
    default: e
  } = await n.e('5577').then(n.bind(n, 955120));
  return t => (0, r.jsx)(e, {
    ...t,
    guildId: o.id
  });
});
  }, [o.id]);
  return (0, r.jsx)(l.Clickable, {
onClick: g,
className: P.clickableCard,
style: t,
onContextMenu: S,
children: (0, r.jsx)(k, {
  ...s,
  isMember: m,
  prioritizedGameIds: a,
  showBrandingFooter: !0,
  hasPendingJoinRequest: I,
  atMaxMemberCapacity: T
})
  });
};