t.d(n, {
  Md: function() {
return C;
  },
  a0: function() {
return f;
  }
});
var a = t(735250);
t(470079);
var r = t(392711),
  i = t(481060),
  s = t(246364),
  o = t(405545),
  l = t(382574),
  c = t(279988),
  d = t(786127),
  u = t(981631),
  m = t(689938);

function f(e) {
  let {
dropHoveredIndex: n,
formField: u,
guild: f,
index: C,
isDragEnabled: h,
submittedGuildJoinRequestsCount: x,
removeFormField: g,
updateFormField: p,
updateFormFieldOrder: T,
canRemove: I,
actionsLocation: E
  } = e, b = async () => {
await g(C);
  }, N = async e => {
await p(C, e);
  }, v = async (e, n, t) => {
await T(e, n, t);
  }, y = (0, r.uniqueId)(), S = n === C, A = {
key: y,
index: C,
isDragEnabled: h,
isDropHovered: S,
onEdit: () => {
  0 === x ? _(u, N, f) : (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('74673').then(t.bind(t, 394045));
    return n => (0, a.jsx)(e, {
      ...n,
      guildId: f.id,
      submittedGuildJoinRequestsCount: x,
      onConfirm: () => _(u, N, f)
    });
  });
},
onRemove: b,
onDrop: v,
canRemove: I,
actionsLocation: E
  };
  switch (u.field_type) {
case s.QJ.TERMS:
  return (0, a.jsx)(c.Z, {
    channelId: f.rulesChannelId,
    title: m.Z.Messages.GUILD_RULES_HEADER,
    formField: u,
    ...A
  });
case s.QJ.PARAGRAPH:
  return (0, a.jsx)(l.Z, {
    formField: u,
    ...A
  });
case s.QJ.TEXT_INPUT:
  return (0, a.jsx)(d.Z, {
    formField: u,
    ...A
  });
case s.QJ.MULTIPLE_CHOICE:
  return (0, a.jsx)(o.Z, {
    formField: u,
    ...A
  });
default:
  return null;
  }
}

function C(e, n, r) {
  let o = {
onCloseRequest: u.dG4
  };
  switch (e) {
case s.QJ.TERMS:
  return (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('5945').then(t.bind(t, 92451));
    return t => (0, a.jsx)(e, {
      ...t,
      field: void 0,
      onSave: n,
      guild: r
    });
  }, o);
case s.QJ.PARAGRAPH:
  return (0, i.openModalLazy)(async () => {
    let {
      ParagraphFormFieldModal: e
    } = await t.e('6595').then(t.bind(t, 457042));
    return t => (0, a.jsx)(e, {
      ...t,
      field: void 0,
      onSave: n
    });
  }, o);
case s.QJ.TEXT_INPUT:
  return (0, i.openModalLazy)(async () => {
    let {
      TextInputFormFieldModal: e
    } = await t.e('6595').then(t.bind(t, 457042));
    return t => (0, a.jsx)(e, {
      ...t,
      field: void 0,
      onSave: n
    });
  }, o);
case s.QJ.MULTIPLE_CHOICE:
  return (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('94064').then(t.bind(t, 607569));
    return t => (0, a.jsx)(e, {
      ...t,
      field: void 0,
      onSave: n
    });
  }, o);
  }
}

function _(e, n, r) {
  let o = {
onCloseRequest: u.dG4
  };
  switch (e.field_type) {
case s.QJ.TERMS:
  return (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await t.e('5945').then(t.bind(t, 92451));
    return t => (0, a.jsx)(i, {
      ...t,
      field: e,
      onSave: n,
      guild: r
    });
  }, o);
case s.QJ.PARAGRAPH:
  return (0, i.openModalLazy)(async () => {
    let {
      ParagraphFormFieldModal: r
    } = await t.e('6595').then(t.bind(t, 457042));
    return t => (0, a.jsx)(r, {
      ...t,
      field: e,
      onSave: n
    });
  }, o);
case s.QJ.TEXT_INPUT:
  return (0, i.openModalLazy)(async () => {
    let {
      TextInputFormFieldModal: r
    } = await t.e('6595').then(t.bind(t, 457042));
    return t => (0, a.jsx)(r, {
      ...t,
      field: e,
      onSave: n
    });
  }, o);
case s.QJ.MULTIPLE_CHOICE:
  return (0, i.openModalLazy)(async () => {
    let {
      default: r
    } = await t.e('94064').then(t.bind(t, 607569));
    return t => (0, a.jsx)(r, {
      ...t,
      field: e,
      onSave: n
    });
  }, o);
  }
}