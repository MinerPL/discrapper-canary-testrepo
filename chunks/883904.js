n.d(t, {
  EG: function() {
return o;
  },
  Nj: function() {
return s;
  },
  Vr: function() {
return a;
  },
  cm: function() {
return i;
  }
});
var r = n(570140);
let i = e => {
r.Z.dispatch({
  type: 'DCF_HANDLE_DC_SHOWN',
  dismissibleContent: e
});
  },
  a = e => {
r.Z.dispatch({
  type: 'DCF_HANDLE_DC_DISMISSED',
  dismissibleContent: e
});
  },
  o = () => {
r.Z.dispatch({
  type: 'DCF_RESET'
});
  },
  s = e => {
r.Z.dispatch({
  type: 'DCF_DAILY_CAP_OVERRIDE',
  value: e
});
  };