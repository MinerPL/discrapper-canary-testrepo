"use strict";
t.r(l), t.d(l, {
  default: function() {
    return b
  }
}), t("47120");
var a = t("735250"),
  s = t("470079"),
  i = t("803997"),
  n = t.n(i),
  o = t("153832"),
  u = t("442837"),
  d = t("780384"),
  r = t("481060"),
  c = t("339085"),
  m = t("349709"),
  I = t("763610"),
  f = t("197712"),
  _ = t("210887"),
  E = t("430824"),
  T = t("594174"),
  g = t("285952"),
  L = t("41542"),
  S = t("626135"),
  v = t("424218"),
  D = t("63063"),
  p = t("956664"),
  x = t("268350"),
  C = t("373228"),
  R = t("378233"),
  j = t("419922"),
  h = t("611480"),
  U = t("981631"),
  A = t("689938"),
  N = t("149694"),
  O = t("434227"),
  P = t("600126");
let M = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
  F = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif"]
  }];

function K(e, l) {
  S.default.track(U.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != l ? l : ""
  })
}
let k = e => {
    let {
      stickerPreview: l
    } = e;
    return (0, a.jsxs)("div", {
      className: N.preview,
      children: [(0, a.jsx)("div", {
        className: N.previewDark,
        children: null != l ? l : (0, a.jsx)("img", {
          src: O,
          alt: A.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
        })
      }), (0, a.jsx)("div", {
        className: N.previewLight,
        children: null != l ? l : (0, a.jsx)("img", {
          src: P,
          alt: A.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
        })
      })]
    })
  },
  y = e => {
    let {
      sticker: l,
      previewData: t,
      onStickerError: s
    } = e;
    if (null != l) return (0, a.jsx)(j.default, {
      size: 160,
      sticker: l
    });
    if (null == t) return null;
    let {
      id: i,
      formatType: n,
      content: o
    } = t;
    return (0, a.jsx)(j.default, {
      assetData: o,
      fileUri: o,
      size: 160,
      sticker: {
        name: i,
        description: "",
        id: i,
        pack_id: "",
        format_type: n
      },
      onError: s
    }, i)
  };
async function G(e) {
  let l = await (0, p.readFileAsBase64)(e),
    t = new Image;
  t.src = l, await t.decode();
  let a = (0, f.downsizeImage)(t, 320, 320);
  return (0, p.dataUrlToFile)(a, e.name, e.type)
}

