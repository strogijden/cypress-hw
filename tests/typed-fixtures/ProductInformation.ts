export interface ProductInformation {
    readonly listingPath: string;
    readonly title: string;
    readonly brand: string;
    readonly availableCombos: string;
    readonly pricePattern: RegExp;
    readonly premiumPricePattern: RegExp;
}
