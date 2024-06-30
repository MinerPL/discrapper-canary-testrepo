n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var s = n(497505), a = n(772257), r = n(59608);
function l(e) {
    let {quests: t} = e;
    return (0, i.jsx)('div', {
        className: r.container,
        children: t.map(e => (0, i.jsx)(a.Z, {
            quest: e,
            questContent: s.jn.QUEST_HOME_DESKTOP
        }, e.id))
    });
}
