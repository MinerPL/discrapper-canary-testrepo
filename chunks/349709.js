s.d(l, {
    Z: function () {
        return T;
    }
});
var t = s(735250),
    n = s(470079),
    i = s(120356),
    a = s.n(i),
    o = s(442837),
    r = s(481060),
    u = s(596454),
    d = s(225433),
    c = s(727637),
    I = s(318766),
    m = s(907040),
    _ = s(984933),
    E = s(903749),
    f = s(185923),
    g = s(689938),
    L = s(109261);
function T(e) {
    let { className: l, guildId: s, error: i, emojiId: T, emojiName: v, isRequiredField: D = !0, shouldUpdateBothEmojiFields: x = !1, setEmojiId: p, setEmojiName: C } = e,
        R = (0, E.Z)({
            emojiId: T,
            emojiName: v
        }),
        S = (0, o.e7)([_.ZP], () => (null != s ? _.ZP.getDefaultChannel(s) : null)),
        j = n.createRef(),
        h = (0, c.Z)(j),
        P = () => {
            C(void 0), p(void 0);
        },
        N = (e) => (l, s) => {
            let t = (null == l ? void 0 : l.id) == null;
            P(), t ? C(null == l ? void 0 : l.optionallyDiverseSequence) : (x && C(null == l ? void 0 : l.name), p(null == l ? void 0 : l.id)), s && e();
        },
        U = (e) => {
            e.stopPropagation(), P();
        };
    return (0, t.jsx)(r.FormItem, {
        required: D,
        title: g.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
        className: a()(l, L.section),
        error: i,
        children: (0, t.jsx)(r.Popout, {
            animation: r.Popout.Animation.NONE,
            position: 'top',
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, t.jsx)(m.Z, {
                    closePopout: l,
                    pickerIntention: f.Hz.SOUNDBOARD,
                    onNavigateAway: l,
                    onSelectEmoji: N(l),
                    guildId: s,
                    channel: S
                });
            },
            children: (e, l) => {
                let { isShown: s } = l;
                return (0, t.jsxs)('div', {
                    ...e,
                    className: L.emojiInput,
                    ref: j,
                    children: [
                        (0, t.jsx)(I.Z, {
                            className: L.emojiButton,
                            active: s,
                            tabIndex: 0,
                            renderButtonContents:
                                null != T || null != v
                                    ? () =>
                                          (0, t.jsx)(u.Z, {
                                              emojiName: v,
                                              emojiId: T
                                          })
                                    : null
                        }),
                        (0, t.jsx)(r.TextInput, {
                            inputClassName: L.emojiText,
                            placeholder: g.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                            value: null != R ? ':'.concat(R, ':') : '',
                            readOnly: !0
                        }),
                        h &&
                            null != R &&
                            (0, t.jsx)(d.Z, {
                                ...e,
                                onClick: U,
                                className: L.removeButton
                            })
                    ]
                });
            }
        })
    });
}
