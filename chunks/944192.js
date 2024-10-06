n.d(t, {
    Z: function () {
        return h;
    },
    j: function () {
        return f;
    }
}),
    n(789020);
var r = n(735250);
n(470079);
var i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(835473),
    l = n(925329),
    u = n(630388),
    c = n(981631),
    d = n(689938),
    _ = n(341383);
function E(e) {
    let { application: t, timestamp: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                size: l.Z.Sizes.LARGE,
                game: t
            }),
            (0, r.jsxs)('div', {
                className: _.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: _.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: a()(n).format('LLLL')
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: d.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP_CONTENT.format({ applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { application: t, timestamp: n, children: i } = e;
    return (0, r.jsx)(s.Tooltip, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': d.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP,
        tooltipClassName: _.gameMessageTooltip,
        tooltipContentClassName: _.gameMessageTooltipContent,
        text: (0, r.jsx)(E, {
            application: t,
            timestamp: n
        }),
        children: (e) =>
            (0, r.jsx)(s.Clickable, {
                tag: 'span',
                ...e,
                children: i
            })
    });
}
function h(e) {
    let { message: t } = e,
        n = (0, o.q)(t.applicationId);
    return null != n && (0, u.yE)(n.flags, c.udG.SOCIAL_LAYER_INTEGRATION)
        ? (0, r.jsx)(f, {
              application: n,
              timestamp: t.timestamp,
              children: (0, r.jsx)(s.GameControllerIcon, {
                  className: _.gameIcon,
                  size: 'custom',
                  width: 14,
                  height: 14
              })
          })
        : null;
}
