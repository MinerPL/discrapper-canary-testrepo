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
  c = i("118139"),
  d = i("786761"),
  r = i("3148"),
  u = i("524444"),
  m = i("25015"),
  _ = i("963550"),
  f = i("845080"),
  A = i("594174"),
  h = i("715246"),
  E = i("998951"),
  I = i("310043"),
  T = i("956664"),
  p = i("709054"),
  g = i("788080"),
  x = i("800530"),
  v = i("981631"),
  C = i("768760"),
  S = i("479079");
let L = (e, t) => {
    let i = e.attachments.map(e => {
      var i, a, n, l;
      let s = {
        ...e,
        filename: (0, g.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!((0, c.isImageFile)(e.filename) || (0, c.isVideoFile)(e.filename))) return s;
      return {
        ...s,
        width: null !== (n = null === (i = t[e.id]) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : x.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (l = null === (a = t[e.id]) || void 0 === a ? void 0 : a.height) && void 0 !== l ? l : x.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, d.createMessageRecord)({
      ...(0, r.default)({
        nonce: e.id,
        content: e.content,
        type: v.MessageTypes.DEFAULT,
        channelId: v.EMPTY_STRING_SNOWFLAKE_ID
      }),
      timestamp: new Date(p.default.extractTimestamp(e.id)).toISOString(),
      attachments: i,
      state: v.MessageStates.SENT
    })
  },
  N = e => {
    let {
      message: t
    } = e, {
      attachments: i
    } = t;
    if (0 === i.length) return null;
    let n = (e, t, i) => {
        let n = x.DEFAULT_MEDIA_MAX_WIDTH,
          s = x.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, T.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: x.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: x.DEFAULT_MEDIA_MAX_HEIGHT
          });
          n = (0, l.clamp)(Math.round(t.width * e), 0, x.DEFAULT_MEDIA_MAX_WIDTH), s = (0, l.clamp)(Math.round(t.height * e), 0, x.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, a.jsx)("div", {
          style: {
            width: i ? n : "100%",
            height: i ? s : "100%"
          },
          children: (0, a.jsx)(h.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: i ? n : "100%",
            height: i ? s : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: h.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: u.renderMaskedLinkComponent,
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
    return (0, a.jsx)("div", {
      className: S.classificationEvidenceMessageAttachment,
      children: (0, a.jsx)(I.default, {
        attachments: i.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: C.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: s,
          onRemoveAttachment: l.noop,
          renderVideoComponent: t => n(t, e, s),
          renderImageComponent: e => (0, u.renderImageComponent)({
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1,
            ...e
          }),
          renderAudioComponent: u.renderAudioComponent,
          renderPlaintextFilePreview: u.renderPlaintextFilePreview,
          gifFavoriteButton: () => null
        }))
      })
    })
  };

function D(e) {
  var t;
  let {
    flaggedContent: i
  } = e, l = (0, s.useStateFromStores)([A.default], () => A.default.getCurrentUser()), [d, r] = n.useState({}), [u, h] = n.useState(!0), I = i[0], T = L(I, d), p = (0, m.default)(T, {
    hideSimpleEmbedContent: !1,
    allowList: !1,
    allowHeading: !1,
    allowLinks: !1,
    previewLinkTarget: !1
  });
  return (n.useEffect(() => {
    Promise.all(I.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, c.isImageFile)(t) || (0, c.isVideoFile)(t)
    }).map(e => {
      var t;
      return (t = e, new Promise((e, i) => {
        if ((0, c.isImageFile)(t.filename)) {
          let a = new Image;
          a.src = t.url, a.onload = () => {
            e(a)
          }, a.onerror = () => {
            i()
          }
        } else if ((0, c.isVideoFile)(t.filename)) {
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
      })).then(t => r(i => ({
        ...i,
        [e.id]: t
      })))
    })).finally(() => h(!1))
  }, [I.attachments]), "" === T.content && 0 === T.attachments.length) ? null : (0, a.jsx)("div", {
    className: S.classificationEvidenceCard,
    children: u ? (0, a.jsx)(o.Spinner, {}) : (0, a.jsx)(E.default, {
      compact: !1,
      childrenHeader: (0, f.default)({
        author: {
          ...l,
          colorString: "",
          nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : ""
        },
        message: T,
        channel: void 0,
        guildId: void 0,
        compact: !1,
        animateAvatar: !1,
        isGroupStart: !0,
        roleIcon: void 0,
        hideTimestamp: !1
      }),
      childrenAccessories: (0, a.jsx)(N, {
        message: T
      }),
      childrenMessageContent: (0, _.default)({
        message: T
      }, p.content),
      hasThread: !1,
      hasReply: !1
    })
  })
}