n(47120);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(194359),
    _ = n(487971),
    E = n(703656),
    h = n(592125),
    m = n(131951),
    I = n(51144),
    p = n(321488),
    g = n(417183),
    T = n(825682),
    f = n(170245),
    S = n(981631),
    C = n(65154),
    N = n(689938),
    A = n(642915);
function v(e, t, n) {
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
function Z(e) {
    let { user: t, onSelect: n } = e,
        a = () => {
            u.Z.removeFriend(t.id, { location: 'Friends' });
        },
        s = (0, l.e7)([m.Z], () => m.Z.supports(C.AN.VIDEO));
    return (0, i.jsxs)(o.Menu, {
        navId: 'friend-row',
        'aria-label': N.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onClose: d.Zy,
        onSelect: n,
        children: [
            s
                ? (0, i.jsx)(o.MenuItem, {
                      id: 'start-video-call',
                      label: N.Z.Messages.START_VIDEO_CALL,
                      action: function () {
                          c.Z.openPrivateChannel(t.id, !0, !0);
                      }
                  })
                : null,
            (0, i.jsx)(o.MenuItem, {
                id: 'start-voice-call',
                label: N.Z.Messages.START_VOICE_CALL,
                action: () => {
                    c.Z.openPrivateChannel(t.id, !0);
                }
            }),
            (0, i.jsx)(o.MenuItem, {
                id: 'remove-friend',
                label: N.Z.Messages.REMOVE_FRIEND,
                action: () => {
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: N.Z.Messages.REMOVE_FRIEND_TITLE.format({ name: I.ZP.getName(t) }),
                            confirmText: N.Z.Messages.REMOVE_FRIEND,
                            cancelText: N.Z.Messages.CANCEL,
                            onConfirm: a,
                            ...e,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: N.Z.Messages.REMOVE_FRIEND_BODY.format({ name: I.ZP.getName(t) })
                            })
                        })
                    );
                },
                color: 'danger'
            })
        ]
    });
}
class L extends a.PureComponent {
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    render() {
        let { user: e, isFocused: t, activities: n, applicationStream: a, status: s, isMobile: r, giftIntentType: l } = this.props,
            { isActiveRow: c } = this.state;
        return (0, i.jsx)(g.Z, {
            ref: this.peopleListItemRef,
            isFocused: t,
            isActive: c,
            user: e,
            onOtherHover: () => (c ? null : (0, d.Zy)()),
            onClick: this.handleOpenPrivateChannel,
            children: (t) =>
                (0, i.jsxs)('div', {
                    className: A.listItemContents,
                    children: [
                        (0, i.jsx)(f.Z, {
                            user: e,
                            status: s,
                            isMobile: r,
                            subText: (0, i.jsx)(T.Z, {
                                hovered: t,
                                activities: n,
                                applicationStream: a,
                                status: s,
                                user: e
                            }),
                            hovered: t,
                            showAccountIdentifier: !0
                        }),
                        (0, i.jsxs)('div', {
                            className: A.actions,
                            children: [
                                null != l &&
                                    (0, i.jsx)(_.Z, {
                                        recipientUser: e,
                                        giftIntentType: l,
                                        analyticsPage: S.ZY5.FRIENDS_LIST,
                                        shouldHighlight: t
                                    }),
                                (0, i.jsx)(p.Z, {
                                    icon: o.ChatIcon,
                                    tooltip: N.Z.Messages.SEND_DM,
                                    onClick: this.handleOpenPrivateChannel,
                                    shouldHighlight: t
                                }),
                                (0, i.jsx)(p.Z, {
                                    icon: o.MoreVerticalIcon,
                                    tooltip: N.Z.Messages.MORE,
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
            v(this, 'peopleListItemRef', a.createRef()),
            v(this, 'state', { isActiveRow: !1 }),
            v(this, 'handleOpenPrivateChannel', (e) => {
                let { user: t } = this.props;
                e.stopPropagation();
                let n = r().find(h.Z.getMutablePrivateChannels(), (e) => e.type === S.d4z.DM && e.getRecipientId() === t.id);
                null != n ? (0, E.uL)(S.Z5c.CHANNEL(S.ME, n.id)) : c.Z.openPrivateChannel(t.id);
            }),
            v(this, 'handleOpenActionsMenu', (e) => {
                let { user: t } = this.props;
                (0, d.vq)(
                    e,
                    (e) =>
                        (0, i.jsx)(Z, {
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
t.Z = L;
