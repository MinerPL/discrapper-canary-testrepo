n.d(t, {
    J: function () {
        return A;
    },
    y: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(704215),
    s = n(481060),
    c = n(988298),
    u = n(620662),
    d = n(513202),
    h = n(570938),
    p = n(311352),
    f = n(686546),
    m = n(207796),
    g = n(243778),
    C = n(749681),
    _ = n(216742),
    x = n(803647),
    v = n(131704),
    I = n(626135),
    b = n(870569),
    S = n(981631),
    Z = n(921944),
    N = n(49898),
    E = n(128449),
    y = n(388032),
    j = n(900087);
function T(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === S.IIU.PLAYING && (0, u.Z)(t, S.xjy.JOIN));
}
function P(e) {
    let { badged: t } = e;
    return t
        ? (0, i.jsxs)('div', {
              className: j.badgedGuildIcon,
              children: [
                  (0, i.jsx)(f.ZP, {
                      mask: f.ZP.Masks.BADGED_GUILD_ICON,
                      width: 20,
                      height: 20,
                      children: (0, i.jsx)(h.Z, {
                          width: 20,
                          height: 20,
                          color: 'currentColor'
                      })
                  }),
                  (0, i.jsx)('div', { className: j.badge })
              ]
          })
        : (0, i.jsx)(h.Z, {
              width: 20,
              height: 20,
              color: 'currentColor'
          });
}
let A = l.memo(function (e) {
    let t,
        r,
        u,
        h,
        { stream: f, canGoLive: A, guildId: M, isStreaming: w, channel: L, canStream: R, runningGame: D, embeddedActivity: O, activity: k, application: U, analyticsContext: G } = e,
        B = T(U, k, O),
        { enabled: V } = (0, _.I7)(),
        [H, F] = (0, g.US)(V ? [o.z.RAPIDASH_RTC_BROWSE_GUILDS] : [], void 0, !0),
        W = H === o.z.RAPIDASH_RTC_BROWSE_GUILDS,
        z = l.useCallback(() => {
            a()(null != k, 'Received null activity'),
                I.default.track(S.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: k.application_id,
                    location: G.location
                }),
                (0, c.h7)(k, !1);
        }, [k, G]),
        Y = l.useCallback(
            (e, t) => () => {
                d.Z.leaveActivity({
                    channelId: t.id,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        K = l.useCallback(() => {
            (0, x.Z)(f);
        }, [f]),
        q = l.useCallback(() => {
            let e = null != L && (0, v.vd)(L.type) ? L : null,
                t = null != e ? e.getGuildId() : M;
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        selectSource: !1,
                        guildId: t,
                        analyticsLocation: S.Sbl.ACTIVITY_PANEL
                    });
            });
        }, [L, M]),
        Q = l.useCallback(() => {
            (null == D ? void 0 : D.id) != null && m.GN.getState().setSelectedGames([D.id]),
                F(Z.L.PRIMARY),
                (0, C.transitionToGlobalDiscovery)({
                    tab: N.F$.SERVERS,
                    selectedServersTab: E.vf.GUILDS,
                    entrypoint: E.Qq.RTC_PANEL
                });
        }, [D, F]);
    let J =
            (null != D || null == O) && (w || (A && null != D))
                ? (w ? ((t = !1), (r = K), (u = s.ScreenXIcon), (h = y.intl.string(y.t.S5anIS))) : R ? ((t = !1), (r = q), (u = s.ScreenArrowIcon), (h = null != D ? y.intl.formatToPlainString(y.t.AB5gT0, { game: D.name }) : y.intl.string(y.t.FeUKeH))) : ((t = !0), (r = null), (u = s.ScreenArrowIcon), (h = null != L && (0, v.vd)(L.type) ? y.intl.string(y.t.uQn9Bw) : null != M ? y.intl.string(y.t.fBXEoK) : y.intl.string(y.t.n3feND))),
                  (0, i.jsx)('div', {
                      className: j.panelButtonContainer,
                      children: (0, i.jsx)(b.Z, {
                          tooltipText: h,
                          disabled: t,
                          onClick: r,
                          icon: u
                      })
                  }))
                : null,
        X =
            B && null == O
                ? (0, i.jsx)(b.Z, {
                      tooltipText: y.intl.string(y.t['hC/Ze3']),
                      onClick: z,
                      icon: s.GroupPlusIcon
                  })
                : null,
        $ =
            null == O || null == L
                ? null
                : (0, i.jsx)(b.Z, {
                      tooltipText: y.intl.string(y.t['R/FK4O']),
                      onClick: Y(O.applicationId, L),
                      icon: s.DoorExitIcon
                  }),
        ee = null == f ? null : (0, i.jsx)(p.Z, {}),
        et = V && !w && null == O && null != D;
    return null == J && null == X && null == $
        ? null
        : (0, i.jsxs)('div', {
              className: j.actions,
              children: [
                  et
                      ? (0, i.jsx)(b.Z, {
                            'aria-label': y.intl.formatToPlainString(y.t.iz7mkp, { gameName: null == D ? void 0 : D.name }),
                            tooltipText: y.intl.format(y.t['NN+Y8P'], { gameName: null == D ? void 0 : D.name }),
                            tooltipContentClassName: j.centeredTooltip,
                            onClick: Q,
                            icon: (0, i.jsx)(P, { badged: W })
                        })
                      : null,
                  J,
                  X,
                  null == J ? $ : ee
              ]
          });
});
