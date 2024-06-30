n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(739566), r = n(998951), o = n(113039), c = n(778947), d = n(541451);
function u(e) {
    let {
            message: t,
            channel: n,
            content: a,
            className: u,
            compact: _,
            popoutProps: E,
            hideTimestamp: m = !1,
            withFooter: I = !1,
            ...T
        } = e, h = (0, l.ZP)(t);
    return (0, i.jsx)('div', {
        className: s()({ [d.withFooter]: I }, d.embedCard, { [d.compact]: _ }, u),
        children: (0, i.jsx)(r.Z, {
            ...T,
            className: s()(d.messageContainer, { [d.compact]: _ }),
            childrenMessageContent: (0, i.jsx)(o.ZP, {
                className: s()(d.__invalid_messageContent, { [d.compact]: _ }),
                message: t,
                content: a
            }),
            childrenHeader: (0, i.jsx)(c.ZP, {
                message: t,
                channel: n,
                author: h,
                guildId: null == n ? void 0 : n.guild_id,
                compact: _,
                hideTimestamp: m,
                className: s()(d.header, { [d.compact]: _ }),
                ...null != E ? E : {}
            }),
            compact: _
        })
    });
}
