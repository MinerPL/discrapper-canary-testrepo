t.d(n, {
    Z: function () {
        return a;
    }
});
var s = t(735250), o = t(470079);
let r = e => n => {
    null == n || n.stopPropagation(), e();
};
function a(e) {
    let {
            onClick: n,
            className: t,
            children: a
        } = e, l = o.useRef(null);
    return (0, s.jsx)('div', {
        onClick: n,
        ref: l,
        className: t,
        children: a({
            areaRef: l,
            handleStopPropagation: r
        })
    });
}
