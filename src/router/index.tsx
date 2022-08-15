import { Routes, Route} from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/Home";
import { InitiateCheckout } from "../pages/InitiateCheckout";
import { OrderSuccessful } from "../pages/OrderSuccessful";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />} path="/" />
        <Route element={<InitiateCheckout />} path="/initiateCheckout" />
        <Route element={<OrderSuccessful />} path="/orderSuccessful" />
      </Route>
    </Routes>
  )
}
  