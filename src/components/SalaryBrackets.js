

function SalaryBrackets(salary) {
 
   //
   
   //if( salary<=4100){return [(((salary-3300) * 0.25)+ 0),salary - 3000]}else
   //if(salary<=6100){return (((salary - 4100)* 0.30) +200)}else
   //if(salary>=6100){return (((salary - 6100) * 37.50) + 830)}

   if(salary <= 3300){return 0} else
   if( salary<=4100){return ((salary- 3300) * 0.25)}else
   if(salary<=6100){return (200 + (salary - 4100) * 0.30)}else
   if(salary>=6100){return (830+(salary - 6100) * 0.37) }
}

export default SalaryBrackets
