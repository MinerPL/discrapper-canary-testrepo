"use strict";
n.d(t, {
  SY: function() {
    return d
  },
  ZP: function() {
    return u
  },
  sV: function() {
    return l
  }
}), n(411104);
var i = n(911969),
  r = n(592125),
  s = n(963456),
  o = n(213459),
  a = n(367790);
let l = "no primary app command for application";
async function u(e, t) {
  let n, i = r.Z.getChannel(e);
  if (null != i) {
    let e = _(i, t);
    if (null == e.commands[0]) {
      let e = {
          type: "application",
          applicationId: t
        },
        r = new AbortController;
      (0, s.j)(e, !1), await (0, s.a)(e, 0, r), n = _(i, t).commands[0]
    } else n = e.commands[0]
  }
  if (null != n) return n;
  throw Error(l)
}

function _(e, t) {
  return o.ZP.query(e, {
    commandType: i.yU.PRIMARY_ENTRY_POINT
  }, {
    placeholderCount: 1,
    scoreMethod: a.p.COMMAND_ONLY,
    applicationId: t,
    allowFetch: !1
  })
}

function d(e, t) {
  return (0, o.v1)(e, {
    commandType: i.yU.PRIMARY_ENTRY_POINT
  }, {
    placeholderCount: 1,
    scoreMethod: a.p.COMMAND_ONLY,
    applicationId: t,
    allowFetch: !1
  })
}