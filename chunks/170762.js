var r = n(735250);
n(470079);
var i = n(481060), a = n(921944), o = n(689938), s = n(439061);
t.Z = e => {
    let {markAsDismissed: t} = e;
    return (0, r.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, r.jsx)(i.HeartIcon, {
                size: 'md',
                color: 'currentColor',
                className: s.icon
            }),
            (0, r.jsx)('div', {
                className: s.content,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-xs/normal',
                    children: o.Z.Messages.EMOJI_PICKER_FAVORITES_TIP
                })
            }),
            (0, r.jsx)(i.Clickable, {
                onClick: () => t(a.L.UNKNOWN),
                children: (0, r.jsx)(i.CloseSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: s.close
                })
            })
        ]
    });
};
