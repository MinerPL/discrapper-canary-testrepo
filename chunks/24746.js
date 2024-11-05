n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(302454),
    o = n.n(s),
    c = n(481060),
    d = n(939893),
    u = n(241209),
    h = n(388032),
    m = n(408899);
let p = o().parserFor(d.Z),
    g = o().reactFor(o().ruleOutput(d.Z, 'react'));
function f(e) {
    let { description: t, supportsMarkdown: n } = e,
        [a, s] = r.useState(!1),
        o = r.useRef(null);
    r.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            let r = null !== (n = null === (e = o.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== n ? n : 0;
            s(r - (null !== (i = null === (t = o.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [d, h] = r.useState(!1),
        f = r.useCallback(() => {
            h((e) => !e);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: o,
                className: l()({
                    [m.descriptionClamp]: !d,
                    [m.descriptionClampSafari]: !d && 'Safari' === platform.name
                }),
                children: n
                    ? (0, i.jsx)(u.Z, {
                          className: m.detailedDescription,
                          parser: p,
                          output: g,
                          state: { allowLinks: !0 },
                          children: t
                      })
                    : (0, i.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-normal',
                          children: t
                      })
            }),
            a || d
                ? (0, i.jsx)(_, {
                      isShowingMore: d,
                      onToggle: f
                  })
                : null
        ]
    });
}
function _(e) {
    let { onToggle: t, isShowingMore: n } = e,
        a = r.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: m.showMoreContent,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            color: 'interactive-normal',
                            children: n ? h.intl.string(h.t['vtfc4+']) : h.intl.string(h.t.ZDRyur)
                        }),
                        n
                            ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.showMoreButtonIcon
                              })
                            : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.showMoreButtonIcon
                              })
                    ]
                }),
            [n]
        );
    return (0, i.jsxs)(c.Clickable, {
        className: m.showMoreButton,
        onClick: t,
        children: [(0, i.jsx)('div', { className: m.divider }), a, (0, i.jsx)('div', { className: m.divider })]
    });
}
t.Z = function (e) {
    var t, n;
    let { application: a } = e,
        l = null === (t = a.directory_entry) || void 0 === t ? void 0 : t.detailed_description,
        s = null === (n = a.directory_entry) || void 0 === n ? void 0 : n.short_description,
        o = r.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, i.jsx)(f, {
                          description: l,
                          supportsMarkdown: !0
                      })
                    : null != s && s.length > 0
                      ? (0, i.jsx)(f, {
                            description: s,
                            supportsMarkdown: !1
                        })
                      : null,
            [l, s]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: m.overviewContainer,
              children: [
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: h.intl.string(h.t.txraKS)
                  }),
                  o
              ]
          });
};
