var n = r(624001);
t.exports = function (t) {
    var e = t.getSelection();
    return e.isCollapsed() ? null : n(t.getCurrentContent(), e);
};
