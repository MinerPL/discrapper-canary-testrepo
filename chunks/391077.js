var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(927359),
    o = n(975298),
    c = n(436774),
    d = n(55935),
    u = n(74538),
    m = n(474936),
    h = n(388032),
    g = n(153457);
function p(e) {
    let { hasUnactivatedUnits: t, durationText: n, endsAt: s, fractionalState: a, unactivatedHoursString: o, activationDate: c } = e,
        d = t ? h.intl.string(h.t['hT6i//']) : h.intl.string(h.t['3G0CTE']),
        u = t ? (void 0 === c ? h.intl.formatToPlainString(h.t['0Vwb/v'], { activateDate: c }) : '') : a === m.a$.FP_SUB ? h.intl.formatToPlainString(h.t.MMvaIC, { resumeDate: s.toDate() }) : '',
        p = t ? o : n,
        x = r()({
            [g.fractionalUnactivatedPill]: t,
            [g.fractionalTimeRemainingPill]: !t
        }),
        S = r()({
            [g.fractionalUnactivatedPillText]: t,
            [g.fractionalTimeRemainingPillText]: !t
        }),
        T = r()({ [g.fractionalTimeRemainingRowHeader]: !t });
    return (0, i.jsxs)('div', {
        className: g.fractionalTimeRemainingRow,
        children: [
            (0, i.jsxs)('div', {
                className: g.fractionalTimeRemainingRowDetails,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        className: T,
                        children: d
                    }),
                    u.length > 0 &&
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: u
                        })
                ]
            }),
            (0, i.jsx)('div', {
                className: g.fractionalTimeRemainingPillWrapper,
                children: (0, i.jsx)('div', {
                    className: x,
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        className: S,
                        children: p
                    })
                })
            })
        ]
    });
}
t.Z = function (e) {
    var t;
    let { className: n, unactivatedUnits: s, activationDate: m } = e,
        { fractionalState: x, endsAt: S } = (0, o.Z)({ forceFetch: !0 }),
        T = (0, a.Z)(S, a.a.SHORT_TIME),
        C = (0, u.sk)(s),
        _ = C > 0,
        E = {
            days: h.t.fYmir6,
            hours: h.t['C3RO+v'],
            minutes: h.t.r77oHR
        },
        f = _
            ? (0, d.QX)(
                  {
                      days: 0,
                      hours: C,
                      minutes: 0,
                      seconds: 0
                  },
                  E
              )
            : '';
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)('div', {
            className: r()(n, g.fractionalPremiumAccountCredit),
            children: [
                ((t = f),
                (0, i.jsxs)('div', {
                    className: g.accountCreditRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.iconBackgroundFractional,
                            children: (0, i.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: c.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                                className: g.iconFractional
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: g.rowDetails,
                            children: (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                children: h.intl.string(h.t.DFMPWV)
                            })
                        }),
                        (0, i.jsx)(l.Text, {
                            className: g.rowCreditCount,
                            variant: 'text-md/semibold',
                            children: t.length > 0 ? t : h.intl.string(h.t['B66Z+f'])
                        })
                    ]
                })),
                (0, i.jsx)(p, {
                    hasUnactivatedUnits: _,
                    durationText: T,
                    endsAt: S,
                    fractionalState: x,
                    unactivatedHoursString: f,
                    activationDate: m
                })
            ]
        })
    });
};
