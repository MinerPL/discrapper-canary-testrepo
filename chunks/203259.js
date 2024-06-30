n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(39604), l = n(176127), r = n(689938), o = n(907339);
function c(e) {
    let {
        onOpenClipsGallery: t,
        clipIconRef: n,
        lastClipsSession: c
    } = e;
    return (0, i.jsxs)(a.TooltipLayer, {
        tooltipClassName: o.reminderTooltip,
        tooltipContentClassName: o.tooltipContent,
        targetElementRef: { current: n },
        position: 'bottom',
        color: a.TooltipColors.PRIMARY,
        children: [
            (0, i.jsx)(l.Z, {}),
            (0, i.jsx)(a.Heading, {
                variant: 'heading-md/extrabold',
                children: r.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({ count: c.newClipIds.length })
            }),
            (0, i.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.TRANSPARENT,
                        onClick: s.eL,
                        children: r.Z.Messages.DISMISS
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.BRAND,
                        onClick: t,
                        children: r.Z.Messages.CLIPS_REVIEW_NOW
                    })
                ]
            })
        ]
    });
}
