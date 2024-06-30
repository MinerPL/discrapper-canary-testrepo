n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250), a = n(470079), l = n(990547), s = n(481060), r = n(213609), o = n(536442), c = n(39604), u = n(176127), d = n(689938), h = n(397031);
function p(e) {
    let {
        onOpenClips: t,
        lastClipsSession: n,
        closePopout: p
    } = e;
    return (a.useEffect(() => () => {
        (0, c.eL)();
    }, []), (0, r.Z)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.HOTSPOT,
        properties: { hotspot_location: o.v6.CLIPS_CHANNEL_ATTACH_REMINDER }
    }), null == n) ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)('div', {
        className: h.recentClipsPopout,
        children: [
            (0, i.jsx)('div', {
                className: h.thumbnailStackContainer,
                children: (0, i.jsx)(u.Z, {})
            }),
            (0, i.jsx)(s.Heading, {
                className: h.header,
                color: 'header-primary',
                variant: 'heading-md/extrabold',
                children: d.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({ count: n.newClipIds.length })
            }),
            (0, i.jsx)(s.Text, {
                color: 'text-normal',
                className: h.__invalid_content,
                variant: 'text-sm/medium',
                children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_BODY.format({ applicationName: n.applicationName })
            }),
            (0, i.jsxs)('div', {
                className: h.buttonsContainer,
                children: [
                    (0, i.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: function () {
                            (0, o.Kw)(o.v6.CLIPS_CHANNEL_ATTACH_REMINDER), p();
                        },
                        children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_SECONDARY_CTA
                    }),
                    (0, i.jsx)(s.Button, {
                        color: s.Button.Colors.BRAND,
                        onClick: t,
                        children: d.Z.Messages.CLIPS_SESSION_ENDED_TOOLTIP_PRIMARY_CTA
                    })
                ]
            })
        ]
    });
}
