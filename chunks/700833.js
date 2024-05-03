"use strict";
n.r(t), n.d(t, {
  getFormFieldBuilderComponent: function() {
    return m
  },
  openEmptyFormFieldModal: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var i = n("392711"),
  r = n("481060"),
  s = n("246364"),
  l = n("405545"),
  o = n("382574"),
  c = n("279988"),
  d = n("786127"),
  u = n("981631"),
  f = n("689938");

function m(e) {
  let {
    dropHoveredIndex: t,
    formField: u,
    guild: m,
    index: h,
    isDragEnabled: T,
    submittedGuildJoinRequestsCount: p,
    removeFormField: _,
    updateFormField: C,
    updateFormFieldOrder: g,
    canRemove: x,
    actionsLocation: I
  } = e, v = async () => {
    await _(h)
  }, N = async e => {
    await C(h, e)
  }, S = async (e, t, n) => {
    await g(e, t, n)
  }, A = (0, i.uniqueId)(), R = t === h, M = {
    key: A,
    index: h,
    isDragEnabled: T,
    isDropHovered: R,
    onEdit: () => {
      0 === p ? E(u, N, m) : (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("74673")]).then(n.bind(n, "394045"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: m.id,
          submittedGuildJoinRequestsCount: p,
          onConfirm: () => E(u, N, m)
        })
      })
    },
    onRemove: v,
    onDrop: S,
    canRemove: x,
    actionsLocation: I
  };
  switch (u.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, a.jsx)(c.default, {
        channelId: m.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: u,
        ...M
      });
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, a.jsx)(o.default, {
        formField: u,
        ...M
      });
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, a.jsx)(d.default, {
        formField: u,
        ...M
      });
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, a.jsx)(l.default, {
        formField: u,
        ...M
      });
    default:
      return null
  }
}

function h(e, t, i) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("5945")]).then(n.bind(n, "92451"));
        return n => (0, a.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t,
          guild: i
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, r.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, r.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("94064")]).then(n.bind(n, "607569"));
        return n => (0, a.jsx)(e, {
          ...n,
          field: void 0,
          onSave: t
        })
      }, l)
  }
}

function E(e, t, i) {
  let l = {
    onCloseRequest: u.NOOP
  };
  switch (e.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, r.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([n.e("99387"), n.e("5945")]).then(n.bind(n, "92451"));
        return n => (0, a.jsx)(r, {
          ...n,
          field: e,
          onSave: t,
          guild: i
        })
      }, l);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, r.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: i
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(i, {
          ...n,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, r.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: i
        } = await Promise.all([n.e("99387"), n.e("6595")]).then(n.bind(n, "457042"));
        return n => (0, a.jsx)(i, {
          ...n,
          field: e,
          onSave: t
        })
      }, l);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, r.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("99387"), n.e("94064")]).then(n.bind(n, "607569"));
        return n => (0, a.jsx)(i, {
          ...n,
          field: e,
          onSave: t
        })
      }, l)
  }
}