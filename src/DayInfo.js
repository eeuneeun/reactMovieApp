import React from "react";

function DayInfo(){
        const yesterday ="";
        const date = new Date();

        yesterday = date.getFullYear;
        yesterday = yesterday + date.getMonth;
        yesterday = yesterday + date.getDate;
        console.log(yesterday);
        return yesterday;
}

export default DayInfo;