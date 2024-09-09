n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(543882),
    u = n(592125),
    d = n(496675),
    h = n(981631),
    m = n(689938),
    p = n(375387);
function _(e) {
    let { isLoading: t, noText: n, previewText: a, className: s } = e;
    return (0, i.jsx)('div', {
        className: l()(p.emptyPreviewContainer, s),
        children: t
            ? (0, i.jsx)(o.Spinner, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', { className: p.emptyPreviewImage }),
                      n
                          ? null
                          : (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: p.emptyPreviewText,
                                children: null != a ? a : m.Z.Messages.STREAM_NO_PREVIEW
                            })
                  ]
              })
    });
}
function E(e) {
    let { stream: t, className: n, noText: s = !1 } = e,
        o = (0, r.e7)([u.Z], () => u.Z.getBasicChannel(t.channelId)),
        E = (0, r.e7)([d.Z], () => null != o && d.Z.canBasicChannel(h.S7T.CONNECT, o)),
        { url: f, isLoading: C } = (0, r.cj)([c.Z], () => ({
            url: E ? c.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
            isLoading: E && c.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
        })),
        g = a.useRef(C ? null : f);
    a.useEffect(() => {
        !C && (g.current = f);
    }, [f, C]);
    let I = null == f || C ? g.current : f;
    return null == I
        ? (0, i.jsx)(_, {
              className: n,
              isLoading: C,
              noText: s,
              previewText: E ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA
          })
        : (0, i.jsx)('div', {
              className: l()(n, p.root),
              children: (0, i.jsx)('img', {
                  src: I,
                  alt: '',
                  className: p.image
              })
          });
}
