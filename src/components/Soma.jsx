import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Soma = props => {
    const { min, max } = props.numeros;

    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max)}</strong>
                </span>
            </div>
        </Card>
    )
};

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Soma);