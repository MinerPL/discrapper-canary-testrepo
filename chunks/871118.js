"use strict";
n.r(t), n.d(t, {
  DefaultFallback: function() {
    return p
  },
  default: function() {
    return E
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("543882"),
  d = n("592125"),
  c = n("496675"),
  f = n("981631"),
  h = n("689938"),
  m = n("772685");

function p(e) {
  let {
    isLoading: t,
    noText: n,
    previewText: l,
    className: s
  } = e;
  return (0, a.jsx)("div", {
    className: i()(m.emptyPreviewContainer, s),
    children: t ? (0, a.jsx)(o.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: m.emptyPreviewImage
      }), n ? null : (0, a.jsx)(o.Text, {
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
  } = e, o = (0, r.useStateFromStores)([d.default], () => d.default.getBasicChannel(t.channelId)), E = (0, r.useStateFromStores)([c.default], () => null != o && c.default.canBasicChannel(f.BasicPermissions.CONNECT, o)), {
    url: C,
    isLoading: g
  } = (0, r.useStateFromStoresObject)([u.default], () => ({
    url: E ? u.default.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
    isLoading: E && u.default.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
  })), S = l.useRef(g ? null : C);
  l.useEffect(() => {
    !g && (S.current = C)
  }, [C, g]);
  let _ = null == C || g ? S.current : C;
  return null == _ ? (0, a.jsx)(p, {
    className: n,
    isLoading: g,
    noText: s,
    previewText: E ? void 0 : h.default.Messages.STREAM_NO_PERMISSION_CTA
  }) : (0, a.jsx)("div", {
    className: i()(n, m.root),
    children: (0, a.jsx)("img", {
      src: _,
      alt: "",
      className: m.image
    })
  })
}