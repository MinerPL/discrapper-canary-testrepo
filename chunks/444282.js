"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(166459),
  u = n(53281),
  _ = n(476326),
  d = n(703558),
  c = n(117530),
  E = n(859235),
  I = n(898463),
  T = n(981631),
  h = n(790544),
  S = n(451328);

function f(e) {
  let {
    channelId: t,
    option: n,
    keyboardModeEnabled: s
  } = e, f = r.useRef(null), [N, A] = r.useState(!1), m = c.Z.getUpload(t, n.name, d.d.SlashCommand), O = r.useRef(null), R = r.useCallback(() => {
    A(!0)
  }, []), C = r.useCallback(() => {
    A(!1)
  }, []), p = r.useCallback(e => {
    var i;
    A(!1);
    let r = {
      id: n.name,
      file: null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.files[0],
      platform: _.ow.WEB
    };
    l.Z.setFile({
      channelId: t,
      id: n.name,
      file: r,
      draftType: d.d.SlashCommand
    })
  }, [t, n]);
  return (r.useEffect(() => {
    let e = O.current;
    return null == m && (null == e || e.addEventListener("dragover", R, !1), null == e || e.addEventListener("dragleave", C, !1), null == e || e.addEventListener("drop", p, !1)), () => {
      null == e || e.removeEventListener("dragover", R, !1), null == e || e.removeEventListener("dragleave", C, !1), null == e || e.removeEventListener("drop", p, !1)
    }
  }, [m, R, C, p]), null != m) ? (0, i.jsx)(I.Z, {
    channelId: t,
    upload: m,
    keyboardModeEnabled: s,
    draftType: d.d.SlashCommand,
    label: (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsxs)(a.Text, {
        tag: "span",
        variant: "text-md/normal",
        children: [n.name, ": "]
      }), (0, i.jsx)(a.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-brand",
        children: m.filename
      })]
    }),
    canEdit: !1
  }) : (0, i.jsxs)(E.Z, {
    id: n.name,
    channelId: t,
    keyboardModeEnabled: s,
    onKeyDown: e => {
      if (e.which === T.yXg.ENTER) {
        var t;
        e.preventDefault(), null === (t = f.current) || void 0 === t || t.activateUploadDialogue()
      }
    },
    className: o()(h.emptyOption, {
      [h.emptyOptionActive]: N
    }),
    draftType: d.d.SlashCommand,
    ref: O,
    children: [(0, i.jsx)("span", {
      className: o()(h.optionName, {
        [h.optionNameActive]: N
      }),
      children: n.name
    }), (0, i.jsx)(a.Clickable, {
      className: h.clickContainer,
      onClick: () => {
        var e;
        return null === (e = f.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
      },
      children: (0, i.jsxs)("div", {
        className: h.commandOptionContainer,
        children: [(0, i.jsx)("img", {
          src: S,
          className: h.optionIcon,
          alt: ""
        }), (0, i.jsx)(a.Text, {
          className: h.optionHelp,
          variant: "text-sm/normal",
          children: "Drag and drop or click to upload file"
        }), (0, i.jsx)(u.Z, {
          ref: f,
          onChange: e => {
            var i, r;
            if (null != t && (null === (r = e.currentTarget) || void 0 === r ? void 0 : null === (i = r.files) || void 0 === i ? void 0 : i[0]) != null) {
              let i = {
                id: n.name,
                file: e.currentTarget.files[0],
                platform: _.ow.WEB
              };
              l.Z.setFile({
                channelId: t,
                id: n.name,
                file: i,
                draftType: d.d.SlashCommand
              }), e.currentTarget.value = ""
            }
          },
          multiple: !1,
          tabIndex: -1,
          "aria-hidden": !0,
          className: h.fileInput
        })]
      })
    })]
  })
}