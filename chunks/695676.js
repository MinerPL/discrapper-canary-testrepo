t.d(n, {
    gc: function () {
        return a;
    },
    hH: function () {
        return r;
    },
    uX: function () {
        return o;
    }
});
var i,
    a,
    l = t(470079);
((i = a || (a = {})).HOME = 'home'), (i.LIST = 'list'), (i.APPLICATION = 'application');
let o = l.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {}
});
function r() {
    return l.useContext(o);
}
