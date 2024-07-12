s.d(t, {
  Z: function() {
return H;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(392711),
  l = s.n(o),
  c = s(442837),
  d = s(481060),
  _ = s(230711),
  E = s(419363),
  u = s(857595),
  T = s(607070),
  I = s(627845),
  S = s(786761),
  N = s(3148),
  C = s(739566),
  m = s(753206),
  A = s(440849),
  h = s(921801),
  g = s(196051),
  O = s(441729),
  p = s(285952),
  R = s(153124),
  x = s(626135),
  M = s(63063),
  D = s(695346),
  f = s(263937),
  P = s(996073),
  L = s(526761),
  Z = s(726985),
  b = s(981631),
  v = s(611480),
  j = s(653477),
  B = s(689938),
  U = s(412809),
  G = s(549856),
  F = s(328756);
let y = (0, R.hQ)(),
  V = (0, R.hQ)(),
  Y = (0, R.hQ)(),
  w = l().debounce(e => {
(0, u.o2)(e);
  }, 250),
  k = l().debounce(e => {
(0, g.Ct)(e);
  }, 250);

function H(e) {
  return (0, n.jsxs)(d.FormSection, {
tag: d.FormTitleTags.H1,
title: B.Z.Messages.ACCESSIBILITY,
children: [
  (0, n.jsx)('div', {
    className: G.marginBottom20,
    children: (0, n.jsx)(W, {})
  }),
  (0, n.jsxs)(h.F, {
    setting: Z.s6.ACCESSIBILITY_SATURATION,
    children: [
      (0, n.jsx)(K, {}),
      (0, n.jsx)(d.FormDivider, {})
    ]
  }),
  (0, n.jsx)(h.F, {
    setting: Z.s6.ACCESSIBILITY_LINK_DECORATIONS,
    children: (0, n.jsx)(z, {})
  }),
  (0, n.jsx)(h.F, {
    setting: Z.s6.ACCESSIBILITY_ROLE_STYLE,
    children: (0, n.jsx)(Q, {})
  }),
  (0, n.jsx)(h.F, {
    setting: Z.s6.ACCESSIBILITY_TAGS,
    children: (0, n.jsx)(X, {})
  }),
  (0, n.jsx)(h.F, {
    setting: Z.s6.ACCESSIBILITY_SYNC_PROFILE_THEME,
    children: (0, n.jsx)(q, {})
  }),
  (0, I.b)() ? (0, n.jsxs)(h.F, {
    setting: Z.s6.ACCESSIBILITY_CONTRAST,
    children: [
      (0, n.jsx)(J, {}),
      ' '
    ]
  }) : null,
  (0, n.jsx)(h.F, {
    setting: Z.s6.ACCESSIBILITY_REDUCED_MOTION,
    children: (0, n.jsx)($, {})
  }),
  (0, n.jsx)(h.F, {
    setting: Z.s6.ACCESSIBILITY_STICKERS,
    children: (0, n.jsx)(ee, {})
  }),
  (0, n.jsx)(h.F, {
    setting: Z.s6.ACCESSIBILITY_MESSAGES,
    children: (0, n.jsx)(et, {})
  }),
  (0, n.jsxs)(h.F, {
    setting: Z.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
    children: [
      (0, n.jsx)(es, {}),
      (0, n.jsx)(d.FormDivider, {})
    ]
  }),
  (0, n.jsx)(d.Text, {
    className: G.marginTop20,
    variant: 'text-md/normal',
    children: B.Z.Messages.ACCESSIBILITY_SETTINGS_APPEARANCE_LINK.format({
      onAppearanceClick() {
        _.Z.open(b.oAB.APPEARANCE);
      }
    })
  })
]
  });
}

function W() {
  let e = D.jU.useSetting(),
[t] = a.useState(() => {
  let e = (0, S.e5)({
    ...(0, N.ZP)({
      channelId: '1337',
      content: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_LINK_PREVIEW_MESSAGE.format({
        previewLink: 'https://discord.com/accessibility'
      })
    }),
    state: b.yb.SENT,
    id: ''.concat(0)
  });
  return e.colorString = 'green', e;
});
  return (0, n.jsx)(d.FocusBlock, {
children: (0, n.jsxs)(d.Card, {
  className: U.preview,
  'aria-hidden': !0,
  children: [
    (0, n.jsxs)('div', {
      className: U.previewHeader,
      children: [
        (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          color: d.Button.Colors.BRAND,
          children: B.Z.Messages.ACCESSIBILITY_EXAMPLE_BUTTON_LABEL
        }),
        (0, n.jsx)('div', {
          className: U.previewAvatars,
          children: [
            b.Skl.ONLINE,
            b.Skl.DND,
            b.Skl.IDLE
          ].map(e => (0, n.jsx)(d.AnimatedAvatar, {
            'aria-label': B.Z.Messages.USER_SETTINGS_AVATAR,
            src: F,
            size: d.AvatarSizes.SIZE_32,
            status: e
          }, e))
        })
      ]
    }),
    (0, n.jsx)('div', {
      className: U.previewMessage,
      children: (0, n.jsx)(m.Z, {
        compact: e,
        author: {
          ...(0, C.ZH)(t),
          colorString: '#DD80F4'
        },
        message: t
      })
    })
  ]
})
  });
}

function K() {
  let {
saturation: e,
desaturateUserColors: t
  } = (0, c.cj)([T.Z], () => ({
saturation: T.Z.saturation,
desaturateUserColors: T.Z.desaturateUserColors
  }));
  return (0, n.jsxs)(d.FormSection, {
className: G.marginTop20,
children: [
  (0, n.jsx)(d.FormTitle, {
    id: y,
    className: G.marginBottom8,
    children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
  }),
  (0, n.jsx)(d.FormText, {
    id: V,
    type: d.FormText.Types.DESCRIPTION,
    className: G.marginBottom20,
    children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_DESCRIPTION
  }),
  (0, n.jsx)(d.Slider, {
    'aria-labelledby': y,
    'aria-describedby': V,
    markers: b.yqN.SATURATION_INCREMENTS,
    equidistant: !0,
    stickToMarkers: !0,
    maxValue: 1,
    minValue: 0,
    initialValue: e,
    onValueChange: w,
    onMarkerRender: e => 100 * e % 2 == 0 ? ''.concat(100 * e, '%') : void 0
  }),
  (0, n.jsx)(d.FormSwitch, {
    hideBorder: !0,
    className: r()(G.marginTop8, G.marginBottom20),
    value: t,
    onChange: u.f1,
    note: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_DESCRIPTION,
    children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL
  })
]
  });
}

function z() {
  let e = (0, c.e7)([T.Z], () => T.Z.alwaysShowLinkDecorations);
  return (0, n.jsx)(d.FormItem, {
className: G.marginTop20,
children: (0, n.jsx)(d.FormSwitch, {
  note: B.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_NOTE,
  value: e,
  onChange: function() {
    (0, u.gs)(!e);
  },
  children: B.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL
})
  });
}

function Q() {
  let e = (0, c.e7)([T.Z], () => T.Z.roleStyle);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(d.FormItem, {
    title: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
    className: G.marginTop20,
    children: [
      (0, n.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        className: G.marginBottom8,
        children: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DESCRIPTION
      }),
      (0, n.jsx)(d.RadioGroup, {
        options: [{
            name: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
            value: 'username'
          },
          {
            name: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
            value: 'dot'
          },
          {
            name: B.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
            value: 'hidden'
          }
        ],
        onChange: function(e) {
          (0, u.u1)(e.value);
        },
        value: e
      })
    ]
  }),
  (0, n.jsx)(d.FormDivider, {
    className: G.marginTop20
  })
]
  });
}

