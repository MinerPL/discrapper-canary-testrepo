s.r(l), s.d(l, {
  default: function() {
return B;
  }
}), s(47120);
var t = s(735250),
  n = s(470079),
  i = s(120356),
  a = s.n(i),
  o = s(772848),
  r = s(442837),
  u = s(780384),
  d = s(481060),
  c = s(339085),
  I = s(349709),
  m = s(763610),
  _ = s(197712),
  E = s(210887),
  f = s(430824),
  g = s(594174),
  L = s(285952),
  T = s(626135),
  v = s(424218),
  D = s(63063),
  x = s(956664),
  p = s(268350),
  C = s(373228),
  R = s(378233),
  S = s(419922),
  j = s(611480),
  h = s(981631),
  N = s(689938),
  U = s(733124),
  Z = s(434227),
  P = s(600126);
let O = new Set([
'application/json',
'image/png',
'image/apng',
'image/gif'
  ]),
  M = [{
name: 'Sticker file',
extensions: [
  'json',
  'png',
  'apng',
  'gif'
]
  }];

function A(e, l) {
  T.default.track(h.rMx.STICKER_UPLOAD_COMPLETED, {
successful: e,
error: null != l ? l : ''
  });
}
let K = e => {
let {
  stickerPreview: l
} = e;
return (0, t.jsxs)('div', {
  className: U.preview,
  children: [
    (0, t.jsx)('div', {
      className: U.previewDark,
      children: null != l ? l : (0, t.jsx)('img', {
        src: Z,
        alt: N.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
      })
    }),
    (0, t.jsx)('div', {
      className: U.previewLight,
      children: null != l ? l : (0, t.jsx)('img', {
        src: P,
        alt: N.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
      })
    })
  ]
});
  },
  k = e => {
let {
  sticker: l,
  previewData: s,
  onStickerError: n
} = e;
if (null != l)
  return (0, t.jsx)(S.ZP, {
    size: 160,
    sticker: l
  });
if (null == s)
  return null;
let {
  id: i,
  formatType: a,
  content: o
} = s;
return (0, t.jsx)(S.ZP, {
  assetData: o,
  fileUri: o,
  size: 160,
  sticker: {
    name: i,
    description: '',
    id: i,
    pack_id: '',
    format_type: a
  },
  onError: n
}, i);
  };
async function b(e) {
  let l = await (0, x.fD)(e),
s = new Image();
  s.src = l, await s.decode();
  let t = (0, _.Ae)(s, 320, 320);
  return (0, x.Bo)(t, e.name, e.type);
}

