export class ProductAddUpdate {
    private _code: string;
    private _name: string;
    private _releaseDate: Date;
    private _description: string;
    private _price: number;
    private _starRating: number;
    private _imageUrl: string;

    constructor(
        name: string,
        code: string,
        releaseDate: Date,
        description: string,
        price: number,
        starRating: number,
        imageUrl: string
    ){
        this._code = code;
        this._name = name;
        this._releaseDate = releaseDate;
        this._description = description;
        this._price = price;
        this._starRating = starRating;
        this._imageUrl = imageUrl;
    }

    // Getters 
    get code(): string {
        return this._code;
    }

    get name(): string {
        return this._name;
    }

    get releaseDate(): Date {
        return this._releaseDate;
    }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }

    get starRating(): number {
        return this._starRating;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    // Setters
    set code(value: string) {
        this._code = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set releaseDate(value: Date) {
        this._releaseDate = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set price(value: number) {
        this._price = value;
    }

    set starRating(value: number) {
        this._starRating = value;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }
}