function X() {
  let e = (0, c.e7)([T.Z], () => T.Z.hideTags);
  return (0, n.jsx)(d.FormItem, {
title: B.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
className: G.marginTop20,
children: (0, n.jsx)(d.FormSwitch, {
  value: !e,
  onChange: () => (0, u.Nv)(!e),
  children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL
})
  });
}

function q() {
  let e = (0, c.e7)([T.Z], () => T.Z.syncProfileThemeWithUserTheme),
t = a.useRef(null);
  return (0, P.Z)(t, L.rP.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, n.jsx)(d.FormItem, {
ref: t,
title: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
className: r()(G.marginTop20, U.syncProfileThemeWithUserTheme),
children: (0, n.jsx)(d.FormSwitch, {
  note: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_NOTE.format({
    onThemeClick() {
      _.Z.open(b.oAB.APPEARANCE);
    }
  }),
  className: G.marginTop20,
  value: e,
  onChange: u.Uv,
  children: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION
})
  });
}

function J() {
  let [e] = (0, c.Wu)([T.Z], () => [
T.Z.syncForcedColors,
T.Z.systemForcedColors
  ]), [t, s] = a.useState(e);
  a.useEffect(() => {
s(e);
  }, [e]);
  let i = a.useRef(null);
  a.useEffect(() => {
null != i.current && (clearTimeout(i.current), i.current = null), t !== e && (i.current = setTimeout(() => (0, u.qz)(t), 150));
  }, [
t,
e
  ]);
  let r = B.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_DESCRIPTION.format({
learnMoreLink: M.Z.getArticleURL(b.BhN.FORCED_COLORS)
  });
  return (0, n.jsx)(d.FormItem, {
title: B.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
className: G.marginTop20,
children: (0, n.jsx)(d.FormSwitch, {
  value: t,
  note: r,
  onChange: s,
  children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL
})
  });
}

