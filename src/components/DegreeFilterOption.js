import { Button, ButtonGroup} from 'react-bootstrap'
import { useState } from 'react'

const DegreeFilterOption = ({name, courses, handlePick}) => {

    const [isPicked, setIsPicked] = useState(false);

    return (
        <div>
            <ButtonGroup className='mr-2 mt-2 ml-2'>
                <Button 
                onClick={() => {
                    setIsPicked(!isPicked)
                    handlePick(courses)
                }}
                active={isPicked? true : false}
                >
                    {name}
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default DegreeFilterOption
