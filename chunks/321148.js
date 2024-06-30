n(47120);
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(481060), u = n(129861), c = n(730749), d = n(484459), _ = n(103575), E = n(285952), f = n(981631), h = n(961880);
function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class m extends (r = a.Component) {
    render() {
        let {popoutOpen: e} = this.state, {
                user: t,
                analyticsContext: n,
                disablePopout: r,
                guildId: a
            } = this.props, o = {
                location: {
                    ...n.location,
                    object: f.qAy.LIST_ITEM
                }
            };
        return (0, i.jsx)(l.Popout, {
            preload: () => (0, d.W)(t.id, t.getAvatarURL(a, 80), { guildId: a }),
            renderPopout: e => (0, i.jsx)(_.Z, {
                ...e,
                location: 'UserListItem',
                guildId: a,
                userId: t.id,
                analyticsParams: o
            }),
            position: 'left',
            onRequestClose: this.handleUserPopoutClose,
            shouldShow: !r && e,
            children: e => this.renderUserPopout(e)
        });
    }
    constructor(...e) {
        super(...e), p(this, 'state', { popoutOpen: !1 }), p(this, 'handleClickUser', () => {
            let {onPopoutOpen: e} = this.props;
            this.setState({ popoutOpen: !this.state.popoutOpen }), null == e || e();
        }), p(this, 'handleUserPopoutClose', () => {
            let {onPopoutClose: e} = this.props;
            this.setState({ popoutOpen: !1 }), null == e || e();
        }), p(this, 'renderUserPopout', e => {
            let {
                className: t,
                disablePopout: n,
                onContextMenu: r,
                user: a,
                status: o,
                textClassName: c,
                nick: d,
                guildId: _
            } = this.props;
            return (0, i.jsxs)(E.Z, {
                align: E.Z.Align.CENTER,
                className: s()(h.memberListItem, t, { [h.popoutDisabled]: n }),
                onContextMenu: r,
                onMouseDown: e.onMouseDown,
                onKeyDown: e.onKeyDown,
                onClick: this.handleClickUser,
                children: [
                    (0, i.jsx)(l.Avatar, {
                        src: a.getAvatarURL(_, 24),
                        className: h.avatar,
                        'aria-label': a.username,
                        size: l.AvatarSizes.SIZE_24,
                        status: o
                    }),
                    (0, i.jsx)(l.Text, {
                        className: s()(h.memberListItemTag, c),
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(u.Z, {
                            user: a,
                            nick: d,
                            usernameClass: h.username,
                            hideDiscriminator: !0
                        })
                    })
                ]
            });
        });
    }
}
p(m, 'defaultProps', { disablePopout: !1 }), t.Z = (0, c.Z)(m);