function $() {
  let e = D.QK.useSetting(),
t = D.Yk.useSetting(),
{
  useReducedMotion: s,
  rawPrefersReducedMotion: i,
  systemPrefersReducedMotion: o,
  gifAutoPlayOverrideReason: l,
  animateEmojiOverrideReason: _
} = (0, c.cj)([
  T.Z,
  f.Z
], () => ({
  systemPrefersReducedMotion: T.Z.systemPrefersReducedMotion,
  rawPrefersReducedMotion: T.Z.rawPrefersReducedMotion,
  useReducedMotion: T.Z.useReducedMotion,
  gifAutoPlayOverrideReason: f.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
  animateEmojiOverrideReason: f.Z.getAppliedOverrideReasonKey('animateEmoji')
})),
E = a.useRef(null);
  (0, P.Z)(E, L.rP.REDUCED_MOTION);
  let I = a.useCallback((e, t) => {
  (0, u.Zt)(t ? 'auto' : o);
}, [o]),
S = a.useCallback(e => {
  (0, u.Zt)(e ? 'reduce' : 'no-preference');
}, []);
  return (0, n.jsxs)(d.FormItem, {
ref: E,
title: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
className: r()(G.marginTop20, U.reducedMotion),
children: [
  (0, n.jsx)(d.FormText, {
    type: d.FormText.Types.DESCRIPTION,
    className: G.marginBottom8,
    children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_DESCRIPTION.format({
      helpdeskArticle: M.Z.getArticleURL(b.BhN.REDUCED_MOTION)
    })
  }),
  (0, n.jsx)(d.Checkbox, {
    className: G.marginTop20,
    value: 'auto' === i,
    shape: d.Checkbox.Shapes.BOX,
    type: d.Checkbox.Types.INVERTED,
    onChange: I,
    children: (0, n.jsx)(d.Text, {
      variant: 'text-sm/normal',
      children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_AUTO
    })
  }),
  (0, n.jsx)(d.FormSwitch, {
    className: G.marginTop20,
    value: s,
    onChange: S,
    children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE
  }),
  (0, n.jsx)(d.FormSwitch, {
    className: G.marginBottom40,
    value: e,
    note: null != l ? (0, A.Z)(l) : void 0,
    onChange: D.QK.updateSetting,
    children: B.Z.Messages.GIF_AUTO_PLAY_LABEL
  }),
  (0, n.jsx)(d.FormSwitch, {
    className: r()(G.marginTop8, G.marginBottom20),
    value: t,
    note: null != _ ? (0, A.Z)(_) : void 0,
    onChange: D.Yk.updateSetting,
    children: B.Z.Messages.ANIMATE_EMOJI
  })
]
  });
}

function ee() {
  let e = D.Wp.useSetting(),
t = (0, c.e7)([f.Z], () => f.Z.getAppliedOverrideReasonKey('animateStickers')),
s = a.useCallback(e => {
  D.Wp.updateSetting(e.value);
}, []);
  return (0, n.jsxs)(d.FormItem, {
className: G.marginBottom40,
title: B.Z.Messages.STICKERS_AUTO_PLAY_HEADING,
children: [
  (0, n.jsx)(d.FormText, {
    type: d.FormText.Types.DESCRIPTION,
    className: G.marginBottom8,
    children: null != t ? (0, A.Z)(t) : B.Z.Messages.STICKERS_AUTO_PLAY_HELP
  }),
  (0, n.jsx)(d.RadioGroup, {
    options: [{
        name: B.Z.Messages.STICKERS_ALWAYS_ANIMATE,
        value: v.yr.ALWAYS_ANIMATE
      },
      {
        name: B.Z.Messages.STICKERS_ANIMATE_ON_INTERACTION,
        desc: B.Z.Messages.STICKERS_ANIMATE_ON_INTERACTION_DESCRIPTION,
        value: v.yr.ANIMATE_ON_INTERACTION
      },
      {
        name: B.Z.Messages.STICKERS_NEVER_ANIMATE,
        value: v.yr.NEVER_ANIMATE
      }
    ],
    onChange: s,
    value: e
  })
]
  });
}

