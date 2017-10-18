export class Division {
    label: string;
    value: {
        id: number;
        name: string;
        price: number;
        pricepp: number;
        logo: any;
        subDivs: Division[];
    };
}
