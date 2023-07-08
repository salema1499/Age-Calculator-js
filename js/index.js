let userInput=document.getElementById('date')
userInput.max=new Date().toISOString().split("T")[0];



let res=document.getElementById('res')

    function getElementByIdCalculateAge(){
        let birthDay=new Date(userInput.value);


        let d1=birthDay.getDate();
        let m1=birthDay.getMonth()+1;
        let y1=birthDay.getFullYear();

        let toDay=new Date();

        let d2=toDay.getDate();
        let m2=toDay.getMonth()+1;
        let y2=toDay.getFullYear();

        let d3,m3,y3
        y3=y2-y1
        if(m2>=m1){
            m3=m2-m1;
        }else{
            y3--;
            m3=12+m2-m1
        }

        if(d2>=d1){
            d3=d2-d1;
        }else{
          m3--;
          d3= getDaysInMOnth(y1,m1)+d2-d1
        }
       if(m3<0){
           m3=11;
           y3--;

        }
        res.innerHTML=`You are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old`
    }

    function getDaysInMOnth(year,month){
        return new Date(year,month,0).getDate();
    }