import React from 'react'
import "./Siginup.css"
export default function GenderCheckBox({onCheckboxChange,selectedGender}) {
  return (
<div className="form-control check-gender w-50 border-0 bg-transparent d-flex text-align-center justify-content-around align-items-center">

<div  className={`${selectedGender==="male"?"selected":""} form-check check-gender`}>
    <input type="checkbox" className='form-check-input check-gender' 
    checked={selectedGender==="male"}

    onChange={()=> onCheckboxChange("male")}
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
    Male
    </label>
</div>
<div htmlFor="" className={`${selectedGender==="female"?"selected":""} form-check check-gender` }>
    <input type="checkbox" className='form-check-input check-gender' 
    checked={selectedGender==="female"}
    onChange={()=> onCheckboxChange("female")} />
     <label className="form-check-label" htmlFor="flexCheckDefault">
    Female
    </label>
</div> 
 </div>
  )
}
