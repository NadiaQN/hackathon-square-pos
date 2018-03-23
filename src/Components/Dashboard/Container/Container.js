import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../../Home';
import Ventas from './../Menu/Ventas/Ventas';
import Caja from './../Menu/Caja/Caja';
import Informes from './../Menu/Informes/Informes';
import Catalogo from './../Menu/Catalogo/Catalogo';
import Gastos from './../Menu/Gastos/Gastos';
import Ayuda from './../Menu/Help/Help';

const Container = () => (
    <Switch>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/sale" component={Ventas} />
            <Route path="/reports" component={Caja} />
            <Route path="/informs" component={Informes} />
            <Route path="/catalog" component={Catalogo} />
            <Route path="/expenses" component={Gastos} />
            <Route path="/help" component={Ayuda} />
        </div>
    </Switch>  

)


export default Container;

