n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(653041),
    n(47120);
var i = n(735250),
    s = n(470079),
    o = n(120356),
    a = n.n(o),
    l = n(392711),
    r = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(748780),
    h = n(866442),
    m = n(442837),
    p = n(692547),
    f = n(481060),
    g = n(980568),
    _ = n(560768),
    T = n(812206),
    v = n(11769),
    E = n(243778),
    b = n(843693),
    I = n(246642),
    C = n(921227),
    S = n(314897),
    R = n(430824),
    x = n(496675),
    N = n(699516),
    O = n(885110),
    Z = n(300429),
    A = n(111583),
    j = n(594174),
    M = n(451478),
    y = n(626135),
    L = n(585483),
    P = n(70956),
    U = n(823379),
    w = n(5192),
    D = n(981631),
    k = n(689938),
    B = n(443236);
function F(e, t, n) {
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
let V = [];
class H extends s.PureComponent {
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e &&
            -1 === V.indexOf(e) &&
            (y.default.track(D.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            V.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e } = this.props;
        return (0, i.jsxs)('div', {
            className: a()(B.activityInviteEducation, { [B.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, i.jsx)('div', { className: B.activityInviteEducationArrow }),
                (0, i.jsx)('span', {
                    children: k.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { fadeIn: !1 }),
            F(this, 'timeout', null),
            F(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && g.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function G(e) {
    let { channel: t, guild: n } = e;
    return (0, i.jsx)(E.ZP, {
        contentTypes: [],
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
class W extends s.PureComponent {
    componentDidMount() {
        L.S.subscribe(D.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    componentWillUnmount() {
        L.S.unsubscribe(D.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    getCooldownTextStyle() {
        let { color: e } = this.state,
            { baseTextColor: t, activeTextColor: n } = this.props;
        return {
            color: e.interpolate({
                inputRange: [0, 1],
                outputRange: [t, (0, h.wK)(n, 0.9)]
            })
        };
    }
    render() {
        let e, t;
        let { guildId: n, activity: s, showInviteEducation: o, isFocused: l, typingUsers: c, className: h, slowmodeCooldownGuess: m, isBypassSlowmode: p, channel: g, isThreadCreation: _, renderDots: T, poggermodeEnabled: E, isComboing: b } = this.props,
            { rateLimitPerUser: C } = g,
            S = j.default.getCurrentUser(),
            x = R.Z.getGuild(n),
            O = C > 0,
            Z = _
                ? []
                : r()(c)
                      .keys()
                      .filter((e) => e !== (null == S ? void 0 : S.id))
                      .reject((e) => N.Z.isBlocked(e))
                      .map((e) => j.default.getUser(e))
                      .filter(U.lm)
                      .map((e) => w.ZP.getName(n, this.props.channel.id, e))
                      .value();
        if (0 === Z.length && !O && !b)
            return o && null != s
                ? (0, i.jsx)(H, {
                      activity: s,
                      isFocused: l
                  })
                : (0, i.jsx)(G, {
                      channel: g,
                      guild: x
                  });
        let A = null,
            M = '';
        if (O) {
            if (
                ((A = (0, i.jsx)(f.TimerIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: B.slowModeIcon
                })),
                (M = (0, v.k)(C)),
                !p && m > 0)
            ) {
                let t = d().duration(m);
                if (m > P.Z.Millis.HOUR) {
                    let n = ''.concat(t.minutes()).padStart(2, '0'),
                        i = ''.concat(t.seconds()).padStart(2, '0');
                    e = ''.concat(t.hours(), ':').concat(n, ':').concat(i);
                } else {
                    let n = ''.concat(t.seconds()).padStart(2, '0');
                    e = ''.concat(t.minutes(), ':').concat(n);
                }
            } else 0 === Z.length && (e = p ? k.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : k.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT);
        }
        let [y, L, D] = Z;
        return (
            (t =
                0 === Z.length
                    ? ''
                    : 1 === Z.length
                      ? k.Z.Messages.ONE_USER_TYPING.format({ a: y })
                      : 2 === Z.length
                        ? k.Z.Messages.TWO_USERS_TYPING.format({
                              a: y,
                              b: L
                          })
                        : 3 === Z.length
                          ? k.Z.Messages.THREE_USERS_TYPING.format({
                                a: y,
                                b: L,
                                c: D
                            })
                          : k.Z.Messages.SEVERAL_USERS_TYPING),
            (0, i.jsxs)('div', {
                className: a()(
                    B.typing,
                    {
                        'stop-animation': !l,
                        [B.isComboing]: E && b
                    },
                    h
                ),
                children: [
                    (0, i.jsxs)('div', {
                        className: B.typingDots,
                        children: [
                            Z.length > 0 &&
                                !1 !== T &&
                                (0, i.jsx)(f.Dots, {
                                    className: B.ellipsis,
                                    dotRadius: 3.5,
                                    themed: !0
                                }),
                            (0, i.jsx)('span', {
                                className: B.text,
                                'aria-live': 'polite',
                                'aria-atomic': !0,
                                children: t
                            })
                        ]
                    }),
                    O &&
                        (0, i.jsx)(f.Tooltip, {
                            text: M,
                            children: (t) =>
                                (0, i.jsxs)(u.Z.div, {
                                    style: this.getCooldownTextStyle(),
                                    className: B.cooldownWrapper,
                                    ...t,
                                    children: [e, A]
                                })
                        }),
                    E && b && (0, i.jsx)(I.Z, { channelId: g.id })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { color: new u.Z.Value(0) }),
            F(this, 'emphasizeSlowmodeCooldown', () => {
                let { color: e } = this.state;
                u.Z.sequence([
                    u.Z.timing(e, {
                        toValue: 1,
                        duration: 100,
                        easing: u.Z.Easing.quad
                    }),
                    u.Z.timing(e, {
                        delay: 250,
                        toValue: 0,
                        duration: 100,
                        easing: u.Z.Easing.quad
                    })
                ]).start();
            });
    }
}
function z(e) {
    let { channel: t, isThreadCreation: n = !1, ...s } = e,
        o = (0, m.e7)([O.Z], () => O.Z.findActivity((e) => null != e.application_id)),
        a = (0, m.e7)([b.ZP, S.default], () => b.ZP.getUserCombo(S.default.getId(), t.id)),
        l = (0, m.e7)([C.Z, T.Z], () => (0, _.Z)(t, o, C.Z, T.Z)),
        r = (0, m.e7)([Z.Z], () => Z.Z.getSlowmodeCooldownGuess(t.id, n ? Z.S.CreateThread : Z.S.SendMessage)),
        c = (0, m.e7)([x.Z], () => (n ? x.Z.can(D.Plq.MANAGE_THREADS, t) : x.Z.can(D.Plq.MANAGE_CHANNELS, t) || x.Z.can(D.Plq.MANAGE_MESSAGES, t))),
        d = {
            ...s,
            baseTextColor: (0, f.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, f.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: l,
            activity: o,
            typingUsers: (0, m.e7)([A.Z], () => A.Z.getTypingUsers(t.id)),
            isFocused: (0, m.e7)([M.Z], () => M.Z.isFocused()),
            guildId: t.guild_id,
            slowmodeCooldownGuess: r,
            isComboing: null != a,
            isBypassSlowmode: c,
            channel: t,
            isThreadCreation: n
        };
    return (0, i.jsx)(W, { ...d });
}
