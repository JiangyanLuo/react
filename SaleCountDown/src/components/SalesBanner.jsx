import {useState, useEffect} from "react";
import {format,differenceInSeconds } from "date-fns";
import {SlFire} from "react-icons/sl";

function SaleBanner() {
  // set the start time
  const startDateString = "2023-09-16T20:00";
  const durationInDays = 5;

  const startDate = new Date(startDateString);
  const endDate = startDate.setDate(startDate.getDate() + durationInDays);

  const formattedEndDate = format(endDate, 'MMMM dd,yyyy HH:mm');

  const[timeleft,setTimeleft] = useState(calculateTimeLeft(endDate));

  function calculateTimeLeft(endDate) {
    const currentDate = new Date();
    const difference = differenceInSeconds(endDate,currentDate);

    if(difference <=0) {
      return {days:0, hours:0, minutes:0,seconds:0}
    }

    const days = Math.floor(difference / 60 / 60 / 24);
    const hours = Math.floor(difference / 60 / 60 % 24);
    const minutes = Math.floor(difference / 60 % 60);
    const seconds = Math.floor(difference % 60);

    return{days, hours, minutes, seconds};
  }

  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimeleft(calculateTimeLeft(endDate));
    },1000);

    //clean up effect
    return () => clearInterval(timer);
  },[endDate]);

  return (
    <>
      <div className="h-20 max-w-7xl mx-auto sm:px-6 lg:px-8 lg:shadow-lg bg-black flex flex-col items-center justify-center text-white sm:text-xl">
        <div className="text-2xl flex items-center"><SlFire className="mr-2" />BOGO 50% Off !</div>
        {timeleft.days <= 0 && timeleft.hours <= 0 && timeleft.minutes <= 0 && timeleft.seconds <= 0 
        ? 
        <p>Sorry, sale ended on {formattedEndDate}.</p> 
        : 
        <p>Sale ends in <strong>{timeleft.days}</strong> Days <strong>{timeleft.hours}</strong> Hours <strong>{timeleft.minutes}</strong> Minutes <strong>{timeleft.seconds}</strong> Seconds.</p> }
      </div>
    </>
  );
}

export default SaleBanner;
