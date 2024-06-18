"use strict";
n.d(t, {
  _: function() {
    return b
  }
});
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(512722),
  o = n.n(r),
  c = n(399606),
  d = n(481060),
  u = n(166459),
  h = n(607070),
  m = n(541716),
  g = n(273031),
  x = n(859235),
  _ = n(470623),
  f = n(983200),
  E = n(153124),
  N = n(350722),
  T = n(586791),
  C = n(839811),
  p = n(185403),
  v = n(740727),
  M = n(810090),
  S = n(127654),
  I = n(124252),
  j = n(689938),
  A = n(382170);
let R = [{
    name: "Media Post Thumbnail",
    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
  }],
  Z = (0, E.hQ)();

function O(e) {
  let {
    mediaAttachments: t,
    containerWidth: n,
    containerHeight: l
  } = e, a = (0, f.tu)({
    numAttachments: t.length,
    containerWidth: n,
    containerHeight: l
  });
  return (0, s.jsx)(s.Fragment, {
    children: t.map((e, t) => {
      var n;
      return (0, s.jsx)("div", {
        style: a[t],
        children: !0 === e.isVideo ? (0, s.jsx)(M.Z, {
          src: e.src,
          className: A.thumbnail,
          "aria-hidden": !0
        }) : (0, s.jsx)("img", {
          src: e.src,
          className: A.thumbnail,
          "aria-hidden": !0,
          alt: null !== (n = null == e ? void 0 : e.alt) && void 0 !== n ? n : ""
        })
      }, e.src)
    })
  })
}
let b = e => {
  var t;
  let {
    parentChannel: a
  } = e, {
    textAreaState: r
  } = (0, _.xH)(e => {
    let {
      textAreaState: t
    } = e;
    return {
      textAreaState: t
    }
  }), f = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled), E = (0, I.Z)(a, null === (t = r.textValue) || void 0 === t ? void 0 : t.trim()), M = l.useMemo(() => E.find(e => e.isThumbnail), [E]), b = null != E && E.length > 0, L = l.useMemo(() => {
    let e = (null == E ? void 0 : E.length) > 1 ? 1.15 : 1;
    return {
      width: 153 * e,
      height: 86 * e
    }
  }, [E]), P = l.useCallback(e => {
    null != M && u.Z.remove(a.id, M.id, m.I.CREATE_FORUM_POST.drafts.type), (0, S.d)(e.currentTarget.files, a, m.I.CREATE_FORUM_POST.drafts.type, {
      requireConfirm: !0,
      isThumbnail: !0
    }), e.currentTarget.value = null
  }, [a, M]), D = e => {
    if (e.stopPropagation(), (null == M ? void 0 : M.upload) != null)(0, d.openModalLazy)(async () => {
      let e = M.upload;
      o()(null != e, "upload should not be null");
      let {
        default: t
      } = await Promise.resolve().then(n.bind(n, 95152));
      return n => (0, s.jsx)(t, {
        ...n,
        upload: e,
        channelId: a.id,
        draftType: m.I.CREATE_FORUM_POST.drafts.type,
        onSubmit: t => {
          let {
            name: n,
            description: s,
            spoiler: l
          } = t;
          u.Z.update(a.id, e.id, m.I.CREATE_FORUM_POST.drafts.type, {
            filename: n,
            description: s,
            spoiler: l
          })
        },
        disableSpoiler: !0
      })
    })
  }, y = (0, s.jsx)(N.Z, {
    color: d.ButtonColors.CUSTOM,
    className: i()(A.uploadFileInputContainer),
    innerClassName: A.uploadThumbnailContainer,
    onChange: P,
    multiple: !1,
    "aria-hidden": !0,
    filters: R,
    "aria-describedby": Z,
    "aria-label": b ? j.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : j.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
    children: b ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(O, {
        mediaAttachments: E,
        containerWidth: L.width,
        containerHeight: L.height
      }), (0, s.jsxs)("div", {
        className: i()(A.changeThumbnailLabelContainer, {
          [A.changeThumbnailLabelOverflow]: (null == E ? void 0 : E.length) > 2
        }),
        children: [(0, s.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: j.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
        }), null == M && (0, s.jsx)(T.Z, {
          className: A.editIcon,
          width: 16,
          height: 16
        })]
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(C.Z, {
        className: A.uploadIcon
      }), (0, s.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: j.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
      })]
    })
  });
  return (0, s.jsx)("div", {
    className: A.thumbnailContainer,
    style: L,
    children: null != M ? (0, s.jsx)(x.Z, {
      actions: (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(g.Z, {
          className: A.action,
          tooltip: j.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
          onClick: D,
          children: (0, s.jsx)(p.Z, {})
        }), (0, s.jsx)(g.Z, {
          className: A.action,
          tooltip: j.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
          onClick: () => u.Z.remove(a.id, M.id, m.I.CREATE_FORUM_POST.drafts.type),
          dangerous: !0,
          children: (0, s.jsx)(v.Z, {})
        })]
      }),
      draftType: m.I.CREATE_FORUM_POST.drafts.type,
      id: M.id,
      channelId: a.id,
      handleEditModal: D,
      keyboardModeEnabled: f,
      size: x.q.SMALL,
      className: A.attachmentListItem,
      children: y
    }) : (0, s.jsx)(s.Fragment, {
      children: y
    })
  })
}