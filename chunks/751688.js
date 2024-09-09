n(47120);
var r,
    i = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(129861),
    c = n(600164),
    d = n(184301),
    _ = n(347475),
    E = n(468773);
function f(e, t, n) {
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
class h extends (r = a.Component) {
    render() {
        let { popoutOpen: e } = this.state,
            { user: t, disablePopout: n, ignoreModalClicks: r, guildId: a, channelId: s } = this.props;
        return (0, i.jsx)(l.Popout, {
            preload: () =>
                (0, d.Z)(t.id, t.getAvatarURL(a, 80), {
                    guildId: a,
                    channelId: s
                }),
            renderPopout: (e) =>
                (0, i.jsx)(_.Z, {
                    ...e,
                    userId: t.id,
                    guildId: a,
                    channelId: s
                }),
            position: 'left',
            onRequestClose: this.handleUserPopoutClose,
            shouldShow: !n && e,
            ignoreModalClicks: r,
            children: (e) => this.renderUserPopout(e)
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', { popoutOpen: !1 }),
            f(this, 'handleClickUser', () => {
                let { onPopoutOpen: e } = this.props;
                this.setState({ popoutOpen: !this.state.popoutOpen }), null == e || e();
            }),
            f(this, 'handleUserPopoutClose', () => {
                let { onPopoutClose: e } = this.props;
                this.setState({ popoutOpen: !1 }), null == e || e();
            }),
            f(this, 'renderUserPopout', (e) => {
                let { className: t, disablePopout: n, onContextMenu: r, user: a, status: s, textClassName: d, nick: _, guildId: f } = this.props;
                return (0, i.jsxs)(c.Z, {
                    align: c.Z.Align.CENTER,
                    className: o()(E.memberListItem, t, { [E.popoutDisabled]: n }),
                    onContextMenu: r,
                    onMouseDown: e.onMouseDown,
                    onKeyDown: e.onKeyDown,
                    onClick: this.handleClickUser,
                    children: [
                        (0, i.jsx)(l.Avatar, {
                            src: a.getAvatarURL(f, 24),
                            className: E.avatar,
                            'aria-label': a.username,
                            size: l.AvatarSizes.SIZE_24,
                            status: s
                        }),
                        (0, i.jsx)(l.Text, {
                            className: o()(E.memberListItemTag, d),
                            variant: 'text-sm/normal',
                            children: (0, i.jsx)(u.Z, {
                                user: a,
                                nick: _,
                                usernameClass: E.username,
                                hideDiscriminator: !0
                            })
                        })
                    ]
                });
            });
    }
}
f(h, 'defaultProps', { disablePopout: !1 }), (t.Z = h);
