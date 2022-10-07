<template>
    <h1>Invoices</h1>
</template>

<script>
    export default {
        data() {
            return {
                invoicesList: [
                    {
                        name: "C6 Invoice",
                        type: "creditcard",
                        cardFlag: "mastercard",
                        expirationDay: 20,
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
                                        date: new Date(2022, 9, 6)
                                    },
                                    {
                                        value: 117.99,
                                        totalValue: 235.99,
                                        establishment: "fine fashion",
                                        description: "shirts",
                                        category: "clothes",
                                        numberOfInstallments: 2,
                                        installment: 1,
                                        date: new Date(2022, 9, 6)
                                    },
                                    {
                                        value: 83.32,
                                        totalvalue: 83.32,
                                        establishment: "food delivery",
                                        description: "lunch",
                                        category: "food",
                                        numberOfInstallments: 1,
                                        installment: 1,
                                        date: new Date(2022, 9, 6)
                                    },
                                    {
                                        value: 95.25,
                                        totalValue: 95.25,
                                        establishment: "food delivery",
                                        description: "dinner",
                                        category: "food",
                                        numberOfInstallments: 1,
                                        installment: 1,
                                        date: new Date(2022, 9, 6)
                                    },
                                    {
                                        value: 103.35,
                                        totalValue: 103.35,
                                        establishment: "food delivery",
                                        description: "dinner",
                                        category: "food",
                                        numberOfInstallments: 1,
                                        installment: 1,
                                        date: new Date(2022, 9, 6)
                                    },
                                    {
                                        value: 325.08,
                                        totalValue: 1300.35,
                                        establishment: "lollapaloza event",
                                        description: "entertainment",
                                        category: "entertainment",
                                        numberOfInstallments: 4,
                                        installment: 1,
                                        date: new Date(2022, 9, 6)
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