let BonusRating =
    {
        "S" : 1.8,
        "A" : 1.4,
        "B" : 1.15,
        "C" : 0.8
    }
let employee = [
    {
       "ID" : 30001,
       "Name" : "นางปรียาดา ตั้งทิพย์",
       "Department" : "บุคคล",
       "Position" : "HR",
       "Salary" : 48000,
       "Bonus" : BonusRating.A,
       //"Result" : employee[0].Bonus
    },{
        "ID" : 30002,
       "Name" : "นายณัฏฐ์ พงษ์วิโรจน์",
       "Department" : "ไอที",
       "Position" : "System Engineer",
       "Salary" : 57000,
       "Bonus" : BonusRating.S,
       //"Result" : Salary*Bonus
    },{
        "ID" : 30003,
       "Name" : "นายภูวนัย พัฒนปรีชา",
       "Department" : "การเงิน",
       "Position" : "Account",
       "Salary" : 38000,
       "Bonus" : BonusRating.B,
       //"Result" : Salary*Bonus
    },{
        "ID" : 30004,
       "Name" : "นางสาวเจนจิรา วงศ์สุรวัฒนา",
       "Department" : "บุคคล",
       "Position" : "HR",
       "Salary" : 55000,
       "Bonus" : BonusRating.A,
       //"Result" : Salary*Bonus
    },{
        "ID" : 30005,
       "Name" : "นายพนาวัฒน์ กลิ่นโพธิ์",
       "Department" : "บุคคล",
       "Position" : "HR",
       "Salary" : 13000,
       "Bonus" : BonusRating.C,
       //"Result" : Salary*Bonus
    },{
        "ID" : 30006,
       "Name" : "นายธนารีย์ ชัยเจริญ",
       "Department" : "การเงิน",
       "Position" : "Account",
       "Salary" : 41000,
       "Bonus" : BonusRating.S,
       //"Result" : Salary*Bonus
    },{
        "ID" : 30007,
       "Name" : "นายนิมมาน สยนานนท์",
       "Department" : "บุคคล",
       "Position" : "HR",
       "Salary" : 19000,
       "Bonus" : BonusRating.A,
       //"Result" : Salary*Bonus
    },{
        "ID" : 30008,
       "Name" : "นายกีรติ มากมี",
       "Department" : "การเงิน",
       "Position" : "Account",
       "Salary" : 46000,
       "Bonus" : BonusRating.C,
       //"Result" : Salary*Bonus
    },{
        "ID" : 30009,
       "Name" : "นางสาววรรณิศา",
       "Department" : "ไอที",
       "Position" : "System Engineer",
       "Salary" : 55000,
       "Bonus" : BonusRating.B,
       //"Result" : Salary*Bonus
    }]
    for (let index = 0; index < employee.length; index++) {
        console.log(employee[index],"Result = ",employee[index].Salary*employee[index].Bonus)
        Vat()
        console(Result)
    }
    
    



function Vat() {
    if (Result >= 1000000) {
        Vat = Result*100/32
    } else if (Result >= 550000 && Result < 1000000) {
        Vat = Result*100/23
    } else if (Result >= 250000 && Result < 550000) {
        Vat = Result*100/9
    } else {
       Vat = Result*1
    }
}
    