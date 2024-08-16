i.r(n),
    i.d(n, {
        __import__useLazyAPIPromise: function () {
            return D;
        },
        default: function () {
            return S;
        }
    });
var l = i(735250),
    t = i(470079),
    a = i(392711),
    r = i.n(a),
    s = i(442837),
    o = i(481060),
    c = i(45114),
    u = i(313201),
    d = i(597),
    E = i(147754),
    g = i(984933),
    h = i(720202),
    v = i(430824),
    Z = i(306680),
    C = i(626135),
    m = i(823379),
    N = i(981888),
    x = i(709054),
    f = i(897285),
    _ = i(518756),
    I = i(554747),
    p = i(710679),
    T = i(74562),
    j = i(576749),
    L = i(765305),
    M = i(981631),
    k = i(490897),
    P = i(689938),
    G = i(90528);
let D = N.Z;
function S(e) {
    let { transitionState: n, onClose: a, guildId: N } = e,
        D = (0, u.Dt)(),
        S = (0, s.e7)([v.Z], () => v.Z.getGuild(N)),
        y = (0, _.Z)(null == S ? void 0 : S.id),
        A = (0, I.ZP)(N),
        R = t.useRef(Z.ZP.ackMessageId(N, k.W.GUILD_EVENT)),
        U = (0, j.Z)();
    return (
        t.useEffect(() => {
            A.forEach((e) => f.Z.getGuildEventUserCounts(N, e.id, [])), f.Z.getGuildEventsForCurrentUser(N);
        }, [A, N]),
        t.useEffect(() => {
            let e = v.Z.getGuild(N);
            if (!(null == e ? void 0 : e.hasFeature(M.oNc.HUB))) return;
            let { showHubEventsList: n } = E.Z.getCurrentConfig({
                guildId: N,
                location: 'd3755f_1'
            });
            if (!n) return;
            let i = g.ZP.getDefaultChannel(N);
            null != i && d.c(i.id);
        }, [N]),
        t.useEffect(() => {
            C.default.track(M.rMx.OPEN_MODAL, {
                type: L.zw,
                guild_id: N,
                guild_events_count: A.length
            });
        }, []),
        t.useEffect(() => {
            r()(A)
                .map((e) => e.creator_id)
                .filter(m.lm)
                .uniq()
                .forEach((e) => {
                    h.Z.requestMember(N, e);
                });
        }, [N, A]),
        t.useEffect(() => {
            null != N && (0, c.Ju)(N, k.W.GUILD_EVENT);
        }, [N]),
        (0, l.jsxs)(o.ModalRoot, {
            size: o.ModalSize.MEDIUM,
            transitionState: n,
            'aria-labelledby': D,
            children: [
                (0, l.jsxs)(o.ModalHeader, {
                    className: G.header,
                    children: [
                        (0, l.jsx)(o.CalendarIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: G.icon
                        }),
                        (0, l.jsx)(o.Heading, {
                            id: D,
                            variant: 'heading-md/semibold',
                            children: A.length > 0 ? P.Z.Messages.GUILD_EVENTS_PLURAL.format({ number: A.length }) : P.Z.Messages.GUILD_EVENTS
                        }),
                        y &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)('div', {
                                        className: G.divider,
                                        children: '|'
                                    }),
                                    (0, l.jsx)(o.Button, {
                                        size: o.Button.Sizes.MIN,
                                        onClick: () => {
                                            (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([i.e('58023'), i.e('10221')]).then(i.bind(i, 779250));
                                                return (n) =>
                                                    (0, l.jsx)(e, {
                                                        ...n,
                                                        guildId: N
                                                    });
                                            }, U);
                                        },
                                        innerClassName: G.button,
                                        children: P.Z.Messages.SCHEDULE_EVENT
                                    })
                                ]
                            }),
                        (0, l.jsx)(o.Clickable, {
                            onClick: a,
                            className: G.iconButton,
                            'aria-label': P.Z.Messages.CLOSE,
                            children: (0, l.jsx)(o.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: G.icon
                            })
                        })
                    ]
                }),
                (0, l.jsx)(o.ModalContent, {
                    className: G.content,
                    children:
                        A.length > 0
                            ? A.map((e) =>
                                  (0, l.jsx)(
                                      p.Z,
                                      {
                                          guildEvent: e,
                                          guildId: N,
                                          onActionTaken: a,
                                          isNew: null != R.current && x.default.compare(e.id, R.current) > 0
                                      },
                                      e.id
                                  )
                              )
                            : (0, l.jsx)(T.Z, {
                                  guildId: N,
                                  onClose: a
                              })
                })
            ]
        })
    );
}
