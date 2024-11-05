n.d(t, {
    mv: function () {
        return S;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    l = n(481060),
    u = n(596454),
    c = n(315744),
    d = n(208049),
    f = n(135869),
    _ = n(763296),
    h = n(22382),
    p = n(747071),
    m = n(409673),
    g = n(592125),
    E = n(388032),
    v = n(42693);
function I(e) {
    let { playSound: t } = e;
    return (0, r.jsxs)(l.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: v.inlineContainer,
        children: [
            (0, r.jsx)(l.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: v.unknownSound
            }),
            (0, r.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function S(e) {
    let { soundId: t, playSound: n } = e,
        i = (0, o.e7)([_.Z], () => _.Z.getSoundById(t)),
        a = (null == i ? void 0 : i.emojiId) != null || (null == i ? void 0 : i.emojiName) != null,
        c = E.intl.formatToPlainString(E.t.tuMUJy, {
            emojiName: null == i ? void 0 : i.emojiName,
            soundName: null == i ? void 0 : i.name
        });
    return (0, r.jsxs)(l.Clickable, {
        'aria-label': c,
        tag: 'span',
        onClick: n,
        className: s()(v.inlineContainer, v.inlineButton),
        children: [
            a &&
                (0, r.jsx)(u.Z, {
                    emojiId: null == i ? void 0 : i.emojiId,
                    emojiName: null == i ? void 0 : i.emojiName,
                    className: v.soundmojiEmoji
                }),
            (0, r.jsx)('span', { children: ' '.concat(null == i ? void 0 : i.name, ' ') })
        ]
    });
}
t.ZP = function (e) {
    let { channelId: t, soundId: n, jumbo: a = !1 } = e,
        { currentPreviewRef: s } = i.useContext(f.Z),
        l = (0, o.e7)([_.Z], () => _.Z.getSoundById(n)),
        u = (0, o.e7)([g.Z], () => g.Z.getChannel(t)),
        [E, T] = i.useState(!1),
        b = (0, c.P)('soundmoji_chat_mention'),
        y = i.useCallback(() => {
            var e;
            null == l && (0, d.w)();
            let t = new Audio((0, h.Z)(n));
            null != s.current && s.current.pause(), (s.current = t), (t.currentTime = 0), (t.volume = (0, p.Z)(null !== (e = null == l ? void 0 : l.volume) && void 0 !== e ? e : 0.5)), t.play(), (t.onplay = () => T(!0)), (t.onpause = () => T(!1)), (t.onended = () => T(!1));
        }, [n, l, s, T]);
    return b
        ? null == l
            ? (0, r.jsx)(I, { playSound: y })
            : a
              ? (0, r.jsx)(
                    m.ZP,
                    {
                        containerClassName: v.jumboContainer,
                        className: v.jumboButton,
                        sound: l,
                        channel: u,
                        refreshEnabled: !0,
                        onSelectItem: y,
                        isPlayingSoundOverride: E,
                        isAnimated: !1
                    },
                    ''.concat(l.soundId)
                )
              : (0, r.jsx)(S, {
                    soundId: n,
                    playSound: y
                })
        : null;
};
