n.d(t, {
  C: function() {
return s;
  },
  az: function() {
return l;
  },
  hp: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(617136);

function o(e) {
  let {
questId: t,
location: a,
questContentPosition: o
  } = e;
  (0, i.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('54535'),
  n.e('89043'),
  n.e('87353')
]).then(n.bind(n, 985866));
return n => (0, r.jsx)(e, {
  ...n,
  questId: t,
  questContentPosition: o,
  location: a
});
  });
}

function s(e, t) {
  (0, i.openModalLazy)(async () => {
let {
  default: i
} = await n.e('88938').then(n.bind(n, 390238));
return n => (0, r.jsx)(i, {
  ...n,
  quest: e,
  location: t
});
  });
}

function l(e, t) {
  (0, a._3)({
questId: e.id,
questContent: t.content,
questContentPosition: t.position,
questContentCTA: t.ctaContent
  }), (0, i.openModalLazy)(async () => {
let {
  default: i
} = await n.e('4266').then(n.bind(n, 316210));
return n => (0, r.jsx)(i, {
  ...n,
  questContent: t.content,
  quest: e
});
  });
}