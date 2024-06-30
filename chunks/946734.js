n.d(t, {
    Z: function () {
        return A;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(392711), s = n.n(l), r = n(442837), o = n(481060), c = n(100527), u = n(906732), d = n(150039), h = n(171368), p = n(271383), m = n(430824), _ = n(594174), f = n(514342), E = n(502568), C = n(602623), g = n(251625), I = n(823379), x = n(981631), T = n(228168), N = n(689938), v = n(743630);
function S(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class Z {
    updateData(e) {
        let {
            userId: t,
            user: n,
            channelId: i,
            analyticsLocations: a
        } = e;
        this.userId = t, this.user = n, this.channelId = i, this.analyticsLocations = a;
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs() {
        return this.getNicknameGuildPairs().map((e, t) => {
            let [n, l] = e, s = (0, i.jsx)(o.Clickable, {
                    tag: 'span',
                    onClick: this.handleClick,
                    children: n
                });
            return l.length > 0 && (s = (0, i.jsx)(o.TooltipContainer, {
                className: v.tooltip,
                text: l.join(', '),
                position: 'bottom',
                children: s
            })), (0, i.jsxs)(a.Fragment, {
                children: [
                    0 !== t ? ', ' : null,
                    s
                ]
            }, t);
        });
    }
    constructor({
        userId: e,
        user: t,
        channelId: n,
        analyticsLocations: a
    }) {
        S(this, 'userId', void 0), S(this, 'user', void 0), S(this, 'channelId', void 0), S(this, 'analyticsLocations', void 0), S(this, 'generateNicknameGuildPairs', (0, g.oH)(e => {
            var t;
            return s()(p.ZP.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
                let [t, n] = e;
                return [
                    t,
                    n.map(e => {
                        var t;
                        return null === (t = m.Z.getGuild(e)) || void 0 === t ? void 0 : t.name;
                    }).filter(I.lm)
                ];
            }).value();
        })), S(this, 'renderMoreAvatars', () => (0, i.jsx)(o.TooltipContainer, {
            text: N.Z.Messages.AKA_MORE_AVATARS_OVERFLOW,
            position: 'bottom',
            children: (0, i.jsx)(o.Clickable, {
                className: v.moreAvatars,
                onClick: this.handleClick,
                children: (0, i.jsx)(o.CirclePlusIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: v.plusIcon
                })
            })
        }, 'more-avatars')), S(this, 'handleClick', () => {
            (0, h.openUserProfileModal)({
                userId: this.userId,
                channelId: this.channelId,
                sourceAnalyticsLocations: this.analyticsLocations,
                section: T.oh.MUTUAL_GUILDS,
                analyticsLocation: { section: x.jXE.CHANNEL_HEADER }
            });
        }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = a;
    }
}
function A(e) {
    let {channel: t} = e, n = t.getRecipientId(), l = (0, d.gc)(n), s = Array(l.length).fill(null), {analyticsLocations: h} = (0, u.ZP)(c.Z.AKA), p = function (e) {
            let {
                    userId: t,
                    channelId: n,
                    analyticsLocations: i
                } = e, l = (0, r.e7)([_.default], () => _.default.getUser(t), [t]), [s] = a.useState(() => new Z({
                    user: l,
                    userId: t,
                    channelId: n,
                    analyticsLocations: i
                }));
            return s.updateData({
                userId: t,
                user: l,
                channelId: n,
                analyticsLocations: i
            }), s;
        }({
            userId: n,
            analyticsLocations: h,
            channelId: t.id
        });
    return 0 === p.getNicknameGuildPairs().length && 0 === l.length ? (0, i.jsx)('div', { className: v.spacer }) : (0, i.jsxs)(u.Gt, {
        value: h,
        children: [
            (0, i.jsx)(E.iz, {}),
            (0, i.jsx)(o.TextBadge, {
                text: N.Z.Messages.AKA,
                disableColor: !0,
                className: v.akaBadge
            }),
            l.length > 0 ? (0, i.jsx)(C.Z, {
                size: 16,
                users: s,
                showUserPopout: !1,
                renderUser: (e, t, n) => {
                    var a;
                    let s = p.user, r = l[n];
                    return null == r || null == s ? null : (0, i.jsx)(o.TooltipContainer, {
                        text: null === (a = m.Z.getGuild(r)) || void 0 === a ? void 0 : a.name,
                        position: 'bottom',
                        children: (0, i.jsx)('img', {
                            alt: '',
                            className: v.avatar,
                            onClick: p.handleClick,
                            src: s.getAvatarURL(r, 16),
                            'aria-hidden': !0
                        })
                    }, r[1]);
                },
                renderMoreUsers: p.renderMoreAvatars,
                guildId: void 0,
                max: 3,
                className: v.avatars
            }) : null,
            p.getNicknameGuildPairs().length > 0 ? (0, i.jsx)(f.Z, {
                position: 'bottom',
                className: v.nicknames,
                children: p.renderNicknamePairs()
            }) : null
        ]
    });
}