function B(e) {
  var l, s, i, _, S, Z, P, B;
  let {
transitionState: G,
onClose: y,
guildId: w,
sticker: F
  } = e, z = (0, r.e7)([E.Z], () => E.Z.theme), H = (0, r.e7)([c.Z], () => (null == F ? void 0 : F.tags) != null ? c.Z.getCustomEmojiById(F.tags) : null), V = null !== (s = null === (l = g.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) && void 0 !== s && s ? j.OC : j.Ht, [W, q] = n.useState(null), [Y, J] = n.useState(null !== (i = null == F ? void 0 : F.name) && void 0 !== i ? i : ''), [X, Q] = n.useState({
file: null,
filename: null !== (_ = (0, R._V)(F)) && void 0 !== _ ? _ : ''
  }), [$, ee] = n.useState(null == H ? void 0 : H.id), [el, es] = n.useState(null !== (S = null == H ? void 0 : H.name) && void 0 !== S ? S : null == F ? void 0 : F.tags), [et, en] = n.useState(null !== (Z = null == F ? void 0 : F.description) && void 0 !== Z ? Z : ''), [ei, ea] = n.useState(!1), [eo, er] = n.useState(null), eu = (0, r.e7)([f.Z], () => f.Z.getGuild(w)), ed = (null == eu ? void 0 : eu.hasFeature(h.oNc.PARTNERED)) || (null == eu ? void 0 : eu.hasFeature(h.oNc.VERIFIED)), ec = null != F, eI = ec || (null == X ? void 0 : X.file) != null, em = 0 === et.length || et.length >= 2 && et.length <= 100, e_ = !ei && (null == eo ? void 0 : eo.isBlocking) !== !0 && Y.length >= 2 && (null != $ || null != el || (null == F ? void 0 : F.tags) != null && (null == F ? void 0 : F.tags) !== '') && eI && em, eE = async e => {
var l;
if (null == e)
  return;
let s = null === (l = e.type) || void 0 === l ? void 0 : l.split(';')[0];
if (!O.has(s)) {
  er({
    message: N.Z.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
    isBlocking: !0
  });
  return;
}
let t = e;
if ('image/png' === s && e.size > V && !await (0, x.c0)(e)) {
  let l = (t = await b(e)).size > V;
  T.default.track(h.rMx.STICKER_FILE_RESIZED, {
    original_file_size_bytes: e.size,
    resized_file_size_bytes: t.size,
    resized_file_too_big: l
  });
}
if (t.size > V) {
  er({
    message: N.Z.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
      maxSize: (0, v.IC)(V, {
        useKibibytes: !0
      })
    }),
    isBlocking: null == X.file
  }), T.default.track(h.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
    size: t.size,
    filetype: s
  });
  return;
}
let n = (0, R.Zv)(t.type);
if (n === C.u3.LOTTIE) {
  if (!ed) {
    er({
      message: N.Z.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
        articleURL: D.Z.getArticleURL(h.BhN.STICKERS_UPLOAD)
      }),
      isBlocking: !0
    });
    return;
  }
  let e = new FileReader();
  e.addEventListener('load', () => {
    q({
      id: (0, o.Z)(),
      formatType: n,
      content: e.result
    }), er(null);
  }), e.readAsText(t);
} else {
  let e = await (0, x.fD)(t);
  q({
    id: (0, o.Z)(),
    formatType: n,
    content: e
  }), er(null);
}
Q({
  file: t,
  filename: t.name
});
  }, ef = async e => {
var l, s, t, n, i, a;
e.preventDefault();
let o = null !== (s = null !== (l = null != $ ? $ : el) && void 0 !== l ? l : null == F ? void 0 : F.tags) && void 0 !== s ? s : '';
try {
  if (ea(!0), ec)
    await (0, p.Jf)(w, null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : '', {
      name: Y,
      tags: o,
      description: et
    });
  else {
    ;
    let e = new FormData();
    e.append('name', Y), e.append('tags', o), e.append('description', et), (null == X ? void 0 : X.file) != null && e.append('file', X.file), a = null !== (i = null === (n = X.file) || void 0 === n ? void 0 : n.type) && void 0 !== i ? i : '', T.default.track(h.rMx.STICKER_UPLOAD_STARTED, {
      filetype: a
    }), await (0, p.lY)(w, e), A(!0);
  }
  y();
} catch (e) {
  er({
    message: e.body.message,
    isBlocking: !1
  }), A(!1, e.body.message);
} finally {
  ea(!1);
}
  }, eg = k({
sticker: F,
previewData: W,
onStickerError: n.useCallback(() => {
  er({
    message: N.Z.Messages.GUILD_STICKER_INVALID_STICKER,
    isBlocking: !0
  });
}, [])
  }), eL = ed ? N.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : N.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
  return (0, t.jsxs)(d.ModalRoot, {
transitionState: G,
'aria-labelledby': 'STICKER_UPLOAD_MODAL',
className: U.modal,
children: [
  (0, t.jsx)(d.ModalCloseButton, {
    onClick: y,
    className: U.modalClose
  }),
  (0, t.jsxs)('form', {
    onSubmit: ef,
    className: U.form,
    children: [
      (0, t.jsxs)(d.ModalContent, {
        className: U.modalContent,
        children: [
          (0, t.jsxs)(d.ModalHeader, {
            direction: L.Z.Direction.VERTICAL,
            separator: !1,
            className: U.modalHeader,
            children: [
              (0, t.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                className: U.modalHeaderTitle,
                children: N.Z.Messages.GUILD_STICKER_UPLOAD_TITLE
              }),
              (0, t.jsx)(d.Text, {
                variant: 'text-md/normal',
                children: eL.format({
                  fileSize: (0, v.IC)(j.Ht, {
                    useKibibytes: !0
                  })
                })
              })
            ]
          }),
          (0, t.jsx)(d.FormSection, {
            title: N.Z.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
            className: U.formItem,
            children: (0, t.jsx)(K, {
              stickerPreview: eg
            })
          }),
          (0, t.jsxs)(d.FormSection, {
            className: a()(U.formItem, U.formItemRow),
            children: [
              (0, t.jsx)(d.FormItem, {
                title: ec ? N.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : N.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                required: !0,
                className: U.formItemRowChild,
                children: ec ? (0, t.jsx)(d.TextInput, {
                  disabled: !0,
                  value: null !== (P = null == X ? void 0 : X.filename) && void 0 !== P ? P : ''
                }) : (0, t.jsx)(m.Z, {
                  buttonText: N.Z.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                  filters: M,
                  filename: null !== (B = null == X ? void 0 : X.filename) && void 0 !== B ? B : '',
                  placeholder: N.Z.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                  onFileSelect: eE
                })
              }),
              (0, t.jsx)(I.Z, {
                className: U.formItemRowChild,
                guildId: w,
                emojiId: $,
                emojiName: el,
                setEmojiId: ee,
                setEmojiName: es,
                shouldUpdateBothEmojiFields: !0
              })
            ]
          }),
          (0, t.jsx)(d.FormItem, {
            title: N.Z.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
            required: !0,
            className: U.formItem,
            children: (0, t.jsx)(d.TextInput, {
              value: Y,
              onChange: J,
              placeholder: N.Z.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
              maxLength: 30
            })
          }),
          (0, t.jsxs)('div', {
            className: U.formItem,
            children: [
              (0, t.jsxs)(d.FormTitle, {
                children: [
                  N.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE,
                  (0, t.jsx)(d.Tooltip, {
                    text: N.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                    children: e => (0, t.jsx)(d.CircleInformationIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: U.infoIcon,
                      ...e
                    })
                  })
                ]
              }),
              (0, t.jsx)(d.TextArea, {
                value: et,
                onChange: en,
                placeholder: N.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                maxLength: 100
              })
            ]
          }),
          null != eo && (0, t.jsx)(d.Text, {
            className: U.formItem,
            variant: 'text-sm/normal',
            color: 'text-danger',
            children: eo.message
          })
        ]
      }),
      (0, t.jsxs)(d.ModalFooter, {
        className: U.modalFooter,
        children: [
          (0, t.jsx)(d.Button, {
            type: 'submit',
            disabled: !e_,
            children: ec ? N.Z.Messages.GUILD_STICKERS_UPDATE : N.Z.Messages.UPLOAD
          }),
          (0, t.jsx)(d.Button, {
            look: d.Button.Looks.LINK,
            color: (0, u.ap)(z) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
            onClick: y,
            children: N.Z.Messages.NEVERMIND
          })
        ]
      })
    ]
  })
]
  });
}