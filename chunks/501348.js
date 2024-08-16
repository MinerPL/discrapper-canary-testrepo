t.d(s, {
    Z: function () {
        return q;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(704215),
    c = t(780384),
    d = t(481060),
    _ = t(153867),
    E = t(230711),
    u = t(714338),
    I = t(857595),
    T = t(607070),
    S = t(627845),
    N = t(514361),
    C = t(600164),
    m = t(313201),
    A = t(605236),
    O = t(786761),
    g = t(3148),
    h = t(739566),
    p = t(753206),
    R = t(311476),
    x = t(921801),
    M = t(594174),
    f = t(358085),
    D = t(210887),
    P = t(740492),
    L = t(695346),
    b = t(329013),
    Z = t(333859),
    v = t(726985),
    j = t(981631),
    B = t(921944),
    U = t(959517),
    G = t(689938),
    F = t(45031),
    y = t(224499);
function V(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let Y = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    w = (0, m.hQ)(),
    k = (0, m.hQ)(),
    H = (0, m.hQ)(),
    W = '1337',
    K = (e) => {
        let s = 0;
        return [
            (0, O.e5)({
                ...(0, g.ZP)({
                    channelId: W,
                    content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
                }),
                state: j.yb.SENT,
                id: ''.concat(s++)
            }),
            (0, O.e5)({
                ...(0, g.ZP)({
                    channelId: W,
                    content: (0, c.wj)(e) ? G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
                }),
                state: j.yb.SENT,
                id: ''.concat(s++)
            }),
            (0, O.e5)({
                ...(0, g.ZP)({
                    channelId: W,
                    content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
                }),
                state: j.yb.SENT,
                id: ''.concat(s++)
            }),
            (0, O.e5)({
                ...(0, g.ZP)({
                    channelId: W,
                    content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
                }),
                state: j.yb.SENT,
                id: ''.concat(s++)
            }),
            (0, O.e5)({
                ...(0, g.ZP)({
                    channelId: W,
                    content: G.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
                }),
                state: j.yb.SENT,
                id: ''.concat(s)
            })
        ];
    },
    z = () => {
        let e = (0, o.e7)([N.Z], () => N.Z.isPreview),
            { enabled: s } = R.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !e
                }
            );
        return s
            ? null
            : (0, n.jsxs)('div', {
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
        return f.isPlatformEmbedded
            ? (0, n.jsxs)(d.FormItem, {
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
                          children: G.Z.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({ modKey: u.Z.modKey })
                      })
                  ]
              })
            : null;
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
                (0, n.jsx)(C.Z, {
                    align: C.Z.Align.CENTER,
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
        let { messageDisplayCompact: e, messageGroupSpacing: s } = this.props;
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
                    initialValue: s,
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
        let { messageDisplayCompact: e, theme: s, messageGroupSpacing: t, hideSimpleEmbedContent: a } = this.props,
            i = (0, c.wj)(s) ? this.darkMessages : this.lightMessages;
        return (0, n.jsx)(d.FocusBlock, {
            children: (0, n.jsx)(d.Card, {
                className: r()(F.preview, y.marginBottom40, e ? F.compactPreview : void 0, 'group-spacing-'.concat(null != t ? t : e ? U.c8 : U.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: i.map((s, t) =>
                    (0, n.jsx)(
                        p.Z,
                        {
                            author: (0, h.ZH)(s),
                            message: s,
                            compact: e,
                            isGroupStart: t % 2 == 0,
                            className: 0 === t ? F.firstMessage : void 0,
                            hideSimpleEmbedContent: a
                        },
                        s.id
                    )
                )
            })
        });
    }
    renderTheme() {
        let { theme: e, useForcedColors: s, darkSidebar: t, gradientPreset: a } = this.props;
        return s
            ? (0, n.jsx)(d.FormItem, {
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
                      children: (0, S.b)()
                          ? G.Z.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
                                onClick: () => {
                                    E.Z.open(j.oAB.ACCESSIBILITY);
                                }
                            })
                          : G.Z.Messages.THEME_DISABLED_FOR_FORCED_COLORS
                  })
              })
            : (0, n.jsxs)(d.FormItem, {
                  className: y.marginTop8,
                  title: (0, n.jsx)(z, {}),
                  children: [
                      (0, n.jsx)(b.i, {}),
                      (0, n.jsx)(x.F, {
                          setting: v.s6.APPEARANCE_ICON,
                          children: (0, n.jsx)(Z.c, {})
                      }),
                      (0, n.jsx)(d.FormSwitch, {
                          value: t && (0, c.ap)(e) && !s,
                          disabled: e !== j.BRd.LIGHT || s || null != a,
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
                    options: [
                        {
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
        (0, I.lq)();
    }
    renderScalingAndSpacing() {
        return (0, n.jsxs)(n.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, n.jsx)(d.FormDivider, { className: y.marginTop20 })]
        });
    }
    render() {
        return (0, n.jsxs)(d.FormSection, {
            tag: d.FormTitleTags.H1,
            title: G.Z.Messages.APPEARANCE,
            children: [
                (0, n.jsxs)(x.F, {
                    setting: v.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, n.jsx)(x.F, {
                    setting: v.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                (0, n.jsx)(x.F, {
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
        return G.Z.Messages.PIXEL_VALUE_A11Y_TEXT.format({ value: e });
    }
    handleFontSizeChange(e) {
        (0, I.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, I.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, I.cq)(e);
    }
    constructor(...e) {
        super(...e),
            V(this, 'darkMessages', K(j.BRd.DARK)),
            V(this, 'lightMessages', K(j.BRd.LIGHT)),
            V(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                _.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            V(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: s } = e;
                L.jU.updateSetting(s === Y.COMPACT), (0, I.ZZ)();
            });
    }
}
let X = (e) => {
    !(0, A.un)(e) &&
        (0, A.EW)(e, {
            dismissAction: B.L.AUTO,
            forceTrack: !0
        });
};
function q() {
    let e = L.jU.useSetting(),
        s = L.RS.useSetting(),
        t = L.NA.useSetting(),
        i = L.L1.useSetting();
    a.useEffect(() => {
        X(l.z.CLIENT_THEMES_SETTINGS_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), X(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }, []);
    let r = (0, o.cj)([D.Z, P.ZP, T.Z, M.default, N.Z], () => {
        var e, s;
        return {
            theme: D.Z.theme,
            useForcedColors: T.Z.useForcedColors,
            useSystemTheme: P.ZP.useSystemTheme,
            darkSidebar: D.Z.darkSidebar,
            fontSize: T.Z.fontSize,
            zoom: T.Z.zoom,
            messageGroupSpacing: T.Z.messageGroupSpacing,
            displayCompactAvatars: P.ZP.displayCompactAvatars,
            isStaff: null !== (s = null === (e = M.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== s && s,
            gradientPreset: N.Z.gradientPreset
        };
    });
    return (0, n.jsx)(Q, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: s && t,
        clientTheme: i,
        ...r
    });
}
