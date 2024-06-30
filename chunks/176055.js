n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(593473), o = n(442837), c = n(481060), d = n(749210), u = n(558381), _ = n(666743), E = n(41776), h = n(703656), I = n(769654), m = n(601964), p = n(430824), g = n(378720), T = n(285952), S = n(346656), C = n(843445), N = n(981631), f = n(689938), A = n(654075);
function Z(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class L extends s.PureComponent {
    renderMemberInfo() {
        let {
            approximateMemberCount: e,
            approximatePresenceCount: t
        } = this.props.guild;
        return null == e || null == t ? null : (0, i.jsxs)(T.Z, {
            className: A.memberInfo,
            align: T.Z.Align.CENTER,
            children: [
                (0, i.jsx)('div', { className: A.dotOnline }),
                (0, i.jsx)('span', {
                    className: A.memberText,
                    children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t })
                }),
                (0, i.jsx)('div', { className: A.dotOffline }),
                (0, i.jsx)('span', {
                    className: A.memberText,
                    children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: e })
                })
            ]
        });
    }
    render() {
        let {
            guild: e,
            inChannel: t,
            isInGuild: n,
            isLurking: s,
            isAuthenticated: a,
            className: l,
            pageSize: o
        } = this.props;
        if (t && n)
            return null;
        let d = new m.ZP(e), u = f.Z.Messages.LURKER_MODE_VIEW_GUILD, _ = this.handleJoinOrView, E = c.Button.Looks.FILLED, h = c.Button.Colors.PRIMARY;
        return a ? n ? (E = c.Button.Looks.OUTLINED, h = A.buttonColorInGuild, u = (0, i.jsxs)(T.Z, {
            align: T.Z.Align.CENTER,
            children: [
                (0, i.jsx)('div', { children: f.Z.Messages.JOINED_GUILD }),
                (0, i.jsx)(c.CheckmarkLargeIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.joinedCheckmark
                })
            ]
        })) : s && t && (u = f.Z.Messages.JOIN_GUILD) : (u = f.Z.Messages._LOGIN, _ = this.handleLogin), (0, i.jsxs)('div', {
            className: r()(l, o === C.b.SMALL ? A.inviteSmall : A.inviteLarge),
            children: [
                (0, i.jsx)(g.Z, { children: f.Z.Messages.APPLICATION_STORE_SECTION_TITLE_VERIFIED_GUILD }),
                (0, i.jsxs)('div', {
                    className: A.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.info,
                            children: [
                                (0, i.jsx)(S.Z, {
                                    guild: d,
                                    active: !0,
                                    size: S.Z.Sizes.LARGE,
                                    className: A.guildIcon
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.infoText,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: A.name,
                                            children: e.name
                                        }),
                                        this.renderMemberInfo()
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            className: A.actionButton,
                            fullWidth: !0,
                            color: h,
                            look: E,
                            onClick: _,
                            children: u
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), Z(this, 'handleJoinOrView', async () => {
            let {
                    guild: e,
                    skuId: t,
                    isInGuild: n,
                    isLurking: i
                } = this.props, s = () => (0, I.X)(e.id);
            if (i)
                (0, u.Oj)(t).then(s);
            else if (n)
                s();
            else
                try {
                    await d.Z.joinGuild(e.id, {
                        lurker: !0,
                        source: N.vtS.APPLICATION_STORE
                    }), s();
                } catch {
                }
        }), Z(this, 'handleLogin', () => {
            let e = { redirect_to: N.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
            (0, h.uL)(N.Z5c.LOGIN, { search: (0, l.stringify)(e) });
        });
    }
}
t.Z = (0, _.Z)(o.ZP.connectStores([
    p.Z,
    E.Z
], e => {
    let {guild: t} = e, n = E.Z.isLurking(t.id);
    return {
        isInGuild: null != p.Z.getGuild(t.id) && !n,
        isLurking: n
    };
})(L));
