"use strict";
i.r(t), i.d(t, {
  getFormFieldBuilderComponent: function() {
    return m
  },
  openEmptyFormFieldModal: function() {
    return E
  }
});
var a = i("735250");
i("470079");
var l = i("392711"),
  n = i("481060"),
  s = i("246364"),
  r = i("405545"),
  o = i("382574"),
  d = i("279988"),
  c = i("786127"),
  u = i("981631"),
  f = i("689938");

function m(e) {
  let {
    dropHoveredIndex: t,
    formField: u,
    guild: m,
    index: E,
    isDragEnabled: x,
    submittedGuildJoinRequestsCount: h,
    removeFormField: T,
    updateFormField: M,
    updateFormFieldOrder: F
  } = e, _ = async () => {
    await T(E)
  }, v = async e => {
    await M(E, e)
  }, R = async (e, t, i) => {
    await F(e, t, i)
  }, p = (0, l.uniqueId)(), C = t === E, N = {
    key: p,
    index: E,
    isDragEnabled: x,
    isDropHovered: C,
    onEdit: () => {
      0 === h ? I(u, v, m) : (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("74673")]).then(i.bind(i, "394045"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: m.id,
          submittedGuildJoinRequestsCount: h,
          onConfirm: () => I(u, v, m)
        })
      })
    },
    onRemove: _,
    onDrop: R
  };
  switch (u.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, a.jsx)(d.default, {
        channelId: m.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: u,
        ...N
      });
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, a.jsx)(o.default, {
        formField: u,
        ...N
      });
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, a.jsx)(c.default, {
        formField: u,
        ...N
      });
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, a.jsx)(r.default, {
        formField: u,
        ...N
      });
    default:
      return null
  }
}

function E(e, t, l) {
  let r = {
    onCloseRequest: u.NOOP
  };
  switch (e) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("5945")]).then(i.bind(i, "92451"));
        return i => (0, a.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t,
          guild: l
        })
      }, r);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, a.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, a.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([i.e("99387"), i.e("94064")]).then(i.bind(i, "607569"));
        return i => (0, a.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, r)
  }
}

function I(e, t, l) {
  let r = {
    onCloseRequest: u.NOOP
  };
  switch (e.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, n.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([i.e("99387"), i.e("5945")]).then(i.bind(i, "92451"));
        return i => (0, a.jsx)(n, {
          ...i,
          field: e,
          onSave: t,
          guild: l
        })
      }, r);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: l
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, a.jsx)(l, {
          ...i,
          field: e,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: l
        } = await Promise.all([i.e("99387"), i.e("6595")]).then(i.bind(i, "457042"));
        return i => (0, a.jsx)(l, {
          ...i,
          field: e,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([i.e("99387"), i.e("94064")]).then(i.bind(i, "607569"));
        return i => (0, a.jsx)(l, {
          ...i,
          field: e,
          onSave: t
        })
      }, r)
  }
}