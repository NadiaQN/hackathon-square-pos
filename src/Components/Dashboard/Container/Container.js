import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalogo from './../Menu/Catalogo/Catalogo';
import Informes from './../Menu/Informes/Informes';
import Transacciones from './../Menu/Transacciones/Transacciones';
import Registros from './../Menu/Registros/Registros';

const Container = () => (
    <Switch>
        <div>
            <Route exact path="/" component={Catalogo} />
            <Route path="/transactions" component={Transacciones} />
            <Route path="/records" component={Registros} />
            <Route path="/reports" component={Informes} />
        </div>
    </Switch>  

)


export default Container;

