import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

interface TimerProps {
  pauseTimer: boolean;
  initialMinutes: number;
  initialSeconds?: number;
}

const Timer = ({
  pauseTimer,
  initialMinutes,
  initialSeconds = 0,
}: TimerProps) => {
  const [time, setTime] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  });
  const router = useRouter();

  useEffect(() => {
    if (!pauseTimer) {
      if (time.minutes === 0 && time.seconds === 0) {
        router.push("/score");
      }

      const timerInterval = setInterval(() => {
        setTime((prevTime) => {
          let { minutes, seconds } = prevTime;

          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(timerInterval);
              return prevTime;
            }
            return { minutes: minutes - 1, seconds: 59 };
          }

          return { minutes, seconds: seconds - 1 };
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [time, pauseTimer]);

  return (
    <Text className="text-white text-3xl">
      {String(time.minutes).padStart(2, "0")}:
      {String(time.seconds).padStart(2, "0")}
    </Text>
  );
};

export default Timer;
