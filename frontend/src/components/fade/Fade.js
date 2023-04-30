import React from 'react'
import  './fade.css'
import Me12 from "../../img/me12.png"
import Me2 from "../../img/me2.png"

import f15 from "../../img/f15.png"
import f22 from "../../img/f22.png"




function Fade() {
  return (
    

    <div className="i-right">

    <div className="fadeL">
    <img src={f15} alt=""  />
</div>
<div className="fadeR">
    <img src={f22} alt=""  />
</div>
<div className="silhouettes">
    <img src={Me12} alt=""  />
</div>
<div className="sil">
    <img src={Me2} alt=""  />
</div>

        </div>

     


  )
}

export default Fade