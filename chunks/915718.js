n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(704215),
    r = n(481060),
    o = n(26151),
    c = n(287734),
    u = n(40851),
    d = n(607070),
    h = n(451576),
    p = n(358221),
    m = n(605236),
    _ = n(243778),
    f = n(590293),
    E = n(970731),
    g = n(560688),
    C = n(173507),
    I = n(523746),
    T = n(819640),
    x = n(131951),
    S = n(699516),
    v = n(594174),
    N = n(979651),
    A = n(585483),
    Z = n(63063),
    M = n(665149),
    b = n(981631),
    R = n(921944),
    L = n(65154),
    j = n(689938),
    P = n(648298);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class y extends s.PureComponent {
    componentDidMount() {
        A.S.subscribe(b.CkL.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        A.S.unsubscribe(b.CkL.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e, t;
        let { inCall: n, callActive: s, callUnavailable: a, isBlocked: l, channel: o, mode: c, isProvisional: u } = this.props;
        if (n || (s && c === b.WtW.VOICE)) return null;
        let d = o.isManaged(),
            h = null,
            p = !1;
        return (
            u ? ((p = !0), (h = j.Z.Messages.CALL_UNAVAILABLE_PROVISIONAL_USER), (e = r.Tooltip.Colors.RED)) : x.Z.supports(L.AN.VIDEO) ? (l ? ((h = j.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS), (e = r.Tooltip.Colors.RED), (p = !0)) : s && c === b.WtW.VIDEO ? ((t = this.handleJoinVideoCall), (h = d ? j.Z.Messages.CONNECT : j.Z.Messages.JOIN_VIDEO_CALL)) : ((t = this.handleStartVideoCall), (h = d ? j.Z.Messages.CONNECT : j.Z.Messages.START_VIDEO_CALL))) : ((p = !0), (t = this.handleBrowserNotSupported), (h = j.Z.Messages.BROWSER_NOT_SUPPORTED)),
            (0, i.jsx)(M.ZP.Icon, {
                icon: r.VideoIcon,
                onClick: t,
                disabled: p || a,
                tooltip: h,
                tooltipColor: e
            })
        );
    }
    renderVoiceCallButton() {
        let e, t;
        let { inCall: n, canShowTooltip: s, callActive: a, callUnavailable: o, isBlocked: c, channel: u, canShowActivityGdmTooltip: d, dismissibleContentTypes: h, isProvisional: p } = this.props;
        if (n) return null;
        let m = u.isManaged(),
            f = !1;
        p ? ((f = !0), (e = j.Z.Messages.CALL_UNAVAILABLE_PROVISIONAL_USER), (t = r.Tooltip.Colors.RED)) : o ? ((e = m ? j.Z.Messages.VOICE_UNAVAILABLE : j.Z.Messages.CALL_UNAVAILABLE), (t = r.Tooltip.Colors.RED), (f = !0)) : c ? ((e = j.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS), (t = r.Tooltip.Colors.RED), (f = !0)) : (e = a ? (m ? j.Z.Messages.CONNECT : j.Z.Messages.JOIN_VOICE_CALL) : m ? j.Z.Messages.CONNECT : j.Z.Messages.START_VOICE_CALL);
        let g = (0, i.jsx)(M.ZP.Icon, {
            icon: r.PhoneCallIcon,
            onClick: this.handleVoiceClick,
            disabled: f,
            tooltip: e,
            tooltipColor: t
        });
        return (0, i.jsx)(_.ZP, {
            contentTypes: h,
            children: (e) => {
                let { visibleContent: t, markAsDismissed: a } = e;
                if (t === l.z.ACTIVITY_GDM_CALL_TOOLTIP)
                    return (0, i.jsx)(r.Popout, {
                        position: 'bottom',
                        align: 'center',
                        animation: r.Popout.Animation.TRANSLATE,
                        shouldShow: s && d && !n,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(E.ZP, {
                                header: (0, i.jsx)(r.Heading, {
                                    variant: 'heading-md/bold',
                                    color: 'always-white',
                                    children: j.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_HEADER
                                }),
                                content: (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'always-white',
                                            children: j.Z.Messages.EMBEDDED_ACTIVITIES_DM_TOOLTIP_BODY
                                        }),
                                        (0, i.jsx)(r.Anchor, {
                                            href: Z.Z.getArticleURL(b.BhN.ACTIVITIES),
                                            children: j.Z.Messages.LEARN_MORE
                                        })
                                    ]
                                }),
                                buttonCTA: j.Z.Messages.GOT_IT,
                                onClick: () => {
                                    t(), a(R.L.UNKNOWN);
                                },
                                className: P.tooltip
                            });
                        },
                        children: () => g
                    });
                return g;
            }
        });
    }
    render() {
        return (0, i.jsxs)(s.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'handleStartCall', (e, t) => {
                let { channel: n, notFriend: i, appContext: s } = this.props,
                    a = i ? n.getRecipientId() : null,
                    l = () => o.Z.call(n.id, t, !i && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), a);
                t ? (0, C.Z)(l, s) : l();
            }),
            O(this, 'handleJoinCall', (e) => {
                c.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            O(this, 'handleVoiceClick', (e) => {
                let { callUnavailable: t, callActive: n, canShowActivityGdmTooltip: i } = this.props;
                if ((i && (0, m.EW)(l.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: R.L.AUTO }), t));
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            O(this, 'handleStartVideoCall', (e) => {
                this.handleStartCall(e, !0);
            }),
            O(this, 'handleJoinVideoCall', () => {
                let { appContext: e } = this.props;
                (0, C.Z)(() => this.handleJoinCall(!0), e);
            }),
            O(this, 'handleBrowserNotSupported', () => {
                (0, g.Z)();
            });
    }
}
function D(e) {
    var t;
    let { channel: n } = e,
        r = (0, f.Z)(),
        o = (0, a.e7)([p.Z], () => p.Z.getMode(n.id)),
        c = (0, a.e7)([N.Z], () => N.Z.isInChannel(n.id)),
        m = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        { callActive: _, callUnavailable: E } = (0, a.cj)([I.Z], () => ({
            callActive: I.Z.isCallActive(n.id),
            callUnavailable: I.Z.isCallUnavailable(n.id)
        })),
        g = n.getRecipientId(),
        { notFriend: C, isBlocked: x } = (0, a.cj)([S.Z], () => ({
            notFriend: n.type === b.d4z.DM && null != g && !S.Z.isFriend(g),
            isBlocked: n.type === b.d4z.DM && null != g && S.Z.isBlocked(g)
        })),
        A = (0, a.e7)([v.default], () => v.default.getUser(g)),
        Z = (0, u.bp)(),
        M = [],
        R = (0, h.Z)(n.id),
        L = (0, a.e7)([T.Z], () => T.Z.hasLayers());
    R && !L && M.push(l.z.ACTIVITY_GDM_CALL_TOOLTIP);
    let [j, P] = s.useState(!1);
    return (s.useEffect(() => {
        let e = setTimeout(() => {
            P(!0);
        }, 250);
        return () => clearTimeout(e);
    }, []),
    r || (null == A ? void 0 : A.bot))
        ? null
        : (0, i.jsx)(y, {
              channel: n,
              mode: o,
              inCall: c,
              callActive: _,
              isProvisional: null !== (t = null == A ? void 0 : A.isProvisional) && void 0 !== t && t,
              callUnavailable: E,
              notFriend: C,
              isBlocked: x,
              appContext: Z,
              canShowTooltip: j,
              canShowActivityGdmTooltip: R,
              dismissibleContentTypes: M,
              useReducedMotion: m
          });
}
