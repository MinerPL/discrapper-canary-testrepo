"use strict";
i.r(t), i.d(t, {
  getFormFieldBuilderComponent: function() {
    return E
  },
  openEmptyFormFieldModal: function() {
    return I
  }
});
var n = i("37983");
i("884691");
var a = i("917351"),
  l = i("77078"),
  s = i("567054"),
  r = i("403025"),
  o = i("263974"),
  d = i("169324"),
  u = i("333554"),
  c = i("49111"),
  f = i("782340");

function E(e) {
  let {
    dropHoveredIndex: t,
    formField: c,
    guild: E,
    index: I,
    isDragEnabled: m,
    submittedGuildJoinRequestsCount: _,
    removeFormField: x,
    updateFormField: h,
    updateFormFieldOrder: p
  } = e, R = async () => {
    await x(I)
  }, M = async e => {
    await h(I, e)
  }, F = async (e, t, i) => {
    await p(e, t, i)
  }, v = (0, a.uniqueId)(), N = t === I, S = {
    key: v,
    index: I,
    isDragEnabled: m,
    isDropHovered: N,
    onEdit: () => {
      0 === _ ? T(c, M, E) : (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await i.el("265397").then(i.bind(i, "265397"));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: E.id,
          submittedGuildJoinRequestsCount: _,
          onConfirm: () => T(c, M, E)
        })
      })
    },
    onRemove: R,
    onDrop: F
  };
  switch (c.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, n.jsx)(d.default, {
        channelId: E.rulesChannelId,
        title: f.default.Messages.GUILD_RULES_HEADER,
        formField: c,
        ...S
      });
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, n.jsx)(o.default, {
        formField: c,
        ...S
      });
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, n.jsx)(u.default, {
        formField: c,
        ...S
      });
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, n.jsx)(r.default, {
        formField: c,
        ...S
      });
    default:
      return null
  }
}

function I(e, t, a) {
  let r = {
    onCloseRequest: c.NOOP
  };
  switch (e) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await i.el("262099").then(i.bind(i, "262099"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t,
          guild: a
        })
      }, r);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, l.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await i.el("198784").then(i.bind(i, "198784"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, l.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await i.el("198784").then(i.bind(i, "198784"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await i.el("827619").then(i.bind(i, "827619"));
        return i => (0, n.jsx)(e, {
          ...i,
          field: void 0,
          onSave: t
        })
      }, r)
  }
}

function T(e, t, a) {
  let r = {
    onCloseRequest: c.NOOP
  };
  switch (e.field_type) {
    case s.VerificationFormFieldTypes.TERMS:
      return (0, l.openModalLazy)(async () => {
        let {
          default: l
        } = await i.el("262099").then(i.bind(i, "262099"));
        return i => (0, n.jsx)(l, {
          ...i,
          field: e,
          onSave: t,
          guild: a
        })
      }, r);
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return (0, l.openModalLazy)(async () => {
        let {
          ParagraphFormFieldModal: a
        } = await i.el("198784").then(i.bind(i, "198784"));
        return i => (0, n.jsx)(a, {
          ...i,
          field: e,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.TEXT_INPUT:
      return (0, l.openModalLazy)(async () => {
        let {
          TextInputFormFieldModal: a
        } = await i.el("198784").then(i.bind(i, "198784"));
        return i => (0, n.jsx)(a, {
          ...i,
          field: e,
          onSave: t
        })
      }, r);
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return (0, l.openModalLazy)(async () => {
        let {
          default: a
        } = await i.el("827619").then(i.bind(i, "827619"));
        return i => (0, n.jsx)(a, {
          ...i,
          field: e,
          onSave: t
        })
      }, r)
  }
}