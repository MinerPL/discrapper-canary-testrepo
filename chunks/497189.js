n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(338545),
  o = n(143927),
  c = n(442837),
  d = n(481060),
  u = n(749210),
  _ = n(607070),
  h = n(100527),
  E = n(931240),
  I = n(970606),
  m = n(963202),
  g = n(650461),
  p = n(353093),
  T = n(603839),
  S = n(430824),
  C = n(725568),
  f = n(231467),
  N = n(207796),
  A = n(316553),
  Z = n(273254),
  L = n(559469),
  v = n(308083),
  O = n(689938),
  R = n(330468),
  x = n(345480),
  b = n(236613);
let P = {
  mass: 1,
  tension: 600,
  friction: 60
};

function M(e) {
  let {
children: t
  } = e;
  return (0, i.jsxs)(l.animated.div, {
className: R.clanEnvelope,
children: [
  (0, i.jsx)('div', {
    className: R.clanEnvelopeTop,
    children: (0, i.jsx)('img', {
      src: b,
      alt: ''
    })
  }),
  t,
  (0, i.jsx)('div', {
    className: R.clanEnvelopeBottom,
    children: (0, i.jsx)('img', {
      src: x,
      alt: ''
    })
  })
]
  });
}

function D(e) {
  let {
text: t,
icon: n
  } = e;
  return (0, i.jsxs)('div', {
className: R.upsellDetail,
children: [
  (0, i.jsx)(n, {
    size: 'md',
    color: 'currentColor',
    className: R.upsellIcon
  }),
  (0, i.jsx)(d.Text, {
    className: R.upsellDetailText,
    variant: 'text-md/medium',
    children: t
  })
]
  });
}

