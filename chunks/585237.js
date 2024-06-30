var i, a, s = n(735250);
n(470079);
var l = n(481060), r = n(285952), o = n(226689);
(i = a || (a = {})).SMALL = 'SMALL', i.MEDIUM = 'MEDIUM', i.LARGE = 'LARGE';
let c = {
        SMALL: o.dropdownSmall,
        MEDIUM: o.dropdownMedium,
        LARGE: o.dropdownLarge
    }, d = e => {
        let {
            onDropdownClick: t,
            children: n,
            contentClassName: i,
            dropdownSize: a = 'MEDIUM',
            ...d
        } = e;
        return (0, s.jsx)(l.Button, {
            ...d,
            children: (0, s.jsxs)(r.Z, {
                align: r.Z.Align.CENTER,
                children: [
                    (0, s.jsx)(r.Z.Child, {
                        className: i,
                        children: n
                    }),
                    null != t ? (0, s.jsxs)(l.Clickable, {
                        className: c[a],
                        onClick: e => {
                            e.stopPropagation(), null != t && t(e);
                        },
                        children: [
                            (0, s.jsx)('div', { className: o.arrowSeparator }),
                            (0, s.jsx)(l.ChevronSmallDownIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: o.dropdownArrow
                            })
                        ]
                    }) : null
                ]
            })
        });
    };
d.DropdownSizes = a, d.Sizes = l.Button.Sizes, d.Colors = l.Button.Colors, d.Looks = l.Button.Looks, t.Z = d;
