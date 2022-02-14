// import React, { useState } from 'react'
// import {
//     HeroContainer,
//     HeroContent,
//     HeroH1,
//     HeroP,
//     HeroBtnWrapper,
//     ArrowForward,
//     ArrowRight
// } from './HeroElements';
// import {Button} from '../ButtonElement';

// const HeroSection = () => {

//     const [hover, setHover] = useState(false);

//     const onHover = () => {
//         setHover(!hover)
//     }
//     return (
//         <HeroContainer id="home">
//             <HeroContent>
//                 <HeroH1>Welcome To My Page!</HeroH1>
//                 <HeroP>
//                     I'm a software Engineer at Accenture.
//                 </HeroP>
//                 <HeroBtnWrapper>
//                     <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>
//                         Contact me! {hover ? <ArrowForward /> : <ArrowRight />}
//                     </Button>
//                 </HeroBtnWrapper>
//             </HeroContent>
//         </HeroContainer>
//     )
// }

// export default HeroSection