Date.prototype.daysInMonth = function(){
    return 33 - new Date(this.getFullYear(),this.getMonth(),33).getDate();
};

const resttime = (end_date) => {
    let now = Date.now();
    let resttime = end_date - now;

    if (resttime < 0) return "время истекло";
    
    let days_in_month = new Date().daysInMonth();
    
    let s = Math.floor(resttime / 1000 % 60);
    let m = Math.floor(resttime / 1000 / 60 % 60);
    let h = Math.floor(resttime / 1000 / 60 / 60 % 24);
    let d = Math.floor(resttime/ 1000 / 60 / 60 / 24 % days_in_month);
    // let str = String(d)+"d "+String(h)+"h:"+String(m)+"m:"+String(s)+"s"
    // console.log(str)
    return String(d)+"d "+String(h)+"h:"+String(m)+"m:"+String(s)+"s";
}
 
export default resttime;