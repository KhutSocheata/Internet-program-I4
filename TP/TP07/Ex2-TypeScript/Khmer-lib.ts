class KhmerDate {
    now: Date = new Date();
    khmerNum(num: number){
        let khmerNumber = '';
     let numbersKhmer = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
        let numInteger = num ;
    let numString = numInteger.toString();
        for( let i=0; i < numString.length; i++ ) {
            khmerNumber += numbersKhmer[parseInt(numString[i])];
        }
        return khmerNumber;
    }
    // Current date 
    check(date: Date=new Date()): void{

        let time = this.now.getTime() - date.getTime();
        let seconds = Math.floor(time / 1000),
        minutes = Math.floor(seconds / 60),
        hours   = Math.floor(minutes / 60),
        days    = Math.floor(hours / 24),
        weeks   = Math.floor(days/7),
        months  = Math.floor(days / 30),
        years   = Math.floor(days / 365);
        seconds %= 60;
        minutes %= 60;
        hours %= 24;
        days %=7 ;
        weeks %=4.258;
        months %= 12;
        
//Condition 
        if(years>=1){
            console.log(this.khmerNum(years),"ឆ្នាំមុន"); 
        }
        else if(years<1){
            if(months>=1){
                console.log(this.khmerNum(months),"ខែមុន");
            }
            else if(months<1){
                if (weeks>=1){
                    console.log(this.khmerNum(weeks),"សប្ដាហ៌មុន");
                }
                else if (weeks<1){
                    if(days>=1){
                        console.log(this.khmerNum(days),"ថ្ងៃមុន");
                    }
                    else if (days<1){
                        if(hours>=1){
                            console.log(this.khmerNum(hours),"ម៉ោងមុន");
                        }
                        else if (hours<1){
                            if(minutes>=1){
                                console.log(this.khmerNum(minutes),"នាទីមុន");
                            }
                            else if(minutes<1){
                                console.log("មុន នេះបន្តិច")
                            }
                        }
                    }
                }
            }
        }
    }
}
export {KhmerDate}