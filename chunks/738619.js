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
    u = n.n(c),
    d = n(748780),
    h = n(866442),
    m = n(442837),
    p = n(692547),
    g = n(481060),
    f = n(980568),
    T = n(560768),
    _ = n(812206),
    v = n(11769),
    b = n(243778),
    E = n(843693),
    I = n(246642),
    x = n(921227),
    C = n(314897),
    S = n(430824),
    R = n(496675),
    N = n(699516),
    O = n(885110),
    Z = n(300429),
    j = n(111583),
    M = n(594174),
    A = n(451478),
    y = n(626135),
    P = n(585483),
    L = n(70956),
    w = n(823379),
    U = n(5192),
    k = n(981631),
    B = n(689938),
    D = n(417499);
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
            (y.default.track(k.rMx.SHOW_TUTORIAL, {
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
            className: a()(D.activityInviteEducation, { [D.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, i.jsx)('div', { className: D.activityInviteEducationArrow }),
                (0, i.jsx)('span', {
                    children: B.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
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
                null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function G(e) {
    let { channel: t, guild: n } = e;
    return (0, i.jsx)(b.ZP, {
        contentTypes: [],
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
class W extends s.PureComponent {
    componentDidMount() {
        P.S.subscribe(k.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
    }
    componentWillUnmount() {
        P.S.unsubscribe(k.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
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
        let e;
        let { guildId: t, activity: n, showInviteEducation: s, isFocused: o, typingUsers: l, className: c, slowmodeCooldownGuess: h, isBypassSlowmode: m, channel: p, isThreadCreation: f, renderDots: T, poggermodeEnabled: _, isComboing: b } = this.props,
            { rateLimitPerUser: E } = p,
            x = M.default.getCurrentUser(),
            C = S.Z.getGuild(t),
            R = E > 0,
            O = f
                ? []
                : r()(l)
                      .keys()
                      .filter((e) => e !== (null == x ? void 0 : x.id))
                      .reject((e) => N.Z.isBlocked(e))
                      .map((e) => M.default.getUser(e))
                      .filter(w.lm)
                      .map((e) => U.ZP.getName(t, this.props.channel.id, e))
                      .value();
        if (0 === O.length && !R && !b)
            return s && null != n
                ? (0, i.jsx)(H, {
                      activity: n,
                      isFocused: o
                  })
                : (0, i.jsx)(G, {
                      channel: p,
                      guild: C
                  });
        let Z = '',
            j = null,
            A = '';
        if (R) {
            if (
                ((j = (0, i.jsx)(g.TimerIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: D.slowModeIcon
                })),
                (A = (0, v.k)(E)),
                !m && h > 0)
            ) {
                let e = u().duration(h);
                if (h > L.Z.Millis.HOUR) {
                    let t = ''.concat(e.minutes()).padStart(2, '0'),
                        n = ''.concat(e.seconds()).padStart(2, '0');
                    Z = ''.concat(e.hours(), ':').concat(t, ':').concat(n);
                } else {
                    let t = ''.concat(e.seconds()).padStart(2, '0');
                    Z = ''.concat(e.minutes(), ':').concat(t);
                }
            } else 0 === O.length && (Z = m ? B.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : B.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT);
        }
        let [y, P, k] = O;
        return (
            (e =
                0 === O.length
                    ? ''
                    : 1 === O.length
                      ? B.Z.Messages.ONE_USER_TYPING.format({ a: y })
                      : 2 === O.length
                        ? B.Z.Messages.TWO_USERS_TYPING.format({
                              a: y,
                              b: P
                          })
                        : 3 === O.length
                          ? B.Z.Messages.THREE_USERS_TYPING.format({
                                a: y,
                                b: P,
                                c: k
                            })
                          : B.Z.Messages.SEVERAL_USERS_TYPING),
            (0, i.jsxs)('div', {
                className: a()(
                    D.typing,
                    {
                        'stop-animation': !o,
                        [D.isComboing]: _ && b
                    },
                    c
                ),
                children: [
                    (0, i.jsxs)('div', {
                        className: D.typingDots,
                        children: [
                            O.length > 0 &&
                                !1 !== T &&
                                (0, i.jsx)(g.Dots, {
                                    className: D.ellipsis,
                                    dotRadius: 3.5,
                                    themed: !0
                                }),
                            (0, i.jsx)('span', {
                                className: D.text,
                                'aria-live': 'polite',
                                'aria-atomic': !0,
                                children: e
                            })
                        ]
                    }),
                    R &&
                        (0, i.jsx)(g.Tooltip, {
                            text: A,
                            children: (e) =>
                                (0, i.jsxs)(d.Z.div, {
                                    style: this.getCooldownTextStyle(),
                                    className: D.cooldownWrapper,
                                    ...e,
                                    children: [Z, j]
                                })
                        }),
                    _ && b && (0, i.jsx)(I.Z, { channelId: p.id })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            F(this, 'state', { color: new d.Z.Value(0) }),
            F(this, 'emphasizeSlowmodeCooldown', () => {
                let { color: e } = this.state;
                d.Z.sequence([
                    d.Z.timing(e, {
                        toValue: 1,
                        duration: 100,
                        easing: d.Z.Easing.quad
                    }),
                    d.Z.timing(e, {
                        delay: 250,
                        toValue: 0,
                        duration: 100,
                        easing: d.Z.Easing.quad
                    })
                ]).start();
            });
    }
}
function z(e) {
    let { channel: t, isThreadCreation: n = !1, ...s } = e,
        o = (0, m.e7)([O.Z], () => O.Z.findActivity((e) => null != e.application_id)),
        a = (0, m.e7)([E.ZP, C.default], () => E.ZP.getUserCombo(C.default.getId(), t.id)),
        l = (0, m.e7)([x.Z, _.Z], () => (0, T.Z)(t, o, x.Z, _.Z)),
        r = (0, m.e7)([Z.Z], () => Z.Z.getSlowmodeCooldownGuess(t.id, n ? Z.S.CreateThread : Z.S.SendMessage)),
        c = (0, m.e7)([R.Z], () => (n ? R.Z.can(k.Plq.MANAGE_THREADS, t) : R.Z.can(k.Plq.MANAGE_CHANNELS, t) || R.Z.can(k.Plq.MANAGE_MESSAGES, t))),
        u = {
            ...s,
            baseTextColor: (0, g.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, g.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: l,
            activity: o,
            typingUsers: (0, m.e7)([j.Z], () => j.Z.getTypingUsers(t.id)),
            isFocused: (0, m.e7)([A.Z], () => A.Z.isFocused()),
            guildId: t.guild_id,
            slowmodeCooldownGuess: r,
            isComboing: null != a,
            isBypassSlowmode: c,
            channel: t,
            isThreadCreation: n
        };
    return (0, i.jsx)(W, { ...u });
}
