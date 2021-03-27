import DegreeFilterOption from './DegreeFilterOption'
import { ButtonToolbar } from 'react-bootstrap'

const DegreeFilterCard = ({data, handlePick}) => {


    return (
        <ButtonToolbar>
                {data.map(function(degree){
                    return (
                        <DegreeFilterOption 
                         name={degree.name} 
                         courses={degree.courses}
                         handlePick={handlePick}
                        />
                    )
                })}
        </ButtonToolbar>
    )
}

export default DegreeFilterCard
