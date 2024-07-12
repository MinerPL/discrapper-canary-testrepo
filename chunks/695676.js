t.d(n, {
  gc: function() {
return l;
  },
  hH: function() {
return s;
  },
  uX: function() {
return r;
  }
});
var i, l, a = t(470079);
(i = l || (l = {})).HOME = 'home', i.LIST = 'list', i.APPLICATION = 'application';
let r = a.createContext({
  history: [],
  discard: {},
  currentView: void 0,
  pushHistory: () => {},
  goBack: () => {},
  getMostRecentHistoryItemByType: () => void 0
});

function s() {
  return a.useContext(r);
}