n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(481060),
    r = n(23536),
    o = n(40851),
    c = n(731290),
    u = n(306680),
    d = n(594174),
    h = n(585483),
    p = n(665149),
    m = n(981631),
    _ = n(689938);
t.Z = function (e) {
    let { channel: t } = e,
        n = (0, a.e7)(
            [c.Z, d.default],
            () => {
                let e = d.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !c.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        [f, E] = s.useState(!1),
        g = (0, a.e7)([u.ZP], () => u.ZP.hasUnreadPins(t.id), [t]),
        C = (0, o.Aq)(),
        I = s.useCallback(() => {
            !n && E((e) => !e);
        }, [n]);
    function T(e) {
        !(null == e ? void 0 : e.shiftKey) && C.dispatch(m.CkL.POPOUT_CLOSE);
    }
    return (
        s.useEffect(
            () => (
                h.S.subscribe(m.CkL.TOGGLE_CHANNEL_PINS, I),
                () => {
                    h.S.unsubscribe(m.CkL.TOGGLE_CHANNEL_PINS, I);
                }
            ),
            [I]
        ),
        (0, i.jsx)(l.Popout, {
            shouldShow: f,
            animation: l.Popout.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => E(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(r.Z, {
                    ...e,
                    onJump: T,
                    channel: t
                });
            },
            children: (e, t) => {
                let { isShown: s } = t;
                return (0, i.jsx)(p.JO, {
                    ...e,
                    onClick: I,
                    tooltip: s ? null : _.Z.Messages.PINNED_MESSAGES,
                    icon: l.PinIcon,
                    'aria-label': _.Z.Messages.PINNED_MESSAGES,
                    disabled: n,
                    showBadge: g,
                    selected: s
                });
            }
        })
    );
};
