n.d(t, {
    E: function () {
        return T;
    },
    Z: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(410575), s = n(358221), l = n(418469), u = n(776031), c = n(803647), d = n(199902), _ = n(131951), E = n(594174), f = n(5192), h = n(358085), p = n(981631), m = n(65154), I = n(689938);
function T(e, t, n) {
    let r = (0, i.e7)([s.Z], () => s.Z.getSelectedParticipantId(e.id)), a = (0, i.e7)([d.Z], () => null != r ? d.Z.getActiveStreamForStreamKey(r) : null, [r]);
    return (0, i.Wu)([E.default], () => {
        let r = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
            stream: t,
            username: f.ZP.getName(e.getGuildId(), e.id, E.default.getUser(t.ownerId))
        }));
        return 1 === r.length && r[0].stream.ownerId === (null == a ? void 0 : a.ownerId) ? [] : r;
    }, [
        e,
        a,
        n,
        t
    ]);
}
function g(e) {
    var t;
    let {
            channel: n,
            currentUser: i,
            activeStreams: s,
            hideSelfOptions: d = !1,
            showReportOption: E = !1,
            handleGoLive: f,
            onClose: g,
            onSelect: S,
            appContext: A = p.IlC.APP
        } = e, N = _.Z.supports(m.AN.DESKTOP_CAPTURE_APPLICATIONS), v = null !== (t = s.find(e => e.ownerId === (null == i ? void 0 : i.id))) && void 0 !== t ? t : null, O = T(n, i, s), R = (0, u.Z)(v, A), C = (0, l.Z)(v, A, p.VqG), y = null == v ? (0, r.jsx)(a.MenuItem, {
            id: 'share-your-screen',
            label: I.Z.Messages.SHARE_YOUR_SCREEN,
            icon: a.ScreenArrowIcon,
            action: f
        }) : (0, r.jsxs)(r.Fragment, {
            children: [
                h.isPlatformEmbedded ? (0, r.jsx)(a.MenuItem, {
                    id: 'stream-settings',
                    label: I.Z.Messages.SCREENSHARE_STREAM_QUALITY,
                    children: R
                }) : null,
                E ? C : null,
                N ? (0, r.jsx)(a.MenuItem, {
                    id: 'change-windows',
                    label: I.Z.Messages.SCREENSHARE_CHANGE_WINDOWS,
                    icon: a.ScreenArrowIcon,
                    action: f
                }) : null,
                (0, r.jsx)(a.MenuItem, {
                    id: 'stop-streaming',
                    label: I.Z.Messages.STOP_STREAMING,
                    icon: a.ScreenXIcon,
                    action: () => (0, c.Z)(v)
                })
            ]
        });
    return (0, r.jsx)(o.Z, {
        section: p.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(a.Menu, {
            onSelect: S,
            navId: 'manage-streams',
            onClose: g,
            'aria-label': null != v ? I.Z.Messages.STOP_STREAMING : I.Z.Messages.SHARE_YOUR_SCREEN,
            children: [
                (0, r.jsx)(a.MenuGroup, {
                    children: O.map(e => {
                        let {
                            stream: t,
                            username: n
                        } = e;
                        return (0, r.jsx)(a.MenuItem, {
                            id: t.ownerId,
                            label: I.Z.Messages.STOP_WATCHING_USER.format({ username: n }),
                            icon: a.ScreenXIcon,
                            action: () => (0, c.Z)(t)
                        }, 'manage-stream-menu'.concat(t.ownerId));
                    })
                }),
                d ? null : y
            ]
        })
    });
}
