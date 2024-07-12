n.d(t, {
  AF: function() {
return g;
  },
  NU: function() {
return f;
  },
  oL: function() {
return m;
  },
  xH: function() {
return p;
  }
}), n(47120);
var i = n(652874),
  s = n(781402),
  o = n(430742),
  a = n(752305),
  l = n(592125),
  r = n(703558),
  c = n(883429),
  u = n(228392);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class h {
  constructor(e, t, n) {
var i, s, h;
d(this, 'channelId', void 0), d(this, 'set', void 0), d(this, 'get', void 0), d(this, 'editorHeight', void 0), d(this, 'editorAdditionRowHeight', void 0), d(this, 'listViewCardHeights', void 0), d(this, 'cardHeightVersion', void 0), d(this, 'nameError', void 0), d(this, 'messageError', void 0), d(this, 'appliedTags', void 0), d(this, 'popoutOpen', void 0), d(this, 'guidelinesOpen', void 0), d(this, 'previewing', void 0), d(this, 'onboardingExpanded', void 0), d(this, 'submitting', void 0), d(this, 'formOpen', void 0), d(this, 'name', void 0), d(this, 'textAreaState', void 0), d(this, 'hasClickedForm', void 0), d(this, 'titleFocused', void 0), d(this, 'bodyFocused', void 0), d(this, 'setEditorHeight', void 0), d(this, 'setEditorAdditionRowHeight', void 0), d(this, 'setCardHeight', void 0), d(this, 'setNameError', void 0), d(this, 'setMessageError', void 0), d(this, 'toggleAppliedTag', void 0), d(this, 'setPopoutOpen', void 0), d(this, 'setGuidelinesOpen', void 0), d(this, 'setPreviewing', void 0), d(this, 'setSubmitting', void 0), d(this, 'setFormOpen', void 0), d(this, 'setOnboardingExpanded', void 0), d(this, 'setTitleFocused', void 0), d(this, 'setBodyFocused', void 0), d(this, 'setName', void 0), d(this, 'setTextAreaState', void 0), d(this, 'setHasClickedForm', void 0), d(this, 'resetFormState', void 0), d(this, 'setFormOpenFromUserAction', void 0), this.channelId = e, this.set = t, this.get = n, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set(), this.popoutOpen = !1, this.guidelinesOpen = !1, this.previewing = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = '', this.textAreaState = (0, a.eK)(''), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.setEditorHeight = e => {
  this.set({
    editorHeight: e
  });
}, this.setEditorAdditionRowHeight = e => {
  this.set({
    editorAdditionRowHeight: e
  });
}, this.setCardHeight = (e, t) => {
  let {
    listViewCardHeights: n,
    cardHeightVersion: i
  } = this.get();
  n[e] !== t && (n[e] = t, this.set({
    cardHeightVersion: i + 1
  }));
}, this.setNameError = e => {
  this.set({
    nameError: e
  });
}, this.setMessageError = e => {
  this.set({
    messageError: e
  });
}, this.toggleAppliedTag = e => {
  let {
    appliedTags: t
  } = this.get();
  (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({
    appliedTags: t
  }), o.Z.changeThreadSettings(this.channelId, {
    appliedTags: t
  });
}, this.setPopoutOpen = e => {
  this.set({
    popoutOpen: e
  });
}, this.setGuidelinesOpen = e => {
  this.set({
    guidelinesOpen: e
  });
}, this.setPreviewing = e => {
  this.set({
    previewing: e
  });
}, this.setSubmitting = e => {
  this.set({
    submitting: e
  });
}, this.setFormOpen = e => {
  this.set({
    formOpen: e
  }), c.Z.clearForumSearch(this.channelId);
}, this.setOnboardingExpanded = e => {
  this.set({
    onboardingExpanded: e
  });
}, this.setTitleFocused = e => {
  this.set({
    titleFocused: e
  });
}, this.setBodyFocused = e => {
  this.set({
    bodyFocused: e
  });
}, this.setName = e => {
  this.set({
    name: e
  }), o.Z.changeThreadSettings(this.channelId, {
    name: e
  });
}, this.setTextAreaState = e => {
  this.set({
    textAreaState: e
  }), o.Z.saveDraft(this.channelId, e.textValue, r.d.FirstThreadMessage);
}, this.setHasClickedForm = e => {
  this.set({
    hasClickedForm: e
  });
}, this.resetFormState = () => {
  let e = l.Z.getChannel(this.channelId),
    t = null == e ? '' : null == e.template ? '' : e.template.trim();
  this.set({
    name: '',
    textAreaState: (0, a.eK)(t),
    appliedTags: new Set(),
    hasClickedForm: !1
  }), c.Z.clearForumSearch(this.channelId);
}, this.setFormOpenFromUserAction = () => {
  if (this.hasClickedForm)
    return;
  let e = l.Z.getChannel(this.channelId);
  null != e && (0, u.HR)({
    guildId: e.guild_id,
    channelId: this.channelId
  }), this.set({
    hasClickedForm: !0,
    formOpen: !0
  }), c.Z.clearForumSearch(this.channelId);
};
let m = l.Z.getChannel(e);
if (null == m)
  return;
let p = null !== (i = r.Z.getThreadSettings(m.id)) && void 0 !== i ? i : {},
  g = null == m.template ? '' : m.template.trim(),
  f = r.Z.getDraft(m.id, r.d.FirstThreadMessage),
  T = (0, a.eK)(null != f && '' !== f.trim() ? f : g);
this.name = null !== (s = p.name) && void 0 !== s ? s : '', h = new Set(p.appliedTags), this.appliedTags = void 0 !== h ? h : new Set(), this.formOpen = this.name.length > 0, this.textAreaState = T;
  }
}
let {
  Provider: m,
  useStore: p,
  useStoreApi: g
} = (0, s.Z)();

function f(e) {
  return (0, i.Z)((t, n) => new h(e.id, t, n));
}