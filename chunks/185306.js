var t = n(735250),
    r = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(263568),
    i = n(481060),
    c = n(689938),
    u = n(785440);
function d(e) {
    let { label: a, isSelected: n, onClick: r, children: l } = e,
        o = (0, i.useRadioItem)({
            isSelected: n,
            label: a
        });
    return (0, t.jsx)(i.Clickable, {
        ...o,
        onClick: r,
        className: s()(u.option, n && u.optionSelected),
        children: l
    });
}
a.Z = function (e) {
    let { selectedLayoutType: a, onSelectedLayoutType: n } = e,
        l = (0, i.useRadioGroup)({ orientation: 'horizontal' }),
        s = r.useMemo(
            () => [
                {
                    name: o.C.DEFAULT,
                    label: c.Z.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: i.ListBulletsIcon
                },
                {
                    name: o.C.IMAGE_ONLY_ANSWERS,
                    label: c.Z.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: i.ImageIcon
                }
            ],
            []
        ),
        _ = (e) => {
            n(e);
        };
    return (0, t.jsx)('div', {
        className: u.container,
        'aria-label': c.Z.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
        ...l,
        children: s.map((e) => {
            let n = e.icon;
            return (0, t.jsx)(
                d,
                {
                    label: e.label,
                    isSelected: e.name === a,
                    onClick: () => _(e.name),
                    children: (0, t.jsx)(n, { className: u.icon })
                },
                e.name
            );
        })
    });
};
