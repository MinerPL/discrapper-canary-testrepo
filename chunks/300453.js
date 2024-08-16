n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(735250);
n(470079);
var a = n(481060),
    i = n(621911);
function r(e) {
    let { step: t, header: n, children: r } = e;
    return (0, s.jsxs)('div', {
        className: i.triggerContainer,
        children: [
            (0, s.jsx)('div', {
                className: i.triggerCounterContainer,
                children: (0, s.jsx)('div', {
                    className: i.stepCountIcon,
                    children: (0, s.jsx)(a.Text, {
                        className: i.stepCount,
                        variant: 'text-sm/bold',
                        children: t
                    })
                })
            }),
            (0, s.jsxs)('div', {
                className: i.triggerMainContainer,
                children: [
                    (0, s.jsx)('div', {
                        className: i.__invalid_triggerHeaderContainer,
                        children: (0, s.jsx)(a.Text, {
                            className: i.triggerHeader,
                            variant: 'text-sm/normal',
                            children: n
                        })
                    }),
                    null != r &&
                        (0, s.jsx)('div', {
                            className: i.triggerSettingsContainer,
                            children: r
                        })
                ]
            })
        ]
    });
}
