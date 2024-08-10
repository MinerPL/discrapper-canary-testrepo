n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(338545),
  o = n(143927),
  c = n(442837),
  d = n(481060),
  u = n(749210),
  _ = n(607070),
  h = n(100527),
  E = n(931240),
  m = n(970606),
  I = n(650461),
  g = n(353093),
  p = n(603839),
  T = n(84615),
  S = n(430824),
  f = n(231467),
  C = n(207796),
  N = n(273254),
  A = n(559469),
  v = n(308083),
  Z = n(689938),
  L = n(330468),
  O = n(345480),
  R = n(236613);
let x = {
  mass: 1,
  tension: 600,
  friction: 60
};

function b(e) {
  let {
children: t
  } = e;
  return (0, i.jsxs)(l.animated.div, {
className: L.clanEnvelope,
children: [
  (0, i.jsx)('div', {
    className: L.clanEnvelopeTop,
    children: (0, i.jsx)('img', {
      src: R,
      alt: ''
    })
  }),
  t,
  (0, i.jsx)('div', {
    className: L.clanEnvelopeBottom,
    children: (0, i.jsx)('img', {
      src: O,
      alt: ''
    })
  })
]
  });
}

function P(e) {
  let {
text: t,
icon: n
  } = e;
  return (0, i.jsxs)('div', {
className: L.upsellDetail,
children: [
  (0, i.jsx)(n, {
    size: 'md',
    color: 'currentColor',
    className: L.upsellIcon
  }),
  (0, i.jsx)(d.Text, {
    className: L.upsellDetailText,
    variant: 'text-md/medium',
    children: t
  })
]
  });
}

function M(e) {
  let {
selectedGuildId: t,
setSelectedGuildId: n,
eligibleGuilds: s,
onButtonClick: l,
buttonText: c,
hasCompletedUpsell: u
  } = e, _ = (0, C.GN)(e => e.started, o.Z), h = a.useMemo(() => s.map(e => ({
value: e.id,
label: e.name
  })), [s]), E = a.useCallback(() => {
(0, C.fH)(C.v0.DISCOVERY);
  }, []), m = s.length > 1;
  return (0, i.jsxs)(i.Fragment, {
children: [
  u ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(d.Heading, {
        className: L.upsellTitle,
        variant: 'heading-xxl/semibold',
        children: Z.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
      }),
      (0, i.jsx)(d.Heading, {
        className: L.upsellSubtitle,
        variant: 'heading-md/medium',
        color: 'header-secondary',
        children: Z.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
      })
    ]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(d.Heading, {
        className: L.upsellTitle,
        variant: 'heading-xxl/semibold',
        children: [
          Z.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE,
          (0, i.jsx)('br', {}),
          Z.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT
        ]
      }),
      (0, i.jsxs)('div', {
        className: L.upsellDetails,
        children: [
          (0, i.jsx)(P, {
            icon: d.CompassIcon,
            text: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
          }),
          (0, i.jsx)(P, {
            icon: d.CircleCheckIcon,
            text: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
          }),
          (0, i.jsx)(P, {
            icon: d.GroupIcon,
            text: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
          })
        ]
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: L.upsellButton,
    children: [
      m && (0, i.jsx)(d.SearchableSelect, {
        className: L.upsellSelect,
        value: t,
        options: h,
        onChange: n
      }),
      !u && (0, i.jsx)(d.Button, {
        look: d.ButtonLooks.FILLED,
        size: d.ButtonSizes.LARGE,
        color: d.ButtonColors.BRAND,
        className: r()(L.reserveButton, {
          [L.buttonWithSelect]: m
        }),
        onClick: l,
        children: (0, i.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'always-white',
          children: c
        })
      })
    ]
  }),
  _ && (0, i.jsx)('div', {
    className: L.upsellStaticHeader,
    children: (0, i.jsx)('div', {
      className: L.upsellBackButton,
      children: (0, i.jsx)(d.Clickable, {
        onClick: E,
        'aria-label': Z.Z.Messages.BACK,
        children: (0, i.jsx)(d.ArrowLargeLeftIcon, {})
      })
    })
  })
]
  });
}
t.Z = a.memo(function(e) {
  let {
eligibleGuilds: t,
eligibleGuildsIncludingConverted: n
  } = e, s = 0 === t.length, [r, o] = a.useState(() => {
var e, i;
let a = new Set(I.ZP.getGuildIds());
for (let e of t)
  if (a.has(e.id))
    return e.id;
return s ? null === (e = n[0]) || void 0 === e ? void 0 : e.id : null === (i = t[0]) || void 0 === i ? void 0 : i.id;
  });
  a.useEffect(() => {
!s && (0, m.TE)({
  guildId: r,
  location: h.Z.CLAN_DISCOVERY
});
  }, [
s,
r
  ]);
  let C = (0, c.e7)([S.Z], () => S.Z.getGuild(r)),
O = (0, c.e7)([I.ZP], () => null != r ? I.ZP.getStateForGuild(r).progress : null),
R = a.useCallback(() => {
  !s && ((0, m._9)({
    guildId: r,
    location: h.Z.CLAN_DISCOVERY
  }), (0, T.q4)(e => {
    let {
      closeLayer: t
    } = e;
    return (0, i.jsx)(p.Z, {
      onClose: t,
      guildId: r
    });
  }, {
    layerKey: v.Pv
  }));
}, [
  s,
  r
]),
P = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
D = (0, N.L)({
  guild: C
}),
y = (0, A.n)(),
[j, U] = a.useState(!0),
G = (0, d.useSpring)({
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
}, 'animate-always'),
k = (0, d.useSpring)({
  from: P ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: x,
  delay: 400
}, 'animate-always'),
w = (0, d.useSpring)({
  from: P ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: x,
  delay: 350
}, 'animate-always'),
B = (0, d.useSpring)({
  from: P ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: x,
  delay: 350
}, 'animate-always'),
H = (0, d.useSpring)({
  from: P ? {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  } : {
    transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)'
  },
  to: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)'
  },
  config: x,
  delay: 400
}, 'animate-always'),
V = (0, d.useSpring)({
  from: P ? {
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
  config: x,
  delay: 200
}, 'animate-always'),
F = (0, d.useSpring)({
  from: P ? {
    transform: 'translateY(0px)'
  } : {
    transform: 'translateY(240px)'
  },
  to: {
    transform: 'translateY(0px)'
  },
  config: x,
  delay: 250,
  onRest: () => U(!1)
}, 'animate-always'),
Y = a.useMemo(() => null == O ? Z.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : Z.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [O]),
W = a.useCallback(async () => {
  await (0, E.Zx)(r), u.Z.transitionToGuildSync('936317138904440892');
}, [r]),
z = a.useCallback(e => (0, i.jsx)(d.Clickable, {
  tag: 'span',
  className: L.joinWFSLink,
  onClick: W,
  'aria-label': Z.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
  children: (0, i.jsx)(d.Text, {
    tag: 'span',
    variant: 'text-xs/medium',
    color: 'text-brand',
    children: e
  })
}), [W]);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: L.cardsContainer,
    children: [
      (0, i.jsx)(l.animated.div, {
        className: L.clanCardOuterContainer,
        style: {
          ...k,
          ...G
        },
        children: (0, i.jsx)(f.xV, {
          clan: y[0],
          className: L.clanCardOuterLeft
        })
      }),
      (0, i.jsx)(l.animated.div, {
        className: L.clanCardInnerContainer,
        style: {
          ...w,
          ...G
        },
        children: (0, i.jsx)(f.xV, {
          clan: y[1],
          className: L.clanCardInnerLeft
        })
      }),
      null != D && (0, i.jsx)(l.animated.div, {
        className: L.clanEnvelope,
        style: V,
        children: (0, i.jsx)(b, {
          children: (0, i.jsx)('div', {
            className: L.clanCardCenterContainer,
            style: {
              overflow: j ? 'hidden' : 'visible'
            },
            children: (0, i.jsx)(l.animated.div, {
              style: F,
              children: (0, i.jsx)(f.xV, {
                clan: D,
                className: L.clanCardCenter,
                bannerUrl: (0, g.pY)(y[4].id, y[4].bannerHash)
              })
            })
          })
        })
      }),
      (0, i.jsx)(l.animated.div, {
        className: L.clanCardInnerContainer,
        style: {
          ...B,
          ...G
        },
        children: (0, i.jsx)(f.xV, {
          clan: y[2],
          className: L.clanCardInnerRight
        })
      }),
      (0, i.jsx)(l.animated.div, {
        className: L.clanCardOuterContainer,
        style: {
          ...H,
          ...G
        },
        children: (0, i.jsx)(f.xV, {
          clan: y[3],
          className: L.clanCardOuterRight
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: L.upsellCtaContainer,
    children: (0, i.jsx)(M, {
      selectedGuildId: r,
      setSelectedGuildId: o,
      eligibleGuilds: t,
      onButtonClick: R,
      buttonText: Y,
      hasCompletedUpsell: s
    })
  }),
  s ? (0, i.jsx)('div', {
    className: L.joinWFSContainer,
    children: (0, i.jsx)('div', {
      className: L.joinWFS,
      children: (0, i.jsx)(d.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
          wfsHook: z
        })
      })
    })
  }) : (0, i.jsx)('div', {
    className: L.wfsSpacer
  })
]
  });
});