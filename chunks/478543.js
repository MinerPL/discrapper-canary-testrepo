n(47120), n(653041);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(512722), l = n.n(s), u = n(481060), c = n(942389), d = n(572004), _ = n(63063), E = n(358085), f = n(145022), h = n(981631), p = n(689938), m = n(528411);
function I(e) {
    let {url: t} = e, [n, a] = i.useState(!1), s = i.useRef(void 0), l = i.useCallback(() => {
            if (!n)
                (0, d.JG)(t) && a(!0), s.current = setTimeout(() => a(!1), 2000);
        }, [
            t,
            n
        ]);
    return i.useEffect(() => () => clearTimeout(s.current), []), d.wS ? (0, r.jsxs)(u.Clickable, {
        className: o()(m.copyLink, n ? m.copied : null),
        onClick: l,
        children: [
            (0, r.jsx)(u.LinkIcon, {
                size: 'md',
                color: 'currentColor',
                className: m.copyLinkIcon
            }),
            n ? p.Z.Messages.BUILD_OVERRIDE_LINK_COPIED : p.Z.Messages.BUILD_OVERRIDE_LINK_COPY
        ]
    }) : null;
}
function T(e) {
    let {
        subHead: t,
        buildDetails: n,
        buttonColor: a,
        buttonClick: s,
        buttonText: l,
        disabled: c = !1,
        submitting: d = !1
    } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: m.buildInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        className: m.subHead,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: m.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(u.Button, {
                submitting: d,
                color: a,
                onClick: s,
                className: o()(m.button, c ? m.disabledButtonOverride : null),
                size: m.buttonSize,
                disabled: c,
                children: l
            })
        ]
    });
}
t.Z = e => {
    var t, n, a;
    let {
            loading: s = !1,
            currentOverrides: d,
            linkMeta: g,
            url: S,
            applyBuildOverride: A,
            clearBuildOverride: N
        } = e, [v, O] = i.useState(!1), R = i.useCallback(() => {
            if (!v)
                O(!0), A().catch(() => O(!1));
        }, [
            A,
            v
        ]), C = i.useCallback(() => {
            if (!v)
                O(!0), N().catch(() => O(!1));
        }, [
            N,
            v
        ]);
    return (0, r.jsxs)('div', {
        className: m.wrapper,
        children: [
            (t = g, n = S, a = s, (0, r.jsxs)(u.Text, {
                variant: 'text-xs/normal',
                className: m.titleRegion,
                children: [
                    (0, r.jsx)('strong', {
                        className: m.title,
                        children: null != t && null != t.releaseChannel ? p.Z.Messages.BUILD_OVERRIDE_FOR.format({ releaseChannel: t.releaseChannel }) : p.Z.Messages.BUILD_OVERRIDE
                    }),
                    (0, r.jsx)(u.Anchor, {
                        className: m.infoLink,
                        href: _.Z.getArticleURL(h.BhN.BUILD_OVERRIDE_EMBED),
                        target: '_blank',
                        children: (0, r.jsx)(u.CircleInformationIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: m.infoIcon
                        })
                    }),
                    a ? null : (0, r.jsx)(I, { url: n })
                ]
            })),
            (0, r.jsxs)('div', {
                className: m.content,
                children: [
                    (0, r.jsx)(c.Z, { className: m.icon }),
                    s ? (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsxs)('div', {
                                className: m.buildInfo,
                                children: [
                                    (0, r.jsx)('div', { className: o()(m.barLoader, m.barTitle) }),
                                    (0, r.jsx)('div', { className: m.barLoader })
                                ]
                            }),
                            (0, r.jsx)('div', { className: m.buttonLoader })
                        ]
                    }) : function (e) {
                        var t, n;
                        let r, i, a, {
                                currentOverrides: o,
                                linkMeta: s,
                                applyBuildOverride: c,
                                clearBuildOverride: d,
                                submitting: _
                            } = e, h = ['discord_web'];
                        !E.isPlatformEmbedded && h.push('discord_marketing', 'discord_developers');
                        let m = (0, f.Z)(s, h);
                        if (!m.valid)
                            return function (e) {
                                return T({
                                    subHead: p.Z.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                                    buttonColor: u.Button.Colors.TRANSPARENT,
                                    buttonText: 'Invalid',
                                    buildDetails: e,
                                    disabled: !0
                                });
                            }(m.reason);
                        l()(null != s, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
                        let {
                                discord_web: I,
                                discord_developers: g
                            } = s.targetBuildOverride, S = null != I ? I : g;
                        if (l()(null != S, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), t = S, null == (n = o) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type)
                            i = p.Z.Messages.BUILD_OVERRIDE_APPLY, r = c, a = u.Button.Colors.GREEN;
                        else
                            i = p.Z.Messages.BUILD_OVERRIDE_CLEAR, r = d, a = u.Button.Colors.RED;
                        return T({
                            subHead: p.Z.Messages.BUILD_OVERRIDE_ID,
                            buildDetails: S.id,
                            buttonClick: r,
                            buttonText: i,
                            buttonColor: a,
                            submitting: _
                        });
                    }({
                        currentOverrides: d,
                        linkMeta: g,
                        applyBuildOverride: R,
                        clearBuildOverride: C,
                        submitting: v
                    })
                ]
            })
        ]
    });
};
