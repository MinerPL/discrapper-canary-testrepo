s(789020), s(47120);
var t = s(735250), l = s(470079), i = s(120356), a = s.n(i), r = s(481060), o = s(332148), d = s(904245), u = s(933557), c = s(372900), E = s(726521), g = s(294218), m = s(699516), M = s(594174), f = s(387204), _ = s(630388), N = s(970257), h = s(981631), I = s(689938), Z = s(924707);
function A(e, n, s) {
    return n in e ? Object.defineProperty(e, n, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = s, e;
}
class p extends l.PureComponent {
    render() {
        let e, n;
        let {report: s} = this.state, {
                channel: l,
                message: i,
                showContextMenuHint: a,
                ...o
            } = this.props, d = l.type === h.d4z.GUILD_ANNOUNCEMENT && (0, _.yE)(i.flags, h.iLy.CROSSPOSTED);
        return a && (e = (0, t.jsx)(f.Z, {
            className: Z.spacingTop,
            children: I.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
        })), (0, N.vc)(i) && (n = (0, t.jsx)(r.FormSwitch, {
            value: s,
            onChange: this.handleToggleReport,
            hideBorder: !0,
            className: Z.spacingTop,
            children: I.Z.Messages.DELETE_MESSAGE_REPORT
        })), (0, t.jsx)(c.Z.Provider, {
            value: l.guild_id,
            children: (0, t.jsxs)(r.ConfirmModal, {
                header: d ? I.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER : I.Z.Messages.DELETE_MESSAGE_TITLE,
                confirmText: I.Z.Messages.DELETE,
                cancelText: I.Z.Messages.CANCEL,
                onConfirm: this.handleDelete,
                ...o,
                children: [
                    (0, t.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        className: Z.spacing,
                        children: d ? I.Z.Messages.DELETE_FOLLOWED_NEWS_BODY : I.Z.Messages.DELETE_MESSAGE_BODY
                    }),
                    (0, t.jsx)('div', {
                        className: Z.message,
                        children: (0, t.jsx)(g.Z, {
                            channel: l,
                            message: i,
                            disableInteraction: !0
                        })
                    }),
                    n,
                    e
                ]
            })
        });
    }
    constructor(...e) {
        super(...e), A(this, 'state', { report: !1 }), A(this, 'handleDelete', () => {
            let {report: e} = this.state, {
                    channel: n,
                    message: s
                } = this.props;
            e ? (0, E.ak)(s, 'message_delete_alert', () => d.Z.deleteMessage(n.id, s.id)) : d.Z.deleteMessage(n.id, s.id);
        }), A(this, 'handleToggleReport', e => {
            this.setState({ report: e });
        });
    }
}
n.Z = {
    confirmPin: function (e, n) {
        (0, r.openModal)(s => {
            let l;
            let i = (0, u.F6)(e, M.default, m.Z);
            return l = e.isPrivate() ? I.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : I.Z.Messages.PIN_MESSAGE_BODY.format({ channelName: i }), (0, t.jsx)(c.Z.Provider, {
                value: e.guild_id,
                children: (0, t.jsxs)(r.ConfirmModal, {
                    header: I.Z.Messages.PIN_MESSAGE_TITLE,
                    confirmText: I.Z.Messages.PIN_CONFIRM,
                    cancelText: I.Z.Messages.CANCEL,
                    confirmButtonColor: r.Button.Colors.BRAND,
                    onConfirm: () => o.Z.pinMessage(e, n.id),
                    ...s,
                    children: [
                        (0, t.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: Z.spacing,
                            children: l
                        }),
                        (0, t.jsx)('div', {
                            className: Z.message,
                            children: (0, t.jsx)(g.Z, {
                                channel: e,
                                message: n,
                                animateAvatar: !1,
                                disableInteraction: !0
                            })
                        })
                    ]
                })
            });
        });
    },
    confirmUnpin: function (e, n) {
        (0, r.openModal)(s => (0, t.jsx)(c.Z.Provider, {
            value: e.guild_id,
            children: (0, t.jsxs)(r.ConfirmModal, {
                header: I.Z.Messages.UNPIN_MESSAGE_TITLE,
                confirmText: I.Z.Messages.UNPIN_CONFIRM,
                cancelText: I.Z.Messages.CANCEL,
                onConfirm: () => o.Z.unpinMessage(e, n.id),
                ...s,
                children: [
                    (0, t.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        className: Z.spacing,
                        children: I.Z.Messages.UNPIN_MESSAGE_BODY
                    }),
                    (0, t.jsx)('div', {
                        className: a()(Z.message, Z.spacing),
                        children: (0, t.jsx)(g.Z, {
                            channel: e,
                            message: n,
                            disableInteraction: !0
                        })
                    }),
                    (0, t.jsx)(f.Z, { children: I.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format() })
                ]
            })
        }));
    },
    confirmDelete: function (e, n) {
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (0, r.openModal)(l => (0, t.jsx)(p, {
            channel: e,
            message: n,
            showContextMenuHint: s,
            ...l
        }));
    },
    confirmEdit: function (e, n, s) {
        (0, r.openModal)(l => (0, t.jsx)(r.ConfirmModal, {
            header: I.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
            confirmText: I.Z.Messages.CONFIRM,
            cancelText: I.Z.Messages.CANCEL,
            confirmButtonColor: r.Button.Colors.BRAND,
            onConfirm: () => d.Z.editMessage(e, n, { content: s }),
            ...l,
            children: (0, t.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: Z.spacing,
                children: I.Z.Messages.EDIT_FOLLOWED_NEWS_BODY
            })
        }));
    }
};
