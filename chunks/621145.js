"use strict";
i.r(t), i.d(t, {
  default: function() {
    return D
  }
}), i("47120"), i("773603");
var a = i("735250"),
  n = i("470079"),
  l = i("392711"),
  s = i("442837"),
  o = i("481060"),
  r = i("118139"),
  c = i("169525"),
  d = i("786761"),
  u = i("3148"),
  m = i("219797"),
  A = i("524444"),
  _ = i("25015"),
  h = i("963550"),
  f = i("845080"),
  I = i("594174"),
  E = i("715246"),
  T = i("998951"),
  p = i("310043"),
  g = i("69750"),
  x = i("956664"),
  S = i("709054"),
  C = i("788080"),
  v = i("800530"),
  L = i("981631"),
  N = i("768760"),
  y = i("390988");
let F = (e, t) => {
    let i = e.attachments.map(e => {
      var i, a, n, l;
      let s = {
        ...e,
        filename: (0, C.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, r.isImageFile)(e.filename) || (0, r.isVideoFile)(e.filename))) return s;
      return {
        ...s,
        width: null !== (n = null === (i = t[e.id]) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : v.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (l = null === (a = t[e.id]) || void 0 === a ? void 0 : a.height) && void 0 !== l ? l : v.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, d.createMessageRecord)({
      ...(0, u.default)({
        nonce: e.id,
        content: e.content,
        type: L.MessageTypes.DEFAULT,
        channelId: L.EMPTY_STRING_SNOWFLAKE_ID
      }),
      timestamp: new Date(S.default.extractTimestamp(e.id)).toISOString(),
      attachments: i,
      state: L.MessageStates.SENT
    })
  },
  M = e => {
    let {
      message: t
    } = e, {
      attachments: i
    } = t;
    if (0 === i.length) return null;
    let n = (e, t, i) => {
        let n = v.DEFAULT_MEDIA_MAX_WIDTH,
          s = v.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, x.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: v.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: v.DEFAULT_MEDIA_MAX_HEIGHT
          });
          n = (0, l.clamp)(Math.round(t.width * e), 0, v.DEFAULT_MEDIA_MAX_WIDTH), s = (0, l.clamp)(Math.round(t.height * e), 0, v.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, a.jsx)("div", {
          style: {
            width: i ? n : "100%",
            height: i ? s : "100%"
          },
          children: (0, a.jsx)(E.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: i ? n : "100%",
            height: i ? s : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: E.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: A.renderMaskedLinkComponent,
            onClick: e.onClick,
            onPlay: e.onPlay,
            onEnded: e.onEnded,
            onVolumeChange: e.onVolumeChange,
            onMute: e.onMute,
            downloadable: !1
          })
        })
      },
      s = 1 === i.length;

    function o(e, t) {
      return (0, c.getObscureReasonForAttachment)(e.originalItem, t)
    }
    return (0, a.jsx)("div", {
      className: y.classificationEvidenceMessageAttachment,
      children: (0, a.jsx)(p.default, {
        items: i.map(e => ({
          item: {
            uniqueId: e.id,
            originalItem: e,
            type: (0, g.getMosaicMediaTypeForAttachment)(e, !0),
            downloadUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            spoiler: e.spoiler,
            contentType: e.content_type
          },
          message: t,
          mediaLayoutType: N.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          canRemoveItem: !1,
          isSingleMosaicItem: s,
          onRemoveItem: l.noop,
          renderVideoComponent: t => n(t, e, s),
          renderImageComponent: e => (0, a.jsx)(m.ImageComponentForMessageAttachment, {
            ...e,
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1
          }),
          renderAudioComponent: m.AudioComponentForMessageAttachment,
          renderPlaintextFilePreview: m.PlaintextFilePreviewForMessageAttachment,
          renderGenericFileComponent: m.GenericFileComponentForMessageAttachment,
          renderMosaicItemFooter: m.MosaicItemFooterForMessageAttachment,
          getObscureReason: o,
          gifFavoriteButton: () => null
        }))
      })
    })
  };

function D(e) {
  var t;
  let {
    flaggedContent: i
  } = e, l = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [c, d] = n.useState({}), [u, m] = n.useState(!0), A = i[0], E = F(A, c), p = (0, _.default)(E, {
    hideSimpleEmbedContent: !1,
    allowList: !1,
    allowHeading: !1,
    allowLinks: !1,
    previewLinkTarget: !1
  });
  return (n.useEffect(() => {
    Promise.all(A.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, r.isImageFile)(t) || (0, r.isVideoFile)(t)
    }).map(e => {
      var t;
      return (t = e, new Promise((e, i) => {
        if ((0, r.isImageFile)(t.filename)) {
          let a = new Image;
          a.src = t.url, a.onload = () => {
            e(a)
          }, a.onerror = () => {
            i()
          }
        } else if ((0, r.isVideoFile)(t.filename)) {
          let a = document.createElement("video");
          a.src = t.url, a.onloadedmetadata = () => {
            let t = a.videoWidth;
            e({
              width: t,
              height: a.videoHeight
            })
          }, a.onerror = () => {
            i()
          }
        } else e({
          width: 0,
          height: 0
        })
      })).then(t => d(i => ({
        ...i,
        [e.id]: t
      })))
    })).finally(() => m(!1))
  }, [A.attachments]), "" === E.content && 0 === E.attachments.length) ? null : (0, a.jsx)("div", {
    className: y.classificationEvidenceCard,
    children: u ? (0, a.jsx)(o.Spinner, {}) : (0, a.jsx)(T.default, {
      compact: !1,
      childrenHeader: (0, f.default)({
        author: {
          ...l,
          colorString: "",
          nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : ""
        },
        message: E,
        channel: void 0,
        guildId: void 0,
        compact: !1,
        animateAvatar: !1,
        isGroupStart: !0,
        roleIcon: void 0,
        hideTimestamp: !1
      }),
      childrenAccessories: (0, a.jsx)(M, {
        message: E
      }),
      childrenMessageContent: (0, h.default)({
        message: E
      }, p.content),
      hasThread: !1,
      hasReply: !1
    })
  })
}