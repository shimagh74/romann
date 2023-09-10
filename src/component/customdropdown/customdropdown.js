import React from 'react';

const CutomDropDown = ({
    lable,
    className,
    lists,
    onChange,
    value,
    onClick,
    stylesdropdown,
    styleslable,
    defaultValue,
    disabled,
    hidden
}) => {
    
    return (
        <div className={stylesdropdown}>
            {/* <div className={styleslable}>{lable}</div> */}
            <select {...{onChange,className,value,onClick,defaultValue}} >
                <option selected disabled={disabled} hidden = {hidden}>{defaultValue}</option>
                {lists
                    ? lists.map((list, index) => {
                        return <option value={JSON.stringify(list)} key={list.id}>{list.name}</option>
                    })
                    : null}

            </select>
        </div>

    )

}
export default CutomDropDown;