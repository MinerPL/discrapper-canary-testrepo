"use strict";
s.r(t), s.d(t, {
  MediaPostThumbnail: function() {
    return L
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("627445"),
  o = s.n(i),
  u = s("65597"),
  d = s("77078"),
  c = s("81594"),
  m = s("206230"),
  h = s("850391"),
  f = s("9560"),
  g = s("271972"),
  x = s("578198"),
  C = s("855455"),
  T = s("476765"),
  _ = s("857171"),
  S = s("832132"),
  p = s("808404"),
  E = s("987772"),
  N = s("228220"),
  M = s("58608"),
  A = s("412861"),
  v = s("42418"),
  I = s("782340"),
  j = s("73386");
let R = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  O = (0, T.uid)();

function F(e) {
  let {
    mediaAttachments: t,
    containerWidth: s,
    containerHeight: n
  } = e, l = (0, C.useImageContainerStyles)({
    numAttachments: t.length,
    containerWidth: s,
    containerHeight: n
  });
  return (0, a.jsx)(a.Fragment, {
    children: t.map((e, t) => {
      var s;
      return (0, a.jsx)("div", {
        style: l[t],
        children: !0 === e.isVideo ? (0, a.jsx)(M.default, {
          src: e.src,
          className: j.thumbnail,
          "aria-hidden": !0
        }) : (0, a.jsx)("img", {
          src: e.src,
          className: j.thumbnail,
          "aria-hidden": !0,
          alt: null !== (s = null == e ? void 0 : e.alt) && void 0 !== s ? s : ""
        })
      }, e.src)
    })
  })
}
let L = e => {
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
  }), C = (0, u.default)([m.default], () => m.default.keyboardModeEnabled), T = (0, v.default)(l, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), M = n.useMemo(() => T.find(e => e.isThumbnail), [T]), L = null != T && T.length > 0, b = n.useMemo(() => {
    let e = (null == T ? void 0 : T.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [T]), P = n.useCallback(e => {
    null != M && c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type), (0, A.promptToUpload)(e.currentTarget.files, l, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: !0,
      isThumbnail: !0
    }), e.currentTarget.value = null
  }, [l, M]), y = e => {
    e.stopPropagation(), (null == M ? void 0 : M.upload) != null && (0, d.openModalLazy)(async () => {
      let e = M.upload;
      o(null != e, "upload should not be null");
      let {
        default: t
      } = await s.el("467339").then(s.bind(s, "467339"));
      return s => (0, a.jsx)(t, {
        ...s,
        upload: e,
        channelId: l.id,
        draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
        onSubmit: t => {
          let {
            name: s,
            description: a,
            spoiler: n
          } = t;
          c.default.update(l.id, e.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type, {
            filename: s,
            description: a,
            spoiler: n
          })
        },
        disableSpoiler: !0
      })
    })
  }, D = (0, a.jsx)(_.default, {
    color: d.ButtonColors.CUSTOM,
    className: r(j.uploadFileInputContainer),
    innerClassName: j.uploadThumbnailContainer,
    onChange: P,
    multiple: !1,
    "aria-hidden": !0,
    filters: R,
    "aria-describedby": O,
    "aria-label": L ? I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
    children: L ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(F, {
        mediaAttachments: T,
        containerWidth: b.width,
        containerHeight: b.height
      }), (0, a.jsxs)("div", {
        className: r(j.changeThumbnailLabelContainer, {
          [j.changeThumbnailLabelOverflow]: (null == T ? void 0 : T.length) > 2
        }),
        children: [(0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: I.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
        }), null == M && (0, a.jsx)(S.default, {
          className: j.editIcon,
          width: 16,
          height: 16
        })]
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(p.default, {
        className: j.uploadIcon
      }), (0, a.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: I.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
      })]
    })
  });
  return (0, a.jsx)("div", {
    className: j.thumbnailContainer,
    style: b,
    children: null != M ? (0, a.jsx)(g.default, {
      actions: (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(f.default, {
          className: j.action,
          tooltip: I.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
          onClick: y,
          children: (0, a.jsx)(E.default, {})
        }), (0, a.jsx)(f.default, {
          className: j.action,
          tooltip: I.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
          onClick: () => c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
          dangerous: !0,
          children: (0, a.jsx)(N.default, {})
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
    }) : (0, a.jsx)(a.Fragment, {
      children: D
    })
  })
}