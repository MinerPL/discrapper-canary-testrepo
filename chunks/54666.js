"use strict";
l.r(t), l.d(t, {
  default: function() {
    return K
  }
}), l("222007");
var a = l("37983"),
  i = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("748820"),
  o = l("446674"),
  u = l("819855"),
  d = l("77078"),
  c = l("385976"),
  E = l("208548"),
  I = l("104945"),
  _ = l("8731"),
  f = l("161778"),
  T = l("305961"),
  h = l("697218"),
  m = l("145131"),
  A = l("68238"),
  g = l("599110"),
  p = l("993105"),
  R = l("701909"),
  D = l("103603"),
  L = l("467094"),
  O = l("161585"),
  S = l("24373"),
  v = l("41170"),
  N = l("560241"),
  C = l("49111"),
  M = l("782340"),
  U = l("287065"),
  y = l("357450"),
  H = l("348919");
let P = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
  w = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif"]
  }];

function x(e, t) {
  g.default.track(C.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let G = e => {
    let {
      stickerPreview: t
    } = e;
    return (0, a.jsxs)("div", {
      className: U.preview,
      children: [(0, a.jsx)("div", {
        className: U.previewDark,
        children: null != t ? t : (0, a.jsx)("img", {
          src: y,
          alt: M.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
        })
      }), (0, a.jsx)("div", {
        className: U.previewLight,
        children: null != t ? t : (0, a.jsx)("img", {
          src: H,
          alt: M.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
        })
      })]
    })
  },
  F = e => {
    let {
      sticker: t,
      previewData: l,
      onStickerError: i
    } = e;
    if (null != t) return (0, a.jsx)(v.default, {
      size: 160,
      sticker: t
    });
    if (null == l) return null;
    let {
      id: n,
      formatType: s,
      content: r
    } = l;
    return (0, a.jsx)(v.default, {
      assetData: r,
      fileUri: r,
      size: 160,
      sticker: {
        name: n,
        description: "",
        id: n,
        pack_id: "",
        format_type: s
      },
      onError: i
    }, n)
  };
async function j(e) {
  let t = await (0, D.readFileAsBase64)(e),
    l = new Image;
  l.src = t, await l.decode();
  let a = (0, _.downsizeImage)(l, 320, 320);
  return (0, D.dataUrlToFile)(a, e.name, e.type)
}

function K(e) {
  var t, l, n, _, v, y, H, K;
  let {
    transitionState: b,
    onClose: B,
    guildId: k,
    sticker: V
  } = e, z = (0, o.useStateFromStores)([f.default], () => f.default.theme), W = (0, o.useStateFromStores)([c.default], () => (null == V ? void 0 : V.tags) != null ? c.default.getCustomEmojiById(V.tags) : null), X = null !== (l = null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== l && l, Y = X ? N.STAFF_MAX_STICKER_FILE_SIZE : N.MAX_STICKER_FILE_SIZE, [Z, q] = i.useState(null), [J, Q] = i.useState(null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : ""), [$, ee] = i.useState({
    file: null,
    filename: null !== (_ = (0, S.getFilenameForSticker)(V)) && void 0 !== _ ? _ : ""
  }), [et, el] = i.useState(null == W ? void 0 : W.id), [ea, ei] = i.useState(null !== (v = null == W ? void 0 : W.name) && void 0 !== v ? v : null == V ? void 0 : V.tags), [en, es] = i.useState(null !== (y = null == V ? void 0 : V.description) && void 0 !== y ? y : ""), [er, eo] = i.useState(!1), [eu, ed] = i.useState(null), ec = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(k)), eE = (null == ec ? void 0 : ec.hasFeature(C.GuildFeatures.PARTNERED)) || (null == ec ? void 0 : ec.hasFeature(C.GuildFeatures.VERIFIED)), eI = null != V, e_ = eI || (null == $ ? void 0 : $.file) != null, ef = 0 === en.length || en.length >= 2 && en.length <= 100, eT = !er && (null == eu ? void 0 : eu.isBlocking) !== !0 && J.length >= 2 && (null != et || null != ea || (null == V ? void 0 : V.tags) != null && (null == V ? void 0 : V.tags) !== "") && e_ && ef, eh = async e => {
    var t;
    if (null == e) return;
    let l = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
    if (!P.has(l)) {
      ed({
        message: M.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
        isBlocking: !0
      });
      return
    }
    let a = e;
    if ("image/png" === l && e.size > Y && !await (0, D.isPNGAnimated)(e)) {
      a = await j(e);
      let t = a.size > Y;
      g.default.track(C.AnalyticEvents.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: a.size,
        resized_file_too_big: t
      })
    }
    if (a.size > Y) {
      ed({
        message: M.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
          maxSize: (0, p.formatKbSize)(Y, {
            useKibibytes: !0
          })
        }),
        isBlocking: null == $.file
      }), g.default.track(C.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: a.size,
        filetype: l
      });
      return
    }
    let i = (0, S.getStickerFormatTypeFromFileType)(a.type),
      n = i === O.StickerFormat.LOTTIE;
    if (n) {
      if (!eE) {
        ed({
          message: M.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
            articleURL: R.default.getArticleURL(C.HelpdeskArticles.STICKERS_UPLOAD)
          }),
          isBlocking: !0
        });
        return
      }
      let e = new FileReader;
      e.addEventListener("load", () => {
        q({
          id: (0, r.v4)(),
          formatType: i,
          content: e.result
        }), ed(null)
      }), e.readAsText(a)
    } else {
      let e = await (0, D.readFileAsBase64)(a);
      q({
        id: (0, r.v4)(),
        formatType: i,
        content: e
      }), ed(null)
    }
    ee({
      file: a,
      filename: a.name
    })
  }, em = async e => {
    var t, l, a, i, n, s;
    e.preventDefault();
    let r = null !== (l = null !== (t = null != et ? et : ea) && void 0 !== t ? t : null == V ? void 0 : V.tags) && void 0 !== l ? l : "";
    try {
      if (eo(!0), eI) await (0, L.updateGuildSticker)(k, null !== (a = null == V ? void 0 : V.id) && void 0 !== a ? a : "", {
        name: J,
        tags: r,
        description: en
      });
      else {
        ;
        let e = new FormData;
        e.append("name", J), e.append("tags", r), e.append("description", en), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), s = null !== (n = null === (i = $.file) || void 0 === i ? void 0 : i.type) && void 0 !== n ? n : "", g.default.track(C.AnalyticEvents.STICKER_UPLOAD_STARTED, {
          filetype: s
        }), await (0, L.createGuildSticker)(k, e), x(!0)
      }
      B()
    } catch (e) {
      ed({
        message: e.body.message,
        isBlocking: !1
      }), x(!1, e.body.message)
    } finally {
      eo(!1)
    }
  }, eA = i.useCallback(() => {
    ed({
      message: M.default.Messages.GUILD_STICKER_INVALID_STICKER,
      isBlocking: !0
    })
  }, []), eg = F({
    sticker: V,
    previewData: Z,
    onStickerError: eA
  }), ep = eE ? M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
  return (0, a.jsxs)(d.ModalRoot, {
    transitionState: b,
    "aria-labelledby": "STICKER_UPLOAD_MODAL",
    className: U.modal,
    children: [(0, a.jsx)(d.ModalCloseButton, {
      onClick: B,
      className: U.modalClose
    }), (0, a.jsxs)("form", {
      onSubmit: em,
      className: U.form,
      children: [(0, a.jsxs)(d.ModalContent, {
        className: U.modalContent,
        children: [(0, a.jsxs)(d.ModalHeader, {
          direction: m.default.Direction.VERTICAL,
          separator: !1,
          className: U.modalHeader,
          children: [(0, a.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            className: U.modalHeaderTitle,
            children: M.default.Messages.GUILD_STICKER_UPLOAD_TITLE
          }), (0, a.jsx)(d.Text, {
            variant: "text-md/normal",
            children: ep.format({
              fileSize: (0, p.formatKbSize)(N.MAX_STICKER_FILE_SIZE, {
                useKibibytes: !0
              })
            })
          })]
        }), (0, a.jsx)(d.FormSection, {
          title: M.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
          className: U.formItem,
          children: (0, a.jsx)(G, {
            stickerPreview: eg
          })
        }), (0, a.jsxs)(d.FormSection, {
          className: s(U.formItem, U.formItemRow),
          children: [(0, a.jsx)(d.FormItem, {
            title: eI ? M.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : M.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
            required: !0,
            className: U.formItemRowChild,
            children: eI ? (0, a.jsx)(d.TextInput, {
              disabled: !0,
              value: null !== (H = null == $ ? void 0 : $.filename) && void 0 !== H ? H : ""
            }) : (0, a.jsx)(I.default, {
              buttonText: M.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
              filters: w,
              filename: null !== (K = null == $ ? void 0 : $.filename) && void 0 !== K ? K : "",
              placeholder: M.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
              onFileSelect: eh
            })
          }), (0, a.jsx)(E.default, {
            className: U.formItemRowChild,
            guildId: k,
            emojiId: et,
            emojiName: ea,
            setEmojiId: el,
            setEmojiName: ei,
            shouldUpdateBothEmojiFields: !0
          })]
        }), (0, a.jsx)(d.FormItem, {
          title: M.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
          required: !0,
          className: U.formItem,
          children: (0, a.jsx)(d.TextInput, {
            value: J,
            onChange: Q,
            placeholder: M.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
            maxLength: 30
          })
        }), (0, a.jsxs)("div", {
          className: U.formItem,
          children: [(0, a.jsxs)(d.FormTitle, {
            children: [M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, a.jsx)(d.Tooltip, {
              text: M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
              children: e => (0, a.jsx)(A.default, {
                className: U.infoIcon,
                ...e
              })
            })]
          }), (0, a.jsx)(d.TextArea, {
            value: en,
            onChange: es,
            placeholder: M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
            maxLength: 100
          })]
        }), null != eu && (0, a.jsx)(d.Text, {
          className: U.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: eu.message
        })]
      }), (0, a.jsxs)(d.ModalFooter, {
        className: U.modalFooter,
        children: [(0, a.jsx)(d.Button, {
          type: "submit",
          disabled: !eT,
          children: eI ? M.default.Messages.GUILD_STICKERS_UPDATE : M.default.Messages.UPLOAD
        }), (0, a.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: (0, u.isThemeLight)(z) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
          onClick: B,
          children: M.default.Messages.NEVERMIND
        })]
      })]
    })]
  })
}