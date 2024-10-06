n.d(s, {
    $W: function () {
        return M;
    },
    Mx: function () {
        return Z;
    },
    PZ: function () {
        return A;
    },
    h4: function () {
        return S;
    },
    ic: function () {
        return j;
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
    p = n(925329),
    m = n(565138),
    C = n(754688),
    x = n(237583),
    N = n(430824),
    f = n(699516),
    E = n(594174),
    g = n(51144),
    b = n(689938),
    _ = n(30352);
function I(e, s, n) {
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
class v extends i.PureComponent {
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
            className: _.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
                s,
                null != n
                    ? (0, t.jsx)('div', {
                          className: _.score,
                          children: n >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'node', void 0),
            I(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: s } = this.props,
                    { node: n } = this;
                null != n && s(e, n);
            }),
            I(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: s } = this.props,
                    { node: n } = this;
                null != n && s(e, n);
            }),
            I(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class j extends i.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, t.jsx)('div', {
            className: _.guildIconContainer,
            children: (0, t.jsx)(m.Z, {
                tabIndex: -1,
                guild: e,
                size: m.Z.Sizes.MINI,
                className: _.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, t.jsx)('div', {
            className: _.name,
            children: (0, t.jsx)('span', {
                className: _.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: s } = this.props;
        return (0, t.jsxs)('div', {
            className: e ? _.contentUnread : _.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: _.misc,
                    children: s
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return b.Z.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({ name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(v, {
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
class M extends (r = i.Component) {
    renderIcon() {
        var e;
        let { channel: s } = this.props,
            n = (0, d.KS)(s);
        if (null == n) return null;
        let r = null !== (e = (0, u.Z)(s)) && void 0 !== e ? e : '';
        return (0, t.jsx)('div', {
            className: _.iconContainer,
            role: 'img',
            'aria-label': r,
            children: (0, t.jsx)(n, {
                className: _.icon,
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
                    className: _.badge,
                    value: n
                })),
            null != r &&
                (s = (0, t.jsx)('span', {
                    className: _.note,
                    children: (0, c.F6)(r, E.default, f.Z)
                })),
            (0, t.jsxs)('div', {
                className: _.name,
                children: [
                    (0, t.jsx)('span', {
                        className: _.match,
                        children: (0, c.F6)(i, E.default, f.Z)
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
            : (0, t.jsx)(x.Z, {
                  className: _.voiceSummaryContainer,
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
            className: e || (null != s && s > 0) ? _.contentUnread : _.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: _.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: s } = this.props,
            n = null === (e = N.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            r = (0, c.F6)(s, E.default, f.Z),
            t = (0, u.Z)(s);
        return b.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
            name: r,
            type: t,
            guild: n
        });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(v, {
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
I(M, 'defaultProps', { unread: !1 });
class A extends i.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, t.jsx)('div', {
            className: _.dmIconContainer,
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
                    className: _.badge,
                    value: s
                })),
            (0, t.jsxs)('div', {
                className: _.name,
                children: [
                    (0, t.jsx)('span', {
                        className: _.match,
                        children: (0, c.F6)(n, E.default, f.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: s } = this.props;
        return (0, t.jsxs)('div', {
            className: null != e && e > 0 ? _.contentUnread : _.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: _.misc,
                    children: s
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: s } = this.props,
            n = (0, c.F6)(e, E.default, f.Z);
        return null != s && s > 0
            ? b.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
                  name: n,
                  mentions: s
              })
            : b.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({ name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(v, {
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
            className: _.iconContainer,
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
            r = f.Z.getNickname(s.id);
        return ((e = n === s.tag || null == n || '' === n ? s.username : n) === s.username || e === s.id) && (e = null != r ? r : g.ZP.getName(s)), e;
    }
    renderName() {
        let e;
        let { user: s, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, t.jsx)(h.Z, {
                    className: _.badge,
                    value: n
                })),
            (0, t.jsxs)('div', {
                className: _.name,
                children: [
                    (0, t.jsx)('span', {
                        className: _.match,
                        children: r
                    }),
                    e,
                    (0, t.jsx)('span', {
                        className: _.username,
                        children: g.ZP.getUserTag(s)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: s } = this.props;
        return (0, t.jsxs)('div', {
            className: null != s && s > 0 ? _.contentUnread : _.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, t.jsx)('div', {
                    className: _.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: s } = this.props,
            n = this.getDisplayNickname(),
            r = g.ZP.getUserTag(s);
        return null != e && e > 0
            ? b.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
                  name: n,
                  id: r,
                  mentions: e
              })
            : b.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
                  name: n,
                  id: r
              });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(v, {
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
class Z extends i.Component {
    renderContent() {
        let { children: e, application: s } = this.props;
        return (0, t.jsxs)('div', {
            className: _.contentDefault,
            children: [
                (0, t.jsx)('div', {
                    className: _.iconContainer,
                    children: (0, t.jsx)(p.Z, {
                        tabIndex: -1,
                        className: _.gameIcon,
                        game: s,
                        size: _.gameIconSize
                    })
                }),
                s.name,
                (0, t.jsx)('div', {
                    className: _.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, focused: r, id: i } = this.props;
        return (0, t.jsx)(v, {
            id: i,
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            focused: r,
            children: this.renderContent()
        });
    }
}
class S extends i.Component {
    render() {
        return (0, t.jsx)('div', {
            className: _.__invalid_resultDefault,
            children: (0, t.jsx)('div', {
                className: _.contentDefault,
                children: (0, t.jsx)('div', {
                    className: _.header,
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
                ? ((e = b.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN),
                  (s = (0, t.jsx)(l.LinkIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, C.VO)(i)
                  ? ((e = b.Z.Messages.QUICKSWITCHER_LINK_MESSAGE),
                    (s = (0, t.jsx)(l.ChatArrowRightIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = b.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS),
                    (s = (0, t.jsx)(l.LockIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, t.jsxs)('div', {
                className: _.contentDefault,
                children: [
                    (0, t.jsx)('div', {
                        className: _.iconContainer,
                        children: s
                    }),
                    e,
                    (0, t.jsx)('div', {
                        className: _.misc,
                        children: r
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(v, {
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
        let e, s;
        let { navigationRecord: n, children: r } = this.props;
        switch (n.type) {
            case a.Ky.SHOP:
                (e = b.Z.Messages.COLLECTIBLES_SHOP),
                    (s = (0, t.jsx)(l.ShopIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.NITRO_HOME:
                (e = b.Z.Messages.PREMIUM),
                    (s = (0, t.jsx)(l.NitroWheelIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.QUEST_HOME:
                (e = b.Z.Messages.QUESTS),
                    (s = (0, t.jsx)(l.QuestsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (e = n.id),
                    (s = (0, t.jsx)(l.LinkIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, t.jsxs)('div', {
            className: _.contentDefault,
            children: [
                (0, t.jsx)('div', {
                    className: _.iconContainer,
                    children: s
                }),
                e,
                (0, t.jsx)('div', {
                    className: _.misc,
                    children: r
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: s, onFocus: n, onContextMenu: r, focused: i, score: l, id: a } = this.props;
        return (0, t.jsx)(v, {
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
