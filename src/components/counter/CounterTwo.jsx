import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "300",
    metaText1: "Repeated",
    metaText2: "Customers",
    animationDelay: "100",
    colClass: "",
  },
  {
    startCount: "0",
    endCount: "3",
    metaText1: "Square meter",
    metaText2: "Carpet installed",
    animationDelay: "200",
    colClass: "text-xl-end",
  },
];

const CounterTwo = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div className={`col-xs-12 col-md-6 col-xl-3 ${val.colClass}`} key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            {/* <!--Counter Up--> */}
            <div className="ptf-counter-up ptf-counter-up--style-2">
              <div className="ptf-counter-up__value">
                {" "}
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>+
              </div>
              <h5 className="ptf-counter-up__title">
                {val.metaText1} <br />
                {val.metaText2}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CounterTwo;
