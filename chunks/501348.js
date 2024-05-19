"use strict";
s.r(t), s.d(t, {
  default: function() {
    return q
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("524437"),
  d = s("780384"),
  u = s("481060"),
  c = s("153867"),
  S = s("230711"),
  E = s("714338"),
  T = s("857595"),
  f = s("607070"),
  _ = s("627845"),
  m = s("514361"),
  g = s("605236"),
  I = s("786761"),
  h = s("3148"),
  N = s("739566"),
  p = s("753206"),
  C = s("837741"),
  A = s("804545"),
  O = s("594174"),
  x = s("285952"),
  R = s("153124"),
  M = s("358085"),
  v = s("210887"),
  L = s("740492"),
  D = s("695346"),
  P = s("329013"),
  j = s("333859"),
  b = s("981631"),
  U = s("921944"),
  y = s("959517"),
  B = s("689938"),
  G = s("471264"),
  F = s("611273");

function k(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let w = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  H = (0, R.uid)(),
  V = (0, R.uid)(),
  Y = (0, R.uid)(),
  W = "1337",
  K = e => {
    let t = 0;
    return [(0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: W,
        content: B.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
      }),
      state: b.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: W,
        content: (0, d.isThemeDark)(e) ? B.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : B.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
      }),
      state: b.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: W,
        content: B.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
      }),
      state: b.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: W,
        content: B.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
      }),
      state: b.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, I.createMessageRecord)({
      ...(0, h.default)({
        channelId: W,
        content: B.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
      }),
      state: b.MessageStates.SENT,
      id: "".concat(t)
    })]
  };
