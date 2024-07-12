var r, i, a, o, s, l;

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
n.d(t, {
  X5: function() {
return c;
  },
  a8: function() {
return r;
  },
  h8: function() {
return i;
  },
  xQ: function() {
return a;
  }
});
class c {
  constructor(e) {
u(this, 'id', void 0), u(this, 'text', void 0), this.id = e, this.text = e;
  }
}
(o = r || (r = {})).UP = 'UP', o.DOWN = 'DOWN', (s = i || (i = {})).GUILD = 'GUILD', s.TEXT_CHANNEL = 'TEXT_CHANNEL', s.GROUP_DM = 'GROUP_DM', s.VOICE_CHANNEL = 'VOICE_CHANNEL', s.USER = 'USER', s.HEADER = 'HEADER', s.APPLICATION = 'APPLICATION', s.SKU = 'SKU', s.LINK = 'LINK', (l = a || (a = {})).USER = '@', l.TEXT_CHANNEL = '#', l.VOICE_CHANNEL = '!', l.GUILD = '*', l.APPLICATION = '$';