n.d(t, {
    Z: function () {
        return N;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(442837), a = n(481060), s = n(19780), o = n(362446), c = n(153124), u = n(571826), d = n(441894), h = n(160038), p = n(586646), _ = n(760373), f = n(689938), m = n(228233);
function g(e) {
    let {
            lobbyId: t,
            connectionTypeText: n,
            closePopout: l
        } = e, a = (0, r.cj)([o.Z], () => ({
            connectionState: o.Z.getConnectionState(t),
            hostname: o.Z.getHostname(t),
            averagePing: o.Z.getAveragePing(t),
            lastPing: o.Z.getLastPing(t),
            pings: o.Z.getPings(),
            outboundLossRate: o.Z.getOutboundLossRate(t)
        }));
    return (0, i.jsx)(h.Z, {
        ...a,
        closePopout: l,
        connectionTypeText: n
    });
}
function C(e) {
    let {
            closePopout: t,
            connectionTypeText: n
        } = e, l = (0, r.cj)([s.Z], () => ({
            connectionState: s.Z.getState(),
            hostname: s.Z.getHostname(),
            averagePing: s.Z.getAveragePing(),
            lastPing: s.Z.getLastPing(),
            outboundLossRate: s.Z.getOutboundLossRate(),
            pings: s.Z.getPings()
        }));
    return (0, i.jsx)(h.Z, {
        ...l,
        closePopout: t,
        connectionTypeText: n
    });
}
function I(e) {
    let {
            channelId: t,
            isOverlay: n,
            lobbyId: l,
            closePopout: r
        } = e, a = (0, d.J)({
            channelId: t,
            location: 'RTCConnectionDebugPanelContainer'
        }) ? f.Z.Messages.E2EE_END_TO_END_ENCRYPTED : f.Z.Messages.SECURE_CONNECTION;
    return n ? (0, i.jsx)(g, {
        lobbyId: l,
        closePopout: r,
        connectionTypeText: a
    }) : (0, i.jsx)(C, {
        closePopout: r,
        connectionTypeText: a
    });
}
function E(e) {
    let [t, n] = l.useState(_.tu.RTC_DEBUG_PANEL), r = (0, c.Dt)(), s = l.useMemo(() => {
            switch (t) {
            case _.tu.RTC_DEBUG_PANEL:
                return (0, i.jsx)(I, { ...e });
            case _.tu.RTC_SECURE_FRAMES:
                return (0, i.jsx)(p.Z, { channelId: e.channelId });
            }
        }, [
            e,
            t
        ]);
    return l.useEffect(() => {
        (0, u.sN)({
            channelId: e.channelId,
            selectedTab: t
        });
    }, [
        e.channelId,
        t
    ]), (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)(a.Heading, {
                className: m.title,
                variant: 'heading-lg/bold',
                color: 'header-primary',
                children: f.Z.Messages.E2EE_VOICE_DETAILS
            }),
            (0, i.jsxs)(a.TabBar, {
                className: m.tabs,
                selectedItem: t,
                type: 'top',
                look: 'brand',
                onItemSelect: n,
                children: [
                    (0, i.jsx)(a.TabBar.Item, {
                        id: _.tu.RTC_DEBUG_PANEL,
                        className: m.tabBarItem,
                        children: f.Z.Messages.E2EE_CONNECTION
                    }),
                    (0, i.jsx)(a.TabBar.Item, {
                        id: _.tu.RTC_SECURE_FRAMES,
                        className: m.tabBarItem,
                        children: f.Z.Messages.E2EE_PRIVACY
                    })
                ]
            }),
            (0, i.jsx)(a.TabBar.Panel, {
                id: t,
                'aria-labelledby': r,
                children: s
            })
        ]
    });
}
function N(e) {
    return (0, d.J)({
        channelId: e.channelId,
        location: 'RTCConnectionPopout'
    }) ? (0, i.jsx)(E, { ...e }) : (0, i.jsx)('div', {
        className: m.debugPanelStandalone,
        children: (0, i.jsx)('section', {
            className: m.debugPanelSection,
            children: (0, i.jsx)(I, { ...e })
        })
    });
}
