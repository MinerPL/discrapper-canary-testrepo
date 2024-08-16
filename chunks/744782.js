l.d(n, {
    Z: function () {
        return C;
    }
});
var s = l(735250);
l(470079);
var a = l(442837),
    t = l(481060),
    i = l(264229),
    r = l(751499),
    o = l(366980),
    d = l(603236),
    c = l(939863),
    u = l(984933),
    E = l(430824),
    _ = l(341165),
    I = l(626135),
    x = l(572004),
    m = l(971130),
    N = l(230900),
    T = l(981631),
    h = l(689938),
    g = l(130566);
let { INVITE_OPTIONS_7_DAYS: v, INVITE_OPTIONS_UNLIMITED: S } = m.ZP;
function C(e) {
    var n, l, C;
    let { onClose: L, event: A } = e,
        Z = null == A ? void 0 : A.guild_id,
        f = (0, a.e7)(
            [u.ZP],
            () => {
                var e;
                return null != Z ? (null === (e = u.ZP.getDefaultChannel(Z)) || void 0 === e ? void 0 : e.id) : null;
            },
            [Z]
        ),
        j = (0, a.e7)([E.Z], () => E.Z.getGuild(Z), [Z]),
        M = (null == j ? void 0 : j.vanityURLCode) != null && (null == j ? void 0 : j.vanityURLCode.length) > 0,
        { enabled: D } = r.Z.useExperiment(
            {
                guildId: null != Z ? Z : T.lds,
                location: 'bd50e8_1'
            },
            { autoTrackExposure: M }
        ),
        { channel_id: R, id: p } = null != A ? A : {},
        V = (0, a.e7)(
            [_.Z],
            () => {
                let e = null != R ? R : f;
                return null == e ? null : _.Z.getInvite(e);
            },
            [R, f]
        );
    if (null == A) return L(), null;
    let G = D && null !== (n = null == j ? void 0 : j.vanityURLCode) && void 0 !== n ? n : null == V ? void 0 : V.code,
        O =
            null != G
                ? (0, i.tV)({
                      baseCode: G,
                      guildScheduledEventId: p
                  })
                : null,
        U = null == O || null == V,
        y = (0, o.Z)(null != O ? O : ''),
        b = null !== (l = null == V ? void 0 : V.maxAge) && void 0 !== l ? l : v.value,
        B = null !== (C = null == V ? void 0 : V.maxUses) && void 0 !== C ? C : S.value;
    return (0, s.jsxs)('div', {
        className: g.container,
        children: [
            (0, s.jsx)(t.Clickable, {
                onClick: L,
                className: g.close,
                'aria-label': h.Z.Messages.CLOSE,
                children: (0, s.jsx)(t.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, s.jsx)(c.Z, {
                children: (0, s.jsx)('div', {
                    className: g.iconContainer,
                    children: (0, s.jsx)(t.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: g.icon
                    })
                })
            }),
            (0, s.jsx)(t.Heading, {
                variant: 'heading-xl/semibold',
                className: g.header,
                children: h.Z.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
            }),
            (0, s.jsx)(t.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: g.body,
                children: h.Z.Messages.GUILD_EVENT_CREATED_MODAL_BODY
            }),
            (0, s.jsxs)('div', {
                className: g.invite,
                children: [
                    (0, s.jsx)(d.S, {
                        value: y,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (U) return;
                            (0, x.JG)(e);
                            let n = (0, N.xC)(A.entity_type);
                            I.default.track(T.rMx.COPY_INSTANT_INVITE, {
                                server: A.guild_id,
                                channel: R,
                                channel_type: n,
                                location: T.t4x.GUILD_EVENTS,
                                code: V.code,
                                guild_scheduled_event_id: null == A ? void 0 : A.id
                            });
                        }
                    }),
                    (null == j ? void 0 : j.vanityURLCode) == null &&
                        (0, s.jsx)(t.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: g.inviteDetail,
                            children: (0, m.Vg)(b, B)
                        })
                ]
            })
        ]
    });
}
