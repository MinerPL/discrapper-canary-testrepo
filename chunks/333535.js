n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(852229),
    l = n(399606),
    r = n(481060),
    o = n(367907),
    c = n(592125),
    u = n(934415),
    d = n(63063),
    h = n(158222),
    m = n(410992),
    p = n(981631),
    _ = n(689938),
    E = n(725782);
function f(e) {
    let { threadId: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getChannel(t)),
        f = (0, l.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.parent_id)),
        C = a.useCallback(() => {
            null != n && null != f && ((0, o.yw)(p.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, s.J)((0, u.EO)(n, f)));
        }, [n, f]);
    return (0, i.jsxs)('div', {
        className: E.sharePromptContainer,
        children: [
            (0, i.jsx)(m.Z, {}),
            (0, i.jsxs)('div', {
                className: E.sharePromptContent,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: _.Z.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: _.Z.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({ helpArticleUrl: d.Z.getCreatorSupportArticleURL(p.BhN.MEDIA_CHANNEL) })
                    }),
                    (0, i.jsx)(r.Spacer, { size: 4 }),
                    (0, i.jsxs)(r.Button, {
                        className: E.sharePromptCta,
                        innerClassName: E.ctaContent,
                        onClick: C,
                        children: [
                            (0, i.jsx)(r.LinkIcon, {
                                color: 'currentColor',
                                size: 'xs'
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: _.Z.Messages.MEDIA_POST_SHARE_PROMPT_CTA
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(r.Clickable, {
                className: E.closeButton,
                onClick: () => {
                    (0, h.fn)(t);
                },
                'aria-label': _.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
                children: (0, i.jsx)(r.XSmallIcon, {
                    color: 'currentColor',
                    size: 'xs'
                })
            })
        ]
    });
}
