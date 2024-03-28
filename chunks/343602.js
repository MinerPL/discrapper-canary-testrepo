"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var l = n("735250"),
  u = n("470079"),
  s = n("136035"),
  a = n("442837"),
  i = n("481060"),
  o = n("239091"),
  c = n("857595"),
  d = n("607070"),
  r = n("886036"),
  f = n("877794"),
  S = n("695346"),
  E = n("626135"),
  p = n("358085"),
  M = n("998502"),
  g = n("887490"),
  m = n("981631"),
  C = n("689938");

function T(e) {
  var t, n, T, b, h, _, A, I, v;
  let {
    text: x,
    editor: L,
    target: k,
    onHeightUpdate: O,
    onSelect: j
  } = e, G = u.useCallback(() => {
    (0, o.closeContextMenu)(() => {
      s.ReactEditor.focus(L), setTimeout(() => g.EditorUtils.focus(L), 0)
    })
  }, [L]), [N, R] = (0, f.default)({
    text: x,
    target: k,
    onHeightUpdate: O
  }), y = (0, a.useStateFromStores)([d.default], () => d.default.isSubmitButtonEnabled), U = (0, r.default)(), D = S.ShowCommandSuggestions.useSetting();
  if (!p.isPlatformEmbedded) return null;
  let H = null !== (A = null === (n = L.chatInputType) || void 0 === n ? void 0 : null === (t = n.commands) || void 0 === t ? void 0 : t.enabled) && void 0 !== A && A,
    P = null !== (I = null === (b = L.chatInputType) || void 0 === b ? void 0 : null === (T = b.stickers) || void 0 === T ? void 0 : T.autoSuggest) && void 0 !== I && I,
    W = null !== (v = null === (_ = L.chatInputType) || void 0 === _ ? void 0 : null === (h = _.submit) || void 0 === h ? void 0 : h.button) && void 0 !== v && v,
    K = H || P,
    X = "" !== x ? [(0, l.jsx)(i.MenuItem, {
      id: "copy",
      label: C.default.Messages.COPY,
      hint: (0, p.isMac)() ? "⌘C" : "Ctrl+C",
      action: () => setTimeout(() => M.default.copy(), 0)
    }, "copy"), (0, l.jsx)(i.MenuItem, {
      id: "cut",
      label: C.default.Messages.CUT,
      hint: (0, p.isMac)() ? "⌘X" : "Ctrl+X",
      action: () => setTimeout(() => M.default.cut(), 0)
    }, "cut")] : null,
    w = (0, l.jsx)(i.MenuCheckboxItem, {
      id: "command-suggestions",
      label: C.default.Messages.SUGGEST_SLASH_COMMANDS,
      checked: D,
      action: () => {
        let e = !D;
        S.ShowCommandSuggestions.updateSetting(e), E.default.track(m.AnalyticEvents.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
          enabled: e,
          location: {
            object: m.AnalyticsObjects.CONTEXT_MENU
          }
        })
      }
    });
  return (0, l.jsxs)(i.Menu, {
    navId: "textarea-context",
    onClose: G,
    "aria-label": C.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
    onSelect: j,
    children: [K && (0, l.jsxs)(i.MenuItem, {
      id: "suggestions",
      label: C.default.Messages.TEXTAREA_ACTIONS_SUGGESTIONS,
      children: [P && U, H && w]
    }), W && (0, l.jsx)(i.MenuCheckboxItem, {
      id: "submit-button",
      label: C.default.Messages.TEXTAREA_ACTIONS_SUBMIT_BUTTON,
      checked: y,
      action: () => {
        (0, c.toggleSubmitButton)()
      }
    }), (0, l.jsx)(i.MenuGroup, {
      children: N
    }), (0, l.jsx)(i.MenuGroup, {
      children: R
    }), (0, l.jsxs)(i.MenuGroup, {
      children: [X, (0, l.jsx)(i.MenuItem, {
        id: "paste",
        label: C.default.Messages.PASTE,
        hint: (0, p.isMac)() ? "⌘V" : "Ctrl+V",
        action: () => setTimeout(() => M.default.paste(), 0)
      })]
    })]
  })
}