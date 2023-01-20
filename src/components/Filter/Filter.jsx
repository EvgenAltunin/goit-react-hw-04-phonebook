import React from 'react'   
import { Lable, Input } from "components/Filter/Filter.styled"; 
export const Filter = ({ value, onChange }) => {
    return (
        <Lable>Find contacts by name
            <Input
                type="text"
                name="filter"
                onChange={onChange}
                value={value}
            />
        </Lable>
)}
 
