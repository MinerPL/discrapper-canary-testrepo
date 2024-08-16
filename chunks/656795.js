n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var i = n(650886);
function a(e) {
    let { disabled: t, deviceId: n, width: a, height: s } = e;
    return t
        ? (0, r.jsx)('div', {
              className: 'media-engine-video',
              style: {
                  width: a,
                  height: s
              }
          })
        : (0, r.jsx)(i.Z, {
              streamId: n,
              style: {
                  width: a,
                  height: s
              }
          });
}
a.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
