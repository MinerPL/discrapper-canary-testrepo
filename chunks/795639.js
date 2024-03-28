"use strict";
a.r(t), a.d(t, {
  MediaPostThumbnail: function() {
    return F
  }
});
var s = a("735250"),
  n = a("470079"),
  l = a("803997"),
  r = a.n(l),
  i = a("512722"),
  o = a.n(i),
  d = a("399606"),
  u = a("481060"),
  c = a("166459"),
  m = a("607070"),
  h = a("541716"),
  f = a("273031"),
  g = a("859235"),
  x = a("470623"),
  C = a("983200"),
  _ = a("153124"),
  S = a("350722"),
  T = a("586791"),
  p = a("839811"),
  E = a("185403"),
  N = a("740727"),
  M = a("810090"),
  v = a("127654"),
  A = a("124252"),
  I = a("689938"),
  j = a("496252");
let R = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  O = (0, _.uid)();

function b(e) {
  let {
    mediaAttachments: t,
    containerWidth: a,
    containerHeight: n
  } = e, l = (0, C.useImageContainerStyles)({
    numAttachments: t.length,
    containerWidth: a,
    containerHeight: n
  });
  return (0, s.jsx)(s.Fragment, {
    children: t.map((e, t) => {
      var a;
      return (0, s.jsx)("div", {
        style: l[t],
        children: !0 === e.isVideo ? (0, s.jsx)(M.default, {
          src: e.src,
          className: j.thumbnail,
          "aria-hidden": !0
        }) : (0, s.jsx)("img", {
          src: e.src,
          className: j.thumbnail,
          "aria-hidden": !0,
          alt: null !== (a = null == e ? void 0 : e.alt) && void 0 !== a ? a : ""
        })
      }, e.src)
    })
  })
}
let F = e => {
  var t;
  let {
    parentChannel: l
  } = e, {
    textAreaState: i
  } = (0, x.useForumPostComposerStore)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }), C = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), _ = (0, A.default)(l, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), M = n.useMemo(() => _.find(e => e.isThumbnail), [_]), F = null != _ && _.length > 0, L = n.useMemo(() => {
    let e = (null == _ ? void 0 : _.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [_]), P = n.useCallback(e => {
    null != M && c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type), (0, v.promptToUpload)(e.currentTarget.files, l, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: !0,
      isThumbnail: !0
    }), e.currentTarget.value = null
  }, [l, M]), y = e => {
    e.stopPropagation(), (null == M ? void 0 : M.upload) != null && (0, u.openModalLazy)(async () => {
      let e = M.upload;
      o()(null != e, "upload should not be null");
      let {
        default: t
      } = await Promise.resolve().then(a.bind(a, "95152"));
      return a => (0, s.jsx)(t, {
        ...a,
        upload: e,
        channelId: l.id,
        draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
        onSubmit: t => {
          let {
            name: a,
            description: s,
            spoiler: n
          } = t;
          c.default.update(l.id, e.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
            filename: a,
            description: s,
            spoiler: n
          })
        },
        disableSpoiler: !0
      })
    })
  }, D = (0, s.jsx)(S.default, {
    color: u.ButtonColors.CUSTOM,
    className: r()(j.uploadFileInputContainer),
    innerClassName: j.uploadThumbnailContainer,
    onChange: P,
    multiple: !1,
    "aria-hidden": !0,
    filters: R,
    "aria-describedby": O,
    "aria-label": F ? I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
    children: F ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(b, {
        mediaAttachments: _,
        containerWidth: L.width,
        containerHeight: L.height
      }), (0, s.jsxs)("div", {
        className: r()(j.changeThumbnailLabelContainer, {
          [j.changeThumbnailLabelOverflow]: (null == _ ? void 0 : _.length) > 2
        }),
        children: [(0, s.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
        }), null == M && (0, s.jsx)(T.default, {
          className: j.editIcon,
          width: 16,
          height: 16
        })]
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(p.default, {
        className: j.uploadIcon
      }), (0, s.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
      })]
    })
  });
  return (0, s.jsx)("div", {
    className: j.thumbnailContainer,
    style: L,
    children: null != M ? (0, s.jsx)(g.default, {
      actions: (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(f.default, {
          className: j.action,
          tooltip: I.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
          onClick: y,
          children: (0, s.jsx)(E.default, {})
        }), (0, s.jsx)(f.default, {
          className: j.action,
          tooltip: I.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
          onClick: () => c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
          dangerous: !0,
          children: (0, s.jsx)(N.default, {})
        })]
      }),
      draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
      id: M.id,
      channelId: l.id,
      handleEditModal: y,
      keyboardModeEnabled: C,
      size: g.AttachmentListItemSizes.SMALL,
      className: j.attachmentListItem,
      children: D
    }) : (0, s.jsx)(s.Fragment, {
      children: D
    })
  })
}