function y(e) {
  let {
selectedGuildId: t,
setSelectedGuildId: n,
eligibleGuilds: a,
onButtonClick: l,
buttonText: c,
hasCompletedUpsell: u,
isBrowseButtonVisible: _
  } = e, h = (0, N.GN)(e => e.setUserUpsellScreen, o.Z), E = (0, N.GN)(e => e.started, o.Z), I = s.useMemo(() => a.map(e => ({
value: e.id,
label: e.name
  })), [a]), m = s.useCallback(() => {
(0, N.fH)(N.v0.DISCOVERY);
  }, []), g = s.useCallback(() => {
(0, N.fH)(N.v0.GET_STARTED), h(N.o2.USER_ONBOARDING);
  }, [h]), p = a.length > 1;
  return (0, i.jsxs)(i.Fragment, {
children: [
  u ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(d.Heading, {
        className: R.upsellTitle,
        variant: 'heading-xxl/semibold',
        children: O.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
      }),
      (0, i.jsx)(d.Heading, {
        className: R.upsellSubtitle,
        variant: 'heading-md/medium',
        color: 'header-secondary',
        children: O.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
      })
    ]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(d.Heading, {
        className: R.upsellTitle,
        variant: 'heading-xxl/semibold',
        children: [
          O.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE,
          (0, i.jsx)('br', {}),
          O.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT
        ]
      }),
      (0, i.jsxs)('div', {
        className: R.upsellDetails,
        children: [
          (0, i.jsx)(D, {
            icon: d.CompassIcon,
            text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
          }),
          (0, i.jsx)(D, {
            icon: d.CircleCheckIcon,
            text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
          }),
          (0, i.jsx)(D, {
            icon: d.GroupIcon,
            text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
          })
        ]
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: R.upsellButton,
    children: [
      p && (0, i.jsx)(d.SearchableSelect, {
        className: R.upsellSelect,
        value: t,
        options: I,
        onChange: n
      }),
      !u && (0, i.jsx)(d.Button, {
        look: d.ButtonLooks.FILLED,
        size: d.ButtonSizes.LARGE,
        color: d.ButtonColors.BRAND,
        className: r()(R.reserveButton, {
          [R.buttonWithSelect]: p
        }),
        onClick: l,
        children: (0, i.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'always-white',
          children: c
        })
      }),
      p && _ && (0, i.jsx)('div', {
        className: R.spacer,
        children: '\xB7'
      }),
      _ && (0, i.jsx)(d.Button, {
        look: d.ButtonLooks.OUTLINED,
        color: d.ButtonColors.PRIMARY,
        className: R.browseButton,
        onClick: g,
        children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
      })
    ]
  }),
  E && (0, i.jsx)('div', {
    className: R.upsellStaticHeader,
    children: (0, i.jsx)('div', {
      className: R.upsellBackButton,
      children: (0, i.jsx)(d.Clickable, {
        onClick: m,
        'aria-label': O.Z.Messages.BACK,
        children: (0, i.jsx)(d.ArrowLargeLeftIcon, {})
      })
    })
  })
]
  });
}
t.Z = s.memo(function(e) {
  let {
eligibleGuilds: t,
eligibleGuildsIncludingConverted: n,
selectedGame: a,
isBrowseButtonVisible: r
  } = e, o = 0 === t.length, [x, b] = s.useState(() => {
let e = new Set(g.ZP.getGuildIds());
for (let n of t)
  if (e.has(n.id))
    return n.id;
return o ? n[0].id : t[0].id;
  });
  s.useEffect(() => {
!o && (0, I.TE)({
  guildId: x,
  location: h.Z.CLAN_DISCOVERY
});
  }, [
o,
x
  ]);
  let D = (0, c.e7)([S.Z], () => S.Z.getGuild(x)),
j = (0, c.e7)([g.ZP], () => null != x ? g.ZP.getStateForGuild(x).progress : null),
U = (0, A.J)({
  selectedGame: a
}),
{
  defaultGameId: G
} = (0, m.St)({
  guild: D,
  location: 'ClanDiscoveryAdminUpsell',
  includeConverted: !1
});
  s.useEffect(() => {
let e = G === v.nJ ? N.hz.VALORANT : G === v.xn ? N.hz.GENSHIN : void 0;
null != e && U !== G && N.GN.getState().setGame(e);
  }, [
G,
U
  ]);
  let k = s.useCallback(() => {
  !o && ((0, I._9)({
    guildId: x,
    location: h.Z.CLAN_DISCOVERY
  }), (0, C.q4)(e => {
    let {
      closeLayer: t
    } = e;
    return (0, i.jsx)(T.Z, {
      onClose: t,
      guildId: x
    });
  }, {
    layerKey: v.Pv
  }));
}, [
  o,
  x
]),
w = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
B = (0, Z.L)({
  guild: D,
  selectedGame: a
}),
H = (0, L.n)(U),
[V, F] = s.useState(!0),
Y = (0, l.useSpring)({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  delay: 400,
  config: {
    duration: 0
  }
}),
W = (0, l.useSpring)({
  from: w ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: P,
  delay: 400
}),
z = (0, l.useSpring)({
  from: w ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: P,
  delay: 350
}),
K = (0, l.useSpring)({
  from: w ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: P,
  delay: 350
}),
q = (0, l.useSpring)({
  from: w ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: P,
  delay: 400
}),
Q = (0, l.useSpring)({
  from: w ? {
    transform: 'scale(1)',
    opacity: 0
  } : {
    transform: 'scale(0.9)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  },
  config: P,
  delay: 200
}),
X = (0, l.useSpring)({
  from: w ? {
    transform: 'translateY(0px)'
  } : {
    transform: 'translateY(240px)'
  },
  to: {
    transform: 'translateY(0px)'
  },
  config: P,
  delay: 250,
  onRest: () => F(!1)
}),
J = s.useMemo(() => null == j ? O.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : O.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [j]),
$ = s.useCallback(async () => {
  await (0, E.Zx)(x), u.Z.transitionToGuildSync('936317138904440892');
}, [x]),
ee = s.useCallback(e => (0, i.jsx)(d.Clickable, {
  tag: 'span',
  className: R.joinWFSLink,
  onClick: $,
  'aria-label': O.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
  children: (0, i.jsx)(d.Text, {
    tag: 'span',
    variant: 'text-xs/medium',
    color: 'text-brand',
    children: e
  })
}), [$]);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: R.cardsContainer,
    children: [
      (0, i.jsx)(l.animated.div, {
        className: R.clanCardOuterContainer,
        style: {
          ...W,
          ...Y
        },
        children: (0, i.jsx)(f.xV, {
          clan: H[0],
          className: R.clanCardOuterLeft
        })
      }),
      (0, i.jsx)(l.animated.div, {
        className: R.clanCardInnerContainer,
        style: {
          ...z,
          ...Y
        },
        children: (0, i.jsx)(f.xV, {
          clan: H[1],
          className: R.clanCardInnerLeft
        })
      }),
      null != B && (0, i.jsx)(l.animated.div, {
        className: R.clanEnvelope,
        style: Q,
        children: (0, i.jsx)(M, {
          children: (0, i.jsx)('div', {
            className: R.clanCardCenterContainer,
            style: {
              overflow: V ? 'hidden' : 'visible'
            },
            children: (0, i.jsx)(l.animated.div, {
              style: X,
              children: (0, i.jsx)(f.xV, {
                clan: B,
                className: R.clanCardCenter,
                bannerUrl: (0, p.pY)(H[4].id, H[4].bannerHash)
              })
            })
          })
        })
      }),
      (0, i.jsx)(l.animated.div, {
        className: R.clanCardInnerContainer,
        style: {
          ...K,
          ...Y
        },
        children: (0, i.jsx)(f.xV, {
          clan: H[2],
          className: R.clanCardInnerRight
        })
      }),
      (0, i.jsx)(l.animated.div, {
        className: R.clanCardOuterContainer,
        style: {
          ...q,
          ...Y
        },
        children: (0, i.jsx)(f.xV, {
          clan: H[3],
          className: R.clanCardOuterRight
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: R.upsellCtaContainer,
    children: (0, i.jsx)(y, {
      selectedGuildId: x,
      setSelectedGuildId: b,
      eligibleGuilds: t,
      onButtonClick: k,
      buttonText: J,
      hasCompletedUpsell: o,
      isBrowseButtonVisible: r
    })
  }),
  (0, i.jsx)('div', {
    className: R.joinWFSContainer,
    children: (0, i.jsx)('div', {
      className: R.joinWFS,
      children: (0, i.jsx)(d.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
          wfsHook: ee
        })
      })
    })
  })
]
  });
});