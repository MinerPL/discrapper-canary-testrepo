n(47120);
var i = n(735250), s = n(470079), a = n(481060), r = n(904245), l = n(944486), o = n(82950), c = n(981631), d = n(921944), u = n(689938), _ = n(589148);
function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class h extends s.PureComponent {
    render() {
        let e = ''.concat(u.Z.Messages.INVITE_NOTICE_MESSAGE, '\n').concat(u.Z.Messages.INVITE_NOTICE_MESSAGE_PART_2);
        return (0, i.jsx)(o.Z, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: u.Z.Messages.INVITE_PEOPLE,
            trackingSource: c.PsQ.INVITE_NOTICE,
            type: c.vID.INVITE,
            image: _,
            imageMarginX: 46
        });
    }
    constructor(...e) {
        super(...e), E(this, 'handleInvite', () => {
            let {guild: e} = this.props;
            (0, a.openModalLazy)(async () => {
                let {default: t} = await Promise.all([
                    n.e('7654'),
                    n.e('30135')
                ]).then(n.bind(n, 560114));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guild: e,
                    source: c.t4x.INVITE_NOTICE
                });
            });
        }), E(this, 'handleClose', () => {
            let e = l.Z.getChannelId();
            this.props.markAsDismissed(d.L.UNKNOWN), null != e && r.Z.sendBotMessage(e, u.Z.Messages.HOW_TO_INVITE_OTHERS.format({ invitePeople: u.Z.Messages.INVITE_PEOPLE }));
        });
    }
}
t.Z = h;
