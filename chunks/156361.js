n.d(t, {
    DJ: function () {
        return M;
    },
    rp: function () {
        return P;
    }
}), n(411104), n(47120);
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(392711), u = n.n(l), c = n(91192), d = n(481060), _ = n(607070), E = n(895924), f = n(237375), h = n(342687), p = n(933557), m = n(471445), I = n(511618), T = n(926491), g = n(378233), S = n(430824), A = n(699516), N = n(594174), v = n(768581), O = n(51144), R = n(508688), C = n(981631), y = n(185923), D = n(689938), L = n(329032);
function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function M(e) {
    return null != e ? 'autocomplete-'.concat(e) : null;
}
function P(e) {
    return 'autocomplete-'.concat(e, '-title');
}
let U = a.createContext(null);
class w extends a.PureComponent {
    isSelectable() {
        return this.selectable;
    }
    renderContent() {
        throw Error('AutocompleteRow: renderContent must be extended');
    }
    renderClickable(e) {
        var t;
        let {
                layoutClass: n,
                props: {
                    className: r,
                    index: a,
                    selected: o
                }
            } = this, l = this.isSelectable();
        return (0, i.jsx)(d.Clickable, {
            ...e,
            className: s()(L.clickable, r, n),
            id: null !== (t = M(a)) && void 0 !== t ? t : void 0,
            onClick: l ? this.handleClick : void 0,
            onMouseMove: l ? () => {
                this.setState({ hovered: !0 }), this.handleMouseEnter();
            } : void 0,
            onMouseLeave: l ? () => this.setState({ hovered: !1 }) : void 0,
            role: 'option',
            'aria-disabled': !l,
            'aria-selected': l && o,
            children: (0, i.jsx)('div', {
                className: L.base,
                children: this.renderContent()
            })
        });
    }
    render() {
        let {index: e} = this.props;
        return this.isSelectable() ? (0, i.jsx)(c.mh, {
            id: ''.concat(e),
            children: e => this.renderClickable(e)
        }) : this.renderClickable();
    }
    constructor(e) {
        super(e), b(this, 'selectable', !0), b(this, 'layoutClass', L.autocompleteRowVertical), b(this, 'handleMouseEnter', () => {
            let {
                onHover: e,
                index: t,
                selected: n
            } = this.props;
            null == e || n || 'number' != typeof t || e(t);
        }), b(this, 'handleClick', e => {
            let {
                onClick: t,
                index: n
            } = this.props;
            null != t && 'number' == typeof n && t(n, e);
        }), this.state = { hovered: !1 };
    }
}
class x extends (r = a.PureComponent) {
    render() {
        let {
            children: e,
            className: t,
            innerClassName: n,
            id: r,
            ...o
        } = this.props;
        return a.Children.count(e) > 0 ? (0, i.jsx)(U.Provider, {
            value: { id: null != r ? r : '' },
            children: (0, i.jsx)('div', {
                className: s()(L.autocomplete, t),
                children: (0, i.jsx)('div', {
                    className: s()(L.autocompleteInner, n),
                    ...o,
                    children: e
                })
            })
        }) : null;
    }
}
b(x, 'Generic', class e extends w {
    renderContent() {
        let {
            text: e,
            description: t
        } = this.props;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: e }) }),
                null != t ? (0, i.jsx)(R.dY, { children: t }) : null
            ]
        });
    }
}), b(x, 'Loading', function (e) {
    let t = a.useMemo(() => u().random(60, 120), []);
    return (0, i.jsx)('div', {
        className: L.base,
        'aria-busy': !0,
        children: (0, i.jsx)(R.RX, {
            children: (0, i.jsx)(R.z5, {
                children: (0, i.jsx)(R.BR, {
                    children: (0, i.jsx)('div', {
                        className: L.autocompletePlaceholder,
                        style: { width: t }
                    })
                })
            })
        })
    });
}), b(x, 'Title', function (e) {
    let {
            title: t,
            className: n,
            children: r
        } = e, o = a.useContext(U);
    return (0, i.jsx)('div', {
        className: L.base,
        children: (0, i.jsxs)(d.Heading, {
            id: P(o.id),
            className: s()(L.contentTitle, n),
            variant: 'heading-deprecated-12/semibold',
            children: [
                t,
                r
            ]
        })
    });
}), b(x, 'Divider', class e extends w {
    renderContent() {
        let {className: e} = this.props;
        return (0, i.jsx)('div', { className: s()(e, L.divider) });
    }
    constructor(...e) {
        super(...e), b(this, 'layoutClass', L.dividerContainer), b(this, 'selectable', !1);
    }
}), b(x, 'User', class e extends w {
    renderContent() {
        let {
            user: e,
            nick: t,
            status: n,
            hidePersonalInformation: r,
            guildId: a
        } = this.props;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, {
                    children: (0, i.jsx)(d.Avatar, {
                        size: d.AvatarSizes.SIZE_24,
                        src: e.getAvatarURL(a, 24),
                        'aria-hidden': !0,
                        status: n
                    })
                }),
                (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: null != t ? t : O.ZP.getName(e) }) }),
                (0, i.jsxs)(R.dY, {
                    children: [
                        (0, i.jsx)('span', {
                            className: L.__invalid_descriptionUsername,
                            children: O.ZP.getUserTag(e, {
                                mode: 'username',
                                identifiable: r ? 'never' : 'always'
                            })
                        }),
                        r || e.isPomelo() ? null : (0, i.jsxs)('span', {
                            className: L.descriptionDiscriminator,
                            children: [
                                '#',
                                e.discriminator
                            ]
                        })
                    ]
                })
            ]
        });
    }
}), b(x, 'Role', class e extends w {
    renderContent() {
        let {
                role: e,
                hideDescription: t
            } = this.props, {colorString: n} = e, r = 'dot' === _.Z.roleStyle, a = 'username' === _.Z.roleStyle && null != n ? { color: n } : void 0;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.z5, {
                    children: (0, i.jsxs)(R.BR, {
                        children: [
                            r && (0, i.jsx)(d.RoleDot, {
                                className: L.roleDot,
                                color: n,
                                tooltip: !1
                            }),
                            (0, i.jsxs)('span', {
                                style: a,
                                children: [
                                    '@',
                                    e.name
                                ]
                            })
                        ]
                    })
                }),
                t ? null : (0, i.jsx)(R.dY, { children: D.Z.Messages.MENTION_USERS_WITH_ROLE })
            ]
        });
    }
}), b(x, 'Channel', class e extends w {
    renderContent() {
        let {
                channel: e,
                category: t
            } = this.props, n = e.type === C.d4z.GUILD_CATEGORY ? d.FolderIcon : (0, m.KS)(e);
        return (0, i.jsxs)(R.RX, {
            children: [
                null != n && (0, i.jsx)(R.Tw, { children: (0, i.jsx)(n, { className: L.icon }) }),
                (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: (0, p.F6)(e, N.default, A.Z) }) }),
                null != t ? (0, i.jsx)(R.dY, { children: t.name }) : null
            ]
        });
    }
}), b(x, 'Command', class e extends w {
    renderContent() {
        let {command: e} = this.props;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, {
                    children: (0, i.jsx)(d.SlashIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: L.icon,
                        colorClass: L.iconForeground
                    })
                }),
                (0, i.jsx)(R.z5, { children: (0, i.jsx)(R.BR, { children: e.name }) }),
                (0, i.jsx)(R.dY, { children: e.description })
            ]
        });
    }
}), b(x, 'NewCommand', class e extends w {
    isSelectable() {
        return this.props.command.inputType !== E.iw.PLACEHOLDER;
    }
    renderContent() {
        let {
                command: e,
                channel: t,
                showImage: n,
                section: r,
                selected: a
            } = this.props, {hovered: o} = this.state, s = this.isSelectable();
        return e.inputType === E.iw.PLACEHOLDER ? (0, i.jsx)(h.Z, {}) : (0, i.jsx)(f.Z, {
            command: e,
            channel: t,
            showImage: n,
            showOptions: o || s && a,
            section: r,
            isSelectable: s
        });
    }
}), b(x, 'Emoji', class e extends w {
    renderContent() {
        let {
                emoji: e,
                sentinel: t,
                guild: n
            } = this.props, r = null != e.id || '' !== e.url ? (0, i.jsx)('img', {
                alt: '',
                className: L.emojiImage,
                src: null != e.id ? v.ZP.getEmojiURL({
                    id: e.id,
                    animated: e.animated,
                    size: y.$U
                }) : e.url
            }) : (0, i.jsx)('span', {
                className: L.emojiRaw,
                children: e.surrogates
            }), a = null != n ? (0, i.jsx)(R.dY, { children: n.name }) : null;
        return (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, { children: r }),
                (0, i.jsx)(R.z5, {
                    children: (0, i.jsxs)(R.BR, {
                        children: [
                            t,
                            e.name,
                            t
                        ]
                    })
                }),
                a
            ]
        });
    }
    constructor(...e) {
        super(...e), b(this, 'layoutClass', s()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
    }
}), b(x, 'GIFIntegration', class e extends w {
    renderContent() {
        let {
            width: e,
            height: t,
            src: n
        } = this.props;
        return (0, i.jsx)('img', {
            alt: '',
            src: n,
            width: e,
            height: t
        });
    }
    constructor(...e) {
        super(...e), b(this, 'layoutClass', L.autocompleteRowHorizontal);
    }
}), b(x, 'Sticker', class e extends w {
    renderContent() {
        var e, t;
        let n;
        let {
                queryMatch: r,
                renderSticker: a,
                selected: o,
                sticker: s
            } = this.props, {hovered: l} = this.state;
        return (0, g.jl)(s) ? n = null === (e = T.Z.getStickerPack(s.pack_id)) || void 0 === e ? void 0 : e.name : (0, g.J8)(s) && (n = null === (t = S.Z.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name), (0, i.jsxs)(R.RX, {
            children: [
                (0, i.jsx)(R.Tw, { children: a(s, l || !0 === o) }),
                (0, i.jsxs)(R.z5, {
                    children: [
                        (0, i.jsx)(R.BR, {
                            className: L.__invalid_stickerName,
                            children: s.name
                        }),
                        null != r && (0, i.jsx)(R.wL, { children: D.Z.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({ queryMatch: r }) })
                    ]
                }),
                null != n && (0, i.jsx)(R.dY, { children: n })
            ]
        });
    }
    constructor(...e) {
        super(...e), b(this, 'layoutClass', s()(L.autocompleteRowVertical, L.autocompleteRowVerticalSmall));
    }
}), b(x, 'EmojiUpsell', class e extends w {
    renderContent() {
        return (0, i.jsx)(I.Z, { emojis: this.props.emojis });
    }
}), t.ZP = x;
