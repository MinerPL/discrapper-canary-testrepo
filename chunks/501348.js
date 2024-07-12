s.d(t, {
  Z: function() {
return q;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(704215),
  c = s(780384),
  d = s(481060),
  _ = s(153867),
  E = s(230711),
  u = s(714338),
  T = s(857595),
  I = s(607070),
  S = s(627845),
  N = s(514361),
  C = s(605236),
  m = s(786761),
  A = s(3148),
  h = s(739566),
  g = s(753206),
  O = s(837741),
  p = s(804545),
  R = s(921801),
  x = s(594174),
  M = s(285952),
  D = s(153124),
  f = s(358085),
  P = s(210887),
  L = s(740492),
  Z = s(695346),
  b = s(329013),
  v = s(333859),
  j = s(726985),
  B = s(981631),
  U = s(921944),
  G = s(959517),
  F = s(689938),
  y = s(704803),
  V = s(549856);

function Y(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let w = {
COZY: 'cozy',
COMPACT: 'compact'
  },
  k = (0, D.hQ)(),
  H = (0, D.hQ)(),
  W = (0, D.hQ)(),
  K = '1337',
  z = e => {
let t = 0;
return [
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: K,
      content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
    }),
    state: B.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: K,
      content: (0, c.wj)(e) ? F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
    }),
    state: B.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: K,
      content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
    }),
    state: B.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: K,
      content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
    }),
    state: B.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: K,
      content: F.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
    }),
    state: B.yb.SENT,
    id: ''.concat(t)
  })
];
  };
