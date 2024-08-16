e(312677);
var r = e(511004);
e(368387);
var o = e(486324);
async function u(n, t, e, u, i) {
    try {
        let c = await (0, r.t)(n, t, e, u, i);
        self.postMessage({
            type: o.u.CROP_GIF_COMPLETE,
            result: c
        });
    } catch (n) {
        self.postMessage({ type: o.u.CROP_GIF_ERROR });
    }
}
self.addEventListener('message', (n) => {
    let { data: t } = n;
    if (t.type === o.u.CROP_GIF_START) {
        let { gif: n, x: e, y: r, width: o, height: i } = t;
        u(n, e, r, o, i);
    }
});
