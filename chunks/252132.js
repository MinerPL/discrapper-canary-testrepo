n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(27457), l = n(131951), s = n(89032);
function r(e) {
    let {
            aspectRatio: t,
            blocked: n,
            channel: r,
            className: o,
            focused: c,
            children: u,
            inCall: d,
            inPopout: h,
            noBorder: p,
            onClick: m,
            onContextMenu: _,
            onDoubleClick: f,
            onVideoResize: E,
            paused: C,
            pulseSpeakingIndicator: g,
            participant: I,
            width: x,
            ...T
        } = e, N = l.Z.getVideoComponent();
    return (0, i.jsx)('div', {
        style: { width: x },
        className: s.spaceBetweenTiles,
        children: (0, i.jsxs)('div', {
            className: s.tileSizer,
            style: { aspectRatio: t },
            children: [
                (0, i.jsx)(a.ZP, {
                    blocked: n,
                    channel: r,
                    className: o,
                    focused: c,
                    inCall: d,
                    inPopout: h,
                    noBorder: p,
                    onClick: m,
                    onContextMenu: _,
                    onDoubleClick: f,
                    onVideoResize: E,
                    participant: I,
                    paused: C,
                    pulseSpeakingIndicator: g,
                    videoComponent: N,
                    width: x,
                    ...T
                }),
                u
            ]
        })
    });
}
