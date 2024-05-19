"use strict";
n.r(t), n.d(t, {
  getMosaicMediaTypeForAttachment: function() {
    return _
  },
  getMosaicMediaTypeForUnfurledMediaItem: function() {
    return S
  },
  isGroupableMedia: function() {
    return N
  },
  isVisualMedia: function() {
    return O
  },
  messageAttachmentToMosaicMediaItem: function() {
    return v
  }
}), n("789020"), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("120356"),
  o = n.n(a),
  l = n("481060"),
  r = n("163268"),
  u = n("25610"),
  d = n("976853"),
  m = n("118139"),
  c = n("169525"),
  h = n("65838"),
  I = n("196050"),
  M = n("68588"),
  p = n("941797"),
  x = n("465670"),
  f = n("740727"),
  C = n("630388"),
  g = n("956664"),
  y = n("768760"),
  T = n("981631"),
  A = n("689938"),
  E = n("361811");
let j = /\.(mp3|m4a|ogg|wav|flac)$/i,
  O = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e,
  N = e => "IMAGE" === e || "VIDEO" === e;

function v(e, t) {
  return {
    uniqueId: e.id,
    originalItem: e,
    type: _(e, t),
    downloadUrl: e.url,
    height: e.height,
    width: e.width,
    spoiler: e.spoiler,
    contentType: e.content_type
  }
}

function _(e, t) {
  let {
    filename: n,
    width: i,
    height: s
  } = e;
  if (t && null != i && i > 0 && null != s && s > 0) {
    if ((0, m.isImageFile)(n)) return "IMAGE";
    if (!(0, m.isVideoFile)(n) || null == e.proxy_url) return "INVALID";
    else {
      var a;
      return (0, C.hasFlag)(null !== (a = e.flags) && void 0 !== a ? a : 0, T.MessageAttachmentFlags.IS_CLIP) ? "CLIP" : "VIDEO"
    }
  }
  if (null != t && j.test(n) && null != e.url) return "AUDIO";
  if (null != e.url && (0, h.isPlaintextPreviewableFile)(n)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}

function S(e, t) {
  let {
    contentType: n,
    width: i,
    height: s
  } = e;
  if (t && i > 0 && s > 0) return (0, m.isImageContentType)(n) ? "IMAGE" : (0, m.isVideoContentType)(n) ? "VIDEO" : "INVALID";
  return "OTHER"
}
let w = e => {
  let t, n, {
    downloadURL: s,
    downloadMimeType: a,
    onRemoveItem: r,
    isVisualMediaType: u
  } = e;
  return (null != s && null != a && (t = (0, i.jsx)(l.Tooltip, {
    text: A.default.Messages.DOWNLOAD,
    children: e => (0, i.jsx)(I.default, {
      ...e,
      target: "_blank",
      rel: "noreferrer noopener",
      className: E.hoverButton,
      iconClassName: E.downloadHoverButtonIcon,
      focusProps: {
        offset: 2
      },
      href: s,
      mimeType: a
    })
  })), null != r && (n = (0, i.jsx)(l.Tooltip, {
    text: A.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
    children: e => (0, i.jsx)(l.Clickable, {
      ...e,
      className: o()(E.hoverButton, E.removeMosaicItemHoverButton),
      focusProps: {
        offset: 2
      },
      onClick: r,
      "aria-label": A.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, i.jsx)(f.default, {
        width: 20,
        height: 20
      })
    })
  })), null == n && null == t) ? null : (0, i.jsxs)("div", {
    className: o()(E.hoverButtonGroup, {
      [E.nonMediaMosaicItem]: !u
    }),
    children: [t, n]
  })
};

