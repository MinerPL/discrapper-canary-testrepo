"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("47120");
var a = l("735250"),
  i = l("470079"),
  n = l("442837"),
  s = l("481060"),
  r = l("904245"),
  o = l("166459"),
  u = l("680287"),
  d = l("163268"),
  c = l("813197"),
  m = l("592125"),
  f = l("703558"),
  _ = l("430824"),
  p = l("375954"),
  g = l("153124"),
  x = l("403182"),
  A = l("709054"),
  M = l("127654"),
  h = l("979956"),
  E = l("228392"),
  T = l("404616"),
  v = l("470623"),
  I = l("981631"),
  C = l("231338"),
  S = l("689938"),
  L = l("459190");

function b(e) {
  var t;
  let {
    threadId: l,
    attachments: b,
    sendMessage: O,
    transitionState: R,
    onClose: y
  } = e, P = (0, g.useUID)(), U = (0, n.useStateFromStores)([m.default], () => m.default.getChannel(l), [l]), j = (0, n.useStateFromStores)([_.default], () => _.default.getGuild(null == U ? void 0 : U.getGuildId()), [U]), z = (0, n.useStateFromStores)([m.default], () => m.default.getChannel(null == U ? void 0 : U.parent_id), [U]), D = null === (t = b[0]) || void 0 === t ? void 0 : t.item, [N, F] = i.useState(null);
  i.useEffect(() => {
    null != D && (0, c.processImage)(D.file, (e, t) => F(e), C.NOOP)
  }, [D]);
  let k = null != D && null != N ? {
      src: N,
      width: T.MAX_THUMBNAIL_WIDTH,
      height: T.MAX_THUMBNAIL_HEIGHT,
      spoiler: b[0].spoiler,
      alt: b[0].description
    } : null,
    [G, w] = i.useState(!1),
    B = i.useCallback(() => {
      (0, E.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), O(), y()
    }, [O, y]),
    H = i.useCallback(() => {
      null != U && null != j && ((0, E.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: l,
          setIsUploading: a,
          guild: i,
          onClose: n
        } = e, s = new u.default(I.Endpoints.MESSAGE(t.id, A.default.castChannelIdAsMessageId(t.id)), "PATCH");
        s.on("start", () => {
          a(!0)
        }), s.on("progress", e => {
          let r = (0, x.maxFileSize)(i.id);
          e.currentSize > r && (s.cancel(), a(!1), n(), (0, M.showUploadFileSizeExceededError)(t, (0, h.getWebUploadFiles)(l)))
        }), s.on("error", (e, l, i) => {
          a(!1), l === I.AbortCodes.EXPLICIT_CONTENT && (n(), r.default.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, d.TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), o.default.clearAll(t.id, f.DraftType.ChannelMessage))
        }), s.on("complete", () => {
          a(!1), n(), o.default.clearAll(t.id, f.DraftType.ChannelMessage)
        });
        let c = p.default.getMessages(t.id).get(A.default.castChannelIdAsMessageId(t.id)),
          m = null != c ? c.attachments : [];
        s.uploadFiles(l, {
          attachments: [...m]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: U,
        attachments: b,
        setIsUploading: w,
        guild: j,
        onClose: y
      }))
    }, [U, b, w, j, y]);
  return null == z ? null : (0, a.jsxs)(s.ModalRoot, {
    transitionState: R,
    size: s.ModalSize.SMALL,
    className: L.modalRoot,
    "aria-labelledby": P,
    children: [(0, a.jsxs)(s.ModalContent, {
      className: L.modal,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        className: L.header,
        id: P,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        className: L.__invalid_body,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: L.forumPost,
        children: (0, a.jsx)(v.ForumPostComposerStoreProvider, {
          createStore: () => (0, v.createForumPostComposerStore)(z),
          children: (0, a.jsx)(T.default, {
            threadId: l,
            goToThread: C.NOOP,
            overrideMedia: k
          })
        })
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      className: L.modalFooter,
      children: [(0, a.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        className: L.cancelButton,
        disabled: G,
        onClick: y,
        children: S.default.Messages.CANCEL
      }), (0, a.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: L.dontAddButton,
        disabled: G,
        onClick: B,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, a.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        className: L.__invalid_button,
        submitting: G,
        onClick: H,
        autoFocus: !0,
        children: S.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}