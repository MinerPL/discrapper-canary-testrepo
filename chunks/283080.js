n.d(t, {
    EA: function () {
        return a;
    }
}),
    n(47120),
    n(735250),
    n(470079);
let r = {};
function i(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, ' ');
}
function a() {
    if (0 === Object.keys(r).length) return '';
    let e = '|'.concat(i('id', 20), '|').concat(i('Mounts', 8), '|').concat(i('Mount Mean', 20), '|').concat(i('Updates', 8), '|').concat(i('Update Mean', 20), '|').concat(i('Nested', 8), '|').concat(i('Nested Mean', 20), '|\n');
    return (
        'Component Render Stats (microseconds):\n' +
        e +
        Object.entries(r).map((e) => {
            let [t, n] = e;
            return '|'.concat(i(t, 20), '|').concat(i(n.mount.count.toString(), 8), '|').concat(i(n.mount.mean.toString(), 20), '|').concat(i(n.update.count.toString(), 8), '|').concat(i(n.update.mean.toString(), 20), '|').concat(i(n.nestedUpdate.count.toString(), 8), '|').concat(i(n.nestedUpdate.mean.toString(), 20), '|\n');
        })
    );
}
