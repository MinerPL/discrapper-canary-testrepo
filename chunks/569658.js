t.d(s, {
    Z: function () {
        return x;
    }
});
var n = t(735250);
t(470079);
var i = t(392711),
    l = t.n(i),
    a = t(442837),
    r = t(481060),
    o = t(740504),
    d = t(933557),
    c = t(471445),
    u = t(131704),
    h = t(592125),
    N = t(324067),
    S = t(699516),
    E = t(594174),
    g = t(981631),
    m = t(689938),
    _ = t(444908);
let T = (e) => {
    let {
        channel: { type: s }
    } = e;
    return (0, u.r8)(s) || s === g.d4z.GUILD_CATEGORY;
};
function x(e) {
    var s;
    let { guildId: t, onSelected: i } = e;
    let { channels: u, categories: x } =
            ((s = t),
            (0, a.cj)([N.Z], () => {
                let e = N.Z.getCategories(s);
                return {
                    channels: (0, o.Z)(e._categories, e, T),
                    categories: e
                };
            })),
        I = l()(u)
            .filter((e) => {
                let { channel: s } = e;
                return s.type !== g.d4z.GUILD_CATEGORY || (null != x[s.id] && x[s.id].length > 0);
            })
            .map((e) => {
                let { channel: s } = e;
                return {
                    value: s.id,
                    label: (0, d.F6)(s, E.default, S.Z)
                };
            })
            .value();
    return (0, n.jsxs)(r.FormItem, {
        children: [
            (0, n.jsx)(r.FormText, {
                type: r.FormText.Types.DESCRIPTION,
                children: m.Z.Messages.ADD_CHANNEL_TO_OVERRIDE
            }),
            (0, n.jsx)('div', {
                className: _.input,
                children: (0, n.jsx)(r.SearchableSelect, {
                    value: g.lds,
                    onChange: i,
                    options: I,
                    renderOptionLabel: (e) => {
                        let s = h.Z.getChannel(e.value);
                        if (null == s) return e.label;
                        let t = h.Z.getChannel(s.parent_id),
                            i = null != t ? t.name : null;
                        return (0, n.jsx)(r.IconSelectOption, {
                            icon: (0, c.KS)(s),
                            title: e.label,
                            subtitle: i
                        });
                    },
                    placeholder: m.Z.Messages.SELECT_CHANNEL_OR_CATEGORY
                })
            })
        ]
    });
}
