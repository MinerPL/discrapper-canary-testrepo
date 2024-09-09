var i = n(735250);
n(470079);
var a = n(481060),
    s = n(643560);
t.Z = (e) => {
    let { entry: t, hideEditButton: n, children: l, onRequestOpen: r, onRequestClose: o } = e;
    return (0, i.jsx)(a.Popout, {
        onRequestOpen: r,
        onRequestClose: o,
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(s.default, {
                entry: t,
                closePopout: a,
                hideEditButton: n
            });
        },
        children: l
    });
};
