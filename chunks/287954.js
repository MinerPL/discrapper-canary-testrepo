n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(510659),
    s = n(511341),
    o = n(215105),
    l = n(429974),
    u = n(228168);
function c(e) {
    var t, n;
    let { user: c, guildId: d, channelId: _, profileType: E, sourceType: f, sourceDetails: h, onClose: p, children: I } = e,
        { interactionType: m, interactionSource: T, resetInteraction: S } = (0, a.Xo)(),
        g = E === u.y0.FULL_SIZE ? (0, l.z)(c.id, d) : void 0,
        A = T === f && m === u.P.REACT,
        N = T === f && m === u.P.REPLY;
    return (0, r.jsx)(i.Popout, {
        renderPopout: (e) => {
            let { setPopoutRef: t } = e,
                n = A ? s.Z : o.Z;
            return (0, r.jsx)(n, {
                user: c,
                guildId: d,
                channelId: _,
                profileType: E,
                sourceType: f,
                sourceDetails: h,
                onClose: p,
                modalKey: g,
                setPopoutRef: t
            });
        },
        onRequestClose: () => {
            S(), null == p || p();
        },
        shouldShow: A || N,
        ...((t = m),
        (n = E),
        t === u.P.REACT
            ? {
                  position: 'left',
                  align: 'top',
                  animationPosition: 'right',
                  spacing: 8
              }
            : {
                  position: 'bottom',
                  align: n === u.y0.FULL_SIZE ? 'center' : 'left',
                  animationPosition: 'top',
                  spacing: 6
              }),
        children: I
    });
}
