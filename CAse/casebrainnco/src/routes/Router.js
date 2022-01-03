import { Switch, Route } from "react-router-dom"
import DiaDeSorte from "../pages/DiaDeSorte/DiaDeSorte"
import Homepage from "../pages/MegaSena/MegaSena"
import Lotofacil from "../pages/Lotofacil/Lotofacil"
import Lotomania from "../pages/Lotomania/Lotomania"
import Quina from "../pages/Quina/Quina"
import Timemania from "../pages/Timemania/Timemania"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/quina">
        <Quina />
      </Route>
      <Route exact path="/lotofacil">
        <Lotofacil />
      </Route>
      <Route exact path="/lotomania">
        <Lotomania />
      </Route>
      <Route exact path="/timemania">
        <Timemania />
      </Route>
      <Route exact path="/diadesorte">
        <DiaDeSorte />
      </Route>
    </Switch>
  )
}

export default Router