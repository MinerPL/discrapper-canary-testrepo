n.d(t, {
    Z: function () {
        return c;
    }
}), n(47120);
var i = n(735250);
n(470079);
var l = n(481060), r = n(619915), a = n(737592), s = n(561788), o = n(854018);
function c(e) {
    let {
            channel: t,
            onAction: n
        } = e, c = (0, r.ZP)(t), u = Array.from((0, r.uF)(c).values());
    return 0 === u.length ? null : (0, i.jsxs)(l.Scroller, {
        className: o.container,
        children: [
            (0, i.jsx)('div', {
                className: o.popoutHeaderContainer,
                children: (0, i.jsx)(s.Z, { channel: t })
            }),
            (0, i.jsx)('div', { className: o.headerDivider }),
            u.map((e, l) => {
                var r;
                return (0, i.jsx)(a.Z, {
                    embeddedApp: e,
                    presenceActivity: null !== (r = e.presenceActivity) && void 0 !== r ? r : void 0,
                    channel: t,
                    onAction: n
                }, l);
            })
        ]
    });
}
