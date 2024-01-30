"use strict";
a.r(t), a.d(t, {
  isMediaAttachment: function() {
    return O
  },
  getAttachmentKind: function() {
    return b
  },
  default: function() {
    return w
  }
}), a("222007"), a("702976"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var n = a("37983"),
  l = a("884691"),
  s = a("414456"),
  i = a.n(s),
  r = a("77078"),
  o = a("447435"),
  u = a("963119"),
  d = a("467475"),
  c = a("651693"),
  m = a("605160"),
  h = a("903962"),
  g = a("923873"),
  f = a("165405"),
  A = a("410889"),
  _ = a("725962"),
  x = a("505684"),
  p = a("328620"),
  M = a("522049"),
  I = a("945330"),
  E = a("228220"),
  v = a("568734"),
  C = a("103603"),
  N = a("719347"),
  T = a("49111"),
  y = a("782340"),
  S = a("715968");
let j = /\.(mp3|m4a|ogg|wav|flac)$/i,
  O = e => "IMAGE" === e || "VIDEO" === e;

function b(e, t) {
  let {
    filename: a,
    width: n,
    height: l
  } = e;
  if (t && null != n && n > 0 && null != l && l > 0) return (0, c.isImageFile)(a) ? "IMAGE" : (0, c.isVideoFile)(a) && null != e.proxy_url ? "VIDEO" : "INVALID";
  if (null != t && j.test(a) && null != e.url) return "AUDIO";
  if (null != e.url && (0, h.isPlaintextPreviewableFile)(a)) return "PLAINTEXT_PREVIEW";
  return "OTHER"
}
let L = e => {
    let t, a, {
      downloadURL: l,
      downloadMimeType: s,
      onRemoveAttachment: o,
      isAttachmentMediaType: u
    } = e;
    return (null != l && null != s && (t = (0, n.jsx)(r.Tooltip, {
      text: y.default.Messages.DOWNLOAD,
      children: e => (0, n.jsx)(_.default, {
        ...e,
        target: "_blank",
        rel: "noreferrer noopener",
        className: S.hoverButton,
        iconClassName: S.downloadHoverButtonIcon,
        focusProps: {
          offset: 2
        },
        href: l,
        mimeType: s
      })
    })), null != o && (a = (0, n.jsx)(r.Tooltip, {
      text: y.default.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
      children: e => (0, n.jsx)(r.Clickable, {
        ...e,
        className: i(S.hoverButton, S.removeAttachmentHoverButton),
        focusProps: {
          offset: 2
        },
        onClick: o,
        "aria-label": y.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(E.default, {
          width: 20,
          height: 20
        })
      })
    })), null == a && null == t) ? null : (0, n.jsxs)("div", {
      className: i(S.hoverButtonGroup, {
        [S.nonMediaAttachment]: !u
      }),
      children: [t, a]
    })
  },
  D = e => {
    let {
      message: t,
      attachment: a,
      inlineMedia: s,
      autoPlayGif: o,
      canRemoveAttachment: u,
      onRemoveAttachment: c,
      onClick: m,
      onContextMenu: h,
      onPlay: _,
      renderImageComponent: x,
      renderVideoComponent: E,
      renderAudioComponent: j,
      renderPlaintextFilePreview: O,
      className: D,
      imgContainerClassName: w,
      imgClassName: F,
      focusable: P,
      hiddenSpoilers: k,
      mediaLayoutType: B,
      maxWidth: G,
      maxHeight: V,
      noBorderBottomRadius: R,
      useFullWidth: H,
      isAttachmentMediaType: K
    } = e, {
      width: W,
      height: U,
      description: z,
      spoiler: X
    } = a, Y = b(a, s), [q, J] = l.useState(!1), Q = (0, d.default)(t.getChannelId()), {
      enabled: Z
    } = g.default.useExperiment({
      location: "MessageAttachment"
    }, {
      autoTrackExposure: !1
    }), $ = l.useMemo(() => null != a.content_type && -1 !== a.content_type.indexOf("/") ? a.content_type.split("/") : ["unknown", "unknown"], [a.content_type]), ee = l.useCallback(() => {
      c(a)
    }, [a, c]), et = l.useCallback((e, n, l) => {
      if (t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE)) {
        var s;
        (0, f.logVoiceMessagePlaybackStarted)(t.id, null !== (s = a.duration_secs) && void 0 !== s ? s : null, n, t.author.id)
      } else null == _ || _(e, n, l)
    }, [t, a.duration_secs, _]), ea = l.useCallback((e, n) => {
      var l;
      t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) && (0, f.logVoiceMessagePlaybackEnded)(t.id, null !== (l = a.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n)
    }, [t, a.duration_secs]), en = l.useCallback(e => {
      var a;
      t.hasFlag(T.MessageFlags.IS_VOICE_MESSAGE) && (0, f.logVoiceMessagePlaybackFailed)(t.id, null !== (a = null == e ? void 0 : e.message) && void 0 !== a ? a : null)
    }, [t]), el = l.useCallback(() => {
      if (B === N.MediaLayoutType.MOSAIC) {
        let e = !Q && "VIDEO" === Y || !Q && "AUDIO" === Y || "OTHER" === Y;
        if (K) {
          if (null == W || null == U) return null;
          let e = (0, C.getRatio)({
            width: W,
            height: U,
            maxWidth: N.MEDIA_MOSAIC_MAX_WIDTH,
            maxHeight: N.MEDIA_MOSAIC_MAX_HEIGHT
          });
          if (!H && (e * W < N.MINIMUM_MEDIA_MOSAIC_DIM || e * U < N.MINIMUM_MEDIA_MOSAIC_DIM)) return null
        }
        return !q && (0, n.jsx)(L, {
          downloadURL: e ? a.url : void 0,
          downloadMimeType: e ? $ : void 0,
          onRemoveAttachment: u ? ee : void 0,
          isAttachmentMediaType: K
        })
      }
      return u && (0, n.jsx)(r.Clickable, {
        className: X ? S.spoilerRemoveAttachmentButton : S.removeAttachmentButton,
        focusProps: {
          offset: {
            bottom: 4
          }
        },
        onClick: () => c(a),
        "aria-label": y.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
        children: (0, n.jsx)(I.default, {
          width: 16,
          height: 16
        })
      })
    }, [B, u, X, Y, K, q, a, $, ee, W, U, H, c, Q]), es = l.useCallback(() => {
      var e;
      return (0, v.hasFlag)(null !== (e = a.flags) && void 0 !== e ? e : 0, T.MessageAttachmentFlags.IS_CLIP) ? (0, n.jsxs)(r.TooltipContainer, {
        text: y.default.Messages.CLIPS_BETA_TAG_HOVER,
        className: S.clipPill,
        children: [(0, n.jsx)(M.default, {}), (0, n.jsx)(r.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: y.default.Messages.CLIP_TAG
        })]
      }) : null
    }, [a]);
    switch (Y) {
      case "IMAGE":
        return (0, n.jsx)(p.GIFAccessoryContext.Consumer, {
          children: e => x({
            alt: z,
            src: null != a.proxy_url && "" !== a.proxy_url ? a.proxy_url : a.url,
            original: a.url,
            placeholder: a.placeholder,
            placeholderVersion: a.placeholder_version,
            showThumbhashPlaceholder: Z,
            width: W,
            height: U,
            autoPlay: o && !k,
            onClick: m,
            onContextMenu: h,
            shouldHideMediaOptions: Q,
            renderAccessory: e,
            renderAdjacentContent: el,
            containerClassName: D,
            className: w,
            imageClassName: F,
            shouldLink: P,
            hiddenSpoilers: k,
            responsive: !0,
            mediaLayoutType: B,
            maxWidth: G,
            maxHeight: V,
            useFullWidth: H
          })
        });
      case "VIDEO":
        let ei = new URL(a.proxy_url);
        return ei.searchParams.append("format", "jpeg"), E({
          poster: ei.toString(),
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          placeholder: a.placeholder,
          placeholderVersion: a.placeholder_version,
          showThumbhashPlaceholder: Z,
          width: W,
          height: U,
          onClick: m,
          onContextMenu: h,
          renderOverlayContent: es,
          renderAdjacentContent: el,
          naturalWidth: W,
          naturalHeight: U,
          className: i(D, {
            [S.noBorderBottomRadius]: R
          }),
          playable: P,
          responsive: !0,
          mediaLayoutType: B,
          maxWidth: G,
          maxHeight: V,
          useFullWidth: H,
          mimeType: $,
          onPlay: _,
          downloadable: !Q,
          mediaPlayerClassName: R ? S.noBorderBottomRadius : void 0
        });
      case "AUDIO":
        return j({
          fileSize: a.size,
          fileName: a.filename,
          src: a.url,
          className: D,
          playable: P,
          mimeType: $,
          durationSecs: a.duration_secs,
          waveform: a.waveform,
          renderAdjacentContent: el,
          onVolumeShow: () => J(!0),
          onVolumeHide: () => J(!1),
          onPlay: et,
          onPause: ea,
          onError: en
        });
      case "PLAINTEXT_PREVIEW":
        return O({
          attachment: a,
          className: D,
          onClick: m,
          onContextMenu: h,
          renderAdjacentContent: el
        });
      case "OTHER":
        return (0, n.jsx)(A.default, {
          url: a.url,
          filename: a.filename,
          size: a.size,
          onClick: m,
          onContextMenu: h,
          className: D,
          renderAdjacentContent: el
        });
      case "INVALID":
        return null
    }
  };
