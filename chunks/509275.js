n.d(t, {
    H: function () {
        return o;
    }
});
var r = n(913527), i = n.n(r), a = n(689938);
function o(e) {
    let t = function (e) {
        let t = i().duration(i()().diff(e)), n = Math.floor(t.asDays()), r = Math.floor(t.asHours()), a = Math.floor(t.asMinutes());
        if (n > 0)
            return ''.concat(n, 'd');
        if (r > 0)
            return ''.concat(r, 'h');
        if (a > 0)
            return ''.concat(a, 'm');
        else
            return '1m';
    }(new Date(e));
    return a.Z.Messages.RECENTLY_ONLINE_STATUS.format({ time: t });
}
