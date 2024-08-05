var r;

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
n.d(t, {
  Z: function() {
return a;
  }
}), (r || (r = {})).PRIMARY_APP_COMMAND_NOT_FOUND = 'PRIMARY_APP_COMMAND_NOT_FOUND';
class a {
  constructor(e) {
i(this, 'reason', void 0), this.reason = e;
  }
}
i(a, 'Reasons', r);