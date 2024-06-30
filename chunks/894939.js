s.d(t, {
    Z: function () {
        return D;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(442837), r = s(481060), o = s(596454), l = s(906732), c = s(856768), d = s(993413), _ = s(921801), E = s(208049), u = s(763296), T = s(242291), I = s(893663), S = s(331642), N = s(474333), C = s(63063), m = s(581883), A = s(918257), h = s(726985), g = s(981631), O = s(710111), p = s(689938), R = s(934025), x = s(331651);
function M(e) {
    return (0, i.e7)([u.Z], () => {
        if (null == e)
            return null;
        let {
            guildId: t,
            soundId: s
        } = e;
        return u.Z.getSound(t === O.hY ? O.X8 : t, s);
    });
}
function D() {
    let {analyticsLocations: e} = (0, l.ZP)(), [t, s] = a.useState(O.hY), o = (0, I.tT)(t), m = M(o), D = (0, i.e7)([u.Z], () => u.Z.hasFetchedAllSounds()), P = (null == o ? void 0 : o.type) === I.zx.GLOBAL, L = D && null != o && null == m;
    a.useEffect(() => {
        L && (0, T.tt)({ location: e });
    }, [
        L,
        e
    ]), a.useEffect(() => {
        (0, E.w)();
    }, []);
    let Z = a.useCallback((e, t) => {
        let {inDropdown: s} = t;
        return null == e ? null : s ? (0, n.jsx)(f, { guildId: e.value }) : null;
    }, []);
    return (0, n.jsxs)(r.FormSection, {
        className: R.container,
        tag: r.FormTitleTags.H1,
        titleClassName: x.__invalid_marginBottom16,
        title: p.Z.Messages.SOUNDBOARD,
        children: [
            (0, n.jsx)(_.F, {
                setting: h.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, n.jsx)(A.Z, {})
            }),
            (0, n.jsxs)(_.F, {
                setting: h.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                children: [
                    (0, n.jsx)(r.FormDivider, { className: R.callSoundsDivider }),
                    (0, n.jsx)(r.Heading, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: R.callSoundsTitle,
                        children: p.Z.Messages.CALL_SOUNDS_SETTINGS
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: p.Z.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({ helpdeskArticle: C.Z.getArticleURL(g.BhN.SOUNDBOARD) })
                    }),
                    (0, n.jsx)(c.Z, {
                        guildId: t,
                        className: R.guildSelector,
                        globalOption: {
                            label: p.Z.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
                            value: O.hY
                        },
                        onChange: e => s(null == e ? O.hY : e.id),
                        renderOptionSuffix: Z,
                        hideDivider: !0
                    }),
                    (0, n.jsxs)(d.Z, {
                        className: x.marginTop20,
                        title: p.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
                            nitroWheelHook: () => (0, n.jsx)(r.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: R.nitroWheel
                            })
                        }),
                        forcedDivider: !0,
                        children: [
                            (0, n.jsx)(S.Z, {
                                sound: m,
                                isGlobal: P,
                                onSelect: s => {
                                    null == s ? (0, T.aC)(t, e) : (0, T.SZ)(t, s, e);
                                }
                            }),
                            L && (0, n.jsx)(N.Z, {
                                className: R.notice,
                                messageType: N.Q.WARNING,
                                children: p.Z.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let {guildId: t} = e, s = (0, i.e7)([m.Z], () => {
            var e, s, n;
            return null === (n = m.Z.settings.guilds) || void 0 === n ? void 0 : null === (s = n.guilds) || void 0 === s ? void 0 : null === (e = s[t]) || void 0 === e ? void 0 : e.joinSound;
        }), a = M(s);
    if (null == s || null == a)
        return null;
    let {
            emojiId: l,
            emojiName: c
        } = a, d = null != l || null != c;
    return (0, n.jsxs)('div', {
        className: R.pill,
        children: [
            d ? (0, n.jsx)(o.Z, {
                emojiId: l,
                emojiName: c,
                className: R.pillIcon
            }) : (0, n.jsx)(r.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: R.pillIcon
            }),
            (0, n.jsx)(r.Text, {
                className: R.pillText,
                variant: 'text-xs/medium',
                children: a.name
            })
        ]
    });
}
