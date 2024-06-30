n.d(t, {
    Z: function () {
        return A;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(481060), s = n(32750), r = n(323597), o = n(438536), c = n(193987), u = n(933793), d = n(13736), h = n(732393), p = n(214906), m = n(612856), _ = n(137591), f = n(299206), E = n(727429), C = n(359110), g = n(502568), I = n(585483), x = n(739830), T = n(488131), N = n(981631), v = n(689938);
function S(e) {
    let {channel: t} = e, [n, s] = a.useState(!1);
    function r() {
        s(e => !e);
    }
    let o = v.Z.Messages.MORE;
    return (0, i.jsx)(l.Popout, {
        shouldShow: n,
        animation: l.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(Z, {
                ...e,
                channel: t
            });
        },
        children: (e, t) => {
            let {isShown: n} = t;
            return (0, i.jsx)(g.ZP.Icon, {
                ...e,
                onClick: r,
                tooltip: n ? null : o,
                icon: l.MoreHorizontalIcon,
                'aria-label': o,
                selected: n
            });
        }
    });
}
function Z(e) {
    let {
            channel: t,
            closePopout: n,
            onSelect: a
        } = e, E = (0, o.Z)(t, 'Sidebar Overflow'), g = (0, u.Z)(t), x = (0, p.Z)(t), T = (0, m.Z)(t), S = (0, s.Z)(t), Z = (0, c.Z)(t), A = (0, h.Z)(t.id), M = (0, d.Z)(t), b = (0, r.Z)(t), R = (0, f.Z)({
            id: t.id,
            label: v.Z.Messages.COPY_ID_THREAD
        }), j = (0, _.Z)(t);
    function L() {
        (0, C.Kh)(t.id);
    }
    return (0, i.jsxs)(l.Menu, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': v.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
        onSelect: a,
        children: [
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    E,
                    (0, i.jsx)(l.MenuItem, {
                        id: 'open',
                        label: v.Z.Messages.OPEN_IN_FULL_VIEW,
                        action: L
                    })
                ]
            }),
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    x,
                    T
                ]
            }),
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    M,
                    g,
                    A
                ]
            }),
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    (0, i.jsx)(l.MenuItem, {
                        id: 'search',
                        label: v.Z.Messages.SEARCH,
                        icon: l.WindowLaunchIcon,
                        action: function () {
                            L(), setTimeout(() => {
                                I.S.dispatch(N.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }, 2000);
                        }
                    }),
                    (0, i.jsx)(l.MenuItem, {
                        id: 'pins',
                        label: v.Z.Messages.PINS,
                        icon: l.WindowLaunchIcon,
                        action: function () {
                            L(), I.S.dispatch(N.CkL.TOGGLE_CHANNEL_PINS);
                        }
                    })
                ]
            }),
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    j,
                    S,
                    Z,
                    b
                ]
            }),
            (0, i.jsx)(l.MenuGroup, { children: R })
        ]
    });
}
function A(e) {
    let {
        channel: t,
        baseChannelId: n
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(x.Z, { channel: t }),
            (0, i.jsx)(S, { channel: t }),
            (0, i.jsx)(g.ZP.Icon, {
                icon: l.CloseSmallIcon,
                tooltip: v.Z.Messages.CLOSE,
                onClick: () => (0, T.vN)((0, E.e)(t), null != n ? n : t.parent_id)
            })
        ]
    });
}
