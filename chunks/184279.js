n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), l = n(43267), s = n(933557), r = n(534091), o = n(797717), c = n(967128), u = n(689938), d = n(492932), h = n(191986);
let p = () => (0, i.jsx)('svg', {
    width: '46',
    height: '34',
    viewBox: '0 0 46 34',
    className: d.chatBubbleLip,
    xmlns: 'http://www.w3.org/2000/svg',
    children: (0, i.jsx)('path', { d: 'M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z' })
});
function m(e) {
    var t;
    let {channel: n} = e, m = null !== (t = (0, s.ZP)(n)) && void 0 !== t ? t : '';
    return (0, i.jsxs)('div', {
        id: (0, r.p)(n.id, n.id),
        className: d.headerContainer,
        children: [
            (0, i.jsx)('img', {
                src: h,
                className: d.wumpusImage,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: d.chatBubbleContainer,
                children: [
                    (0, i.jsx)(p, {}),
                    (0, i.jsxs)('div', {
                        className: d.chatBubble,
                        children: [
                            (0, i.jsx)(a.Avatar, {
                                'aria-label': m,
                                size: a.AvatarSizes.SIZE_80,
                                src: (0, l.x)(n, 80, !1)
                            }),
                            (0, i.jsxs)(c.Ot, {
                                className: d.emptyMessageHeader,
                                children: [
                                    m,
                                    (0, i.jsx)(o.Z, {
                                        className: d.flowerStar,
                                        size: 24,
                                        children: (0, i.jsx)(a.CheckmarkSmallIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: d.verified
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.jz, { children: u.Z.Messages.SYSTEM_DM_EMPTY_MESSAGE })
                        ]
                    })
                ]
            })
        ]
    });
}
