t.d(n, {
    Z: function () {
        return A;
    }
});
var i = t(735250);
t(470079);
var a = t(120356), r = t.n(a), l = t(442837), o = t(481060), s = t(543241), u = t(222677), c = t(995774), d = t(665906), E = t(695346), f = t(496675), M = t(768581), I = t(176354), g = t(981631), m = t(185923), _ = t(689938), Z = t(219005);
let S = [
    'slight_smile',
    'frowning',
    'smile',
    'stuck_out_tongue',
    'wink'
];
function v(e) {
    var n;
    let {
            emoji: t,
            isFocused: a
        } = e, {
            animated: l,
            src: s,
            surrogates: u
        } = t;
    return null == s && null != t.id ? s = M.ZP.getEmojiURL({
        id: t.id,
        animated: !!l,
        size: 20
    }) : null == s && (s = I.ZP.getURL(u)), (0, i.jsx)(o.Tooltip, {
        text: t.allNamesString,
        hideOnClick: !0,
        spacing: 16,
        forceOpen: a,
        children: e => (0, i.jsx)('div', {
            'aria-label': _.Z.Messages.ADD_REACTION_NAMED.format({ emojiName: t.name }),
            className: r()(Z.button, { [Z.focused]: a }),
            ...e,
            children: null == s || '' === s.trim() ? (0, i.jsx)('span', {
                className: r()('emoji', 'emoji-text', Z.icon),
                ...e,
                children: u
            }) : (0, i.jsx)('img', {
                className: Z.icon,
                src: s,
                alt: ''
            })
        })
    }, null !== (n = t.id) && void 0 !== n ? n : t.name);
}
function A(e, n) {
    let t = (0, s.MZ)(n.guild_id).filter(e => {
        var t;
        return !(e.useSpriteSheet && S.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : '') >= 0) && !I.ZP.isEmojiPremiumLocked({
            emoji: e,
            channel: n,
            intention: m.Hz.REACTION
        });
    });
    t.length > 4 && (t.length = 4);
    let a = E.nc.useSetting(), r = (0, d.$R)(n), M = (0, l.e7)([f.Z], () => a && r && (n.isPrivate() || f.Z.can(g.Plq.ADD_REACTIONS, n)), [
            n,
            r,
            a
        ]), _ = t => {
            (0, u.rU)(n.id, e.id, (0, c.g1)(t), void 0);
        };
    return M && t.length > 0 ? (0, i.jsx)(o.MenuGroup, {
        className: Z.wrapper,
        children: t.map((e, n) => {
            var t;
            return (0, i.jsx)(o.MenuItem, {
                id: 'quickreact-'.concat(null !== (t = e.id) && void 0 !== t ? t : n),
                render: n => {
                    let {isFocused: t} = n;
                    return (0, i.jsx)(v, {
                        emoji: e,
                        isFocused: t
                    });
                },
                action: () => _(e),
                dontCloseOnActionIfHoldingShiftKey: !0
            }, n);
        })
    }) : null;
}
