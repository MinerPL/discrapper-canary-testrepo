"use strict";
a.r(t), a.d(t, {
  isMediaAttachment: function() {
    return j
  },
  getAttachmentKind: function() {
    return D
  },
  default: function() {
    return w
  }
}), a("222007"), a("702976");
var n = a("37983"),
  l = a("884691"),
  i = a("414456"),
  s = a.n(i),
  r = a("77078"),
  o = a("447435"),
  d = a("963119"),
  c = a("467475"),
  u = a("651693"),
  h = a("605160"),
  m = a("903962"),
  A = a("165405"),
  _ = a("410889"),
  g = a("725962"),
  I = a("505684"),
  M = a("328620"),
  p = a("522049"),
  E = a("945330"),
  f = a("228220"),
  C = a("568734"),
  x = a("103603"),
  v = a("253981"),
  y = a("719347"),
  T = a("49111"),
  S = a("782340"),
  N = a("494112");
let O = /\.(mp3|m4a|ogg|wav|flac)$/i,
  j = e => "IMAGE" === e || "VIDEO" === e;

function D(e, t) {
  let {
    filename: a,
    width: n,
    height: l
  } = e;
  if (t && null != n && n > 0 && null != l && l > 0) return (0, u.isImageFile)(a) ? "IMAGE" : (0, u.isVideoFile)(a) && null != e.proxy_url ? "VIDEO" : "INVALID";
  if (null != t && O.test(a) && null != e.url) return "AUDIO";
  if (null != e.url && (0, m.isPlaintextPreviewableFile)(a)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}
let L = e => {
    let t, a, {
      downloadURL: l,
      downloadMimeType: i,
      onRemoveAttachment: o,
      isAttachmentMediaType: d
    } = e;
    return (null != l && null != i && (t = (0, n.jsx)(r.Tooltip, {
      text: S.default.Messages.DOWNLOAD,
      children: e => (0, n.jsx)(g.default, {
        ...e,
        target: "_blank",
        rel: "noreferrer noopener",
        className: N.hoverButton,
        iconClassName: N.downloadHoverButtonIcon,
        focusProps: {
          offset: 2
        },
        href: l,
        mimeType: i
      })
    })), null != o && (a = (0, n.jsx)(r.Tooltip, {
      text: S.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
      children: e => (0, n.jsx)(r.Clickable, {
        ...e,
        className: s(N.hoverButton, N.removeAttachmentHoverButton),
        focusProps: {
          offset: 2
        },
        onClick: o,
        "aria-label": S.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(f.default, {
          width: 20,
          height: 20
        })
      })
    })), null == a && null == t) ? null : (0, n.jsxs)("div", {
      className: s(N.hoverButtonGroup, {
        [N.nonMediaAttachment]: !d
      }),
      children: [t, a]
    })
  },
  F = e => {
    let {
      message: t,
      attachment: a,
      inlineMedia: i,
      autoPlayGif: o,
      canRemoveAttachment: d,
      onRemoveAttachment: u,
      onClick: h,
      onContextMenu: m,
      onPlay: g,
      renderImageComponent: I,
      renderVideoComponent: f,
      renderAudioComponent: O,
      renderPlaintextFilePreview: j,
      className: F,
      imgContainerClassName: w,
      imgClassName: b,
      focusable: P,
      hiddenSpoilers: G,
      mediaLayoutType: V,
      maxWidth: k,
      maxHeight: H,
      hasFooter: B,
      useFullWidth: R,
      isAttachmentMediaType: K
    } = e, {
      width: W,
      height: X,
      description: U,
      spoiler: z
    } = a, Y = D(a, i), [q, J] = l.useState(!1), Q = (0, c.default)(t.getChannelId()), $ = l.useMemo(() => null != a.content_type && -1 !== a.content_type.indexOf("/") ? a.content_type.split("/") : ["unknown", "unknown"], [a.content_type]), Z = l.useCallback(() => {
      u(a)
    }, [a, u]), ee = l.useCallback((e, n, l) => {
      if (t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE)) {
        var i;
        (0, A.logVoiceMessagePlaybackStarted)(t.id, null !== (i = a.duration_secs) && void 0 !== i ? i : null, n, t.author.id)
      } else null == g || g(e, n, l)
    }, [t, a.duration_secs, g]), et = l.useCallback((e, n) => {
      var l;
      t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) && (0, A.logVoiceMessagePlaybackEnded)(t.id, null !== (l = a.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n)
    }, [t, a.duration_secs]), ea = l.useCallback(e => {
      var a;
      t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) && (0, A.logVoiceMessagePlaybackFailed)(t.id, null !== (a = null == e ? void 0 : e.message) && void 0 !== a ? a : null)
    }, [t]), en = l.useCallback(() => {
      if (V === y.MediaLayoutType.MOSAIC) {
        let e = !Q && "VIDEO" === Y || !Q && "AUDIO" === Y || "OTHER" === Y;
        if (K) {
          if (null == W || null == X) return null;
          let e = (0, x.getRatio)({
            width: W,
            height: X,
            maxWidth: y.MEDIA_MOSAIC_MAX_WIDTH,
            maxHeight: y.MEDIA_MOSAIC_MAX_HEIGHT
          });
          if (!R && (e * W < y.MINIMUM_MEDIA_MOSAIC_DIM || e * X < y.MINIMUM_MEDIA_MOSAIC_DIM)) return null
        }
        return !q && (0, n.jsx)(L, {
          downloadURL: e ? a.url : void 0,
          downloadMimeType: e ? $ : void 0,
          onRemoveAttachment: d ? Z : void 0,
          isAttachmentMediaType: K
        })
      }
      return d && (0, n.jsx)(r.Clickable, {
        className: z ? N.spoilerRemoveAttachmentButton : N.removeAttachmentButton,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => u(a),
        "aria-label": S.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(E.default, {
          width: 16,
          height: 16
        })
      })
    }, [V, d, z, Y, K, q, a, $, Z, W, X, R, u, Q]), el = l.useCallback(() => {
      var e;
      return (0, C.hasFlag)(null !== (e = a.flags) && void 0 !== e ? e : 0, T.MessageAttachmentFlags.IS_CLIP) ? (0, n.jsxs)(r.TooltipContainer, {
        text: S.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: N.clipPill,
        children: [(0, n.jsx)(p.default, {}), (0, n.jsx)(r.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: S.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [a]);
    switch (Y) {
      case "IMAGE":
        return (0, n.jsx)(M.GIFAccessoryContext.Consumer, {
          children: e => I({
            alt: U,
            src: null != a.proxy_url && "" !== a.proxy_url ? a.proxy_url : a.url,
            original: a.url,
            placeholder: a.placeholder,
            placeholderVersion: a.placeholder_version,
            width: W,
            height: X,
            autoPlay: o && !G,
            onClick: h,
            onContextMenu: m,
            shouldHideMediaOptions: Q,
            renderAccessory: e,
            renderAdjacentContent: en,
            containerClassName: F,
            className: w,
            imageClassName: b,
            shouldLink: P,
            hiddenSpoilers: G,
            responsive: !0,
            mediaLayoutType: V,
            maxWidth: k,
            maxHeight: H,
            useFullWidth: R
          })
        });
      case "VIDEO":
        let ei = v.default.toURLSafe(a.proxy_url);
        if (null == ei) return null;
        return ei.searchParams.append("format", "jpeg"), f({
          poster: ei.toString(),
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          placeholder: a.placeholder,
          placeholderVersion: a.placeholder_version,
          width: W,
          height: X,
          onClick: h,
          onContextMenu: m,
          renderOverlayContent: el,
          renderAdjacentContent: en,
          naturalWidth: W,
          naturalHeight: X,
          className: s(F, {
            [N.hasFooter]: B
          }),
          playable: P,
          responsive: !0,
          mediaLayoutType: V,
          maxWidth: k,
          maxHeight: H,
          useFullWidth: R,
          mimeType: $,
          onPlay: g,
          downloadable: !Q,
          mediaPlayerClassName: B ? N.hasFooter : void 0
        });
      case "AUDIO":
        return O({
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          className: F,
          playable: P,
          mimeType: $,
          durationSecs: a.duration_secs,
          waveform: a.waveform,
          renderAdjacentContent: en,
          onVolumeShow: () => J(!0),
          onVolumeHide: () => J(!1),
          onPlay: ee,
          onPause: et,
          onError: ea
        });
      case "PLAINTEXT_PREVIEW":
        return j({
          attachment: a,
          className: F,
          onClick: h,
          onContextMenu: m,
          renderAdjacentContent: en
        });
      case "OTHER":
        return (0, n.jsx)(_.default, {
          url: a.url,
          filename: a.filename,
          size: a.size,
          onClick: h,
          onContextMenu: m,
          className: F,
          renderAdjacentContent: en
        });
      case "INVALID":
        return null
    }
  };
var w = e => {
  var t;
  let {
    className: a,
    attachment: i,
    message: r,
    inlineMedia: c,
    useFullWidth: u,
    mediaLayoutType: m,
    canRemoveAttachment: A,
    isSingleMosaicItem: _,
    footer: g,
    ...M
  } = e, {
    width: p,
    height: E
  } = i, f = (0, d.useShouldRedactExplicitContent)(r.channel_id, r.author.id), C = (0, h.getObscureReason)(i, f), [v, T] = l.useState(null != C), S = m === y.MediaLayoutType.MOSAIC, O = !S && (null != p && p < 200 || null != E && E < 50), L = D(i, c);
  let w = "IMAGE" === (t = L) || "VIDEO" === t,
    b = j(D(i, c)),
    P = _ && null != C && (0, o.isExplicitMediaBelowConstraints)(p, E),
    G = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, n.jsx)(F, {
        ...M,
        attachment: i,
        message: r,
        inlineMedia: c,
        hiddenSpoilers: e,
        canRemoveAttachment: A,
        className: s(a, N.attachmentContentItem, {
          [N.obscured]: v && !O,
          [N.hiddenSpoiler]: v && C === h.ObscureReason.SPOILER,
          [N.hiddenExplicit]: v && null != C && [h.ObscureReason.EXPLICIT_CONTENT, h.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(C),
          [N.hiddenAttachment]: v && e,
          [N.inline]: v && O
        }),
        focusable: !e,
        mediaLayoutType: m,
        hasFooter: null != g,
        useFullWidth: !!P || u,
        isAttachmentMediaType: b
      })
    };
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: s(N.messageAttachment, {
        [N.messageAttachmentNoJustify]: w,
        [N.messageAttachmentFullWidth]: u,
        [N.messageAttachmentMediaMosaic]: S,
        [N.hideOverflow]: S && b,
        [N.messageAttachmentWithFooter]: null != g
      }),
      children: [null != C ? (0, n.jsx)(I.default, {
        type: I.default.Types.ATTACHMENT,
        inline: O,
        reason: C,
        isSingleMosaicItem: _,
        obscured: v,
        containerStyles: function(e, t, a) {
          if (!t) return;
          let n = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, x.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            n = t
          }
          return {
            ...a !== y.MediaLayoutType.MOSAIC && {
              maxWidth: null != n ? n : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(i, w, m),
        obscurityControlClassName: s({
          [N.obscureVideo]: "VIDEO" === L && _ && !v
        }),
        onToggleObscurity: () => T(e => !e),
        children: e => G(e)
      }) : G(), g]
    })
  })
}