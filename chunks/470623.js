"use strict";
i.r(t), i.d(t, {
  ForumPostComposerStoreProvider: function() {
    return f
  },
  createForumPostComposerStore: function() {
    return g
  },
  useForumPostComposerStore: function() {
    return m
  },
  useForumPostComposerStoreApi: function() {
    return p
  }
}), i("47120");
var n = i("652874"),
  a = i("781402"),
  s = i("430742"),
  l = i("752305"),
  o = i("592125"),
  r = i("703558"),
  u = i("883429"),
  d = i("228392");

function c(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
class h {
  constructor(e, t, i) {
    var n, a, h;
    c(this, "channelId", void 0), c(this, "set", void 0), c(this, "get", void 0), c(this, "editorHeight", void 0), c(this, "editorAdditionRowHeight", void 0), c(this, "listViewCardHeights", void 0), c(this, "cardHeightVersion", void 0), c(this, "nameError", void 0), c(this, "messageError", void 0), c(this, "appliedTags", void 0), c(this, "popoutOpen", void 0), c(this, "guidelinesOpen", void 0), c(this, "previewing", void 0), c(this, "onboardingExpanded", void 0), c(this, "submitting", void 0), c(this, "formOpen", void 0), c(this, "name", void 0), c(this, "textAreaState", void 0), c(this, "hasClickedForm", void 0), c(this, "titleFocused", void 0), c(this, "bodyFocused", void 0), c(this, "setEditorHeight", void 0), c(this, "setEditorAdditionRowHeight", void 0), c(this, "setCardHeight", void 0), c(this, "setNameError", void 0), c(this, "setMessageError", void 0), c(this, "toggleAppliedTag", void 0), c(this, "setPopoutOpen", void 0), c(this, "setGuidelinesOpen", void 0), c(this, "setPreviewing", void 0), c(this, "setSubmitting", void 0), c(this, "setFormOpen", void 0), c(this, "setOnboardingExpanded", void 0), c(this, "setTitleFocused", void 0), c(this, "setBodyFocused", void 0), c(this, "setName", void 0), c(this, "setTextAreaState", void 0), c(this, "setHasClickedForm", void 0), c(this, "resetFormState", void 0), c(this, "setFormOpenFromUserAction", void 0), this.channelId = e, this.set = t, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = !1, this.guidelinesOpen = !1, this.previewing = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = "", this.textAreaState = (0, l.createState)(""), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.setEditorHeight = e => {
      this.set({
        editorHeight: e
      })
    }, this.setEditorAdditionRowHeight = e => {
      this.set({
        editorAdditionRowHeight: e
      })
    }, this.setCardHeight = (e, t) => {
      let {
        listViewCardHeights: i,
        cardHeightVersion: n
      } = this.get();
      i[e] !== t && (i[e] = t, this.set({
        cardHeightVersion: n + 1
      }))
    }, this.setNameError = e => {
      this.set({
        nameError: e
      })
    }, this.setMessageError = e => {
      this.set({
        messageError: e
      })
    }, this.toggleAppliedTag = e => {
      let {
        appliedTags: t
      } = this.get();
      (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({
        appliedTags: t
      }), s.default.changeThreadSettings(this.channelId, {
        appliedTags: t
      })
    }, this.setPopoutOpen = e => {
      this.set({
        popoutOpen: e
      })
    }, this.setGuidelinesOpen = e => {
      this.set({
        guidelinesOpen: e
      })
    }, this.setPreviewing = e => {
      this.set({
        previewing: e
      })
    }, this.setSubmitting = e => {
      this.set({
        submitting: e
      })
    }, this.setFormOpen = e => {
      this.set({
        formOpen: e
      }), u.default.clearForumSearch(this.channelId)
    }, this.setOnboardingExpanded = e => {
      this.set({
        onboardingExpanded: e
      })
    }, this.setTitleFocused = e => {
      this.set({
        titleFocused: e
      })
    }, this.setBodyFocused = e => {
      this.set({
        bodyFocused: e
      })
    }, this.setName = e => {
      this.set({
        name: e
      }), s.default.changeThreadSettings(this.channelId, {
        name: e
      })
    }, this.setTextAreaState = e => {
      this.set({
        textAreaState: e
      }), s.default.saveDraft(this.channelId, e.textValue, r.DraftType.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = o.default.getChannel(this.channelId),
        t = null == e ? "" : null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, l.createState)(t),
        appliedTags: new Set,
        hasClickedForm: !1
      }), u.default.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = o.default.getChannel(this.channelId);
      null != e && (0, d.trackForumCreateNewPostStarted)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: !0,
        formOpen: !0
      }), u.default.clearForumSearch(this.channelId)
    };
    let f = o.default.getChannel(e);
    if (null == f) return;
    let m = null !== (n = r.default.getThreadSettings(f.id)) && void 0 !== n ? n : {},
      p = null == f.template ? "" : f.template.trim(),
      g = r.default.getDraft(f.id, r.DraftType.FirstThreadMessage),
      T = (0, l.createState)(null != g && "" !== g.trim() ? g : p);
    this.name = null !== (a = m.name) && void 0 !== a ? a : "", h = new Set(m.appliedTags), this.appliedTags = void 0 !== h ? h : new Set, this.formOpen = this.name.length > 0, this.textAreaState = T
  }
}
let {
  Provider: f,
  useStore: m,
  useStoreApi: p
} = (0, a.default)();

function g(e) {
  return (0, n.default)((t, i) => new h(e.id, t, i))
}