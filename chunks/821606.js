n.r(e),
    n.d(e, {
        default: function () {
            return d;
        }
    });
var a = n(735250);
n(470079);
var o = n(481060),
    r = n(600164),
    s = n(313201),
    l = n(988158),
    i = n(689938),
    c = n(94078);
function d(t) {
    let { url: e, onClose: d, transitionState: u } = t,
        x = (0, s.Dt)(),
        { protocol: h, hostname: m, theRestOfTheUrl: b } = (0, l.h)(e);
    return (0, a.jsxs)(o.ModalRoot, {
        transitionState: u,
        'aria-labelledby': x,
        children: [
            (0, a.jsx)('img', {
                className: c.art,
                src: n(902623),
                alt: ''
            }),
            (0, a.jsx)(o.ModalContent, {
                children: (0, a.jsxs)(r.Z, {
                    direction: r.Z.Direction.VERTICAL,
                    justify: r.Z.Justify.CENTER,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: i.Z.Messages.BAD_LINK_WARNING_TITLE_V2
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: c.body,
                            children: i.Z.Messages.BAD_LINK_WARNING_BODY_V2.format()
                        }),
                        (0, a.jsxs)(o.Scroller, {
                            className: c.linkCalloutContainer,
                            children: [
                                (0, a.jsxs)(o.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: [h, '//']
                                }),
                                (0, a.jsx)(o.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: 'text-normal',
                                    children: m
                                }),
                                (0, a.jsx)(o.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: b
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, a.jsx)(o.ModalFooter, {
                children: (0, a.jsx)(o.Button, {
                    type: 'button',
                    size: o.Button.Sizes.MEDIUM,
                    color: o.Button.Colors.BRAND,
                    onClick: d,
                    children: i.Z.Messages.GO_BACK
                })
            })
        ]
    });
}
