"use strict";
s.r(t), s.d(t, {
  default: function() {
    return W
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("524437"),
  d = s("780384"),
  u = s("481060"),
  c = s("153867"),
  S = s("230711"),
  E = s("714338"),
  T = s("857595"),
  _ = s("607070"),
  f = s("627845"),
  m = s("514361"),
  g = s("605236"),
  h = s("786761"),
  N = s("3148"),
  I = s("739566"),
  p = s("753206"),
  C = s("594174"),
  A = s("285952"),
  O = s("153124"),
  x = s("358085"),
  R = s("210887"),
  M = s("740492"),
  v = s("695346"),
  D = s("329013"),
  L = s("333859"),
  P = s("981631"),
  j = s("921944"),
  b = s("959517"),
  U = s("689938"),
  y = s("357196"),
  B = s("794711");

function F(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let G = {
    COZY: "cozy",
    COMPACT: "compact"
  },
  k = (0, O.uid)(),
  H = (0, O.uid)(),
  w = (0, O.uid)(),
  V = "1337",
  Y = e => {
    let t = 0;
    return [(0, h.createMessageRecord)({
      ...(0, N.default)({
        channelId: V,
        content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
      }),
      state: P.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, h.createMessageRecord)({
      ...(0, N.default)({
        channelId: V,
        content: (0, d.isThemeDark)(e) ? U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
      }),
      state: P.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, h.createMessageRecord)({
      ...(0, N.default)({
        channelId: V,
        content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
      }),
      state: P.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, h.createMessageRecord)({
      ...(0, N.default)({
        channelId: V,
        content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
      }),
      state: P.MessageStates.SENT,
      id: "".concat(t++)
    }), (0, h.createMessageRecord)({
      ...(0, N.default)({
        channelId: V,
        content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
      }),
      state: P.MessageStates.SENT,
      id: "".concat(t)
    })]
  };
class K extends n.Component {
  renderZoomSlider() {
    return x.isPlatformEmbedded ? (0, a.jsxs)(u.FormItem, {
      className: B.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: k,
        tag: u.FormTitleTags.H5,
        className: B.marginBottom8,
        children: U.default.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
      }), (0, a.jsx)(u.Slider, {
        className: i()(B.marginTop20, B.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: P.Accessibility.ZOOM_DEFAULT,
        markers: P.Accessibility.ZOOM_SCALES,
        stickToMarkers: !0,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": k
      }), (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        children: U.default.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
          modKey: E.default.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, a.jsxs)(u.FormItem, {
      className: B.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: H,
        tag: u.FormTitleTags.H5,
        className: B.marginBottom8,
        children: U.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
      }), (0, a.jsx)(A.default, {
        align: A.default.Align.CENTER,
        children: (0, a.jsx)(u.Slider, {
          className: i()(B.marginTop20, B.marginBottom4),
          initialValue: this.props.fontSize,
          defaultValue: P.Accessibility.FONT_SIZE_DEFAULT,
          markers: P.Accessibility.FONT_SIZES,
          stickToMarkers: !0,
          onValueChange: this.handleFontSizeChange,
          onValueRender: this.handleSliderRenderPX,
          onMarkerRender: this.handleSliderRenderPX,
          getAriaValueText: this.handleSliderValueText,
          "aria-labelledby": H
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
      className: B.marginTop20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: w,
        tag: u.FormTitleTags.H5,
        className: B.marginBottom8,
        children: U.default.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
      }), (0, a.jsx)(u.Slider, {
        className: i()(B.marginTop20, B.marginBottom4),
        initialValue: t,
        defaultValue: e ? b.DEFAULT_COMPACT_SPACING : b.DEFAULT_COZY_SPACING,
        markers: b.MESSAGE_GROUP_SPACING,
        stickToMarkers: !0,
        onValueChange: this.handleMessageSpacingChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        "aria-labelledby": w
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
        className: i()(y.preview, B.marginBottom40, e ? y.compactPreview : void 0, "group-spacing-".concat(null != s ? s : e ? b.DEFAULT_COMPACT_SPACING : b.DEFAULT_COZY_SPACING)),
        outline: !0,
        "aria-hidden": !0,
        children: l.map((t, s) => (0, a.jsx)(p.default, {
          author: (0, I.getMessageAuthor)(t),
          message: t,
          compact: e,
          isGroupStart: s % 2 == 0,
          className: 0 === s ? y.firstMessage : void 0,
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
      className: i()(B.marginTop8, B.marginBottom40),
      title: (0, a.jsx)("div", {
        className: y.themeTitle,
        children: (0, a.jsx)("div", {
          className: y.title,
          children: U.default.Messages.THEME
        })
      }),
      children: (0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DEFAULT,
        className: y.forcedColorsWarning,
        children: (0, f.canEnableForcedColors)() ? U.default.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
          onClick: () => {
            S.default.open(P.UserSettingsSections.ACCESSIBILITY)
          }
        }) : U.default.Messages.THEME_DISABLED_FOR_FORCED_COLORS
      })
    }) : (0, a.jsxs)(u.FormItem, {
      className: B.marginTop8,
      title: (0, a.jsxs)("div", {
        className: y.themeTitle,
        children: [(0, a.jsx)("div", {
          className: y.title,
          children: U.default.Messages.THEME
        }), (0, a.jsx)(D.ClientThemesSidebarButton, {})]
      }),
      children: [(0, a.jsx)(D.UserSettingsAppearanceClientThemes, {}), (0, a.jsx)(L.UserSettingsAppearanceInAppIcon, {}), (0, a.jsx)(u.FormSwitch, {
        value: s && (0, d.isThemeLight)(e) && !t,
        disabled: e !== P.ThemeTypes.LIGHT || t || null != n,
        onChange: this.handleDarkSidebarChecked,
        className: B.marginTop20,
        children: U.default.Messages.ACCESSIBILITY_DARK_SIDEBAR
      })]
    })
  }
  renderDisplayMode() {
    return (0, a.jsxs)(u.FormItem, {
      title: U.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
      className: B.marginTop8,
      children: [(0, a.jsx)(u.RadioGroup, {
        options: [{
          name: U.default.Messages.COZY_MODE,
          value: G.COZY
        }, {
          name: U.default.Messages.COMPACT_MODE,
          value: G.COMPACT
        }],
        onChange: this.handleMessageDisplayModeChange,
        value: this.props.messageDisplayCompact ? G.COMPACT : G.COZY
      }), (0, a.jsx)(u.FormSwitch, {
        value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
        disabled: !this.props.messageDisplayCompact,
        onChange: this.handleDisplayCompactAvatarsChanged,
        className: B.marginTop20,
        children: U.default.Messages.DISPLAY_COMPACT_AVATARS
      })]
    })
  }
  handleDarkSidebarChecked() {
    (0, T.toggleDarkSidebar)()
  }
  renderScalingAndSpacing() {
    return (0, a.jsxs)(a.Fragment, {
      children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, a.jsx)(u.FormDivider, {
        className: B.marginTop20
      })]
    })
  }
  render() {
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: U.default.Messages.APPEARANCE,
      children: [this.renderPreview(), this.renderTheme(), this.renderDisplayMode(), this.renderScalingAndSpacing(), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        className: B.marginTop20,
        children: U.default.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
          onAccessibilityClick() {
            S.default.open(P.UserSettingsSections.ACCESSIBILITY)
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
    return U.default.Messages.PIXEL_VALUE_A11Y_TEXT.format({
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
    super(...e), F(this, "darkMessages", Y(P.ThemeTypes.DARK)), F(this, "lightMessages", Y(P.ThemeTypes.LIGHT)), F(this, "handleDisplayCompactAvatarsChanged", e => {
      c.default.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), F(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      v.MessageDisplayCompact.updateSetting(t === G.COMPACT), (0, T.setMessageGroupSpacing)()
    })
  }
}

function W() {
  let e = v.MessageDisplayCompact.useSetting(),
    t = v.InlineEmbedMedia.useSetting(),
    s = v.RenderEmbeds.useSetting(),
    l = v.ClientThemeSettings.useSetting();
  n.useEffect(() => {
    (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, {
      dismissAction: j.ContentDismissActionType.AUTO,
      forceTrack: !0
    }), (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE, {
      dismissAction: j.ContentDismissActionType.AUTO,
      forceTrack: !0
    }), (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK, {
      dismissAction: j.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []);
  let i = (0, r.useStateFromStoresObject)([R.default, M.default, _.default, C.default, m.default], () => {
    var e, t;
    return {
      theme: R.default.theme,
      useForcedColors: _.default.useForcedColors,
      useSystemTheme: M.default.useSystemTheme,
      darkSidebar: R.default.darkSidebar,
      fontSize: _.default.fontSize,
      zoom: _.default.zoom,
      messageGroupSpacing: _.default.messageGroupSpacing,
      displayCompactAvatars: M.default.displayCompactAvatars,
      isStaff: null !== (t = null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
      gradientPreset: m.default.gradientPreset
    }
  });
  return (0, a.jsx)(K, {
    messageDisplayCompact: e,
    hideSimpleEmbedContent: t && s,
    clientTheme: l,
    ...i
  })
}