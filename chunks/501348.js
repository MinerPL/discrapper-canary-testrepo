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
  g = s(739566),
  h = s(753206),
  O = s(311476),
  p = s(921801),
  R = s(594174),
  x = s(285952),
  M = s(153124),
  f = s(358085),
  D = s(210887),
  P = s(740492),
  L = s(695346),
  b = s(329013),
  Z = s(333859),
  v = s(726985),
  j = s(981631),
  B = s(921944),
  U = s(959517),
  G = s(689938),
  F = s(704803),
  y = s(549856);

function V(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let Y = {
COZY: 'cozy',
COMPACT: 'compact'
  },
  w = (0, M.hQ)(),
  k = (0, M.hQ)(),
  H = (0, M.hQ)(),
  W = '1337',
  K = e => {
let t = 0;
return [
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: W,
      content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
    }),
    state: j.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: W,
      content: (0, c.wj)(e) ? G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
    }),
    state: j.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: W,
      content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
    }),
    state: j.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: W,
      content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
    }),
    state: j.yb.SENT,
    id: ''.concat(t++)
  }),
  (0, m.e5)({
    ...(0, A.ZP)({
      channelId: W,
      content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
    }),
    state: j.yb.SENT,
    id: ''.concat(t)
  })
];
  },
  z = () => {
let e = (0, o.e7)([N.Z], () => N.Z.isPreview),
  {
    enabled: t
  } = O.Z.useExperiment({
    location: 'GradientSelectorsTitle'
  }, {
    autoTrackExposure: !1,
    disable: !e
  });
return t ? null : (0, n.jsxs)('div', {
  className: F.themeTitle,
  children: [
    (0, n.jsx)('div', {
      className: F.title,
      children: G.Z.Messages.THEME
    }),
    (0, n.jsx)(b.g, {})
  ]
});
  };
