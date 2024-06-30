n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var i = n(650886);
function a(e) {
    let {
        disabled: t,
        deviceId: n,
        width: a,
        height: o
    } = e;
    return t ? (0, r.jsx)('div', {
        className: 'media-engine-video',
        style: {
            width: a,
            height: o
        }
    }) : (0, r.jsx)(i.Z, {
        streamId: n,
        style: {
            width: a,
            height: o
        }
    });
}
a.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
