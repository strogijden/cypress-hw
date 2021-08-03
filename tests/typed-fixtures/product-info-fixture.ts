import {ProductInformation} from './ProductInformation';

const globalPricePattern = /From USD \d+\.\d\d/;
const globalPremiumPricePattern = /From USD \d+\.\d\d with Printify Premium/;
const globalAvailableCombo = '8 sizes • 23 colors • 8 print providers';

export const leggings: ProductInformation = {
    listingPath: '/list/7',
    title: 'Women\'s Cut & Sew Casual Leggings',
    brand: 'By Generic Brand STTM543',
    availableCombos: globalAvailableCombo,
    pricePattern: globalPricePattern,
    premiumPricePattern: globalPremiumPricePattern,
};

export const vNeck: ProductInformation = {
    listingPath: '/list/2',
    title: 'Unisex Jersey Short Sleeve V-Neck Tee',
    brand: 'By Bella+Canvas STTM543',
    availableCombos: '8 sizes • 23 colors • 8 print providers',
    pricePattern: /From USD \d\.\d\d/,
    premiumPricePattern: /From USD \d\.\d\d with Printify Premium/,
};
