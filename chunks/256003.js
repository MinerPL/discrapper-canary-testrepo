l.d(t, {
  Z: function() {
return s;
  }
}), l(47120);
var n = l(652874),
  a = l(731965);
let o = (0, n.Z)((e, t) => ({
  selectedUserIds: {},
  addUsers: (l, n) => {
var o;
let {
  selectedUserIds: s
} = t(), i = new Set([
  ...null !== (o = s[l]) && void 0 !== o ? o : new Set(),
  ...n
]);
(0, a.j)(() => {
  e({
    selectedUserIds: {
      ...s,
      [l]: i
    }
  });
});
  },
  removeUser: (l, n) => {
let {
  selectedUserIds: o
} = t(), s = o[l];
if (null == s)
  return;
let i = [...s].filter(e => e !== n);
(0, a.j)(() => {
  e({
    selectedUserIds: {
      ...o,
      [l]: new Set(i)
    }
  });
});
  },
  clearSelection: l => {
let {
  selectedUserIds: n
} = t();
null != n && (0, a.j)(() => {
  e({
    selectedUserIds: {
      ...n,
      [l]: new Set()
    }
  });
});
  }
}));

function s(e) {
  return o(t => {
var l;
return {
  selectedUserIds: null !== (l = t.selectedUserIds[e]) && void 0 !== l ? l : new Set(),
  addUsers: l => {
    t.addUsers(e, l);
  },
  removeUser: l => {
    t.removeUser(e, l);
  },
  clearSelection: () => {
    t.clearSelection(e);
  }
};
  });
}