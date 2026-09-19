import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";

/**
 * Puts the view back at the top of the page on in-app navigation only.
 *
 * PUSH is a fresh entry the user created by clicking something — the header,
 * the footer, a call-to-action. POP is a refresh or the browser's back and
 * forward buttons, where the browser restores the previous scroll position on
 * its own and the user expects to land where they left off, so we stay out of
 * the way.
 */
function ScrollToTop() {
  const { key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "PUSH") return;
    window.scrollTo(0, 0);
  }, [key, navigationType]);

  return null;
}

export default ScrollToTop;
