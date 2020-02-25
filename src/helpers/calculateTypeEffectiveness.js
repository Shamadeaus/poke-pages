import typeChart from '../resources/typeChart'
import _ from 'lodash'

const calculateTypeEffectiveness = (type1, type2) => {
    const type1Chart = typeChart[type1]
    const type2Chart = typeChart[type2]

    if (type2) {
        return _.reduce(type1Chart, (newChart, effectiveness, type) => {
            const updatedType = type2Chart[type] * effectiveness
            return {...newChart, [type]: updatedType}
        }, {})
    } else {
        return type1Chart
    }
}

export default calculateTypeEffectiveness
