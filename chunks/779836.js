n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(920906), r = n(399606), o = n(481060), c = n(511010), u = n(446183), d = n(677281), h = n(765104), p = n(477291), m = n(531578), _ = n(959517), f = n(689938), E = n(153023);
function C(e) {
    let {
            summary: t,
            channel: n
        } = e, a = (0, r.e7)([h.Z], () => h.Z.summaryFeedback(t)), l = (e, i) => {
            e.stopPropagation(), (0, p.Z)({
                summary: t,
                channel: n,
                rating: i
            });
        }, c = (0, s.useTransition)(null == a, {
            enter: {
                from: { opacity: 0 },
                to: { opacity: 1 }
            },
            leave: { opacity: 0 },
            config: {
                mass: 1,
                tension: 500,
                friction: 18,
                clamp: !0
            }
        });
    return (0, i.jsx)(i.Fragment, {
        children: c((e, t) => t ? (0, i.jsx)('div', {
            className: E.summaryFeedbackWrapper,
            children: (0, i.jsxs)(s.animated.div, {
                style: e,
                className: E.summaryFeedback,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: f.Z.Messages.SUMMARY_FEEDBACK
                    }),
                    (0, i.jsx)(o.Clickable, {
                        onClick: e => l(e, m.aZ.GOOD),
                        children: (0, i.jsx)(d.Z, {
                            className: E.thumbIcon,
                            width: 12,
                            height: 12
                        })
                    }),
                    (0, i.jsx)(o.Clickable, {
                        onClick: e => l(e, m.aZ.BAD),
                        children: (0, i.jsx)(u.Z, {
                            className: E.thumbIcon,
                            width: 12,
                            height: 12
                        })
                    })
                ]
            })
        }) : null)
    });
}
function g(e) {
    var t, n;
    let a, {
            item: s,
            channel: u,
            index: d
        } = e, p = (0, r.e7)([h.Z], () => h.Z.selectedSummary(u.id));
    if (null == p)
        return null;
    let m = null != s.unreadId, f = null != s.content;
    return a = f ? (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.TopicsIcon, {
                size: 'xs',
                color: 'currentColor',
                className: E.summaryStartIcon
            }),
            s.content
        ]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C, {
                summary: p,
                channel: u
            }),
            (0, i.jsx)(o.TopicsIcon, {
                size: 'xs',
                color: 'currentColor',
                className: E.summaryEndIcon
            })
        ]
    }), (0, i.jsx)(c.Z, {
        className: l()(E.summaryDivider, f ? E.summaryDividerStart : E.summaryDividerEnd),
        contentClassName: f ? E.summaryStartContent : E.summaryEndContent,
        isUnread: m,
        id: m ? _.j1 : void 0,
        children: a
    }, 'divider-'.concat(null !== (n = null !== (t = s.contentKey) && void 0 !== t ? t : s.unreadId) && void 0 !== n ? n : d));
}