function et() {
  let e = (0, c.e7)([T.Z], () => T.Z.isSubmitButtonEnabled),
t = D.dN.useSetting(),
s = a.useRef(null);
  return (0, P.Z)(s, L.rP.LEGACY_CHAT_INPUT), (0, n.jsxs)(d.FormItem, {
ref: s,
children: [
  (0, n.jsx)(d.FormTitle, {
    className: G.marginBottom8,
    children: B.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT
  }),
  (0, n.jsx)(d.FormSwitch, {
    className: G.marginTop20,
    value: e,
    onChange: u.eN,
    children: B.Z.Messages.DISPLAY_SUBMIT_BUTTON
  }),
  (0, n.jsx)(d.FormSwitch, {
    className: G.marginTop8,
    value: t,
    note: B.Z.Messages.LEGACY_CHAT_INPUT_DESCRIPTION,
    onChange: e => {
      x.default.track(b.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
        enabled: e,
        location: {
          section: b.jXE.SETTINGS_ACCESSIBILITY
        }
      }), D.dN.updateSetting(e);
    },
    children: B.Z.Messages.LEGACY_CHAT_INPUT
  })
]
  });
}

function es() {
  let e = D.OW.useSetting(),
t = (0, c.e7)([O.Z], () => O.Z.speechRate),
[s, i] = a.useState(!1);
  return E.Zh ? (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(d.FormItem, {
    children: [
      (0, n.jsx)(d.FormTitle, {
        className: G.marginBottom8,
        children: B.Z.Messages.FORM_LABEL_TTS
      }),
      (0, n.jsx)(d.FormSwitch, {
        className: G.marginTop20,
        value: e,
        onChange: D.OW.updateSetting,
        children: B.Z.Messages.ALLOW_TTS_COMMAND
      })
    ]
  }),
  (0, n.jsxs)(d.FormItem, {
    className: G.marginBottom20,
    children: [
      (0, n.jsx)(d.FormTitle, {
        id: Y,
        className: G.marginBottom20,
        children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
      }),
      (0, n.jsx)('div', {
        className: U.ttsPreviewWrapper,
        children: (0, n.jsx)(d.Button, {
          color: d.ButtonColors.BRAND,
          onClick: () => {
            if (s) {
              (0, g.NB)(), i(!1);
              return;
            }
            (0, g.cP)(B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_TEST, !0, void 0, () => i(!0), () => i(!1)), i(!0);
          },
          children: (0, n.jsxs)(p.Z, {
            align: p.Z.Align.CENTER,
            children: [
              s ? (0, n.jsx)(d.PauseIcon, {
                size: 'md',
                color: 'currentColor'
              }) : (0, n.jsx)(d.PlayIcon, {
                size: 'md',
                color: 'currentColor'
              }),
              (0, n.jsx)('span', {
                children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_PREVIEW
              }),
              (0, n.jsx)(d.HiddenVisually, {
                children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
              })
            ]
          })
        })
      }),
      (0, n.jsx)(d.Slider, {
        markers: j.q,
        initialValue: t,
        defaultValue: 1,
        stickToMarkers: !0,
        onValueChange: k,
        onValueRender: e => 'x'.concat(e.toFixed(2)),
        onMarkerRender: e => 0 === e ? (0, n.jsx)('span', {
          className: U.ttsSliderMarker,
          children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_SLOWER
        }) : 10 === e ? (0, n.jsx)('span', {
          className: U.ttsSliderMarker,
          children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_FASTER
        }) : 1 === e ? (0, n.jsx)('span', {
          children: 'x1.0'
        }) : e % 1 == 0 ? '' : void 0,
        'aria-labelledby': Y
      })
    ]
  })
]
  }) : null;
}