n.d(t, {
    o: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var s = n(120356), a = n.n(s), r = n(481060), l = n(788307), o = n(2052), c = n(785717), d = n(695346), u = n(689938), _ = n(701747);
function E(e, t) {
    let s = (0, o.O)(), {trackUserProfileAction: E} = (0, c.KZ)();
    function h(e) {
        e.stopPropagation(), d.Ok.updateSetting(void 0);
    }
    function I() {
        E({ action: 'PRESS_SET_CUSTOM_STATUS' }), (0, r.openModalLazy)(async () => {
            let {default: e} = await n.e('51714').then(n.bind(n, 211065));
            return t => (0, i.jsx)(e, {
                sourceAnalyticsContext: s,
                ...t
            });
        });
    }
    if (null != e) {
        let n = null != e.emoji ? t => {
            let {className: n} = t;
            return (0, i.jsx)(l.I, {
                className: n,
                emoji: e.emoji,
                animate: !0,
                hideTooltip: !0
            });
        } : void 0;
        return (0, i.jsx)(r.MenuItem, {
            id: 'edit-custom-status',
            label: u.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
            icon: n,
            focusedClassName: t,
            showIconFirst: !0,
            hint: e => (0, i.jsx)(r.Clickable, {
                ...e,
                onClick: h,
                tabIndex: -1,
                children: (0, i.jsx)(r.CircleXIcon, {
                    size: 'sm',
                    color: 'currentColor'
                })
            }),
            action: I
        });
    }
    return (0, i.jsx)(r.MenuItem, {
        id: 'set-custom-status',
        focusedClassName: t,
        label: u.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
        icon: e => (0, i.jsx)('div', { className: a()(_.customEmojiPlaceholder, e) }),
        action: I,
        showIconFirst: !0
    });
}
