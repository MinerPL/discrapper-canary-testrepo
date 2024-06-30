s.d(l, {
    Z: function () {
        return T;
    }
});
var t = s(735250), n = s(470079), i = s(120356), a = s.n(i), o = s(442837), r = s(481060), u = s(596454), d = s(225433), c = s(727637), I = s(907040), m = s(984933), _ = s(401227), E = s(903749), f = s(185923), g = s(689938), L = s(999962);
function T(e) {
    let {
            className: l,
            guildId: s,
            error: i,
            emojiId: T,
            emojiName: v,
            isRequiredField: D = !0,
            shouldUpdateBothEmojiFields: p = !1,
            setEmojiId: x,
            setEmojiName: C
        } = e, R = (0, E.Z)({
            emojiId: T,
            emojiName: v
        }), S = (0, o.e7)([m.ZP], () => null != s ? m.ZP.getDefaultChannel(s) : null), j = n.createRef(), h = (0, c.Z)(j), N = () => {
            C(void 0), x(void 0);
        }, U = e => (l, s) => {
            let t = (null == l ? void 0 : l.id) == null;
            N(), t ? C(null == l ? void 0 : l.optionallyDiverseSequence) : (p && C(null == l ? void 0 : l.name), x(null == l ? void 0 : l.id)), s && e();
        }, Z = e => {
            e.stopPropagation(), N();
        };
    return (0, t.jsx)(r.FormItem, {
        required: D,
        title: g.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
        className: a()(l, L.section),
        error: i,
        children: (0, t.jsx)(r.Popout, {
            animation: r.Popout.Animation.NONE,
            position: 'top',
            renderPopout: e => {
                let {closePopout: l} = e;
                return (0, t.jsx)(I.Z, {
                    closePopout: l,
                    pickerIntention: f.Hz.SOUNDBOARD,
                    onNavigateAway: l,
                    onSelectEmoji: U(l),
                    guildId: s,
                    channel: S
                });
            },
            children: (e, l) => {
                let {isShown: s} = l;
                return (0, t.jsxs)('div', {
                    ...e,
                    className: L.emojiInput,
                    ref: j,
                    children: [
                        (0, t.jsx)(_.Z, {
                            className: L.emojiButton,
                            active: s,
                            tabIndex: 0,
                            renderButtonContents: null != T || null != v ? () => (0, t.jsx)(u.Z, {
                                emojiName: v,
                                emojiId: T
                            }) : null
                        }),
                        (0, t.jsx)(r.TextInput, {
                            inputClassName: L.emojiText,
                            placeholder: g.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                            value: null != R ? ':'.concat(R, ':') : '',
                            readOnly: !0
                        }),
                        h && null != R && (0, t.jsx)(d.Z, {
                            ...e,
                            onClick: Z,
                            className: L.removeButton
                        })
                    ]
                });
            }
        })
    });
}
