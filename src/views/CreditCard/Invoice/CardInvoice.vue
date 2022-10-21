<template>
    <div class="row">
        <div class="col-12">
            <div class="card-title text-uppercase text-center">
                <h5 class="mb-0">October - 2022</h5>
                <hr class="my-1">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table mb-0 align-items-center">
                <thead>
                    <tr>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Product</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Category</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Value</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Establishment</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Installment/Qtd</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="px-1 py-1 d-flex">
                                <div class="me-2">
                                    <datepicker :wrapper-class="'wrapper-class-calendar mx-1'"
                                        :calendar-button-icon="'fa fa-calendar icon-calendar'" :value="data" format=""
                                        :calendar-button="true" data-bs-toggle="tooltip" title="Click To Change Date">
                                    </datepicker>
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                    <h6 class="mb-0 text-sm">Nike v22 Running</h6>
                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                        <span>12/10/2022</span>
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">
                                Clothing
                            </p>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">$300</p>
                        </td>
                        <td class="text-sm align-middle">
                            <p class="text-center mb-0 text-sm font-weight-bold">Nike</p>
                        </td>
                        <td class="align-middle text-center w-10">
                            <div class="text-center px-3 py-1 d-flex justify-content-center align-items-center">
                                <p class="mb-0 text-sm font-weight-bold">1</p>
                                <p class="mb-0 text-sm font-weight-bold">/</p>
                                <p class="mb-0 text-sm font-weight-bold">1</p>
                                <button
                                    class="btn mb-0 btn-sm btn-outline-secondary btn-icon-only btn-rounded mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                            <div class="progress progress-xs my-1">
                                <div class="progress-bar bg-success" :style="{width: '100%'}"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="px-1 py-1 d-flex">
                                <div class="me-2">
                                    <datepicker :wrapper-class="'wrapper-class-calendar mx-1'"
                                        :calendar-button-icon="'fa fa-calendar icon-calendar'" :value="data" format=""
                                        :calendar-button="true" data-bs-toggle="tooltip" title="Click To Change Date">
                                    </datepicker>
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                    <h6 class="mb-0 text-sm">Iphone 13 Pro Max 128GB</h6>
                                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                                        <span>13/10/2022</span>
                                    </p>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">Eletronic</p>
                        </td>
                        <td>
                            <p class="text-center mb-0 text-sm font-weight-bold">$7300</p>
                        </td>
                        <td class="text-sm align-middle">
                            <p class="text-center mb-0 text-sm font-weight-bold">Amazon</p>
                        </td>
                        <td class="align-middle text-center w-10">
                            <div class="text-center px-3 py-1 d-flex justify-content-center align-items-center">
                                <p class="mb-0 text-sm font-weight-bold">1</p>
                                <p class="mb-0 text-sm font-weight-bold">/</p>
                                <p class="mb-0 text-sm font-weight-bold">1</p>
                                <button
                                    class="btn mb-0 btn-sm btn-outline-secondary btn-icon-only btn-rounded mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                            <div class="progress progress-xs my-1">
                                <div class="progress-bar bg-success" :style="{width: '10%'}"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot style="border-color: #e9ecef;">
                    <tr>
                        <td colspan="5" class="text-end" style="border-bottom: none">
                            <div class="numbers mx-3">
                                <p class="mb-0 text-sm text-uppercase font-weight-bold">Total</p>
                                <h5 class="font-weight-bolder text-end text-success my-0">$1234.00</h5>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>


</template>

<script>
import Datepicker from 'vuejs3-datepicker'

export default {
    components: {
        Datepicker
    },
    data() {
        return {
            data: new Date()
        }
    }
}
</script>