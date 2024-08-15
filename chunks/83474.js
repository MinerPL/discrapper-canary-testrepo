t.d(n, {
  SK: function() {
return j;
  },
  ZP: function() {
return b;
  },
  sK: function() {
return M;
  }
}), t(47120);
var l = t(735250),
  s = t(470079),
  i = t(120356),
  a = t.n(i),
  r = t(442837),
  d = t(692547),
  u = t(780384),
  c = t(481060),
  o = t(410030),
  h = t(686546),
  _ = t(372769),
  m = t(134432),
  E = t(703656),
  g = t(314897),
  N = t(271383),
  T = t(768581),
  f = t(900849),
  I = t(249842),
  S = t(838367),
  P = t(981631),
  x = t(689938),
  A = t(771370),
  p = t(892561),
  O = t(494536);

function v() {
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsx)('div', {
    className: A.splashPlaceholder
  }),
  (0, l.jsxs)('div', {
    className: a()(A.body, A.hasSplash),
    children: [
      (0, l.jsx)('div', {
        className: A.iconPlaceholder
      }),
      (0, l.jsx)('div', {
        className: A.__invalid_headerText,
        children: (0, l.jsx)('div', {
          className: A.namePlaceholder
        })
      }),
      (0, l.jsxs)('div', {
        className: A.memberInfo,
        children: [
          (0, l.jsx)('div', {
            className: A.memberCount,
            children: (0, l.jsx)('div', {
              className: A.memberInfoPlaceholder
            })
          }),
          (0, l.jsx)('div', {
            className: A.memberCount,
            children: (0, l.jsx)('div', {
              className: A.memberInfoPlaceholder
            })
          })
        ]
      }),
      (0, l.jsx)('div', {
        className: A.viewButtonPlaceholder
      })
    ]
  })
]
  });
}

function j() {
  let e = (0, o.ZP)();
  return (0, l.jsx)(c.Dialog, {
'aria-label': x.Z.Messages.GUILD_UNAVAILABLE_HEADER,
className: A.guildPopout,
children: (0, l.jsxs)('div', {
  className: A.body,
  children: [
    (0, l.jsx)('img', {
      src: (0, u.wj)(e) ? p : O,
      className: A.unavailableIcon,
      width: 80,
      height: 80,
      alt: ''
    }),
    (0, l.jsx)(c.Heading, {
      className: A.unavailableHeader,
      variant: 'heading-md/semibold',
      children: x.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
    }),
    (0, l.jsx)(c.Text, {
      variant: 'text-sm/normal',
      children: x.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
    })
  ]
})
  });
}

