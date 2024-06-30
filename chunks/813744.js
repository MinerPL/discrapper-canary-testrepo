n.d(t, {
    Z: function () {
        return _;
    }
}), n(47120), n(653041);
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(857192), s = n(517100), l = n(594174), u = n(153850), c = n(231338), d = n(767778);
function _() {
    var e;
    let t = (0, i.e7)([o.default], () => o.default.isIdleStatusIndicatorEnabled), n = (0, i.e7)([l.default], () => {
            var e, t;
            return null !== (t = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t;
        }), [_, E] = (0, i.Wu)([s.Z], () => [
            s.Z.isIdle(),
            s.Z.isAFK()
        ]), f = [];
    return !_ && !E && f.push('ACTIVE'), _ && f.push('IDLE'), E && f.push('AFK'), n && t ? (0, r.jsx)(u.ZP, {
        children: (0, r.jsxs)('div', {
            className: d.container,
            children: [
                (0, r.jsxs)('div', {
                    className: d.status,
                    children: [
                        (0, r.jsx)(a.Status, {
                            status: f.includes('ACTIVE') ? c.Sk.ONLINE : c.Sk.IDLE,
                            className: d.statusIndicator
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            children: 'IDLE STATUS:'
                        }),
                        (0, r.jsx)('div', {
                            className: d.statusText,
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-md/bold',
                                children: f.join(' + ')
                            })
                        })
                    ]
                }),
                _ && (0, r.jsxs)(a.Text, {
                    variant: 'text-md/normal',
                    children: [
                        'Idle since:',
                        ' ',
                        new Date(null !== (e = s.Z.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
                            year: 'numeric',
                            day: 'numeric',
                            month: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric'
                        })
                    ]
                })
            ]
        })
    }) : null;
}
