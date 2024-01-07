let userInput = document.getElementById('date');
let ageResult = document.querySelector('.age-result');
let btn = document.querySelector('.btn');
// this line of code will take the maximum number of date up to the current date, 
// convert it to ISOstring format and split the string from the position of T, get the first string array [0] forming another array and removing every other array after T.
userInput.max = new Date().toISOString().split('T')[0];  // 
console.log(userInput.max);



// function to calculate the age 
    const calculateAge = () => {
        
    let ageDate = new Date(userInput.value); // the new date will now have the date of the user input value
            console.log(ageDate);

   // the user age date == d1,m1,y1
        let d1 = ageDate.getDate();  
        let m1 = ageDate.getMonth() + 1;
        let y1 = ageDate.getFullYear();

     let currentDate = new Date();  // this is now have today's date 
    
 // the current  or present date == d2,m2,y2
        let d2 = currentDate.getDate();
        let m2 = currentDate.getMonth() + 1;
        let y2 = currentDate.getFullYear();

        console.log(d2,m2,y2);

        //After this part of the code, it continues running smoothly, step by step, 
        //because each part naturally leads to the next one in order due to the decrement operator
        
        y3 = y2 - y1;

        if (m2 >= m1){
            m3 = m2 - m1;
        }else{
            y3--;
            m3 = 12 + m2 - m1;
        }
    
        if (d2 >= d1){
            d3 = d2 - d1;
        }else {
            m3--; 
            d3 = getCurrentDay(y1, m1) + d2 - d1;   // here simply calling the function and passing the argument y2 and m2 but the function returns 31 which is the result of the task its carried out 
            // therefore, d3 is 31 + d2 - d1
            console.log(d3);
        }
        if(m3 < 0){
            m3 = 11;
            y3--;
        } 
        ageResult.innerHTML = `You are ${y3}yrs, ${m3}months, ${d3}days old.`;

    }
   
    
    btn.addEventListener("click", () => {
        calculateAge ();
    })

    let getCurrentDay = (year, month) => {
         return new Date(year, month, 0).getDate();  // this line of code is tying to get the last day of the month which is 31
    }
        // we can use this 
        // let daysInLastMonth = new Date(y2, m2 - 1, 0).getDate();
        // d3 = daysInLastMonth + d2 - d1;
        // console.log(d3);
    



  

