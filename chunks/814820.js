n.d(t, {
    f: function () {
        return p;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(541716), o = n(419922), c = n(665906), d = n(271383), u = n(430824), _ = n(496675), E = n(594174), m = n(838440), I = n(779139), T = n(981631), h = n(689938), N = n(18716);
let f = e => {
        let {
                channel: t,
                message: n
            } = e, [s, c] = a.useState(!1), d = (0, I.y6)(n.id), u = a.useCallback(() => {
                (0, m.v)({
                    type: r.I.FORM,
                    content: '',
                    channel: t
                }).then(e => {
                    let {valid: i} = e;
                    if (!!i)
                        (0, I.TZ)(t, n, d.id);
                });
            }, [
                t,
                n,
                d
            ]);
        return (0, i.jsx)('div', {
            className: N.welcomeCTA,
            children: (0, i.jsxs)(l.Button, {
                className: N.welcomeCTAButtonOuter,
                innerClassName: N.welcomeCTAButton,
                color: l.ButtonColors.PRIMARY,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                onClick: u,
                children: [
                    (0, i.jsx)(o.ZP, {
                        className: N.welcomeCTASticker,
                        isInteracting: s,
                        sticker: d,
                        size: 28
                    }),
                    h.Z.Messages.WELCOME_CTA_LABEL
                ]
            })
        });
    }, p = e => {
        let {
                message: t,
                channel: n
            } = e, a = n.getGuildId(), l = (0, s.e7)([
                E.default,
                _.Z,
                u.Z,
                d.ZP
            ], () => {
                var e;
                let i = E.default.getCurrentUser(), s = (0, c.xl)(n), l = _.Z.can(T.Plq.SEND_MESSAGES, n), r = null != a && null != i && (null === (e = d.ZP.getMember(a, i.id)) || void 0 === e ? void 0 : e.isPending), o = t.author.bot, m = u.Z.getGuild(a), I = null != m && (m.systemChannelFlags & T.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return l && !s && !r && !o && I;
            });
        return null != a && l ? (0, i.jsx)(f, {
            message: t,
            channel: n
        }) : null;
    };