var w = e => {
  var t;
  let {
    className: a,
    attachment: s,
    message: r,
    inlineMedia: d,
    useFullWidth: c,
    mediaLayoutType: h,
    canRemoveAttachment: g,
    isSingleMosaicItem: f,
    footer: A,
    ..._
  } = e, {
    width: p,
    height: M
  } = s, I = (0, u.useShouldRedactExplicitContent)(r.channel_id, r.author.id), E = (0, m.getObscureReason)(s, I), [v, T] = l.useState(null != E), y = h === N.MediaLayoutType.MOSAIC, j = !y && (null != p && p < 200 || null != M && M < 50), L = b(s, d);
  let w = "IMAGE" === (t = L) || "VIDEO" === t,
    F = O(b(s, d)),
    P = f && null != E && (0, o.isExplicitMediaBelowConstraints)(p, M),
    k = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (0, n.jsx)(D, {
        ..._,
        attachment: s,
        message: r,
        inlineMedia: d,
        hiddenSpoilers: e,
        canRemoveAttachment: g,
        className: i(a, S.attachmentContentItem, {
          [S.obscured]: v && !j,
          [S.hiddenSpoiler]: v && E === m.ObscureReason.SPOILER,
          [S.hiddenExplicit]: v && null != E && [m.ObscureReason.EXPLICIT_CONTENT, m.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(E),
          [S.hiddenAttachment]: v && e,
          [S.inline]: v && j
        }),
        focusable: !e,
        mediaLayoutType: h,
        noBorderBottomRadius: null != A,
        useFullWidth: !!P || c,
        isAttachmentMediaType: F
      })
    };
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: i(S.messageAttachment, {
        [S.messageAttachmentNoJustify]: w,
        [S.messageAttachmentFullWidth]: c,
        [S.messageAttachmentMediaMosaic]: y,
        [S.hideOverflow]: y && F,
        [S.messageAttachmentWithFooter]: null != A
      }),
      children: [null != E ? (0, n.jsx)(x.default, {
        type: x.default.Types.ATTACHMENT,
        inline: j,
        reason: E,
        isSingleMosaicItem: f,
        obscured: v,
        containerStyles: function(e, t, a) {
          if (!t) return;
          let n = e.width;
          if (void 0 !== e.width && void 0 !== e.height) {
            let {
              width: t
            } = (0, C.fit)({
              width: e.width,
              height: e.height,
              maxWidth: 400,
              maxHeight: 300
            });
            n = t
          }
          return {
            ...a !== N.MediaLayoutType.MOSAIC && {
              maxWidth: null != n ? n : "400px"
            },
            width: "100%",
            height: "100%",
            justifySelf: "auto"
          }
        }(s, w, h),
        obscurityControlClassName: i({
          [S.obscureVideo]: "VIDEO" === L && f && !v
        }),
        onToggleObscurity: () => T(e => !e),
        children: e => k(e)
      }) : k(), A]
    })
  })
}