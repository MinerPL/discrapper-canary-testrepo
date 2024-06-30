n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250), o = n(470079), r = n(920906), a = n(130653), i = n(613087);
function l(e) {
    let {
            expansionSpring: t,
            isExpanded: n
        } = e, {
            animatedComponentProps: l,
            recalculateAnimationPositions: c
        } = o.useContext(i.B$), d = o.useContext(a.T);
    return o.useEffect(() => {
        c();
    }, [
        c,
        n
    ]), (0, s.jsx)('div', {
        style: {
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        },
        children: l.map(e => {
            let {
                id: n,
                collapsedLeft: o,
                expandedLeft: a,
                collapsedTop: i,
                expandedTop: l,
                collapsedRight: c,
                expandedRight: u
            } = e;
            return (0, s.jsx)(r.animated.div, {
                id: d ? 'quest-bar-v2-preview-' + n : 'quest-bar-v2-' + n,
                style: {
                    zIndex: 2,
                    position: 'absolute',
                    top: t.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            i,
                            l
                        ]
                    }),
                    right: Math.min(c, u),
                    left: t.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            o,
                            a
                        ]
                    })
                }
            }, n);
        })
    });
}
