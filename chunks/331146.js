n.d(t, {
    E: function () {
        return I;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    r = n(481060),
    l = n(768581),
    o = n(723047),
    c = n(570533),
    d = n(689938),
    u = n(407477);
function _(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: a = !1 } = e,
        o = l.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 32
        });
    return (0, s.jsxs)('div', {
        className: i()(u.emojiRow, { [u.disabled]: a }),
        children: [
            (0, s.jsx)('img', {
                className: u.emojiImage,
                src: o,
                alt: t.name
            }),
            (0, s.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-md/medium',
                className: u.emojiAlias,
                children: t.name
            }),
            (0, s.jsx)(r.Button, {
                look: r.Button.Looks.BLANK,
                size: r.Button.Sizes.ICON,
                className: u.deleteButton,
                onClick: () => n(t),
                'aria-label': d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_REMOVE_BUTTON_ARIA_LABEL,
                disabled: a,
                children: (0, s.jsx)(r.TrashIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: u.trashIcon
                })
            })
        ]
    });
}
function I(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: a } = e,
        i = (0, c.Z)(n),
        r = null != t ? i.filter((e) => t.has(e.id)) : [],
        l = (0, o.mY)();
    return (0, s.jsx)('div', {
        className: u.container,
        children: r.map((e) =>
            (0, s.jsx)(
                _,
                {
                    emoji: e,
                    onRemoveEmoji: () => a(e),
                    disabled: l
                },
                e.id
            )
        )
    });
}
