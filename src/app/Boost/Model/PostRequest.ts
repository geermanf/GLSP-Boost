export class PostRequest {
    merchantId: number;
    referenceCode: string;
    description: string;
    amount: number;
    tax: number;
    taxReturnBase: number;
    signature: string;
    accountId: number;
    currency: string;
    buyerFullName: string;
    buyerEmail: string;
    test: string;
}
