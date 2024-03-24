"use strict";
A.r(t), A.d(t, {
  AttachmentsUploadComponent: function() {
    return N
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("77078"),
  i = A("160864"),
  o = A("966724"),
  d = A("20606"),
  u = A("191814"),
  c = A("476765"),
  f = A("857171"),
  g = A("945330"),
  C = A("903635"),
  h = A("696104"),
  m = A("949435"),
  p = A("757515"),
  T = A("527382"),
  v = A("500307"),
  U = A("782340"),
  I = A("27761");
let E = (0, c.uid)();

function x(e) {
  var t;
  let {
    upload: A,
    progress: n = 0,
    onDeleteAttachment: i
  } = e, o = l.useCallback(() => {
    null == i || i(A.id)
  }, [i, A.id]), c = n >= 1, f = n < 0, h = c || f, m = null !== (t = A.filename) && void 0 !== t ? t : A.id, T = (0, p.describeUploadProgressError)(n);
  return (0, a.jsx)(s.TooltipContainer, {
    text: T,
    children: (0, a.jsxs)("div", {
      className: r(I.attachedFileCard, {
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
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: m
      }), !h && (0, a.jsx)(s.Spinner, {
        className: I.attachedFileCardSpinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      }), h && null != i && (0, a.jsx)(s.Button, {
        "aria-label": U.default.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({
          attachment: m
        }),
        className: I.deleteButton,
        innerClassName: I.deleteButtonInner,
        look: s.Button.Looks.BLANK,
        size: s.Button.Sizes.NONE,
        onClick: o,
        children: (0, a.jsx)(g.default, {
          width: 12,
          height: 12,
          className: I.deleteIcon
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
    canAttachFiles: n,
    canAttachArchives: r,
    addAttachment: d,
    deleteAttachment: c,
    fileUploadProgresses: g
  } = (0, m.useGuildProductAttachmentManagerContext)(), C = l.useRef(!1);

  function p(e) {
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
      title: U.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
      description: U.default.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
      icons: T.DEFAULT_FILE_UPLOAD_ICONS,
      onDrop: p
    }), (0, a.jsxs)(f.default, {
      className: I.addFileButtonLook,
      innerClassName: I.addFileButton,
      color: s.Button.Colors.CUSTOM,
      disabled: !n,
      "aria-label": U.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
      "aria-describedby": E,
      multiple: !0,
      onChange: function(e) {
        null != e.currentTarget.files && p(e.currentTarget.files)
      },
      children: [(0, a.jsx)(h.default, {
        color: "currentColor",
        width: 16,
        height: 16,
        className: I.addFileButtonIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: U.default.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
      })]
    }), (0, a.jsx)(u.default, {
      size: 12
    }), (0, a.jsx)(s.Text, {
      id: E,
      color: "text-muted",
      variant: "text-xs/normal",
      children: r ? U.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({
        fileUploadLimit: v.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      }) : U.default.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({
        fileUploadLimit: v.GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE
      })
    }), A.length > 0 && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: I.separator
      }), (0, a.jsx)("ul", {
        className: I.attachedFilesContainer,
        "aria-label": U.default.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
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