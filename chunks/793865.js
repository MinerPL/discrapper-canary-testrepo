n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(512722), a = n.n(i), o = n(442837), s = n(481060), l = n(410575), u = n(594174), c = n(907285), d = n(737013), _ = n(981631), E = n(689938);
function f(e) {
    let {
            onClose: t,
            onSelect: n
        } = e, i = (0, o.e7)([u.default], () => {
            let e = u.default.getCurrentUser();
            return a()(null != e, 'VideoDeviceMenu: currentUser cannot be undefined'), e;
        }), f = (0, c.Z)(), h = (0, d.Z)(i.id);
    return (0, r.jsx)(l.Z, {
        object: _.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(s.Menu, {
            onClose: t,
            navId: 'video-device-context',
            'aria-label': E.Z.Messages.FORM_LABEL_VIDEO_DEVICE,
            onSelect: n,
            children: [
                (0, r.jsx)(s.MenuGroup, {
                    label: E.Z.Messages.FORM_LABEL_VIDEO_DEVICE,
                    children: f
                }),
                (0, r.jsx)(s.MenuGroup, { children: h })
            ]
        })
    });
}
