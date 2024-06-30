r.d(e, {
    VT: function () {
        return _;
    }
});
let n = [
    'fatal',
    'error',
    'warning',
    'log',
    'info',
    'debug'
];
function _(t) {
    return 'warn' === t ? 'warning' : n.includes(t) ? t : 'log';
}
