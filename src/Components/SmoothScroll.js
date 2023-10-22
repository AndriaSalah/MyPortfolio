import Scrollbar from 'smooth-scrollbar';
import {useEffect} from "react";

const SmoothScroll = ({
                          damping = 0.1,
                          thumbMinSize= 20,
                          renderByPixels = true ,
                          alwaysShowTracks= false,
                          continuousScrolling= true,
                          wheelEventTarget= null,
                          plugins={},
                          Target="body"
                      }) => {
    const options = {
        damping: damping,
        thumbMinSize: thumbMinSize,
        renderByPixels: renderByPixels,
        alwaysShowTracks: alwaysShowTracks,
        continuousScrolling: continuousScrolling,
        wheelEventTarget: wheelEventTarget,
        plugins: {...plugins}
    }
    useEffect(() => {
        console.log(document.querySelector(Target))
        Scrollbar.init(document.querySelector(Target), options);
    }, []);
    return null
};

export default SmoothScroll;