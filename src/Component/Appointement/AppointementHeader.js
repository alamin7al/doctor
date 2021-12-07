import React from 'react';
import Celender from './Celender';
import chair from '../../img/chair.png';
const AppointementHeader = ({date,setDate}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Celender date={date} setDate={setDate}></Celender>
                    </div>
                    <div className="col-md-6">
                    <img style={{ width: '100%' }} src={chair} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointementHeader;