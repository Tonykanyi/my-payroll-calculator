let form=document.getElementById("my_form")
let  table=document.getElementById("my_table")
form.addEventListener(
    "submit",function(e){
        e.preventDefault()
        let basic_salary=Number(document.getElementById("bsalary").value);
        let benefits=Number(document.getElementById("benefit").value);
        
        if( basic_salary&& benefits){
            let gross_salary=calc_gross(basic_salary,benefits)
            document.getElementById("Gross_salary").innerText=gross_salary
            let nssf=calc_nssf(gross_salary)
            document.getElementById("NSSF").innerText=nssf
            let nhdf=calc_nhdf(gross_salary)
            document.getElementById("NHDF").innerText=nhdf
            let taxable_income=calc_taxable_income(gross_salary,nssf,nhdf)
            document.getElementById("Taxable_income").innerText=taxable_income
            let payee=calc_payee(taxable_income)
            document.getElementById("Final_payee").innerText=payee
            let nhif=calc_nhif(gross_salary)
            document.getElementById("NHIF").innerText=nhif
            let net_pay=calc_net_pay(gross_salary,nhif,nhdf,nssf,payee)
            document.getElementById("Net_pay").innerText=net_pay
        }else{
            alert("input all fields")
        }
    }
    
)
function calc_gross(b, x) {
    let gross_salary = b + x
    return gross_salary
}
function calc_nssf(gross_salary,nssf_rate=0.06){
    if(gross_salary>18000 && gross_salary<18000){
         nssf=(gross_salary*nssf_rate)
    }else{
        gross_salary=18000
         nssf=(gross_salary*nssf_rate)
    }return nssf
      
}
function calc_nhdf(gross_salary,nhdf_rate=0.015){
    let nhdf=gross_salary*nhdf_rate
    return nhdf
}
function calc_taxable_income(gross_salary,nssf,nhdf){
    let taxable_income=gross_salary-(nssf+nhdf)
    return taxable_income
}
function calc_payee(taxable_income){
    if (taxable_income <=24000){
        payee=(taxable_income*0.01)-(2400)
    }else if(taxable_income>24000 &&taxable_income<32333){
        payee=(24000*0.1)+(taxable_income-24000)*0.25-(2400)
    }else{payee=(2400*0.1)+(taxable_income-24000)*0.25 +(taxable_income-32333)*0.3-(2400)
    }return payee
    }
    function calc_nhif(gross_salary){
        if (gross_salary<5999){
            nhif=150
        }
        else if(gross_salary<7999){
            nhif=300
        }
        else if(gross_salary<11999){
            nhif=400
        }
        else if(gross_salary<14999){
            nhif=500
        }
        else if(gross_salary<19999){
            nhif=600
        }
        else if(gross_salary<24999){
            nhif=750
        }
        else if(gross_salary<29999){
            nhif=850
        }
        else if(gross_salary<34999){
            nhif=900
        }
        else if(gross_salary<39999){
            nhif=950
        }
        else if(gross_salary<44999){
            nhif=1000
        }
        else if(gross_salary<49999){
            nhif=1100
        }
        else if(gross_salary<59999){
            nhif=1200
        }
        else if(gross_salary<69999){
            nhif=1300
        }
        else if(gross_salary<79999){
            nhif=1400
        }
        else if(gross_salary<89999){
            nhif=1500
        }
        else if(gross_salary<99999){
            nhif=1600
        }
        else{
            nhif=1700
        }return nhif
    }
    function calc_net_pay(gross_salary,nhif,nhdf,nssf,payee){
        net_pay=gross_salary-(nhif+nhdf+nssf+payee)
        return net_pay
    }
