n.d(t, {
  K_: function() {
return R;
  },
  hU: function() {
return O;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(91192),
  l = n(442837),
  u = n(846519),
  c = n(692547),
  d = n(481060),
  _ = n(596454),
  E = n(607070),
  f = n(745510),
  h = n(594174),
  p = n(208049),
  m = n(763296),
  I = n(697426),
  T = n(242291),
  g = n(706667),
  S = n(286654),
  A = n(675654),
  N = n(689938),
  v = n(627450);

function O(e) {
  let {
disabled: t = !1,
onClick: n,
text: i,
children: a,
tooltipPosition: s = 'top'
  } = e;
  return (0, r.jsx)(d.Tooltip, {
text: i,
position: s,
children: e => (0, r.jsx)(d.Clickable, {
  ...e,
  'aria-label': i,
  className: o()(v.secondaryButton, {
    [v.buttonDisabled]: t
  }),
  onClick: n,
  children: a
})
  });
}

function R(e) {
  let {
sound: t,
previewSound: n,
disabled: i = !1,
tooltipPosition: a = 'top'
  } = e;
  return (0, r.jsx)(O, {
tooltipPosition: a,
disabled: i,
onClick: function(e) {
  e.stopPropagation(), e.currentTarget.blur(), n();
},
text: N.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
  emojiName: t.emojiName,
  soundName: t.name
}),
children: (0, r.jsx)(d.VoiceNormalIcon, {
  size: 'md',
  color: 'currentColor',
  className: v.secondaryIcon
})
  });
}
t.ZP = i.forwardRef(function(e, t) {
  var n, a, C;
  let {
sound: y,
channel: D,
className: L,
focused: b,
forceSecondaryActions: M = !1,
interactive: P = !0,
enableSecondaryActions: U = !1,
suppressPlaySound: w,
onMouseEnter: x,
onSelectItem: G,
analyticsLocations: k,
buttonOverlay: B = I.Pb.PLAY,
...F
  } = e, {
soundId: V,
name: H,
emojiId: Z,
emojiName: Y
  } = y, j = (0, l.e7)([h.default], () => h.default.getCurrentUser()), W = (0, S.z)(y, null == D ? void 0 : D.guild_id), {
playSoundboardSound: K,
previewSound: z,
isPlayingSound: q
  } = (0, g.Z)(y, null !== (n = null == D ? void 0 : D.id) && void 0 !== n ? n : null), {
createMultipleConfettiAt: Q
  } = i.useContext(f.h), X = i.useRef(null);
  let $ = (a = y.soundId, C = X.current, i.useMemo(() => {
  if (null == C || '1' !== a)
    return {
      x: 0,
      y: 0
    };
  let e = C.getBoundingClientRect();
  return {
    x: e.left + e.width / 2,
    y: e.top + e.height / 2
  };
}, [
  C,
  a
])),
J = (0, l.e7)([E.Z], () => E.Z.useReducedMotion),
ee = i.useRef(0.01),
et = i.useRef(new u.Xp()),
en = '1' === y.soundId,
er = (0, l.e7)([m.Z], () => m.Z.isFavoriteSound(V), [V]),
ei = 'sound-'.concat(y.soundId),
ea = (0, s.JA)(ei),
eo = null != Z || null != Y,
es = !(0, T.Nq)(j, y, D),
el = M || U && !es;

  function eu(e) {
e.stopPropagation(), e.currentTarget.blur(), er ? (0, p.hs)(V) : (0, p.TB)(V);
  }

  function ec() {
return (0, r.jsx)(O, {
  disabled: !P && !M,
  onClick: eu,
  text: N.Z.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
    emojiName: y.emojiName,
    soundName: y.name
  }),
  children: er ? (0, r.jsx)(d.StarIcon, {
    size: 'xs',
    className: o()(v.secondaryIcon, v.favoriteIconFavorite),
    color: c.Z.unsafe_rawColors.GOLD.css
  }) : (0, r.jsx)(d.StarOutlineIcon, {
    size: 'xs',
    color: 'currentColor',
    className: v.secondaryIcon
  })
});
  }
  let ed = R({
  sound: y,
  previewSound: z,
  disabled: es
}),
e_ = () => (0, r.jsxs)('div', {
  className: v.buttonOverlay,
  children: [
    (0, r.jsx)('div', {
      className: o()({
        [v.buttonOverlayBackground]: !w
      })
    }),
    (0, r.jsxs)('div', {
      className: v.buttonOverlayActions,
      children: [
        el && ed,
        !w && !es && (0, r.jsx)(d.PlayIcon, {
          size: 'xs',
          color: 'currentColor',
          className: v.playIcon
        }),
        el && ec()
      ]
    })
  ]
});
  return i.useEffect(() => {
let e = et.current;
return en && e.start(1000, () => {
  ee.current = Math.max(ee.current - 0.01, 0.01);
}), () => e.stop();
  }, [en]), (0, r.jsxs)('li', {
ref: t,
className: v.soundButtonWrapper,
onMouseEnter: x,
children: [
  (0, r.jsxs)(d.ClickableContainer, {
    ...F,
    buttonProps: {
      ...ea,
      id: ei,
      role: 'button'
    },
    'aria-label': N.Z.Messages.SOUNDBOARD_PLAY_SOUND.format({
      emojiName: y.emojiName,
      soundName: y.name
    }),
    className: o()(L, v.soundButton, {
      [v.playing]: q,
      [v.hoverActiveBackground]: w,
      [v.soundButtonInteractive]: P,
      [v.buttonDisabled]: !P && !M,
      [v.premiumDisabled]: es && !M,
      [v.buttonDisabledSecondaryActionsEnabled]: !P && M,
      [v.focused]: P && b
    }),
    onClick: function() {
      if (en && !J && (ee.current = Math.min(ee.current + 0.01, 0.1), Math.random() < ee.current && Q($.x, $.y, void 0, void 0, {
          sprite: A.vv
        })), null != G) {
        G();
        return;
      }
      w || K(k);
    },
    onContextMenu: U && !es ? W : void 0,
    children: [
      (0, r.jsxs)('div', {
        className: v.soundInfo,
        'aria-hidden': !0,
        ref: X,
        children: [
          eo && (0, r.jsx)(_.Z, {
            emojiId: Z,
            emojiName: Y,
            className: v.emoji
          }),
          (0, r.jsx)(d.Text, {
            variant: 'text-xs/medium',
            color: P ? 'header-primary' : 'text-muted',
            className: o()(v.soundName, {
              [v.hasEmoji]: eo
            }),
            children: H
          })
        ]
      }),
      function() {
        switch (B) {
          case I.Pb.ADD:
            return (0, r.jsxs)('div', {
              className: v.addButtonOverlay,
              children: [
                (0, r.jsx)('div', {
                  className: v.buttonOverlayBackground
                }),
                (0, r.jsxs)('div', {
                  className: v.buttonOverlayActions,
                  children: [
                    ed,
                    (0, r.jsxs)('div', {
                      className: v.addButton,
                      children: [
                        (0, r.jsx)(d.PlusSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: v.plusSign
                        }),
                        (0, r.jsx)(d.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-primary',
                          children: N.Z.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                        })
                      ]
                    }),
                    el && ec()
                  ]
                })
              ]
            });
          case I.Pb.PLAY:
          default:
            return e_();
        }
      }()
    ]
  }),
  !y.available && (0, r.jsx)(d.Tooltip, {
    text: N.Z.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
    children: e => (0, r.jsx)('div', {
      className: v.unavailableTooltip,
      ...e
    })
  })
]
  });
});