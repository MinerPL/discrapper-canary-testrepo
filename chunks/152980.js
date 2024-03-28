"use strict";
A.r(t), A.d(t, {
  AttachmentsUploadComponent: function() {
    return N
  }
}), A("47120");
var a = A("735250"),
  l = A("470079"),
  s = A("803997"),
  n = A.n(s),
  r = A("481060"),
  i = A("205822"),
  o = A("476326"),
  d = A("377171"),
  u = A("682864"),
  c = A("153124"),
  f = A("350722"),
  g = A("465670"),
  C = A("210712"),
  h = A("43632"),
  m = A("587123"),
  T = A("863663"),
  p = A("731994"),
  U = A("629481"),
  v = A("689938"),
  I = A("350811");
let E = (0, c.uid)();

function x(e) {
  var t;
  let {
    upload: A,
    progress: s = 0,
    onDeleteAttachment: i
  } = e, o = l.useCallback(() => {
    null == i || i(A.id)
  }, [i, A.id]), c = s >= 1, f = s < 0, h = c || f, m = null !== (t = A.filename) && void 0 !== t ? t : A.id, p = (0, T.describeUploadProgressError)(s);
  return (0, a.jsx)(r.TooltipContainer, {
    text: p,
    children: (0, a.jsxs)("div", {
      className: n()(I.attachedFileCard, {
        [I.attachedFileCardError]: f,
        [I.attachedFileCardUploading]: !h
      }),
      children: [(0, a.jsx)(C.default, {
        width: 16,
        height: 16,
        color: d.default.INTERACTIVE_MUTED
      }), (0, a.jsx)(u.default, {
        size: 10,
        horizontal: !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: m
      }), !h && (0, a.jsx)(r.Spinner, {
        className: I.attachedFileCardSpinner,
        type: r.Spinner.Type.SPINNING_CIRCLE
      }), h && null != i && (0, a.jsx)(r.Button, {
        "aria-label": v.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
          attachment: m
        }),
        className: I.deleteButton,
        innerClassName: I.deleteButtonInner,
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: o,
        children: (0, a.jsx)(g.default, {
          width: 12,
          height: 12,
          className: I.__invalid_deleteIcon
        })
      })]
    })
  })
}

function N(e) {
  let {
    onFileAdded: t
  } = e, {
    uploads: A,
    canAttachFiles: s,
    canAttachArchives: n,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: g
  } = (0, m.useGuildProductAttachmentManagerContext)(), C = l.useRef(!1);

  function T(e) {
    try {
      for (let t of e) d({
        platform: o.UploadPlatform.WEB,
        file: t
      });
      C.current = !0
    } catch {}
  }
  return l.useEffect(() => {
    C.current && (t(), C.current = !1)
  }, [t]), (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)(i.default, {
      className: I.uploadArea,
      title: v.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
      description: v.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
      icons: p.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: T
    }), (0, a.jsxs)(f.default, {
      className: I.addFileButtonLook,
      innerClassName: I.addFileButton,
      color: r.Button.Colors.CUSTOM,
      disabled: !s,
      "aria-label": v.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
      "aria-describedby": E,
      multiple: !0,
      onChange: function(e) {
        null != e.currentTarget.files && T(e.currentTarget.files)
      },
      children: [(0, a.jsx)(h.default, {
        color: "currentColor",
        width: 16,
        height: 16,
        className: I.addFileButtonIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: v.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
      })]
    }), (0, a.jsx)(u.default, {
      size: 12
    }), (0, a.jsx)(r.Text, {
      id: E,
      color: "text-muted",
      variant: "text-xs/normal",
      children: n ? v.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
        fileUploadLimit: U.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      }) : v.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
        fileUploadLimit: U.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      })
    }), A.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: I.separator
      }), (0, a.jsx)("ul", {
        className: I.attachedFilesContainer,
        "aria-label": v.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
        children: A.map(e => (0, a.jsx)("li", {
          children: (0, a.jsx)(x, {
            upload: e,
            onDeleteAttachment: c,
            progress: g[e.id]
          })
        }, e.id))
      })]
    })]
  })
}