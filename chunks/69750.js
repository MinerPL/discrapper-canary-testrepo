"use strict";
i.r(t), i.d(t, {
  getMosaicMediaTypeForAttachment: function() {
    return j
  },
  getMosaicMediaTypeForUnfurledMediaItem: function() {
    return S
  },
  isGroupableMedia: function() {
    return v
  },
  isVisualMedia: function() {
    return _
  },
  messageAttachmentToMosaicMediaItem: function() {
    return N
  }
}), i("789020"), i("47120");
var n = i("735250"),
  s = i("470079"),
  l = i("120356"),
  a = i.n(l),
  o = i("481060"),
  r = i("163268"),
  u = i("25610"),
  d = i("976853"),
  c = i("118139"),
  m = i("169525"),
  I = i("65838"),
  h = i("196050"),
  M = i("68588"),
  f = i("941797"),
  p = i("465670"),
  x = i("740727"),
  T = i("630388"),
  g = i("956664"),
  C = i("768760"),
  y = i("981631"),
  A = i("689938"),
  E = i("332636");
let O = /\.(mp3|m4a|ogg|wav|flac)$/i,
  _ = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
  v = e => "IMAGE" === e || "VIDEO" === e;

function N(e, t) {
  return {
    uniqueId: e.id,
    originalItem: e,
    type: j(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type
  }
}

function j(e, t) {
  let {
    filename: i,
    width: n,
    height: s
  } = e;
  if (t && null != n && n > 0 && null != s && s > 0) {
    if ((0, c.isImageFile)(i)) return "IMAGE";
    if (!(0, c.isVideoFile)(i) || null == e.proxy_url) return "INVALID";
    else {
      var l;
      return (0, T.hasFlag)(null !== (l = e.flags) && void 0 !== l ? l : 0, y.MessageAttachmentFlags.IS_CLIP) ? "CLIP" : "VIDEO"
    }
  }
  if (null != t && O.test(i) && null != e.url) return "AUDIO";
  if (null != e.url && (0, I.isPlaintextPreviewableFile)(i)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}

function S(e, t) {
  let {
    contentType: i,
    width: n,
    height: s
  } = e;
  if (t && n > 0 && s > 0) return (0, c.isImageContentType)(i) ? "IMAGE" : (0, c.isVideoContentType)(i) ? "VIDEO" : "INVALID";
  return "OTHER"
}
let w = e => {
  let t, i, {
    downloadURL: s,
    downloadMimeType: l,
    onRemoveItem: r,
    isVisualMediaType: u
  } = e;
  return (null != s && null != l && (t = (0, n.jsx)(o.Tooltip, {
    text: A.default.Messages.DOWNLOAD,
    children: e => (0, n.jsx)(h.default, {
      ...e,
      target: "_blank",
      rel: "noreferrer noopener",
      className: E.hoverButton,
      iconClassName: E.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: s,
      mimeType: l
    })
  })), null != r && (i = (0, n.jsx)(o.Tooltip, {
    text: A.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
    children: e => (0, n.jsx)(o.Clickable, {
      ...e,
      className: a()(E.hoverButton, E.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: r,
      "aria-label": A.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, n.jsx)(x.default, {
        width: 20,
        height: 20
      })
    })
  })), null == i && null == t) ? null : (0, n.jsxs)("div", {
    className: a()(E.hoverButtonGroup, {
      [E.nonMediaMosaicItem]: !u
    }),
    children: [t, i]
  })
};

function D(e) {
  let {
    message: t,
    item: i,
    autoPlayGif: l,
    canRemoveItem: r,
    onRemoveItem: u,
    onClick: c,
    onContextMenu: m,
    onPlay: I,
    renderImageComponent: h,
    renderVideoComponent: M,
    renderAudioComponent: x,
    renderPlaintextFilePreview: T,
    renderGenericFileComponent: y,
    className: O,
    imgContainerClassName: _,
    imgClassName: v,
    focusable: N,
    hiddenSpoilers: j,
    mediaLayoutType: S,
    maxWidth: D,
    maxHeight: F,
    hasFooter: L,
    useFullWidth: H,
    isVisualMediaType: V,
    onVideoControlsShow: G,
    onVideoControlsHide: b
  } = e, {
    width: P,
    height: B,
    spoiler: W,
    type: R,
    contentType: k
  } = i, [X, U] = s.useState(!1), q = (0, d.default)(t.getChannelId()), z = s.useMemo(() => null != k && -1 !== k.indexOf("/") ? k.split("/") : ["unknown", "unknown"], [k]), J = s.useCallback(() => {
    u(i)
  }, [i, u]), $ = s.useCallback(() => {
    if (S === C.MediaLayoutType.MOSAIC) {
      let e = !q && ["VIDEO", "CLIP", "AUDIO"].includes(R) || "OTHER" === R;
      if (V) {
        if (null == P || null == B) return null;
        let e = (0, g.getRatio)({
          width: P,
          height: B,
          maxWidth: C.MEDIA_MOSAIC_MAX_WIDTH,
          maxHeight: C.MEDIA_MOSAIC_MAX_HEIGHT
        });
        if (!H && (e * P < C.MINIMUM_MEDIA_MOSAIC_DIM || e * B < C.MINIMUM_MEDIA_MOSAIC_DIM)) return null
      }
      return !X && (0, n.jsx)(w, {
        downloadURL: e ? i.downloadUrl : void 0,
        downloadMimeType: e ? z : void 0,
        onRemoveItem: r ? J : void 0,
        isVisualMediaType: V
      })
    }
    return r && (0, n.jsx)(o.Clickable, {
      className: W ? E.spoilerRemoveMosaicItemButton : E.removeMosaicItemButton,
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      onClick: () => u(i),
      "aria-label": A.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, n.jsx)(p.default, {
        width: 16,
        height: 16
      })
    })
  }, [S, r, W, R, V, X, i, z, J, P, B, H, u, q]);
  switch (R) {
    case "IMAGE":
      return (0, n.jsx)(f.GIFAccessoryContext.Consumer, {
        children: e => h({
          item: i,
          message: t,
          width: P,
          height: B,
          autoPlay: l && !j,
          onClick: c,
          onContextMenu: m,
          shouldHideMediaOptions: q,
          renderAccessory: e,
          renderAdjacentContent: $,
          containerClassName: O,
          className: _,
          imageClassName: v,
          shouldLink: N,
          hiddenSpoilers: j,
          responsive: !0,
          mediaLayoutType: S,
          maxWidth: D,
          maxHeight: F,
          useFullWidth: H
        })
      });
    case "VIDEO":
    case "CLIP":
      return M({
        item: i,
        message: t,
        width: P,
        height: B,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: $,
        naturalWidth: P,
        naturalHeight: B,
        className: a()(O, {
          [E.hasFooter]: L
        }),
        playable: N,
        responsive: !0,
        mediaLayoutType: S,
        maxWidth: D,
        maxHeight: F,
        useFullWidth: H,
        mimeType: z,
        onControlsShow: G,
        onControlsHide: b,
        downloadable: !q,
        mediaPlayerClassName: L ? E.hasFooter : void 0
      });
    case "AUDIO":
      return x({
        item: i,
        message: t,
        className: O,
        playable: N,
        mimeType: z,
        renderAdjacentContent: $,
        onVolumeShow: () => U(!0),
        onVolumeHide: () => U(!1),
        onPlay: I
      });
    case "PLAINTEXT_PREVIEW":
      return T({
        item: i,
        message: t,
        className: O,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: $
      });
    case "OTHER":
      return y({
        item: i,
        message: t,
        className: O,
        onClick: c,
        onContextMenu: m,
        renderAdjacentContent: $
      });
    case "INVALID":
      return null
  }
}
t.default = function(e) {
  var t;
  let {
    className: i,
    item: l,
    message: o,
    getObscureReason: d,
    useFullWidth: c,
    mediaLayoutType: I,
    isSingleMosaicItem: h,
    footer: f,
    ...p
  } = e, {
    width: x,
    height: T,
    type: y
  } = l, A = d(l, (0, u.useShouldRedactExplicitContent)(o.channel_id, o.author.id)), [O, v] = s.useState(null != A), N = I === C.MediaLayoutType.MOSAIC, j = !N && (null != x && x < 200 || null != T && T < 50);
  let S = "IMAGE" === (t = y) || "VIDEO" === t,
    w = _(y),
    F = h && null != A && (0, r.isExplicitMediaBelowConstraints)(x, T),
    [L, H] = s.useState(!1),
    V = () => {
      H(!0)
    },
    G = () => {
      H(!1)
    },
    b = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, n.jsx)(D, {
        ...p,
        item: l,
        message: o,
        getObscureReason: d,
        hiddenSpoilers: e,
        className: a()(i, E.mosaicItemContent, {
          [E.obscured]: O && !j,
          [E.hiddenSpoiler]: O && A === m.ObscureReason.SPOILER,
          [E.hiddenExplicit]: O && null != A && [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(A),
          [E.hiddenMosaicItem]: O && e,
          [E.inline]: O && j
        }),
        focusable: !e,
        mediaLayoutType: I,
        hasFooter: null != f,
        useFullWidth: !!F || c,
        isVisualMediaType: w,
        onVideoControlsShow: V,
        onVideoControlsHide: G
      })
    };
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: a()(E.mosaicItem, {
        [E.mosaicItemNoJustify]: S,
        [E.mosaicItemFullWidth]: c,
        [E.mosaicItemMediaMosaic]: N,
        [E.hideOverflow]: N && w,
        [E.mosaicItemWithFooter]: null != f
      }),
      children: [null != A ? (0, n.jsx)(M.default, {
        type: M.default.Types.ATTACHMENT,
        inline: j,
        reason: A,
        isSingleMosaicItem: h,
        obscured: O,
        containerStyles: function(e, t, i) {
          if (!t) return;
          let n = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, g.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            n = t
          }
          return {
            ...i !== C.MediaLayoutType.MOSAIC && {
              maxWidth: null != n ? n : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(l, S, I),
        obscurityControlClassName: a()({
          [E.obscureVideoSpacing]: "VIDEO" === y && h && !O && L
        }),
        onToggleObscurity: () => v(e => !e),
        children: e => b(e)
      }) : b(), f]
    })
  })
}