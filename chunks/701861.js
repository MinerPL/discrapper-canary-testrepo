n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(194359),
    h = n(443589),
    m = n(703656),
    p = n(592125),
    g = n(131951),
    f = n(51144),
    _ = n(321488),
    E = n(417183),
    I = n(825682),
    C = n(170245),
    v = n(981631),
    S = n(65154),
    N = n(388032),
    T = n(642915);
function x(e, t, n) {
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
function b(e) {
    let { user: t, onSelect: n } = e,
        r = () => {
            u.Z.removeFriend(t.id, { location: 'Friends' });
        },
        a = (0, s.e7)([g.Z], () => g.Z.supports(S.AN.VIDEO)),
        l = t.isProvisional;
    return (0, i.jsxs)(o.Menu, {
        navId: 'friend-row',
        'aria-label': N.intl.string(N.t.liqwPD),
        onClose: d.Zy,
        onSelect: n,
        children: [
            !l && a
                ? (0, i.jsx)(o.MenuItem, {
                      id: 'start-video-call',
                      label: N.intl.string(N.t.oCqlGB),
                      action: function () {
                          c.Z.openPrivateChannel(t.id, !0, !0);
                      }
                  })
                : null,
            !l &&
                (0, i.jsx)(o.MenuItem, {
                    id: 'start-voice-call',
                    label: N.intl.string(N.t.focH1t),
                    action: () => {
                        c.Z.openPrivateChannel(t.id, !0);
                    }
                }),
            (0, i.jsx)(o.MenuItem, {
                id: 'remove-friend',
                label: N.intl.string(N.t.cvSt1N),
                action: () => {
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: N.intl.formatToPlainString(N.t.fPLvZW, { name: f.ZP.getName(t) }),
                            confirmText: N.intl.string(N.t.cvSt1N),
                            cancelText: N.intl.string(N.t['ETE/oK']),
                            onConfirm: r,
                            ...e,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: N.intl.format(N.t.l5FFq6, { name: f.ZP.getName(t) })
                            })
                        })
                    );
                },
                color: 'danger'
            })
        ]
    });
}
class A extends r.PureComponent {
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    render() {
        let { user: e, isFocused: t, activities: n, applicationStream: r, status: a, isMobile: l, giftIntentType: s } = this.props,
            { isActiveRow: c } = this.state;
        return (0, i.jsx)(E.Z, {
            ref: this.peopleListItemRef,
            isFocused: t,
            isActive: c,
            user: e,
            onOtherHover: () => (c ? null : (0, d.Zy)()),
            onClick: this.handleOpenPrivateChannel,
            children: (t) =>
                (0, i.jsxs)('div', {
                    className: T.listItemContents,
                    children: [
                        (0, i.jsx)(C.Z, {
                            user: e,
                            status: a,
                            isMobile: l,
                            subText: (0, i.jsx)(I.Z, {
                                hovered: t,
                                activities: n,
                                applicationStream: r,
                                status: a,
                                user: e
                            }),
                            hovered: t,
                            showAccountIdentifier: !0
                        }),
                        (0, i.jsxs)('div', {
                            className: T.actions,
                            children: [
                                null != s &&
                                    (0, i.jsx)(h.Z, {
                                        recipientUser: e,
                                        giftIntentType: s,
                                        analyticsPage: v.ZY5.FRIENDS_LIST,
                                        shouldHighlight: t
                                    }),
                                (0, i.jsx)(_.Z, {
                                    icon: o.ChatIcon,
                                    tooltip: N.intl.string(N.t['g33r/P']),
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t
                                }),
                                (0, i.jsx)(_.Z, {
                                    icon: o.MoreVerticalIcon,
                                    tooltip: N.intl.string(N.t.UKOtz8),
                                    onClick: this.handleOpenActionsMenu,
                                    shouldHighlight: t
                                })
                            ]
                        })
                    ]
                })
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'peopleListItemRef', r.createRef()),
            x(this, 'state', { isActiveRow: !1 }),
            x(this, 'handleOpenPrivateChannel', (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = l().find(p.Z.getMutablePrivateChannels(), (e) => e.type === v.d4z.DM && e.getRecipientId() === t.id);
                null != n ? (0, m.uL)(v.Z5c.CHANNEL(v.ME, n.id)) : c.Z.openPrivateChannel(t.id);
            }),
            x(this, 'handleOpenActionsMenu', (e) => {
                let { user: t } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, i.jsx)(b, {
                            ...e,
                            user: t
                        }),
                    {
                        onClose: () => {
                            this.setState({ isActiveRow: !1 });
                        }
                    }
                ),
                    this.setState({ isActiveRow: !0 });
            });
    }
}
t.Z = A;
