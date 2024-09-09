n.d(t, {
    Z: function () {
        return o;
    }
});
var s,
    a,
    i = n(735250);
n(470079);
var r = n(481060),
    l = n(952803);
((s = a || (a = {})).ARROW_DOWN = 'arrow_down'), (s.CROSS = 'cross');
function o(e) {
    let { type: t } = e;
    return (0, i.jsx)('div', {
        className: l.dividerContainer,
        children: (0, i.jsx)('div', {
            className: l.dividerIconContainer,
            children: (function (e) {
                switch (e) {
                    case 'arrow_down':
                        return (0, i.jsx)(r.ArrowSmallDownIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.dividierIcon
                        });
                    case 'cross':
                        return (0, i.jsx)(r.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.dividierIcon
                        });
                    default:
                        return null;
                }
            })(t)
        })
    });
}
o.Type = a;
