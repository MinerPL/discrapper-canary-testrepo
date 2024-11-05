var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(481060),
    s = n(629769);
let a = (e) => {
    let { className: t, onDismiss: n, 'aria-label': o } = e;
    return (0, i.jsx)(l.Button, {
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.NONE,
        onClick: n,
        className: r()(s.dismissButton, t),
        'aria-label': o,
        children: (0, i.jsx)(l.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
(a.displayName = 'DismissButton'), (t.Z = a);