function D(e) {
  let {
    message: t,
    item: n,
    autoPlayGif: a,
    canRemoveItem: r,
    onRemoveItem: u,
    onClick: m,
    onContextMenu: c,
    onPlay: h,
    renderImageComponent: I,
    renderVideoComponent: M,
    renderAudioComponent: f,
    renderPlaintextFilePreview: C,
    renderGenericFileComponent: T,
    className: j,
    imgContainerClassName: O,
    imgClassName: N,
    focusable: v,
    hiddenSpoilers: _,
    mediaLayoutType: S,
    maxWidth: D,
    maxHeight: F,
    hasFooter: L,
    useFullWidth: H,
    isVisualMediaType: V,
    onVideoControlsShow: G,
    onVideoControlsHide: P
  } = e, {
    width: b,
    height: W,
    spoiler: B,
    type: R,
    contentType: k
  } = n, [X, U] = s.useState(!1), q = (0, d.default)(t.getChannelId()), z = s.useMemo(() => null != k && -1 !== k.indexOf("/") ? k.split("/") : ["unknown", "unknown"], [k]), J = s.useCallback(() => {
    u(n)
  }, [n, u]), $ = s.useCallback(() => {
    if (S === y.MediaLayoutType.MOSAIC) {
      let e = !q && ["VIDEO", "CLIP", "AUDIO"].includes(R) || "OTHER" === R;
      if (V) {
        if (null == b || null == W) return null;
        let e = (0, g.getRatio)({
          width: b,
          height: W,
          maxWidth: y.MEDIA_MOSAIC_MAX_WIDTH,
          maxHeight: y.MEDIA_MOSAIC_MAX_HEIGHT
        });
        if (!H && (e * b < y.MINIMUM_MEDIA_MOSAIC_DIM || e * W < y.MINIMUM_MEDIA_MOSAIC_DIM)) return null
      }
      return !X && (0, i.jsx)(w, {
        downloadURL: e ? n.downloadUrl : void 0,
        downloadMimeType: e ? z : void 0,
        onRemoveItem: r ? J : void 0,
        isVisualMediaType: V
      })
    }
    return r && (0, i.jsx)(l.Clickable, {
      className: B ? E.spoilerRemoveMosaicItemButton : E.removeMosaicItemButton,
      focusProps: {
        offset: {
          bottom: 4
        }
      },
      onClick: () => u(n),
      "aria-label": A.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, i.jsx)(x.default, {
        width: 16,
        height: 16
      })
    })
  }, [S, r, B, R, V, X, n, z, J, b, W, H, u, q]);
  switch (R) {
    case "IMAGE":
      return (0, i.jsx)(p.GIFAccessoryContext.Consumer, {
        children: e => (0, i.jsx)(I, {
          item: n,
          message: t,
          width: b,
          height: W,
          autoPlay: a && !_,
          onClick: m,
          onContextMenu: c,
          shouldHideMediaOptions: q,
          renderAccessory: e,
          renderAdjacentContent: $,
          containerClassName: j,
          className: O,
          imageClassName: N,
          shouldLink: v,
          hiddenSpoilers: _,
          responsive: !0,
          mediaLayoutType: S,
          maxWidth: D,
          maxHeight: F,
          useFullWidth: H
        })
      });
    case "VIDEO":
    case "CLIP":
      return (0, i.jsx)(M, {
        item: n,
        message: t,
        width: b,
        height: W,
        onClick: m,
        onContextMenu: c,
        renderAdjacentContent: $,
        naturalWidth: b,
        naturalHeight: W,
        className: o()(j, {
          [E.hasFooter]: L
        }),
        playable: v,
        responsive: !0,
        mediaLayoutType: S,
        maxWidth: D,
        maxHeight: F,
        useFullWidth: H,
        mimeType: z,
        onControlsShow: G,
        onControlsHide: P,
        downloadable: !q,
        mediaPlayerClassName: L ? E.hasFooter : void 0
      });
    case "AUDIO":
      return (0, i.jsx)(f, {
        item: n,
        message: t,
        className: j,
        playable: v,
        mimeType: z,
        renderAdjacentContent: $,
        onVolumeShow: () => U(!0),
        onVolumeHide: () => U(!1),
        onPlay: h
      });
    case "PLAINTEXT_PREVIEW":
      return (0, i.jsx)(C, {
        item: n,
        message: t,
        className: j,
        onClick: m,
        onContextMenu: c,
        renderAdjacentContent: $
      });
    case "OTHER":
      return (0, i.jsx)(T, {
        item: n,
        message: t,
        className: j,
        onClick: m,
        onContextMenu: c,
        renderAdjacentContent: $
      });
    case "INVALID":
      return null
  }
}
t.default = function(e) {
  var t;
  let {
    className: n,
    item: a,
    message: l,
    getObscureReason: d,
    useFullWidth: m,
    mediaLayoutType: h,
    isSingleMosaicItem: I,
    footer: p,
    ...x
  } = e, {
    width: f,
    height: C,
    type: T
  } = a, A = d(a, (0, u.useShouldRedactExplicitContent)(l.channel_id, l.author.id)), [j, N] = s.useState(null != A), v = h === y.MediaLayoutType.MOSAIC, _ = !v && (null != f && f < 200 || null != C && C < 50);
  let S = "IMAGE" === (t = T) || "VIDEO" === t,
    w = O(T),
    F = I && null != A && (0, r.isExplicitMediaBelowConstraints)(f, C),
    [L, H] = s.useState(!1),
    V = () => {
      H(!0)
    },
    G = () => {
      H(!1)
    },
    P = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, i.jsx)(D, {
        ...x,
        item: a,
        message: l,
        getObscureReason: d,
        hiddenSpoilers: e,
        className: o()(n, E.mosaicItemContent, {
          [E.obscured]: j && !_,
          [E.hiddenSpoiler]: j && A === c.ObscureReason.SPOILER,
          [E.hiddenExplicit]: j && null != A && [c.ObscureReason.EXPLICIT_CONTENT, c.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(A),
          [E.hiddenMosaicItem]: j && e,
          [E.inline]: j && _
        }),
        focusable: !e,
        mediaLayoutType: h,
        hasFooter: null != p,
        useFullWidth: !!F || m,
        isVisualMediaType: w,
        onVideoControlsShow: V,
        onVideoControlsHide: G
      })
    };
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: o()(E.mosaicItem, {
        [E.mosaicItemNoJustify]: S,
        [E.mosaicItemFullWidth]: m,
        [E.mosaicItemMediaMosaic]: v,
        [E.hideOverflow]: v && w,
        [E.mosaicItemWithFooter]: null != p
      }),
      children: [null != A ? (0, i.jsx)(M.default, {
        type: M.default.Types.ATTACHMENT,
        inline: _,
        reason: A,
        isSingleMosaicItem: I,
        obscured: j,
        containerStyles: function(e, t, n) {
          if (!t) return;
          let i = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, g.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            i = t
          }
          return {
            ...n !== y.MediaLayoutType.MOSAIC && {
              maxWidth: null != i ? i : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(a, S, h),
        obscurityControlClassName: o()({
          [E.obscureVideoSpacing]: "VIDEO" === T && I && !j && L
        }),
        onToggleObscurity: () => N(e => !e),
        children: e => P(e)
      }) : P(), p]
    })
  })
}