class Q extends a.Component {
  renderZoomSlider() {
return f.isPlatformEmbedded ? (0, n.jsxs)(d.FormItem, {
  className: V.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: k,
      tag: d.FormTitleTags.H5,
      className: V.marginBottom8,
      children: F.Z.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
    }),
    (0, n.jsx)(d.Slider, {
      className: r()(V.marginTop20, V.marginBottom4),
      initialValue: this.props.zoom,
      defaultValue: B.yqN.ZOOM_DEFAULT,
      markers: B.yqN.ZOOM_SCALES,
      stickToMarkers: !0,
      onValueChange: this.handleZoomChange,
      onValueRender: this.handleSliderRender,
      'aria-labelledby': k
    }),
    (0, n.jsx)(d.FormText, {
      type: d.FormText.Types.DESCRIPTION,
      children: F.Z.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
        modKey: u.Z.modKey
      })
    })
  ]
}) : null;
  }
  renderFontScaleSlider() {
return (0, n.jsxs)(d.FormItem, {
  className: V.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: H,
      tag: d.FormTitleTags.H5,
      className: V.marginBottom8,
      children: F.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
    }),
    (0, n.jsx)(M.Z, {
      align: M.Z.Align.CENTER,
      children: (0, n.jsx)(d.Slider, {
        className: r()(V.marginTop20, V.marginBottom4),
        initialValue: this.props.fontSize,
        defaultValue: B.yqN.FONT_SIZE_DEFAULT,
        markers: B.yqN.FONT_SIZES,
        stickToMarkers: !0,
        onValueChange: this.handleFontSizeChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        'aria-labelledby': H
      })
    })
  ]
});
  }
  renderMessageGroupSpacingSlider() {
let {
  messageDisplayCompact: e,
  messageGroupSpacing: t
} = this.props;
return (0, n.jsxs)(d.FormItem, {
  className: V.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: W,
      tag: d.FormTitleTags.H5,
      className: V.marginBottom8,
      children: F.Z.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
    }),
    (0, n.jsx)(d.Slider, {
      className: r()(V.marginTop20, V.marginBottom4),
      initialValue: t,
      defaultValue: e ? G.c8 : G.pq,
      markers: G.fP,
      stickToMarkers: !0,
      onValueChange: this.handleMessageSpacingChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText,
      'aria-labelledby': W
    })
  ]
});
  }
  renderPreview() {
let {
  messageDisplayCompact: e,
  theme: t,
  messageGroupSpacing: s,
  hideSimpleEmbedContent: a
} = this.props, i = (0, c.wj)(t) ? this.darkMessages : this.lightMessages;
return (0, n.jsx)(d.FocusBlock, {
  children: (0, n.jsx)(d.Card, {
    className: r()(y.preview, V.marginBottom40, e ? y.compactPreview : void 0, 'group-spacing-'.concat(null != s ? s : e ? G.c8 : G.pq)),
    outline: !0,
    'aria-hidden': !0,
    children: i.map((t, s) => (0, n.jsx)(g.Z, {
      author: (0, h.ZH)(t),
      message: t,
      compact: e,
      isGroupStart: s % 2 == 0,
      className: 0 === s ? y.firstMessage : void 0,
      hideSimpleEmbedContent: a
    }, t.id))
  })
});
  }
  renderTheme() {
let {
  theme: e,
  useForcedColors: t,
  darkSidebar: s,
  gradientPreset: a
} = this.props;
return t ? (0, n.jsx)(d.FormItem, {
  className: r()(V.marginTop8, V.marginBottom40),
  title: (0, n.jsx)('div', {
    className: y.themeTitle,
    children: (0, n.jsx)('div', {
      className: y.title,
      children: F.Z.Messages.THEME
    })
  }),
  children: (0, n.jsx)(d.FormText, {
    type: d.FormText.Types.DEFAULT,
    className: y.forcedColorsWarning,
    children: (0, S.b)() ? F.Z.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
      onClick: () => {
        E.Z.open(B.oAB.ACCESSIBILITY);
      }
    }) : F.Z.Messages.THEME_DISABLED_FOR_FORCED_COLORS
  })
}) : (0, n.jsxs)(d.FormItem, {
  className: V.marginTop8,
  title: (0, n.jsxs)('div', {
    className: y.themeTitle,
    children: [
      (0, n.jsx)('div', {
        className: y.title,
        children: F.Z.Messages.THEME
      }),
      (0, n.jsx)(b.g, {})
    ]
  }),
  children: [
    (0, n.jsx)(b.i, {}),
    (0, n.jsx)(R.F, {
      setting: j.s6.APPEARANCE_ICON,
      children: (0, n.jsx)(v.c, {})
    }),
    (0, n.jsx)(d.FormSwitch, {
      value: s && (0, c.ap)(e) && !t,
      disabled: e !== B.BRd.LIGHT || t || null != a,
      onChange: this.handleDarkSidebarChecked,
      className: V.marginTop20,
      children: F.Z.Messages.ACCESSIBILITY_DARK_SIDEBAR
    })
  ]
});
  }
  renderDisplayMode() {
return (0, n.jsxs)(d.FormItem, {
  title: F.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL,
  className: V.marginTop8,
  children: [
    (0, n.jsx)(d.RadioGroup, {
      options: [{
          name: F.Z.Messages.COZY_MODE,
          value: w.COZY
        },
        {
          name: F.Z.Messages.COMPACT_MODE,
          value: w.COMPACT
        }
      ],
      onChange: this.handleMessageDisplayModeChange,
      value: this.props.messageDisplayCompact ? w.COMPACT : w.COZY
    }),
    (0, n.jsx)(d.FormSwitch, {
      value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
      disabled: !this.props.messageDisplayCompact,
      onChange: this.handleDisplayCompactAvatarsChanged,
      className: V.marginTop20,
      children: F.Z.Messages.DISPLAY_COMPACT_AVATARS
    })
  ]
});
  }
  handleDarkSidebarChecked() {
(0, T.lq)();
  }
  renderScalingAndSpacing() {
return (0, n.jsxs)(n.Fragment, {
  children: [
    this.renderFontScaleSlider(),
    this.renderMessageGroupSpacingSlider(),
    this.renderZoomSlider(),
    (0, n.jsx)(d.FormDivider, {
      className: V.marginTop20
    })
  ]
});
  }
  render() {
return (0, n.jsxs)(d.FormSection, {
  tag: d.FormTitleTags.H1,
  title: F.Z.Messages.APPEARANCE,
  children: [
    (0, n.jsxs)(R.F, {
      setting: j.s6.APPEARANCE_THEME,
      children: [
        this.renderPreview(),
        this.renderTheme()
      ]
    }),
    (0, n.jsx)(R.F, {
      setting: j.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: this.renderDisplayMode()
    }),
    (0, n.jsx)(R.F, {
      setting: j.s6.APPEARANCE_SCALING_SPACING,
      children: this.renderScalingAndSpacing()
    }),
    (0, n.jsx)(d.Text, {
      variant: 'text-md/normal',
      className: V.marginTop20,
      children: F.Z.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
        onAccessibilityClick() {
          E.Z.open(B.oAB.ACCESSIBILITY);
        }
      })
    })
  ]
});
  }
  handleSliderRender(e) {
return ''.concat(e.toFixed(0), '%');
  }
  handleSliderRenderPX(e) {
return ''.concat(e.toFixed(0), 'px');
  }
  handleSliderValueText(e) {
return F.Z.Messages.PIXEL_VALUE_A11Y_TEXT.format({
  value: e
});
  }
  handleFontSizeChange(e) {
(0, T.oL)(e);
  }
  handleMessageSpacingChange(e) {
switch (e) {
  case 0:
  case 4:
  case 8:
  case 16:
  case 24:
    (0, T.ZZ)(e);
}
  }
  handleZoomChange(e) {
(0, T.cq)(e);
  }
  constructor(...e) {
super(...e), Y(this, 'darkMessages', z(B.BRd.DARK)), Y(this, 'lightMessages', z(B.BRd.LIGHT)), Y(this, 'handleDisplayCompactAvatarsChanged', e => {
  _.ZP.updatedUnsyncedSettings({
    displayCompactAvatars: e
  });
}), Y(this, 'handleMessageDisplayModeChange', e => {
  let {
    value: t
  } = e;
  Z.jU.updateSetting(t === w.COMPACT), (0, T.ZZ)();
});
  }
}
let X = e => {
  !(0, C.un)(e) && (0, C.EW)(e, {
dismissAction: U.L.AUTO,
forceTrack: !0
  });
};

