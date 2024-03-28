"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("399606"),
  s = n("524437"),
  i = n("481060"),
  r = n("239091"),
  o = n("765585"),
  u = n("819640"),
  d = n("556296"),
  c = n("529653"),
  f = n("976401"),
  h = n("13140"),
  C = n("924557"),
  p = n("435064"),
  m = n("39604"),
  g = n("981631"),
  E = n("689938"),
  S = n("525728");

function _(e) {
  (0, r.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.e("21960").then(n.bind(n, "999466"));
    return t => (0, l.jsx)(e, {
      ...t
    })
  })
}

function I() {
  (0, m.saveClip)()
}
let N = e => {
  let {
    keybindString: t,
    children: n
  } = e, a = (e, t) => {
    e.stopPropagation(), e.preventDefault(), null == t || t()
  };
  return (0, l.jsx)(i.Popout, {
    shouldShow: !1,
    position: "top",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, l.jsx)(o.default, {
        dismissibleContent: s.DismissibleContent.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
        shouldUseHorizontalButtons: !0,
        inlineArt: !0,
        artClassName: S.clipsEducationArt,
        position: "top",
        header: (0, l.jsx)("div", {
          className: S.header,
          children: E.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format({
            keybind: t,
            keybindHook: () => (0, l.jsx)("span", {
              className: S.keybindHintKeys,
              children: (0, l.jsx)(i.KeyCombo, {
                className: S.keybindShortcut,
                shortcut: t
              })
            })
          })
        }),
        headerClassName: S.clipsEducationHeader,
        body: (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: S.bodyText,
            children: E.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format({
              keybindHook: () => (0, l.jsx)("div", {
                className: S.keyCombo,
                children: t
              }),
              keybind: t
            })
          })
        }),
        onClose: e => {
          a(e, n)
        }
      })
    },
    children: () => n
  })
};
t.default = () => {
  let e = (0, a.useStateFromStores)([u.default], () => u.default.hasLayers()),
    t = (0, C.useEnableClips)(),
    {
      clipsEnabled: n,
      isAtMaxSavingClipsOperations: s
    } = (0, a.useStateFromStoresObject)([p.default], () => ({
      clipsEnabled: p.default.getSettings().clipsEnabled,
      isAtMaxSavingClipsOperations: p.default.getIsAtMaxSaveClipOperations()
    })),
    i = (0, a.useStateFromStores)([d.default], () => d.default.getKeybindForAction(g.GlobalKeybindActions.SAVE_CLIP));
  if (!(t && n) || null == i || e) return null;
  let r = h.toString(i.shortcut, !0);
  return (0, l.jsx)(N, {
    keybindString: r,
    children: (0, l.jsx)(f.default, {
      disabled: s,
      tooltipText: null != i ? E.default.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({
        hotkey: h.toString(null == i ? void 0 : i.shortcut, !0)
      }) : E.default.Messages.CLIPS_EDIT_SAVE_CLIP,
      onClick: I,
      onContextMenu: _,
      icon: c.default
    })
  })
}