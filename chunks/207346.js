n.d(t, {
    Z: function () {
        return d;
    }
});
var a = n(735250);
n(470079);
var l = n(481060), i = n(547972), s = n(703288), o = n(332325), r = n(689938), c = n(962773);
function d(e) {
    let {
        filterQuery: t,
        setFilterQuery: n,
        onClose: d,
        sortOrder: u,
        setSortOrder: m
    } = e;
    return (0, a.jsxs)(l.ModalHeader, {
        className: c.root,
        separator: !1,
        children: [
            (0, a.jsx)(l.ClipsIcon, {
                size: 'xs',
                color: 'currentColor',
                className: c.icon
            }),
            (0, a.jsx)(l.Heading, {
                className: c.title,
                variant: 'heading-xxl/bold',
                children: r.Z.Messages.CLIPS
            }),
            (0, a.jsx)('div', {
                className: c.betaTag,
                children: (0, a.jsx)(s.Z, {})
            }),
            (0, a.jsx)(l.SearchBar, {
                autoFocus: !0,
                size: l.SearchBar.Sizes.MEDIUM,
                placeholder: r.Z.Messages.SEARCH,
                className: c.queryInput,
                query: t,
                onChange: n,
                onClear: () => n('')
            }),
            (0, a.jsx)(l.Select, {
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
                isSelected: e => e === u,
                select: m,
                serialize: e => e
            }),
            (0, a.jsx)(l.Button, {
                color: l.ButtonColors.TRANSPARENT,
                size: l.Button.Sizes.NONE,
                className: c.settingsButton,
                look: l.Button.Looks.FILLED,
                onClick: () => {
                    (0, i.Z)(o.Z.CLIPS), d();
                },
                children: (0, a.jsx)(l.SettingsIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, a.jsx)(l.ModalCloseButton, {
                className: c.button,
                onClick: d
            })
        ]
    });
}
