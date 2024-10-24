class EventTransactionModel {
    private _eventId: string = "";
    private _partition: string = "";
    private _requestBody: string = "";
    private _topic: string = "";
    private _status: string = "";
    private _eventDate: string = "";
    private _stackTrace: string = "";
    private _exceptionMsg: string = "";
    public get exceptionMsg(): string {
        return this._exceptionMsg;
    }
    public set exceptionMsg(value: string) {
        this._exceptionMsg = value;
    }

    public get eventId(): string {
        return this._eventId;
    }
    public set eventId(value: string) {
        this._eventId = value;
    }

    public get partition(): string {
        return this._partition;
    }
    public set partition(value: string) {
        this._partition = value;
    }

    public get requestBody(): string {
        return this._requestBody;
    }
    public set requestBody(value: string) {
        this._requestBody = value;
    }

    public get topic(): string {
        return this._topic;
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get eventDate(): string {
        return this._eventDate;
    }
    public set eventDate(value: string) {
        this._eventDate = value;
    }
    public get stackTrace(): string {
        return this._stackTrace;
    }
    public set stackTrace(value: string) {
        this._stackTrace = value;
    }
}

export default EventTransactionModel;