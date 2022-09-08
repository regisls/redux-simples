import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Sorteio = props => {
    const { max, min } = props.numeros;
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um número" purple>
            <div>
                <span>
                    <span>Sorteio:</span>
                    <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio);