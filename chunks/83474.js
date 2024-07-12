s.d(l, {
  SK: function() {
return L;
  },
  ZP: function() {
return C;
  },
  sK: function() {
return Z;
  }
}), s(47120);
var a = s(735250),
  i = s(470079),
  n = s(120356),
  t = s.n(n),
  c = s(442837),
  d = s(692547),
  r = s(780384),
  o = s(481060),
  u = s(410030),
  h = s(134432),
  m = s(703656),
  x = s(314897),
  g = s(271383),
  j = s(940627),
  N = s(806519),
  P = s(768581),
  f = s(900849),
  v = s(249842),
  p = s(838367),
  I = s(981631),
  _ = s(689938),
  E = s(923908),
  b = s(892561),
  T = s(494536);

function U() {
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)('div', {
    className: E.splashPlaceholder
  }),
  (0, a.jsxs)('div', {
    className: t()(E.body, E.hasSplash),
    children: [
      (0, a.jsx)('div', {
        className: E.iconPlaceholder
      }),
      (0, a.jsx)('div', {
        className: E.__invalid_headerText,
        children: (0, a.jsx)('div', {
          className: E.namePlaceholder
        })
      }),
      (0, a.jsxs)('div', {
        className: E.memberInfo,
        children: [
          (0, a.jsx)('div', {
            className: E.memberCount,
            children: (0, a.jsx)('div', {
              className: E.memberInfoPlaceholder
            })
          }),
          (0, a.jsx)('div', {
            className: E.memberCount,
            children: (0, a.jsx)('div', {
              className: E.memberInfoPlaceholder
            })
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: E.viewButtonPlaceholder
      })
    ]
  })
]
  });
}

function L() {
  let e = (0, u.ZP)();
  return (0, a.jsx)(o.Dialog, {
'aria-label': _.Z.Messages.GUILD_UNAVAILABLE_HEADER,
className: E.guildPopout,
children: (0, a.jsxs)('div', {
  className: E.body,
  children: [
    (0, a.jsx)('img', {
      src: (0, r.wj)(e) ? b : T,
      className: E.unavailableIcon,
      width: 80,
      height: 80,
      alt: ''
    }),
    (0, a.jsx)(o.Heading, {
      className: E.unavailableHeader,
      variant: 'heading-md/semibold',
      children: _.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
    }),
    (0, a.jsx)(o.Text, {
      variant: 'text-sm/normal',
      children: _.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
    })
  ]
})
  });
}

function Z(e) {
  var l, s;
  let {
guild: n,
channelId: r,
messageId: u
  } = e, {
name: v,
id: p,
discoverySplash: b,
icon: T,
description: U,
presenceCount: L,
memberCount: Z,
emojis: C
  } = n, S = (0, c.e7)([x.default], () => x.default.getId()), O = (0, c.e7)([g.ZP], () => g.ZP.isMember(p, S), [
p,
S
  ]), [A, D] = i.useState(!1), F = e => {
if (e.stopPropagation(), O)
  (0, m.XU)(p, r, u);
else {
  let e = {
    page: I.ZY5.GUILD_CHANNEL,
    section: I.jXE.GUILD_POPOUT,
    object: I.qAy.CARD
  };
  (0, f.Ub)(p, e);
}
D(!0);
  }, G = P.ZP.getGuildDiscoverySplashURL({
id: p,
splash: b,
size: 250 * (0, h.x_)()
  }), R = null !== (l = P.ZP.getGuildIconURL({
id: p,
icon: T,
size: 80
  })) && void 0 !== l ? l : void 0, M = C, y = null;
  return null != M && M.length > 6 && null != C && (M = null !== (s = null == C ? void 0 : C.slice(Math.max((null == C ? void 0 : C.length) - 6, 0))) && void 0 !== s ? s : [], y = C.length - 6), (0, a.jsxs)(o.Dialog, {
'aria-label': v,
className: E.guildPopout,
children: [
  null != G ? (0, a.jsx)('img', {
    src: G,
    alt: '',
    className: E.splashImage
  }) : null,
  (0, a.jsxs)('div', {
    className: t()(E.body, {
      [E.hasSplash]: null != G
    }),
    children: [
      (0, a.jsx)('div', {
        className: t()({
          [E.iconWithSplash]: null != G
        }),
        children: (0, a.jsx)(o.Clickable, {
          onClick: F,
          children: (0, a.jsx)(N.ZP, {
            mask: N.ZP.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, a.jsx)('div', {
              className: E.iconMask,
              children: (0, a.jsx)(N.ZP, {
                mask: N.ZP.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, a.jsx)('img', {
                  src: R,
                  alt: '',
                  className: E.avatar
                })
              })
            })
          })
        })
      }),
      null != v ? (0, a.jsxs)('div', {
        className: E.guildNameWrapper,
        children: [
          (0, a.jsx)(j.Z, {
            className: E.badge,
            guild: n,
            tooltipPosition: 'top',
            tooltipColor: o.Tooltip.Colors.PRIMARY,
            badgeColor: d.Z.unsafe_rawColors.PRIMARY_500.css
          }),
          (0, a.jsx)(o.Text, {
            variant: 'text-md/semibold',
            className: E.guildName,
            children: v
          })
        ]
      }) : null,
      null != U ? (0, a.jsx)(o.Text, {
        color: 'header-secondary',
        className: E.description,
        variant: 'text-sm/normal',
        children: U
      }) : null,
      (0, a.jsxs)('div', {
        className: E.memberInfo,
        children: [
          null != L ? (0, a.jsxs)('div', {
            className: E.memberCount,
            children: [
              (0, a.jsx)('div', {
                className: E.dotOnline
              }),
              (0, a.jsx)(o.Text, {
                variant: 'text-xs/normal',
                className: E.memberText,
                children: _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: L
                })
              })
            ]
          }) : null,
          null != Z ? (0, a.jsxs)('div', {
            className: E.memberCount,
            children: [
              (0, a.jsx)('div', {
                className: E.dotOffline
              }),
              (0, a.jsx)(o.Text, {
                variant: 'text-xs/normal',
                className: E.memberText,
                children: _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                  count: Z
                })
              })
            ]
          }) : null
        ]
      })
    ]
  }),
  (0, a.jsxs)('div', {
    className: E.footer,
    children: [
      null != M && M.length > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(o.Heading, {
            variant: 'heading-deprecated-12/semibold',
            className: E.emojiHeader,
            color: 'header-secondary',
            children: _.Z.Messages.SERVER_EMOJI
          }),
          (0, a.jsxs)('div', {
            className: t()(E.emojiContainer, {
              [E.withCounter]: null != y
            }),
            children: [
              M.map(e => {
                let l = P.ZP.getEmojiURL({
                  id: e.id,
                  animated: !1,
                  size: 24
                });
                return (0, a.jsx)(o.Tooltip, {
                  text: ':'.concat(e.name, ':'),
                  children: e => (0, a.jsx)('img', {
                    ...e,
                    width: 24,
                    height: 24,
                    src: l,
                    className: t()({
                      [E.emoji]: null == y
                    }),
                    alt: ''
                  })
                }, e.id);
              }),
              null != y ? (0, a.jsx)(o.Heading, {
                variant: 'heading-deprecated-12/semibold',
                className: E.emojiCounter,
                color: 'header-secondary',
                children: '+'.concat(y)
              }) : null
            ]
          })
        ]
      }) : null,
      (0, a.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        onClick: F,
        submitting: A,
        autoFocus: !0,
        children: _.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
      })
    ]
  })
]
  });
}

function C(e) {
  let {
guildId: l,
channelId: s,
messageId: n
  } = e, {
loading: t,
unavailable: d,
guild: r
  } = (0, c.cj)([p.Z], () => ({
guild: p.Z.getGuild(l),
loading: p.Z.isFetchingGuild(l),
unavailable: p.Z.hasFetchFailed(l)
  }), [l]);
  return (i.useEffect(() => {
null == r && !t && !d && (0, v.P)(l);
  }, [
r,
l,
t,
d
  ]), t) ? (0, a.jsx)(o.Dialog, {
'aria-label': _.Z.Messages.LOADING,
className: E.guildPopout,
children: (0, a.jsx)(U, {})
  }) : null == r || d ? (0, a.jsx)(L, {}) : (0, a.jsx)(Z, {
guild: r,
channelId: s,
messageId: n
  });
}