t.d(s, {
    Z: function () {
        return H;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    l = t.n(o),
    c = t(442837),
    d = t(481060),
    _ = t(230711),
    u = t(419363),
    E = t(857595),
    T = t(607070),
    S = t(627845),
    I = t(600164),
    N = t(313201),
    A = t(786761),
    C = t(3148),
    m = t(739566),
    g = t(753206),
    h = t(440849),
    O = t(921801),
    p = t(196051),
    R = t(441729),
    x = t(626135),
    M = t(63063),
    f = t(695346),
    D = t(263937),
    L = t(996073),
    P = t(526761),
    b = t(726985),
    Z = t(981631),
    v = t(611480),
    j = t(653477),
    B = t(689938),
    U = t(840206),
    G = t(113207),
    F = t(328756);
let y = (0, N.hQ)(),
    V = (0, N.hQ)(),
    Y = (0, N.hQ)(),
    k = l().debounce((e) => {
        (0, E.o2)(e);
    }, 250),
    w = l().debounce((e) => {
        (0, p.Ct)(e);
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
            (0, n.jsxs)(O.F, {
                setting: b.s6.ACCESSIBILITY_SATURATION,
                children: [(0, n.jsx)(K, {}), (0, n.jsx)(d.FormDivider, {})]
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, n.jsx)(z, {})
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, n.jsx)(Q, {})
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_TAGS,
                children: (0, n.jsx)(X, {})
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, n.jsx)(q, {})
            }),
            (0, S.b)()
                ? (0, n.jsxs)(O.F, {
                      setting: b.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, n.jsx)(J, {}), ' ']
                  })
                : null,
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, n.jsx)($, {})
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_STICKERS,
                children: (0, n.jsx)(ee, {})
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_MESSAGES,
                children: (0, n.jsx)(es, {})
            }),
            (0, n.jsx)(et, {}),
            (0, n.jsxs)(O.F, {
                setting: b.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, n.jsx)(d.FormDivider, { className: G.marginTop20 }),
                    (0, n.jsx)(d.Text, {
                        className: G.marginTop20,
                        variant: 'text-md/normal',
                        children: B.Z.Messages.ACCESSIBILITY_SETTINGS_APPEARANCE_LINK.format({
                            onAppearanceClick() {
                                _.Z.open(Z.oAB.APPEARANCE);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
function W() {
    let e = f.jU.useSetting(),
        [s] = a.useState(() => {
            let e = (0, A.e5)({
                ...(0, C.ZP)({
                    channelId: '1337',
                    content: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_LINK_PREVIEW_MESSAGE.format({ previewLink: 'https://discord.com/accessibility' })
                }),
                state: Z.yb.SENT,
                id: ''.concat(0)
            });
            return (e.colorString = 'green'), e;
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
                            children: [Z.Skl.ONLINE, Z.Skl.DND, Z.Skl.IDLE].map((e) =>
                                (0, n.jsx)(
                                    d.AnimatedAvatar,
                                    {
                                        'aria-label': B.Z.Messages.USER_SETTINGS_AVATAR,
                                        src: F,
                                        size: d.AvatarSizes.SIZE_32,
                                        status: e
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: U.previewMessage,
                    children: (0, n.jsx)(g.Z, {
                        compact: e,
                        author: {
                            ...(0, m.ZH)(s),
                            colorString: '#DD80F4'
                        },
                        message: s
                    })
                })
            ]
        })
    });
}
function K() {
    let { saturation: e, desaturateUserColors: s } = (0, c.cj)([T.Z], () => ({
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
                markers: Z.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: k,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, n.jsx)(d.FormSwitch, {
                    hideBorder: !0,
                    className: r()(G.marginTop20, G.marginBottom20),
                    value: s,
                    onChange: E.f1,
                    note: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_DESCRIPTION,
                    children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL
                })
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
            onChange: function () {
                (0, E.gs)(!e);
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
                        options: [
                            {
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
                        onChange: function (e) {
                            (0, E.u1)(e.value);
                        },
                        value: e
                    })
                ]
            }),
            (0, n.jsx)(d.FormDivider, { className: G.marginTop20 })
        ]
    });
}
function X() {
    let e = (0, c.e7)([T.Z], () => T.Z.hideTags);
    return (0, n.jsx)(d.FormItem, {
        title: B.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
        className: G.marginTop20,
        children: (0, n.jsx)(O.F, {
            setting: b.s6.ACCESSIBILITY_TAGS_NAMES,
            children: (0, n.jsx)(d.FormSwitch, {
                value: !e,
                onChange: () => (0, E.Nv)(!e),
                children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL
            })
        })
    });
}
function q() {
    let e = (0, c.e7)([T.Z], () => T.Z.syncProfileThemeWithUserTheme),
        s = a.useRef(null);
    return (
        (0, L.Z)(s, P.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, n.jsx)(d.FormItem, {
            ref: s,
            title: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
            className: r()(G.marginTop20, U.syncProfileThemeWithUserTheme),
            children: (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, n.jsx)(d.FormSwitch, {
                    note: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_NOTE.format({
                        onThemeClick() {
                            _.Z.open(Z.oAB.APPEARANCE);
                        }
                    }),
                    className: G.marginTop20,
                    value: e,
                    onChange: E.Uv,
                    children: B.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION
                })
            })
        })
    );
}
function J() {
    let [e] = (0, c.Wu)([T.Z], () => [T.Z.syncForcedColors, T.Z.systemForcedColors]),
        [s, t] = a.useState(e);
    a.useEffect(() => {
        t(e);
    }, [e]);
    let i = a.useRef(null);
    a.useEffect(() => {
        null != i.current && (clearTimeout(i.current), (i.current = null)), s !== e && (i.current = setTimeout(() => (0, E.qz)(s), 150));
    }, [s, e]);
    let r = B.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_DESCRIPTION.format({ learnMoreLink: M.Z.getArticleURL(Z.BhN.FORCED_COLORS) });
    return (0, n.jsx)(d.FormItem, {
        title: B.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
        className: G.marginTop20,
        children: (0, n.jsx)(O.F, {
            setting: b.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, n.jsx)(d.FormSwitch, {
                value: s,
                note: r,
                onChange: t,
                children: B.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL
            })
        })
    });
}
function $() {
    let e = f.QK.useSetting(),
        s = f.Yk.useSetting(),
        {
            useReducedMotion: t,
            rawPrefersReducedMotion: i,
            systemPrefersReducedMotion: o,
            gifAutoPlayOverrideReason: l,
            animateEmojiOverrideReason: _
        } = (0, c.cj)([T.Z, D.Z], () => ({
            systemPrefersReducedMotion: T.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: T.Z.rawPrefersReducedMotion,
            useReducedMotion: T.Z.useReducedMotion,
            gifAutoPlayOverrideReason: D.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: D.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        u = a.useRef(null);
    (0, L.Z)(u, P.rP.REDUCED_MOTION);
    let S = a.useCallback(
            (e, s) => {
                (0, E.Zt)(s ? 'auto' : o);
            },
            [o]
        ),
        I = a.useCallback((e) => {
            (0, E.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, n.jsxs)(d.FormItem, {
        ref: u,
        title: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
        className: r()(G.marginTop20, U.reducedMotion),
        children: [
            (0, n.jsx)(d.FormText, {
                type: d.FormText.Types.DESCRIPTION,
                className: G.marginBottom8,
                children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_DESCRIPTION.format({ helpdeskArticle: M.Z.getArticleURL(Z.BhN.REDUCED_MOTION) })
            }),
            (0, n.jsx)(d.Checkbox, {
                className: r()(G.marginTop20, G.marginBottom20),
                value: 'auto' === i,
                shape: d.Checkbox.Shapes.BOX,
                type: d.Checkbox.Types.INVERTED,
                onChange: S,
                children: (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_AUTO
                })
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, n.jsx)(d.FormSwitch, {
                    value: t,
                    onChange: I,
                    children: B.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE
                })
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, n.jsx)(d.FormSwitch, {
                    className: G.marginBottom20,
                    value: e,
                    note: null != l ? (0, h.Z)(l) : void 0,
                    onChange: f.QK.updateSetting,
                    children: B.Z.Messages.GIF_AUTO_PLAY_LABEL
                })
            }),
            (0, n.jsx)(O.F, {
                setting: b.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, n.jsx)(d.FormSwitch, {
                    className: G.marginBottom20,
                    value: s,
                    note: null != _ ? (0, h.Z)(_) : void 0,
                    onChange: f.Yk.updateSetting,
                    children: B.Z.Messages.ANIMATE_EMOJI
                })
            })
        ]
    });
}
function ee() {
    let e = f.Wp.useSetting(),
        s = (0, c.e7)([D.Z], () => D.Z.getAppliedOverrideReasonKey('animateStickers')),
        t = a.useCallback((e) => {
            f.Wp.updateSetting(e.value);
        }, []);
    return (0, n.jsxs)(d.FormItem, {
        className: G.marginTop20,
        title: B.Z.Messages.STICKERS_AUTO_PLAY_HEADING,
        children: [
            (0, n.jsx)(d.FormText, {
                type: d.FormText.Types.DESCRIPTION,
                className: G.marginBottom8,
                children: null != s ? (0, h.Z)(s) : B.Z.Messages.STICKERS_AUTO_PLAY_HELP
            }),
            (0, n.jsx)(d.RadioGroup, {
                options: [
                    {
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
                onChange: t,
                value: e
            })
        ]
    });
}
function es() {
    let e = (0, c.e7)([T.Z], () => T.Z.isSubmitButtonEnabled),
        s = f.dN.useSetting(),
        t = a.useRef(null);
    return (
        (0, L.Z)(t, P.rP.LEGACY_CHAT_INPUT),
        (0, n.jsxs)(d.FormItem, {
            ref: t,
            className: G.marginTop20,
            children: [
                (0, n.jsx)(d.FormTitle, {
                    className: G.marginBottom8,
                    children: B.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT
                }),
                (0, n.jsx)(O.F, {
                    setting: b.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, n.jsx)(d.FormSwitch, {
                        className: G.marginTop20,
                        value: e,
                        onChange: E.eN,
                        children: B.Z.Messages.DISPLAY_SUBMIT_BUTTON
                    })
                }),
                (0, n.jsx)(O.F, {
                    setting: b.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, n.jsx)(d.FormSwitch, {
                        className: G.marginTop8,
                        value: s,
                        note: B.Z.Messages.LEGACY_CHAT_INPUT_DESCRIPTION,
                        onChange: (e) => {
                            x.default.track(Z.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: Z.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                f.dN.updateSetting(e);
                        },
                        children: B.Z.Messages.LEGACY_CHAT_INPUT
                    })
                })
            ]
        })
    );
}
function et() {
    let e = f.OW.useSetting(),
        s = (0, c.e7)([R.Z], () => R.Z.speechRate),
        [t, i] = a.useState(!1);
    return u.Zh
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(O.F, {
                      setting: b.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, n.jsxs)(d.FormItem, {
                          className: G.marginTop20,
                          children: [
                              (0, n.jsx)(d.FormTitle, {
                                  className: G.marginBottom8,
                                  children: B.Z.Messages.FORM_LABEL_TTS
                              }),
                              (0, n.jsx)(O.F, {
                                  setting: b.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, n.jsx)(d.FormSwitch, {
                                      className: G.marginTop20,
                                      value: e,
                                      onChange: f.OW.updateSetting,
                                      children: B.Z.Messages.ALLOW_TTS_COMMAND
                                  })
                              })
                          ]
                      })
                  }),
                  (0, n.jsx)(O.F, {
                      setting: b.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, n.jsxs)(d.FormItem, {
                          className: G.marginTop20,
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
                                          if (t) {
                                              (0, p.NB)(), i(!1);
                                              return;
                                          }
                                          (0, p.cP)(
                                              B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_TEST,
                                              !0,
                                              void 0,
                                              () => i(!0),
                                              () => i(!1)
                                          ),
                                              i(!0);
                                      },
                                      children: (0, n.jsxs)(I.Z, {
                                          align: I.Z.Align.CENTER,
                                          children: [
                                              t
                                                  ? (0, n.jsx)(d.PauseIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    })
                                                  : (0, n.jsx)(d.PlayIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                              (0, n.jsx)('span', { children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_PREVIEW }),
                                              (0, n.jsx)(d.HiddenVisually, { children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL })
                                          ]
                                      })
                                  })
                              }),
                              (0, n.jsx)(d.Slider, {
                                  markers: j.q,
                                  initialValue: s,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: w,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, n.jsx)('span', {
                                                className: U.ttsSliderMarker,
                                                children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_SLOWER
                                            })
                                          : 10 === e
                                            ? (0, n.jsx)('span', {
                                                  className: U.ttsSliderMarker,
                                                  children: B.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_FASTER
                                              })
                                            : 1 === e
                                              ? (0, n.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': Y
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
