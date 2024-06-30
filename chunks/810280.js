n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var s = n(990547), a = n(481060), r = n(230711), l = n(960359), o = n(730417), c = n(981631), d = n(921944), u = n(689938), _ = n(849158);
let E = (e, t) => ({
    header: u.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({ gameName: e.title }),
    body: e.messages.enrollmentTooltip(t),
    imgSrc: e.assets.tooltipSrc,
    imgStyle: _.defaultDropImage
});
function h(e) {
    let {
        markAsDismissed: t,
        partnerGame: n
    } = e;
    (0, o.hs)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_ENROLLMENT);
    let h = (0, o.au)(n);
    if (null == h)
        return null;
    let {
            header: I,
            body: m,
            imgSrc: p,
            imgStyle: g
        } = E(h.drop, h.config.streamLengthRequirement), T = () => {
            t(d.L.DISMISS);
        };
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)('img', {
                src: p,
                alt: '',
                className: g
            }),
            (0, i.jsx)(a.Clickable, {
                className: _.__invalid_buttonClose,
                'aria-label': u.Z.Messages.CLOSE,
                onClick: T,
                children: (0, i.jsx)(a.CloseSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.closeIcon
                })
            }),
            (0, i.jsx)(a.Heading, {
                className: _.title,
                variant: 'heading-md/extrabold',
                children: I
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: _.subTitle,
                children: m
            }),
            h.config.autoEnrollment ? (0, i.jsx)(a.Button, {
                color: a.Button.Colors.BRAND_INVERTED,
                fullWidth: !0,
                onClick: () => {
                    r.Z.open(c.oAB.INVENTORY), t(d.L.PRIMARY);
                },
                children: u.Z.Messages.LEARN_MORE
            }) : (0, i.jsx)(a.Button, {
                innerClassName: _.button,
                color: a.Button.Colors.BRAND_INVERTED,
                fullWidth: !0,
                onClick: () => {
                    (0, l.RJ)(h.drop.dropsQuestId), r.Z.open(c.oAB.INVENTORY), t(d.L.PRIMARY);
                },
                children: u.Z.Messages.DROPS_ELIGIBILITY_ENROLLMENT_PRIMARY_CTA
            }),
            (0, i.jsx)(a.Button, {
                className: _.linkButtonContainer,
                innerClassName: _.linkButton,
                onClick: T,
                look: a.Button.Looks.LINK,
                fullWidth: !0,
                color: a.Button.Colors.WHITE,
                children: u.Z.Messages.NOT_NOW
            }),
            (0, i.jsx)('div', { className: _.pointer })
        ]
    });
}
