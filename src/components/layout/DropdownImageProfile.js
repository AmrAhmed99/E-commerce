import React from 'react';

const DropdownImageProfile = () => {
    return (
        <React.Fragment>
            <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </React.Fragment>
    );
};

export default DropdownImageProfile;