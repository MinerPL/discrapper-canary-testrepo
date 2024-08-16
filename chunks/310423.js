n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(911969),
    u = n(906732),
    d = n(778087),
    _ = n(603721),
    E = n(124072),
    I = n(171368),
    m = n(592125),
    T = n(430824),
    h = n(594174),
    N = n(739566),
    f = n(981631),
    C = n(665692),
    p = n(689938),
    g = n(894684);
let S = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    A = { className: r()('mention', g.mention) };
function R(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(o.Text, {
            ...S,
            color: 'header-primary',
            children: e
        })
    });
}
t.Z = a.memo(function (e) {
    var t, n, s, r, x, O;
    let M,
        { channel: v, messageId: L, interactionData: Z } = e,
        { analyticsLocations: P } = (0, u.ZP)(),
        { onCopy: b, copyRef: D } = (0, d.Z)(v, null == Z ? void 0 : null === (t = Z.application_command) || void 0 === t ? void 0 : t.id),
        j = (0, l.e7)([T.Z], () => T.Z.getGuild(v.guild_id), [v.guild_id]);
    if (
        (a.useEffect(() => {
            (null == Z || (Z.type === c.yU.CHAT && void 0 === Z.application_command)) && _.OG(v.id, L);
        }, [v.id, L, Z]),
        null == Z)
    )
        M = (0, i.jsx)(o.Spinner, {
            type: o.Spinner.Type.SPINNING_CIRCLE,
            className: g.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (r = null === (n = Z.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== r ? r : []).map((e) => [e.name, e]));
        for (let n of null !== (x = Z.options) && void 0 !== x ? x : [])
            e = e.concat(
                (function e(t) {
                    var n, s, r, l, u, d, _;
                    let g,
                        { option: x, channel: O, guild: M, messageId: v, parentOptionKey: L, commandOptionSpec: Z, sourceAnalyticsLocations: P } = t,
                        b = null != L ? L + ' ' + x.name : x.name;
                    if (x.type === c.jw.SUB_COMMAND || x.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            ' ',
                                            (0, i.jsx)(o.Text, {
                                                ...S,
                                                children: null !== (s = null == Z ? void 0 : Z.name_localized) && void 0 !== s ? s : x.name
                                            })
                                        ]
                                    },
                                    b
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (r = null == Z ? void 0 : Z.options) && void 0 !== r ? r : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (l = x.options) && void 0 !== l ? l : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: O,
                                    guild: M,
                                    messageId: v,
                                    parentOptionKey: b,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: P
                                })
                            );
                        return t;
                    }
                    let D = x.value;
                    if (null != x.value)
                        switch (x.type) {
                            case c.jw.USER: {
                                let e = x.value.toString(),
                                    t = h.default.getUser(e);
                                if (null != t) {
                                    let e = (0, N.ij)(t, O);
                                    g = (0, i.jsxs)(E.Z, {
                                        ...A,
                                        onClick: () =>
                                            (0, I.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: O.guild_id,
                                                channelId: O.id,
                                                messageId: v,
                                                sourceAnalyticsLocations: P,
                                                analyticsLocation: { section: f.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                            }),
                                        children: [C.ME, e.nick]
                                    });
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = x.value.toString(),
                                    t = m.Z.getChannel(e);
                                null != t &&
                                    (g = (0, i.jsxs)(E.Z, {
                                        ...A,
                                        children: [C.zy, t.name]
                                    }));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = x.value.toString(),
                                    t = null != M ? T.Z.getRole(M.id, e) : void 0;
                                null != t &&
                                    (g = (0, i.jsxs)(E.Z, {
                                        ...A,
                                        children: [C.ME, t.name]
                                    }));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = x.value.toString(),
                                    t = null != M ? T.Z.getRole(M.id, e) : void 0;
                                if (null != t)
                                    g = (0, i.jsxs)(E.Z, {
                                        children: [C.ME, t.name]
                                    });
                                else {
                                    let t = h.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, N.ij)(t, O);
                                        g = (0, i.jsxs)(E.Z, {
                                            ...A,
                                            onClick: () =>
                                                (0, I.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: O.guild_id,
                                                    analyticsLocation: { section: f.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [C.ME, e.nick]
                                        });
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                g = R(p.Z.Messages.EXECUTED_COMMAND_POPOUT_ATTACHMENT_OPTION_VALUE);
                                break;
                            default: {
                                let e = null == Z ? void 0 : null === (u = Z.choices) || void 0 === u ? void 0 : u.find((e) => e.value === x.value);
                                null != e && (D = null !== (d = e.name_localized) && void 0 !== d ? d : e.name);
                            }
                        }
                    return (
                        null == g && (g = R(null == D ? void 0 : D.toString())),
                        [
                            (0, i.jsxs)(
                                a.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...S,
                                            children: [' ', null !== (_ = null == Z ? void 0 : Z.name_localized) && void 0 !== _ ? _ : x.name, ': ']
                                        }),
                                        g
                                    ]
                                },
                                b
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: v,
                    guild: j,
                    messageId: L,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: P
                })
            );
        M = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, {
                    ...S,
                    children: ['/', null !== (O = null === (s = Z.application_command) || void 0 === s ? void 0 : s.name_localized) && void 0 !== O ? O : Z.name]
                }),
                e
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: g.container,
        onCopy: (e) => {
            var t, n, i;
            let a = null !== (i = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : '';
            a.startsWith('/') && a.endsWith('\n') && b(e, Z);
        },
        children: [
            (0, i.jsx)('div', {
                className: g.tooltip,
                ref: D,
                children: M
            }),
            (0, i.jsx)('div', { className: g.tooltipPointer })
        ]
    });
});
