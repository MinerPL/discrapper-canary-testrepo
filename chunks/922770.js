n.d(t, {
    $: function () {
        return _;
    },
    R: function () {
        return i;
    }
});
var r, i, a = n(735250), o = n(470079), s = n(120356), l = n.n(s), u = n(186325), c = n(689938), d = n(107013);
(r = i || (i = {})).WANDERING_CUBES = 'wanderingCubes', r.CHASING_DOTS = 'chasingDots', r.PULSING_ELLIPSIS = 'pulsingEllipsis', r.SPINNING_CIRCLE = 'spinningCircle', r.SPINNING_CIRCLE_SIMPLE = 'spinningCircleSimple', r.LOW_MOTION = 'lowMotion';
function _(e) {
    let {
            type: t = 'wanderingCubes',
            animated: n = !0,
            className: r,
            itemClassName: i,
            'aria-label': s,
            ..._
        } = e, {reducedMotion: E} = o.useContext(u.S), f = E.enabled ? function (e) {
            switch (e) {
            case 'wanderingCubes':
            case 'chasingDots':
                return 'lowMotion';
            default:
                return e;
            }
        }(t) : t;
    if (s = null != s ? s : c.Z.Messages.LOADING, 'spinningCircle' === f || 'spinningCircleSimple' === f)
        return (0, a.jsx)('div', {
            className: l()(d.spinner, d[f], r, { [d.stopAnimation]: !n }),
            role: 'img',
            'aria-label': s,
            ..._,
            children: (0, a.jsx)('div', {
                className: d.spinningCircleInner,
                children: (0, a.jsxs)('svg', {
                    className: d.circular,
                    viewBox: '25 25 50 50',
                    children: [
                        'spinningCircle' === f && (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)('circle', {
                                    className: l()(d.path, d.path3, i),
                                    cx: '50',
                                    cy: '50',
                                    r: '20'
                                }),
                                (0, a.jsx)('circle', {
                                    className: l()(d.path, d.path2, i),
                                    cx: '50',
                                    cy: '50',
                                    r: '20'
                                })
                            ]
                        }),
                        (0, a.jsx)('circle', {
                            className: l()(d.path, i),
                            cx: '50',
                            cy: '50',
                            r: '20'
                        })
                    ]
                })
            })
        });
    let h = l()(d.item, i);
    return (0, a.jsx)('span', {
        className: l()(d.spinner, r, { [d.stopAnimation]: !n }),
        role: 'img',
        'aria-label': s,
        ..._,
        children: (0, a.jsxs)('span', {
            className: l()(d.inner, d[f]),
            children: [
                (0, a.jsx)('span', { className: h }),
                (0, a.jsx)('span', { className: h }),
                'pulsingEllipsis' === f || 'lowMotion' === f ? (0, a.jsx)('span', { className: h }) : null
            ]
        })
    });
}
_.Type = i;
