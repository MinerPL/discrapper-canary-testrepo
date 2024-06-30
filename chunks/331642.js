s.d(t, {
    Z: function () {
        return A;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(442837), r = s(692547), o = s(481060), l = s(596454), c = s(594174), d = s(74538), _ = s(242291), E = s(706667), u = s(458263), T = s(409673), I = s(603074), S = s(689938), N = s(836214);
function C(e) {
    let {onSelect: t} = e, [s, r] = a.useState(!1), l = (0, i.e7)([c.default], () => c.default.getCurrentUser()), _ = d.ZP.canUseCustomCallSounds(l);
    function E(e) {
        _ && (r(!1), null == t || t(e));
    }
    return (0, n.jsx)(o.Popout, {
        shouldShow: s,
        position: 'left',
        onRequestClose: () => r(!1),
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, n.jsx)(o.Dialog, {
                children: (0, n.jsx)(I.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: E,
                    gridNotice: _ ? null : (0, n.jsx)(u.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: e => (0, n.jsx)(T.hU, {
            ...e,
            onClick: () => {
                r(!s);
            },
            text: S.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_CHANGE,
            children: (0, n.jsx)(o.PencilIcon, {
                size: 'md',
                color: 'currentColor',
                className: N.secondaryIcon
            })
        })
    });
}
function m(e) {
    let {sound: t} = e, {previewSound: s} = (0, E.Z)(t, null), a = 0 === (0, _.pI)() ? S.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND_LOW_VOLUME : S.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
            emojiName: t.emojiName,
            soundName: t.name
        });
    return (0, n.jsx)(T.hU, {
        onClick: s,
        text: a,
        children: (0, n.jsx)(o.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: N.secondaryIconActive
        })
    });
}
function A(e) {
    let {
            sound: t,
            isGlobal: s,
            onSelect: a
        } = e, i = null != t, c = null == t ? void 0 : t.emojiId, d = null == t ? void 0 : t.emojiName, _ = i && (null != d || null != c), E = e => (0, n.jsx)(o.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            tag: 'span',
            children: e
        });
    return (0, n.jsxs)('div', {
        className: N.soundButtonSettingContainer,
        children: [
            (0, n.jsxs)('div', {
                className: N.container,
                children: [
                    _ && (0, n.jsx)(l.Z, {
                        emojiId: c,
                        emojiName: d,
                        className: N.emoji
                    }),
                    (0, n.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        className: N.soundText,
                        children: null == t ? S.Z.Messages.NONE : s ? S.Z.Messages.CALL_SOUNDS_SETTINGS_ALL_SERVERS.format({
                            soundName: t.name,
                            subtextHook: E
                        }) : t.name
                    }),
                    i ? (0, n.jsx)(m, { sound: t }) : (0, n.jsx)(o.VoiceNormalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: N.secondaryIconDisabled
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: N.container,
                children: [
                    (0, n.jsx)(C, { onSelect: a }),
                    i && !s && (0, n.jsx)(T.hU, {
                        onClick: () => a(null),
                        text: S.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_REMOVE,
                        children: (0, n.jsx)(o.TrashIcon, {
                            size: 'md',
                            color: r.Z.unsafe_rawColors.RED_400.css,
                            className: N.secondaryIcon
                        })
                    })
                ]
            })
        ]
    });
}
