export default class Challenge {
    _title;
    _body;

    constructor(title, body) {
        this._title = title;
        this._body = body;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }
}