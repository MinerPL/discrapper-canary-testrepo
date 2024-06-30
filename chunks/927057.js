n.d(l, {
    Z: function () {
        return f;
    }
});
var t = n(735250), i = n(470079), r = n(481060), a = n(471445), s = n(592125), u = n(430824), o = n(970184), d = n(811654), c = n(344991), m = n(981631), p = n(474992);
function f(e) {
    var l;
    let {channelTypes: n} = e, f = (0, o.CJ)(), v = null == f ? void 0 : null === (l = f.message) || void 0 === l ? void 0 : l.getChannelId(), E = s.Z.getChannel(v), N = u.Z.getGuild(null == E ? void 0 : E.getGuildId()), h = i.useMemo(() => (0, d.tx)(e.defaultValues, null == N ? void 0 : N.id, n), [
            e.defaultValues,
            N,
            n
        ]);
    return (0, t.jsx)(c.ZP, {
        selectActionComponent: e,
        queryOptions: e => (0, d.af)(e, v, n),
        renderIcon: (e, l) => {
            let n = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == n)
                return null;
            let i = n.type === m.d4z.GUILD_CATEGORY ? r.FolderIcon : (0, a.KS)(n);
            return null != i ? (0, t.jsx)(i, {
                size: 'custom',
                color: 'currentColor',
                width: l,
                height: l
            }) : null;
        },
        renderOptionLabel: e => (0, t.jsx)('span', {
            className: p.label,
            children: e.label
        }),
        defaultValues: h
    });
}
