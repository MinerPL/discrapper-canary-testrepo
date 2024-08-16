function n(e, t, n) {
    (this.locales = e), (this.formats = t), (this.pluralFn = n);
}
function r(e) {
    this.id = e;
}
function i(e, t, n, r, i) {
    (this.id = e), (this.useOrdinal = t), (this.offset = n), (this.options = r), (this.pluralFn = i);
}
function a(e, t, n, r) {
    (this.id = e), (this.offset = t), (this.numberFormat = n), (this.string = r);
}
function s(e, t) {
    (this.id = e), (this.options = t);
}
(t.default = n),
    (n.prototype.compile = function (e) {
        return (this.pluralStack = []), (this.currentPlural = null), (this.pluralNumberFormat = null), this.compileMessage(e);
    }),
    (n.prototype.compileMessage = function (e) {
        if (!(e && 'messageFormatPattern' === e.type)) throw Error('Message AST is not of type: "messageFormatPattern"');
        var t,
            n,
            r,
            i = e.elements,
            a = [];
        for (t = 0, n = i.length; t < n; t += 1)
            switch ((r = i[t]).type) {
                case 'messageTextElement':
                    a.push(this.compileMessageText(r));
                    break;
                case 'argumentElement':
                    a.push(this.compileArgument(r));
                    break;
                default:
                    throw Error('Message element does not have a valid type');
            }
        return a;
    }),
    (n.prototype.compileMessageText = function (e) {
        return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (!this.pluralNumberFormat && (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new a(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, '#');
    }),
    (n.prototype.compileArgument = function (e) {
        var t = e.format;
        if (!t) return new r(e.id);
        var n,
            a = this.formats,
            o = this.locales,
            l = this.pluralFn;
        switch (t.type) {
            case 'numberFormat':
                return (
                    (n = a.number[t.style]),
                    {
                        id: e.id,
                        format: new Intl.NumberFormat(o, n).format
                    }
                );
            case 'dateFormat':
                return (
                    (n = a.date[t.style]),
                    {
                        id: e.id,
                        format: new Intl.DateTimeFormat(o, n).format
                    }
                );
            case 'timeFormat':
                return (
                    (n = a.time[t.style]),
                    {
                        id: e.id,
                        format: new Intl.DateTimeFormat(o, n).format
                    }
                );
            case 'pluralFormat':
                return (n = this.compileOptions(e)), new i(e.id, t.ordinal, t.offset, n, l);
            case 'selectFormat':
                return (n = this.compileOptions(e)), new s(e.id, n);
            default:
                throw Error('Message element does not have a valid format type');
        }
    }),
    (n.prototype.compileOptions = function (e) {
        var t,
            n,
            r,
            i = e.format,
            a = i.options,
            s = {};
        for (this.pluralStack.push(this.currentPlural), this.currentPlural = 'pluralFormat' === i.type ? e : null, t = 0, n = a.length; t < n; t += 1) s[(r = a[t]).selector] = this.compileMessage(r.value);
        return (this.currentPlural = this.pluralStack.pop()), s;
    }),
    (r.prototype.format = function (e) {
        return e ? ('string' == typeof e ? e : String(e)) : '';
    }),
    (i.prototype.getOption = function (e) {
        var t = this.options;
        return t['=' + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other;
    }),
    (a.prototype.format = function (e) {
        var t = this.numberFormat.format(e - this.offset);
        return this.string.replace(/(^|[^\\])#/g, '$1' + t).replace(/\\#/g, '#');
    }),
    (s.prototype.getOption = function (e) {
        var t = this.options;
        return t[e] || t.other;
    });
