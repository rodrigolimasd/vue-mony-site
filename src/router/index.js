import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/Dashboard"
import Plan from "../views/Plan"
import Wallet from "../views/Wallet"
import CreditCard from "../views/CreditCard"
import CreditCardNewOrEdit from "../views/CreditCard/NewOrEdit"
import Invoice from "../views/CreditCard/Invoice"

import Billing from "../views/Billing.vue"
import FormTest from "../views/FormTest"
import Profile from "../views/Profile.vue"
import Signup from "../views/Signup.vue"
import Signin from "../views/Signin.vue"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/plan",
    name: "Plan",
    component: Plan
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: Wallet,
  },
  {
    path: "/creditcard",
    name: "Credit Card",
    component: CreditCard
  },
  {
    path: "/creditcard/new",
    name: "New Credit Card",
    component: CreditCardNewOrEdit
  },
  {
    path: "/creditcard/:id",
    name: "Edit Credit Card",
    component: CreditCardNewOrEdit,
    props: true
  },
  {
    path: "/creditcard/:id/invoice",
    name: "Invoice",
    component: Invoice,
    props: true
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/test",
    name: "Test",
    component: FormTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
})

export default router
