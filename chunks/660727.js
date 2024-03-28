"use strict";
i.r(a), i("47120");
var l, o, t = i("735250"),
  s = i("470079"),
  n = i("803997"),
  r = i.n(n),
  d = i("207561"),
  c = i("481060"),
  u = i("907040"),
  p = i("906411"),
  f = i("813197"),
  m = i("984933"),
  j = i("153124"),
  v = i("54264"),
  I = i("768581"),
  N = i("956664"),
  _ = i("185923"),
  b = i("689938"),
  h = i("410346"),
  x = i("84717");
(o = l || (l = {})).TAB_ID_FILE_UPLOAD = "tab-id-role-icon-file-upload", o.TAB_ID_EMOJI = "tab-id-role-icon-emoji";

function E() {
  return [{
    name: b.default.Messages.IMAGES,
    extensions: ["jpg", "jpeg", "png"]
  }]
}
async function O(e) {
  let a = (0, I.getEmojiURL)({
      id: e.id,
      animated: !1,
      size: 48,
      forcePNG: !0
    }),
    i = await fetch(a),
    l = await i.blob();
  return await (0, N.readFileAsBase64)(l)
}
a.default = function(e) {
  let {
    guildId: a,
    onUploadIcon: i,
    onSelectUnicodeEmoji: l,
    onClose: o,
    transitionState: n
  } = e, I = (0, j.useUID)(), N = m.default.getDefaultChannel(a), [L, B] = s.useState("tab-id-role-icon-file-upload"), [g, C] = s.useState(!1), M = (0, d.useLazyValue)(E);
  return s.useEffect(() => {
    C(!1)
  }, [L]), (0, t.jsx)(c.ModalRoot, {
    transitionState: n,
    "aria-labelledby": I,
    size: c.ModalSize.MEDIUM,
    className: h.modalRoot,
    children: (0, t.jsxs)("div", {
      className: h.contentWrapper,
      children: [(0, t.jsx)("nav", {
        className: r()(h.nav, {
          [h.navUploadSelected]: "tab-id-role-icon-file-upload" === L
        }),
        children: (0, t.jsxs)("div", {
          className: h.navList,
          role: "tablist",
          "aria-label": "Expression Picker",
          children: [(0, t.jsx)("div", {
            className: h.navItem,
            role: "tab",
            "aria-controls": "tab-id-role-icon-file-upload",
            "aria-selected": "tab-id-role-icon-file-upload" === L,
            children: (0, t.jsx)(c.Button, {
              onClick: () => {
                B("tab-id-role-icon-file-upload")
              },
              "aria-current": "page",
              className: r()(h.navButton, {
                [h.navButtonActive]: "tab-id-role-icon-file-upload" === L
              }),
              look: c.Button.Looks.BLANK,
              size: c.Button.Sizes.NONE,
              children: b.default.Messages.ROLE_ICON_TAB_UPLOAD_IMAGE
            })
          }), (0, t.jsx)("div", {
            className: h.navItem,
            role: "tab",
            "aria-controls": "tab-id-role-icon-emoji",
            "aria-selected": "tab-id-role-icon-emoji" === L,
            children: (0, t.jsx)(c.Button, {
              onClick: () => {
                B("tab-id-role-icon-emoji")
              },
              "aria-current": "page",
              className: r()(h.navButton, {
                [h.navButtonActive]: "tab-id-role-icon-emoji" === L
              }),
              look: c.Button.Looks.BLANK,
              size: c.Button.Sizes.NONE,
              children: b.default.Messages.ROLE_ICON_TAB_EMOJI
            })
          })]
        })
      }), "tab-id-role-icon-file-upload" === L ? (0, t.jsx)(c.ModalContent, {
        children: (0, t.jsxs)("div", {
          className: h.uploadContainer,
          children: [(0, t.jsxs)("div", {
            className: h.uploadIconOuterContainer,
            children: [(0, t.jsx)("img", {
              src: x,
              alt: "sparkles"
            }), (0, t.jsx)("div", {
              className: h.uploadIconInnerContainer,
              children: (0, t.jsx)(v.default, {
                className: h.uploadIcon
              })
            })]
          }), (0, t.jsx)("div", {
            className: h.uploadInfo,
            children: b.default.Messages.ROLE_ICON_UPLOAD_FILES_INFO
          }), (0, t.jsxs)(c.Button, {
            size: c.Button.Sizes.SMALL,
            children: [b.default.Messages.ROLE_ICON_UPLOAD_BROWSE_FILES, (0, t.jsx)(f.default, {
              onChange: e => {
                C(!1), i(e), o()
              },
              onFileSizeError: () => {
                C(!0)
              },
              maxFileSizeBytes: 256e3,
              multiple: !1,
              filters: M
            })]
          }), g ? (0, t.jsx)(c.Text, {
            className: h.uploadError,
            color: "text-danger",
            variant: "text-sm/normal",
            children: b.default.Messages.ROLE_ICON_UPLOAD_FILE_TOO_BIG
          }) : null]
        })
      }) : null, "tab-id-role-icon-emoji" === L ? (0, t.jsx)(u.default, {
        hasTabWrapper: !0,
        closePopout: () => o(),
        onSelectEmoji: async e => {
          if ((null == e ? void 0 : e.id) != null)(null == e ? void 0 : e.type) === p.EmojiTypes.GUILD && i(await O(e));
          else if ((null == e ? void 0 : e.surrogates) != null) {
            var a, t;
            l(null !== (t = null === (a = e.defaultDiversityChild) || void 0 === a ? void 0 : a.surrogates) && void 0 !== t ? t : e.surrogates)
          }
          o()
        },
        pickerIntention: _.EmojiIntention.COMMUNITY_CONTENT,
        channel: N
      }) : null]
    })
  })
}