i.r(n), i.d(n, {
    default: function () {
        return T;
    }
}), i(47120);
var l = i(735250), a = i(470079), t = i(120356), s = i.n(t), r = i(442837), c = i(481060), o = i(41776), u = i(889161), d = i(513449), h = i(592125), v = i(430824), C = i(153124), m = i(305298), x = i(405613), N = i(460838), E = i(765305), g = i(689938), _ = i(68140);
function T(e) {
    var n;
    let {
            transitionState: i,
            event: t,
            onSuccess: T,
            onClose: I
        } = e, j = (0, C.Dt)(), {
            guild_id: p,
            privacy_level: A
        } = t, k = (0, r.e7)([h.Z], () => h.Z.getChannel(t.channel_id), [t]), S = (0, r.e7)([v.Z], () => v.Z.getGuild(p), [p]), {canManageGuildEvent: f} = (0, u.XJ)(null != k ? k : S), Z = f(t), L = (0, r.e7)([o.Z], () => o.Z.isLurking(p), [p]), y = t.entity_type === E.WX.STAGE_INSTANCE, [w, R] = a.useState(y), [b, {
                loading: M,
                error: G
            }] = (0, m.Z)();
    if (!Z)
        return null;
    let P = A === E.j8.PUBLIC ? g.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL : g.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL, O = () => {
            null == T || T(), I(), (0, d.Ku)(!1);
        }, V = async () => {
            await b(t, w, { onSuccess: O });
        };
    return (0, l.jsx)(c.ModalRoot, {
        transitionState: i,
        'aria-labelledby': j,
        children: (0, l.jsxs)(c.ModalContent, {
            className: _.content,
            children: [
                (0, l.jsx)('div', {
                    className: _.previewCard,
                    children: (0, l.jsx)(N.Z, {
                        guild: S,
                        channel: k,
                        name: t.name,
                        description: null !== (n = t.description) && void 0 !== n ? n : void 0,
                        imageSource: (0, x.Z)(t),
                        isActive: !1,
                        isUserLurking: L,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEvent: t
                    })
                }),
                (0, l.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: _.privacyLevel,
                    variant: 'text-sm/normal',
                    children: g.Z.Messages.START_EVENT_CONFIRMATION.format({
                        privacyLevel: P,
                        privacyLevelHook: (e, n) => A !== E.j8.PUBLIC ? null : (0, l.jsxs)('div', {
                            className: _.privacyLevel,
                            children: [
                                (0, l.jsx)(c.GlobeEarthIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: _.publicIcon
                                }),
                                (0, l.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: e
                                })
                            ]
                        }, n)
                    })
                }),
                (0, l.jsx)(c.Heading, {
                    variant: 'heading-xl/semibold',
                    className: _.header,
                    children: t.name
                }),
                y && (0, l.jsx)(c.Checkbox, {
                    className: _.verticalSpacing,
                    type: c.Checkbox.Types.INVERTED,
                    value: w,
                    onChange: e => {
                        let {currentTarget: n} = e;
                        return R(n.checked);
                    },
                    children: (0, l.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: g.Z.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP
                    })
                }),
                (0, l.jsxs)('div', {
                    className: s()(_.inline, _.buttons, _.verticalSpacing),
                    children: [
                        (0, l.jsx)(c.Button, {
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                                I();
                            },
                            className: s()(_.button, _.spacing),
                            children: g.Z.Messages.STAGE_BLOCKED_USERS_CANCEL
                        }),
                        (0, l.jsx)(c.Button, {
                            color: c.Button.Colors.GREEN,
                            onClick: V,
                            submitting: M,
                            className: _.button,
                            children: g.Z.Messages.START_EVENT
                        })
                    ]
                }),
                null != G && null != G.getAnyErrorMessage() ? (0, l.jsx)(c.Text, {
                    color: 'text-danger',
                    variant: 'text-sm/normal',
                    className: _.errorMessage,
                    children: G.getAnyErrorMessage()
                }) : null
            ]
        })
    });
}
