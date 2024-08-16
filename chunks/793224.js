n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(653041);
var i = n(735250);
n(470079);
var l = n(442837),
    r = n(704215),
    a = n(481060),
    s = n(872810),
    o = n(367907),
    c = n(67212),
    u = n(770471),
    d = n(757454),
    h = n(286328),
    p = n(493355),
    _ = n(134598),
    f = n(243778),
    g = n(594190),
    m = n(569545),
    C = n(989941),
    I = n(199902),
    E = n(314897),
    N = n(944486),
    x = n(885110),
    S = n(449224),
    v = n(436088),
    Z = n(870569),
    T = n(981631),
    L = n(921944),
    A = n(689938);
function b() {
    let e = (0, l.e7)([N.Z], () => N.Z.getVoiceChannelId()),
        t = (0, l.e7)([E.default], () => E.default.getId()),
        n = (0, l.e7)([g.ZP, S.Z], () => (0, C.Z)(g.ZP, S.Z)),
        { canBroadcast: b } = u.Z.useExperiment({ location: 'broadcast_button_rtc_panel_no_track' }, { autoTrackExposure: !1 }),
        M = (0, d.Z)() && null != n,
        R = (0, l.e7)([x.Z], () => null != x.Z.getBroadcast()),
        O = (0, l.Wu)([I.Z], () => I.Z.getAllActiveStreams());
    if (!M && !R) return null;
    if ((u.Z.trackExposure({ location: 'broadcast_button_rtc_panel' }), !b)) return null;
    let P = [];
    M && P.push(r.z.BROADCASTING_BROADCASTER_TOOLTIP);
    let y = () => {
            o.ZP.trackWithMetadata(T.rMx.BROADCAST_START_BUTTON_HOVERED, { game_id: null == n ? void 0 : n.id });
        },
        j = () => {
            if (M) {
                let i = O.find((e) => e.ownerId === t);
                null == i
                    ? (0, _.X)(A.Z.Messages.START_BROADCASTING, A.Z.Messages.START_BROADCASTING_CTA, () => {
                          (0, s.tE)({
                              pid: null == n ? void 0 : n.pid,
                              channelId: e
                          });
                      })
                    : (0, c.v$)((0, m.V9)(i), null == n ? void 0 : n.pid);
            } else (0, c.b_)();
        },
        D = (e) =>
            (0, i.jsx)(Z.Z, {
                tooltipText: M ? A.Z.Messages.START_BROADCASTING : A.Z.Messages.STOP_BROADCASTING,
                onClick: () => {
                    j(), null == e || e(L.L.UNKNOWN);
                },
                onMouseEnter: y,
                icon: M
                    ? (0, a.makeIconCompat)(v.Z)
                    : () =>
                          (0, i.jsx)(p.Z, {
                              width: 20,
                              height: 20
                          })
            }),
        w = (e) => (0, i.jsx)(h.Z, { markAsDismissed: e });
    return (0, i.jsx)(f.ZP, {
        contentTypes: P,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === r.z.BROADCASTING_BROADCASTER_TOOLTIP
                ? (0, i.jsx)(a.Popout, {
                      position: 'top',
                      align: 'center',
                      renderPopout: () => w(n),
                      shouldShow: !0,
                      children: () => D(n)
                  })
                : D();
        }
    });
}
