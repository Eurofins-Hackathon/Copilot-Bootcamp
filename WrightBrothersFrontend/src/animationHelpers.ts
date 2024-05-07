// animations.js
import gsap from "gsap";
import { MutableRefObject, RefObject } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export const flyingAway = (planeRef: MutableRefObject<null>, onCompleted = () => {}

) => {
  gsap.to(planeRef.current, {
    duration: 2,
    x: "100vw",
    y: "-30vh",
    scale: 1.5,
    rotation: 20,
    opacity: 0,
    // hide after animation
    onComplete: () => {
      onCompleted();
    },
  });
};

export const animateManeuvers = (airplaneRef: MutableRefObject<null>, maneuvers: string) => {
    const timeline = gsap.timeline();
    const maneuversArray = maneuvers.split('-');

    maneuversArray.forEach(maneuver => {
      const type = maneuver.charAt(0);
      const repeat = parseInt(maneuver.charAt(1));
      const difficulty = maneuver.charCodeAt(2) - 64; // Convert A-E to 1-5

      switch (type) {
        case 'L': // Loop
          timeline.to(airplaneRef.current, {
            motionPath: {
              path: [{x: 0, y: 0}, {x: 100, y: 0}, {x: 100, y: 100}, {x: 0, y: 100}],
              curviness: 1.5
            },
            repeat: repeat,
            duration: difficulty
          });
          break;
        case 'H': // Hammerhead
          timeline.to(airplaneRef.current, {
            rotation: 180,
            x: "+=100",
            repeat: repeat,
            duration: difficulty
          });
          break;
        case 'R': // Roll
          timeline.to(airplaneRef.current, {
            rotation: 360,
            y: "+=100",
            repeat: repeat,
            yoyo: true,
            duration: difficulty
          });
          break;
        case 'S': // Spin
          timeline.to(airplaneRef.current, {
            rotation: 360,
            repeat: repeat,
            duration: difficulty
          });
          break;
        case 'T': // Tailslide
          timeline.to(airplaneRef.current, {
            rotation: 180,
            x: "-=100",
            repeat: repeat,
            duration: difficulty
          });
          break;
        default:
          break;
      }
    });
};


export const animateInitialFlight = (planeRef: MutableRefObject<null>) => {
  gsap.to(planeRef.current, {
    duration: 3,
    repeat: -1, // Loop indefinitely
    ease: "linear",
    motionPath: {
      path: describeSvgArc(100, 100, 80, 0, 359), // Circular path
      autoRotate: true,
    },
  });
};

export const animateLanded = (planeRef: MutableRefObject<null>) => {
  gsap.killTweensOf(planeRef.current);

  gsap.to(planeRef.current, {
    scale: 1.2,
    y: "0",
    ease: "power1.in",
    duration: 1,
    rotation: 0,
    // right
    right: "300",
    top: "50",
  });
};

export const animateCrashed = (
  planeRef: MutableRefObject<null>,
  explosionRef: MutableRefObject<null>,
  debrisRefs: MutableRefObject<RefObject<unknown>[]>
) => {
  gsap.killTweensOf(planeRef.current);

  gsap.to(planeRef.current, {
    y: 300,
    opacity: 0,
    duration: 2,
    ease: "power1.in",
  });

  const tl = gsap.timeline();
  tl.to(explosionRef.current, {
    scale: 1.5,
    opacity: 1,
    backgroundColor: "#ffff00",
    duration: 0.1,
  }).to(explosionRef.current, { scale: 0, opacity: 0, duration: 0.2 });

  debrisRefs.current.forEach((ref) => {
    const isCircle = Math.random() > 0.5;
    const size = randomRange(5, 15);

    const current = ref.current as HTMLElement;

    current.style.width = `${size}px`;
    current.style.height = `${size}px`;
    current.style.borderRadius = isCircle ? "50%" : "0";

    gsap.fromTo(
      current,
      { opacity: 0, x: 0, y: 0 },
      {
        opacity: 1,
        x: randomRange(-200, 200),
        y: randomRange(-200, 200),
        duration: 1.5,
        ease: "power2.out",
      }
    );
  });
};

function describeSvgArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Helper function to convert polar coordinates to Cartesian
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
