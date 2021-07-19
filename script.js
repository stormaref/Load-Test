import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '30s',
};

var payload = JSON.stringify({
    "branchId": 1,
    "userId": "f1d58cf2-1601-40bf-8527-217e28f218f9",
    "buyerId": "f1d58cf2-1601-40bf-8527-217e28f218f9",
    "referrerId": null,
    "items": [
        {
            "id": null,
            "productItems": [
                {
                    "productId": 7,
                    "quantity": 1,
                    "productName": "چلوکباب کوبیده لقمه معمولی",
                    "unitPrice": 650000,
                    "mainProduct": {
                        "id": 7,
                        "code": "7",
                        "name": "چلوکباب کوبیده لقمه معمولی",
                        "englishName": "چلوکباب کوبیده لقمه معمولی",
                        "price": 650000,
                        "packagingPrice": 0,
                        "isActive": true,
                        "serveFor": 1,
                        "vat": 9,
                        "cookTime": 0,
                        "baseProductId": 7,
                        "productFeatures": []
                    }
                }
            ],
            "baseProductId": 7,
            "productName": "چلوکباب کوبیده لقمه معمولی",
            "unitPrice": 650000,
            "discount": 0,
            "quantity": 1,
            "vat": 9,
            "comment": "",
            "baseProduct": {
                "id": 7,
                "code": "7",
                "name": "چلوکباب کوبیده لقمه معمولی",
                "englishName": "چلوکباب کوبیده لقمه معمولی",
                "catalogTypeId": 2,
                "pictureFileName": "default.jpg",
                "price": 650000,
                "description": "سفارش آنلاین چلوکباب کوبیده لقمه معمولی",
                "cookTime": 15,
                "cateringShifts": "1,2,3,4,5",
                "isSpicy": false,
                "isVegeterian": false,
                "ingredients": "یک سیخ کباب کوبیده مخلوط گوشت گوساله و گوسفندی 180 گرم ، 380-400 گرم برنج ایرانی ، دورچین : گوجه کبابی ، فلفل کبابی ، لیموترش ، ( ته چین در صورت موجود )",
                "sequence": 100,
                "hasTopping": false,
                "printingSequence": 1,
                "printIngredients": false,
                "printIngredientsInKithchen": true,
                "features": null,
                "IsAvailable": true,
                "Inventory": 2
            }
        },
        {
            "baseProduct": {
                "id": 14,
                "code": "15",
                "name": "فیله کباب ترش با مخلفات",
                "englishName": "فیله کباب ترش با مخلفات",
                "catalogTypeId": 3,
                "pictureFileName": "default.jpg",
                "price": 1210000,
                "description": "سفارش آنلاین فیله کباب ترش با مخلفات",
                "cookTime": 15,
                "cateringShifts": "1,2,3,4,5",
                "isSpicy": false,
                "isVegeterian": false,
                "ingredients": "یک سیخ کباب ترش220گرمی گوشت فیله گوسفندی طعم دارشده با رب انار محلی و گردو،دورچین:گوجه کبابی،فلفل کبابی،هویج،لوبیاسبز،کدو،کرفس،ترشی کلم قرمز",
                "sequence": 100,
                "hasTopping": false,
                "printingSequence": 1,
                "printIngredients": false,
                "printIngredientsInKithchen": true,
                "features": null,
                "IsAvailable": true,
                "Inventory": 2
            },
            "baseProductId": 14,
            "quantity": 1,
            "comment": "",
            "productItems": [
                {
                    "productId": 14,
                    "productName": "فیله کباب ترش با مخلفات",
                    "quantity": 1,
                    "mainProduct": {
                        "id": 14,
                        "code": "15",
                        "name": "فیله کباب ترش با مخلفات",
                        "englishName": "فیله کباب ترش با مخلفات",
                        "price": 1210000,
                        "packagingPrice": 0,
                        "isActive": true,
                        "serveFor": 1,
                        "vat": 0,
                        "cookTime": 0,
                        "baseProductId": 14,
                        "productFeatures": []
                    }
                }
            ],
            "productName": "فیله کباب ترش با مخلفات",
            "unitPrice": 1210000,
            "selectedFeature": false,
            "validationError": false,
            "isValid": true,
            "isAdded": true,
            "isVisible": false,
            "index": 0
        }
    ],
    "lockedUntil": "2021-06-12T15:23:02.8463303+04:30",
    "lastUpdate": "2021-06-12T15:23:03.2576051+04:30",
    "isCheckedOut": false,
    "requestId": "00000000-0000-0000-0000-000000000000",
    "paymentType": 1,
    "sourceType": 1,
    "deliveryType": 2,
    "relatedOrderId": null,
    "partnerId": null,
    "couponId": null,
    "discount": 0,
    "deliveryDiscount": 0,
    "usedCredit": 0,
    "roundValue": -500,
    "deliveryCost": 0,
    "packagingCost": 0,
    "totalCost": 708500,
    "payableCost": 708000,
    "otherOrdersPrice": 0,
    "gross": 650000,
    "vat": 58500,
    "itemCount": 1,
    "fileName": null,
    "isProcessing": false,
    "basketMessage": null
});

var url = 'http://192.168.1.19:92/api/v1/basket';

var params = {
    headers: {
        'Content-Type': 'application/json',
        'userId': 'f1d58cf2-1601-40bf-8527-217e28f218f9'
    },
}

export default function () {
    http.post(url, payload, params);
    sleep(1);
}