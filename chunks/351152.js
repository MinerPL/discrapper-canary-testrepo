t.d(n, {
    Z: function () {
        return x;
    }
}), t(390547);
var l = t(735250);
t(470079);
var s = t(120356), a = t.n(s), i = t(392711), r = t.n(i), o = t(442837), u = t(481060), c = t(984933), d = t(430824), m = t(496675), E = t(771845), _ = t(346656), S = t(259580), g = t(382182), h = t(148381), C = t(689938), N = t(278768), Z = t(96499);
function I(e) {
    let {
            guildId: n,
            onClick: t
        } = e, s = (0, o.e7)([d.Z], () => d.Z.getGuild(n)), a = (0, o.e7)([
            c.ZP,
            d.Z,
            m.Z
        ], () => c.ZP.getChannels(n)[c.Zb].some(e => {
            let {channel: n} = e;
            return (0, g.JL)(n, d.Z, m.Z);
        }));
    return null != s && a ? (0, l.jsxs)(u.Clickable, {
        onClick: () => t(n),
        className: Z.guildRow,
        children: [
            (0, l.jsx)(_.Z, {
                guild: s,
                size: _.Z.Sizes.SMALL,
                className: Z.guildIcon
            }),
            (0, l.jsx)(u.Text, {
                variant: 'text-md/normal',
                className: Z.guildName,
                children: s.toString()
            }),
            (0, l.jsx)(S.Z, {
                direction: S.Z.Directions.RIGHT,
                className: Z.guildArrow
            })
        ]
    }) : null;
}
function x(e) {
    let {onSelectGuild: n} = e, t = (0, o.e7)([E.ZP], () => E.ZP.getGuildFolders());
    return (0, l.jsx)(h.Z, {
        title: C.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
        scrollerClassName: a()(Z.guildScroller, N.marginBottom),
        children: r().flatMap(t, e => {
            let {guildIds: t} = e;
            return t.map(e => (0, l.jsx)(I, {
                guildId: e,
                onClick: n
            }, e));
        })
    });
}
