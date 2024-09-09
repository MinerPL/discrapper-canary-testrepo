n.d(s, {
    $W: function () {
        return A;
    },
    Mx: function () {
        return S;
    },
    PZ: function () {
        return Z;
    },
    h4: function () {
        return T;
    },
    ic: function () {
        return M;
    },
    n5: function () {
        return L;
    },
    rU: function () {
        return U;
    },
    s8: function () {
        return R;
    }
}),
    n(47120);
var r,
    t = n(735250),
    i = n(470079),
    l = n(481060),
    a = n(815372),
    o = n(43267),
    c = n(933557),
    d = n(471445),
    u = n(16206),
    h = n(790145),
    p = n(245216),
    m = n(925329),
    x = n(565138),
    C = n(754688),
    N = n(237583),
    f = n(430824),
    E = n(699516),
    g = n(594174),
    b = n(51144),
    _ = n(689938),
    I = n(900601);
function v(e, s, n) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = n),
        e
    );
}
class j extends i.PureComponent {
    componentDidMount() {
        let { focused: e, onFocus: s } = this.props,
            { node: n } = this;
        e && null != n && s(n);
    }
    componentDidUpdate(e) {
        let { focused: s, onFocus: n } = this.props,
            { node: r } = this;
        null != r && s && !e.focused && n(r);
    }
    render() {
        let { focused: e, children: s, score: n, onContextMenu: r, id: i, 'aria-label': a } = this.props;
        return (0, t.jsxs)(l.Clickable, {
            role: 'option',
            id: i,
            'aria-label': a,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: I.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
                s,
                null != n
                    ? (0, t.jsx)('div', {
                          className: I.score,
                          children: n >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'node', void 0),
            v(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: s } = this.props,
                    { node: n } = this;
                null != n && s(e, n);
            }),
            v(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: s } = this.props,
                    { node: n } = this;
                null != n && s(e, n);
            }),
            v(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class M extends i.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, t.jsx)('div', {
            className: I.guildIconContainer,
            children: (0, t.jsx)(x.Z, {
                tabIndex: -1,
                guild: e,
                size: x.Z.Sizes.MINI,
                className: I.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, t.jsx)('div', {
            className: I.name,
            children: (0, t.jsx)('span', {
                className: I.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: s } = this.props;
        return (0, t.jsxs)('div', {
            className: e ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: I.misc,
                    children: s
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return _.Z.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({ name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(j, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class A extends (r = i.Component) {
    renderIcon() {
        var e;
        let { channel: s } = this.props,
            n = (0, d.KS)(s);
        if (null == n) return null;
        let r = null !== (e = (0, u.Z)(s)) && void 0 !== e ? e : '';
        return (0, t.jsx)('div', {
            className: I.iconContainer,
            role: 'img',
            'aria-label': r,
            children: (0, t.jsx)(n, {
                className: I.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e, s;
        let { mentions: n, category: r, channel: i } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, t.jsx)(h.Z, {
                    className: I.badge,
                    value: n
                })),
            null != r &&
                (s = (0, t.jsx)('span', {
                    className: I.note,
                    children: (0, c.F6)(r, g.default, E.Z)
                })),
            (0, t.jsxs)('div', {
                className: I.name,
                children: [
                    (0, t.jsx)('span', {
                        className: I.match,
                        children: (0, c.F6)(i, g.default, E.Z)
                    }),
                    e,
                    this.renderVoiceStates(),
                    s
                ]
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: s } = this.props;
        return null == e
            ? null
            : (0, t.jsx)(N.Z, {
                  className: I.voiceSummaryContainer,
                  guildId: s.guild_id,
                  users: e.map((e) => {
                      let { user: s } = e;
                      return { user: s };
                  }),
                  max: 4
              });
    }
    renderContent() {
        let { unread: e, mentions: s, children: n } = this.props;
        return (0, t.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != s && s > 0) ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: I.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: s } = this.props,
            n = null === (e = f.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            r = (0, c.F6)(s, g.default, E.Z),
            t = (0, u.Z)(s);
        return _.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
            name: r,
            type: t,
            guild: n
        });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(j, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
v(A, 'defaultProps', { unread: !1 });
class Z extends i.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, t.jsx)('div', {
            className: I.dmIconContainer,
            children: (0, t.jsx)(l.Avatar, {
                src: (0, o.x)(e),
                size: l.AvatarSizes.SIZE_20,
                'aria-hidden': !0
            })
        });
    }
    renderName() {
        let e;
        let { mentions: s, channel: n } = this.props;
        return (
            null != s &&
                s > 0 &&
                (e = (0, t.jsx)(h.Z, {
                    className: I.badge,
                    value: s
                })),
            (0, t.jsxs)('div', {
                className: I.name,
                children: [
                    (0, t.jsx)('span', {
                        className: I.match,
                        children: (0, c.F6)(n, g.default, E.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: s } = this.props;
        return (0, t.jsxs)('div', {
            className: null != e && e > 0 ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: I.misc,
                    children: s
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: s } = this.props,
            n = (0, c.F6)(e, g.default, E.Z);
        return null != s && s > 0
            ? _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
                  name: n,
                  mentions: s
              })
            : _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({ name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(j, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class L extends i.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, t.jsx)('div', {
            className: I.iconContainer,
            children: (0, t.jsx)(l.Avatar, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: l.AvatarSizes.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e;
        let { user: s, comparator: n } = this.props,
            r = E.Z.getNickname(s.id);
        return ((e = n === s.tag || null == n || '' === n ? s.username : n) === s.username || e === s.id) && (e = null != r ? r : b.ZP.getName(s)), e;
    }
    renderName() {
        let e;
        let { user: s, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, t.jsx)(h.Z, {
                    className: I.badge,
                    value: n
                })),
            (0, t.jsxs)('div', {
                className: I.name,
                children: [
                    (0, t.jsx)('span', {
                        className: I.match,
                        children: r
                    }),
                    e,
                    (0, t.jsx)('span', {
                        className: I.username,
                        children: b.ZP.getUserTag(s)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: s } = this.props;
        return (0, t.jsxs)('div', {
            className: null != s && s > 0 ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: I.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: s } = this.props,
            n = this.getDisplayNickname(),
            r = b.ZP.getUserTag(s);
        return null != e && e > 0
            ? _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
                  name: n,
                  id: r,
                  mentions: e
              })
            : _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
                  name: n,
                  id: r
              });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(j, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class S extends i.Component {
    renderContent() {
        let { children: e, application: s } = this.props;
        return (0, t.jsxs)('div', {
            className: I.contentDefault,
            children: [
                (0, t.jsx)('div', {
                    className: I.iconContainer,
                    children: (0, t.jsx)(m.Z, {
                        tabIndex: -1,
                        className: I.gameIcon,
                        game: s,
                        size: I.gameIconSize
                    })
                }),
                s.name,
                (0, t.jsx)('div', {
                    className: I.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, focused: r, id: i } = this.props;
        return (0, t.jsx)(j, {
            id: i,
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            focused: r,
            children: this.renderContent()
        });
    }
}
class T extends i.Component {
    render() {
        return (0, t.jsx)('div', {
            className: I.__invalid_resultDefault,
            children: (0, t.jsx)('div', {
                className: I.contentDefault,
                children: (0, t.jsx)('div', {
                    className: I.header,
                    children: this.props.children
                })
            })
        });
    }
}
class U extends i.Component {
    renderContent() {
        let e, s;
        let { link: n, children: r } = this.props,
            i = (0, C.Qj)(n.path);
        return (
            null == i || void 0 === i.messageId
                ? ((e = _.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN),
                  (s = (0, t.jsx)(l.LinkIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, C.VO)(i)
                  ? ((e = _.Z.Messages.QUICKSWITCHER_LINK_MESSAGE),
                    (s = (0, t.jsx)(p.Z, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = _.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS),
                    (s = (0, t.jsx)(l.LockIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, t.jsxs)('div', {
                className: I.contentDefault,
                children: [
                    (0, t.jsx)('div', {
                        className: I.iconContainer,
                        children: s
                    }),
                    e,
                    (0, t.jsx)('div', {
                        className: I.misc,
                        children: r
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(j, {
            id: a,
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
class R extends i.Component {
    renderContent() {
        let e;
        let { navigationRecord: s, children: n } = this.props,
            r = '';
        switch (s.type) {
            case a.Ky.SHOP:
                (r = _.Z.Messages.COLLECTIBLES_SHOP),
                    (e = (0, t.jsx)(l.ShopIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.NITRO_HOME:
                (r = _.Z.Messages.PREMIUM),
                    (e = (0, t.jsx)(l.NitroWheelIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.QUEST_HOME:
                (r = _.Z.Messages.QUESTS),
                    (e = (0, t.jsx)(l.QuestsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (r = s.id),
                    (e = (0, t.jsx)(l.LinkIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, t.jsxs)('div', {
            className: I.contentDefault,
            children: [
                (0, t.jsx)('div', {
                    className: I.iconContainer,
                    children: e
                }),
                r,
                (0, t.jsx)('div', {
                    className: I.misc,
                    children: n
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(j, {
            id: a,
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent()
        });
    }
}