class Q extends a.Component {
  renderZoomSlider() {
return f.isPlatformEmbedded ? (0, n.jsxs)(d.FormItem, {
  className: y.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: w,
      tag: d.FormTitleTags.H5,
      className: y.marginBottom8,
      children: G.Z.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
    }),
    (0, n.jsx)(d.Slider, {
      className: r()(y.marginTop20, y.marginBottom4),
      initialValue: this.props.zoom,
      defaultValue: j.yqN.ZOOM_DEFAULT,
      markers: j.yqN.ZOOM_SCALES,
      stickToMarkers: !0,
      onValueChange: this.handleZoomChange,
      onValueRender: this.handleSliderRender,
      'aria-labelledby': w
    }),
    (0, n.jsx)(d.FormText, {
      type: d.FormText.Types.DESCRIPTION,
      children: G.Z.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
        modKey: u.Z.modKey
      })
    })
  ]
}) : null;
  }
  renderFontScaleSlider() {
return (0, n.jsxs)(d.FormItem, {
  className: y.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: k,
      tag: d.FormTitleTags.H5,
      className: y.marginBottom8,
      children: G.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
    }),
    (0, n.jsx)(x.Z, {
      align: x.Z.Align.CENTER,
      children: (0, n.jsx)(d.Slider, {
        className: r()(y.marginTop20, y.marginBottom4),
        initialValue: this.props.fontSize,
        defaultValue: j.yqN.FONT_SIZE_DEFAULT,
        markers: j.yqN.FONT_SIZES,
        stickToMarkers: !0,
        onValueChange: this.handleFontSizeChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        'aria-labelledby': k
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
  className: y.marginTop20,
  children: [
    (0, n.jsx)(d.FormTitle, {
      id: H,
      tag: d.FormTitleTags.H5,
      className: y.marginBottom8,
      children: G.Z.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
    }),
    (0, n.jsx)(d.Slider, {
      className: r()(y.marginTop20, y.marginBottom4),
      initialValue: t,
      defaultValue: e ? U.c8 : U.pq,
      markers: U.fP,
      stickToMarkers: !0,
      onValueChange: this.handleMessageSpacingChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText,
      'aria-labelledby': H
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
    className: r()(F.preview, y.marginBottom40, e ? F.compactPreview : void 0, 'group-spacing-'.concat(null != s ? s : e ? U.c8 : U.pq)),
    outline: !0,
    'aria-hidden': !0,
    children: i.map((t, s) => (0, n.jsx)(h.Z, {
      author: (0, g.ZH)(t),
      message: t,
      compact: e,
      isGroupStart: s % 2 == 0,
      className: 0 === s ? F.firstMessage : void 0,
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
  className: r()(y.marginTop8, y.marginBottom40),
  title: (0, n.jsx)('div', {
    className: F.themeTitle,
    children: (0, n.jsx)('div', {
      className: F.title,
      children: G.Z.Messages.THEME
    })
  }),
  children: (0, n.jsx)(d.FormText, {
    type: d.FormText.Types.DEFAULT,
    className: F.forcedColorsWarning,
    children: (0, S.b)() ? G.Z.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
      onClick: () => {
        E.Z.open(j.oAB.ACCESSIBILITY);
      }
    }) : G.Z.Messages.THEME_DISABLED_FOR_FORCED_COLORS
  })
}) : (0, n.jsxs)(d.FormItem, {
  className: y.marginTop8,
  title: (0, n.jsx)(z, {}),
  children: [
    (0, n.jsx)(b.i, {}),
    (0, n.jsx)(p.F, {
      setting: v.s6.APPEARANCE_ICON,
      children: (0, n.jsx)(Z.c, {})
    }),
    (0, n.jsx)(d.FormSwitch, {
      value: s && (0, c.ap)(e) && !t,
      disabled: e !== j.BRd.LIGHT || t || null != a,
      onChange: this.handleDarkSidebarChecked,
      className: y.marginTop20,
      children: G.Z.Messages.ACCESSIBILITY_DARK_SIDEBAR
    })
  ]
});
  }
  renderDisplayMode() {
return (0, n.jsxs)(d.FormItem, {
  title: G.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL,
  className: y.marginTop8,
  children: [
    (0, n.jsx)(d.RadioGroup, {
      options: [{
          name: G.Z.Messages.COZY_MODE,
          value: Y.COZY
        },
        {
          name: G.Z.Messages.COMPACT_MODE,
          value: Y.COMPACT
        }
      ],
      onChange: this.handleMessageDisplayModeChange,
      value: this.props.messageDisplayCompact ? Y.COMPACT : Y.COZY
    }),
    (0, n.jsx)(d.FormSwitch, {
      value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
      disabled: !this.props.messageDisplayCompact,
      onChange: this.handleDisplayCompactAvatarsChanged,
      className: y.marginTop20,
      children: G.Z.Messages.DISPLAY_COMPACT_AVATARS
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
      className: y.marginTop20
    })
  ]
});
  }
  render() {
return (0, n.jsxs)(d.FormSection, {
  tag: d.FormTitleTags.H1,
  title: G.Z.Messages.APPEARANCE,
  children: [
    (0, n.jsxs)(p.F, {
      setting: v.s6.APPEARANCE_THEME,
      children: [
        this.renderPreview(),
        this.renderTheme()
      ]
    }),
    (0, n.jsx)(p.F, {
      setting: v.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: this.renderDisplayMode()
    }),
    (0, n.jsx)(p.F, {
      setting: v.s6.APPEARANCE_SCALING_SPACING,
      children: this.renderScalingAndSpacing()
    }),
    (0, n.jsx)(d.Text, {
      variant: 'text-md/normal',
      className: y.marginTop20,
      children: G.Z.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
        onAccessibilityClick() {
          E.Z.open(j.oAB.ACCESSIBILITY);
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
return G.Z.Messages.PIXEL_VALUE_A11Y_TEXT.format({
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
super(...e), V(this, 'darkMessages', K(j.BRd.DARK)), V(this, 'lightMessages', K(j.BRd.LIGHT)), V(this, 'handleDisplayCompactAvatarsChanged', e => {
  _.ZP.updatedUnsyncedSettings({
    displayCompactAvatars: e
  });
}), V(this, 'handleMessageDisplayModeChange', e => {
  let {
    value: t
  } = e;
  L.jU.updateSetting(t === Y.COMPACT), (0, T.ZZ)();
});
  }
}
let X = e => {
  !(0, C.un)(e) && (0, C.EW)(e, {
dismissAction: B.L.AUTO,
forceTrack: !0
  });
};

function q() {
  let e = L.jU.useSetting(),
t = L.RS.useSetting(),
s = L.NA.useSetting(),
i = L.L1.useSetting();
  a.useEffect(() => {
X(l.z.CLIENT_THEMES_SETTINGS_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
  }, []);
  let r = (0, o.cj)([
D.Z,
P.ZP,
I.Z,
R.default,
N.Z
  ], () => {
var e, t;
return {
  theme: D.Z.theme,
  useForcedColors: I.Z.useForcedColors,
  useSystemTheme: P.ZP.useSystemTheme,
  darkSidebar: D.Z.darkSidebar,
  fontSize: I.Z.fontSize,
  zoom: I.Z.zoom,
  messageGroupSpacing: I.Z.messageGroupSpacing,
  displayCompactAvatars: P.ZP.displayCompactAvatars,
  isStaff: null !== (t = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
  gradientPreset: N.Z.gradientPreset
};
  });
  return (0, n.jsx)(Q, {
messageDisplayCompact: e,
hideSimpleEmbedContent: t && s,
clientTheme: i,
...r
  });
}