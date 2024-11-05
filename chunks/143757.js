n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(317381),
    u = n(122613),
    h = n(100527),
    m = n(906732),
    p = n(87005),
    g = n(753972),
    f = n(895924),
    _ = n(812236),
    E = n(82295),
    I = n(973616),
    C = n(592125),
    v = n(626135),
    S = n(823379),
    N = n(404295),
    T = n(728345),
    x = n(812206),
    b = n(981631),
    A = n(388032),
    Z = n(508042),
    y = n(156762);
async function L(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var r, a, l;
            i = null !== (l = null === (r = x.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== l ? l : null === (a = I.Z.createFromServer(await (0, T.UM)(e.id))) || void 0 === a ? void 0 : a.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let r,
            a = null == C.Z.getDMFromUserId(i.id);
        try {
            r = await c.Z.openPrivateChannel([i.id], !1, !1, h.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (v.default.track(b.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: a,
                channel_id: r
            }),
            null == r)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, _.ZP)(r, e.id);
        } catch (e) {
            if (e.message === _.sV) {
                t(void 0);
                return;
            }
        }
        await (0, u.Z)({
            targetApplicationId: e.id,
            channelId: r,
            analyticsLocations: n,
            commandOrigin: f.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function R(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: a, analyticsLocations: c } = e,
        u = (0, s.e7)([C.Z], () => C.Z.getDMFromUserId(a)),
        h = (0, s.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        m = null != h && h.applicationId === t.id && h.channelId === u,
        p = n === t.id,
        f = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: l()(Z.clickable, { [Z.disabledClickable]: f }),
        onClick: () => (m || f ? null : L(t, r, c)),
        'aria-label': A.intl.formatToPlainString(A.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: Z.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: Z.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(g.Z, {
                            application: t,
                            className: Z.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        p || m
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: Z.spinner,
                                  itemClassName: m ? Z.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function P(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: r, analyticsLocations: a } = e;
    return (0, i.jsx)('div', {
        className: Z.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                R,
                {
                    application: e,
                    loadingAppId: n,
                    setLoadingAppId: r,
                    botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id,
                    analyticsLocations: a
                },
                e.id
            );
        })
    });
}
function O() {
    let e = (0, N.en)(h.Z.APP_DMS_QUICK_LAUNCHER),
        { frecentApps: t } = (0, p.f)({
            channel: void 0,
            onlyActivityApps: !1,
            allowCommandFetch: e,
            includeAuthorizedAppsAndFetch: !1
        }),
        [n, a] = r.useState(void 0),
        { analyticsLocations: s } = (0, m.ZP)(h.Z.APP_DMS_QUICK_LAUNCHER),
        o = e && t.length > 0,
        [c, d] = r.useState(!1),
        u = r.useMemo(
            () =>
                t
                    .map((e) => e.application)
                    .filter(S.lm)
                    .slice(0, 5),
            [t]
        );
    return (r.useLayoutEffect(() => {
        var e;
        if (!c && !!o) d(!0), v.default.track(b.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = u.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
    }, [o, u, c]),
    o)
        ? (0, i.jsx)(E.Z, {
              className: l()(Z.headerContainer, y.privateChannelsHeaderContainer),
              children: (0, i.jsxs)('div', {
                  className: Z.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: Z.textContainer,
                          children: (0, i.jsx)('span', {
                              className: y.headerText,
                              children: A.intl.string(A.t.SCViVl)
                          })
                      }),
                      (0, i.jsx)(P, {
                          frecentApps: u,
                          loadingAppId: n,
                          setLoadingAppId: a,
                          analyticsLocations: s
                      })
                  ]
              })
          })
        : null;
}
