t.d(n, {
    Z: function () {
        return h;
    }
}), t(47120);
var i = t(735250), a = t(470079), s = t(780384), l = t(481060), o = t(668781), r = t(308063), c = t(410030), d = t(285952), u = t(63063), I = t(725875), m = t(981631), _ = t(689938), N = t(979248), E = t(893916), T = t(408942);
function h(e) {
    let n, {
            guild: t,
            channel: h,
            customWebhooks: p,
            editedWebhook: g,
            selectableWebhookChannels: C,
            refToScroller: f,
            errors: x,
            canNavigate: O
        } = e, S = (0, c.ZP)(), [A, R] = a.useState(null), [b, Z] = a.useState(null);
    if (null != h)
        n = h;
    else {
        let e = Object.values(C);
        n = e.length > 0 ? e[0] : null;
    }
    let v = a.useCallback(async () => {
        if (O() && null !== n) {
            let e = await r.Z.create(t.id, n.id).catch(e => {
                let {
                    body: n,
                    status: t
                } = e;
                return n && n.code === m.evJ.TOO_MANY_WEBHOOKS ? o.Z.show({
                    title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                    body: _.Z.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
                }) : 429 === t ? o.Z.show({
                    title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                    body: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
                }) : o.Z.show({
                    title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                    body: _.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                }), null;
            });
            null != e && (Z(e.id), R(e));
        }
    }, [
        O,
        n,
        t
    ]);
    a.useEffect(() => {
        0 === p.length && v();
    }, []);
    let M = null !== n;
    return (0, i.jsxs)(l.FormSection, {
        children: [
            (0, i.jsx)(l.FormText, {
                type: l.FormTextTypes.DESCRIPTION,
                children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
                    helpdeskArticle: u.Z.getArticleURL(m.BhN.WEBHOOKS),
                    developersArticle: m.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, i.jsx)(l.FormDivider, { className: N.headerDivider }),
            p.length > 0 ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.Button, {
                        className: N.createButton,
                        size: l.Button.Sizes.SMALL,
                        disabled: !M,
                        onClick: v,
                        children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_CREATE
                    }),
                    (0, i.jsx)(I.Z, {
                        webhooks: p,
                        editedWebhook: g,
                        selectableWebhookChannels: C,
                        lastCreatedWebhookId: null == A ? void 0 : A.id,
                        errors: x,
                        canNavigate: O
                    })
                ]
            }) : function (e, n, t) {
                let a = (0, s.wj)(e) ? E : T;
                return (0, i.jsxs)(d.Z, {
                    direction: d.Z.Direction.VERTICAL,
                    align: d.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: a,
                            className: N.emptyStateImage
                        }),
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-md/semibold',
                            children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
                        }),
                        (0, i.jsx)(l.Button, {
                            className: N.emptyStateButton,
                            disabled: !n,
                            onClick: t,
                            children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
                        })
                    ]
                });
            }(S, M, v)
        ]
    });
}
