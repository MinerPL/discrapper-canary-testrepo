n.d(t, {
    Z: function () {
        return m;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(433517), o = n(518774), c = n(27457), u = n(981631), d = n(289999), h = n(972667);
let p = 'CameraPreviewPosition';
function m(e) {
    let {
            width: t,
            onContextMenuParticipant: n,
            height: l,
            channel: m,
            participants: _
        } = e, [f, E] = function () {
            let [e, t] = a.useState(() => r.K.get(p, u.VD2.BOTTOM_RIGHT));
            return [
                e,
                a.useCallback(e => {
                    r.K.set(p, e), t(e);
                }, [])
            ];
        }(), C = a.useRef(null), g = null == m.getGuildId() ? 70 : 50;
    return a.useLayoutEffect(() => {
        var e;
        null === (e = C.current) || void 0 === e || e.ensureIsInPosition();
    }, [_.length]), (0, i.jsx)('div', {
        className: d.container,
        children: (0, i.jsx)(o._, {
            position: f,
            id: 0,
            ref: C,
            onMove: (e, t) => E(t),
            maxX: t,
            maxY: l,
            edgeOffsetTop: g,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            children: (0, i.jsx)('div', {
                className: d.tileContainer,
                children: _.map(e => (0, i.jsx)(c.ZP, {
                    participant: e,
                    channel: m,
                    onContextMenu: n,
                    className: s()(d.tile, h.elevationHigh),
                    fit: c.BP.COVER,
                    inCall: !0,
                    inPopout: !1,
                    width: 160
                }, e.id))
            })
        })
    });
}
