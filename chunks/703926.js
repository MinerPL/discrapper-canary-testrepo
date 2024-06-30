s.d(n, {
    m: function () {
        return N;
    }
});
var l = s(735250), i = s(470079), t = s(481060), r = s(474936), a = s(273912), c = s(426831), o = s(257510), u = s(74838), d = s(720834), _ = s(385925), m = s(588921), I = s(718720), E = s(721513);
let p = {
        [r.Cj.STANDARD_BOX]: _,
        [r.Cj.CAKE]: m,
        [r.Cj.CHEST]: I,
        [r.Cj.COFFEE]: E,
        [r.Cj.SNOWGLOBE]: '',
        [r.Cj.BOX]: '',
        [r.Cj.CUP]: '',
        [r.Cj.SEASONAL_CAKE]: o,
        [r.Cj.SEASONAL_CHEST]: u,
        [r.Cj.SEASONAL_COFFEE]: d,
        [r.Cj.SEASONAL_STANDARD_BOX]: c
    }, N = i.forwardRef(function (e, n) {
        let {
            isSelected: s,
            giftStyle: i,
            setSelectedGiftStyle: r,
            onFocus: c,
            onBlur: o
        } = e;
        return (0, l.jsx)(t.Clickable, {
            innerRef: n,
            onClick: () => r(i),
            onFocus: c,
            onBlur: o,
            children: (0, l.jsx)('img', {
                style: {
                    width: '100%',
                    height: '100%'
                },
                alt: '',
                src: p[i],
                className: s ? a.customGiftBoxHighlighted : a.customGiftBox
            })
        });
    });
