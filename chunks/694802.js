n(571269), n(298267);
var s = n(735250);
n(470079);
var o = n(481060),
    r = n(113434),
    a = n(665430),
    l = n(26650),
    i = n(46140),
    c = n(689938),
    d = n(476153);
function u(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)('div', {
        className: d.card,
        children: [
            (0, s.jsxs)('div', {
                className: d.header,
                children: [
                    (0, s.jsx)(o.CircleWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: d.icon,
                        width: 16,
                        height: 16
                    }),
                    (0, s.jsx)(o.Heading, {
                        color: 'always-white',
                        variant: 'heading-sm/medium',
                        children: t
                    })
                ]
            }),
            (0, s.jsx)(o.Text, {
                color: 'text-muted',
                variant: 'text-xs/normal',
                children: n
            })
        ]
    });
}
t.Z = function (e) {
    let { quest: t } = e,
        n = (0, a.p)({ location: i.dr.QUESTS_BAR }),
        o = (0, r.qb)(t);
    if (0 === o.length) return null;
    let d = o.at(0);
    return n
        ? d === c.Z.Messages.QUESTS_PROGRESS_WEB_TIP
            ? (0, s.jsx)(u, {
                  header: c.Z.Messages.QUEST_BAR_WEB_WARNING_HEADER,
                  children: c.Z.Messages.QUEST_BAR_WEB_WARNING_BODY
              })
            : d === c.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP
              ? (0, s.jsx)(u, {
                    header: c.Z.Messages.QUEST_BAR_MAC_WARNING_HEADER,
                    children: c.Z.Messages.QUEST_BAR_MAC_WARNING_BODY
                })
              : null
        : (0, s.jsx)(l.Z, { children: d });
};
