import ReactGA from "react-ga4";

const usePageTracking = (pathname: string) => {

  if (process.env.REACT_APP_PRODUCTION_MODE === 'on') {
    ReactGA.initialize(String(process.env.REACT_APP_TRACKING_ID));
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
    });
  }

};

export default usePageTracking;