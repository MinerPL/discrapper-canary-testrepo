"use strict";
n.r(t), n.d(t, {
  handleSuccess: function() {
    return A
  },
  ExplicitMediaFalsePositiveModal: function() {
    return S
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("246111"),
  o = n("77078"),
  u = n("772017"),
  d = n("651693"),
  c = n("476765"),
  f = n("58608"),
  E = n("447435"),
  _ = n("612920"),
  T = n("782340"),
  I = n("471387");
let m = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: l
    } = t;
    return null == n ? null : (0, s.jsx)(p, {
      url: n,
      description: l
    })
  },
  N = e => {
    var t, n, l;
    let {
      embed: a
    } = e;
    if (!_.SUPPORTED_EMBED_TYPES.has(a.type)) return null;
    let i = void 0 !== a.video && a.type !== r.MessageEmbedTypes.GIFV ? a.video.url : null !== (l = null === (t = a.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (n = a.image) || void 0 === n ? void 0 : n.url;
    return null == i ? null : (0, s.jsx)(p, {
      url: i
    })
  },
  p = e => {
    let {
      url: t,
      description: n
    } = e, l = (0, d.isVideoUrl)(t);
    return (0, s.jsx)("div", {
      className: I.mediaContainer,
      children: l ? (0, s.jsx)(f.default, {
        className: i(I.video, I.media),
        controls: !0,
        src: t
      }) : (0, s.jsx)("img", {
        className: i(I.image, I.media),
        src: t,
        alt: n
      })
    })
  };

function A(e) {
  u.default.pop(), (0, o.showToast)((0, o.createToast)(T.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, o.ToastType.CUSTOM)), e()
}

function S(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: a,
    attachmentPreview: i,
    embedPreview: r,
    onConfirmPress: u,
    transitionState: d,
    onClose: f
  } = e, _ = (0, c.useUID)(), p = () => {
    (0, E.trackMediaRedactionAction)({
      action: E.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n
    }), f()
  };
  return l.useEffect(() => {
    (0, E.trackMediaRedactionAction)({
      action: E.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n
    })
  }, [t, n]), (0, s.jsxs)(o.ModalRoot, {
    transitionState: d,
    "aria-labelledby": _,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsxs)(o.ModalContent, {
      children: [(0, s.jsx)(o.ModalCloseButton, {
        onClick: p,
        className: I.closeButton
      }), (0, s.jsx)(o.Heading, {
        id: _,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: I.header,
        children: T.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: I.subheader,
        children: T.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }), null != i && (0, s.jsx)(m, {
        attachment: i
      }), null != r && (0, s.jsx)(N, {
        embed: r
      })]
    }), (0, s.jsxs)(o.ModalFooter, {
      children: [(0, s.jsx)(o.Button, {
        className: I.button,
        disabled: a,
        submitting: a,
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        onClick: () => {
          null == u || u(), (0, E.trackMediaRedactionAction)({
            action: E.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
            channelId: t,
            messageId: n
          })
        },
        children: T.default.Messages.CONFIRM
      }), (0, s.jsx)(o.Button, {
        className: I.button,
        disabled: a,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: p,
        children: T.default.Messages.CANCEL
      })]
    })]
  })
}