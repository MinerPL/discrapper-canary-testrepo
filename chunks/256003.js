"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("47120");
let a = (0, l("652874").default)((e, t) => ({
  selectedUserIds: {},
  addUsers: (l, a) => {
    var s;
    let {
      selectedUserIds: n
    } = t(), o = null !== (s = n[l]) && void 0 !== s ? s : new Set, i = new Set([...o, ...a]);
    e({
      selectedUserIds: {
        ...n,
        [l]: i
      }
    })
  },
  removeUser: (l, a) => {
    let {
      selectedUserIds: s
    } = t(), n = s[l];
    if (null == n) return;
    let o = [...n].filter(e => e !== a);
    e({
      selectedUserIds: {
        ...s,
        [l]: new Set(o)
      }
    })
  },
  clearSelection: l => {
    let {
      selectedUserIds: a
    } = t();
    null != a && e({
      selectedUserIds: {
        ...a,
        [l]: new Set
      }
    })
  }
}));

function s(e) {
  return a(t => {
    var l;
    return {
      selectedUserIds: null !== (l = t.selectedUserIds[e]) && void 0 !== l ? l : new Set,
      addUsers: l => {
        t.addUsers(e, l)
      },
      removeUser: l => {
        t.removeUser(e, l)
      },
      clearSelection: () => {
        t.clearSelection(e)
      }
    }
  })
}