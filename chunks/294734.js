n.d(t, {
    Z: function () {
        return L;
    }
});
var i = n(735250), a = n(470079), s = n(793030), l = n(442837), r = n(902704), o = n(692547), c = n(481060), d = n(356264), u = n(628238), _ = n(25015), E = n(438075), m = n(695346), I = n(592125), T = n(906467), h = n(430824), N = n(496675), f = n(699516), p = n(594174), C = n(113039), g = n(100604), S = n(694784), A = n(39154), x = n(689938), O = n(414700);
function R() {
    return (0, i.jsxs)('div', {
        className: O.headerContainer,
        children: [
            (0, i.jsx)(c.ChatArrowRightIcon, {
                size: 'xs',
                className: O.headerIcon,
                color: o.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, i.jsx)(s.x, {
                className: O.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: x.Z.Messages.MESSAGE_FORWARDED
            })
        ]
    });
}
function M(e) {
    let {
            message: t,
            snapshot: n,
            index: u
        } = e, _ = a.useMemo(() => new g.r(t, n, u), [
            t,
            n,
            u
        ]), E = (0, l.e7)([
            I.Z,
            p.default,
            f.Z,
            N.Z,
            h.Z,
            d.Z
        ], () => _.getForwardInfo(I.Z, p.default, f.Z, N.Z, h.Z, d.Z).footerInfo, [_], r.Z), m = a.useCallback(() => {
            (0, S.Z)(t);
        }, [t]);
    return null == E ? null : (0, i.jsxs)(c.Clickable, {
        className: O.footerContainer,
        onClick: m,
        children: [
            null != E.originIconUrl ? (0, i.jsx)('img', {
                className: O.originIcon,
                src: E.originIconUrl,
                alt: ''
            }) : null,
            (0, i.jsx)(s.x, {
                className: O.footerText,
                variant: 'text-sm/medium',
                color: 'none',
                children: ''.concat(E.originLabel, '  \u2022  ').concat(E.timestampLabel)
            }),
            (0, i.jsx)(c.ChevronSmallRightIcon, {
                size: 'xxs',
                color: o.Z.colors.TEXT_LOW_CONTRAST
            })
        ]
    });
}
function v(e) {
    var t;
    let {
            message: n,
            snapshot: s,
            index: r
        } = e, o = a.useMemo(() => (0, A.Z)(n, s), [
            n,
            s
        ]), c = m.RS.useSetting(), d = m.NA.useSetting(), h = (0, l.e7)([T.Z], () => T.Z.isDeveloper), N = (0, u.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), {
            content: f,
            hasSpoilerEmbeds: p
        } = (0, _.Z)(o, {
            hideSimpleEmbedContent: c && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0
        }), g = (0, l.e7)([I.Z], () => I.Z.getChannel(n.channel_id)), S = m.jU.useSetting();
    return null == g ? null : (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)('div', { className: O.quote }),
            (0, i.jsxs)('div', {
                className: O.content,
                children: [
                    (0, i.jsx)(R, {}),
                    (0, i.jsx)(C.ZP, {
                        message: o,
                        content: f
                    }),
                    (0, E.Z)({
                        channelMessageProps: {
                            message: o,
                            channel: g,
                            compact: S
                        },
                        hasSpoilerEmbeds: p,
                        isInteracting: !1,
                        isMessageSnapshot: !0
                    }),
                    (0, i.jsx)(M, {
                        message: n,
                        snapshot: s,
                        index: r
                    })
                ]
            })
        ]
    }, r);
}
function L(e) {
    let {message: t} = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(v, {
            message: t,
            snapshot: e,
            index: n
        }, n))
    });
}
