n(47120);
var r = n(735250);
n(470079);
var i = n(481060), a = n(507671);
let o = e => {
    let {
        onChange: t,
        label: n,
        subtitle: o,
        selected: s
    } = e;
    return (0, r.jsx)('div', {
        className: a.checkboxRow,
        children: (0, r.jsxs)(i.Checkbox, {
            type: i.Checkbox.Types.INVERTED,
            onChange: () => t(),
            value: s,
            children: [
                (0, r.jsx)(i.Text, {
                    color: 'interactive-active',
                    variant: 'text-md/semibold',
                    children: n
                }),
                null != o ? (0, r.jsx)(i.Text, {
                    color: 'interactive-active',
                    variant: 'text-sm/normal',
                    children: o
                }) : null
            ]
        })
    });
};
t.Z = e => {
    let {
        element: t,
        state: n,
        onChange: i
    } = e;
    if ((null == t ? void 0 : t.type) !== 'checkbox')
        return null;
    let {data: a} = t;
    return (0, r.jsx)('div', {
        children: a.map((e, t) => {
            let [a, s, l] = e;
            return (0, r.jsx)(o, {
                onChange: () => i(a, s),
                selected: a in n,
                label: s,
                subtitle: l
            }, ''.concat(t, '+button'));
        })
    });
};
