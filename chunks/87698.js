n.d(t, {
    u: function () {
        return i;
    },
    y: function () {
        return o;
    }
});
var r = n(470079);
function i(e) {
    return (0, r.useMemo)(
        function () {
            return e.hooks.dragSource();
        },
        [e]
    );
}
function o(e) {
    return (0, r.useMemo)(
        function () {
            return e.hooks.dragPreview();
        },
        [e]
    );
}