function M(e) {
  var n, t;
  let {
guild: i,
channelId: u,
messageId: o
  } = e, {
name: I,
id: S,
discoverySplash: p,
icon: O,
description: v,
presenceCount: j,
memberCount: M,
emojis: b
  } = i, C = (0, r.e7)([g.default], () => g.default.getId()), R = (0, r.e7)([N.ZP], () => N.ZP.isMember(S, C), [
S,
C
  ]), [U, D] = s.useState(!1), Z = e => {
if (e.stopPropagation(), R)
  (0, E.XU)(S, u, o);
else {
  let e = {
    page: P.ZY5.GUILD_CHANNEL,
    section: P.jXE.GUILD_POPOUT,
    object: P.qAy.CARD
  };
  (0, f.Ub)(S, e);
}
D(!0);
  }, L = T.ZP.getGuildDiscoverySplashURL({
id: S,
splash: p,
size: 250 * (0, m.x_)()
  }), y = null !== (n = T.ZP.getGuildIconURL({
id: S,
icon: O,
size: 80
  })) && void 0 !== n ? n : void 0, G = b, w = null;
  return null != G && G.length > 6 && null != b && (G = null !== (t = null == b ? void 0 : b.slice(Math.max((null == b ? void 0 : b.length) - 6, 0))) && void 0 !== t ? t : [], w = b.length - 6), (0, l.jsxs)(c.Dialog, {
'aria-label': I,
className: A.guildPopout,
children: [
  null != L ? (0, l.jsx)('img', {
    src: L,
    alt: '',
    className: A.splashImage
  }) : null,
  (0, l.jsxs)('div', {
    className: a()(A.body, {
      [A.hasSplash]: null != L
    }),
    children: [
      (0, l.jsx)('div', {
        className: a()({
          [A.iconWithSplash]: null != L
        }),
        children: (0, l.jsx)(c.Clickable, {
          onClick: Z,
          children: (0, l.jsx)(h.ZP, {
            mask: h.ZP.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, l.jsx)('div', {
              className: A.iconMask,
              children: (0, l.jsx)(h.ZP, {
                mask: h.ZP.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, l.jsx)('img', {
                  src: y,
                  alt: '',
                  className: A.avatar
                })
              })
            })
          })
        })
      }),
      null != I ? (0, l.jsxs)('div', {
        className: A.guildNameWrapper,
        children: [
          (0, l.jsx)(_.Z, {
            className: A.badge,
            guild: i,
            tooltipPosition: 'top',
            tooltipColor: c.Tooltip.Colors.PRIMARY,
            badgeColor: d.Z.unsafe_rawColors.PRIMARY_500.css
          }),
          (0, l.jsx)(c.Text, {
            variant: 'text-md/semibold',
            className: A.guildName,
            children: I
          })
        ]
      }) : null,
      null != v ? (0, l.jsx)(c.Text, {
        color: 'header-secondary',
        className: A.description,
        variant: 'text-sm/normal',
        children: v
      }) : null,
      (0, l.jsxs)('div', {
        className: A.memberInfo,
        children: [
          null != j ? (0, l.jsxs)('div', {
            className: A.memberCount,
            children: [
              (0, l.jsx)('div', {
                className: A.dotOnline
              }),
              (0, l.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: A.memberText,
                children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: j
                })
              })
            ]
          }) : null,
          null != M ? (0, l.jsxs)('div', {
            className: A.memberCount,
            children: [
              (0, l.jsx)('div', {
                className: A.dotOffline
              }),
              (0, l.jsx)(c.Text, {
                variant: 'text-xs/normal',
                className: A.memberText,
                children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                  count: M
                })
              })
            ]
          }) : null
        ]
      })
    ]
  }),
  (0, l.jsxs)('div', {
    className: A.footer,
    children: [
      null != G && G.length > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)(c.Heading, {
            variant: 'heading-deprecated-12/semibold',
            className: A.emojiHeader,
            color: 'header-secondary',
            children: x.Z.Messages.SERVER_EMOJI
          }),
          (0, l.jsxs)('div', {
            className: a()(A.emojiContainer, {
              [A.withCounter]: null != w
            }),
            children: [
              G.map(e => {
                let n = T.ZP.getEmojiURL({
                  id: e.id,
                  animated: !1,
                  size: 24
                });
                return (0, l.jsx)(c.Tooltip, {
                  text: ':'.concat(e.name, ':'),
                  children: e => (0, l.jsx)('img', {
                    ...e,
                    width: 24,
                    height: 24,
                    src: n,
                    className: a()({
                      [A.emoji]: null == w
                    }),
                    alt: ''
                  })
                }, e.id);
              }),
              null != w ? (0, l.jsx)(c.Heading, {
                variant: 'heading-deprecated-12/semibold',
                className: A.emojiCounter,
                color: 'header-secondary',
                children: '+'.concat(w)
              }) : null
            ]
          })
        ]
      }) : null,
      (0, l.jsx)(c.Button, {
        look: c.Button.Looks.FILLED,
        color: c.Button.Colors.BRAND,
        size: c.Button.Sizes.SMALL,
        onClick: Z,
        submitting: U,
        autoFocus: !0,
        children: x.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
      })
    ]
  })
]
  });
}

function b(e) {
  let {
guildId: n,
channelId: t,
messageId: i
  } = e, {
loading: a,
unavailable: d,
guild: u
  } = (0, r.cj)([S.Z], () => ({
guild: S.Z.getGuild(n),
loading: S.Z.isFetchingGuild(n),
unavailable: S.Z.hasFetchFailed(n)
  }), [n]);
  return (s.useEffect(() => {
null == u && !a && !d && (0, I.P)(n);
  }, [
u,
n,
a,
d
  ]), a) ? (0, l.jsx)(c.Dialog, {
'aria-label': x.Z.Messages.LOADING,
className: A.guildPopout,
children: (0, l.jsx)(v, {})
  }) : null == u || d ? (0, l.jsx)(j, {}) : (0, l.jsx)(M, {
guild: u,
channelId: t,
messageId: i
  });
}