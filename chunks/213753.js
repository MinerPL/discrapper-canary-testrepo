n.d(t, {
    V: function () {
        return s;
    }
});
var r = n(846903);
let i = new (n(259443).Y)('codedLinkQueue'),
    a = new r.default({
        concurrency: 5,
        intervalCap: 10,
        interval: 2000
    });
function s(e) {
    a.add(e);
}
a.on('add', () => {
    a.size > 0 && i.warn('Message link fetch queue backlog:', a.size);
});
