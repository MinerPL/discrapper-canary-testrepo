n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(689938),
    c = n(389723);
let d = s.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});
function u(e) {
    let { children: t } = e,
        [n, r] = s.useReducer((e) => !e, !1),
        l = s.useMemo(
            () => ({
                isOpen: n,
                toggleOpen: r
            }),
            [n]
        );
    return (0, i.jsx)(d.Provider, {
        value: l,
        children: t(n)
    });
}
u.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: r, toggleOpen: u } = s.useContext(d),
        m = r ? a.ChevronSmallUpIcon : a.ChevronSmallDownIcon,
        h = null != n ? n : r ? o.Z.Messages.HIDE : o.Z.Messages.SHOW;
    return (0, i.jsxs)(a.Clickable, {
        className: l()(c.toggle, t),
        onClick: u,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'heading-sm/semibold',
                tag: 'div',
                color: 'currentColor',
                children: h
            }),
            (0, i.jsx)(m, {
                size: 'sm',
                color: 'currentColor'
            })
        ]
    });
};
