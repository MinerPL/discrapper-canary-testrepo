a.d(t, {
    Z: function () {
        return d;
    }
});
var l = a(735250);
a(470079);
var n = a(481060),
    s = a(547972),
    i = a(703288),
    o = a(332325),
    r = a(689938),
    c = a(145981);
function d(e) {
    let { filterQuery: t, setFilterQuery: a, onClose: d, sortOrder: u, setSortOrder: m } = e;
    return (0, l.jsxs)(n.ModalHeader, {
        className: c.root,
        separator: !1,
        children: [
            (0, l.jsx)(n.ClipsIcon, {
                size: 'xs',
                color: 'currentColor',
                className: c.icon
            }),
            (0, l.jsx)(n.Heading, {
                className: c.title,
                variant: 'heading-xxl/bold',
                children: r.Z.Messages.CLIPS
            }),
            (0, l.jsx)('div', {
                className: c.betaTag,
                children: (0, l.jsx)(i.Z, {})
            }),
            (0, l.jsx)(n.SearchBar, {
                autoFocus: !0,
                size: n.SearchBar.Sizes.MEDIUM,
                placeholder: r.Z.Messages.SEARCH,
                className: c.queryInput,
                query: t,
                onChange: a,
                onClear: () => a('')
            }),
            (0, l.jsx)(n.Select, {
                placeholder: r.Z.Messages.CLIPS_SORT_PLACEHOLDER,
                className: c.sortInput,
                options: [
                    {
                        value: 'descending',
                        label: r.Z.Messages.CLIPS_SORT_RECENT
                    },
                    {
                        value: 'ascending',
                        label: r.Z.Messages.CLIPS_SORT_OLDEST
                    }
                ],
                isSelected: (e) => e === u,
                select: m,
                serialize: (e) => e
            }),
            (0, l.jsx)(n.Button, {
                color: n.ButtonColors.TRANSPARENT,
                size: n.Button.Sizes.NONE,
                className: c.settingsButton,
                look: n.Button.Looks.FILLED,
                onClick: () => {
                    (0, s.Z)(o.Z.CLIPS), d();
                },
                children: (0, l.jsx)(n.SettingsIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(n.ModalCloseButton, {
                className: c.button,
                onClick: d
            })
        ]
    });
}
