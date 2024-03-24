"use strict";
n.r(t), n.d(t, {
  DefaultFallback: function() {
    return p
  },
  default: function() {
    return E
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("410348"),
  d = n("42203"),
  c = n("957255"),
  f = n("49111"),
  h = n("782340"),
  m = n("329422");

function p(e) {
  let {
    isLoading: t,
    noText: n,
    previewText: l,
    className: s
  } = e;
  return (0, a.jsx)("div", {
    className: i(m.emptyPreviewContainer, s),
    children: t ? (0, a.jsx)(u.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: m.emptyPreviewImage
      }), n ? null : (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: m.emptyPreviewText,
        children: null != l ? l : h.default.Messages.STREAM_NO_PREVIEW
      })]
    })
  })
}

function E(e) {
  let {
    stream: t,
    className: n,
    noText: s = !1
  } = e, u = (0, r.useStateFromStores)([d.default], () => d.default.getBasicChannel(t.channelId)), E = (0, r.useStateFromStores)([c.default], () => null != u && c.default.canBasicChannel(f.BasicPermissions.CONNECT, u)), {
    url: g,
    isLoading: S
  } = (0, r.useStateFromStoresObject)([o.default], () => ({
    url: E ? o.default.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
    isLoading: E && o.default.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
  })), C = l.useRef(S ? null : g);
  l.useEffect(() => {
    !S && (C.current = g)
  }, [g, S]);
  let _ = null == g || S ? C.current : g;
  return null == _ ? (0, a.jsx)(p, {
    className: n,
    isLoading: S,
    noText: s,
    previewText: E ? void 0 : h.default.Messages.STREAM_NO_PERMISSION_CTA
  }) : (0, a.jsx)("div", {
    className: i(n, m.root),
    children: (0, a.jsx)("img", {
      src: _,
      alt: "",
      className: m.image
    })
  })
}