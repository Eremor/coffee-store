import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers';

import sls from './Timer.module.css';

interface TimerProps {
  initialTime: number
  className?: string
  path: string
}

export const Timer = memo((props: TimerProps) => {
  const {
    initialTime,
    className,
    path,
  } = props;
  const navigate = useNavigate();
  const [timeLeft, setTileLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTileLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      navigate(path);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / initialTime) * circumference;
  const angle = (360 * (timeLeft / initialTime));
  const angleInRadians = (angle * Math.PI) / 180;

  const circleX = 150 + radius * Math.cos(angleInRadians - Math.PI / 2);
  const circleY = 150 + radius * Math.sin(angleInRadians - Math.PI / 2);

  return (
    <div className={classNames(sls.Timer, [className])}>
      <svg className={sls.circle}>
        <circle
          className={sls.circleBackground}
          cx="150"
          cy="150"
          r={radius}
          strokeLinecap="round"
        />
        <circle
          className={sls.circleProgress}
          cx="150"
          cy="150"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <circle
          className={sls.circleMoving}
          cx={circleX}
          cy={circleY}
          r="5"
        />
      </svg>
      <div className={sls.container}>
        <p className={sls.text}>
          {Math.floor(timeLeft / 60).toString().padStart(2, '0')}
          :
          {(timeLeft % 60).toString().padStart(2, '0')}
        </p>
        <p className={sls.desc}>Приготовление напитка</p>
      </div>
    </div>
  );
});
