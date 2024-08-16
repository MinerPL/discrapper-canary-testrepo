n.d(t, {
    u: function () {
        return T;
    }
}),
    n(653041),
    n(47120);
var r,
    i = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    l = n(512722),
    u = n.n(l),
    c = n(481060),
    d = n(686546),
    _ = n(184301),
    E = n(103575),
    f = n(598077),
    h = n(594174),
    p = n(426563),
    m = n(39368);
function I(e, t, n) {
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
let T = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
};
function g(e, t) {
    let n = e instanceof f.Z ? e : null != e ? e.user : null;
    return null != n ? n.id : 'user-'.concat(t);
}
class S extends (r = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: a } = this.props,
            s = [],
            o = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(o),
            u = 0;
        for (; u < o && u < e.length; ) {
            var c;
            let t = null == l && null == a && u === e.length - 1,
                o = n(e[u], t, u);
            s.push(
                t
                    ? (0, i.jsx)(
                          'div',
                          {
                              className: m.avatarContainer,
                              children: o
                          },
                          g(null !== (c = e[u]) && void 0 !== c ? c : null, u)
                      )
                    : (0, i.jsx)(
                          d.ZP,
                          {
                              className: m.avatarContainerMasked,
                              height: r,
                              width: r,
                              mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: o
                          },
                          g(e[u], u)
                      )
            ),
                u++;
        }
        return null != a ? s.push(a) : null != l && s.push(l), s;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: r, renderMoreUsers: s, users: o } = this.props,
            l = Math.min(e, o.length);
        if (!r) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(a.Fragment, { children: s(''.concat(t, '+'), t) }, 'more-users');
                if (n > o.length) {
                    let e = n - o.length;
                    return (0, i.jsx)(a.Fragment, { children: s('+'.concat(e), e) }, 'more-users');
                }
            } else if (l < o.length) {
                let e = Math.min(o.length - l, 99);
                return (0, i.jsx)(a.Fragment, { children: s('+'.concat(e), e) }, 'more-users');
            }
        }
    }
    renderIcon() {
        return this.props.renderIcon
            ? (0, i.jsx)(c.VoiceNormalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  colorClass: m.__invalid_foreground,
                  className: m.icon
              })
            : null;
    }
    render() {
        let { className: e, size: t, users: n, guildId: r, showUserPopout: a, useFallbackUserForPopout: s } = this.props,
            { popoutUserId: l } = this.state,
            d = n.find((e) => null != e && e.id === l),
            f = s && null == h.default.getUser(l);
        return (0, i.jsx)(c.Popout, {
            position: 'right',
            preload: null == d ? void 0 : () => (0, _.Z)(d.id, d.getAvatarURL(r, 80), { guildId: r }),
            shouldShow: !0 === a && null != l,
            fixed: !0,
            renderPopout: (e) => (
                u()(null != l, 'UserSummaryItem.render - renderPopout: popoutUserId cannot be null'),
                (0, i.jsx)(E.Z, {
                    ...this.props,
                    location: 'UserSummaryItem',
                    user: f && null != d ? d : void 0,
                    ...e,
                    userId: l,
                    guildId: this.props.guildId
                })
            ),
            onRequestClose: () => this.setState({ popoutUserId: null }),
            children: (n) =>
                (0, i.jsxs)('div', {
                    className: o()(
                        e,
                        m.container,
                        (function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.SIZE_24;
                            switch (e) {
                                case T.SIZE_16:
                                    return m.size16;
                                case T.SIZE_24:
                                    return m.size24;
                                case T.SIZE_32:
                                    return m.size32;
                                case T.SIZE_56:
                                    return m.size56;
                                default:
                                    return m.size24;
                            }
                        })(t)
                    ),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()]
                })
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', { popoutUserId: null }),
            I(this, '_ref', a.createRef()),
            I(this, 'defaultRenderUser', (e, t, n) => {
                let { showUserPopout: r, guildId: a, size: s } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)('div', { className: m.emptyUser });
                    {
                        let e = (null != n ? n : 0) % p.Z.DEFAULT_AVATARS.length,
                            t = p.Z.DEFAULT_AVATARS[e];
                        return (0, i.jsx)('img', {
                            src: t,
                            alt: '',
                            className: m.avatar
                        });
                    }
                }
                let o = (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(a, s),
                        alt: e.username,
                        className: m.avatar
                    },
                    e.id
                );
                return r
                    ? (0, i.jsx)(
                          c.Clickable,
                          {
                              className: m.clickableAvatar,
                              onClick: () => {
                                  null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                              },
                              tabIndex: -1,
                              children: o
                          },
                          e.id
                      )
                    : o;
            });
    }
}
I(S, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e) {
        return (0, i.jsx)('div', {
            className: m.moreUsers,
            children: e
        });
    },
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: T.SIZE_24
}),
    (t.Z = S);
