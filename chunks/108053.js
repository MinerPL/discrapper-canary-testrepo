t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(780384),
    a = t(481060),
    o = t(668781),
    s = t(308063),
    d = t(410030),
    c = t(600164),
    u = t(63063),
    m = t(725875),
    h = t(981631),
    p = t(388032),
    g = t(290883),
    f = t(893916),
    x = t(408942);
function b(e) {
    let n,
        { guild: t, channel: b, customWebhooks: v, editedWebhook: C, selectableWebhookChannels: I, refToScroller: N, errors: T, canNavigate: _ } = e,
        j = (0, d.ZP)(),
        [S, E] = l.useState(null),
        [Z, A] = l.useState(null);
    if (null != b) n = b;
    else {
        let e = Object.values(I);
        n = e.length > 0 ? e[0] : null;
    }
    let y = l.useCallback(async () => {
        if (_() && null !== n) {
            let e = await s.Z.create(t.id, n.id).catch((e) => {
                let { body: n, status: t } = e;
                return (
                    n && n.code === h.evJ.TOO_MANY_WEBHOOKS
                        ? o.Z.show({
                              title: p.intl.string(p.t.cCqscX),
                              body: p.intl.string(p.t['w+QZoa'])
                          })
                        : 429 === t
                          ? o.Z.show({
                                title: p.intl.string(p.t.cCqscX),
                                body: p.intl.string(p.t['YBM+UV'])
                            })
                          : o.Z.show({
                                title: p.intl.string(p.t.cCqscX),
                                body: p.intl.string(p.t['/4TwKS'])
                            }),
                    null
                );
            });
            null != e && (A(e.id), E(e));
        }
    }, [_, n, t]);
    l.useEffect(() => {
        0 === v.length && y();
    }, []);
    let R = null !== n;
    return (0, i.jsxs)(a.FormSection, {
        children: [
            (0, i.jsx)(a.FormText, {
                type: a.FormTextTypes.DESCRIPTION,
                children: p.intl.format(p.t.WL0d0d, {
                    helpdeskArticle: u.Z.getArticleURL(h.BhN.WEBHOOKS),
                    developersArticle: h.EYA.API_DOCS_WEBHOOKS
                })
            }),
            (0, i.jsx)(a.FormDivider, { className: g.headerDivider }),
            v.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a.Button, {
                              className: g.createButton,
                              size: a.Button.Sizes.SMALL,
                              disabled: !R,
                              onClick: y,
                              children: p.intl.string(p.t['nrO/HB'])
                          }),
                          (0, i.jsx)(m.Z, {
                              webhooks: v,
                              editedWebhook: C,
                              selectableWebhookChannels: I,
                              lastCreatedWebhookId: null == S ? void 0 : S.id,
                              errors: T,
                              canNavigate: _
                          })
                      ]
                  })
                : (function (e, n, t) {
                      let l = (0, r.wj)(e) ? f : x;
                      return (0, i.jsxs)(c.Z, {
                          direction: c.Z.Direction.VERTICAL,
                          align: c.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: l,
                                  className: g.emptyStateImage
                              }),
                              (0, i.jsx)(a.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: p.intl.string(p.t.LzmsWl)
                              }),
                              (0, i.jsx)(a.Button, {
                                  className: g.emptyStateButton,
                                  disabled: !n,
                                  onClick: t,
                                  children: p.intl.string(p.t.lOQqJC)
                              })
                          ]
                      });
                  })(j, R, y)
        ]
    });
}
