import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/Dashboard"
import Plan from "../views/Plan"
import Wallet from "../views/Wallet"
import Invoices from "../views/Invoices"
import CredtCardNewOrEdit from "../views/Invoices/CreditCards/NewOrEdit.vue"
import Billing from "../views/Billing.vue"
import Tables from "../views/Tables.vue"
import FormTest from "../views/FormTest"
import VirtualReality from "../views/VirtualReality.vue"
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
    path: "/invoices",
    name: "Invoices",
    component: Invoices
  },
  {
    path: "/creditcard/new",
    name: "Credit Card",
    component: CredtCardNewOrEdit
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
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