function b(e) {
  var l, t, i, f, j, O, P, b;
  let {
    transitionState: B,
    onClose: w,
    guildId: z,
    sticker: H
  } = e, V = (0, u.useStateFromStores)([_.default], () => _.default.theme), W = (0, u.useStateFromStores)([c.default], () => (null == H ? void 0 : H.tags) != null ? c.default.getCustomEmojiById(H.tags) : null), Z = null !== (t = null === (l = T.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) && void 0 !== t && t ? h.STAFF_MAX_STICKER_FILE_SIZE : h.MAX_STICKER_FILE_SIZE, [q, X] = s.useState(null), [Y, J] = s.useState(null !== (i = null == H ? void 0 : H.name) && void 0 !== i ? i : ""), [Q, $] = s.useState({
    file: null,
    filename: null !== (f = (0, R.getFilenameForSticker)(H)) && void 0 !== f ? f : ""
  }), [ee, el] = s.useState(null == W ? void 0 : W.id), [et, ea] = s.useState(null !== (j = null == W ? void 0 : W.name) && void 0 !== j ? j : null == H ? void 0 : H.tags), [es, ei] = s.useState(null !== (O = null == H ? void 0 : H.description) && void 0 !== O ? O : ""), [en, eo] = s.useState(!1), [eu, ed] = s.useState(null), er = (0, u.useStateFromStores)([E.default], () => E.default.getGuild(z)), ec = (null == er ? void 0 : er.hasFeature(U.GuildFeatures.PARTNERED)) || (null == er ? void 0 : er.hasFeature(U.GuildFeatures.VERIFIED)), em = null != H, eI = em || (null == Q ? void 0 : Q.file) != null, ef = 0 === es.length || es.length >= 2 && es.length <= 100, e_ = !en && (null == eu ? void 0 : eu.isBlocking) !== !0 && Y.length >= 2 && (null != ee || null != et || (null == H ? void 0 : H.tags) != null && (null == H ? void 0 : H.tags) !== "") && eI && ef, eE = async e => {
    var l;
    if (null == e) return;
    let t = null === (l = e.type) || void 0 === l ? void 0 : l.split(";")[0];
    if (!M.has(t)) {
      ed({
        message: A.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
        isBlocking: !0
      });
      return
    }
    let a = e;
    if ("image/png" === t && e.size > Z && !await (0, p.isPNGAnimated)(e)) {
      let l = (a = await G(e)).size > Z;
      S.default.track(U.AnalyticEvents.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: a.size,
        resized_file_too_big: l
      })
    }
    if (a.size > Z) {
      ed({
        message: A.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
          maxSize: (0, v.formatKbSize)(Z, {
            useKibibytes: !0
          })
        }),
        isBlocking: null == Q.file
      }), S.default.track(U.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: a.size,
        filetype: t
      });
      return
    }
    let s = (0, R.getStickerFormatTypeFromFileType)(a.type);
    if (s === C.StickerFormat.LOTTIE) {
      if (!ec) {
        ed({
          message: A.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
            articleURL: D.default.getArticleURL(U.HelpdeskArticles.STICKERS_UPLOAD)
          }),
          isBlocking: !0
        });
        return
      }
      let e = new FileReader;
      e.addEventListener("load", () => {
        X({
          id: (0, o.v4)(),
          formatType: s,
          content: e.result
        }), ed(null)
      }), e.readAsText(a)
    } else {
      let e = await (0, p.readFileAsBase64)(a);
      X({
        id: (0, o.v4)(),
        formatType: s,
        content: e
      }), ed(null)
    }
    $({
      file: a,
      filename: a.name
    })
  }, eT = async e => {
    var l, t, a, s, i, n;
    e.preventDefault();
    let o = null !== (t = null !== (l = null != ee ? ee : et) && void 0 !== l ? l : null == H ? void 0 : H.tags) && void 0 !== t ? t : "";
    try {
      if (eo(!0), em) await (0, x.updateGuildSticker)(z, null !== (a = null == H ? void 0 : H.id) && void 0 !== a ? a : "", {
        name: Y,
        tags: o,
        description: es
      });
      else {
        ;
        let e = new FormData;
        e.append("name", Y), e.append("tags", o), e.append("description", es), (null == Q ? void 0 : Q.file) != null && e.append("file", Q.file), n = null !== (i = null === (s = Q.file) || void 0 === s ? void 0 : s.type) && void 0 !== i ? i : "", S.default.track(U.AnalyticEvents.STICKER_UPLOAD_STARTED, {
          filetype: n
        }), await (0, x.createGuildSticker)(z, e), K(!0)
      }
      w()
    } catch (e) {
      ed({
        message: e.body.message,
        isBlocking: !1
      }), K(!1, e.body.message)
    } finally {
      eo(!1)
    }
  }, eg = y({
    sticker: H,
    previewData: q,
    onStickerError: s.useCallback(() => {
      ed({
        message: A.default.Messages.GUILD_STICKER_INVALID_STICKER,
        isBlocking: !0
      })
    }, [])
  }), eL = ec ? A.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : A.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: B,
    "aria-labelledby": "STICKER_UPLOAD_MODAL",
    className: N.modal,
    children: [(0, a.jsx)(r.ModalCloseButton, {
      onClick: w,
      className: N.modalClose
    }), (0, a.jsxs)("form", {
      onSubmit: eT,
      className: N.form,
      children: [(0, a.jsxs)(r.ModalContent, {
        className: N.modalContent,
        children: [(0, a.jsxs)(r.ModalHeader, {
          direction: g.default.Direction.VERTICAL,
          separator: !1,
          className: N.modalHeader,
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            className: N.modalHeaderTitle,
            children: A.default.Messages.GUILD_STICKER_UPLOAD_TITLE
          }), (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: eL.format({
              fileSize: (0, v.formatKbSize)(h.MAX_STICKER_FILE_SIZE, {
                useKibibytes: !0
              })
            })
          })]
        }), (0, a.jsx)(r.FormSection, {
          title: A.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
          className: N.formItem,
          children: (0, a.jsx)(k, {
            stickerPreview: eg
          })
        }), (0, a.jsxs)(r.FormSection, {
          className: n()(N.formItem, N.formItemRow),
          children: [(0, a.jsx)(r.FormItem, {
            title: em ? A.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : A.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
            required: !0,
            className: N.formItemRowChild,
            children: em ? (0, a.jsx)(r.TextInput, {
              disabled: !0,
              value: null !== (P = null == Q ? void 0 : Q.filename) && void 0 !== P ? P : ""
            }) : (0, a.jsx)(I.default, {
              buttonText: A.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
              filters: F,
              filename: null !== (b = null == Q ? void 0 : Q.filename) && void 0 !== b ? b : "",
              placeholder: A.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
              onFileSelect: eE
            })
          }), (0, a.jsx)(m.default, {
            className: N.formItemRowChild,
            guildId: z,
            emojiId: ee,
            emojiName: et,
            setEmojiId: el,
            setEmojiName: ea,
            shouldUpdateBothEmojiFields: !0
          })]
        }), (0, a.jsx)(r.FormItem, {
          title: A.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
          required: !0,
          className: N.formItem,
          children: (0, a.jsx)(r.TextInput, {
            value: Y,
            onChange: J,
            placeholder: A.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
            maxLength: 30
          })
        }), (0, a.jsxs)("div", {
          className: N.formItem,
          children: [(0, a.jsxs)(r.FormTitle, {
            children: [A.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, a.jsx)(r.Tooltip, {
              text: A.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
              children: e => (0, a.jsx)(L.default, {
                className: N.infoIcon,
                ...e
              })
            })]
          }), (0, a.jsx)(r.TextArea, {
            value: es,
            onChange: ei,
            placeholder: A.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
            maxLength: 100
          })]
        }), null != eu && (0, a.jsx)(r.Text, {
          className: N.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: eu.message
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        className: N.modalFooter,
        children: [(0, a.jsx)(r.Button, {
          type: "submit",
          disabled: !e_,
          children: em ? A.default.Messages.GUILD_STICKERS_UPDATE : A.default.Messages.UPLOAD
        }), (0, a.jsx)(r.Button, {
          look: r.Button.Looks.LINK,
          color: (0, d.isThemeLight)(V) ? r.Button.Colors.PRIMARY : r.Button.Colors.WHITE,
          onClick: w,
          children: A.default.Messages.NEVERMIND
        })]
      })]
    })]
  })
}