class z extends n.Component {
  renderZoomSlider() {
    return M.isPlatformEmbedded ? (0, a.jsxs)(u.FormItem, {
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: H,
        tag: u.FormTitleTags.H5,
        className: F.marginBottom8,
        children: B.default.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
      }), (0, a.jsx)(u.Slider, {
        className: i()(F.marginTop20, F.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: b.Accessibility.ZOOM_DEFAULT,
        markers: b.Accessibility.ZOOM_SCALES,
        stickToMarkers: !0,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": H
      }), (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        children: B.default.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
          modKey: E.default.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, a.jsxs)(u.FormItem, {
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: V,
        tag: u.FormTitleTags.H5,
        className: F.marginBottom8,
        children: B.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
      }), (0, a.jsx)(x.default, {
        align: x.default.Align.CENTER,
        children: (0, a.jsx)(u.Slider, {
          className: i()(F.marginTop20, F.marginBottom4),
          initialValue: this.props.fontSize,
          defaultValue: b.Accessibility.FONT_SIZE_DEFAULT,
          markers: b.Accessibility.FONT_SIZES,
          stickToMarkers: !0,
          onValueChange: this.handleFontSizeChange,
          onValueRender: this.handleSliderRenderPX,
          onMarkerRender: this.handleSliderRenderPX,
          getAriaValueText: this.handleSliderValueText,
          "aria-labelledby": V
        })
      })]
    })
  }
  renderMessageGroupSpacingSlider() {
    let {
      messageDisplayCompact: e,
      messageGroupSpacing: t
    } = this.props;
    return (0, a.jsxs)(u.FormItem, {
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: Y,
        tag: u.FormTitleTags.H5,
        className: F.marginBottom8,
        children: B.default.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
      }), (0, a.jsx)(u.Slider, {
        className: i()(F.marginTop20, F.marginBottom4),
        initialValue: t,
        defaultValue: e ? y.DEFAULT_COMPACT_SPACING : y.DEFAULT_COZY_SPACING,
        markers: y.MESSAGE_GROUP_SPACING,
        stickToMarkers: !0,
        onValueChange: this.handleMessageSpacingChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        "aria-labelledby": Y
      })]
    })
  }
  renderPreview() {
    let {
      messageDisplayCompact: e,
      theme: t,
      messageGroupSpacing: s,
      hideSimpleEmbedContent: n
    } = this.props, l = (0, d.isThemeDark)(t) ? this.darkMessages : this.lightMessages;
    return (0, a.jsx)(u.FocusBlock, {
      children: (0, a.jsx)(u.Card, {
        className: i()(G.preview, F.marginBottom40, e ? G.compactPreview : void 0, "group-spacing-".concat(null != s ? s : e ? y.DEFAULT_COMPACT_SPACING : y.DEFAULT_COZY_SPACING)),
        outline: !0,
        "aria-hidden": !0,
        children: l.map((t, s) => (0, a.jsx)(p.default, {
          author: (0, N.getMessageAuthor)(t),
          message: t,
          compact: e,
          isGroupStart: s % 2 == 0,
          className: 0 === s ? G.firstMessage : void 0,
          hideSimpleEmbedContent: n
        }, t.id))
      })
    })
  }
  renderTheme() {
    let {
      theme: e,
      useForcedColors: t,
      darkSidebar: s,
      gradientPreset: n
    } = this.props;
    return t ? (0, a.jsx)(u.FormItem, {
      className: i()(F.marginTop8, F.marginBottom40),
      title: (0, a.jsx)("div", {
        className: G.themeTitle,
        children: (0, a.jsx)("div", {
          className: G.title,
          children: B.default.Messages.THEME
        })
      }),
      children: (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DEFAULT,
        className: G.forcedColorsWarning,
        children: (0, _.canEnableForcedColors)() ? B.default.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
          onClick: () => {
            S.default.open(b.UserSettingsSections.ACCESSIBILITY)
          }
        }) : B.default.Messages.THEME_DISABLED_FOR_FORCED_COLORS
      })
    }) : (0, a.jsxs)(u.FormItem, {
      className: F.marginTop8,
      title: (0, a.jsxs)("div", {
        className: G.themeTitle,
        children: [(0, a.jsx)("div", {
          className: G.title,
          children: B.default.Messages.THEME
        }), (0, a.jsx)(P.ClientThemesSidebarButton, {})]
      }),
      children: [(0, a.jsx)(P.UserSettingsAppearanceClientThemes, {}), (0, a.jsx)(j.UserSettingsAppearanceInAppIcon, {}), (0, a.jsx)(u.FormSwitch, {
        value: s && (0, d.isThemeLight)(e) && !t,
        disabled: e !== b.ThemeTypes.LIGHT || t || null != n,
        onChange: this.handleDarkSidebarChecked,
        className: F.marginTop20,
        children: B.default.Messages.ACCESSIBILITY_DARK_SIDEBAR
      })]
    })
  }
  renderDisplayMode() {
    return (0, a.jsxs)(u.FormItem, {
      title: B.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
      className: F.marginTop8,
      children: [(0, a.jsx)(u.RadioGroup, {
        options: [{
          name: B.default.Messages.COZY_MODE,
          value: w.COZY
        }, {
          name: B.default.Messages.COMPACT_MODE,
          value: w.COMPACT
        }],
        onChange: this.handleMessageDisplayModeChange,
        value: this.props.messageDisplayCompact ? w.COMPACT : w.COZY
      }), (0, a.jsx)(u.FormSwitch, {
        value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
        disabled: !this.props.messageDisplayCompact,
        onChange: this.handleDisplayCompactAvatarsChanged,
        className: F.marginTop20,
        children: B.default.Messages.DISPLAY_COMPACT_AVATARS
      })]
    })
  }
  handleDarkSidebarChecked() {
    (0, T.toggleDarkSidebar)()
  }
  renderScalingAndSpacing() {
    return (0, a.jsxs)(a.Fragment, {
      children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, a.jsx)(u.FormDivider, {
        className: F.marginTop20
      })]
    })
  }
  render() {
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: B.default.Messages.APPEARANCE,
      children: [this.renderPreview(), this.renderTheme(), this.renderDisplayMode(), this.renderScalingAndSpacing(), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        className: F.marginTop20,
        children: B.default.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
          onAccessibilityClick() {
            S.default.open(b.UserSettingsSections.ACCESSIBILITY)
          }
        })
      })]
    })
  }
  handleSliderRender(e) {
    return "".concat(e.toFixed(0), "%")
  }
  handleSliderRenderPX(e) {
    return "".concat(e.toFixed(0), "px")
  }
  handleSliderValueText(e) {
    return B.default.Messages.PIXEL_VALUE_A11Y_TEXT.format({
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, T.setFontSize)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, T.setMessageGroupSpacing)(e)
    }
  }
  handleZoomChange(e) {
    (0, T.setZoom)(e)
  }
  constructor(...e) {
    super(...e), k(this, "darkMessages", K(b.ThemeTypes.DARK)), k(this, "lightMessages", K(b.ThemeTypes.LIGHT)), k(this, "handleDisplayCompactAvatarsChanged", e => {
      c.default.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), k(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      D.MessageDisplayCompact.updateSetting(t === w.COMPACT), (0, T.setMessageGroupSpacing)()
    })
  }
}
let Q = e => {
  !(0, g.isDismissibleContentDismissed)(e) && (0, g.markDismissibleContentAsDismissed)(e, {
    dismissAction: U.ContentDismissActionType.AUTO,
    forceTrack: !0
  })
};

function q() {
  let e = D.MessageDisplayCompact.useSetting(),
    t = D.InlineEmbedMedia.useSetting(),
    s = D.RenderEmbeds.useSetting(),
    l = D.ClientThemeSettings.useSetting(),
    i = "UserSettingsAppearance",
    {
      enabled: d
    } = (0, C.useBrandRefreshPerksExperiment)({
      location: i
    }),
    {
      enabled: u
    } = (0, A.usePrideMonthPerksExperiment)({
      location: i
    });
  n.useEffect(() => {
    Q(o.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE), Q(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE), Q(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), d && Q(o.DismissibleContent.BRAND_REFRESH_NEW_BADGE), u && Q(o.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE)
  }, []);
  let c = (0, r.useStateFromStoresObject)([v.default, L.default, f.default, O.default, m.default], () => {
    var e, t;
    return {
      theme: v.default.theme,
      useForcedColors: f.default.useForcedColors,
      useSystemTheme: L.default.useSystemTheme,
      darkSidebar: v.default.darkSidebar,
      fontSize: f.default.fontSize,
      zoom: f.default.zoom,
      messageGroupSpacing: f.default.messageGroupSpacing,
      displayCompactAvatars: L.default.displayCompactAvatars,
      isStaff: null !== (t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
      gradientPreset: m.default.gradientPreset
    }
  });
  return (0, a.jsx)(z, {
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && s,
    clientTheme: l,
    ...c
  })
}