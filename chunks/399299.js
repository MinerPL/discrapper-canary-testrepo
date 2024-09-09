n.d(t, {
    Z: function () {
        return q;
    }
});
var l = n(735250),
    s = n(470079),
    i = n(120356),
    r = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(230711),
    d = n(812206),
    u = n(605436),
    f = n(600164),
    h = n(594190),
    m = n(925329),
    x = n(565138),
    _ = n(977059),
    g = n(695346),
    p = n(494620),
    C = n(592125),
    S = n(650774),
    j = n(430824),
    v = n(131951),
    E = n(944486),
    I = n(594174),
    Z = n(449224),
    T = n(626135),
    N = n(823379),
    M = n(63063),
    R = n(358085),
    A = n(653255),
    O = n(989941),
    L = n(618407),
    w = n(586290),
    b = n(233037),
    D = n(810013),
    P = n(537135),
    y = n(641115),
    G = n(143135),
    B = n(70722),
    k = n(981631),
    U = n(526761),
    V = n(689938),
    H = n(85586),
    W = n(458623);
function F(e) {
    let { selectedSource: t, selectSource: n, sourceChanged: s, onChangeSource: i } = e,
        r = (0, a.e7)([h.ZP, Z.Z], () => ((0, R.isWindows)() ? (0, O.Z)(h.ZP, Z.Z) : null)),
        c = (0, a.e7)([d.Z], () => ((null == r ? void 0 : r.id) != null ? d.Z.getApplication(r.id) : null)),
        u = (0, a.e7)([h.ZP], () => h.ZP.getRunningGames()),
        f = (0, a.Wu)([d.Z], () => u.map((e) => (null != e.id ? d.Z.getApplication(e.id) : null)).filter(N.lm), [u]),
        x = null;
    if ((null != t ? (x = t.name) : null != r && (x = r.name), null == x)) return null;
    let _ = (0, G.Z)(r, t, u),
        g = s
            ? f.find((e) => {
                  let { id: t } = e;
                  return t === (null == _ ? void 0 : _.id);
              })
            : c,
        p = null != t && t.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
    return (0, l.jsx)(o.FormItem, {
        title: V.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
        className: W.modalContent,
        titleClassName: W.formItemTitleVerySlim,
        children: (0, l.jsxs)(P.Z, {
            children: [
                null != g
                    ? (0, l.jsx)(m.Z, {
                          game: g,
                          size: m.Z.Sizes.XSMALL,
                          className: H.selectedIcon
                      })
                    : (0, l.jsx)(p, { className: H.selectedIcon }),
                (0, l.jsx)('span', {
                    className: H.ellipsisText,
                    children: x
                }),
                n
                    ? (0, l.jsx)(o.Button, {
                          className: H.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: i,
                          children: V.Z.Messages.CHANGE
                      })
                    : null
            ]
        })
    });
}
function z(e) {
    let { onChange: t, guildId: n } = e,
        s = (0, a.e7)([j.Z], () => j.Z.getGuild(n));
    return null == s
        ? (t(), null)
        : (0, l.jsx)(o.FormItem, {
              title: V.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: W.modalContent,
              titleClassName: W.formItemTitle,
              children: (0, l.jsxs)(P.Z, {
                  children: [
                      (0, l.jsx)(x.Z, {
                          guild: s,
                          size: x.Z.Sizes.SMALLER,
                          className: H.selectedIcon
                      }),
                      (0, l.jsx)('span', {
                          className: H.ellipsisText,
                          children: s.toString()
                      }),
                      (0, l.jsx)(o.Button, {
                          className: H.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: t,
                          children: V.Z.Messages.CHANGE
                      })
                  ]
              })
          });
}
function Y(e) {
    let { text: t } = e;
    return (0, l.jsxs)(f.Z, {
        align: f.Z.Align.CENTER,
        className: H.warning,
        children: [
            (0, l.jsx)(o.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: H.warningIcon
            }),
            (0, l.jsx)(o.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: t
            })
        ]
    });
}
function K(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([S.Z], () => {
            var e;
            return null !== (e = S.Z.getMemberCount(t)) && void 0 !== e ? e : 0;
        }),
        i = g.eo.useSetting(),
        c = s.useCallback((e, t) => {
            g.eo.updateSetting(t), T.default.track(k.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t });
        }, []);
    return n >= 2 && n <= B.tB
        ? (0, l.jsx)(o.FormItem, {
              className: r()(W.modalContent, H.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                  value: !!i,
                  type: o.Checkbox.Types.INVERTED,
                  onChange: c,
                  children: (0, l.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: V.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                  })
              })
          })
        : null;
}
function Q(e) {
    let { enabled: t, onChange: n, screen: i } = e,
        a = s.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, l.jsx)(o.FormItem, {
        className: r()(W.modalContent, H.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: i ? V.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL : V.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL
            })
        })
    });
}
function X(e) {
    let { enabled: t, onChange: n } = e,
        i = s.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, l.jsx)(o.FormItem, {
        className: r()(W.modalContent, H.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: i,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: V.Z.Messages.GO_LIVE_MODAL_DISABLE_STREAM_PREVIEWS
            })
        })
    });
}
function q(e) {
    let { selectedSource: t, selectedFPS: n, selectedChannelId: i, selectedPreset: r, selectedResolution: o, sourceChanged: d, selectedGuildId: f, targetGuildPremiumTier: h, selectSource: m, selectGuild: x, sound: g, previewDisabled: S, onClose: j, onChangeSelectedFPS: Z, onChangeSelectedResolution: T, onChangeSelectedPreset: N, onChangeSelectedChannelId: R, onChangeSource: O, onChangeAudioDevice: P, onChangeGuild: G, onChangeSound: B, onChangePreviewDisabled: W } = e,
        q = (0, a.e7)([E.Z, C.Z], () => C.Z.getChannel(E.Z.getVoiceChannelId())),
        J = (0, a.e7)([A.Z], () => A.Z.GPUDriversOutdated),
        $ = (0, a.e7)([A.Z], () => A.Z.problematicGPUDriver),
        ee = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
        et = (0, L.Z)();
    null != t && t.id.startsWith('screen') && !v.Z.supportsScreenSoundshare() && (et = V.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
    let en = !!(null == t ? void 0 : t.id.startsWith('camera')),
        el = null != ee && ee.verified && !ee.bot,
        es = null != q && !(0, u.Yk)(q),
        ei = !(0, a.e7)([v.Z], () => v.Z.getHardwareEncoding()),
        { enabled: er } = (0, _.S)({ location: 'GoLiveModal_Confirm' });
    return (0, l.jsxs)(s.Fragment, {
        children: [
            en
                ? (0, l.jsx)(w.Z, {
                      selectedSource: t,
                      onChangeVideoDeviceSource: O,
                      onChangeAudioDevice: P
                  })
                : (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(F, {
                              selectSource: m,
                              sourceChanged: d,
                              onChangeSource: O,
                              selectedSource: t
                          }),
                          null != et ? (0, l.jsx)(Y, { text: et }) : null,
                          null != t && null == et
                              ? (0, l.jsx)(Q, {
                                    enabled: g,
                                    onChange: B,
                                    screen: t.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            x && null != f
                ? (0, l.jsx)(z, {
                      guildId: f,
                      onChange: G
                  })
                : null,
            null != q
                ? (0, l.jsx)(D.Z, { channel: q })
                : (0, l.jsx)(b.Z, {
                      guildId: f,
                      selectedChannelId: i,
                      onChangeSelectedChannelId: R
                  }),
            null != f && el && es ? (0, l.jsx)(K, { guildId: f }) : null,
            J ? (0, l.jsx)(Y, { text: V.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED }) : null,
            $ ? (0, l.jsx)(Y, { text: V.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({ helpCenterLink: M.Z.getArticleURL(k.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            ei &&
                (0, l.jsx)(p.Z, {
                    look: p.z.WARNING,
                    className: H.hardwareWarning,
                    children: V.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
                        onClick: () => {
                            j(), c.Z.open(k.oAB.VOICE, null, { scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, l.jsx)(y.Z, {
                selectedPreset: r,
                selectedFPS: n,
                selectedResolution: o,
                targetGuildPremiumTier: h,
                onClose: j,
                onFPSChange: Z,
                onResolutionChange: T,
                onPresetChange: N,
                captureDeviceSelected: en
            }),
            er &&
                (0, l.jsx)(X, {
                    enabled: S,
                    onChange: W
                })
        ]
    });
}
