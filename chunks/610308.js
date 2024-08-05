n(411104);
var r = n(374023);
let i = (0, n(733393).V)();
class a {
  pack(e) {
return JSON.stringify(e);
  }
  unpack(e) {
if ('string' != typeof e)
  throw Error('Expected a string to be passed to JSONEncoding.unpack, got '.concat(null == e ? null : typeof e));
return JSON.parse(e);
  }
  getName() {
return 'json';
  }
  wantsString() {
return !0;
  }
}
let s = void 0 !== i ? i : a;
r.s.isDiscordGatewayPlaintextSet() && (s = a), t.Z = s;