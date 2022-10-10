<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <div class="col-md-12 mb-4">
                    <payment-card />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import PaymentCard from "@/components/PaymentCard.vue";
export default {
    components: {
        PaymentCard
    },
    data() {
        return {
            invoicesList: [
                {
                    name: "C6 Invoice",
                    type: "creditcard",
                    cardFlag: "mastercard",
                    expirationDay: 15,
                    closingDay: 6,
                    limit: 35000.00,
                    pointsPerValue: 0.47,
                    invoices: [
                        {
                            month: 9,
                            year: 2022,
                            purchases: [
                                {
                                    value: 535.99,
                                    totalValue: 535.99,
                                    establishment: "new store eletronics",
                                    description: "headphone",
                                    category: "eletronic",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 10)
                                },
                                {
                                    value: 117.99,
                                    totalValue: 235.99,
                                    establishment: "fine fashion",
                                    description: "shirts",
                                    category: "clothes",
                                    numberOfInstallments: 2,
                                    installment: 1,
                                    date: new Date(2022, 8, 12)
                                },
                                {
                                    value: 83.32,
                                    totalvalue: 83.32,
                                    establishment: "food delivery",
                                    description: "lunch",
                                    category: "food",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 15)
                                },
                                {
                                    value: 95.25,
                                    totalValue: 95.25,
                                    establishment: "food delivery",
                                    description: "dinner",
                                    category: "food",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 18)
                                },
                                {
                                    value: 103.35,
                                    totalValue: 103.35,
                                    establishment: "food delivery",
                                    description: "dinner",
                                    category: "food",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 20)
                                },
                                {
                                    value: 325.08,
                                    totalValue: 1300.35,
                                    establishment: "lollapaloza event",
                                    description: "entertainment",
                                    category: "entertainment",
                                    numberOfInstallments: 4,
                                    installment: 1,
                                    date: new Date(2022, 8, 22)
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>