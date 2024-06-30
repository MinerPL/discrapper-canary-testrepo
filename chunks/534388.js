n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(287734), s = n(835473), l = n(67212), u = n(493355), c = n(134598), d = n(885110), _ = n(366695), E = n(689938), f = n(474332);
function h() {
    let e = (0, i.e7)([d.Z], () => d.Z.getBroadcast()), t = (0, s.q)(null == e ? void 0 : e.applicationId);
    if (null == e)
        return null;
    let n = () => {
            (0, c.X)();
        }, h = () => {
            (0, l.b_)(), o.default.disconnect();
        };
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            null != t && (0, r.jsx)(_.Z, {
                game: t,
                size: _.Z.Sizes.LARGE
            }),
            (0, r.jsxs)('div', {
                className: f.content,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: E.Z.Messages.BROADCASTING_CAPTURE_PAUSED
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: E.Z.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                    }),
                    (0, r.jsxs)('div', {
                        className: f.actions,
                        children: [
                            (0, r.jsx)(a.Tooltip, {
                                text: E.Z.Messages.BROADCASTING_SETTINGS,
                                children: e => (0, r.jsx)(a.Clickable, {
                                    ...e,
                                    onClick: n,
                                    children: (0, r.jsx)(a.SettingsIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: f.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            }),
                            (0, r.jsx)(a.Tooltip, {
                                text: E.Z.Messages.STOP_BROADCASTING,
                                children: e => (0, r.jsx)(a.Clickable, {
                                    ...e,
                                    onClick: h,
                                    children: (0, r.jsx)(u.Z, {
                                        className: f.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
