t.d(n, {
    Z: function () {
        return N;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(581051), r = t(353381), s = t(993365), o = t(481060), c = t(240991), u = t(810090), d = t(283442), m = t(783097), p = t(591204), _ = t(689938), E = t(589419), A = t(622322);
function N(e) {
    var n;
    let {
            channel: t,
            application: l,
            videoUrl: a,
            imageCoverUrl: r,
            sectionName: o
        } = e, c = null != a || null != r, d = (null !== (n = l.description) && void 0 !== n ? n : '').length > 0;
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsx)(h, {
                channel: t,
                application: l,
                sectionName: o
            }),
            c || d ? (0, i.jsxs)('div', {
                className: E.profileAndVideoContainer,
                children: [
                    c ? (0, i.jsx)('div', {
                        className: E.videoContainer,
                        children: (0, i.jsx)(u.Z, {
                            loop: !0,
                            autoPlay: !0,
                            muted: !0,
                            className: d ? E.videoWithOverview : E.videoNoOverview,
                            src: a,
                            poster: r
                        })
                    }) : null,
                    d ? (0, i.jsxs)('div', {
                        className: c ? E.overviewContainerWithVideo : E.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(s.x, {
                                variant: 'text-sm/semibold',
                                children: _.Z.Messages.OVERVIEW
                            }),
                            (0, i.jsx)(C, { application: l })
                        ]
                    }) : null
                ]
            }) : null
        ]
    });
}
function h(e) {
    let {
            channel: n,
            application: t,
            sectionName: l
        } = e, a = (0, m.ye)({ application: t }), r = n.isThread(), s = (0, d.Z)({
            applicationId: t.id,
            channel: n
        });
    return (0, i.jsx)('div', {
        className: E.titleContainer,
        children: (0, i.jsxs)('div', {
            className: E.titleInnerContainer,
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-xl/extrabold',
                    children: t.name
                }),
                a ? (0, i.jsx)(p.Z, {
                    channel: n,
                    application: t,
                    disabled: r,
                    sectionName: l,
                    commandName: s
                }) : null
            ]
        })
    });
}
function C(e) {
    let {application: n} = e, [t, u] = l.useState(!1), d = l.useMemo(() => {
            var e;
            return (0, c.YP)(null !== (e = n.description) && void 0 !== e ? e : '');
        }, [n]), {
            ref: m,
            lineCount: p
        } = function () {
            let e = l.useRef(null), [n, t] = l.useState(null);
            return l.useEffect(() => {
                let n = e.current;
                if (null === n || 0 === n.clientHeight)
                    return;
                let i = parseInt(getComputedStyle(n).lineHeight);
                if (!isNaN(i))
                    t(Math.max(Math.floor(n.clientHeight / i)));
            }, []), {
                ref: e,
                lineCount: n
            };
        }();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.x, {
                ref: m,
                className: A.markup,
                variant: 'text-sm/medium',
                lineClamp: t ? void 0 : 3,
                children: d
            }),
            null != p && p >= 3 ? (0, i.jsxs)(o.Clickable, {
                className: E.expandableDescriptionClickable,
                onClick: () => {
                    u(e => !e);
                },
                children: [
                    (0, i.jsx)(s.x, {
                        ref: m,
                        variant: 'text-sm/semibold',
                        color: 'text-brand',
                        children: t ? _.Z.Messages.APP_LAUNCHER_SHOW_LESS : _.Z.Messages.APP_LAUNCHER_SHOW_MORE
                    }),
                    t ? (0, i.jsx)(r.u, {
                        size: 'sm',
                        color: o.tokens.colors.TEXT_BRAND
                    }) : (0, i.jsx)(a.C, {
                        size: 'sm',
                        color: o.tokens.colors.TEXT_BRAND
                    })
                ]
            }) : null
        ]
    });
}