function q() {
  let e = Z.jU.useSetting(),
t = Z.RS.useSetting(),
s = Z.NA.useSetting(),
i = Z.L1.useSetting(),
r = 'UserSettingsAppearance',
{
  enabled: c
} = (0, O.J)({
  location: r
}),
{
  enabled: d
} = (0, p._)({
  location: r
});
  a.useEffect(() => {
X(l.z.CLIENT_THEMES_SETTINGS_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), c && X(l.z.BRAND_REFRESH_NEW_BADGE), d && X(l.z.PRIDE_ICONS_APPEARANCE_BADGE);
  }, []);
  let _ = (0, o.cj)([
P.Z,
L.ZP,
I.Z,
x.default,
N.Z
  ], () => {
var e, t;
return {
  theme: P.Z.theme,
  useForcedColors: I.Z.useForcedColors,
  useSystemTheme: L.ZP.useSystemTheme,
  darkSidebar: P.Z.darkSidebar,
  fontSize: I.Z.fontSize,
  zoom: I.Z.zoom,
  messageGroupSpacing: I.Z.messageGroupSpacing,
  displayCompactAvatars: L.ZP.displayCompactAvatars,
  isStaff: null !== (t = null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
  gradientPreset: N.Z.gradientPreset
};
  });
  return (0, n.jsx)(Q, {
messageDisplayCompact: e,
hideSimpleEmbedContent: t && s,
clientTheme: i,
..._
  });
}