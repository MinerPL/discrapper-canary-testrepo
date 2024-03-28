"use strict";
n.r(t), n.d(t, {
  ExplicitMediaFalsePositiveModal: function() {
    return C
  },
  handleSuccess: function() {
    return S
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("470167"),
  o = n("481060"),
  u = n("572691"),
  d = n("118139"),
  c = n("584656"),
  f = n("153124"),
  E = n("810090"),
  _ = n("163268"),
  T = n("719548"),
  m = n("689938"),
  I = n("937510");
let p = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: a
    } = t;
    return null == n ? null : (0, s.jsx)(N, {
      url: n,
      description: a
    })
  },
  h = e => {
    var t, n, a;
    let {
      embed: l
    } = e;
    if (!T.SUPPORTED_EMBED_TYPES.has(l.type)) return null;
    let i = void 0 !== l.video && l.type !== r.MessageEmbedTypes.GIFV ? l.video.url : null !== (a = null === (t = l.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== a ? a : null === (n = l.image) || void 0 === n ? void 0 : n.url;
    return null == i ? null : (0, s.jsx)(N, {
      url: i
    })
  },
  N = e => {
    let {
      url: t,
      description: n
    } = e, a = (0, d.isVideoUrl)(t);
    return (0, s.jsx)("div", {
      className: I.mediaContainer,
      children: a ? (0, s.jsx)(E.default, {
        className: i()(I.video, I.media),
        controls: !0,
        src: t
      }) : (0, s.jsx)("img", {
        className: i()(I.image, I.media),
        src: t,
        alt: n
      })
    })
  };

function S(e) {
  u.default.pop(), (0, c.showSafetyToast)({
    id: "explicit-media-false-positive-modal",
    text: m.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
  }), e()
}

function C(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: l,
    analyticsContext: i,
    attachmentPreview: r,
    embedPreview: u,
    onConfirmPress: d,
    transitionState: c,
    onClose: E
  } = e, T = (0, f.useUID)(), N = a.useCallback(() => {
    (0, _.trackMediaRedactionAction)({
      action: _.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: i
    }), E()
  }, [t, n, i, E]), S = a.useCallback(() => {
    null == d || d(), (0, _.trackMediaRedactionAction)({
      action: _.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: i
    })
  }, [t, n, i, d]);
  return a.useEffect(() => {
    (0, _.trackMediaRedactionAction)({
      action: _.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: i
    })
  }, [t, n, i]), (0, s.jsxs)(o.ModalRoot, {
    transitionState: c,
    "aria-labelledby": T,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsxs)(o.ModalContent, {
      children: [(0, s.jsx)(o.ModalCloseButton, {
        onClick: N,
        className: I.closeButton
      }), (0, s.jsx)(o.Heading, {
        id: T,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: I.header,
        children: m.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: I.subheader,
        children: m.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }), null != r && (0, s.jsx)(p, {
        attachment: r
      }), null != u && (0, s.jsx)(h, {
        embed: u
      })]
    }), (0, s.jsxs)(o.ModalFooter, {
      children: [(0, s.jsx)(o.Button, {
        className: I.button,
        disabled: l,
        submitting: l,
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        onClick: S,
        children: m.default.Messages.CONFIRM
      }), (0, s.jsx)(o.Button, {
        className: I.button,
        disabled: l,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: N,
        children: m.default.Messages.CANCEL
      })]
    })]
  })
}